import { Router } from 'express';
import * as ctrl from './menu.controller';

const router = Router();

router.route('/')
	.get(ctrl.getMenus)
  .post(ctrl.createMenu);

router.route('/:id')
  .put(ctrl.updateMenu);

export default router;
