import express from 'express';
import ensureAuthenticated from '../auth/ensureAuthenticated';
import { processQuery } from '../../utils';
import * as ctrl from './user.controller';

const router = express.Router();

router.route('/')
      .get(processQuery, ctrl.index);

router.route('/:id')
      .get(ctrl.show)
      .put(ctrl.update)
      .patch(ctrl.update)
      .delete(ctrl.destroy);

export default router;
