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

const authGoogle = (req, res) => {
  const accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
  const peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';

  const params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.GOOGLE_SECRET,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };

  // Step 1. Exchange authorization code for access token.
  request.post(accessTokenUrl, { json: true, form: params },
    (err, response, token) => {
      const accessToken = token.access_token;
      const headers = { Authorization: `Bearer ${accessToken}` };

      // Step 2. Retrieve user's profile information.
      request.get({
        url: peopleApiUrl,
        headers,
        json: true
      }, (err, response, profile) => {
        if (profile.error) {
          return Boom.badRequest({ message: profile.error.message });
        }

        // Step 3a. Link accounts if user is authenticated.
        if (req.isAuthenticated()) {
          User.find({
            where: {
              google: profile.sub
            }
          })
            .then((user) => {
              if (user) {
                return Boom.conflict('There is already an existing account linked with Google that belongs to you.');
              }
              user = req.user;
              user.set('firstName', user.get('firstName') || profile.name);
              user.set('gender', user.get('gender') || profile.gender);
              user.set('location', user.get('location') || profile.location);
              user.set('picture', user.get('picture') || profile.picture.replace('sz=50', 'sz=200')); // eslint-disable-line
              user.set('google', profile.sub);
              user.save(user.changed, { patch: true }).then(() => {
                res.send({ token: makeToken(user), user });
              });
            });
        } else {
        // Step 3b. Create a new user account or return an existing one.
          User
          .findOne({ where: { google: profile.sub } })
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
                  location: profile.location,
                  picture: profile.picture.replace('sz=50', 'sz=200'),
                  google: profile.sub
                })
                .then((user) => {
                  return res.send({ token: makeToken(user), user });
                });
              });
          });
        }
      });
    });
};

const authGoogleCallback = (req, res) => {
  res.send('loading');
};

export { authGoogle, authGoogleCallback };
