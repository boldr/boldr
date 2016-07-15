import path from 'path';
import Boom from 'boom';
import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { Media, User, Category } from '../../db/models';
import config from '../../config/boldr';
import { logger } from '../../core';
import { multerOptions, multerAvatar, multerArticle } from './media.service';

const s3 = new AWS.S3({
  accessKeyId: config.aws.id,
  secretAccessKey: config.aws.secret,
  region: 'us-west-1'
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

/*
{ fieldname: 'photos',
[2]      originalname: 'Screen Shot 2016-07-11 at 1.30.34 AM.png',
[2]      encoding: '7bit',
[2]      mimetype: 'image/png',
[2]      size: 174670,
[2]      bucket: 'boldr',
[2]      key: 'uploads/files/photos-1468342955875.png',
[2]      acl: 'public-read',
[2]      contentType: 'application/octet-stream',
[2]      metadata: { fieldName: 'photos' },
[2]      location: 'https://boldr.s3-us-west-1.amazonaws.com/uploads/files/photos-1468342955875.png',
[2]      etag: '"f6f716d2cc6c25a57b9a39ffd27477df"' }
 */
export function generalUpload(req, res, next) {
  logger.info(req.files);

  const fileFields = {
    s3url: req.files[0].location,
    ownerId: req.user.id,
    key: req.files[0].key
  };
  Media.create(fileFields).then(function(data) {
    res.status(201).json(data);
  }).catch(err => {
    res.status(500).send(err);
  });
}
// const params = {
//   Bucket: config.aws.bucket,
//   Key: attachments[0].filename,
//   Body: attachments[0].data
// };
// s3.upload(params, (err, data) => { });
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
    const medias = await Media.findAll({
      include: [{
        model: User,
        attributes: ['id', 'firstName', 'lastName', 'displayName', 'picture', 'email']
      }]
    });

    return res.status(200).json(medias);
  } catch (error) {
    next(error);
  }
};

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
        attributes: ['id', 'firstName', 'lastName', 'displayName', 'picture', 'email']
      }]
    });
    return res.status(200).json(media);
  } catch (error) {
    next(error);
  }
};
/*
{ IsTruncated: false,
  Contents:
   [ { Key: 'File Name',
       LastModified: 2016-06-24T17:13:22.000Z,
       ETag: '"fa9b614f802524c4853a75c79dc5ca37"',
       Size: 198098,
       StorageClass: 'STANDARD' },
 */
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
