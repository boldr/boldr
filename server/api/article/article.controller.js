import slug from 'limax';
import Boom from 'boom';

import { Article, User, Tag } from '../../db/models';

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
export const getAllArticles = async (req, res, next) => {
  try {
    const articles = await Article.findAll({
      order: [['createdAt', 'DESC']],
      include: [{
        model: User,
        attributes: ['id', 'name', 'displayName', 'picture', 'email', 'role']
      }, {
        model: Tag,
        attributes: ['tagname', 'id']
      }]
    });

    return res.status(200).json(articles);
  } catch (error) {
    next(error);
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
export const showArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id, {
      include: [{
        model: User,
        attributes: ['id', 'name', 'displayName', 'picture', 'email', 'role']
      }, {
        model: Tag,
        attributes: ['tagname', 'id']
      }]
    });
    return res.status(200).json(article);
  } catch (error) {
    next(error);
  }
};

/**
 * Creates a new article and saves it to the database.
 * @method createArticle
 * @param {String}  title          the title of the article
 * @param {String}  slug           the title normalized without spaces.
 * @param {String}  markup         any HTML from the post body
 * @param {String}  content        the article body
 * @param {String}  featureImage   an image to go along with the article
 * @param {Number}  authorId       the userId associated with the creator of the article
 * @param {ENUM}    status        whether or not the article is published
 * @param {Date}    createdAt      the time the article was saved.
 * @return {Object}                the article object
 */
export const createArticle = (req, res, next) => {
  Article.create({
    title: req.body.title,
    slug: slug(req.body.title),
    markup: req.body.markup,
    content: req.body.content,
    featureImage: req.body.featureImage,
    authorId: req.user.id,
    status: req.body.status,
    tags: req.body.tags
  }, {
    include: [{
      model: Tag,
      as: 'tags'
    }]
  }).then((article) => {
    return res.status(201).json(article);
  }).error((err) => next(err));
};
/**
 * TODO: This is fucked. Maybe populate the tags within the model.
 * ).then(function(article) {
   // creates a new "Tag" for every tag in ctx.request.body.tags
   for (let i = 0; i < req.body.tags.length; i++) {
     const newTag = Tag.create({ tagname: req.body.tags[i] });
     // Adds articleId of the previously created Article and
     // adds the tagId of each created Tag to the ArticlesTags table.
     article.addTag(newTag);
   }
   // Performs a quick get to save an api req.
   if (req.body.tags) {
     article.tags = req.body.tags.map(tag => ({ tagname: tag }));
   }
 });
 */
