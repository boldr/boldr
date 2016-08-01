import { Router } from 'express';
import passport from 'passport';
import { User } from '../db/models';
import configureLocalPassport from './providers/local';

// import google from './providers/google/passport';
// import facebook from './providers/facebook/passport';
import * as ctrl from './auth.controller';
import { isAuthenticated, requireAuth } from './auth.service';

configureLocalPassport(User);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  }).catch(done);
});

// Passport Configuration
require('./providers/jwt').setup(User);
// google(passport);
// facebook(passport);

const router = new Router();

router.use('/login', ctrl.handleLogin);

router.post('/signup', ctrl.handleSignup);
router.post('/logout', ctrl.logout);
router.post('/forgot', ctrl.forgottenPassword);
router.post('/reset/:token', ctrl.resetPassword);

router.get('/logout', ctrl.logout);
router.delete('/account', isAuthenticated(), ctrl.accountDelete);
router.route('/check').get(isAuthenticated(), ctrl.checkUser);

// router.get('/google', passport.authenticate('google', {
//   scope: [
//     'https://www.googleapis.com/auth/userinfo.profile',
//     'https://www.googleapis.com/auth/userinfo.email'
//   ]
// }));
//
// router.get('/google/callback', passport.authenticate('google', {
//   successRedirect: '/',
//   failureRedirect: '/login'
// }));
//
// router.get('/facebook', passport.authenticate('facebook', {
//   scope: ['email']
// }));
//
// router.get('/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: '/',
//     failureRedirect: '/login'
//   })
// );

export default router;
