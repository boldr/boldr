import { push } from 'react-router-redux';

export function articleListClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard/articles'));
  };
}

export function articleEditorClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard/articles/editor'));
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

export function settingsClicked() {
  return (dispatch) => {
    dispatch(push('/dashboard/settings'));
  };
}
