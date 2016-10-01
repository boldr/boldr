import findQuery from 'objection-find';
import slugify from 'slugify';
import { responseHandler, throwNotFound } from '../../utils';
import Setting from './setting.model';

const debug = require('debug')('boldr:settings-controller');

async function index(req, res) {
  const settings = await Setting.query().findById(1);

  if (!settings) {
    responseHandler(null, res, 500);
  }

  return res.status(200).json(settings);
}

async function getId(req, res) {
  const setting = await Setting
    .query()
    .findById(req.params.id);
  return responseHandler(null, res, 200, setting);
}

function update(req, res) {
  return Setting.query()
    .patchAndFetchById(1, req.body)
    .then(setting => res.status(201).json(setting));
}

export { index, update, getId };
