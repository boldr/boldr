import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';

import localAuthenticate from './localAutenticate';

export function setup(User, config) { // eslint-disable-line
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (email, password, done) => {
    return localAuthenticate(User, email, password, done);
  }));
}
