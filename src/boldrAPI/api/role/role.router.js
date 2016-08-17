import { Router } from 'express';
import * as ctrl from './role.controller';
import { hasRole, isAuthenticated } from '../auth/auth.service';

const router = Router();

router.route('/')
  .get(ctrl.getAll);

router.route('/:id')
  .get(ctrl.showRole)
  .put(hasRole(5), ctrl.updateRole);

export default router;
