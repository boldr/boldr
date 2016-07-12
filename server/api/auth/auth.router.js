import passport from 'passport';
import { isAuthenticated } from '../../auth/authService';
import * as authController from './auth.controller';

export default (app, router) => {
  router.post('/auth/login', authController.login);
  router.post('/auth/signup', authController.signUp);
  router.post('/auth/logout', authController.logout);
  router.get('/auth/check', isAuthenticated(), authController.checkUser);
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
};
