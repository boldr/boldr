import express from 'express';
import BaseController from '../BaseController';
import Link from './link.model';
import * as ctrl from './link.controller';

const controller = new BaseController(Link);

const router = express.Router();

router.get('/', ctrl.index);
router.post('/', controller.create.bind(controller));
router.get('/:id', ctrl.getId);
router.put('/:id', ctrl.update);
router.patch('/:id', ctrl.update);
router.delete('/:id', controller.destroy.bind(controller));

export default router;
