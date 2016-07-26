import Boom from 'boom';
import { User } from '../../db/models';
import { respondWithResult, handleError, saveUpdates,
  handleEntityNotFound, removeEntity } from '../../lib/helpers';

/**
 * Load user and append to req.
 */
function load(req, res, next, id) {
  User.findById(id).then(user => {
    req.user = user;    // eslint-disable-line no-param-reassign
    return next();
  }).error(e => next(e));
}

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({});

    return res.status(200).json(users);
  } catch (error) {
    Boom.badRequest({ message: error });
    next();
  }
};

function showUser(req, res, next) {
  const userId = req.params.id;

  return User.findById(userId).then(user => {
    if (!user) {
      return Boom.notFound();
    }
    res.status(200).json(user);
  })
  .catch(err => next(err));
}

function updateUser(req, res, next) {
  const userId = req.params.id;

  return User.findById(userId)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

/**
 * Change a user's password
 * @param  {Object}   req  The request object
 * @param  {Object}   res  The response object
 * @param  {Function} next move along
 * @return {User}
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
            res.status(204).end();
          })
          .catch(handleError(res));
      } else {
        return res.status(403).end();
      }
    });
}

/**
 * Destroy user.
 * @returns {User}
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


function me(req, res, next) {
  const userId = req.user.id;
  return User.find({
    where: {
      id: userId
    }
  }).then(user => { // don't ever give out the password or salt
    if (!user) {
      return Boom.unauthorized();
    }
    res.json(user);
  })
  .catch(err => next(err));
}

export {
  load,
  getAllUsers,
  showUser,
  updateUser,
  changePassword,
  destroyUser,
  me
};
