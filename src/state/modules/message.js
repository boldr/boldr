
export const DISMISS_MESSAGE:String = 'DISMISS_MESSAGE';
export const LOGIN_SUCCESS_USER:String = 'LOGIN_SUCCESS_USER';
export const SIGNUP_SUCCESS_USER:String = 'SIGNUP_SUCCESS_USER';

export function dismissMessage() {
  return { type: DISMISS_MESSAGE };
}

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */
export default function message(state = {
  message: '',
  type: 'SUCCESS'
}, action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS_USER:
    case SIGNUP_SUCCESS_USER:
      return Object.assign({}, state, {
        message: action.message,
        type: 'SUCCESS'
      });
    case DISMISS_MESSAGE:
      return Object.assign({}, state, {
        message: '',
        type: 'SUCCESS'
      });
    default:
      return state;
  }
}
