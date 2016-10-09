/* eslint-disable eqeqeq */
const fs = require('fs');

/**
 * Takes an array and removes undefined values
 * @param  {Array} array    what is being removed
 * @return {Array}          the "new" array with the items removed.
 */
function removeEmpty(array) {
  return array.filter(entry => typeof entry !== 'undefined');
}

function removeEmptyKeys(obj) {
  let copy = {}; // eslint-disable-line
  for (const key in obj) {
    if (!(obj[key] == null || obj[key].length === 0)) {
      copy[key] = obj[key];
    }
  }

  return copy;
}

function ifElse(condition) {
  return (then, otherwise) => (condition ? then : otherwise);
}

function merge() {
  const funcArgs = Array.prototype.slice.call(arguments); // eslint-disable-line prefer-rest-params

  return Object.assign.apply(
    null,
    removeEmpty([{ }].concat(funcArgs))
  );
}
/* eslint-disable */
function isLoaderSpecificFile(request) {
  return Boolean(/\.(eot|woff|woff2|ttf|otf|svg|png|jpg|jpeg|gif|webp|webm|ico|mp4|mp3|ogg|pdf|swf|css|scss|sass|sss|less)$/.exec(request));
}

function ifIsFile(filePath) {
  try {
    return fs.statSync(filePath).isFile() ? filePath : ""
  } catch(ex) {}
  return ""
}

module.exports = {
  removeEmpty: removeEmpty,
  removeEmptyKeys: removeEmptyKeys,
  ifElse: ifElse,
  merge: merge,
  isLoaderSpecificFile: isLoaderSpecificFile,
  ifIsFile: ifIsFile
}
