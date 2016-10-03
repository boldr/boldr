import findQuery from 'objection-find';
import { responseHandler, throwNotFound } from '../../utils';
import { UserNotFoundError, InternalError } from '../../utils/errors';

import User from './user.model';

const debug = require('debug')('boldr:user-controller');

async function index(req, res) {
  const users = await User.query()
    .eager('role')
    .omit(['password', 'account_token', 'reset_password_token', 'reset_password_expiration']);
  return responseHandler(null, res, 200, users);
}

async function show(req, res) {
  try {
    const user = await User.query()
      .findById(req.params.id)
      .first();
    if (!user) {
      return new UserNotFoundError();
    }
    user.stripPassword();
    return responseHandler(null, res, 200, user);
  } catch (error) {
    throw new InternalError(error);
  }
}

function update(req, res) {
  return User.query()
    .patchAndFetchById(req.params.id, req.body)
    .then(user => res.send(user));
}

function destroy(req, res) {
  return User.query()
    .delete()
    .where('id', req.params.id)
    .then(() => responseHandler(null, res, 204))
    .catch(err => responseHandler(err, res));
}

function unlink(req, res) {
  const provider = req.query.provider;

  const providers = ['facebook'];
  if (providers.indexOf(provider) === -1) {
    return res.status(404).send('Unknown provider');
  }

  return User.query()
    .findById(req.user)
    .update({ [provider]: null })
    .then((user) => {
      res.status(200).send(user);
    });
}

export { index, show, update, destroy, unlink };
