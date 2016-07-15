import Promise from 'bluebird';
import fetch, { Request, Headers, Response } from 'node-fetch';
import config from '../../config/boldr';

fetch.Promise = Promise;
Response.Promise = Promise;

function localUrl(url) {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return `http://${config.ip}${url}`;
}

function localFetch(url, options) {
  return fetch(localUrl(url), options);
}

export { localFetch as default, Request, Headers, Response };
