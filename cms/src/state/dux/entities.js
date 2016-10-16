import merge from 'lodash/merge';

const initialState = {
  posts: {},
  tags: {},
  attachments: {},
  accounts: {},
  profiles: {}
};

export default function entities(state = initialState, action) {
  if (action.entities) {
    return merge({}, state, action.entities);
  }

  return state;
}

/*
case actionTypes.SYNC_ENTITIES:
  return syncEntities(state, action.entity, action.key);
function syncEntities(state, entity, key) {
return { ...state, [key]: { ...state[key], [entity.id]: entity } };
}
 */
