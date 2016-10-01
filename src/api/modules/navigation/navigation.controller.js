import findQuery from 'objection-find';
import slugify from 'slugify';
import { responseHandler, throwNotFound } from '../../utils';
import Navigation from './navigation.model';

const debug = require('debug')('boldr:navigation-controller');

async function index(req, res) {
  const navigations = await Navigation.query().eager('[links]');

  if (!navigations) {
    responseHandler(null, res, 500);
  }

  return res.status(200).json(navigations);
}

async function getId(req, res) {
  const navigation = await Navigation
    .query()
    .findById(req.params.id);
  return responseHandler(null, res, 200, navigation);
}

function create(req, res) {
  return Navigation.query()
    .insert()
    .then(navigation => res.status(201).json(navigation));
}

function update(req, res) {
  return Navigation.query()
    .patchAndFetchById(1, req.body)
    .then(navigation => res.status(201).json(navigation));
}

export { index, update, getId };
