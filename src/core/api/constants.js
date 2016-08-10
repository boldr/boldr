const API_PREFIX = process.env.API_PREFIX;
export const API_ADDR = '/api/v1';

export const API_AUTH = `${API_ADDR}/auth`;
export const API_POSTS = `${API_ADDR}/posts`;
export const API_USERS = `${API_ADDR}/users`;
export const API_MEDIA = `${API_ADDR}/medias`;
export const API_TAG = `${API_ADDR}/tags`;
export const API_CATEGORY = `${API_ADDR}/category`;


export function processResponse(response) {
  return response.json().then(json => {
    if (response.status >= 400) {
      throw new Error(json.data.message);
    }
    return json.data;
  });
}

export const credentials = 'same-origin';
export const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
