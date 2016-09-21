import express from 'express';
import BaseController from '../../BaseController';
import Navigation from './navigation.model';
import * as ctrl from './navigation.controller';

const controller = new BaseController(Navigation);

const router = express.Router();

router.get('/', ctrl.index);
router.post('/', controller.create.bind(controller));
router.get('/:id', ctrl.getId);
router.put('/:id', ctrl.update);
router.patch('/:id', ctrl.update);

export default router;
