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

const authGithub = (req, res) => {
  const accessTokenUrl = 'https://github.com/login/oauth/access_token';
  const userUrl = 'https://api.github.com/user';

  const params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.GITHUB_SECRET,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };

  // Step 1. Exchange authorization code for access token.
  request.post(accessTokenUrl, {
    json: true,
    form: params
  }, (err, response, token) => {
    const accessToken = token.access_token;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'User-Agent': 'BoldrCMS'
    };
    // Step 2. Retrieve user's profile information.
    request.get({
      url: userUrl,
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
            github: profile.id
          }
        })
          .then((user) => {
            if (user) {
              return Boom.conflict('There is already an existing account linked with Github that belongs to you.');
            }
            user = req.user;
            user.set('firstName', user.get('firstName') || profile.name);
            user.set('picture', user.get('picture') || profile.avatar_url);
            user.set('location', user.get('location') || profile.location);
            user.set('github', profile.id);
            user.save(user.changed, { patch: true }).then(() => {
              res.send({ token: makeToken(user), user });
            });
          });
      } else {
        // Step 3b. Create a new user account or return an existing one.
        User.find({
          where: {
            github: profile.id
          }
        })
          .then((user) => {
            if (user) {
              return res.send({ token: makeToken(user), user });
            }
            User.find({
              where: {
                github: profile.id
              }
            })
              .then((user) => {
                if (user) {
                  return Boom.conflict('There is already an existing account linked with Github that belongs to you.');
                }
                user = User.create({
                  firstName: profile.name,
                  email: profile.email,
                  location: profile.location,
                  picture: profile.avatar_url,
                  github: profile.id
                })
                .then((user) => {
                  res.status(200).send({
                    token: makeToken(user), user
                  });
                });
              });
          });
      }
    });
  });
};

const authGithubCallback = (req, res) => {
  res.send('loading');
};

export { authGithub, authGithubCallback };
