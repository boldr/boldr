import express from 'express';
import { processQuery } from '../../lib';
import { isAuthenticated } from '../../auth/auth.service';
import * as ctrl from './post.controller';

const router = express.Router();

router.route('/')
  .get(processQuery, ctrl.getAllPosts)
  .post(isAuthenticated(), ctrl.createNewPost);

router.route('/:slug')
  .get(ctrl.findPostBySlug)
  .put(isAuthenticated(), ctrl.updatePostBySlug)
  .delete(isAuthenticated(), ctrl.deletePostById);

router.get('/id/:id', ctrl.showPost);

router.route('/:id')
  // .put(isAuthenticated(), ctrl.updatePostById)
  .delete(isAuthenticated(), ctrl.deletePostBySlug);

router.route('/:id/tags')
  .post(isAuthenticated(), ctrl.addTagToPost);

export default router;
