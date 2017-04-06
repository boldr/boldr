/* @flow */
import { normalize, arrayOf, schema } from 'normalizr';
import merge from 'lodash/merge';
import Axios from 'axios';
import * as notif from '../../../../core/constants';
import { notificationSend } from '../../notifications/notifications';
import * as t from '../../actionTypes';
import { comment as commentSchema } from './schema';

/**
  * NEW COMMENT ACTIONS
  * -------------------------
  * @exports newComment
  *****************************************************************/

export function newComment(data: Object, postId: string) {
  const payload = {
    content: data.content,
    raw_content: data.raw_content,
  };
  return (dispatch: Function) => {
    dispatch(beginNewComment());
    return Axios.post(`/posts/${postId}/comments`, { data: payload })
      .then(res => {
        if (res.status !== 201) {
          dispatch(errorAddingComment(res));
        }
        // const normalized = normalize(camelizedJson, arrayOf(postSchema, { idAttribute: 'slug' }));
        const normalizedData = normalize(res.data, commentSchema);
        dispatch(newCommentSuccess(normalizedData));
        dispatch(notificationSend(notif.MSG_NEW_COMMENT_SUCCESS));
      })
      .catch(err => {
        dispatch(errorAddingComment(err));
        dispatch(notificationSend(notif.MSG_NEW_COMMENT_FAILURE));
      });
  };
}

const beginNewComment = () => {
  return { type: t.CREATE_COMMENT_REQUEST };
};

const newCommentSuccess = (normalizedData: Object) => {
  return {
    type: t.CREATE_COMMENT_SUCCESS,
    payload: normalizedData,
  };
};

const errorAddingComment = err => {
  return {
    type: t.CREATE_COMMENT_FAILURE,
    error: err,
  };
};
