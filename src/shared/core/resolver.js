import isObject from 'lodash/isObject';
import contentTypes, { promises as modulePromises } from './factory';

export default function fetchAll(module, store) {
  fetchDependencies(module, store, callContentTypes);
  console.log('modulePromises', modulePromises);
  return Promise.all(Object.keys(modulePromises).map(key => modulePromises[key]));
}

export function fetchDependencies(obj, store, doAction) {
  if (!obj) return;

  const contentType = obj.contentTypeId;

  if (contentType) {
    doAction(contentType, store);
  }

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue; // eslint-disable-line

    const value = obj[key];

    if (Array.isArray(value)) {
      value.forEach(item => fetchDependencies(item, store, doAction));
    } else if (isObject(value)) {
      fetchDependencies(value, store, doAction);
    }
  }
}

function callContentTypes(contentType, store) {
  if (contentTypes[contentType]) {
    contentTypes[contentType](store);
  }
}
