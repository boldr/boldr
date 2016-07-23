import { Router } from 'express';
import { ensureAuthenticated } from '../../auth/authenticator';
import * as ctrl from './user.controller';

const router = Router();

router.route('/')
	.get(ctrl.getAllUsers);

router.get('/users/me', ensureAuthenticated(), ctrl.me);

router.route('/:userId')
  .get(ctrl.showUser)
  .put(ensureAuthenticated(), ctrl.updateUser)
	.delete(ensureAuthenticated(), ctrl.destroyUser);
router.route('/:userId/password')
  .put(ensureAuthenticated(), ctrl.changePassword);

router.param('userId', ctrl.load);

export default router;
