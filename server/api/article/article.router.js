import { processQuery } from '../../lib';
import { isAuthenticated, hasRole } from '../../auth/authService';
import * as ctrl from './article.controller';

export default (app, router) => {
  router.get('/articles', processQuery, ctrl.getAllArticles);
  router.get('/articles/:id', ctrl.showArticle);
  router.post('/articles', isAuthenticated(), ctrl.createArticle);
};
