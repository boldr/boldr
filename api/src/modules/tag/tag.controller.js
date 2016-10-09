import findQuery from 'objection-find';
import slugify from 'slugify';
import { responseHandler, throwNotFound } from '../../utils';

import Post from '../post/post.model';
import PostTag from '../post/postTag.model';
import Tag from './tag.model';

const debug = require('debug')('boldr:post-controller');

async function getTaggedPosts(req, res) {
  const tags = await Tag
    .query()
    .findById(req.params.id)
    .eager('[posts]')
    .first();
  return responseHandler(null, res, 200, tags);
}

async function getTaggedPostsByName(req, res) {
  const tags = await Tag
    .query()
    .where({ name: req.params.name })
    .eager('[posts]')
    .first();
  debug(tags);
  return responseHandler(null, res, 200, tags);
}
export { getTaggedPosts, getTaggedPostsByName };
