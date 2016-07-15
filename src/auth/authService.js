import jwt from 'jsonwebtoken';
import compose from 'composable-middleware';
import expressJwt from 'express-jwt';
import _ from 'lodash';

import { User } from '../db/models';
import config from '../config/boldr';

const validateJwt = expressJwt({ secret: config.jwt.secret });

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 * @returns {Function} - express middleware
 */
function isAuthenticated() {
  return compose()
  // Validate jwt
  .use((req, res, next) => {
    // allow access_token to be passed through query parameter as well
    if (req.query && req.query.hasOwnProperty('access_token')) {
      req.headers.authorization = `Bearer ${req.query.access_token}`;
    }
    validateJwt(req, res, next);
  })
  // Attach user to request
  .use((req, res, next) => {
    User.find({
      where: {
        id: req.user.id
      }
    }).then(user => {
      if (!user) {
        return res.status(401).end();
      }
      req.user = user;
      next();
    }).catch(err => next(err));
  });
}
const userRoles = ['user', 'staff', 'admin'];

/**
 * Checks if the user role meets the minimum requirements of the route
 * @param {String} roleRequired - the role to check for
 * @returns {Function} - express middleware
 */
function hasRole(roleRequired) {
  if (!roleRequired) throw new Error('Required role needs to be set');

  return compose()
    .use(isAuthenticated())
    .use(function meetsRequirements(req, res, next) { // eslint-disable-line
      if (userRoles.indexOf(req.user.role) >= userRoles.indexOf(roleRequired)) {
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
  return compose()
      // Attach user to request
      .use((req, res, next) => {
        validateJwt(req, res, (val) => {
          if (_.isUndefined(val)) {
            User.findById(req.user.id, (err, user) => {
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
  return compose()
    .use((req, res, next) => {
      if (req.cookies.boldrToken) {
        req.headers.authorization = `Bearer ${_.trim(req.cookies.boldrToken, '"')}`;
      }
      return next();
    });
}

/**
 * Returns a jwt token signed by the app secret
 * @param {String} id - ObjectId of user
 * @returns {Promise} - resolves to the signed token
 */
function signToken(id, role) {
  return new Promise((resolve, reject) => {
    jwt.sign({ id, role }, config.jwt.secret, { expiresIn: config.jwt.expiresIn }, (err, token) => {
      if (err) return reject(err);
      else return resolve(token);
    });
  });
}

/**
 * Set token cookie directly for oAuth strategies
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {*} - forgetaboutit
 */
function setTokenCookie(req, res) {
  if (!req.user) return res.json(404, { message: 'Something went wrong, please try again.' });
  const token = signToken(req.user.id, req.user.role);
  res.cookie('boldrToken', token);
  res.redirect('/');
}

export {
  isAuthenticated,
  hasRole,
  appendUser,
  addAuthHeaderFromCookie,
  signToken,
  setTokenCookie
};
