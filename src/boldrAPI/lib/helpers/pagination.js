
let currentQuery = '';

export default {
/**
 * Getter method for paginating sequelize models
 * @param  {Object} entity      the sequelize model in question
 * @return {Array} posts
 */
get(parameters) {

    const db = require('../../db/models');

    let limit;
    let page;

    const entity = parameters.entity;
    const params = parameters.params;
    const paginationObject = parameters.paginationObject;
    const res = parameters.res;
    const callback = parameters.callback;


    const validateLimit = (limit) => {
        if (limit && limit > 0) {
          return limit;
        } else {
          return 10;
        };
    };
    const validatePage = (page) => {

        if (page && page > 0) {
          return page;
        } else {
          return 1;
        };
    };

    page = validatePage(paginationObject.page) * 1;
    limit = validateLimit(paginationObject.per_page) * 1;

    params.limit = limit;
    params.offset = page  * limit - limit;

    entity.findAndCountAll(params).then((collection) => {

        const result = {
            data: collection.rows,
            pagination: {
              total_records: collection.count,
              total_pages: Math.ceil(collection.count / limit),
              current_page: page,
              per_page: limit
            }
        };

        if (callback) {
          callback(result);
        } else {
          res.status(200).send(result);
        }
    });
  }
}
