import * as ctrl from './category.controller';

export default (app, router) => {
  router.get('/category', ctrl.listAll);
  router.post('/category', ctrl.createOne);
};
