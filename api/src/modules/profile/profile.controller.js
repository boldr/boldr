import { responseHandler, throwNotFound } from '../../utils';
import Profile from './profile.model';

const debug = require('debug')('boldr:profile-controller');

export async function listProfiles(req, res) {
  const profiles = await Profile.query();
  return responseHandler(null, res, 200, profiles);
}

export function getProfile(req, res) {
  return Profile.query()
    .findById(req.params.id)
    .then(profile => {
      if (!profile) return throwNotFound(res);

      return responseHandler(null, res, 200, profile);
    })
    .catch(err => responseHandler(err, res));
}

export function updateProfile(req, res, next) {
  return Profile.query()
    .patchAndFetchById(req.params.id, req.body)
    .then(profile => res.send(profile));
}

export function destroyProfile(req, res) {
  return Profile.query()
    .delete()
    .where('id', req.params.id)
    .then(() => responseHandler(null, res, 204))
    .catch(err => responseHandler(err, res));
}
