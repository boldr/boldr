import _ from 'lodash';
import expressJwt from 'express-jwt';
import jwt from 'jsonwebtoken';
import Debug from 'debug';
import compose from 'composable-middleware';
import { User } from '../db/models';
import config from '../core/config';

const debug = Debug('boldr:auth-service');
const validateJwt = expressJwt({
  secret: config.session.secret
});
/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 * @returns {Function} - express middleware
 */
function isAuthenticated() {
  return compose()
    // Validate jwt
    .use((req, res, next) => {
      if (!req.headers.authorization) {
        return res.status(401).send({
          message: 'No authorization header is present'
        });
      }
      return validateJwt(req, res, next);
    })
    // Attach user to request
    .use(async (req, res, next) => {
      const user = await User.findOne({ where: { id: req.user.userId } });
      if (!user) return res.status(401).end();
      req.user = user;
      return next();
    });
}

/**
 * Checks if the user role meets the minimum requirements of the route
 * @param {String} roleRequired - the role to check for
 * @returns {Function} - express middleware
 */
function hasRole(roleRequired) {
  if (!roleRequired) {
    throw new Error('Required role needs to be set');
  }

  return compose()
    .use(isAuthenticated())
    .use(function meetsRequirements(req, res, next) {
      if (req.user.roleId >= roleRequired) {
        return next();
      } else {
        return res.send(403);
      }
    });
}

/**
 * If there is a user, appends it to the req
 * else req.user would be undefined
 * @returns {Function} - express middleware
 */
function appendUser() {
  return compose().use((req, res, next) => {
    validateJwt(req, res, (val) => {
      if (_.isUndefined(val)) {
        User.findById(req.user._id, (err, user) => {
          if (err) {
            return next(err);
          } else if (!user) {
            req.user = null;
            return next();
          } else {
            req.user = user;
            return next();
          }
        });
      } else {
        req.user = null;
        return next();
      }
    });
  });
}

/**
 * Takes the token cookie and adds the header
 * for it on the request
 * @returns {Function} - express middleware
 */
function addAuthHeaderFromCookie() {
  return compose().use((req, res, next) => {
    if (req.cookies.token) {
      req.headers.authorization = `Bearer ${_.trim(req.cookies.token, '"')}`;
    }
    return next();
  });
}

/**
 * Returns a jwt token signed by the app secret
 * @param {String} userId - ObjectId of user
 * @param {Number} roleId - The user's role id number
 * @returns {Promise} - resolves to the signed token
 */
function signToken(userId) {
  return jwt.sign({
    userId
  }, config.session.secret, {
    expiresIn: 86400
  });
}

export { isAuthenticated, hasRole, appendUser, addAuthHeaderFromCookie, signToken };
