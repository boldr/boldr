import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { responseHandler, encryptPassword, generateVerifyCode } from '../../../utils';
import conf from '../../../config/config';

const EXISTS = `There is already a Facebook account that belongs to you. Sign in with
that account or delete it, then link it with your current account.`;

export default function configureFacebook(User) {
  passport.use(new FacebookStrategy({
    clientID: conf.get('social.facebook.id'),
    clientSecret: conf.get('social.facebook.secret'),
    callbackURL: '/api/v1/auth/facebook/callback',
    profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
    passReqToCallback: true
  }, (req, accessToken, refreshToken, profile, done) => {
    if (req.user) {
      User.query().where({ facebook_id: profile.id }, (err, existingUser) => {
        if (existingUser) {
          responseHandler(new Error(EXISTS), res, 409);
          done(err);
        } else {
          User.query().findById(req.user.id, (err, user) => {
            user.facebook_id = profile.id;
            user.account_token = accessToken;
            user.first_name = profile.name.givenName;
            user.last_name = profile.name.familyName;
            user.avatar_url = user.avatar_url || `https://graph.facebook.com/${profile.id}/picture?type=large`;
            user.save((err) => {
              res.send('Facebook account has been linked.');
              done(err, user);
            });
          });
        }
      });
    } else {
      User.query().where({ facebook_id: profile.id }, (err, existingUser) => {
        if (existingUser) {
          return done(null, existingUser);
        }
        User.query().where({ email: profile._json.email }, (err, existingEmailUser) => {
          if (existingEmailUser) {
            done(err);
          } else {
            const user = new User();
            user.email = profile._json.email;
            user.facebook_id = profile.id;
            user.account_token = accessToken;
            user.first_name = profile.name.givenName;
            user.last_name = profile.name.familyName;
            user.avatar_url = user.avatar_url || `https://graph.facebook.com/${profile.id}/picture?type=large`;
            user.location = (profile._json.location) ? profile._json.location.name : '';
            user.save((err) => {
              done(err, user);
            });
          }
        });
      });
    }
  }));
}
