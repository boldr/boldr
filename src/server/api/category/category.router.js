import { Router } from 'express';
import * as ctrl from './category.controller';

const router = Router();

router.route('/')
  .get(ctrl.listAll)
  .post(ctrl.createOne);

export default router;
