#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const ROOT = path.resolve(process.cwd());
const STATIC = path.resolve(`${ROOT}/static`);

function cleanThings(target, done) {
  console.log(`Killing file: ${target}`);
  rimraf.sync(`${STATIC}/${target}`);
  console.log('Deleted');
}

function clean() {
  const targets = ['assets', 'server.js', 'server.js.map', 'webpack-assets.json'];
  targets.map((target) => {
    cleanThings(target);
  });
}

clean();
