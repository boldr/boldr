import { push } from 'react-router-redux';

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

export function mediaClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard/media'));
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
