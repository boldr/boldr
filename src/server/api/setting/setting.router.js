import { Router } from 'express';
import * as ctrl from './setting.controller';

const router = Router();

router.route('/')
	.get(ctrl.getSettings);

router.route('/:id')
  .put(ctrl.updateSettings);

export default router;
