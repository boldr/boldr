import request from 'superagent';
import decode from 'jwt-decode';
import fetch from 'isomorphic-fetch';
import { API_BASE, API_NAVIGATION, TOKEN_KEY } from 'core/config';

export function doUpdateNavigation(data, id) {
  return request.put(`${API_NAVIGATION}/${id}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send(data);
}
