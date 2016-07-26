import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

const config = require('../../core/config/config');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.get('session_secret')
};

export function setup(User) {
  passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.sub)
      .catch(done)
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'This email is not registered.' });
        } else {
          return done(null, user);
        }
      });
  }));
}
