import express from 'express';
import ensureAuthenticated from '../auth/ensureAuthenticated';
import * as ctrl from './media.controller';

const router = express.Router();

router.get('/', ctrl.getAllMedia);

router.get('/:id', ctrl.showMedia);

router.post('/', ensureAuthenticated, ctrl.uploadFiles.single('photo'), ctrl.singleUpload);
router.post('/dashboard', ensureAuthenticated, ctrl.fromDashboard);
router.post('/articles', ctrl.uploadArticle.single('photo'), ctrl.singleUpload);

router.get('/aws/bucket', ctrl.getAllAWS);

export default router;
