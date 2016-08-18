import { Router } from 'express';
import * as ctrl from './boldr.controller';

const router = Router();

router.route('/')
	.get(ctrl.getSettings)
  .post(ctrl.createSettings);

router.route('/:id')
  .put(ctrl.updateSettings);

export default router;
