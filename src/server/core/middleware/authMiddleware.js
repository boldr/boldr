import Boom from 'boom';
import jwt from 'jsonwebtoken';
import models, { User } from '../../db/models';

export default (req, res, next) => {
  req.isAuthenticated = function() {
    const token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
    try {
      return jwt.verify(token, process.env.SESSION_SECRET);
    } catch (err) {
      return false;
    }
  };

  if (req.isAuthenticated()) {
    const payload = req.isAuthenticated();
    const userId = payload.sub;
    User.findById(userId)
      .then((user) => {
        req.user = user;
        next();
      });
  } else {
    next();
  }
};
