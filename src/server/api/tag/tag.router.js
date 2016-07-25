import { Router } from 'express';
import * as ctrl from './tag.controller';

const router = Router();

router.route('/')
	.get(ctrl.getAllTags)
  .post(ctrl.createTag);

router.route('/:tagId')
  .get(ctrl.showTag)
  .put(ctrl.updateTag)
  .delete(ctrl.destroyTag);

export default router;
