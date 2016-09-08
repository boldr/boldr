import jwt from 'jsonwebtoken';
import { conf } from '../../core';

function signToken(user) {
  const payload = {
    sub: user.id,
    email: user.email,
    roleId: user.role[0].id,
    role: user.role[0].name
  };

  return jwt.sign(payload, conf.get('session.secret'));
}

export default signToken;
