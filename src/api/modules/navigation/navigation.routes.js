import express from 'express';
import BaseController from '../BaseController';
import ensureAuthenticated from '../auth/ensureAuthenticated';
import Navigation from './navigation.model';
import * as ctrl from './navigation.controller';

const controller = new BaseController(Navigation);

const router = express.Router();

router.get('/', ctrl.index);
router.post('/', ensureAuthenticated, controller.create.bind(controller));
router.get('/:id', ctrl.getId);
router.put('/:id', ensureAuthenticated, ctrl.update);
router.patch('/:id', ensureAuthenticated, ctrl.update);
router.delete('/:id', ensureAuthenticated, controller.destroy.bind(controller));

export default router;
