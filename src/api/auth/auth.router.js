import passport from 'passport';
import { isAuthenticated } from '../../auth/authService';
import * as ctrl from './auth.controller';

export default (app, router) => {
  router.post('/auth/login', ctrl.login);
  router.post('/auth/signup', ctrl.signUp);
  router.post('/auth/logout', ctrl.logout);
  router.get('/auth/check', isAuthenticated(), ctrl.checkUser);
  router.get('/auth/google', passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  }));

  router.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/auth/login'
    })
  );
  router.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['email']
  }));
  router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/',
      failureRedirect: '/auth/login'
    })
  );
  // router.post('/auth/verify-email', ctrl.verifyEmail);
};
