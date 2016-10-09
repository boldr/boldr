import { normalize } from 'normalizr';
import _ from 'lodash';
import humps from 'humps';
import Schemas from './schemas';

const API_ROOT = 'http://localhost:2121/api/v1';

const toJSON = (response) => response.json();

function handleErrors(response) {
  if (!response.ok) {
    return response.json().then(err => { throw err; });
  }
  return response;
}

function get(URL, schema) {
  return fetch(URL)
    .then(handleErrors)
    .then(response => response.json())
    .then((json) => {
      return normalize(json, { results: schema });
    });
}

function post(URL, body, schema) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(humps.decamelizeKeys(body))
  })
    .then(handleErrors);
}

function normalizeResponse(response, schema) {
  return toJSON(response)
    .then((json) => {
      return normalize(json, { results: schema });
    });
}

export default {
  grabPosts() {
    return get(`${API_ROOT}/posts?include=[tags,author]`, Schemas.POST_ARRAY);
  },
  login({ email, password }) {
    return post(`${API_ROOT}auth/token/`, { email, password })
        .then(toJSON);
  },

  signup(payload) {
    return post(`${API_ROOT}users/`, payload, Schemas.USER);
  },

  createResource(data) {
    return post(`${API_ROOT}resource/`);
  }
};
