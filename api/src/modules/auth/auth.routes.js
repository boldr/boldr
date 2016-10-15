import express from 'express';
import passport from 'passport';
import Account from '../account/account.model';
import configureLocalPassport from './providers/local';
import configureJwt from './providers/jwt';
import configureFacebook from './providers/facebook';
import * as ctrl from './auth.controller';
import ensureAuthenticated from './ensureAuthenticated';

const debug = require('debug')('boldr:auth:routes');


passport.serializeUser((account, done) => {
  const sessionUser = { id: account.id, email: account.email };
  debug(sessionUser, 'sessionUser - auth routes');
  return done(null, sessionUser);
});

passport.deserializeUser((sessionUser, done) => {
  debug(sessionUser);
  done(null, sessionUser);
});

configureLocalPassport(Account);
configureJwt(Account);
configureFacebook(Account);

const router = express.Router();

/**
 * @api {post} /auth/login Login
 * @apiName Login
 * @apiGroup Auth
 * @apiHeader {String} Authorization {token}
 * @apiParam {String} email Account email address
 * @apiParam {String} password Account password
 * @apiSuccess (Success 200) {String} token Account `token` to be passed to other requests.
 * @apiSuccess (Success 200) {Object} account Current account data
 * @apiError 401 Invalid credentials.
 */
router.post('/login', ctrl.login);

/**
 * @api {post} /auth/signup Signup
 * @apiName Signup
 * @apiGroup Auth
 * @apiParam {String} email Account email address
 * @apiParam {String} password Account password
 * @apiSuccess (Success 201) {Object} account Current account data
 * @apiError 401 Invalid credentials.
 * @apiError 409 Email already exists
 * @apiError 400 Bad request.
 */
router.post('/signup', ctrl.register);

/**
 * @api {get} /auth/check Check
 * @apiName checkAuthentication
 * @apiGroup Auth
 * @apiHeader {String} Authorization {token}
 * @apiSuccess (Success 200) {Object} account Current account data
 * @apiError 401 Invalid credentials.
 */
router.get('/check', ensureAuthenticated, ctrl.checkAuthentication);

/**
 * @api {get} /auth/verification/:verifToken Verify
 * @apiName verify
 * @apiGroup Auth
 * @apiParam {String} verification {token}
 * @apiSuccess (Success 200) {Object} account Current account data
 * @apiError 404 Missing or cannot find the verification token
 */
router.get('/verification/:verifToken', ctrl.verify);

export default router;
