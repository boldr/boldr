import express from 'express';
import User from '../user/user.model';
import * as ctrl from './auth.controller';
import ensureAuthenticated from './ensureAuthenticated';

const router = express.Router();

router.post('/login', ctrl.login);
router.post('/signup', ctrl.register);
router.get('/check', ensureAuthenticated, ctrl.checkUser);
router.get('/verification/:verifToken', ctrl.verify);
router.post('/forgot-password', ctrl.forgottenPassword);
router.post('/reset-password/:token', ctrl.resetPassword);

export default router;
