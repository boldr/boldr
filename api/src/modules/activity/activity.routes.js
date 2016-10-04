import express from 'express';
import BaseController from '../BaseController';
import { processQuery } from '../../utils';
import Activity from './activity.model';
import * as ctrl from './activity.controller';

const controller = new BaseController(Activity);

const router = new express.Router();

router.get('/', processQuery, controller.index.bind(controller));
router.get('/:id', controller.show.bind(controller));
router.post('/', controller.create.bind(controller));


export default router;
