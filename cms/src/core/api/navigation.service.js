import request from 'superagent';
import fetch from 'isomorphic-fetch';
import { API_PREFIX, API_NAVIGATION, API_LINKS, TOKEN_KEY } from 'core';

export function doUpdateNavigationLinks(data) {
  console.log(data, 'API SERVICE ------');
  return request.put(`${API_LINKS}/${data.id}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send(data);
}

export function doAddNavigationLinks(data) {
  return request.post(`${API_LINKS}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send(data);
}
