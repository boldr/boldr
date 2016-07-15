import { Router } from 'express';
import passport from 'passport';
import { isAuthenticated } from '../../auth/authService';
import * as ctrl from './auth.controller';

const router = Router();

router.route('/login')
	.post(ctrl.login);
router.route('/signup')
  .post(ctrl.signUp);

router.route('/logout')
  .post(ctrl.logout);
router.route('/check')
  .get(isAuthenticated(), ctrl.checkUser);

router.route('/google')
  .get(passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  }));
router.route('/google/callback')
  .get(passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
  })
);

export default router;

// router.get('/auth/facebook', passport.authenticate('facebook', {
//   scope: ['email']
// }));
// router.get('/auth/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: '/',
//     failureRedirect: '/auth/login'
//   })
// );
