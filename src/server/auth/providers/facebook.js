import crypto from 'crypto';
import qs from 'querystring';
import async from 'async';
import request from 'request';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import Boom from 'boom';

import config from '../../core/config';
import { User } from '../../db/models';
import { makeToken } from '../authenticator';

/**
 * POST /auth/facebook
 * Sign in with Facebook
 */
function authFacebook(req, res) {
  const profileFields = ['id', 'name', 'email', 'gender', 'location'];
  const accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
  const graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + profileFields.join(','); // eslint-disable-line

  const params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.FACEBOOK_SECRET,
    redirect_uri: req.body.redirectUri
  };

  // Step 1. Exchange authorization code for access token.
  request.get({ url: accessTokenUrl, qs: params, json: true },
    (err, response, accessToken) => {
      if (accessToken.error) {
        return Boom.badRequest({ message: accessToken.error.message });
      }

      // Step 2. Retrieve user's profile information.
      request.get({
        url: graphApiUrl,
        qs: accessToken,
        json: true
      }, (err, response, profile) => {
        if (profile.error) {
          return Boom.badRequest({ message: profile.error.message });
        }

        // Step 3a. Link accounts if user is authenticated.
        if (req.isAuthenticated()) {
          User.find({
            where: {
              facebook: profile.id
            }
          })
            .then((user) => {
              if (user) {
                return Boom.conflict('There is already an existing account linked with Facebook that belongs to you.');
              }
              user = req.user;
              user.set('firstName', user.get('firstName') || profile.name);
              user.set('gender', user.get('gender') || profile.gender);
              user.set('picture', user.get('picture') || 'https://graph.facebook.com/' + profile.id + '/picture?type=large'); // eslint-disable-line
              user.set('facebook', profile.id);
              user.save(user.changed, { patch: true }).then(() => {
                res.send({ token: makeToken(user), user });
              });
            });
        } else {
        // Step 3b. Create a new user account or return an existing one.
          User
          .findOne({ where: { facebook: profile.id } })
          .then((user) => {
            if (user) {
              return res.send({ token: makeToken(user), user });
            }
            User
              .findOne({ where: { email: profile.email } })
              .then(user => {
                if (user) {
                  return res.status(400).send({ msg: user.get('email') + ' is already associated with another account.' }); // eslint-disable-line
                }
                user = User.create({
                  firstName: profile.name,
                  email: profile.email,
                  gender: profile.gender,
                  location: profile.location && profile.location.name,
                  picture: `https://graph.facebook.com/${profile.id}/picture?type=large`,
                  facebook: profile.id
                })
                .then((user) => {
                  return res.send({ token: makeToken(user), user });
                });
              });
          });
        }
      });
    });
}

const authFacebookCallback = (req, res) => {
  res.send('loading');
};

export { authFacebook, authFacebookCallback };
