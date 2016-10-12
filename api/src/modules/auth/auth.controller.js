import passport from 'passport';
import uuid from 'node-uuid';
import handleMail from '../../mailer';
import { welcomeEmail, passwordModifiedEmail, forgotPasswordEmail } from '../../mailer/mailContent';
import User from '../user/user.model';
import { responseHandler, generateVerifyCode } from '../../utils';
import * as errs from '../../utils/errors';
import signToken from './signToken';

const debug = require('debug')('boldr:auth:controller');

/**
 * register creates a new account in the database.
 * @param req
 * @param res
 * @returns {*}
 */
async function register(req, res, next) {
  try {
    // Param validation
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('password', 'Password cannot be blank').notEmpty();
    req.assert('display_name', 'Display name must not be empty').notEmpty();
    req.assert('first_name', 'First name must not be empty').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });
    const errors = req.validationErrors();
    if (errors) {
      return res.status(400).send(errors);
    }

    // look for a matching email address
    const checkUser = await User.query().where('email', req.body.email).first();
    // if an email matching the req is found
    if (checkUser) {
      // return with error
      return next(new errs.EmailTakenError());
    }
    const verificationToken = await generateVerifyCode();
    const userInfo = {
      id: uuid.v4(),
      // no need to hash here, its taken care of on the model instance
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      display_name: req.body.display_name,
      location: req.body.location,
      bio: req.body.bio,
      avatar_url: req.body.avatar_url,
      account_token: verificationToken
    };

    const user = await User.query().insert(userInfo);
    await user.$relatedQuery('role').insert({ name: 'Member' });
    const mailBody = await welcomeEmail(user);
    const mailSubject = 'Boldr Account Verification';
    handleMail(user, mailBody, mailSubject);
    // remove the password from the response.
    user.stripPassword();
    return res.status(201).json(user);
  } catch (error) {
    return next(new errs.EmailTakenError(error));
  }
}

/**
 * login takes an email address and password, check the database, and issues a JWT.
 * @param req
 * @param res
 * @param next
 */
async function login(req, res, next) {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Email cannot be blank').notEmpty();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });
  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).send(errors);
  }
  await User.query().where({ email: req.body.email }).eager('role').first();
  passport.authenticate('local', (err, user, info) => {
    const error = err || info;
    if (error) {
      return next(new errs.InvalidCredentialsError());
    }
    if (!user) {
      return next(new errs.InvalidCredentialsError());
    }
    if (!user.verified) {
      return next(new errs.AccountNotVerifiedError());
    }
    return req.logIn(user, (loginErr) => {
      if (loginErr) return res.status(401).json({ message: loginErr });
      // remove the password from the response.
      user.stripPassword();
      // sign the token
      const token = signToken(user);
      req.user = user;
      res.set('authorization', signToken(user));
      // req.role = user.role[0].id;
      debug(req.session);
      return res.json({ token, user });
    });
  })(req, res, next);
}


async function verify(req, res, next) {
  try {
    const verifToken = req.params.verifToken;

    if (!verifToken) {
      return res.status(400).json('Invalid registration link');
    }

    const user = await User.query().where({ account_token: req.params.verifToken }).first();
    await User.query().patchAndFetchById(user.id, { verified: true });

    return responseHandler(null, res, 201, user);
  } catch (e) {
    return responseHandler(e, res, 500);
  }
}

async function checkAuthentication(req, res, next) {
  try {
    const userId = req.user.id;
    const validUser = await User.query().where({ id: userId }).eager('role').first();
    if (!validUser) {
      return next(new errs.UserNotFoundError());
    }
    validUser.stripPassword();
    return responseHandler(null, res, 200, { user: validUser });
  } catch (error) {
    return next(new errs.InternalError(error));
  }
}

/**
 * forgottenPassword takes an email address, generates a reset token, updates the user in the database, then sends
 * an email with the token to reset the account password.
 * @param req
 * @param res
 * @returns {*}
 */
async function forgottenPassword(req, res, next) {
  try {
    const user = await User.query().where({ email: req.body.email }).first();
    if (!user) {
      return next(new errs.UserNotFoundError());
    }
    const mailSubject = '[Boldr] Password Reset';
    const token = generateVerifyCode();
    await User
      .query()
      .patchAndFetchById(user.id, {
        reset_password_token: token,
        reset_password_expiration: new Date(Date.now() + 3600000)
      });

    const mailBody = forgotPasswordEmail(user);

    await handleMail(user, mailBody, mailSubject);
    return responseHandler(null, res, 200, { message: 'Sending email with reset link' });
  } catch (e) {
    return next(new errs.InternalError(e));
  }
}

/**
 * resetPassword takes the user's reset_password_token, and a new password, hashes it and updates the password
 * @param req
 * @param res
 * @returns {*}
 */
async function resetPassword(req, res, next) {
  try {
    const user = await User.query().where({ reset_password_token: req.body.token }).first();
    if (!user) {
      return next(new errs.UserNotFoundError());
    }
    const mailSubject = '[Boldr] Password Changed';

    await User.query().patchAndFetchById(user.id, {
      password: req.body.password,
      reset_password_expiration: null,
      reset_password_token: null
    });
    const mailBody = await passwordModifiedEmail(user);
    handleMail(user, mailBody, mailSubject);
    return res.status(200).json('Sent');
  } catch (error) {
    return next(new errs.InternalError(error));
  }
}

export { register, login, verify, checkAuthentication, forgottenPassword, resetPassword };
