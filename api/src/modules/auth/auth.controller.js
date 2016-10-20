import passport from 'passport';
import uuid from 'node-uuid';
import * as objection from 'objection';
import handleMail from '../../mailer';
import { welcomeEmail } from '../../mailer/templates';
import Account from '../account/account.model';
import {
  responseHandler,
  generateHash,
  InternalServer,
  NotFound,
  BadRequest,
  Conflict,
  AccountNotVerifiedError,
  signToken
} from '../../core';

const debug = require('debug')('boldr:auth:controller');

/**
 * register creates a new account in the database.
 * @param req
 * @param res
 * @returns {*}
 */
async function register(req, res, next) {
    // Param validation
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Email cannot be blank').notEmpty();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  const errors = req.validationErrors();
  if (errors) {
    return next(new BadRequest());
  }

    // the data for the account being created.
  const accountInfo = {
    id: uuid.v4(),
      // no need to hash here, its taken care of on the model instance
    email: req.body.email,
    password: req.body.password
  };
  const checkExisting = await Account.query().where('email', req.body.email);
  debug(checkExisting);
  if (checkExisting.length) {
    return next(new Conflict());
  }
  const newAccount = await objection.transaction(Account, async (Account) => {
    const account = await Account
        .query()
        .insert(accountInfo);
    await account.$relatedQuery('role').relate({ id: 1 });

    if (!account) {
      throwNotFound();
    }
    // here we create the profile
    // only inserting the uuid because creating the account doesnt require any of the data
    // you would find in the profile.
    const profile = await account.$relatedQuery('profile').insert({ id: uuid.v4() });
    if (!profile) {
      throwNotFound();
    }
    // generate account verification token to send in the email.
    const verificationToken = await generateHash();
    // get the mail template
    const mailBody = await welcomeEmail(verificationToken);
    // subject
    const mailSubject = 'Boldr Account Verification';
    // send the welcome email
    handleMail(account, mailBody, mailSubject);
    // create a relationship between the account and the token
    const verificationEmail = await account.$relatedQuery('token')
      .insert({
        id: uuid.v4(),
        account_verification_token: verificationToken,
        account_id: account.id
      });

    if (!verificationEmail) {
      throwNotFound();
    }
  });
  // Massive transaction is finished, send the data to the user.
  return res.status(201).json(newAccount);
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

  await Account.query().where({ email: req.body.email }).eager('[profile, role]').first();
  passport.authenticate('local', (err, account, info) => {
    const error = err || info;
    if (error) {
      return next(new InternalServer());
    }
    if (!account) {
      return next(new NotFound());
    }
    if (!account.verified) {
      return next(new AccountNotVerifiedError());
    }
    return req.logIn(account, (loginErr) => {
      if (loginErr) return res.status(401).json({ message: loginErr });
      // remove the password from the response.
      account.stripPassword();
      // sign the token
      const token = signToken(account);
      req.user = account;
      res.set('authorization', signToken(account));
      // req.role = user.role[0].id;
      debug(req.session);
      return res.json({ token, account });
    });
  })(req, res, next);
}


async function verify(req, res, next) {
  try {
    const verifToken = req.params.verifToken;

    if (!verifToken) {
      return res.status(400).json('Invalid registration link');
    }

    const account = await Account.query().where({ account_token: req.params.verifToken }).first();
    await Account.query().patchAndFetchById(account.id, { verified: true });

    return responseHandler(null, res, 201, account);
  } catch (e) {
    return responseHandler(e, res, 500);
  }
}

async function checkAuthentication(req, res, next) {
  try {
    const validAccount = await Account.query().findById(req.user.id).eager('[profile, role]');
    if (!validAccount) {
      return next(new NotFound());
    }
    validAccount.stripPassword();
    return responseHandler(null, res, 200, validAccount);
  } catch (error) {
    return next(new InternalServer());
  }
}

function throwNotFound() {
  const error = new Error();
  error.statusCode = 404;
  throw error;
}

export { register, login, verify, checkAuthentication };
