import slug from 'limax';
import sequelize from 'sequelize';
import Boom from 'boom';
import { Post, User, Tag, PostTag} from '../../db/models';

import config from '../../core/config/boldr';
import { respondWithResult, handleError } from '../../lib/helpers';

const debug = require('debug')('boldr:api-article-ctrl');

const MAX_TAGS = 15;

/**
 * @api {get} /posts       Get all posts
 * @apiVersion 1.0.0
 * @apiName getAllPosts
 * @apiGroup Post
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/posts
 *
 * @apiSuccess {String}  id   The Post ID
 */
const getAllPosts = async(req, res, next) => {
  try {
    const posts = await Post.findAll({
      order: [
        ['createdAt', 'DESC']
      ],
      include: [{
        model: User,
        attributes: ['id', 'displayName', 'picture', 'email']
      }, {
        model: Tag,
        attributes: ['name', 'id']
      }]
    });

    return res.status(200).json(posts);
  } catch (error) {
    Boom.badRequest(error);
    return next(error);
  }
};

/**
 * @api {get} /posts/:id  Get a specific post by its id
 * @apiVersion 1.0.0
 * @apiName ShowPost
 * @apiGroup Post
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/posts/1
 *
 * @apiParam {String}    id   The posts' id.
 *
 * @apiSuccess {String}  id   The Post ID
 */
const showPost = async(req, res, next) => {
  const postId = req.params.id;
  try {
    const post = await Post.findOne({
      where: {
        id: postId
      },
      include: [{
        model: User,
        attributes: ['firstName', 'lastName', 'displayName', 'picture', 'email', 'role']
      }, {
        model: Tag,
        attributes: ['name', 'id']
      }]
    });
    return res.status(200).json(post);
  } catch (error) {
    Boom.badRequest(error);
    return next(error);
  }
};

async function addTagToPost(req, res, next) {
  const postId = req.params.postId;
  const alreadyAddedError = () => {
    const error = {
      message: 'Could not add tag to the article. Is it already added?'
    };
    Boom.conflict(error);
  };
  if (req.body.tagname !== undefined) {
    Tag.findOrCreate({
      where: {
        tagname: req.body.tagname.toLowerCase().trim()
      }
    }).spread(tag => PostTag.create({
      postId,
      tagId: tag.id
    }).then(() => {
      const json = tag.toJSON();
      json.article_count = 1;
      res.status(201).send(json);
    }).catch(alreadyAddedError)
    ).catch(err => {
      console.log(res, err);
    });
  } else if (req.body.id !== undefined) {
    const id = req.body.id;
    PostTag.create({
      postId,
      tagId: id
    }).then(obj => {
      const json = obj.toJSON();
      res.status(201).send({
        error: false,
        data: json
      });
    }).catch(alreadyAddedError);
  } else {
    return next();
  }
}

/**
 * Creates a new post and saves it to the database.
 * @method createNewPost
 * @param {String}  title          the title of the post
 * @param {String}  excerpt        a short summary of intro paragraph.
 * @param {String}  content        the post body
 * @param {String}  featureImage   an image to go along with the post
 * @param {Number}  authorId       the userId associated with the creator of the post
 * @param {ENUM}    status         whether or not the post is published
 * @param {Date}    createdAt      the time the post was saved.
 * @return {Object}                the post object
 */
const createNewPost = (req, res, next) => {
  if (req.body.tags) {
    req.body.tags = req.body.tags.split(',', MAX_TAGS).map(tag => tag.substr(0, 15));
  }
  return Post.create({
    title: req.body.title,
    slug: slug(req.body.title),
    excerpt: req.body.excerpt,
    content: req.body.content,
    featureImage: req.body.featureImage,
    authorId: req.user.id,
    status: req.body.status
  }).then(post => {
    for (let i = 0; i < req.body.tags.length; i++) {
      const newTag = Tag.findOrCreate({
        where: {
          name: req.body.tags[i]
        }
      }).spread(tag => PostTag.create({
        postId: post.id,
        tagId: tag.id
      }).then(postTag => {
        debug('postTag', postTag);
        return postTag;
      }).catch(sequelize.ValidationError, error => {
        return Boom.badRequest(error);
      })
      ).catch(sequelize.ValidationError, error => {
        return Boom.badRequest(error);
      });
    }
    return res.status(201).json(post);
  });
};

/**
 * @api {get} /posts/:slug       Get post by its slug.
 * @apiVersion 1.0.0
 * @apiName findPostBySlug
 * @apiGroup Post
 *
 * @apiParam slug                   The slug (title that is all lower case, spaces replaced by dashes.)
 * @apiExample Example usage:
 * curl -X "GET" "http://localhost:3000/api/v1/posts/some-test-post"
 *
 * @apiSuccess {String}  id         The post ID
 * @apiSuccess {String}  title      The post title
 * @apiSuccess {String}  slug       The post slug
 */

const findPostBySlug = (req, res, next) => {
  const postSlug = req.params.slug;
  return Post.findOne({ where: { slug: postSlug },
    include: [{
    model: Tag,
    attributes: ['name', 'id']
  }] })
    .then((post) => {
      if (!post) {
        return Boom.notFound('Unable to find an article with that slug.');
      }
      return res.status(200).json(post);
    });
};

const updatePostById = (req, res, next) => {
  const postId = req.params.id;
  return Post.findById(postId).then(post => {
    debug('update post promise', post);
    if (!post) {
      return Boom.notFound(post);
    }
    const updates = req.body;
    debug('the req.body', updates);
    post.updateAttributes(updates)
      .then(updated => {
        return updated;
      })
      .then(respondWithResult(res))
      .catch(handleError(res));
  });
};

const updatePostBySlug = (req, res, next) => {
  const slug = req.params.slug;
  return Post.findBySlug(slug).then(post => {
    debug('update post promise', post);
    if (!post) {
      return Boom.notFound(post);
    }
    const updates = req.body;
    debug('the req.body', updates);
    post.updateAttributes(updates)
      .then(updated => {
        return updated;
      })
      .then(respondWithResult(202, res))
      .catch(handleError(res));
  });
};

const deletePostById = (req, res, next) => {
  const postId = req.params.postId;
  return Post.findById(postId).then(post => {
    if (!post) {
      return Boom.notFound(post);
    }
    post.destroy()
      .then(() => {
        res.status(204).send({
          error: false
        });
      })
      .catch(handleError(res));
  });
};

const deletePostBySlug = (req, res, next) => {
  const slug = req.params.slug;
  return Post.findBySlug(slug).then(post => {
    if (!post) {
      return Boom.notFound(post);
    }
    post.destroy()
      .then(() => {
        res.status(204).send({
          error: false
        });
      })
      .catch(handleError(res));
  });
};

export { getAllPosts, showPost, addTagToPost, createNewPost, findPostBySlug,
  updatePostById, updatePostBySlug, deletePostById, deletePostBySlug };
