import express from 'express';
import { processQuery } from '../../lib';
import { isAuthenticated } from '../auth/auth.service';
import * as ctrl from './article.controller';

const router = express.Router();

router.route('/')
  .get(processQuery, ctrl.getAllArticles)
  .post(isAuthenticated(), ctrl.createNewArticle);

router.route('/:slug')
  .get(ctrl.findArticleBySlug)
  .put(isAuthenticated(), ctrl.updateArticleBySlug)
  .delete(isAuthenticated(), ctrl.deleteArticleById);

router.get('/id/:id', ctrl.showArticle);

router.route('/:id')
  // .put(isAuthenticated(), ctrl.updateArticleById)
  .delete(isAuthenticated(), ctrl.deleteArticleBySlug);

router.route('/:id/tags')
  .post(isAuthenticated(), ctrl.addTagToArticle);

export default router;
