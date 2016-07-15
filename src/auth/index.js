import passport from 'passport';
import { User } from '../db/models';
import google from './google/passport';
import facebook from './facebook/passport';

export default () => {
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
      done(null, user);
    }).catch(done);
  });

  require('./local/passport').setup(User);

  facebook(passport);
  google(passport);
};
