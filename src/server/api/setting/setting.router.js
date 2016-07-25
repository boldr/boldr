import { Router } from 'express';
import * as ctrl from './setting.controller';

const router = Router();

router.route('/')
	.get(ctrl.getSettings)
  .post(ctrl.createSettings);

router.route('/:tagId')
  .put(ctrl.updateSettings);

export default router;
