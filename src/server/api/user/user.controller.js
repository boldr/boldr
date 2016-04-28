import _debug from 'debug';

import User from '../../db/models/user';
import config, { paths } from '../../../../tools/config';
import { returnCode, response, respond } from '../../utils';


const debug = _debug('boldr:user:controller');
debug('init');
/**
 * Returns a listing of all the user accounts in the database.
 * @method getUsers
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
export async function getUsers(ctx) {
  const users = await User.fetchAll({
    columns: ['display_name', 'username', 'id', 'avatar', 'email']
  });
  ctx.body = users;
}

/**
 * Performs a lookup of a user by their id.
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {object}        the user object.
 */
export async function getUserById(ctx, next) {
  try {
    const user = await User.where('id', ctx.params.id).fetch({
      columns: ['display_name', 'username', 'id', 'avatar', 'email']
    });
    if (!user) {
      return respond(400, {
        message: 'User is Not Found'
      }, ctx);
    }

    ctx.body = user;
  } catch (err) {
    if (err === 404 || err.name === 'CastError') {
      return respond(400, {
        message: 'User is Not Found'
      }, ctx);
    }
  }
}

export async function updateUser(ctx) {
  const user = ctx.body.user;
  Object.assign(user, ctx.request.body.user);
  await user.save();

  ctx.body = {
    user
  };
}

export async function deleteUser(ctx) {
  const user = ctx.body.user;

  await user.remove();

  ctx.status = 200;
  ctx.body = {
    success: true
  };
}