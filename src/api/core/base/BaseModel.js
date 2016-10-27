/* eslint-disable id-match */
import { Model } from 'objection';
import { format as dateFormat } from 'date-fns';

class BaseModel extends Model {
    /**
     * If we should update the created_at attribute when inserted and the updated_at attribute when updated.
     *
     * @type {boolean}
     */
  static timestamps = true;

    /**
     * An object of attribute names with function values to transform attributes on the model if they exist.
     *
     * @type {object}
     */
  static transforms = {};

    /**
     * An array of attribute names that will be excluded from being returned.
     *
     * @type {array}
     */
  static hidden = [];

    /**
     * Ran before inserting into the database.
     */
  $beforeInsert() {
    if (this.constructor.timestamps) {
      this.created_at = dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss');
    }
  }

    /**
     * Ran before updating the database.
     */
  $beforeUpdate() {
    if (this.constructor.timestamps) {
      this.updated_at = dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss');
    }
  }

    /**
     * Ran after querying the database and transforming to the Model.
     *
     * @param {object} json
     * @returns {object}
     */
  $parseDatabaseJson(json) {
    json = super.$parseDatabaseJson.call(this, json);

    Object.keys(this.constructor.transforms).forEach((key) => {
      if (json.hasOwnProperty(key)) {
        json[key] = this.constructor.transforms[key](json[key]);
      }
    });

    this.constructor.hidden.forEach((hidden) => {
      if (json.hasOwnProperty(hidden)) {
        delete json[hidden];
      }
    });

    return json;
  }
}

export default BaseModel;
