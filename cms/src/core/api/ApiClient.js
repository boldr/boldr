/* eslint-disable */

import _ from 'lodash';
import superagent from 'superagent';
import cookie from 'react-cookie';
import qs from 'qs';

const methods = ['get', 'post', 'put', 'patch', 'del'];

export function processResponse(response) {
  return response.json().then(json => {
    if (response.status >= 400) {
      throw new Error(json.data.message);
    }
    return json;
  });
}

export const credentials = 'same-origin';
export const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (__SERVER__) {

    // Prepend host and port of the API server to the path.
    return process.env.TARGET_URL + adjustedPath;
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return '/api/v1' + adjustedPath;
  // return 'http://localhost:';
}

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */
class _ApiClient {
  constructor() {
    methods.forEach((method) =>
      this[method] = (path, { params, formData, data, headers } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));
        if (formData) {

          if (typeof FormData !== 'undefined') {
            const fD = new FormData();
            _.map(formData, (value, key)=> {
              if (value && window.File && window.FileReader && window.FileList && window.Blob && value instanceof FileList) {
                _.map(value, (f, index)=> {
                  if (f && f instanceof File) {
                    fD.append(key + '[' + index + ']', f);
                  }
                });
              } else if (value) {
                if (typeof value === 'object') {
                  fD.append(key, JSON.stringify(value));
                } else {
                  fD.append(key, value);
                }

              }
            });
            request.send(fD);
          }
        }

        if (params) {
          // console.log('PARAMS BINNEN API', params);

          params.time = Date.now().toString();
          request.query(qs.stringify(params, {encode: false}));
        } else {
          request.query([Date.now().toString()]);
        }

        const token = cookie.load('token');
        if (token) {
          request.set('Authorization', 'Bearer ' + token);
        }

        if (headers !== undefined ) {
          for (const key in headers) {
            if (headers.hasOwnProperty(key)) {
              if ((key === 'Authorization' && !token)) {
                request.set(key, headers[key]);
              } else
              if (key !== 'Authorization') {
                request.set(key, headers[key]);
              }
            }
          }
        }

        // IE cache headers
        request.set('X-Requested-With', 'XMLHttpRequest');
        request.set('Expires', '-1');
        request.set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1,private');

        if (data) {
          request.send(data);
        }

        request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
      }));
  }
}

const ApiClient = _ApiClient;

export default ApiClient;
