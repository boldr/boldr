import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../../db/models';
import { logger } from '../../core';

export default function localAuthenticate(User, email, password, done) {
  User.find({
    where: {
      email: email.toLowerCase()
    }
  })
    .then(user => {
      if (!user) {
        return done(null, false, {
          message: 'This email is not registered.'
        });
      }
      user.authenticate(password, (authError, authenticated) => {
        if (authError) {
          return done(authError);
        }
        if (!authenticated) {
          return done(null, false, { message: 'This password is not correct.' });
        } else {
          return done(null, user);
        }
      });
    })
    .catch(err => done(err));
}
