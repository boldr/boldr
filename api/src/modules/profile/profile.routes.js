import express from 'express';
import { BaseController } from '../../core';
import { processQuery } from '../../utils';
import Profile from './profile.model';
import * as ctrl from './profile.controller';

const controller = new BaseController(Profile);

const router = new express.Router();

router.get('/', ctrl.listProfiles);
router.get('/:id', ctrl.getProfile);
router.post('/', controller.create.bind(controller));
router.put('/:id', controller.update.bind(controller));
router.patch('/:id', controller.update.bind(controller));
router.delete('/:id', controller.destroy.bind(controller));

export default router;
