import { responseHandler, throwNotFound } from '../../utils';
import { GeneralNotFoundError, InternalError } from '../../utils/errors';
import Navigation from './navigation.model';

const debug = require('debug')('boldr:navigation-controller');

async function index(req, res) {
  try {
    const navigations = await Navigation.query().eager('[links]');

    if (!navigations) {
      throw new GeneralNotFoundError();
    }

    return res.status(200).json(navigations);
  } catch (error) {
    throw new InternalError(error);
  }
}

async function getId(req, res) {
  try {
    const navigation = await Navigation
      .query()
      .findById(req.params.id);
    return responseHandler(null, res, 200, navigation);
  } catch (error) {
    throw new InternalError(error);
  }
}

async function update(req, res) {
  try {
    const updatedNav = await Navigation.query()
      .patchAndFetchById(1, req.body);

    return res.status(201).json(navigation);
  } catch (error) {
    throw new InternalError(error);
  }
}

export { index, getId, update };
