import findQuery from 'objection-find';
import slugify from 'slugify';
import { responseHandler, throwNotFound } from '../../utils';
import Link from './link.model';

const debug = require('debug')('boldr:link-controller');

async function index(req, res) {
  const navigations = await Link.query();

  if (!navigations) {
    responseHandler(null, res, 500);
  }

  return res.status(200).json(navigations);
}

async function getId(req, res) {
  const navigation = await Link
    .query()
    .findById(req.params.id);
  return responseHandler(null, res, 200, navigation);
}

function create(req, res) {
  return Link.query()
    .insert()
    .then(navigation => res.status(201).json(navigation));
}

function update(req, res) {
  return Link.query()
    .patchAndFetchById(req.params.id, req.body)
    .then(navigation => res.status(202).json(navigation));
}

export { index, update, getId };
