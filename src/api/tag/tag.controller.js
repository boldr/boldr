import Boom from 'boom';
import { Article, User, Tag } from '../../db/models';
import { respondWithResult, saveUpdates, handleEntityNotFound, removeEntity, handleError } from '../../core/helpers';

/**
 * @api {get} /tags       Get all tags
 * @apiVersion 1.0.0
 * @apiName getAllTags
 * @apiGroup Tag
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/tags
 *
 * @apiSuccess {String}  id           The Tag ID
 * @apiSuccess {String}  tagname      The name of the tag
 * @apiSuccess {String}  description  The description of the tag
 */
const getAllTags = async (req, res, next) => {
  try {
    const tags = await Tag.findAll({});

    return res.status(200).json(tags);
  } catch (error) {
    Boom.badRequest({ message: error });
    next(error);
  }
};

function showTag(req, res) {
  return Tag.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

const createTag = (req, res, next) => {
  return Tag.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
};

function updateTag(req, res) {
  if (req.body.id) {
    delete req.body.id;
  }
  return Tag.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

function destroyTag(req, res) {
  return Tag.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}


export {
  getAllTags,
  updateTag,
  destroyTag,
  showTag,
  createTag
};
