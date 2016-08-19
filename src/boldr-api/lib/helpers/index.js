import RespondError from '../respond/respondError';
import { GENERAL_404_MSG, FUBAR_MSG } from '../respond/messages';

const debug = require('debug')('boldr:helpers');

function processQuery(req, res, next) {
  function getPagination(page) {
    page = page || {};
    return {
      number: page.number || 0,
      size: page.size || 10
    };
  }
  function getOrder(sort) {
    const sortObj = {};
    if (sort) {
      sortObj.by = sort.startsWith('-') ? sort.slice(1) : sort;
      sortObj.order = sort.startsWith('-') ? 'desc' : 'asc';
    } else {
      // default
      sortObj.order = 'id';
      sortObj.order = 'desc';
    }
    return sortObj;
  }
  req.query.page = getPagination(req.query.page);
  req.query.sort = getOrder(req.query.sort);
  next();
}

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  debug('saveUpdates', updates);
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res, next) {
  return function(entity) {
    if (!entity) {
      return next(new RespondError(GENERAL_404_MSG, 404, true));
    }
    return entity;
  };
}

function handleError(res, next, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    debug(err);
    return next(new RespondError(err, statusCode));
  };
}

function serverError(res, next, err) {
  next(new RespondError(`${FUBAR_MSG} ${err}`, 500, true));
}

export { serverError, processQuery, handleError, handleEntityNotFound,
  removeEntity, respondWithResult, saveUpdates };
