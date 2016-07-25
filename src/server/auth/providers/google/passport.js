import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import config from '../../../core/config';
import googleAuthenticate from './google';

export default (passport) => {
  passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_ID,
    clientSecret: config.GOOGLE_SECRET,
    callbackURL: '/auth/google/callback'
  }, googleAuthenticate));
};