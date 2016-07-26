import { Router } from 'express';
import { isAuthenticated } from '../../auth/auth.service';
import * as ctrl from './user.controller';

const router = Router();

router.route('/')
	.get(ctrl.getAllUsers);

router.get('/users/me', isAuthenticated(), ctrl.me);

router.get('/:id', ctrl.showUser);

router.route('/:userId')
  .put(isAuthenticated(), ctrl.updateUser)
	.delete(isAuthenticated(), ctrl.destroyUser);

router.route('/:userId/password')
  .put(isAuthenticated(), ctrl.changePassword);

router.param('userId', ctrl.load);

export default router;
