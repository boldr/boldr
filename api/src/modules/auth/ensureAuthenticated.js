import passport from 'passport';
import config from '../../../../config';

const conf = config.conf;

const debug = require('debug')('boldr:auth-ensureAuth');

const ensureAuthenticated = passport.authenticate('jwt', { session: true });

export default ensureAuthenticated;
