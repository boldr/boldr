import { Router } from 'express';
import { Media } from '../../db/models';
import { logger } from '../../lib';
import { ensureAuthenticated } from '../../auth/authenticator';
import * as ctrl from './media.controller';
import { s3SignService, tempRedirect } from './media.service';

const router = Router();

router.route('/')
	.get(ctrl.getAllMedia)
  .post(ensureAuthenticated(), ctrl.uploadFiles.array('photos', 3), ctrl.generalUpload);

router.route('/:mediaId')
  .get(ctrl.showMedia);

router.route('/aws/bucket')
  .get(ctrl.getAllAWS);

export default router;
