import { Router } from 'express';
import { isAuthenticated } from '../../auth/auth.service';
import * as ctrl from './media.controller';

const router = Router();

router.route('/')
	.get(ctrl.getAllMedia)
  .post(isAuthenticated(), ctrl.uploadFiles.array('photos', 3), ctrl.generalUpload);

router.route('/:mediaId')
  .get(ctrl.showMedia);

router.route('/aws/bucket')
  .get(ctrl.getAllAWS);

export default router;
