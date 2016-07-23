
import { Router } from 'express';
import { processQuery } from '../../lib';
import { ensureAuthenticated } from '../../auth/authenticator';
import * as ctrl from './article.controller';

const router = Router();

router.route('/')
	.get(processQuery, ctrl.getAllArticles)
  .post(ensureAuthenticated(), ctrl.createNewArticle);

router.route('/:slug')
  .get(ctrl.findArticleBySlug)
  .put(ensureAuthenticated(), ctrl.updateArticleBySlug)
  .delete(ensureAuthenticated(), ctrl.deleteArticleById);

router.route('/:articleId')
  .get(ctrl.showArticle)
  .put(ensureAuthenticated(), ctrl.updateArticleById)
  .delete(ensureAuthenticated(), ctrl.deleteArticleBySlug);

router.route('/:articleId/tags')
  .post(ensureAuthenticated(), ctrl.addTagToArticle);

export default router;
