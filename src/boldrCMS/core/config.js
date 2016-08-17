// This is the prefix for all of our API requests.
// You can leave as-is and the proxy will take care of everything
// If you change this value, the value in the server proxy will need to be changed
export const API_BASE = '/v1';

export const S3_SIGNING_URL = '/s3/sign';
// Define all endpoints for easy imports.
export const API_AUTH = `${API_BASE}/auth`;
export const API_POSTS = `${API_BASE}/posts`;
export const API_USERS = `${API_BASE}/users`;
export const API_MEDIA = `${API_BASE}/medias`;
export const API_TAG = `${API_BASE}/tags`;
export const API_CATEGORY = `${API_BASE}/category`;
export const API_SETTINGS = `${API_BASE}/boldr`;
// Here you can change the name of the token that is put into localStorage.
export const TOKEN_KEY = 'token';
