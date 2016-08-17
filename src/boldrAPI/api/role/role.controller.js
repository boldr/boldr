import Boom from 'boom';
import { Role, User } from '../../db/models';
import { respondWithResult, saveUpdates, handleEntityNotFound, removeEntity, handleError } from '../../lib/helpers';

/**
 * @api {get} /roles       Get all roles
 * @apiVersion 1.0.0
 * @apiName getAll
 * @apiGroup Role
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/roles
 *
 */
const getAll = async (req, res, next) => {
  try {
    const roles = await Role.findAll({
      include: [{
        model: User,
        attributes: ['id', 'displayName', 'avatarUrl', 'email']
      }]
    });

    return res.status(200).json(roles);
  } catch (error) {
    Boom.badRequest({ message: error });
    next(error);
  }
};

const showRole = async(req, res, next) => {
  const roleId = req.params.id;
  try {
    const role = await Role.findOne({
      where: {
        id: roleId
      },
      include: [{
        model: User,
        attributes: ['firstName', 'lastName', 'displayName', 'avatarUrl', 'email', 'roleId']
      }]
    });
    return res.status(200).json(role);
  } catch (error) {
    Boom.badRequest(error);
    return next(error);
  }
};

const updateRole = (req, res, next) => {
  const roleId = req.params.id;
  return Role.findOne( { where: { id: roleId } })
  .then(role => {
    if (!role) {
      return Boom.notFound(post);
    }
    const updates = req.body;
    role.updateAttributes(updates)
      .then(updated => {
        return updated;
      })
      .then(respondWithResult(202, res))
      .catch(handleError(res));
  });
};

export {
  getAll,
  showRole,
  updateRole
};
