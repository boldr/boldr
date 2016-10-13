import request from 'superagent';
import fetch from 'isomorphic-fetch';
import { API_PREFIX, API_AUTH } from 'core';

export const doSignup = (data) => request.post(`${API_AUTH}/signup`).send(data);

export const doLogin = (loginData) => request.post(`${API_AUTH}/login`).send(loginData);

export function doForgotPassword(email) {
  return fetch(`${API_AUTH}/forgot-password`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email
    })
  });
}

export function doResetPassword(password, token) {
  return fetch(`${API_AUTH}/reset-password/${token}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password
    })
  });
}

export function doAuthCheck(token) {
  return request
    .get(`${API_AUTH}/check`)
    .set('Authorization', `${token}`);
}
