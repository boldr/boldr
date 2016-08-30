import Debug from 'debug';

import { User, Role } from '../../db/models';
import { respondWithResult, handleError, saveUpdates,
  handleEntityNotFound, removeEntity } from '../../lib/helpers';
import { RespondError, BAD_REQ_MSG, ACCOUNT_404_MSG, UNAUTHORIZED_MSG } from '../../lib';

const debug = Debug('boldr:userController');

/**
 * Load user and append to req.
 */
function load(req, res, next, id) {
  User.findById(id).then(user => {
    req.user = user;    // eslint-disable-line no-param-reassign
    debug(req.user);
    return next();
  }).catch(err => next(new RespondError(BAD_REQ_MSG, 400)));
}

/**
 * @api {get} /users       Get all users
 * @apiVersion 1.0.0
 * @apiName getAllUsers
 * @apiGroup User
 */
async function getAllUsers(req, res, next) {
  try {
    const users = await User.find({
      include: [Role],
      through: {
        attributes: []
      }
    });

    return res.status(200).json(users);
  } catch (error) {
    return next(new RespondError(BAD_REQ_MSG, 400, true));
  }
}


/**
 * @api {get} /users/:id       Get the requested user's information
 * @apiName showUser
 * @apiGroup User
 * @apiParam {String} id       User's uuid
 */
function showUser(req, res, next) {
  const userId = req.params.id;

  return User.findOne({
    where: {
      id: userId
    },
    include: {
      model: Role,
      attributes: ['name', 'id'],
      through: {
        attributes: []
      }
    }
  }).then(user => {
    if (!user) {
      return next(new RespondError(ACCOUNT_404_MSG, 404, true));
    }
    return res.status(200).json(user);
  })
  .catch(err => next(new RespondError(BAD_REQ_MSG, 400)));
}

/**
 * @api {put} /users/:id            Update the user's information
 * @apiName updateUser
 * @apiGroup User
 * @apiParam {String} ID            User's uuid
 * @apiParam {String} location      The user's location
 * @apiParam {String} firstName     The user's first name
 * @apiParam {String} lastName      The user's last name
 * @apiParam {String} displayName   The user's display name / user name
 * @apiParam {String} website       The user's website
 *
 */
function updateUser(req, res, next) {
  const userId = req.params.id;

  return User.findById(userId)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

/**
 * @api {put} /users/:id/password   Change a user's password
 * @apiName changePassword
 * @apiGroup User
 * @apiParam {String} ID            User's uuid
 * @apiParam {String} oldPassword   The original password
 * @apiParam {String} newPassword   The new password
 */
function changePassword(req, res, next) {
  const userId = req.user.id;
  const oldPass = String(req.body.oldPassword);
  const newPass = String(req.body.newPassword);

  return User.findById(userId)
    .then(user => {
      if (user.authenticate(oldPass)) {
        user.password = newPass;
        return user.save()
          .then(() => {
            return res.status(204).end();
          })
          .catch(handleError(res));
      } else {
        return res.status(403).end();
      }
    });
}

/**
 * @api {delete} /users/:id         Delete the requested user.
 * @apiName destroyUser
 * @apiGroup User
 * @apiParam {String} ID            User's uuid
 */
function destroyUser(req, res) {
  const userId = req.params.id;
  return User.find({
    where: {
      id: userId
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

/**
 * @api {get} /users/me    Return information on the authenticated user.
 * @apiName me
 * @apiGroup User
 */
function me(req, res, next) {
  const userId = req.user.id;
  return User.findById(userId).then(user => {
    if (!user) {
      return next(new RespondError(UNAUTHORIZED_MSG, 401));
    }
    res.json(user);
  })
  .catch(err => next(new RespondError(BAD_REQ_MSG, 400)));
}
/**
 * @api {put} /users/me
 * @apiName updateMyInfo
 * @apiGroup User
 * @apiDescription
 *   Edit the authenticated user's information. This is different than
 *   editing by ID, which is intended for admin user.
 */
function updateMyInfo(req, res, next) {
  const userId = req.user.id;

  return User.findById(userId)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export {
  load,
  getAllUsers,
  showUser,
  updateUser,
  changePassword,
  destroyUser,
  updateMyInfo,
  me
};
