import async from 'async';
import passport from 'passport';
import { handleMail } from '../../core';
import { welcomeEmail, passwordModifiedEmail, forgotPasswordEmail } from '../../core/mailer/mailContent';
import User from '../user/user.model';
import UserRole from '../user/userRole.model';
import Role from '../role/role.model';
import { responseHandler, encryptPassword, generateVerifyCode } from '../../utils';
import signToken from './signToken';

const debug = require('debug')('boldr:auth:controller');

/**
 * register creates a new account in the database.
 * @param req
 * @param res
 * @returns {*}
 */
async function register(req, res) {
  try {
    // look for a matching email address
    const checkUser = await User.query().where('email', req.body.email);
    // if an email matching the req is found
    if (checkUser.length) {
      // return with error
      return responseHandler(new Error('A user with that email already exists'), res, 409);
    }

    const hash = await encryptPassword(req.body.password);
    const verificationToken = await generateVerifyCode();
    const userInfo = {
      email: req.body.email,
      password: hash,
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
  } catch (e) {
    return responseHandler(e, res, 500);
  }
}

/**
 * login takes an email address and password, check the database, and issues a JWT.
 * @param req
 * @param res
 * @param next
 */
async function login(req, res, next) {
  const user = await User.query().where({ email: req.body.email }).eager('role').first();
  passport.authenticate('local', (err, user, info) => {
    const error = err || info;
    if (error) {
      responseHandler(new Error('Wrong username or password'), res, 422);
    }
    if (!user) {
      responseHandler(new Error('Wrong username or password'), res, 422);
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
    // return res.json({ token, user });
  })(req, res, next);
}


async function verify(req, res) {
  try {
    const verifToken = req.params.verifToken;

    if (!verifToken) {
      return responseHandler(new Error('Invalid registration link', res, 400));
    }

    const user = await User.query().where({ account_token: req.params.verifToken });
    await User.query().patchAndFetchById(user.id, { verified: true });

    return responseHandler(null, res, 201, user);
  } catch (e) {
    return responseHandler(e, res, 500);
  }
}

async function checkUser(req, res) {
  const userId = req.user.id;
  const validUser = await User.query().where({ id: userId }).eager('role').first();
  if (!validUser) {
    return responseHandler(new Error('Invalid user', res, 404));
  }
  validUser.stripPassword();
  return responseHandler(null, res, 200, { user: validUser });
}

/**
 * forgottenPassword takes an email address, generates a reset token, updates the user in the database, then sends
 * an email with the token to reset the account password.
 * @param req
 * @param res
 * @returns {*}
 */
async function forgottenPassword(req, res) {
  try {
    const user = await User.query().where({ email: req.body.email }).first();
    if (!user) {
      return responseHandler(new Error('No such user exists'), res, 404);
    }
    const mailSubject = '[Boldr] Password Reset';
    const token = generateVerifyCode();
    await User.query().patchAndFetchById(user.id, { reset_password_token: token, reset_password_expiration: new Date(Date.now() + 3600000) });

    const mailBody = forgotPasswordEmail(user);

    await handleMail(user, mailBody, mailSubject);
    return responseHandler(null, res, 200, { message: 'Sending email with reset link' });
  } catch (e) {
    return responseHandler(e, res, 500);
  }
}

/**
 * resetPassword takes the user's reset_password_token, and a new password, hashes it and updates the password
 * @param req
 * @param res
 * @returns {*}
 */
async function resetPassword(req, res) {
  try {
    const user = await User.query().where({ reset_password_token: req.body.token }).first();
    if (!user) {
      return responseHandler(new Error('Invalid user', res, 404));
    }
    const mailSubject = '[Boldr] Password Changed';
    const hash = await User.encryptPassword(req.body.password);
    await User.query().patchAndFetchById(user.id, {
      password: hash,
      reset_password_expiration: null,
      reset_password_token: null
    });
    const mailBody = await passwordModifiedEmail(user);
    handleMail(user, mailBody, mailSubject);
    return res.status(200).json('Sent');
  } catch (error) {
    return responseHandler(error, res, 500);
  }
}

export { register, login, verify, checkUser, forgottenPassword, resetPassword };
