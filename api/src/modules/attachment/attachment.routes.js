import express from 'express';
import ensureAuthenticated from '../auth/ensureAuthenticated';
import * as ctrl from './attachment.controller';

const router = express.Router();

router.get('/', ctrl.listAttachments);

router.get('/:id', ctrl.getAttachment);

router.post('/', ensureAuthenticated, ctrl.uploadFiles.single('photo'), ctrl.singleUpload);
router.post('/dashboard', ensureAuthenticated, ctrl.fromDashboard);
router.post('/articles', ctrl.uploadArticle.single('photo'), ctrl.singleUpload);

router.get('/aws/bucket', ctrl.getAllAWS);

export default router;
