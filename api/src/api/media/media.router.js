import express from 'express';
import { isAuthenticated } from '../auth/auth.service';
import * as ctrl from './media.controller';

const router = express.Router();

router.get('/', ctrl.getAllMedia);

router.get('/:id', ctrl.showMedia);

router.post('/', isAuthenticated(), ctrl.uploadFiles.array('photos', 3), ctrl.generalUpload);
router.post('/articles', ctrl.uploadArticle.single('photo'), ctrl.singleUpload);
// router.post('/articles', isAuthenticated(), ctrl.uploadArticle.single('photo'));

router.get('/aws/bucket', ctrl.getAllAWS);

export default router;