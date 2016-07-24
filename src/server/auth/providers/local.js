import { Router } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import * as auth from '../auth.service';

export function setup(User) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password' // this is the virtual field on the model
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
const router = new Router();

router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    const error = err || info;
    if (error) return res.status(401).json(error);
    if (!user) return res.status(404).json({ message: 'Something went wrong, please try again.' });

    auth.signToken(user.id, user.role).then(token => {
      res.json({ token, role: user.role });
    }).catch(err => {
      res.status(500).send(err);
    });
  })(req, res, next);
});

export default router;
