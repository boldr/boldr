import express from 'express';
import passport from 'passport';
import { User } from '../../db/models';
import configureLocalPassport from './providers/local';
import * as ctrl from './auth.controller';
import { isAuthenticated } from './auth.service';

configureLocalPassport(User);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  }).catch(done);
});

const router = express.Router();

router.use('/login', ctrl.handleLogin);

router.post('/signup', ctrl.handleSignup);
router.post('/logout', ctrl.logout);
router.post('/forgot', ctrl.forgottenPassword);
router.post('/reset/:token', ctrl.resetPassword);

router.get('/logout', ctrl.logout);
router.delete('/account', isAuthenticated(), ctrl.accountDelete);
router.route('/check').get(isAuthenticated(), ctrl.checkUser);

export default router;
