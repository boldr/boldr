import express from 'express';
import BaseController from '../BaseController';
import { processQuery } from '../../utils';
import Tag from './tag.model';
import * as ctrl from './tag.controller';

const controller = new BaseController(Tag);

const router = new express.Router();

router.get('/', processQuery, controller.index.bind(controller));
router.get('/:id', controller.show.bind(controller));
router.get('/:id/posts', ctrl.getTaggedPosts);
router.post('/', controller.create.bind(controller));
router.put('/:id', controller.update.bind(controller));
router.patch('/:id', controller.update.bind(controller));
router.delete('/:id', controller.destroy.bind(controller));

export default router;
