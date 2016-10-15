import express from 'express';
import BaseController from '../BaseController';
import { processQuery } from '../../utils';
import Page from './page.model';
import * as ctrl from './page.controller';

const controller = new BaseController(Page);

const router = new express.Router();

router.get('/', ctrl.listPages);
router.get('/:url', ctrl.getPageByUrl);
router.post('/', controller.create.bind(controller));
router.put('/:id', controller.update.bind(controller));
router.patch('/:id', controller.update.bind(controller));
router.delete('/:id', controller.destroy.bind(controller));

export default router;
