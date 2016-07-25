import { Router } from 'express';
import { User } from '../db/models';
import * as ctrl from './auth.controller';
import { isAuthenticated } from './auth.service';

// Passport Configuration
require('./providers/local').setup(User);
require('./providers/jwt').setup(User);
// require('./facebook/passport').setup(User, config);
// require('./google/passport').setup(User, config);
// require('./twitter/passport').setup(User, config);
// require('./github/passport').setup(User, config);
// require('./linkedin/passport').setup(User, config);

const router = new Router();

router.use('/local', require('./providers/local').default);

router.post('/signup', ctrl.handleSignup);
router.post('/logout', ctrl.logout);
router.post('/forgot', ctrl.forgottenPassword);
router.post('/reset/:token', ctrl.resetPassword);

router.get('/logout', ctrl.logout);
router.delete('/account', isAuthenticated(), ctrl.accountDelete);
router.route('/check').get(ctrl.checkUser);
// router.use('/facebook', require('./facebook').default);
// router.use('/google', require('./google').default);
// router.use('/twitter', require('./twitter').default);
// router.use('/github', require('./github').default);
// router.use('/linkedin', require('./linkedin').default);

export default router;
