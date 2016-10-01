import express from 'express';
import ensureAuthenticated from '../auth/ensureAuthenticated';
import Setting from './setting.model';
import * as ctrl from './setting.controller';

const router = express.Router();

router.get('/', ctrl.index);
router.get('/:id', ctrl.getId);
router.put('/:id', ensureAuthenticated, ctrl.update);
router.patch('/:id', ensureAuthenticated, ctrl.update);

export default router;
