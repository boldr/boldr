import express from 'express';
import Setting from './setting.model';
import * as ctrl from './setting.controller';

const router = express.Router();

router.get('/', ctrl.index);
router.get('/:id', ctrl.getId);
router.put('/:id', ctrl.update);
router.patch('/:id', ctrl.update);

export default router;
