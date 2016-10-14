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

router.post('/login', ctrl.login);
router.post('/signup', ctrl.register);
router.get('/check', ensureAuthenticated, ctrl.checkAuthentication);
router.get('/verification/:verifToken', ctrl.verify);
router.post('/forgot-password', ctrl.forgottenPassword);
router.post('/reset-password/:token', ctrl.resetPassword);

export default router;
