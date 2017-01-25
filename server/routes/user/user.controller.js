/* @flow */
import type { $Response, $Request, NextFunction } from 'express';
import uuid from 'uuid';
import * as objection from 'objection';
import { mailer, signToken } from '../../services/index';
import { welcomeEmail } from '../../services/mailer/templates';
import Token from '../../models/token';
import {
  responseHandler,
  generateHash,
  UserNotVerifiedError,
  NotFound,
  BadRequest,
  InternalServer,
  Unauthorized,
  Conflict,
} from '../../core';
import User from '../../models/user';

const debug = require('debug')('boldrAPI:user-controller');

export async function listUsers(req: $Request, res: $Response, next: NextFunction) {
  try {
    const users = await User.query().eager('[roles]').omit(['password']);
    debug(users);
    if (!users) {
      const err = new NotFound();
      return next(err);
    }
    return responseHandler(res, 200, users);
  } catch (error) {
    const err = new BadRequest(error);
    return next(err);
  }
}

export async function getUser(req: $Request, res: $Response, next: NextFunction) {
  try {
    const user = await User.query()
    .findById(req.params.id)
    .eager('[roles]')
    .omit(['password']);

    return responseHandler(res, 200, user);
  } catch (error) {
    const err = new BadRequest(error);
    return next(err);
  }
}

export function updateUser(req: $Request, res: $Response, next: NextFunction) {
  if ('password' in req.body) {
    req.assert('password', 'Password must be at least 4 characters long').len(4);
  }
  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).json(errors);
  }

  return User.query()
    .patchAndFetchById(req.params.id, req.body)
    .then(user => res.status(202).json(user));
}

export async function adminUpdateUser(req: $Request, res: $Response, next: NextFunction) {
  try {
    if (req.body.role) {
      const u = await User.query().findById(req.params.id).eager('roles');
      await u
         .$relatedQuery('roles')
         .unrelate();

      const newRole = await u.$relatedQuery('roles').relate({ id: req.body.role });

      debug(newRole);
    }
    const payload = {
      display_name: req.body.display_name,
      bio: req.body.bio,
      // role: req.body.role,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      avatar_url: req.body.avatar_url,

    };
    User.query()
      .patchAndFetchById(req.params.id, payload)
      .then(user => res.status(202).json(user));
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function destroyUser(req: $Request, res: $Response, next: NextFunction) {
  try {
    await User
      .query()
      .findById(req.params.id)
      .then(user => {
        return user.$relatedQuery('tokens').delete();
      });
    await User.query().deleteById(req.params.id);

    return res.status(204).json({ message: 'User deleted.' });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function adminCreateUser(req: $Request, res: $Response, next: NextFunction) {
   // the data for the user being created.
  const payload = {
    id: uuid(),
       // no need to hash here, its taken care of on the model instance
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    display_name: req.body.display_name,
    avatar_url: req.body.avatar_url,
  };
  const checkExisting = await User.query().where('email', req.body.email);

  if (checkExisting.length) {
    return next(new Conflict());
  }
  const newUser = await objection.transaction(User, async (User) => {
    const user = await User.query().insert(payload);
    await user.$relatedQuery('roles').relate({ id: 1 });

    if (!user) {
      return next(new NotFound());
    }
     // generate user verification token to send in the email.
    const verificationToken = await generateHash();
     // get the mail template
    const mailBody = await welcomeEmail(verificationToken);
     // subject
    const mailSubject = 'Boldr User Verification';
     // send the welcome email
    mailer(user, mailBody, mailSubject);
     // create a relationship between the user and the token
    const verificationEmail = await user.$relatedQuery('tokens')
       .insert({
         user_verification_token: verificationToken,
         user_id: user.id,
       });

    if (!verificationEmail) {
      return next(new InternalServer());
    }
  });
   // Massive transaction is finished, send the data to the user.
  return responseHandler(res, 201, newUser);
}
