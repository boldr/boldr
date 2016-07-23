import { Router } from 'express';
import passport from 'passport';
import { handleLogin, authFacebook, authFacebookCallback, authGoogle,
authGoogleCallback, authTwitter, authTwitterCallback, authGithub, authGithubCallback } from '../api/auth/authenticator';
import { isAuthenticated } from './auth.service';
import * as ctrl from './auth.controller';


const router = Router();

router.post('/login', handleLogin);
router.post('/signup', ctrl.signUp);
router.post('/logout', ctrl.logout);
router.post('/forgot', ctrl.forgottenPassword);
router.post('/reset/:token', ctrl.resetPassword);

router.route('/check')
  .get(isAuthenticated(), ctrl.checkUser);

router.post('/google', authGoogle);
router.get('/google/callback', authGoogleCallback);
router.post('/facebook', authFacebook);
router.get('/facebook/callback', authFacebookCallback);
router.post('/twitter', authTwitter);
router.get('/twitter/callback', authTwitterCallback);
router.post('/github', authGithub);
router.get('/github/callback', authGithubCallback);

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
