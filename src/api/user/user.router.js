import { Router } from 'express';
import { isAuthenticated, hasRole } from '../../auth/authService';
import * as ctrl from './user.controller';

const router = Router();

router.route('/')
	.get(ctrl.getAllUsers);

router.get('/users/me', isAuthenticated(), ctrl.me);

router.route('/:userId')
  .get(ctrl.showUser)
  .put(isAuthenticated(), ctrl.updateUser)
	.delete(hasRole('admin'), ctrl.destroyUser);
router.route('/:userId/password')
  .put(isAuthenticated(), ctrl.changePassword);

router.param('userId', ctrl.load);

export default router;
