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
export const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    Boom.unathorized('Sorry your credentials could not be verfied. Please login and try again.');
  }
};

/**
 * handleLogin
 * Sign in with email and password
 */
export const handleLogin = (req, res, next) => {
  User.findByEmail(req.body.email)
      .then((user) => {
        if (!user) {
          return Boom.unauthorized(`The email address ${req.body.email} is not
            associated with any account. Double-check your email address and try again.`);
        }
        user.authenticate(req.body.password, (err, isMatch) => {
          if (!isMatch) {
            return Boom.unauthorized('Invalid email or password');
          }
          res.status(200).send({ token: makeToken(user), user: user.toJSON() });
        });
      });
};

/**
 * DELETE /account
 */
const accountDelete = (req, res, next) => {
  return User.findById(req.user.id).destroy().then((user) => {
    res.status(204).json('Your account has been permanently deleted.');
  });
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
          return res.status(400).send({ msg: 'Invalid OAuth Provider' });
      }
      user.save(user.changed, { patch: true }).then(() => {
        res.status(204).json('Your account has been unlinked.');
      });
    });
};


/**
 * POST /auth/facebook
 * Sign in with Facebook
 */
export function authFacebook(req, res) {
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

export const authFacebookCallback = (req, res) => {
  res.send('loading');
};

export const authGoogle = (req, res) => {
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

export const authGoogleCallback = (req, res) => {
  res.send('loading');
};

export const authTwitter = (req, res) => {
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
export const authTwitterCallback = (req, res) => {
  res.send('loading');
};

export const authGithub = (req, res) => {
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
        return res.status(500).send({ message: profile.error.message });
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
              return res.status(409).send({ msg: 'There is already an existing account linked with Github that belongs to you.' });
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
                  return res.status(400).send({ msg: user.get('email') + ' is already associated with another account.' });
                }
                user = User.create({
                  firstName: profile.name,
                  email: profile.email,
                  location: profile.location,
                  picture: profile.avatar_url,
                  github: profile.id
                })
                .then(function(user) {
                  res.send({ token: makeToken(user), user });
                });
              });
          });
      }
    });
  });
};

export const authGithubCallback = (req, res) => {
  res.send('loading');
};
