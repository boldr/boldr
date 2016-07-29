const fs = require('fs');

const babelrc = fs.readFileSync('./.babelrc');
let config;

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==>  ERROR: Error parsing your .babelrc.');
  console.error(err);
}

require('babel-register')(config);
