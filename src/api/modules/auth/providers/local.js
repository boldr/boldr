import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';

const debug = require('debug')('boldr:auth-local');

export default function configurePassport(User) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email, password, done) => {
    const user = await User.query().where({ email }).eager('role').first();
    debug('user', user);

    if (!user) {
      debug('no user');
      return done(null, false);
    }

    if (!bcrypt.compareSync(password, user.password)) {
      debug('bad password');
      return done(null, false);
    }

    debug('authenticated');
    return done(null, user);
  }));
}
