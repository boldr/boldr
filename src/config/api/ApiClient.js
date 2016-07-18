/* eslint-disable */
import superagent from 'superagent';
const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (__SERVER__) {
    return 'http://localhost:3000/api/v1' + adjustedPath;
  }
  return 'http://localhost:3000/api/v1' + adjustedPath;
}
export const credentials = 'same-origin';
export const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export default class ApiClient {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));

        if (params) {
          request.query(params);
        }

        if (__SERVER__ && req.get('cookie').boldrToken) {
          request.set('cookie', req.get('cookie').boldrToken);
        }

        if (data) {
          request.send(data);
        }

        request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
      }));
  }
  empty() {}
}
