import _ from 'lodash';
import expressJwt from 'express-jwt';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import compose from 'composable-middleware';
import { User } from '../../db/models';

const config = require('../../core/config');

const validateJwt = expressJwt({ secret: config.session.secret });
/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 * @returns {Function} - express middleware
 */
function isAuthenticated() {
  return compose()
   // Validate jwt
    .use(expressJwt({ secret: config.session.secret }))
   // Attach user to request
    .use((req, res, next) => {
      User.findById(req.user.id)
        .then(user => {
          if (!user) {
            res.status(401).end();
          }
          req.user = user;
          next();
          return user;
        }).catch(err => next(err));
    });
}

/**
 * Checks if the user role meets the minimum requirements of the route
 * @param {String} roleRequired - the role to check for
 * @returns {Function} - express middleware
 */
function hasRole(roleRequired) {
  if (!roleRequired) throw new Error('Required role needs to be set');

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
 * @param {String} id - ObjectId of user
 * @returns {Promise} - resolves to the signed token
 */
function signToken(id) {
  return jwt.sign({ id }, config.session.secret, { expiresIn: 60 * 60 * 5 });
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
  res.cookie('token', token);
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
