const TOKEN_NAME = process.env.TOKEN_NAME || 'boldrToken';

export function getAuthToken() {
  return window && window.localStorage ? window.localStorage.getItem(TOKEN_NAME) : null;
}

export function setAuthToken(token) {
  window.localStorage.setItem(TOKEN_NAME, token);
}

export function removeAuthToken() {
  window.localStorage.removeItem(TOKEN_NAME);
}

export function parseUserFromToken() {
  return JSON.parse(window.atob(getAuthToken().split('.')[1]));
}
