const path = require('path');
const fs = require('fs-extra');
const util = require('util');
const cp = require('child_process');
const paths = require('./paths');
const conf = require('./config');
const rcPath = path.join(path.resolve(process.cwd()) + '/.boldrrc.json');

const debug = require('debug')('boldr:configuration');

const config = conf.getProperties();
// Perform validation
conf.validate({ strict: true });

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  }
  catch (err) {
    return false;
  }
}

debug('does it exist? ', fileExists(rcPath));

if (!fileExists(rcPath)) {
  fs.writeFile(rcPath, JSON.stringify(config), function(error) {
     if (error) {
       console.error("write error:  " + error.message);
     } else {
       console.log("Successful Write to " + filePath);
     }
  });
}

debug('Configuration file loaded successfully.', config);

process.on('uncaughtException', error => {
  debug(`Caught exception without specific handler: ${util.inspect(error)}`);
  debug(error.stack, 'error');
  process.exit(1);
});

module.exports = { conf, paths };
