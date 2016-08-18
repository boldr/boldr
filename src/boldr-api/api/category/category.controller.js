import Boom from 'boom';

import { BoldrDAO } from '../../core';
import CategoryModel from './category.model';

const Category = new CategoryModel();
const CategoryController = new BoldrDAO(Category);

const listAll = (req, res) => CategoryController.listAll(req, res);
// const readOne
const createOne = (req, res) => CategoryController.createOne(req, res);
// const updateOne
// const deleteOne

export { listAll, createOne };
/**
 * @api {get} /category       Get all category
 * @apiVersion 1.0.0
 * @apiName getAllCategory
 * @apiGroup Category
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/category
 *
 * @apiSuccess {String}  id            The Category ID
 * @apiSuccess {String}  name          The name of the category
 * @apiSuccess {String}  description   The description of the category
 * @apiSuccess {String}  image         A URL to any image associated with the category
 */
