import _debug from 'debug';

const debug = _debug('BoldrDAO');

/**
 * @class BoldrDAO
 * @description   BoldrDAO will auto-generate a controller with basic CRUD functionality
 * using an instance of BaseModel.
 * It provides functionality for filtering and pagination using sequelize queries.
 */
class BoldrDAO {

  /**
   * Initialize with an instance of Model.class (BaseModel).
   * @param BaseModel
   */
  constructor(BaseModel) {
    this.BaseModel = BaseModel;
  }

  listAll(req, res) {
    const self = this;

    const viewOptionsCustom = self._configureViewOptions(req);
    self.BaseModel
      .all(viewOptionsCustom)
      .then((rows) => {
        BoldrDAO.sendJsonResponse(res, 200, rows);
      })
      .catch((err) => {
        BoldrDAO.sendJsonResponse(res, 400, err);
      });
  }

  createOne(req, res) {
    const self = this;
    const data = req.body;
    self.BaseModel
      .create(data)
      .then((newRow) => {
        BoldrDAO.sendJsonResponse(res, 201, newRow);
      })
      .catch((err) => {
        BoldrDAO.sendJsonResponse(res, 400, err);
      });
  }

  readOne(req, res) {
    const self = this;
    if (!self._checkReqParamId(req, res)) {
      return;
    }

    self.BaseModel
      .fetch(req.params.id)
      .then((row) => {
        BoldrDAO.sendJsonResponse(res, 200, row);
      })
      .catch((err) => {
        BoldrDAO.sendJsonResponse(res, 400, err);
      });
  }

  updateOne(req, res) {
    const self = this;
    if (!self._checkReqParamId(req, res)) {
      return;
    }
    const data = req.body;
    self.BaseModel
      .update(req.params.id, data)
      .then((row) => {
        BoldrDAO.sendJsonResponse(res, 200, row);
      })
      .catch((err) => {
        BoldrDAO.sendJsonResponse(res, 400, err);
      });
  }

  deleteOne(req, res) {
    const self = this;
    if (!self._checkReqParamId(req, res)) {
      return;
    }

    self.BaseModel
      .destroy(req.params.id)
      .then((row) => {
        BoldrDAO.sendJsonResponse(res, 200, row);
      })
      .catch((err) => {
        BoldrDAO.sendJsonResponse(res, 400, err);
      });
  }

  /**
   * @method _configureViewOptions
   * @description Copies the model's viewOptions and returns a custom one for querying with findAll.
   * @returns {*}
   * @private
   */
  _configureViewOptions(req) {
    const self = this;
    const viewOptionsCustom = self._getViewOptionsCopyFromModel();

    // Check for queries
    self._configureViewOptionsFromQuery(viewOptionsCustom, req.query);

    return viewOptionsCustom;
  }

  /**
   * @method _configureViewOptionsFromQuery
   * @description Modifies the reference to viewOptions depending on if any query params are specified
   * @param query - req.query
   * @returns {viewOptions} or null
   * @private
   */
  _configureViewOptionsFromQuery(viewOptions, query) {
    const self = this;
    // Check if query parameters exists
    if (query && Object.keys(query).length > 0) {
      // Check for filter parameters. Check if {} has key/values.
      self._configureViewOptionsFromFilter(viewOptions, query);
      self._configureViewOptionsFromPageLimit(viewOptions, query);
      self._configureViewOptionsFromPageOffset(viewOptions, query);
    }
  }

  /**
   * @method _configureViewOptionsFromFilter
   * @description Checks for the ?filter[field]=value query parameter and appends it to view options
   * @param viewOptions
   * @param query - req.query
   * @returns {viewOptions} or null
   * @private
   */
  _configureViewOptionsFromFilter(viewOptions, query) {
    if (query.filter && Object.keys(query.filter).length > 0) {
      // Set where property to new concat values with query params.
      // Combine the keys from default viewOptions.where with query.filter
      viewOptions.where = Object.assign({}, viewOptions.where, query.filter);
    }
  }

  // Checks for the ?page[limit]=number query param,
  _configureViewOptionsFromPageLimit(viewOptions, query) {
    if (query.page && Object.keys(query.page).length > 0 && query.page.limit) {
      viewOptions.limit = query.page.limit;
    }
  }

  // Checks for the ?page[offset]=number query param
  _configureViewOptionsFromPageOffset(viewOptions, query) {
    if (query.page && Object.keys(query.page).length > 0 && query.page.offset) {
      viewOptions.offset = query.page.offset;
    }
  }

  /**
   * @method _getViewOptionsCopyFromModel
   * @description Returns a copy of the viewOptions from the model.
   * @returns {*}
   * @private
   */
  _getViewOptionsCopyFromModel() {
    const self = this;
    return Object.assign({}, self.BaseModel.viewOptions);
  }

  /**
   * @method _checkReqParamId
   * @description Checks for existance of :id parameter from the route. Returns an error response if not.
   * @param req
   * @param res
   * @returns {boolean}
   * @private
   */
  _checkReqParamId(req, res) {
    if (!req.params || !req.params.id) {
      BoldrDAO.sendJsonResponse(res, 400, 'no id in request');
      return false;
    }
    return true;
  }

  /**
   * @static sendJsonResponse
   * @description Sends a JSON response to the client.
   * @param res - Response object
   * @param status - Status code
   * @param content - Object to JSONify.
   */
  static sendJsonResponse(res, status, content) {
    res.status(status);
    res.json(content);
  }
}

export default BoldrDAO;
