import slug from 'limax';
import Boom from 'boom';
import {
  Article,
  User,
  Tag,
  ArticleTag
} from '../../db/models';
import config from '../../core/config/boldr';
import { respondWithResult, handleError } from '../../lib/helpers';

const debug = require('debug')('boldr:api-article-ctrl');

const MAX_TAGS = 15;

/**
 * @api {get} /articles       Get all articles
 * @apiVersion 1.0.0
 * @apiName getAllArticles
 * @apiGroup Article
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/articles
 *
 * @apiSuccess {String}  id   The Article ID
 */
const getAllArticles = async(req, res, next) => {
  try {
    const articles = await Article.findAll({
      order: [
        ['createdAt', 'DESC']
      ],
      include: [{
        model: User,
        attributes: ['id', 'displayName', 'picture', 'email']
      }, {
        model: Tag,
        attributes: ['tagname', 'id']
      }]
    });

    return res.status(200).json(articles);
  } catch (error) {
    Boom.badRequest(error);
    return next(error);
  }
};

/**
 * @api {get} /articles/:id  Get a specific article by its id
 * @apiVersion 1.0.0
 * @apiName ShowArticle
 * @apiGroup Article
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/articles/1
 *
 * @apiParam {String}    id   The article's id.
 *
 * @apiSuccess {String}  id   The Article ID
 */
const showArticle = async(req, res, next) => {
  const articleId = req.params.id;
  try {
    const article = await Article.find({ where: { id: articleId } }, {
      include: [{
        model: User,
        attributes: ['firstName', 'lastName', 'displayName', 'picture', 'email', 'role']
      }, {
        model: Tag,
        attributes: ['tagname', 'id']
      }]
    });
    return res.status(200).json(article);
  } catch (error) {
    Boom.badRequest(error);
    return next(error);
  }
};

async function addTagToArticle(req, res, next) {
  const articleId = req.params.articleId;
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
    }).spread(tag =>
      ArticleTag.create({
        articleId,
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
    ArticleTag.create({
      articleId,
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
 * Creates a new article and saves it to the database.
 * @method createArticle
 * @param {String}  title          the title of the article
 * @param {String}  excerpt        a short summary of intro paragraph.
 * @param {String}  markup         any HTML from the post body
 * @param {String}  content        the article body
 * @param {String}  featureImage   an image to go along with the article
 * @param {Number}  authorId       the userId associated with the creator of the article
 * @param {ENUM}    status         whether or not the article is published
 * @param {Date}    createdAt      the time the article was saved.
 * @return {Object}                the article object
 */
const createNewArticle = (req, res, next) => {
  if (req.body.tags) {
    req.body.tags = req.body.tags.split(',', MAX_TAGS).map(tag => tag.substr(0, 15));
  }
  return Article.create({
    title: req.body.title,
    slug: slug(req.body.title),
    excerpt: req.body.excerpt,
    markup: req.body.markup,
    content: req.body.content,
    featureImage: req.body.featureImage,
    authorId: req.user.id,
    status: req.body.status
  }).then(article => {
    for (let i = 0; i < req.body.tags.length; i++) {
      const newTag = Tag.findOrCreate({
        where: {
          tagname: req.body.tags[i]
        }
      }).spread(tag =>
        ArticleTag.create({
          articleId: article.id,
          tagId: tag.id
        }).then(articleTag => {
          debug('articleTag', articleTag);
          return res.status(201).json(articleTag);
        }).catch(error => {
          return Boom.badRequest(error);
        })
      ).catch(error => {
        return Boom.badRequest(error);
      });
    }
  });
};
/**
 * @api {get} /articles/:slug       Get article by its slug.
 * @apiVersion 1.0.0
 * @apiName findArticleBySlug
 * @apiGroup Article
 *
 * @apiParam slug                   The slug (title that is all lower case, spaces replaced by dashes.)
 * @apiExample Example usage:
 * curl -X "GET" "http://localhost:3000/api/v1/articles/some-test-post"
 *
 * @apiSuccess {String}  id         The Article ID
 * @apiSuccess {String}  title      The article title
 * @apiSuccess {String}  slug       The articles slug
 */

const findArticleBySlug = (req, res, next) => {
  const articleSlug = req.params.slug;
  return Article.findBySlug(articleSlug)
    .then((article) => {
      if (!article) {
        return Boom.notFound('Unable to find an article with that slug.');
      }
      return res.status(200).json(article);
    });
};

const updateArticleById = (req, res, next) => {
  const articleId = req.params.id;
  return Article.findById(articleId).then(article => {
    debug('update article promise', article);
    if (!article) {
      return Boom.notFound(article);
    }
    const updates = req.body;
    debug('the req.body', updates);
    article.updateAttributes(updates)
      .then(updated => {
        return updated;
      })
      .then(respondWithResult(res))
      .catch(handleError(res));
  });
};

const updateArticleBySlug = (req, res, next) => {
  const slug = req.params.slug;
  return Article.findBySlug(slug).then(article => {
    debug('update article promise', article);
    if (!article) {
      return Boom.notFound(article);
    }
    const updates = req.body;
    debug('the req.body', updates);
    article.updateAttributes(updates)
      .then(updated => {
        return updated;
      })
      .then(respondWithResult(202, res))
      .catch(handleError(res));
  });
};

const deleteArticleById = (req, res, next) => {
  const articleId = req.params.articleId;
  return Article.findById(articleId).then(article => {
    if (!article) {
      return Boom.notFound(article);
    }
    article.destroy()
      .then(() => {
        res.status(204).send({ error: false });
      })
      .catch(handleError(res));
  });
};

const deleteArticleBySlug = (req, res, next) => {
  const slug = req.params.slug;
  return Article.findBySlug(slug).then(article => {
    if (!article) {
      return Boom.notFound(article);
    }
    article.destroy()
      .then(() => {
        res.status(204).send({ error: false });
      })
      .catch(handleError(res));
  });
};

export {
  getAllArticles,
  showArticle,
  addTagToArticle,
  createNewArticle,
  findArticleBySlug,
  updateArticleById,
  updateArticleBySlug,
  deleteArticleById,
  deleteArticleBySlug
};
