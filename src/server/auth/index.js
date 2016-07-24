import { Router } from 'express';
import { User } from '../db/models';
import * as ctrl from './auth.controller';
// Passport Configuration
require('./providers/local').setup(User);
// require('./facebook/passport').setup(User, config);
// require('./google/passport').setup(User, config);
// require('./twitter/passport').setup(User, config);
// require('./github/passport').setup(User, config);
// require('./linkedin/passport').setup(User, config);

const router = new Router();

router.use('/local', require('./providers/local').default);

router.route('/check').get(ctrl.checkUser);
// router.use('/facebook', require('./facebook').default);
// router.use('/google', require('./google').default);
// router.use('/twitter', require('./twitter').default);
// router.use('/github', require('./github').default);
// router.use('/linkedin', require('./linkedin').default);

export default router;
