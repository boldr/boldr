import { Media } from '../../db/models';
import { logger } from '../../lib';
import { isAuthenticated } from '../../auth/authService';
import * as ctrl from './media.controller';
import { s3SignService, tempRedirect } from './media.service';

export default (app, router) => {
  router.get('/medias', ctrl.getAllMedia);
  router.get('/medias/:id', ctrl.showMedia);
  router.get('/medias/aws/bucket', ctrl.getAllAWS);
  router.post('/medias', isAuthenticated(), ctrl.uploadFiles.array('photos', 3), ctrl.generalUpload);

  router.get('/medias/sign', s3SignService);
  router.get(/\/uploads\/(.*)/, (req, res) => {
    return tempRedirect(req, res);
  });
  router.get(/\/img\/(.*)/, (req, res) => {
    return tempRedirect(req, res);
  });
};
