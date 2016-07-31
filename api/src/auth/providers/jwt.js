import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

const config = require('../../core/config/boldr');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
  secretOrKey: config.session.secret
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
