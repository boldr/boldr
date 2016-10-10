import jwt from 'jsonwebtoken';
import conf from '../../config/config';

function signToken(user) {
  const roleinfo = user.role[0];
  const timestamp = new Date().getTime();
  const payload = {
    sub: user.id,
    iat: timestamp,
    expiresIn: '24h',
    email: user.email,
    roleId: roleinfo.id,
    role: roleinfo.name
  };

  return jwt.sign(payload, conf.get('session.secret'));
}

export default signToken;
