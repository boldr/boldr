import Boom from 'boom';
import Promise from 'bluebird';

/**
 * @class BaseModel
 * @description
 * This class can be instantiated with a sequelize model to auto generate an
 * instance model containing CRUD functionality
 */
class BaseModel {

  /**
   * @constructor
   * @param sequelizeModel - A sequelize model from src/db/models
   * @param viewOptions - Sequelize custom viewOptions if you'd prefer all results
   * to return with included or excluded data.
   *
   * @param foreignKeyCb -    Required callback function with parameters (&build, data)
   *                          It provides a means to add any additional processing
   *                          after creation of the record or instance such as setting relationships.
   * @NOTE NEEDS TO RETURN A RESOLVED PROMISE.
   * @returns { Promise }
   *
   * @example
   * Exclude password, hash from default return values.
      class CategoryModel extends BaseModel {
        constructor() {

        const viewOptions = {
            where: {
                something: 'foo'
             },
            attributes: {
                exclude: ['password', 'hash']
            }
        };
        super(Category <Sequelize Model>, viewOptions, null);
      };

   * @example This would go under or in place of the viewOptions in the constructor of the model.
        const processDataCallback = (build, data) => {
              const asyncCalls = [];
              BaseModel.buildManyToOne(build, data, User <Sequelize Model>, null, asyncCalls);
              BaseModel.buildManyToOne(build, data, Role <Sequelize Model>, null, asyncCalls);

              return Promise.all(asyncCalls);
          };
          super(UserRole <Sequelize Model>, viewOptions, processDataCallback);
   *
   */
  constructor(sequelizeModel, viewOptions, foreignKeyCb) {
    // PUBLIC
    this.sequelizeModel = sequelizeModel;
    this.viewOptions = viewOptions || null;
    this.primaryKeyString = sequelizeModel.primaryKeyField;

    // PRIVATE
    this._foreignKeyCb = foreignKeyCb;
  }

  /**
   * @method all
   * @description all - Get all records
   * @param customViewOptions - OPTIONAL custom view options
   * @returns {Promise}
   */
  all(customViewOptions) {
    const self = this;
    const allPromiseCb = (resolve, reject) => {
      self.sequelizeModel
        .findAll(customViewOptions || self.viewOptions)
        .then((rows) => {
          resolve(rows);
        })
        .catch((err) => {
          reject(err);
        });
    };
    return new Promise(allPromiseCb);
  }

  /**
   * @method fetch
   * @description Fetch - Get a single record by its id
   * @param id
   * @param customViewOptions - OPTIONAL
   * @returns {Promise}
   */
  fetch(id, customViewOptions) {
    const self = this;
    const fetchCb = (resolve, reject) => {
      self.sequelizeModel
        .findById(id, customViewOptions || self.viewOptions)
        .then((row) => {
          if (!row) {
            throw Boom.notFound('Unable to find a model with that id');
          }
          resolve(row);
        })
        .catch((err) => {
          reject(err);
        });
    };
    return new Promise(fetchCb);
  }

  /**
   * @method update
   * @description Updates a record by id and data
   * @param id
   * @param data - req.body
   * @returns {Promise}
   */
  update(id, data) {
    const self = this;
    const updateCb = (resolve, reject) => {
      self.sequelizeModel
        .findById(id)
        .then((row) => {
          if (!row) {
            throw Boom.notFound('Unable to find a model with that id');
          }

          return self._initBuild(row, data);
        })
        .then((row) => {
          resolve(row);
        })
        .catch((err) => {
          reject(err);
        });
    };
    return new Promise(updateCb);
  }

  /**
   * @method create
   * @description Create new record using data
   * @param data - should be req.body
   * @param customViewOptions - optional
   * @returns {Promise}
   */
  create(data, customViewOptions) {
    const self = this;
    const currentBuild = self.sequelizeModel.build({});

    const createCb = (resolve, reject) => {
      // @NOTE: Empty build needs to be saved or else Sequelize will create a new record on instance.setAssociation();

      self
        ._initBuild(currentBuild, data, customViewOptions)
        .then((comp) => {
          resolve(comp);
        })
        .catch((err) => {
          reject(err);
        });
    };
    return new Promise(createCb);
  }


  /**
   * @method createWithParent
   * @description Create with a record attached to a parent
   * @param data
   * @param customViewOptions
   */
  createWithParent(data, customViewOptions, parentModel, parentId) {
    const self = this;
    const parentName = parentModel.name;

    const createWithParentCb = (resolve, reject) => {
      let parentRow;
      // Find the parent object
      parentModel
        .findById(parentId)
        .then((parent) => {
          if (!parent) {
            throw Boom.notFound('Parent model not found');
          }
          // assign parentRow to parent
          parentRow = parent;
          // Create the new object
          return self.create(data, customViewOptions);
        })
        .then((row) => {
          // Attach the foreign key of the parent to the row.
          return row['set' + parentName](parentRow); // eslint-disable-line
        })
        .then((row) => {
          return self._getCurrentInstanceById(
            row[self.primaryKeyString],
            customViewOptions);
        })
        .then((row) => {
          resolve(row);
        })
        .catch((err) => {
          reject(err);
        });
    };

    return new Promise(createWithParentCb);
  }


  /**
   * @method destroy
   * @description Destroy a record by id, sets status to 'inactive'
   * @param id
   * @returns {Promise}
   */
  destroy(id) {
    const destroyCb = (resolve, reject) => {
      this.sequelizeModel
        .findById(id)
        .then((row) => {
          if (!row) {
            throw Boom.notFound('Unable to find a model with that id');
          }

          // Update the status to inactive.
          row.status = 'inactive';
          return row.save();
        })
        .then((row) => {
          resolve(row);
        })
        .catch((err) => {
          reject(err);
        });
    };
    return new Promise(destroyCb);
  }

  /**
   * @method _initBuild
   * @description Takes in a sequelize instance and its data. Updates it with new data and
   * then returns it with viewOptions.
   * @param build
   * @param data
   * @returns {Promise}
   */
  _initBuild(build, data, customViewOptions) {
    const self = this;
    const _initBuildCb = (resolve, reject) => {
      if (build.initWithData) {
        build.initWithData(data);
      }
      build
        .save()
        .then(() => {
          if (self._foreignKeyCb) {
            return self._foreignKeyCb(build, data);
          } else {
            return Promise.resolve();
          }
        })
        .then(() => {
          return build.save();
        })
        .then((newRow) => {
          return self.sequelizeModel.findById(newRow[self.primaryKeyString],
            customViewOptions || self.viewOptions);
        })
        .then((newRow) => {
          resolve(newRow);
        })
        .catch((err) => {
          reject(err);
        });
    };

    return new Promise(_initBuildCb);
  }

  /**
   * @method _getCurrentInstanceById
   * @description Finds the id of the current instance of the model.
   * @param  {UUID} id                  The UUID of the model instance.
   * @param  {Object} customViewOptions The parameters by which you want to display the model.
   * @return {UUID}                   The UUID of the model.
   */
  _getCurrentInstanceById(id, customViewOptions) {
    const self = this;
    return self.sequelizeModel
      .findById(id, customViewOptions || self.viewOptions);
  }

  /**
   *
   * @static buildManyToOne
   * @description Will attach a foreign key for a M:1 relationship to the build. Usually listed as a
   * 'belongsTo' relationship in the Sequelize model.
   * @param build
   * @param data
   * @param sqlModel
   * @param customSqlModelName - (null, Optional) Used to overwrite the setRelationship
   *                             method for custom named relationships.
   * @param mutableAsyncArr
   *
   * @NOTE For usage within this.dataCallback
   *
   */
  static buildManyToOne(build, data, sqlModel, customSqlModelName, mutableAsyncArr) {
    const modelName = customSqlModelName || sqlModel.name;
    const primaryKeyStr = sqlModel.primaryKeyField;
    // Foreign Key
    if (data[modelName] !== null) {
      const id = data[modelName][primaryKeyStr];

      mutableAsyncArr.push(sqlModel
        .findById(id)
        .then((row) => {
          if (!row && id) {
            throw Boom.badRequest(`Invalid value: ${primaryKeyStr} not found`);
          }

          build['set' + modelName](row); // eslint-disable-line
        })
      );
    }
  }
}
export default BaseModel;
