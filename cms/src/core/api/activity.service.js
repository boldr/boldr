import request from 'superagent';
import fetch from 'isomorphic-fetch';
import { API_ACTIVITY, TOKEN_KEY } from 'core';

export function doGetActivities(data, id) {
  return request
    .get(`${API_ACTIVITY}`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`);
}
