import path from 'path';
import Debug from 'debug';
import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

import conf from '../../core/config/config';
import { responseHandler, throwNotFound } from '../../utils';

import Media from './media.model';
import { multerOptions, multerAvatar, multerArticle } from './media.service';

const debug = Debug('boldr:media:controller');

// create a new S3 object
const s3 = new AWS.S3({
  accessKeyId: conf.get('aws.keyId'),
  secretAccessKey: conf.get('aws.keySecret'),
  region: conf.get('aws.region')
});

export const uploadFiles = multer(multerOptions);
export const uploadAvatar = multer(multerAvatar);
export const uploadArticle = multer(multerArticle);

export function generalUpload(req, res, next) {
  logger.info(req.files);
  debug(`These are the ${req.files}`);
  const fileFields = {
    s3url: req.files[0].location,
    ownerId: req.user.id,
    key: req.files[0].key
  };
  Media.query().insert(fileFields).then(data => {
    res.status(201).json(data);
  }).catch(err => {
    return res.status(500).json(err);
  });
}

export function singleUpload(req, res, next) {
  logger.info(req.file);

  const fileFields = {
    s3url: req.file.location,
    ownerId: req.user.id,
    key: req.file.key
  };

  Media.query().insert(fileFields).then(data => {
    return res.status(201).json(data);
  }).catch(err => {
    return res.status(500).json(err);
  });
}

/**
 * @api {get} /medias       Get all media files
 * @apiVersion 1.0.0
 * @apiName getAllMedia
 * @apiGroup Media
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/medias
 *
 * @apiSuccess {String}  id   The File ID
 */
export const getAllMedia = async (req, res, next) => {
  try {
    const medias = await Media.query();

    return res.status(200).json(medias);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export function fromDashboard(req, res, next) {
  const fileFields = {
    s3url: req.body.s3url,
    userId: req.user.id,
    key: req.body.filename,
    filename: req.body.filename
  };
  Media.query().insert(fileFields).then(data => {
    return res.status(201).json(data);
  }).catch(err => {
    return res.status(500).json(err);
  });
}
/**
 * @api {get} /medias/:id  Get a specific file by its id
 * @apiVersion 1.0.0
 * @apiName showMedia
 * @apiGroup Media
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/medias/1
 *
 * @apiParam {String}    id   The medias's id.
 *
 * @apiSuccess {String}  id   The Media ID
 */
export const showMedia = async (req, res, next) => {
  try {
    const media = await Media.query().findById(req.params.id);
    return res.status(200).json(media);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export function getAllAWS(req, res, next) {
  const params = {
    Bucket: conf.get('aws.bucket')
  };
  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      debug(err, err.stack);
    } else {
      debug(data);
    }
  });
}
