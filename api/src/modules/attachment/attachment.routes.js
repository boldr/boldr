import express from 'express';
import ensureAuthenticated from '../auth/ensureAuthenticated';
import * as ctrl from './attachment.controller';

const router = express.Router();

/**
 * @api {get} /attachments       Get all attachment files
 * @apiName getAllAttachment
 * @apiGroup Attachment
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/attachments
 *
 */
router.get('/', ctrl.listAttachments);
/**
 * @api {get} /attachments/:id  Get a specific file by its id
 * @apiName getAttachment
 * @apiGroup Attachment
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/attachments/1
 *
 * @apiParam {String}    id   The medias's id.
 *
 * @apiSuccess {String}  id   The Attachment ID
 */
router.get('/:id', ctrl.getAttachment);

router.post('/', ensureAuthenticated, ctrl.uploadFiles.single('photo'), ctrl.singleUpload);
router.post('/dashboard', ensureAuthenticated, ctrl.fromDashboard);
router.post('/articles', ctrl.uploadArticle.single('photo'), ctrl.singleUpload);

router.get('/aws/bucket', ctrl.getAllAWS);

export default router;
