import * as types from './constants';

const INITIAL_STATE = {
  isLoading: false,
  members: [],
  error: null,
  selected: {}
};

function membersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_MEMBERS_REQUEST:
    case types.UPDATE_MEMBER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.LOAD_MEMBERS_SUCCESS:
      return {
        ...state,
        members: action.payload
      };
    case types.LOAD_MEMBERS_FAILURE:
    case types.UPDATE_MEMBER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case types.UPDATE_MEMBER_SUCCESS:
      return {
        ...state
      };
    case types.MEMBER_SELECTED:
      return {
        ...state,
        selected: state.members.map((member, index) => {
          console.log(member.id === action.id, member.id, action.id);
          return Object.assign(member, {
            selected: (member.id === action.id || false)
          });
        })
      };
    default:
      return state;
  }
}

export default membersReducer;
