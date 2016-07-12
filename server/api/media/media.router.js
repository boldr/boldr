import * as mediaCtrl from './media.controller';
import { Media } from '../../db/models';
import { logger } from '../../lib';
import { isAuthenticated } from '../../middleware/auth/authService';

export default (app, router) => {
  router.get('/medias', mediaCtrl.getAllMedia);
  router.get('/medias/:id', mediaCtrl.showMedia);
  router.get('/medias/aws/bucket', mediaCtrl.getAllAWS);
  router.post('/medias', isAuthenticated(), mediaCtrl.uploadFiles.array('photos', 3), mediaCtrl.generalUpload);
};
