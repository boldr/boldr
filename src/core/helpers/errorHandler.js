
import _ from 'lodash';
import winston from 'winston';
import config from '../../config/boldr';
/**
 * Creates errorHandler middleware which is sending a consistent
 * response to the frontend about the error.
 * @return {function} Returns a middleware function
 */
export default function errorHandler() {
  return function errorHandlerMw(err, req, res, next) { // eslint-disable-line no-unused-vars
    res.statusCode = err.status || 500;
    const resObj = {
      name: _.snakeCase(err.constructor && err.constructor.name || 'Error'),
      message: err.message
    };

    if (config.printStack) {
      resObj.stack = err.stack;
    }

    const errorObj = err.getErrorObject && err.getErrorObject();
    if (errorObj) {
      resObj.errorObject = errorObj;
    }

    if (res.statusCode === 500) {
      winston.error(`errorHandler > msg: ${err.toString()} stack: [${err.stack}]`);
    } else {
      winston.debug(`errorHandler > [${err.status}] msg: ${err.toString()}`);
    }
    return res.json({ error: resObj, data: null });
  };
}
