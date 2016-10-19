import merge from 'lodash/merge';

const initialState = {
  posts: {},
  tags: {},
  attachments: {},
  accounts: {},
  profiles: {},
  settings: {}
};

export default function entities(state = initialState, action) {
  if (action.entities) {
    return merge({}, state, action.entities);
  }

  return state;
}
