import jwt from 'jsonwebtoken';
import conf from '../../config/config';

function signToken(user) {
  const roleinfo = user.role[0];
  const payload = {
    sub: user.id,
    email: user.email,
    roleId: roleinfo.id,
    role: roleinfo.name
  };

  return jwt.sign(payload, conf.get('session.secret'));
}

export default signToken;
