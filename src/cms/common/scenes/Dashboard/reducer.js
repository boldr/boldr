import { push } from 'react-router-redux';

const SHOW_SIDEBAR = '@dashboard/SHOW_SIDEBAR';
const HIDE_SIDEBAR = '@dashboard/HIDE_SIDEBAR';

export const showSidebar = () => ({ type: SHOW_SIDEBAR });
export const hideSidebar = () => ({ type: HIDE_SIDEBAR });

export function postListClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard/posts'));
  };
}

export function postEditorClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard/posts/new'));
  };
}

export function dashboardClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard'));
  };
}

export function fileManagerClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard/filemanager'));
  };
}

export function membersClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard/members'));
  };
}

export function navigationClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard/navigation'));
  };
}

export function contentClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard/content'));
  };
}


export function pagesClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard/pages'));
  };
}

export function settingsClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard/settings'));
  };
}

export function homeClicked() {
  return (dispatch) => {
    dispatch(push('/'));
  };
}

const INITIAL_STATE = {
  docked: true,
  open: true,
  loaded: false,
  isLoading: false,
  error: null
};

export default function dashboard(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        loaded: true,
        docked: true,
        open: true
      };
    case HIDE_SIDEBAR:
      return {
        ...state,
        open: false,
        docked: false
      };
    default:
      return state;
  }
}
