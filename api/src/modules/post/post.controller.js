import findQuery from 'objection-find';
import slugify from 'slugify';
import uuid from 'node-uuid';
import { responseHandler, throwNotFound } from '../../utils';
import { InternalError, PostNotFoundError } from '../../utils/errors';
import Tag from '../tag/tag.model';
import Post from './post.model';
import PostTag from './postTag.model';

const debug = require('debug')('boldr:post-controller');

function index(req, res) {
  return findQuery(Post)
    .build(req.query.filter)
    .eager(req.query.include)
    .omit(['password', 'reset_password_token', 'account_token', 'reset_password_expiration'])
    // .orderBy(req.query.sort.by, req.query.sort.order)
    .page(req.query.page.number, req.query.page.size)
    .then(users => responseHandler(null, res, 200, users))
    .catch(err => responseHandler(err, res));
}

async function create(req, res) {
  const newPost = await Post.query().insert({
    id: uuid.v4(),
    title: req.body.title,
    slug: slugify(req.body.title),
    excerpt: req.body.excerpt,
    content: req.body.content,
    feature_image: req.body.feature_image,
    meta: req.body.meta,
    user_id: req.user.id
  });

  await newPost.$relatedQuery('author').relate({ id: req.user.id });

  if (req.body.tags) {
    req.body.tags = req.body.tags.split(',', 5).map(tag => tag.substr(0, 15));
  }
    // @TODO There might be a better / more efficient way than a for loop, but
    // fuck it. its late and it works for now.
  for (let i = 0; i < req.body.tags.length; i++) {
    const existingTag = await Tag.query().where('name', req.body.tags[i]).first();
    if (existingTag) {
      debug(existingTag, 'existing tag found');
      const taggedPost = await PostTag.query().insert({
        tag_id: existingTag.id,
        post_id: newPost.id
      });
      debug(taggedPost);
    } else {
      await newPost.$relatedQuery('tags').insert({ name: req.body.tags[i] });
    }
  }
  return res.status(201).json(newPost);
}

async function getSlug(req, res) {
  const post = await Post
    .query()
    .where({ slug: req.params.slug })
    .eager('[tags, author]')
    .omit(['password', 'reset_password_token', 'account_token', 'reset_password_expiration'])
    .first();

  if (!post) {
    return res.status(404).json('Unable to find the requested post.');
  }
  return responseHandler(null, res, 200, post);
}

async function getId(req, res) {
  try {
    const post = await Post
      .query()
      .findById(req.params.id)
      .eager('[tags, author]')
      .omit(['password', 'reset_password_token', 'account_token', 'reset_password_expiration'])
      .first();
    return responseHandler(null, res, 200, post);
  } catch (error) {
    throw new InternalError(error);
  }
}

async function destroy(req, res) {
  try {
    await Post
      .query()
      .delete()
      .where('id', req.params.id);

    res.status(204).send({});
  } catch (error) {
    throw new InternalError(error);
  }
}

function update(req, res) {
  return Post.query()
    .patchAndFetchById(req.params.id, req.body)
    .then(post => res.status(202).json(post));
}

async function addTag(req, res) {
  const post = await Post
    .query()
    .findById(req.params.id);

  if (!post) {
    throw new PostNotFoundError();
  }

  const tag = await post
     .$relatedQuery('tags')
     .insert(req.body);

  return res.status(202).json(tag);
}

export { index, create, getSlug, destroy, update, getId, addTag };
