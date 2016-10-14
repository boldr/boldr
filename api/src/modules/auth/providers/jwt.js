import passport from 'passport';
import conf from '../../../config/config';


const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: conf.get('session.secret')
};

export default function configureJwt(Account) {
  passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
    const account = await Account.query().findById(payload.sub).first();
    if (!account) {
      return done(null, false, { message: 'This email is not registered.' });
    } else {
      account.stripPassword();
      return done(null, account);
    }
  }));
}
