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
