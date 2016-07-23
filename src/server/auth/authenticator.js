import crypto from 'crypto';
import qs from 'querystring';
import async from 'async';
import request from 'request';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import Boom from 'boom';

import config from '../core/config';
import { User } from '../db/models';

function makeToken(user) {
  const payload = {
    iss: 'boldr.io',
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(7, 'days').unix()
  };
  return jwt.sign(payload, config.SESSION_SECRET);
}

/**
 * Middleware function for requiring authentication
 * @param  {Object}   req  The request object being sent to Express
 * @param  {object}   res  The response object being sent to the client from Express
 * @param  {Function} next Proceed to the next Middleware
 * @return {Void}        End the middleware
 */
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    Boom.unathorized('Sorry your credentials could not be verfied. Please login and try again.');
  }
};

/**
 * GET /unlink/:provider
 */
const unlink = (req, res, next) => {
  return User.findById(req.user.id)
    .then((user) => {
      switch (req.params.provider) {
        case 'facebook':
          user.set('facebook', null);
          break;
        case 'google':
          user.set('google', null);
          break;
        case 'twitter':
          user.set('twitter', null);
          break;
        case 'github':
          user.set('github', null);
          break;
        default:
          return Boom.badRequest('Invalid OAuth Provider');
      }
      user.save(user.changed, { patch: true }).then(() => {
        res.status(204).json('Your account has been unlinked.');
      });
    });
};

export {
  makeToken,
  ensureAuthenticated,
  unlink
};
