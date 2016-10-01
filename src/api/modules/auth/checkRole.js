import jwt from 'jsonwebtoken';
import compose from 'composable-middleware';
import conf from '../../config/config';
import ensureAuthenticated from './ensureAuthenticated';

const debug = require('debug')('boldr:auth-ensureAuth');

/**
 * Checks if the user role meets the minimum requirements of the route
 * @param {String} requiredRole - the role to check for
 * @returns {Function} - express middleware
 */
function checkRole(requiredRole) {
  if (!requiredRole) {
    throw new Error('Required role needs to be set');
  }

  return compose()
    .use(ensureAuthenticated)
    .use(function meetsRequirements(req, res, next) {
      if (req.role >= requiredRole) {
        return next();
      } else {
        return res.send(403);
      }
    });
}
export default checkRole;
