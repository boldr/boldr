import { responseHandler } from '../../core/index';
import User from '../../models/user';
import Role from '../../models/role';

export const listRoles = async (req, res, next) => {
  try {
    const roles = await Role.query().eager('users').omit(User, ['password']);

    return responseHandler(res, 200, roles);
  } catch (error) {
    return res.status(500).json(error);
  }
};
