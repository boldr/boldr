import Boom from 'boom';
import { Setting } from '../../db/models';
import { respondWithResult, saveUpdates, handleEntityNotFound, removeEntity, handleError } from '../../core/helpers';

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
    Boom.badRequest({ message: error });
    next(error);
  }
};

const createSettings = (req, res, next) => {
  return Setting.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
};

const updateSettings = (req, res) => {
  const settingsId = req.params.id;

  return Setting.find({
    where: {
      id: settingsId
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
};

export { getSettings, createSettings, updateSettings };
