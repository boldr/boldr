import Debug from 'debug';
import AWS from 'aws-sdk';
import uuid from 'node-uuid';
import multer from 'multer';

import conf from '../../config/config';
import Activity from '../activity/activity.model';
import Attachment from './attachment.model';
import { multerOptions, multerAvatar, multerArticle } from './attachment.service';

const debug = Debug('boldr:attachment:controller');

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
  debug(req.files);
  debug(`These are the ${req.files}`);
  const fileFields = {
    s3url: req.files[0].location,
    user_id: req.user.id,
    key: req.files[0].key
  };
  Attachment.query().insert(fileFields).then(data => {
    res.status(201).json(data);
  }).catch(err => {
    return res.status(500).json(err);
  });
}

export function singleUpload(req, res, next) {
  debug(req.file);

  const fileFields = {
    s3url: req.file.location,
    user_id: req.user.id,
    key: req.file.key
  };

  Attachment.query().insert(fileFields).then(data => {
    return res.status(201).json(data);
  }).catch(err => {
    return res.status(500).json(err);
  });
}

export const listAttachments = async (req, res, next) => {
  try {
    const medias = await Attachment.query();

    return res.status(200).json(medias);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export async function fromDashboard(req, res, next) {
  const fileFields = {
    id: uuid.v4(),
    url: req.body.url,
    user_id: req.user.id,
    file_name: req.body.file_name,
    original_name: req.body.original_name,
    file_description: req.body.file_description,
    file_type: req.body.file_type,
    s3_key: req.body.s3_key
  };
  const newAttachment = await Attachment.query().insertAndFetch(fileFields);
  await Activity.query().insert({
    id: uuid.v4(),
    name: newAttachment.file_name,
    account_id: req.user.id,
    action: 'New upload',
    type: 'create',
    data: { newAttachment },
    entry_uuid: newAttachment.id,
    entry_table: 'attachment'
  });
  return res.status(201).json(newAttachment);
}

export const getAttachment = async (req, res, next) => {
  try {
    const media = await Attachment.query().findById(req.params.id);
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
