import path from 'path';
import Debug from 'debug';
import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { Media, User, Category } from '../../db/models';
import { logger, config } from '../../core';
import { RespondError, BAD_REQ_MSG, GENERAL_404_MSG, ACCOUNT_404_MSG, UNAUTHORIZED_MSG } from '../../lib';
import { multerOptions, multerAvatar, multerArticle } from './media.service';

const debug = Debug('boldr:media:controller');

const s3 = new AWS.S3({
  accessKeyId: config.aws.keyId,
  secretAccessKey: config.aws.keySecret,
  region: config.aws.region
});

export const upload = multer({
  storage: multerS3({
    s3,
    bucket: config.aws.bucket,
    acl: 'public-read',
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      cb(null, `uploads/files/${file.fieldname}-${Date.now().toString()}${path.extname(file.originalname)}`);
    }
  })
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
  Media.create(fileFields).then(data => {
    res.status(201).json(data);
  }).catch(err => {
    return next(new RespondError(BAD_REQ_MSG, 400));
  });
}

export function singleUpload(req, res, next) {
  logger.info(req.file);

  const fileFields = {
    s3url: req.file.location,
    ownerId: req.user.id,
    key: req.file.key
  };

  Media.create(fileFields).then(data => {
    return res.status(201).json(data);
  }).catch(err => {
    return next(new RespondError(BAD_REQ_MSG, 400));
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
    const medias = await Media.findAll();

    return res.status(200).json(medias);
  } catch (error) {
    return next(new RespondError(BAD_REQ_MSG, 400));
  }
};
export function fromDashboard(req, res, next) {
  const fileFields = {
    s3url: req.body.s3url,
    userId: req.user.id,
    key: req.body.filename,
    filename: req.body.filename
  };
  Media.create(fileFields).then(data => {
    return res.status(201).json(data);
  }).catch(err => {
    return next(new RespondError(BAD_REQ_MSG, 400));
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
    const media = await Media.find({
      where: {
        id: req.params.id
      },
      include: [{
        model: User,
        attributes: ['id', 'firstName', 'lastName', 'displayName', 'avatarUrl', 'email']
      }]
    });
    return res.status(200).json(media);
  } catch (error) {
    return next(new RespondError(BAD_REQ_MSG, 400));
  }
};

export function getAllAWS(req, res, next) {
  const params = {
    Bucket: config.aws.bucket
  };
  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log(data);
    }
  });
}
