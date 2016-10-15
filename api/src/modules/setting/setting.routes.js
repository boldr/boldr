import express from 'express';
import Setting from './setting.model';
import * as ctrl from './setting.controller';

const router = express.Router();

router.get('/', ctrl.listSettings);
router.post('/', ctrl.addSetting);
router.get('/:id', ctrl.getSetting);
router.put('/:id', ctrl.updateSetting);
router.patch('/:id', ctrl.updateSetting);

export default router;
