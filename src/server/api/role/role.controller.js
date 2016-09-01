import { Role, User } from '../../db/models';
import { respondWithResult, saveUpdates, handleEntityNotFound, removeEntity, handleError } from '../../lib/helpers';
import RespondError from '../../lib/respond/respondError';
import { BAD_REQ_MSG, ACCOUNT_404_MSG, UNAUTHORIZED_MSG } from '../../lib/respond/messages';

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
async function getAll(req, res, next) {
  try {
    const roles = await Role.findAll({
      include: [{
        model: User,
        attributes: ['id', 'displayName', 'avatarUrl', 'email']
      }]
    });

    return res.status(200).json(roles);
  } catch (error) {
    return next(new RespondError(BAD_REQ_MSG, 400));
  }
}

async function showRole(req, res, next) {
  const roleId = req.params.id;
  try {
    const role = await Role.findOne({
      where: {
        id: roleId
      },
      include: [{
        model: User,
        attributes: ['firstName', 'lastName', 'displayName', 'avatarUrl', 'email']
      }]
    });
    return res.status(200).json(role);
  } catch (error) {
    return next(new RespondError(BAD_REQ_MSG, 400));
  }
}

function updateRole(req, res, next) {
  const roleId = req.params.id;
  return Role.findOne({ where: { id: roleId } })
  .then(role => {
    if (!role) {
      return next(new RespondError(ACCOUNT_404_MSG, 404));
    }
    const updates = req.body;
    role.updateAttributes(updates)
      .then(updated => {
        return updated;
      })
      .then(respondWithResult(202, res))
      .catch(handleError(res));
  });
}

export {
  getAll,
  showRole,
  updateRole
};
