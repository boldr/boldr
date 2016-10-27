import merge from 'lodash/merge';

const initialState = {
  posts: {},
  tags: {},
  attachments: {},
  users: {},
  pages: {},
  navigations: {},
  links: {},
  settings: {}
};

export default function entitiesReducer(state = initialState, action) {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities);
  }
  return state;
}
