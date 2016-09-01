import passport from 'passport';

import { User } from '../../db/models';
import { conf } from './index';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const debug = require('debug')('boldr:passport');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: conf.get('session.secret')
};

debug('init passport');
export default function configureJwtStrategies() {
  const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    debug(payload);
    User.findOne({ where: { userId: payload.userId } })
      .then(user => {
        if (err) { return done(err, false); }

        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
  });
}
passport.use(jwtLogin);
//
// passport.use(new LinkedInStrategy({
//   clientID: LINKEDIN_KEY,
//   clientSecret: LINKEDIN_SECRET,
//   callbackURL: '/auth/linkedin/callback',
//   scope: ['r_emailaddress', 'r_basicprofile', 'w_share'],
// }, (...args) => {
//   process.nextTick((accessToken, refreshToken, profile, done) => {
//   });
// }
// ));
//
// passport.use(new TwitterStrategy(
//   {
//     consumerKey: TWITTER_CONSUMER_KEY,
//     consumerSecret: TWITTER_CONSUMER_SECRET,
//     callbackURL: '/auth/twitter/callback',
//   }, (token, tokenSecret, profile, done) => {
//     const userTwitterInfo = {
//       token,
//       tokenSecret,
//       profile,
//     };
//     done(null, userTwitterInfo);
//   }
// ));
//
//
// passport.use(new FacebookStrategy({
//   clientID: FACEBOOK_APP_ID,
//   clientSecret: FACEBOOK_APP_SECRET,
//   callbackURL: '/auth/facebook/callback',
// }, (accessToken, refreshToken, profile, cb) => {
//   cb(accessToken, refreshToken, profile);
// }
// ));
