import uuid from 'node-uuid';
import aws from 'aws-sdk';
import express from 'express';
import config from '../../config/boldr';

function checkTrailingSlash(path) {
  if (path && path[path.length - 1] !== '/') {
    path += '/';
  }
  return path;
}

export default function S3Router(options) {
  const S3_BUCKET = config.aws.bucket;
  const getFileKeyDir = options.getFileKeyDir || function() { return ''; };

  if (!S3_BUCKET) {
    throw new Error('S3_BUCKET is required.');
  }

  const s3Options = {};
  if (options.region) {
    s3Options.region = options.region;
  }
  if (options.signatureVersion) {
    s3Options.signatureVersion = options.signatureVersion;
  }

  const router = express.Router();

   /**
    * Redirects image requests with a temporary signed URL, giving access
    * to GET an upload.
    */
  function tempRedirect(req, res) {
    const params = {
      Bucket: S3_BUCKET,
      Key: checkTrailingSlash(getFileKeyDir(req)) + req.params[0]
    };
    const s3 = new aws.S3({
      accessKeyId: config.aws.id,
      secretAccessKey: config.aws.secret,
      region: 'us-west-1'
    });
    s3.getSignedUrl('getObject', params, (err, url) => {
      res.redirect(url);
    });
  }

   /**
    * Image specific route.
    */
  router.get(/\/img\/(.*)/, (req, res) => {
    return tempRedirect(req, res);
  });

   /**
    * Other file type(s) route.
    */
  router.get(/\/uploads\/(.*)/, (req, res) => {
    return tempRedirect(req, res);
  });

   /**
    * Returns an object with `signedUrl` and `publicUrl` properties that
    * give temporary access to PUT an object in an S3 bucket.
    */
  router.get('/sign', (req, res) => {
    const filename = uuid.v4() + '_' + req.query.objectName;
    const mimeType = req.query.contentType;
    const fileKey = checkTrailingSlash(getFileKeyDir(req)) + filename;
       // Set any custom headers
    if (options.headers) {
      res.set(options.headers);
    }

    const s3 = new aws.S3({
      accessKeyId: config.aws.id,
      secretAccessKey: config.aws.secret,
      region: 'us-west-1'
    });
    const params = {
      Bucket: S3_BUCKET,
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
  });

  return router;
}
