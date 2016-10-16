import express from 'express';
import ensureAuthenticated from '../auth/ensureAuthenticated';
import { processQuery } from '../../utils';
import * as ctrl from './post.controller';

const router = express.Router();

router.route('/')
      /**
       * @api {get} /posts?include=[author, tags] Retrieve all posts
       * @apiName listPosts
       * @apiGroup Post
       * @apiPermission public
       * @apiParam [author]
       * @apiParam [tags]
       * @apiSuccess {Object[]} posts List of posts.
       * @apiError {Object} 400 Some parameters may contain invalid values.
       */
      .get(processQuery, ctrl.listPosts)
      /**
       * @api {post} /posts Create a new post
       * @apiName createPost
       * @apiPermission member | admin
       * @apiHeader {String} Authorization {token}
       * @apiSuccess {Object} post The newly created post
       * @apiError {Object} 400 Some parameters may contain invalid values.
       * @apiError {Object} 409 There is already a post with this slug. Slugs (titles) must be unique.
       * @apiError {Object} 401 Unauthorized. You must be logged in to create a post.
       */
      .post(ensureAuthenticated, ctrl.createPost);

router.route('/slug/:slug')
      /**
       * @api {get} /posts/slug/:slug Retrieve a post by its slug.
       * @apiName getSlug
       * @apiGroup Post
       * @apiPermission public
       * @apiSuccess {Object} post The requested post.
       * @apiError {Object} 404 Unable to find a post matching the slug.
       */
      .get(ctrl.getSlug);

router.route('/pid/:id')
      /**
       * @api {get} /posts/pid/:id Retrieve a post by its id.
       * @apiName getId
       * @apiGroup Post
       * @apiPermission public
       * @apiSuccess {Object} post The requested post.
       * @apiError {Object} 404 Unable to find a post matching the id.
       */
      .get(ctrl.getId)
      .post(ctrl.addTag)
      .put(ctrl.update)
      .delete(ctrl.destroy);

export default router;
