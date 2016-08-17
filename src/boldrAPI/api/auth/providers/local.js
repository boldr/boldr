import { Router } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import * as auth from '../auth.service';

export default function configurePassport(User) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false // this is the virtual field on the model
  }, (email, password, done) => {
    User.find({
      where: {
        email: email.toLowerCase()
      }
    })
      .catch(done)
      .then((user) => {
        if (!user) {
          return done(null, false, { message: 'This email is not registered.' });
        } else if (!user.authenticate(password)) {
          return done(null, false, { message: 'This password is not correct.' });
        } else {
          return done(null, user);
        }
      });
  }));
}
