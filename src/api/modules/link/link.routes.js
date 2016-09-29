import express from 'express';
import BaseController from '../BaseController';
import ensureAuthenticated from '../auth/ensureAuthenticated';
import Link from './link.model';
import * as ctrl from './link.controller';

const controller = new BaseController(Link);

const router = express.Router();

router.get('/', ctrl.index);
router.post('/', ensureAuthenticated, controller.create.bind(controller));
router.get('/:id', ctrl.getId);
router.put('/:id', ensureAuthenticated, ctrl.update);
router.patch('/:id', ensureAuthenticated, ctrl.update);
router.delete('/:id', ensureAuthenticated, controller.destroy.bind(controller));

export default router;
