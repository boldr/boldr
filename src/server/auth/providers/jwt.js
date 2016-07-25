import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import config from '../../core/config';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.SESSION_SECRET
};

export function setup(User) {
  passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.sub)
      .catch(done)
      .then((user) => {
        if (!user) {
          return done(null, false, { message: 'This email is not registered.' });
        } else {
          return done(null, user);
        }
      });
  }));
}
