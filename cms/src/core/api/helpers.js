// This is the prefix for all of our API requests.
// You can leave as-is and the proxy will take care of everything
// If you change this value, the value in the server proxy will need to be changed
export const API_PREFIX = process.env.API_PREFIX || '/api/v1';

export const S3_SIGNING_URL = '/s3/sign';
// Define all endpoints for easy imports.
export const API_AUTH = `${API_PREFIX}/auth`;
export const API_POSTS = `${API_PREFIX}/posts`;
export const API_ACTIVITY = `${API_PREFIX}/activities`;
export const API_USERS = `${API_PREFIX}/users`;
export const API_PAGE = `${API_PREFIX}/pages`;
export const API_LINKS = `${API_PREFIX}/links`;
export const API_MEDIA = `${API_PREFIX}/media`;
export const API_TAG = `${API_PREFIX}/tags`;
export const API_SETTINGS = `${API_PREFIX}/settings`;
export const API_NAVIGATION = `${API_PREFIX}/navigations`;
// Here you can change the name of the token that is put into localStorage.
export const TOKEN_KEY = 'token';

export const API_PORT = process.env.API_PORT || 2121;
export const API_HOST = process.env.API_HOST || 'localhost';
export const SSR_PORT = process.env.SSR_PORT || 3000;
export const HOST = process.env.SSR_HOST || 'localhost';

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
