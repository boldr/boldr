const config = require('../config');

let redisClient = null;
let redisStore = null;

export default {
  initializeRedis(client, store) {
    redisClient = client;
    redisStore = store;
  },
  getSessionId(handshake) {
    return handshake.signedCookies[config.session.secret];
  },
  get(handshake, callback) {
    const sessionId = this.getSessionId(handshake);

    this.getSessionBySessionID(sessionId, function(err, session) {
      if (err) callback(err);
      if (callback != undefined)
        callback(null, session);
    });
  },
  getSessionBySessionId(sessionId, callback) {
    redisStore.load(sessionId, function(err, session) {
      if (err) callback(err);
      if (callback != undefined)
        callback(null, session);
    });
  },
  getDisplayName(handshake, callback) {
    this.get(handshake, function(err, session) {
      if (err) callback(err);
      if (session)
        callback(null, session.displayName);
      else
        callback(null);
    });
  },
  updateSession(session, callback) {
    try {
      session.reload(function() {
        session.touch().save();
        callback(null, session);
      });
    } catch (err) {
      callback(err);
    }
  },
  setSessionProperty(session, propertyName, propertyValue, callback) {
    session[propertyName] = propertyValue;
    this.updateSession(session, callback);
  }
};
