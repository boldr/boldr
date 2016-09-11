import findQuery from 'objection-find';
import { responseHandler, throwNotFound } from '../../utils';
import User from './user.model';

const debug = require('debug')('boldr:user-controller');

async function index(req, res) {
  const users = await User.query().eager('role').omit(['password', 'account_token']);
  return responseHandler(null, res, 200, users);
}

function show(req, res) {
  return User.query()
    .findById(req.params.id)
    .then(user => {
      if (!user) return throwNotFound(res);
      user.stripPassword();
      return responseHandler(null, res, 200, user);
    })
    .catch(err => responseHandler(err, res));
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
