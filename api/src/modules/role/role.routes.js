import express from 'express';
import BaseController from '../BaseController';
import { processQuery } from '../../utils';
import ensureAuthenticated from '../auth/ensureAuthenticated';
import Role from './role.model';

const controller = new BaseController(Role);

const router = new express.Router();

router.get('/', processQuery, controller.index.bind(controller));
router.get('/:id', controller.show.bind(controller));
router.post('/', ensureAuthenticated, controller.create.bind(controller));
router.put('/:id', ensureAuthenticated, controller.update.bind(controller));
router.patch('/:id', ensureAuthenticated, controller.update.bind(controller));
router.delete('/:id', ensureAuthenticated, controller.destroy.bind(controller));

export default router;
