import findQuery from 'objection-find';
import slugify from 'slugify';
import { responseHandler, throwNotFound } from '../../utils';
import Tag from '../tag/tag.model';
import Post from './post.model';
import PostTag from './postTag.model';

const debug = require('debug')('boldr:post-controller');

function index(req, res) {
  return findQuery(Post)
    .build(req.query.filter)
    .eager(req.query.include)
    // .orderBy(req.query.sort.by, req.query.sort.order)
    .page(req.query.page.number, req.query.page.size)
    .then(users => responseHandler(null, res, 200, users))
    .catch(err => responseHandler(err, res));
}

async function create(req, res) {
  try {
    const newPost = await Post.query().insert({
      title: req.body.title,
      slug: slugify(req.body.title),
      excerpt: req.body.excerpt,
      content: req.body.content,
      feature_image: req.body.feature_image,
      user_id: req.user.id
    });
    await newPost.$relatedQuery('author').relate({ id: req.user.id });
    debug('the post', newPost);
    const existingTag = await Tag.query().where('name', req.body.tag).first();
    if (existingTag) {
      debug(existingTag, 'existing tag found');
      const taggedPost = await PostTag.query().insert({
        tag_id: existingTag.id,
        post_id: newPost.id
      });
      debug(taggedPost);
    } else {
      await newPost.$relatedQuery('tags').insert({ name: req.body.tag });
    }
    return res.status(201).json(newPost);
  } catch (error) {
    return responseHandler(error, res);
  }
}

async function getSlug(req, res) {
  const post = await Post
    .query()
    .where({ slug: req.params.slug })
    .eager('[tags, author]')
    .first();
  return responseHandler(null, res, 200, post);
}

async function getId(req, res) {
  const post = await Post
    .query()
    .findById(req.params.id)
    .eager('[tags, author]')
    .first();
  return responseHandler(null, res, 200, post);
}

async function destroy(req, res) {
  await Post
    .query()
    .delete()
    .where('id', req.params.id);

  res.status(204).send({});
}

function update(req, res) {
  return Post.query()
    .patchAndFetchById(req.params.id, req.body)
    .then(post => res.status(201).json(post));
}

async function addTag(req, res) {
  const post = await Post
    .query()
    .findById(req.params.id);

  if (!post) {
    return throwNotFound();
  }

  const tag = await post
     .$relatedQuery('tags')
     .insert(req.body);

  return res.status(202).json(tag);
}

export { index, create, getSlug, destroy, update, getId, addTag };
