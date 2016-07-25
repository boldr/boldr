import _ from 'lodash';
import expressJwt from 'express-jwt';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import compose from 'composable-middleware';
import { User } from '../db/models';
import config from '../core/config';

const validateJwt = expressJwt({ secret: config.SESSION_SECRET });
export const requireAuth = passport.authenticate('jwt', { session: false });
/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 * @returns {Function} - express middleware
 */
export function isAuthenticated() {
  return compose()
        // Validate jwt
        .use((req, res, next) => {
            // allow access_token to be passed through query parameter as well
          if (req.query && req.query.hasOwnProperty('access_token')) {
            req.headers.authorization = `Bearer ${req.query.access_token}`;
          }
          if (req.query && req.cookies.hasOwnProperty('token')) {
            req.headers.authorization = `Bearer ${req.cookies.token}`;
          }
          validateJwt(req, res, next);
        })
        // Attach user to request
        .use((req, res, next) => {
          User.findById(req.user._id, (err, user) => {
            if (err) return next(err);
            if (!user) return res.status(401).end();

            req.user = user;
            next();
          });
        });
}

/**
 * Checks if the user role meets the minimum requirements of the route
 * @param {String} roleRequired - the role to check for
 * @returns {Function} - express middleware
 */
// export function hasRole(roleRequired) {
//   if (!roleRequired) throw new Error('Required role needs to be set');
//
//   return compose()
//         .use(isAuthenticated())
//         .use(function meetsRequirements(req, res, next) {
//           if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
//             return next();
//           } else {
//             return res.send(403);
//           }
//         });
// }

/**
 * If there is a user, appends it to the req
 * else req.user would be undefined
 * @returns {Function} - express middleware
 */
export function appendUser() {
  return compose()
        // Attach user to request
        .use((req, res, next) => {
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
export function addAuthHeaderFromCookie() {
  return compose()
        .use((req, res, next) => {
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
export function signToken(id) {
  return new Promise((resolve, reject) => {
    jwt.sign({ id }, config.SESSION_SECRET, { expiresIn: 60 * 60 * 5 }, (err, token) => {
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
export function setTokenCookie(req, res) {
  if (!req.user) return res.json(404, { message: 'Something went wrong, please try again.' });
  const token = signToken(req.user.id, req.user.role);
  res.cookie('token', token);
  res.redirect('/');
}
