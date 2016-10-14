import jwt from 'jsonwebtoken';
import conf from '../../config/config';

function signToken(account) {
  // const roleinfo = account.role[0];
  const timestamp = new Date().getTime();
  const payload = {
    sub: account.id,
    iat: timestamp,
    expiresIn: '24h',
    email: account.email
  };

  return jwt.sign(payload, conf.get('session.secret'));
}

export default signToken;
