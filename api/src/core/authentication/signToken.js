import jwt from 'jsonwebtoken';
import conf from '../../config/config';

function signToken(account) {
  // const roleinfo = account.role[0];
  const timestamp = new Date().getTime();
  const payload = {
    sub: account.id,
    iat: timestamp,
    email: account.email
  };
  return jwt.sign(payload, conf.get('session.secret'), { expiresIn: 60 * 60 * 5 });
}

export default signToken;
