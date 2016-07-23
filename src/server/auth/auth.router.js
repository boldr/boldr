import { Router } from 'express';
import {
  authFacebook,
  authFacebookCallback,
  authGoogle,
  authGoogleCallback,
  authTwitter,
  authTwitterCallback,
  authGithub,
  authGithubCallback
} from './providers';
import { ensureAuthenticated, unlink } from './authenticator';
import * as ctrl from './auth.controller';

const router = Router();

router.post('/login', ctrl.handleLogin);
router.post('/signup', ctrl.handleSignup);
router.post('/logout', ctrl.logout);
router.post('/forgot', ctrl.forgottenPassword);
router.post('/reset/:token', ctrl.resetPassword);

router.get('/logout', ctrl.logout);

router.route('/check').get(ensureAuthenticated(), ctrl.checkUser);

router.delete('/account', ensureAuthenticated, ctrl.accountDelete);
router.get('/unlink/:provider', ensureAuthenticated, unlink);

router.post('/google', authGoogle);
router.get('/google/callback', authGoogleCallback);
router.post('/facebook', authFacebook);
router.get('/facebook/callback', authFacebookCallback);
router.post('/twitter', authTwitter);
router.get('/twitter/callback', authTwitterCallback);
router.post('/github', authGithub);
router.get('/github/callback', authGithubCallback);


export default router;
