/**
 * src/lib/logger/logger.js
 * Starts a winston logging session
 *
 * @exports {EventHandler} - Winston event handler
 */

import winston from 'winston';

const config = require('../../core/config');

const transports = [];
if (config.logger.console) {
  transports.push(
    new winston.transports.Console({
      handleExceptions: false,
      prettyPrint: true,
      json: false,
      colorize: true,
      level: 'debug',
      timestamp: () => new Date().toLocaleString()
    })
  );
}
if (config.logger.files) {
  transports.push(
    new winston.transports.File({
      handleExceptions: false,
      name: 'info-file',
      filename: 'info.log',
      level: 'info'
    })
  );

  transports.push(
    new winston.transports.File({
      handleExceptions: false,
      name: 'error-file',
      filename: 'error.log',
      level: 'error'
    })
  );
}

const logger = new winston.Logger({ transports });
logger.exitOnError = false;
logger.stream = {
  write(message) {
    logger.info(message);
  }
};
process.on('unhandledRejection', (reason, promise) => {
  logger.warn(`Unhandled rejection at ${promise}\n`, reason);
});

export default logger;
