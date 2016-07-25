import path from 'path';
import Boom from 'boom';
import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { Media, User, Category } from '../../db/models';
import config from '../../core/config';

const s3 = new AWS.S3({
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  region: config.AWS_REGION
});

const multerOptions = {
  storage: multerS3({
    s3,
    bucket: config.S3_BUCKET,
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
    bucket: config.S3_BUCKET,
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
    bucket: config.S3_BUCKET,
    acl: 'public-read',
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      cb(null, `uploads/articles/${file.fieldname}-${Date.now().toString()}${path.extname(file.originalname)}`);
    }
  })
};
function checkTrailingSlash(path) {
  if (path && path[path.length - 1] !== '/') {
    path += '/';
  }
  return path;
}

function s3SignService(req, res, next) {
  const filename = uuid.v4() + '_' + req.query.objectName;
  const mimeType = req.query.contentType;
  const fileKey = checkTrailingSlash(getFileKeyDir(req)) + filename;

  const s3 = new AWS.S3({
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    region: config.AWS_REGION
  });
  const params = {
    Bucket: config.S3_BUCKET,
    Key: fileKey,
    Expires: 60,
    ContentType: mimeType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', params, (err, data) => {
    if (err) {
      console.log(err);
      return res.send(500, 'Cannot create S3 signed URL');
    }
    res.json({
      signedUrl: data,
      publicUrl: '/s3/uploads/' + filename,
      filename
    });
  });
}

function tempRedirect(req, res) {
  const params = {
    Bucket: config.S3_BUCKET,
    Key: checkTrailingSlash(getFileKeyDir(req)) + req.params[0]
  };
  const s3 = new AWS.S3();
  s3.getSignedUrl('getObject', params, (err, url) => {
    res.redirect(url);
  });
}

export { multerOptions, multerAvatar, multerArticle, tempRedirect, s3SignService };
