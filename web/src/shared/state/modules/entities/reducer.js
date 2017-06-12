import merge from 'lodash/merge';

const initialState = {
  articles: {},
  tags: {},
  attachments: {},
  users: {},
  media: {},
  menus: {},
  menuDetails: {},
  settings: {},
};

export default function entitiesReducer(state = initialState, action) {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities);
  }
  return state;
}
