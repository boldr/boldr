import RespondError from '../respond/respondError';
const debug = require('debug')('boldr:helpers');

function processQuery(req, res, next) {
  function getPagination(page) {
    page = page ? page : {};
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
      return next(new RespondError('Seems like someone lost the data you requested.', 404, true));
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    debug(err);
    res.status(statusCode).send(err);
  };
}

function loggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

function serverError(res, err) {
  next(new RespondError(`The server is having some alone time ${err}`, 400, true));
}

export { serverError, loggedIn, processQuery, handleError, handleEntityNotFound,
  removeEntity, respondWithResult, saveUpdates };
