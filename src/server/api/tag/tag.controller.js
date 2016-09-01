import {Post, Tag} from "../../db/models";
import {
  RespondError,
  BAD_REQ_MSG,
  GENERAL_404_MSG,
  respondWithResult,
  saveUpdates,
  handleEntityNotFound,
  removeEntity,
  handleError
} from "../../lib";

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
async function getAllTags(req, res, next) {
  try {
    const tags = await Tag.findAll();

    return res.status(200).json(tags);
  } catch (error) {
    return next(new RespondError(BAD_REQ_MSG, 400));
  }
}

/**
 * @api {get} /tags/:id       Get specific tag with related posts
 * @apiVersion 1.0.0
 * @apiName showTag
 * @apiGroup Tag
 *
 * @apiParam {String}  id           The Tag ID
 */
function showTag(req, res, next) {
  const tagId = req.params.tagId;
  return Tag.findOne({
    where: { id: tagId },
    include: {
      model: Post
    }
  }).then((tag) => {
    if (!tag) {
      return next(new RespondError(GENERAL_404_MSG, 404));
    }
    return res.status(200).json(tag);
  });
}

/**
 * @api {get} /tags/count      Get list of tags with their post counts
 * @apiVersion 1.0.0
 * @apiName getTagPostCount
 * @apiGroup Tag
 *
 */
function getTagPostCount(req, res, next) {
  return Tag.scope('tagToPostCount').findAll()
    .then((tag) => {
      if (!tag) {
        return next(new RespondError(GENERAL_404_MSG, 404));
      }
      return res.status(200).json(tag);
    });
}

/**
 * @api {post} /tags      Create a new tag
 * @apiVersion 1.0.0
 * @apiName createTag
 * @apiGroup Tag
 *
 */
function createTag(req, res, next) {
  return Tag.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

/**
 * @api {put} /tags/:id      Update the requested tag.
 * @apiVersion 1.0.0
 * @apiName updateTag
 * @apiGroup Tag
 *
 */
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

/**
 * @api {delete} /tags/:id      Delete the requested tag.
 * @apiVersion 1.0.0
 * @apiName destroyTag
 * @apiGroup Tag
 *
 */
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
  getTagPostCount,
  createTag
};
