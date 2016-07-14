import passport from 'passport';
import Boom from 'boom';
import moment from 'moment';
import cookies from 'react-cookie';
import { handleMail, generateVerifyCode } from '../../core';
import { User, VerificationToken } from '../../db/models';
import { signToken } from '../../auth/authService';

/**
 * @api {post} /auth/login          Login to a registered account.
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup Auth
 *
 * @apiParam {String}   Email       The email address registered to the account.
 * @apiParam {String}   Password    The password
 * @apiSuccess {String} Token       The jsonwebtoken
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI...."}
 */
export function login(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    const error = err || info;
    if (error) {
      return res.status(401).json(error);
    }
    if (!user) {
      return res.status(404).json({ message: 'Something went wrong, please try again.' });
    }

    signToken(user.id, user.role).then(token => {
      cookies.save('boldrToken', token, { path: '/' });
      req.user = user;
      res.cookie('boldrToken', cookies.load('boldrToken'));
      return res.status(200).json({ token });
    });
  })(req, res, next);
}

/**
 * @api {post} /auth/logout           Remove the session information
 * @apiVersion 1.0.0
 * @apiName logout
 * @apiGroup Auth
 */
export function logout(req, res) {
  req.logout();
  res.redirect('/');
}

/**
 * @api {post} /auth/signup           Create a new account.
 * @apiVersion 1.0.0
 * @apiName signup
 * @apiGroup Auth
 */
export async function signUp(req, res, next) {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      displayName: req.body.displayName,
      name: req.body.name,
      location: req.body.location,
      bio: req.body.bio,
      picture: req.body.picture,
      gender: req.body.gender,
      website: req.body.website,
      provider: 'local'
    };
    const user = await User.create(userData);
    // Generate the verification token.
    const verificationToken = await generateVerifyCode();
    // Send the verification email.
    const subj = '[Boldr] Confirmation mail';
    handleMail(user.email, subj, verificationToken);
    // sendVerifyEmail(user.email, verificationToken);
    // Store the verification token, userId and expiration date in the db.
    const verificationStorage = await VerificationToken.create({
      userId: user.id,
      token: verificationToken,
      expiresAt: moment().add(3, 'days')
    });
    // Save token.
    verificationStorage.save();
    req.logIn(user, (err) => {
      if (err) {
        return Boom.unauthorized({ message: err });
      }
      return res.status(200).json({
        message: 'You have been successfully logged in.'
      });
    });
  } catch (err) {
    return next(err);
  }
}

export function checkUser(req, res, next) {
  const userId = req.user.id;
  return User.find({
    where: {
      id: userId
    },
    attributes: [
      'id',
      'name',
      'email',
      'displayName',
      'role',
      'provider'
    ]
  })
    .then(user => { // don't ever give out the password or salt
      if (!user) {
        return res.status(401).end();
      }
      res.json(user);
    })
    .catch(err => next(err));
}

export default {
  login,
  logout,
  signUp,
  checkUser
};