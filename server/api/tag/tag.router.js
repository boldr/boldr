import * as ctrl from './tag.controller';

export default (app, router) => {
  router.get('/tags', ctrl.getAllTags);
  router.post('/tags', ctrl.createTag);
  router.get('/tags/:id', ctrl.showTag);
  router.put('/tags/:id', ctrl.updateTag);
  router.delete('/tags/:id', ctrl.destroyTag);
};
