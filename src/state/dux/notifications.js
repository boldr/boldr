import { NOTIFICATION_SEND, NOTIFICATION_CLEAR, NOTIFICATION_DISMISS } from '../actionTypes';

/**
 * Publish a notification,
 * - if `dismissAfter` was set, the notification will be auto dismissed after the given period.
 * - if id wasn't specified, a time based id will be generated.``
 */
export const notificationSend = (notification) => {
  if (!notification.id) {
    notification.id = new Date().getTime();
  }
  return dispatch => {
    dispatch({ type: NOTIFICATION_SEND, payload: notification });

    if (notification.dismissAfter) {
      setTimeout(() => {
        dispatch({
          type: NOTIFICATION_DISMISS,
          payload: notification.id
        }); }, notification.dismissAfter);
    }
  };
};

/**
 * Dismiss a notification by the given id.
 */
export const notificationDismiss = (id) => {
  return { type: NOTIFICATION_DISMISS, payload: id };
};

/**
 * Clear all notifications
 */
export const notificationClear = () => {
  return { type: NOTIFICATION_CLEAR };
};

export default function notificationReducer(domain = [], action) {
  if (!action || !action.type) return domain;

  switch (action.type) {
    case NOTIFICATION_SEND:
      return [action.payload, ...domain];
    case NOTIFICATION_DISMISS:
      return domain.filter(notification =>
          notification.id !== action.payload
      );
    case NOTIFICATION_CLEAR:
      return [];
    default:
      return domain;
  }
}
