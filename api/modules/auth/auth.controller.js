import async from 'async';
import { handleMail } from '../../core';
import { welcomeEmail, passwordModifiedEmail, forgotPasswordEmail } from '../../core/mailer/mailContent';
import User from '../user/user.model';
import UserRole from '../user/userRole.model';
import Role from '../role/role.model';
import { responseHandler, encryptPassword, generateVerifyCode } from '../../utils';
import signToken from './signToken';

const debug = require('debug')('boldr:auth:controller');

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

async function login(req, res) {
  try {
    // lookup the user and return the first match.
    const user = await User.query().where({ email: req.body.email }).eager('role').first();

    if (user) {
      // check the password being sent against the hash in the database
      const passwordMatch = await user.authenticate(req.body.password);
      if (passwordMatch) {
        // remove the password from the response.
        user.stripPassword();
        // sign the token
        const token = await signToken(user);
        req.user = user;
        req.role = user.role[0].id;
        return res.status(200).json({ token, user });
      }
      return responseHandler(new Error('Wrong username or password'), res, 422);
    }
    return responseHandler(new Error('Wrong username or password'), res, 422);
  } catch (e) {
    return responseHandler(e, res, 500);
  }
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
  const validUser = await User.query().findById(req.user.id).eager('role');
  if (!validUser) {
    return responseHandler(new Error('Invalid user', res, 404));
  }
  validUser.stripPassword();
  return responseHandler(null, res, 200, { user: validUser });
}

function forgottenPassword(req, res, next) {
  async.waterfall([
    function(done) {
      const token = generateVerifyCode();
      done(token);
    },
    function(token, done) {
      User.query().where({
        email: req.body.email
      })
        .then((user) => {
          if (!user) {
            return responseHandler(new Error('Invalid user', res, 404));
          }
          user.update({ reset_password_token: token });
          user.update({ reset_password_expiration: new Date(Date.now() + 3600000) }); // expire in 1 hour
          return done(null, token, user);
        });
    },
    async function(token, user, done) {
      const mailBody = await forgotPasswordEmail(user);
      const mailSubject = '[Boldr] Password Reset';
      handleMail(user, mailBody, mailSubject);
      return res.status(200).json(user);
    }
  ]);
}

async function resetPassword(req, res, next) {
  const user = await User.query().where({ reset_password_token: req.params.token }).then(user => {
    if (!user) {
      return responseHandler(new Error('Invalid user', res, 404));
    } else {
      user.password = req.body.password;
      user.reset_password_token = null;
      user.reset_password_expiration = null;
      return user.save();
    }
  });
  const mailBody = await passwordModifiedEmail(user);
  const mailSubject = '[Boldr] Password Changed';
  handleMail(user, mailBody, mailSubject);
  return res.status(200).json('Sent');
}

export { register, login, verify, checkUser, forgottenPassword, resetPassword };
