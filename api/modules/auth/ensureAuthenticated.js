import jwt from 'jsonwebtoken';
import conf from '../../core/config/config';

const debug = require('debug')('boldr:auth-ensureAuth');

function ensureAuthenticated(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'No authorization header is present' });
  }

  let payload = null;
  const token = req.headers.authorization.split(' ')[1];
  try {
    payload = jwt.decode(token, conf.get('session.secret'));
    const isValid = jwt.verify(token, conf.get('session.secret'));
    if (isValid) {
      req.user = payload.sub;
    }
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }

  return next();
}

export default ensureAuthenticated;
