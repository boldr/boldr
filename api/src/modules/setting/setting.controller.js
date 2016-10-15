import { responseHandler } from '../../utils';
import Setting from './setting.model';

const debug = require('debug')('boldr:settings-controller');

export async function listSettings(req, res) {
  const settings = await Setting.query();

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
  debug(req.body);
  return Setting.query()
    .patchAndFetchById(1, req.body)
    .then(setting => res.status(201).json(setting));
}

export { update, getId };
