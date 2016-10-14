import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

export default function configurePassport(Account) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email, password, done) => {
    const account = await Account.query().where({ email }).eager('[profile, role]').first();
    if (!account) {
      return done(null, false, { message: 'This email is not registered.' });
    }

    const validAuth = await account.authenticate(password);
    if (!validAuth) {
      return done(null, false, { message: 'This password is not correct.' });
    } else {
      return done(null, account);
    }
  }));
}
