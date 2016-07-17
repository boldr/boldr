
import { Router } from 'express';
import { processQuery } from '../../core';
import { isAuthenticated, hasRole } from '../../auth/authService';
import * as ctrl from './article.controller';

const router = Router();

router.route('/')
	.get(processQuery, ctrl.getAllArticles)
  .post(isAuthenticated(), ctrl.createNewArticle);

router.route('/:articleId')
  .get(ctrl.showArticle);

router.route('/:articleId/tags')
  .post(ctrl.addTagToArticle);

export default router;
