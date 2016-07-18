import _ from 'lodash';
/**
 * Creates a middleware which is creating a "finalize" property
 * which is actually a function on response to a create a structured
 * and consistent responses to the frontend
 * @return {function} Returns a middleware function.
 */
export default function responseHandler() {
  return function responseHandlerMw(req, res, next) {
    res.finalize = function resFinalize(data, { count } = {}) {
      const response = {
        error: null,
        data: null
      };

      if (_.isNumber(count)) {
        response.data = { count };
      }

      if (data === 0) {
        response.data = Object.assign(response.data || {}, { item: data });
        return res.json(response);
      }

      if (!data) {
        return res.json(response);
      }

      if (_.isArray(data)) {
        response.data = Object.assign(response.data || {}, { items: data });
        return res.json(response);
      }

      response.data = Object.assign(response.data || {}, { item: data });

      return res.json(response);
    };
    return next();
  };
}
