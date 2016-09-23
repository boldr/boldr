import passport from 'passport';
import conf from '../../config/config';

const debug = require('debug')('boldr:auth-ensureAuth');

const ensureAuthenticated = passport.authenticate('jwt', { session: true });

export default ensureAuthenticated;
