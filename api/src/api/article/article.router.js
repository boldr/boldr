
import { Router } from 'express';
import { processQuery } from '../../lib';
import { isAuthenticated } from '../../auth/auth.service';
import * as ctrl from './article.controller';

const router = Router();

router.route('/')
	.get(processQuery, ctrl.getAllArticles)
  .post(isAuthenticated(), ctrl.createNewArticle);

router.route('/:slug')
  .get(ctrl.findArticleBySlug)
  .put(isAuthenticated(), ctrl.updateArticleBySlug)
  .delete(isAuthenticated(), ctrl.deleteArticleById);

router.route('/:articleId')
  .get(ctrl.showArticle)
  .put(isAuthenticated(), ctrl.updateArticleById)
  .delete(isAuthenticated(), ctrl.deleteArticleBySlug);

router.route('/:articleId/tags')
  .post(isAuthenticated(), ctrl.addTagToArticle);

export default router;
