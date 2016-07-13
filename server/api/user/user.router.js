import { isAuthenticated, hasRole } from '../../auth/authService';
import * as ctrl from './user.controller';

export default (app, router) => {
  router.get('/users', ctrl.getAllUsers);
  router.get('/users/me', isAuthenticated(), ctrl.me);
  router.get('/users/:id', ctrl.showUser);
  router.put('/users/:id', isAuthenticated(), ctrl.updateUser);
  router.put('/users/:id/password', isAuthenticated(), ctrl.changePassword);
  router.delete('/users/:id', hasRole('admin'), ctrl.destroyUser);

  // Load user when API with userId route parameter is hit
  router.param('userId', ctrl.load);
};
