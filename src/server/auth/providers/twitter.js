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

const authTwitter = (req, res) => {
  const requestTokenUrl = 'https://api.twitter.com/oauth/request_token';
  const accessTokenUrl = 'https://api.twitter.com/oauth/access_token';
  const profileUrl = 'https://api.twitter.com/1.1/users/show.json?screen_name=';

  // Part 1 of 2: Initial POST request to obtain OAuth request token.
  if (!req.body.oauth_token || !req.body.oauth_verifier) {
    const requestTokenOauthSignature = {
      consumer_key: config.TWITTER_KEY,
      consumer_secret: config.TWITTER_SECRET,
      callback: req.body.redirectUri
    };

    // Step 1. Obtain request token to initiate app authorization.
    // At this point nothing is happening inside a popup yet.
    request.post({
      url: requestTokenUrl,
      oauth: requestTokenOauthSignature
    }, (err, response, body) => {
      const oauthToken = qs.parse(body);

      // Step 2. Send OAuth token back.
      // After request token is sent back, a popup will redirect to the Twitter app authorization screen.
      // Unlike Facebook and Google (OAuth 2.0), we have to do this extra step for Twitter (OAuth 1.0).
      res.send(oauthToken);
    });
  } else {
    // Part 2 of 2: Second POST request after "Authorize app" button is clicked.
    // OAuth 2.0 basically starts from Part 2, but with OAuth 1.0 we need to do that extra step in Part 1.
    const accessTokenOauth = {
      consumer_key: config.TWITTER_KEY,
      consumer_secret: config.TWITTER_SECRET,
      token: req.body.oauth_token,
      verifier: req.body.oauth_verifier
    };

    // Step 3. Exchange "oauth token" and "oauth verifier" for access token.
    request.post({
      url: accessTokenUrl,
      oauth: accessTokenOauth
    }, (err, response, accessToken) => {
      accessToken = qs.parse(accessToken);

      const profileOauth = {
        consumer_key: config.TWITTER_KEY,
        consumer_secret: config.TWITTER_SECRET,
        oauth_token: accessToken.oauth_token
      };

      // Step 4. Retrieve user's profile information.
      request.get({
        url: profileUrl + accessToken.screen_name,
        oauth: profileOauth,
        json: true
      }, (err, response, profile) => {
        // Step 5a. Link accounts if user is authenticated.
        if (req.isAuthenticated()) {
          User.find({
            where: {
              twitter: profile.id
            }
          })
          .then((user) => {
            if (user) {
              return Boom.conflict('There is already an existing account linked with Twitter that belongs to you.');
            }
            user = req.user;
            user.set('firstName', user.get('firstName') || profile.name);
            user.set('location', user.get('location') || profile.location);
            user.set('picture', user.get('picture') || profile.profile_image_url_https);
            user.set('twitter', profile.id);
            user.save(user.changed, {
              patch: true
            }).then(() => {
              res.send({ token: makeToken(user), user });
            });
          });
        } else {
        // Step 5b. Create a new user account or return an existing one.
          User.find({
            where: {
              twitter: profile.id
            }
          })
          .then((user) => {
            if (user) {
              return res.send({ token: makeToken(user), user });
            }
            // Twitter does not provide an email address, but email is a required field in our User schema.
            // We can "fake" a Twitter email address as follows: username@twitter.com.
            user = User.create({
              firstName: profile.name,
              email: `${profile.username}@twitter.com`,
              location: profile.location,
              picture: profile.profile_image_url_https,
              twitter: profile.id
            })
              .then((user) => {
                res.send({ token: makeToken(user), user });
              });
          });
        }
      });
    });
  }
};
//
const authTwitterCallback = (req, res) => {
  res.send('loading');
};

export { authTwitter, authTwitterCallback };
