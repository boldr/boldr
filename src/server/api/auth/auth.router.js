import { Router } from 'express';
import passport from 'passport';
import { isAuthenticated } from '../../auth/authService';
import * as ctrl from './auth.controller';

const router = Router();

router.post('/login', ctrl.login);
router.post('/signup', ctrl.signUp);
router.post('/logout', ctrl.logout);
router.post('/forgot', ctrl.forgottenPassword);
router.post('/reset/:token', ctrl.resetPassword);

router.route('/check')
  .get(isAuthenticated(), ctrl.checkUser);

router.get('/google', passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ]
}));

router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/auth/login'
}));

router.get('/facebook', passport.authenticate('facebook', {
  scope: ['email']
}));

router.get('/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);
export default router;
