import * as ctrl from './setting.controller';

export default (app, router) => {
  router.get('/settings', ctrl.getSettings);
  router.post('/settings', ctrl.createSettings);
  router.put('/settings/:id', ctrl.updateSettings);
};
