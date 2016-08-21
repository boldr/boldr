import express from 'express';
import { isAuthenticated } from '../../auth/auth.service';
import * as ctrl from './user.controller';

const router = express.Router();

router.route('/')
	.get(ctrl.getAllUsers);

router.route('/me')
  .get(isAuthenticated(), ctrl.me)
  .put(isAuthenticated(), ctrl.updateMyInfo);

router.route('/:id')
  .get(ctrl.showUser)
  .put(isAuthenticated(), ctrl.updateUser)
	.delete(isAuthenticated(), ctrl.destroyUser);

router.route('/:id/password')
  .put(isAuthenticated(), ctrl.changePassword);

router.param('id', ctrl.load);

export default router;
