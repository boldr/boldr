import express from 'express';
import ensureAuthenticated from '../auth/ensureAuthenticated';
import BaseController from '../BaseController';
import * as ctrl from './media.controller';
import Media from './media.model';

const controller = new BaseController(Media);
const router = express.Router();

router.get('/', ctrl.getAllMedia);
router.get('/:id', ctrl.showMedia);
router.post('/', ensureAuthenticated, ctrl.uploadFiles.single('photo'), ctrl.singleUpload);
router.post('/dashboard', ensureAuthenticated, ctrl.fromDashboard);
router.delete('/:id', controller.destroy.bind(controller));
router.post('/articles', ctrl.uploadArticle.single('photo'), ctrl.singleUpload);
router.get('/aws/bucket', ctrl.getAllAWS);

export default router;
