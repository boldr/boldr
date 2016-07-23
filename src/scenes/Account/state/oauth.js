import url from 'url';
import qs from 'querystring';
import moment from 'moment';
import browserHistory from 'react-router/lib/browserHistory';
import { getAuthToken, setAuthToken } from 'core/util/token';
import { API_AUTH } from 'core/api/constants';

// Sign in with Facebook
// @TODO: Inline Environmental Variables webpack
export function facebookLogin() {
  const facebook = {
    url: 'http://localhost:3000/auth/facebook',
    clientId: '1786749434878314',
    redirectUri: 'http://localhost:3000/auth/facebook/callback',
    authorizationUrl: 'https://www.facebook.com/v2.5/dialog/oauth',
    scope: 'email,user_location',
    width: 580,
    height: 400
  };

  return (dispatch) => {
    oauth2(facebook, dispatch)
      .then(openPopup)
      .then(pollPopup)
      .then(exchangeCodeForToken)
      .then(signIn)
      .then(closePopup);
  };
}

// Sign in with Twitter
export function twitterLogin() {
  const twitter = {
    url: 'http://localhost:3000/auth/twitter',
    redirectUri: 'http://localhost:3000/auth/twitter/callback',
    authorizationUrl: 'https://api.twitter.com/oauth/authorize'
  };

  return (dispatch) => {
    oauth1(twitter, dispatch)
      .then(openPopup)
      .then(getRequestToken)
      .then(pollPopup)
      .then(exchangeCodeForToken)
      .then(signIn)
      .then(closePopup);
  };
}

// Sign in with Google
export function googleLogin() {
  const google = {
    url: 'http://localhost:3000/auth/google',
    clientId: '427407029701-7s44bauaoevejf7qrosd02je4c4maviv.apps.googleusercontent.com',
    redirectUri: 'http://localhost:3000/auth/google/callback',
    authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
    scope: 'openid profile email',
    width: 452,
    height: 633
  };

  return (dispatch) => {
    oauth2(google, dispatch)
      .then(openPopup)
      .then(pollPopup)
      .then(exchangeCodeForToken)
      .then(signIn)
      .then(closePopup);
  };
}

// Sign in with Github
export function githubLogin() {
  const github = {
    url: 'http://localhost:3000/auth/github',
    clientId: '25915ad5dd70e5422c3e',
    redirectUri: 'http://localhost:3000/auth/github/callback',
    authorizationUrl: 'https://github.com/login/oauth/authorize',
    scope: 'user:email profile repo',
    width: 452,
    height: 633
  };

  return (dispatch) => {
    oauth2(github, dispatch)
      .then(openPopup)
      .then(pollPopup)
      .then(exchangeCodeForToken)
      .then(signIn)
      .then(closePopup);
  };
}

// Link account
export function link(provider) {
  switch (provider) {
    case 'facebook':
      return facebookLogin();
    case 'twitter':
      return twitterLogin();
    case 'google':
      return googleLogin();
    case 'github':
      return githubLogin();
    default:
      return {
        type: 'LINK_FAILURE',
        messages: [{ msg: 'Invalid OAuth Provider' }]
      };
  }
}

// Unlink account
export function unlink(provider) {
  return (dispatch) => {
    return fetch(`${API_AUTH}/unlink/${provider}`).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: 'UNLINK_SUCCESS',
            messages: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'UNLINK_FAILURE',
            messages: [json]
          });
        });
      }
    });
  };
}

function oauth2(config, dispatch) {
  return new Promise((resolve, reject) => {
    const params = {
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      scope: config.scope,
      display: 'popup',
      response_type: 'code'
    };
    const url = config.authorizationUrl + '?' + qs.stringify(params); // eslint-disable-line
    resolve({ url, config, dispatch });
  });
}

function oauth1(config, dispatch) {
  return new Promise((resolve, reject) => {
    resolve({ url: 'about:blank', config, dispatch });
  });
}

function openPopup({ url, config, dispatch }) {
  return new Promise((resolve, reject) => {
    const width = config.width || 500;
    const height = config.height || 500;
    const options = {
      width,
      height,
      top: window.screenY + ((window.outerHeight - height) / 2.5),
      left: window.screenX + ((window.outerWidth - width) / 2)
    };
    const popup = window.open(url, '_blank', qs.stringify(options, ','));

    if (url === 'about:blank') {
      popup.document.body.innerHTML = 'Loading...';
    }

    resolve({ window: popup, config, dispatch });
  });
}

function getRequestToken({ window, config, dispatch }) {
  return new Promise((resolve, reject) => {
    return fetch(config.url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        redirectUri: config.redirectUri
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          resolve({ window: window, config, requestToken: json, dispatch }); // eslint-disable-line
        });
      }
    });
  });
}

function pollPopup({ window, config, requestToken, dispatch }) {
  return new Promise((resolve, reject) => {
    const redirectUri = url.parse(config.redirectUri);
    const redirectUriPath = redirectUri.host + redirectUri.pathname;

    if (requestToken) {
      window.location = config.authorizationUrl + '?' + qs.stringify(requestToken); // eslint-disable-line
    }

    const polling = setInterval(() => {
      if (!window || window.closed) {
        clearInterval(polling);
      }
      try {
        const popupUrlPath = window.location.host + window.location.pathname;
        if (popupUrlPath === redirectUriPath) {
          if (window.location.search || window.location.hash) {
            const query = qs.parse(window.location.search.substring(1).replace(/\/$/, ''));
            const hash = qs.parse(window.location.hash.substring(1).replace(/[\/$]/, ''));
            const params = Object.assign({}, query, hash);

            if (params.error) {
              dispatch({
                type: 'OAUTH_FAILURE',
                messages: [{ msg: params.error }]
              });
            } else {
              resolve({ oauthData: params, config, window: window, interval: polling, dispatch }); // eslint-disable-line
            }
          } else {
            dispatch({
              type: 'OAUTH_FAILURE',
              messages: [{ msg: 'OAuth redirect has occurred but no query or hash parameters were found.' }]
            });
          }
        }
      } catch (error) {
        // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
        // A hack to get around same-origin security policy errors in Internet Explorer.
      }
    }, 500);
  });
}

function exchangeCodeForToken({ oauthData, config, window, interval, dispatch }) {
  return new Promise((resolve, reject) => {
    const data = Object.assign({}, oauthData, config);

    return fetch(config.url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin', // By default, fetch won't send any cookies to the server
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          resolve({ token: json.token, user: json.user, window: window, interval: interval, dispatch: dispatch }); // eslint-disable-line
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'OAUTH_FAILURE',
            messages: Array.isArray(json) ? json : [json]
          });
          closePopup({ window: window, interval: interval }); // eslint-disable-line
        });
      }
    });
  });
}

function signIn({ token, user, window, interval, dispatch }) {
  return new Promise((resolve, reject) => {
    dispatch({
      type: 'OAUTH_SUCCESS',
      token: token, // eslint-disable-line
      user: user // eslint-disable-line
    });
    setAuthToken(token, { expires: moment().add(1, 'hour').toDate() });
    browserHistory.push('/');
    resolve({ window: window, interval: interval }); // eslint-disable-line
  });
}


function closePopup({ window, interval }) {
  return new Promise((resolve, reject) => {
    clearInterval(interval);
    window.close();
    resolve();
  });
}
