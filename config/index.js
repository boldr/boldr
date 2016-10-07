const path = require('path');
const util = require('util');
const cp = require('child_process');
const fs = require('fs-extra');
const debug = require('debug')('boldr:configuration');
const paths = require('./paths');
const conf = require('./config');

const rcPath = path.join(`${path.resolve(process.cwd())}/.boldrrc.json`);
const config = conf.getProperties();
// Perform validation
conf.validate({ strict: true });

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

if (!fileExists(rcPath)) {
  fs.writeFile(rcPath, JSON.stringify(config), (error) => {
    if (error) {
      console.error(`write error:  ${error.message}`);
    } else {
      console.log(`Successful Write to ${filePath}`);
    }
  });
}

debug('Configuration file loaded successfully.');

process.on('uncaughtException', error => {
  debug(`Caught exception without specific handler: ${util.inspect(error)}`);
  debug(error.stack, 'error');
  process.exit(1);
});

module.exports = { conf, paths };
