import path from 'path';
import Boom from 'boom';
import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { Media, User, Category } from '../../db/models';
import { config } from '../../config/boldr';

const s3 = new AWS.S3({
  accessKeyId: config.aws.id,
  secretAccessKey: config.aws.secret,
  region: 'us-west-1'
});

const multerOptions = {
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
};

const multerAvatar = {
  storage: multerS3({
    s3,
    bucket: config.aws.bucket,
    acl: 'public-read',
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      cb(null, `uploads/avatars/${file.fieldname}-${Date.now().toString()}${path.extname(file.originalname)}`);
    }
  })
};

const multerArticle = {
  storage: multerS3({
    s3,
    bucket: config.aws.bucket,
    acl: 'public-read',
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      cb(null, `uploads/articles/${file.fieldname}-${Date.now().toString()}${path.extname(file.originalname)}`);
    }
  })
};

export { multerOptions, multerAvatar, multerArticle };
