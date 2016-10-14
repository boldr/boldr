import express from 'express';
import BaseController from '../BaseController';
import { processQuery } from '../../utils';
import Profile from './profile.model';
import * as ctrl from './profile.controller';

const controller = new BaseController(Profile);

const router = new express.Router();

router.get('/', ctrl.index);
router.get('/:id', ctrl.show);
router.post('/', controller.create.bind(controller));
router.put('/:id', controller.update.bind(controller));
router.patch('/:id', controller.update.bind(controller));
router.delete('/:id', controller.destroy.bind(controller));

export default router;
