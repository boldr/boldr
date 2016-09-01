import { Setting } from '../../db/models';
import {
  RespondError,
  BAD_REQ_MSG,
  ACCOUNT_404_MSG,
  GENERAL_404_MSG,
  UNAUTHORIZED_MSG,
  respondWithResult,
  saveUpdates,
  handleEntityNotFound,
  removeEntity,
  handleError
} from '../../lib';

/**
 * @api {get} /settings       Get site settings
 * @apiVersion 1.0.0
 * @apiName getSettings
 * @apiGroup Settings
 *
 * @apiExample Example usage:
 * curl -i https://api.boldr.io/v1/boldr
 *
 * @apiSuccess {String}  id
 * @apiSuccess {String}  siteName      The name of the website
 * @apiSuccess {String}  description   The description of the website used in meta
 * @apiSuccess {String}  logo          The logo of the website
 * @apiSuccess {String}  favicon       The website's favicon
 * @apiSuccess {String}  location      The website's URL
 */
async function getSettings(req, res, next) {
  try {
    const settings = await Setting.findAll();

    return res.status(200).json(settings);
  } catch (error) {
    return next(new RespondError(BAD_REQ_MSG, 400));
  }
}

/**
 * @api {put} /settings/:id       Update site settings
 * @apiVersion 1.0.0
 * @apiName updateSettings
 * @apiGroup Settings
 *
 */
function updateSettings(req, res, next) {
  const settingsId = req.params.id;
  return Setting.find({ where: { id: settingsId } }).then(settings => {
    if (!settings) {
      return next(new RespondError(GENERAL_404_MSG, 404));
    }
    const updates = req.body;
    settings.updateAttributes(updates)
      .then(updated => {
        res.status(202).json(updated);
      })
      .catch(handleError(res));
  });
}

export { getSettings, updateSettings };
