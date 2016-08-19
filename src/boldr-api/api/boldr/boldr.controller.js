import { Setting } from '../../db/models';
import { respondWithResult, saveUpdates, handleEntityNotFound, removeEntity, handleError } from '../../lib/helpers';
import RespondError from '../../lib/respond/respondError';
import { BAD_REQ_MSG, ACCOUNT_404_MSG, GENERAL_404_MSG, UNAUTHORIZED_MSG } from '../../lib/respond/messages';
/**
 * @api {get} /settings       Get site settings
 * @apiVersion 1.0.0
 * @apiName getSettings
 * @apiGroup Settings
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/settings
 *
 * @apiSuccess {String}  id           The Tag ID
 * @apiSuccess {String}  tagname      The name of the tag
 * @apiSuccess {String}  description  The description of the tag
 */
const getSettings = async (req, res, next) => {
  try {
    const settings = await Setting.findAll();

    return res.status(200).json(settings);
  } catch (error) {
    return next(new RespondError(BAD_REQ_MSG, 400));
  }
};

const createSettings = (req, res, next) => {
  return Setting.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
};

const updateSettings = (req, res, next) => {
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
};
export { getSettings, createSettings, updateSettings };
