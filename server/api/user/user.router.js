import { isAuthenticated, hasRole } from '../../middleware/auth/authService';
import * as usersController from './user.controller';

export default (app, router) => {
  router.get('/users', usersController.getAllUsers);
  router.get('/users/me', isAuthenticated(), usersController.me);
  router.get('/users/:id', usersController.showUser);
  router.put('/users/:id', isAuthenticated(), usersController.updateUser);
  router.put('/users/:id/password', isAuthenticated(), usersController.changePassword);
  router.delete('/users/:id', hasRole('admin'), usersController.destroyUser);

  // Load user when API with userId route parameter is hit
  router.param('userId', usersController.load);
};
