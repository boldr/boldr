import logger from '../../lib/logger';

const debug = require('debug')('boldr:sessionService');

debug('session service');
function sessionService(client, sessionServiceOpts) {
  if (sessionServiceOpts.logErrors) {
    if (typeof sessionServiceOpts.logErrors !== 'function') {
      sessionServiceOpts.logErrors = (err) => {
        logger.error(`Warning: express-passport-session-tracker reported an error: ${err}`);
      };
    }
    client.on('error', sessionServiceOpts.logErrors);
  }

  return function logInInterceptor(req, res, next) {
    const oldLogIn = req.logIn;
    const oldLogOut = req.logOut;
    req.login = req.logIn = function(user, options, done) {
      if (typeof options === 'function') {
        done = options;
        options = {};
      }
      oldLogIn.call(req, user, options, () => {
        const passportUser = req.session.passport.user;
        const sessionId = req.sessionID;
        client.sadd(`user:${passportUser}`, sessionId, (err) => {
          debug(passportUser, sessionId);
          if (err && sessionServiceOpts.logErrors) {
            sessionServiceOpts.logErrors(err);
          }
          done();
        });
      });
    };

    req.logout = req.logOut = function() {
      if (req.session && req.session.passport) {
        const passportUser = req.session.passport.user;
        const sessionId = req.sessionID;
        oldLogOut.call(req);
        client.srem(`user:${passportUser}`, sessionId, (err) => {
          if (err && sessionServiceOpts.logErrors) {
            sessionServiceOpts.logErrors(err);
          }
        });
      } else {
        oldLogOut.call(req);
      }
    };

    next();
  };
}

export default sessionService;
