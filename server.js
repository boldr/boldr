module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 258);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/jsx");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("classnames/bind");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("react-redux");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 10 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var midnightBlue = '#2A3140';
var cyanLike = '#36C6D1';
var boldrPink = '#DD144D';
var grape = '#40404E';
var txtColor = 'rgba(0,0,0,.87)';

exports.default = {
  dashboardAppBar: {
    backgroundColor: midnightBlue,
    marginBottom: '1em'
  },
  toolbar: {
    backgroundColor: boldrPink,
    color: '#fafafa'
  },
  headerOverflow: {
    backgroundColor: midnightBlue,
    paddingTop: '50px',
    height: '110px',
    marginBottom: '50px'
  },
  underlineFocusStyle: {
    borderColor: cyanLike
  }
};

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("material-ui/Card");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("react-router-redux");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("redial");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("redux-form");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("superagent");

/***/ },
/* 16 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This is the prefix for all of our API requests.
// You can leave as-is and the proxy will take care of everything
// If you change this value, the value in the server proxy will need to be changed
var API_BASE = exports.API_BASE = '/api/v1';

var S3_SIGNING_URL = exports.S3_SIGNING_URL = '/s3/sign';
// Define all endpoints for easy imports.
var API_AUTH = exports.API_AUTH = API_BASE + '/auth';
var API_POSTS = exports.API_POSTS = API_BASE + '/posts';
var API_USERS = exports.API_USERS = API_BASE + '/users';
var API_MEDIA = exports.API_MEDIA = API_BASE + '/medias';
var API_TAG = exports.API_TAG = API_BASE + '/tags';
var API_CATEGORY = exports.API_CATEGORY = API_BASE + '/category';

// Here you can change the name of the token that is put into localStorage.
var TOKEN_KEY = exports.TOKEN_KEY = 'token';

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

exports.createAccount = createAccount;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;
exports.populateAccount = populateAccount;
exports.loginPopulateAccount = loginPopulateAccount;
exports.getMyProfile = getMyProfile;
exports.getPublicProfile = getPublicProfile;
exports.default = accountReducer;

var _superagent = __webpack_require__(15);

var _superagent2 = _interopRequireDefault(_superagent);

var _reactRouterRedux = __webpack_require__(12);

var _browserHistory = __webpack_require__(253);

var _browserHistory2 = _interopRequireDefault(_browserHistory);

var _fetch = __webpack_require__(27);

var _fetch2 = _interopRequireDefault(_fetch);

var _notifications = __webpack_require__(19);

var _config = __webpack_require__(16);

var _constants = __webpack_require__(50);

var at = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SIGNUP ACTION TYPES
 */

// Signup
var beginSignUp = function beginSignUp() {
  return { type: at.CREATE_ACCOUNT_REQUEST };
};

// Signup Success
var signUpSuccess = function signUpSuccess(response) {
  return {
    type: at.CREATE_ACCOUNT_SUCCESS,
    payload: response
  };
};

// Signup Error
var signUpError = function signUpError(err) {
  return {
    type: at.CREATE_ACCOUNT_FAIL,
    error: err
  };
};

// Signup Action
function createAccount(data) {
  return function (dispatch) {
    dispatch(beginSignUp());

    return _superagent2.default.post(_config.API_AUTH + '/signup').send(data).then(function (response) {
      if (response.status === 201) {
        dispatch(signUpSuccess(response));
        dispatch((0, _reactRouterRedux.push)('/'));
        dispatch((0, _notifications.notificationSend)({
          message: 'Your account has been created!',
          kind: 'info',
          dismissAfter: 3000
        }));
      } else {
        dispatch(signUpError('Oops! Something went wrong'));
        dispatch((0, _notifications.notificationSend)({
          message: 'There was a problem creating your account.',
          kind: 'error',
          dismissAfter: 3000
        }));
      }
    }).catch(function (err) {
      dispatch(signUpError(err));
    });
  };
}

/**
 * FORGOT PASSWORD ACTION TYPES
 */

function forgotPassword(email) {
  return function (dispatch) {
    dispatch({
      type: at.FORGOT_PASSWORD_REQUEST
    });
    return (0, _fetch2.default)(_config.API_AUTH + '/forgot', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    }).then(function (response) {
      if (response.ok) {
        return response.json().then(function (json) {
          dispatch({
            type: at.FORGOT_PASSWORD_SUCCESS,
            error: [json]
          });
        });
      } else {
        return response.json().then(function (json) {
          dispatch({
            type: at.FORGOT_PASSWORD_FAIL,
            error: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

/**
 * RESET PASSWORD ACTION TYPES
 */

function resetPassword(password, confirm, pathToken) {
  return function (dispatch) {
    dispatch({
      type: at.RESET_PASSWORD_REQUEST
    });
    return (0, _fetch2.default)(_config.API_AUTH + '/reset/' + pathToken, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: password
      })
    }).then(function (response) {
      if (response.ok) {
        return response.json().then(function (json) {
          _browserHistory2.default.push('/login');
          dispatch({
            type: at.RESET_PASSWORD_SUCCESS,
            error: [json]
          });
        });
      } else {
        return response.json().then(function (json) {
          dispatch({
            type: at.RESET_PASSWORD_FAIL,
            error: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

/**
 * Populate account helper action type
 * @type {String}
 */

function populateAccount(response) {
  return {
    type: at.POPULATE_ACCOUNT,
    bio: response.body.profile.bio,
    birthday: response.body.profile.birthday,
    displayName: response.body.profile.displayName,
    email: response.body.email,
    firstName: response.body.profile.firstName,
    gender: response.body.profile.gender,
    id: response.body.id,
    lastName: response.body.profile.lastName,
    location: response.body.profile.location,
    avatarUrl: response.body.profile.avatarUrl,
    roleId: response.body.profile.roleId,
    website: response.body.profile.website
  };
}

function loginPopulateAccount(response) {
  return {
    type: at.LOGIN_POPULATE_ACCOUNT,
    bio: response.body.user.profile.bio,
    birthday: response.body.user.profile.birthday,
    displayName: response.body.user.profile.displayName,
    email: response.body.user.email,
    firstName: response.body.user.profile.firstName,
    gender: response.body.user.profile.gender,
    id: response.body.user.id,
    lastName: response.body.user.profile.lastName,
    location: response.body.user.profile.location,
    avatarUrl: response.body.user.profile.avatarUrl,
    roleId: response.body.user.profile.roleId,
    website: response.body.user.profile.website
  };
}
/**
 * MY PROFILE ACTION TYPES
 */

function getMyProfile() {
  var token = localStorage.getItem('token');
  return function (dispatch) {
    dispatch({
      type: at.GET_MY_PROFILE_REQUEST
    });
    return (0, _fetch2.default)(_config.API_AUTH + '/check', {
      method: 'get',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token }
    }).then(function (response) {
      if (response.ok) {
        return response.json().then(function (json) {
          dispatch({
            type: at.GET_MY_PROFILE_SUCCESS,
            payload: json
          });
        });
      } else {
        return response.json().then(function (json) {
          dispatch({
            type: at.GET_MY_PROFILE_FAIL,
            error: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}
/**
 * PUBLIC PROFILE ACTION TYPES
 */

function getPublicProfile(userId) {
  return function (dispatch) {
    dispatch({
      type: at.PUBLIC_PROFILE_REQUEST
    });
    return _superagent2.default.get(_config.API_BASE + '/users/' + userId).then(function (response) {
      if (response.status === 200) {
        dispatch({
          type: at.PUBLIC_PROFILE_SUCCESS,
          payload: response.body
        });
      }
    }).catch(function (err) {
      dispatch({
        type: at.PUBLIC_PROFILE_FAIL,
        error: err
      });
    });
  };
}
/**
 * INITIAL STATE
 */
var INITIAL_STATE = {
  isLoading: false,
  error: null,
  public: {},
  hydrated: false,
  bio: '',
  birthday: '',
  displayName: '',
  email: '',
  firstName: '',
  gender: '',
  id: '',
  lastName: '',
  location: '',
  avatarUrl: '',
  roleId: '',
  website: ''
};

/**
 * Account Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
function accountReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case at.CREATE_ACCOUNT_REQUEST:
    case at.FORGOT_PASSWORD_REQUEST:
    case at.GET_MY_PROFILE_REQUEST:
    case at.PUBLIC_PROFILE_REQUEST:
    case at.RESET_PASSWORD_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });
    case at.CREATE_ACCOUNT_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false
      });
    case at.RESET_PASSWORD_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false
      });
    case at.FORGOT_PASSWORD_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false
      });
    case at.GET_MY_PROFILE_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        bio: action.payload.profile.bio,
        birthday: action.payload.profile.birthday,
        displayName: action.payload.profile.displayName,
        email: action.payload.email,
        firstName: action.payload.profile.firstName,
        gender: action.payload.profile.gender,
        id: action.payload.id,
        lastName: action.payload.profile.lastName,
        location: action.payload.profile.location,
        avatarUrl: action.payload.profile.avatarUrl,
        roleId: action.payload.profile.roleId,
        website: action.payload.profile.website
      });
    case at.GET_MY_PROFILE_FAIL:
    case at.PUBLIC_PROFILE_FAIL:
    case at.FORGOT_PASSWORD_FAIL:
    case at.CREATE_ACCOUNT_FAIL:
    case at.RESET_PASSWORD_FAIL:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        error: action.error
      });
    case at.PUBLIC_PROFILE_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        public: {
          email: action.payload.email,
          displayName: action.payload.profile.displayName,
          firstName: action.payload.profile.firstName,
          roleId: action.payload.profile.roleId,
          id: action.payload.id
        }
      });
    case at.POPULATE_ACCOUNT:
    case at.LOGIN_POPULATE_ACCOUNT:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        bio: action.bio,
        birthday: action.birthday,
        displayName: action.displayName,
        email: action.email,
        firstName: action.firstName,
        gender: action.gender,
        id: action.id,
        lastName: action.lastName,
        location: action.location,
        avatarUrl: action.avatarUrl,
        roleId: action.roleId,
        website: action.website
      });
    default:
      return state;
  }
}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = exports.POSTS_LIST_FAILURE = exports.POSTS_LIST_SUCCESS = exports.POSTS_LIST_REQUEST = undefined;

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

exports.getPostsListing = getPostsListing;
exports.fetchPostsIfNeeded = fetchPostsIfNeeded;
exports.fetchPosts = fetchPosts;
exports.fetchPost = fetchPost;
exports.createPost = createPost;
exports.selectPost = selectPost;
exports.updatePost = updatePost;
exports.default = postsReducer;

var _fetch = __webpack_require__(27);

var _fetch2 = _interopRequireDefault(_fetch);

var _superagent = __webpack_require__(15);

var _superagent2 = _interopRequireDefault(_superagent);

var _normalizr = __webpack_require__(64);

var _normalizr2 = _interopRequireDefault(_normalizr);

var _reactRouterRedux = __webpack_require__(12);

var _notifications = __webpack_require__(19);

var _ApiClient = __webpack_require__(94);

var _constants = __webpack_require__(142);

var at = _interopRequireWildcard(_constants);

var _schema = __webpack_require__(143);

var schema = _interopRequireWildcard(_schema);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { API_BASE, API_POSTS } from 'core/api';
var API_BASE = '/api/v1';
var API_POSTS = '/api/v1/posts';

var POSTS_LIST_REQUEST = exports.POSTS_LIST_REQUEST = 'POSTS_LIST_REQUEST';
var POSTS_LIST_SUCCESS = exports.POSTS_LIST_SUCCESS = 'POSTS_LIST_SUCCESS';
var POSTS_LIST_FAILURE = exports.POSTS_LIST_FAILURE = 'POSTS_LIST_FAILURE';

var requestPostList = function requestPostList() {
  return {
    type: POSTS_LIST_REQUEST
  };
};
var failedGettingPostList = function failedGettingPostList(err) {
  return {
    type: POSTS_LIST_FAILURE,
    error: err
  };
};
var gotPostList = function gotPostList(response) {
  return {
    type: POSTS_LIST_SUCCESS,
    data: response.body
  };
};

function getPostsListing() {
  return function (dispatch) {
    dispatch(requestPostList());
    return _superagent2.default.get(API_POSTS).then(function (response) {
      if (response.status === 200) {
        dispatch(gotPostList(response));
      }
    }).catch(function (err) {
      dispatch(failedGettingPostList(err));
    });
  };
}
/**
 * GET ARTICLE ACTIONS
 */
var requestPosts = function requestPosts() {
  return { type: at.FETCH_POSTS_REQUEST };
};
var receivePosts = function receivePosts(json) {
  return {
    type: at.FETCH_POSTS_SUCCESS,
    payload: json
  };
};
var receivePostsFailed = function receivePostsFailed(err) {
  return {
    type: at.FETCH_POSTS_FAIL,
    error: err
  };
};

/**
 * @function fetchPostsIfNeeded
 * @description Function that determines whether or not posts need to be
 * fetched from the api. Dispatches either the fetchPosts Function
 * or returns the resolved promise if the posts are up to date.
 * @return {Promise} Posts Promise that resolves when posts are fetched
 * or they arent required to be refreshed.
 */
function fetchPostsIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
    }

    return Promise.resolve();
  };
}
/**
 * Called by fetchPostsIfNeeded to retrieve the state containing posts
 * @param  {Object} state   The blog state which contains posts
 */
function shouldFetchPosts(state) {
  var posts = state.posts;
  if (!posts.data) {
    return true;
  }
  if (posts.isLoading) {
    return false;
  }
  return posts;
}
/**
 * Function to retrieve posts from the api.
 * @return {Array} Posts returned as an array of post objects.
 */
function fetchPosts() {
  return function (dispatch) {
    dispatch(requestPosts());
    return (0, _fetch2.default)('/api/v1/posts').then(function (response) {
      return (0, _ApiClient.processResponse)(response);
    }).then(function (json) {
      return dispatch(receivePosts(json));
    });
  };
}

var requestPost = function requestPost() {
  return { type: at.FETCH_POST_REQUEST };
};
var receivePost = function receivePost(response) {
  return {
    type: at.FETCH_POST_SUCCESS,
    payload: response.body
  };
};
var receivePostFailed = function receivePostFailed(err) {
  return {
    type: at.FETCH_POST_FAIL,
    error: err
  };
};

/**
 * Retrieves a specific post from the API based on the value of its slug
 * @param  {string} slug the slug is the title of the post normalized / sluggified
 * @return {Object}      The post object
 */
function fetchPost(slug) {
  return function (dispatch) {
    dispatch(requestPost());
    return _superagent2.default.get(API_BASE + '/posts/' + slug).then(function (response) {
      if (response.status === 200) {
        dispatch(receivePost(response));
      }
    }).catch(function (err) {
      dispatch(receivePostFailed(err));
    });
  };
}
/**
 * CREATE ARTICLE ACTIONS
 */
var beginCreatePost = function beginCreatePost() {
  return { type: at.CREATE_POST_REQUEST };
};

var createPostSuccess = function createPostSuccess(response) {
  return {
    type: at.CREATE_POST_SUCCESS,
    payload: response.body
  };
};
var errorCreatingPost = function errorCreatingPost(err) {
  return {
    type: at.CREATE_POST_FAIL,
    error: err
  };
};

/**
 * Create a new article takes the submitted form-data as articleData and
 * sends the information to the api.
 * @param  {Object} articleData The data from the form / article editor
 * @return {Object}             Response object.
 */
function createPost(postData) {
  return function (dispatch) {
    dispatch(beginCreatePost());
    return _superagent2.default.post(API_POSTS).set('Authorization', 'Bearer ' + localStorage.getItem('token')).send({
      title: postData.title,
      content: postData.content,
      tags: postData.tags,
      status: postData.status
    }).then(function (response) {
      if (response.status === 201) {
        dispatch(createPostSuccess(response));
        dispatch((0, _notifications.notificationSend)({
          message: 'Post created successfully.',
          kind: 'info',
          dismissAfter: 3000
        }));
      }
    }).catch(function (err) {
      dispatch(errorCreatingPost(err));
    });
  };
}

/**
 * Select Post
 * @description Used when on the article list state.
 */
var postSelected = function postSelected(articleId) {
  return {
    type: at.SELECT_POST,
    id: articleId
  };
};

var receiveSelectedPost = function receiveSelectedPost(response) {
  return {
    type: at.SELECT_POST_SUCCESS,
    current: response.body
  };
};

var receiveSelectedPostFailed = function receiveSelectedPostFailed(err) {
  return {
    type: at.SELECT_POST_FAIL,
    error: err
  };
};

/**
 * Takes the user selected article and fetches the data from
 * the api.
 * @param  {String} articleId Technically its the uuid, but for all
 * intents and purposes its a String
 * @return {Object}           The post object.
 */
function selectPost(postId) {
  return function (dispatch) {
    dispatch(postSelected(postId));
    return _superagent2.default.get(API_POSTS + '/id/' + postId).then(function (response) {
      if (response.status === 200) {
        dispatch(receiveSelectedPost(response));
      }
    }).catch(function (err) {
      dispatch(receiveSelectedPostFailed(err));
    });
  };
}
var updatePostDetails = function updatePostDetails() {
  return { type: at.UPDATE_POST_REQUEST };
};
var updatePostSuccess = function updatePostSuccess() {
  return { type: at.UPDATE_POST_SUCCESS };
};
var errorUpdatingPost = function errorUpdatingPost(err) {
  return {
    type: at.UPDATE_POST_FAIL,
    error: err
  };
};

function updatePost(postData) {
  // const articleSlug = slug(articleData.title);
  var payload = {
    title: postData.title,
    content: postData.content,
    excerpt: postData.excerpt,
    featureImage: postData.featureImage,
    status: postData.status
  };
  return function (dispatch) {
    dispatch(updatePostDetails(postData));
    return _superagent2.default.put(API_POSTS + '/' + postData.origSlug).set('Authorization', 'Bearer ' + localStorage.getItem('token')).send({
      // title: articleData.title,
      content: postData.content,
      excerpt: postData.excerpt,
      featureImage: postData.featureImage,
      tags: postData.tags,
      status: postData.status
    }).then(function (response) {
      dispatch(updatePostSuccess(response));
      dispatch((0, _notifications.notificationSend)({
        message: 'Updated article.',
        kind: 'info',
        dismissAfter: 3000
      }));
    }).catch(function (err) {
      dispatch(errorUpdatingPost(err.message));
      dispatch((0, _notifications.notificationSend)({
        message: 'There was a problem updating the article.',
        kind: 'error',
        dismissAfter: 3000
      }));
    });
  };
}

var INITIAL_STATE = exports.INITIAL_STATE = {
  isLoading: false,
  error: null,
  data: [],
  selectedPost: {},
  current: {},
  isEditing: false
};

/**
 * Blog Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
function postsReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case at.FETCH_POSTS_REQUEST:
    case at.FETCH_POST_REQUEST:
    case at.CREATE_POST_REQUEST:
    case POSTS_LIST_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });
    case at.FETCH_POSTS_SUCCESS:
    case POSTS_LIST_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        data: action.data
      });
    case at.FETCH_POST_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        selectedPost: action.payload
      });
    case at.CREATE_POST_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false
      });
    case at.FETCH_POSTS_FAIL:
    case at.FETCH_POST_FAIL:
    case at.CREATE_POST_FAIL:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        error: action.error
      });
    case at.SELECT_POST:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        id: action.id,
        isEditing: true
      });
    case at.SELECT_POST_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        current: action.current,
        isEditing: true
      });
    case at.SELECT_POST_FAIL:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        error: action.error,
        isEditing: true
      });
    default:
      return state;
  }
}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notificationClear = exports.notificationDismiss = exports.notificationSend = exports.NOTIFICATION_CLEAR = exports.NOTIFICATION_DISMISS = exports.NOTIFICATION_SEND = undefined;

var _toConsumableArray2 = __webpack_require__(218);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = notificationReducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOTIFICATION_SEND = exports.NOTIFICATION_SEND = 'NOTIFICATION_SEND';
var NOTIFICATION_DISMISS = exports.NOTIFICATION_DISMISS = 'NOTIFICATION_DISMISS';
var NOTIFICATION_CLEAR = exports.NOTIFICATION_CLEAR = 'NOTIFICATION_CLEAR';

/**
 * Publish a notification,
 * - if `dismissAfter` was set, the notification will be auto dismissed after the given period.
 * - if id wasn't specified, a time based id will be generated.``
 */
var notificationSend = exports.notificationSend = function notificationSend(notification) {
  if (!notification.id) {
    notification.id = new Date().getTime();
  }
  return function (dispatch) {
    dispatch({ type: NOTIFICATION_SEND, payload: notification });

    if (notification.dismissAfter) {
      setTimeout(function () {
        dispatch({
          type: NOTIFICATION_DISMISS,
          payload: notification.id
        });
      }, notification.dismissAfter);
    }
  };
};

/**
 * Dismiss a notification by the given id.
 */
var notificationDismiss = exports.notificationDismiss = function notificationDismiss(id) {
  return { type: NOTIFICATION_DISMISS, payload: id };
};

/**
 * Clear all notifications
 */
var notificationClear = exports.notificationClear = function notificationClear() {
  return { type: NOTIFICATION_CLEAR };
};

function notificationReducer() {
  var domain = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  if (!action || !action.type) return domain;

  switch (action.type) {
    case NOTIFICATION_SEND:
      return [action.payload].concat((0, _toConsumableArray3.default)(domain));
    case NOTIFICATION_DISMISS:
      return domain.filter(function (notification) {
        return notification.id !== action.payload;
      });
    case NOTIFICATION_CLEAR:
      return [];
    default:
      return domain;
  }
}

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("react-helmet");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Heading = __webpack_require__(70);

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Heading2.default;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Header = __webpack_require__(91);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Header2.default;

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("material-ui/MenuItem");

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("react-router");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Response = exports.Headers = exports.Request = exports.default = undefined;

var _bluebird = __webpack_require__(219);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _nodeFetch = __webpack_require__(246);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nodeFetch2.default.Promise = _bluebird2.default;
_nodeFetch.Response.Promise = _bluebird2.default;

function localUrl(url) {
  if (url.startsWith('//')) {
    return 'https:' + url;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return {"NODE_ENV":"production","SERVER_PORT":3000}.SITE_URL;
}

function localFetch(url, options) {
  return (0, _nodeFetch2.default)(localUrl(url), options);
}

exports.default = localFetch;
exports.Request = _nodeFetch.Request;
exports.Headers = _nodeFetch.Headers;
exports.Response = _nodeFetch.Response;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

exports.loginSuccess = loginSuccess;
exports.loginError = loginError;
exports.doLogin = doLogin;
exports.logoutSuccess = logoutSuccess;
exports.logoutError = logoutError;
exports.logOut = logOut;
exports.checkAuth = checkAuth;
exports.isLoaded = isLoaded;
exports.load = load;
exports.default = authReducer;

var _superagent = __webpack_require__(15);

var _superagent2 = _interopRequireDefault(_superagent);

var _reactRouterRedux = __webpack_require__(12);

var _moment = __webpack_require__(41);

var _moment2 = _interopRequireDefault(_moment);

var _fetch = __webpack_require__(27);

var _fetch2 = _interopRequireDefault(_fetch);

var _config = __webpack_require__(16);

var _notifications = __webpack_require__(19);

var _account = __webpack_require__(17);

var _constants = __webpack_require__(50);

var at = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LOGIN ACTIONS
 */
var beginLogin = function beginLogin() {
  return { type: at.LOGIN_REQUEST };
};
// Login Success
function loginSuccess(response) {
  return {
    type: at.LOGIN_SUCCESS,
    token: response.body.token,
    bio: response.body.user.profile.bio,
    birthday: response.body.user.profile.birthday,
    displayName: response.body.user.profile.displayName,
    email: response.body.user.email,
    firstName: response.body.user.profile.firstName,
    gender: response.body.user.profile.gender,
    id: response.body.user.id,
    lastName: response.body.user.profile.lastName,
    location: response.body.user.profile.location,
    avatarUrl: response.body.user.profile.avatarUrl,
    roleId: response.body.user.profile.roleId,
    website: response.body.user.profile.website
  };
}
// Login Error
function loginError(err) {
  return {
    type: at.LOGIN_FAIL,
    error: err
  };
}
// Login Action
function doLogin(loginData, redir) {
  return function (dispatch) {
    dispatch(beginLogin());
    return _superagent2.default.post(_config.API_BASE + '/auth/login').send(loginData).then(function (response) {
      localStorage.setItem('token', response.body.token);
      dispatch(loginSuccess(response));
      dispatch((0, _account.loginPopulateAccount)(response));
      dispatch((0, _notifications.notificationSend)({
        message: 'Welcome back!',
        kind: 'info',
        dismissAfter: 3000
      }));
      if (redir) {
        dispatch((0, _reactRouterRedux.push)(redir));
      } else {
        dispatch((0, _reactRouterRedux.push)('/'));
      }
      // dispatch(showSnackBarMessage('Successfully logged in.'));
    }).catch(function (err) {
      dispatch(loginError(err));
      dispatch((0, _notifications.notificationSend)({
        message: 'There was a problem logging in ' + err,
        kind: 'error',
        dismissAfter: 3000
      }));
    });
  };
}

/**
 * LOGOUT ACTIONS
 */

function logoutSuccess() {
  return { type: at.LOGOUT_USER };
}

function logoutError() {
  return { type: at.LOGOUT_USER_FAIL };
}

function logOut() {
  return function (dispatch) {
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
    dispatch((0, _notifications.notificationSend)({
      message: 'You are now logged out of your account.',
      kind: 'info',
      dismissAfter: 3000
    }));
  };
}

/**
 * TOKEN CHECK ACTIONS
 */

function checkAuthRequest() {
  return { type: at.CHECK_AUTH_REQUEST };
}

function checkAuthSuccess(response, token) {
  return {
    type: at.CHECK_AUTH_SUCCESS,
    payload: response.body,
    token: token,
    bio: response.body.profile.bio,
    birthday: response.body.profile.birthday,
    displayName: response.body.profile.displayName,
    email: response.body.email,
    firstName: response.body.profile.firstName,
    gender: response.body.profile.gender,
    id: response.body.profile.id,
    lastName: response.body.profile.lastName,
    location: response.body.profile.location,
    avatarUrl: response.body.profile.avatarUrl,
    roleId: response.body.profile.roleId,
    website: response.body.profile.website
  };
}

function checkAuthFailure(error) {
  return {
    type: at.CHECK_AUTH_FAIL,
    payload: error
  };
}

function checkAuth() {
  return function (dispatch) {
    var token = localStorage.getItem('token');
    dispatch(checkAuthRequest());
    _superagent2.default.get(_config.API_AUTH + '/check').set('Authorization', 'Bearer ' + token).then(function (response) {
      dispatch(checkAuthSuccess(response, token));
      dispatch((0, _account.populateAccount)(response));
    }).catch(function () {
      dispatch(checkAuthFailure('Token is invalid'));
      localStorage.removeItem('token');
      dispatch((0, _notifications.notificationSend)({
        message: 'There was a problem authenticating. Please login again.',
        kind: 'error',
        dismissAfter: 3000
      }));
    });
  };
}

function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

function load() {
  return {
    types: [at.LOAD, at.LOAD_SUCCESS, at.LOAD_FAIL],
    promise: function promise(client) {
      return client.get('/auth/check');
    }
  };
}

/**
 * INITIAL STATE
 */
var INITIAL_STATE = {
  loaded: false,
  error: null,
  isLoading: false,
  roleId: null,
  token: null,
  hydrated: false
};

/**
 * Auth Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
function authReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case at.LOAD:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });
    case at.LOAD_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        loaded: true,
        isAuthenticated: true,
        token: action.result.token,
        roleId: action.result.roleId,
        email: action.result.email
      });
    case at.LOAD_FAIL:
    case at.LOGIN_FAIL:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        isAuthenticated: false,
        loaded: false,
        error: action.error
      });

    case at.LOGIN_REQUEST:
    case at.CHECK_AUTH_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: true,
        isAuthenticated: false,
        loaded: false
      });
    case at.LOGIN_SUCCESS:
    case at.CHECK_AUTH_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        loaded: true,
        isAuthenticated: true,
        roleId: action.roleId,
        token: action.token
      });
    case at.LOGOUT_USER:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        isAuthenticated: false,
        loaded: false
      });
    default:
      return state;
  }
}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = exports.SETTINGS_ENDPOINT = exports.LOAD_SETTINGS_FAILURE = exports.LOAD_SETTINGS_SUCCESS = exports.LOAD_SETTINGS = exports.DONE_LOADING = undefined;

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

exports.goHome = goHome;
exports.loadBoldrSettings = loadBoldrSettings;
exports.saveBoldrSetup = saveBoldrSetup;
exports.default = boldrReducer;

var _superagent = __webpack_require__(15);

var _superagent2 = _interopRequireDefault(_superagent);

var _reactRouterRedux = __webpack_require__(12);

var _config = __webpack_require__(16);

var _notifications = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DONE_LOADING = exports.DONE_LOADING = 'DONE_LOADING';
var LOAD_SETTINGS = exports.LOAD_SETTINGS = 'LOAD_SETTINGS';
var LOAD_SETTINGS_SUCCESS = exports.LOAD_SETTINGS_SUCCESS = 'LOAD_SETTINGS_SUCCESS';
var LOAD_SETTINGS_FAILURE = exports.LOAD_SETTINGS_FAILURE = 'LOAD_SETTINGS_FAILURE';

var SETTINGS_ENDPOINT = exports.SETTINGS_ENDPOINT = _config.API_BASE + '/boldr';

function goHome(data) {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/'));
  };
}

var loadSettings = function loadSettings() {
  return {
    type: LOAD_SETTINGS
  };
};

var loadSettingsSuccess = function loadSettingsSuccess(response) {
  return {
    type: LOAD_SETTINGS_SUCCESS,
    siteName: response.body[0].siteName,
    description: response.body[0].description,
    logo: response.body[0].logo,
    siteUrl: response.body[0].siteUrl,
    favicon: response.body[0].favicon,
    analyticsId: response.body[0].analyticsId,
    allowRegistration: response.body[0].allowRegistration
  };
};

// Fail receivers
var failedToLoadSettings = function failedToLoadSettings(data) {
  return {
    type: LOAD_SETTINGS_FAILURE,
    data: data
  };
};

// Public action creators
function loadBoldrSettings(data) {
  return function (dispatch) {
    dispatch(loadSettings());
    return _superagent2.default.get(SETTINGS_ENDPOINT)
    // .set('Authorization', `Bearer ${token}`)
    .then(function (response) {
      if (response.status === 200) {
        dispatch(loadSettingsSuccess(response));
      } else {
        dispatch(failedToLoadSettings('Oops! Something went wrong!'));
      }
    }).catch(function (err) {
      dispatch(failedToLoadSettings(err));
      dispatch((0, _reactRouterRedux.push)('/dashboard/setup'));
    });
  };
}
var SAVE_SETUP_REQUEST = 'SAVE_SETUP_REQUEST';
var SAVE_SETUP_SUCCESS = 'SAVE_SETUP_SUCCESS';
var SAVE_SETUP_FAIL = 'SAVE_SETUP_FAIL';

var startSaveSetup = function startSaveSetup() {
  return {
    type: SAVE_SETUP_REQUEST
  };
};

var saveSetupSuccess = function saveSetupSuccess(response) {
  return {
    type: SAVE_SETUP_SUCCESS,
    payload: response.body,
    message: 'Boldr did its thing, now you do yours.'
  };
};

// Fail receivers
var failedToSaveSetup = function failedToSaveSetup(data) {
  return {
    type: SAVE_SETUP_FAIL,
    data: data
  };
};

// Public action creators
function saveBoldrSetup(data) {
  return function (dispatch) {
    dispatch(startSaveSetup());
    return _superagent2.default.post(SETTINGS_ENDPOINT).set('Authorization', 'Bearer ' + localStorage.getItem('token')).send(data).then(function (response) {
      if (response.status === 201) {
        dispatch(saveSetupSuccess(response));
        dispatch(loadSettings());
        dispatch((0, _notifications.notificationSend)({
          message: 'Your site is set up!',
          kind: 'info',
          dismissAfter: 3000
        }));
        dispatch((0, _reactRouterRedux.push)('/dashboard'));
      }
    }).catch(function (err) {
      dispatch(failedToSaveSetup(err));
      dispatch((0, _notifications.notificationSend)({
        message: 'We ran into a problem with your set up ' + err,
        kind: 'error',
        dismissAfter: 3000
      }));
    });
  };
}

var INITIAL_STATE = exports.INITIAL_STATE = {
  isLoading: false,
  siteName: null,
  description: null,
  logo: null,
  siteUrl: null,
  favicon: null,
  analyticsId: null,
  allowRegistration: null
};

function boldrReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case LOAD_SETTINGS:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });
    case LOAD_SETTINGS_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        siteName: action.siteName,
        description: action.description,
        logo: action.logo,
        siteUrl: action.siteUrl,
        favicon: action.favicon,
        analyticsId: action.analyticsId,
        allowRegistration: action.allowRegistration,
        message: action.message
      });
    case LOAD_SETTINGS_FAILURE:
      return (0, _extends3.default)({}, state, {
        isLoading: false
      });
    case SAVE_SETUP_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });
    case SAVE_SETUP_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        payload: action.payload,
        message: action.message
      });
    case SAVE_SETUP_FAIL:
      return (0, _extends3.default)({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
}

/***/ },
/* 30 */
/***/ function(module, exports) {



/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = require("material-ui/FlatButton");

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("material-ui/IconMenu");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BoldrLogo = __webpack_require__(67);

var _BoldrLogo2 = _interopRequireDefault(_BoldrLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BoldrLogo2.default;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextField = __webpack_require__(33);

var _TextField2 = _interopRequireDefault(_TextField);

var _createFormComponent = __webpack_require__(44);

var _createFormComponent2 = _interopRequireDefault(_createFormComponent);

var _mapError = __webpack_require__(45);

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createFormComponent2.default)(_TextField2.default, _mapError2.default);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteLogo = exports.Heading = exports.Hero = exports.BoldrLogo = undefined;

var _atm = __webpack_require__(34);

var _atm2 = _interopRequireDefault(_atm);

var _mol = __webpack_require__(79);

var _mol2 = _interopRequireDefault(_mol);

var _atm3 = __webpack_require__(21);

var _atm4 = _interopRequireDefault(_atm3);

var _atm5 = __webpack_require__(47);

var _atm6 = _interopRequireDefault(_atm5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BoldrLogo = _atm2.default;
exports.Hero = _mol2.default;
exports.Heading = _atm4.default;
exports.SiteLogo = _atm6.default;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostListing = __webpack_require__(138);

var _PostListing2 = _interopRequireDefault(_PostListing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PostListing2.default;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOAD_USERS_FAIL = exports.LOAD_USERS_SUCCESS = exports.LOAD_USERS_REQUEST = undefined;

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

exports.loadSiteUsers = loadSiteUsers;
exports.default = siteUsersReducer;

var _superagent = __webpack_require__(15);

var _superagent2 = _interopRequireDefault(_superagent);

var _config = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_USERS_REQUEST = exports.LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
var LOAD_USERS_SUCCESS = exports.LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
var LOAD_USERS_FAIL = exports.LOAD_USERS_FAIL = 'LOAD_USERS_FAIL';

var loadUsers = function loadUsers() {
  return {
    type: LOAD_USERS_REQUEST
  };
};

var loadUsersSuccess = function loadUsersSuccess(response) {
  return {
    type: LOAD_USERS_SUCCESS,
    isLoading: false,
    payload: response.body
  };
};

// Fail receivers
var failedToLoadUsers = function failedToLoadUsers(err) {
  return {
    type: LOAD_USERS_FAIL,
    isLoading: false,
    error: err
  };
};

// Public action creators
function loadSiteUsers() {
  return function (dispatch) {
    dispatch(loadUsers());
    return _superagent2.default.get(_config.API_USERS).then(function (response) {
      if (response.status === 200) {
        dispatch(loadUsersSuccess(response));
      }
    }).catch(function (err) {
      dispatch(failedToLoadUsers(err));
    });
  };
}

var INITIAL_STATE = {
  isLoading: false,
  users: [],
  error: null
};

function siteUsersReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case LOAD_USERS_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: false
      });
    case LOAD_USERS_SUCCESS:
      return (0, _extends3.default)({}, state, {
        users: action.payload
      });
    case LOAD_USERS_FAIL:
      return (0, _extends3.default)({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
}

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("material-ui/RadioButton");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/more-vert");

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = require("moment");

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("redux");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("redux-auth-wrapper");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = createFormComponent;

var _react = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a component class that renders the given Material UI component
 * @see https://github.com/erikras/redux-form-material-ui
 * @param MaterialUIComponent The material ui component to render
 * @param mapProps A mapping of props provided by redux-form to the props the Material UI
 * component needs
 */
function createFormComponent(MaterialUIComponent, mapProps) {
  var InputComponent = function (_Component) {
    (0, _inherits3.default)(InputComponent, _Component);

    function InputComponent() {
      (0, _classCallCheck3.default)(this, InputComponent);
      return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(InputComponent).apply(this, arguments));
    }

    (0, _createClass3.default)(InputComponent, [{
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        return this.refs.component;
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _react.createElement)(MaterialUIComponent, (0, _extends3.default)({}, mapProps(this.props), {
          ref: 'component'
        }));
      }
    }]);
    return InputComponent;
  }(_react.Component);

  InputComponent.displayName = 'ReduxFormMaterialUI' + MaterialUIComponent.name;
  return InputComponent;
}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(56);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(9);

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = __webpack_require__(259);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapError = function mapError(_ref) {
  var _ref$meta = _ref.meta;
  _ref$meta = _ref$meta === undefined ? {} : _ref$meta;
  var touched = _ref$meta.touched;
  var error = _ref$meta.error;
  var inputProps = (0, _objectWithoutProperties3.default)(_ref.input, []);
  var props = (0, _objectWithoutProperties3.default)(_ref, ['meta', 'input']);
  var errorProp = arguments.length <= 1 || arguments[1] === undefined ? 'errorText' : arguments[1];
  return touched && error ? (0, _extends4.default)({}, props, inputProps, (0, _defineProperty3.default)({}, errorProp, error)) : (0, _extends4.default)({}, inputProps, props);
};

exports.default = mapError;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = __webpack_require__(71);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loader2.default;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SiteLogo = __webpack_require__(75);

var _SiteLogo2 = _interopRequireDefault(_SiteLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SiteLogo2.default;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.txtColor = exports.grape = exports.boldrPink = exports.cyanLike = exports.midnightBlue = undefined;

var _colorManipulator = __webpack_require__(245);

var _colors = __webpack_require__(62);

var _zIndex = __webpack_require__(234);

var _zIndex2 = _interopRequireDefault(_zIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var midnightBlue = exports.midnightBlue = '#2A3140';
var cyanLike = exports.cyanLike = '#36C6D1';
var boldrPink = exports.boldrPink = '#DD144D';
var grape = exports.grape = '#40404E';
var txtColor = exports.txtColor = 'rgba(0,0,0,.87)';

exports.default = {
  zIndex: _zIndex2.default,
  spacing: {
    iconButtonSize: 24,
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: midnightBlue,
    primary2Color: midnightBlue,
    primary3Color: cyanLike,
    accent1Color: boldrPink,
    accent2Color: grape,
    accent3Color: midnightBlue,
    textColor: txtColor,
    secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
    alternateTextColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.7),
    canvasColor: _colors.white,
    borderColor: _colors.grey300,
    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
    pickerHeaderColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.12),
    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.12),
    shadowColor: _colors.fullBlack
  }
};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialLogin = exports.LoginForm = exports.SignupForm = undefined;

var _mol = __webpack_require__(110);

var _mol2 = _interopRequireDefault(_mol);

var _mol3 = __webpack_require__(108);

var _mol4 = _interopRequireDefault(_mol3);

var _atm = __webpack_require__(106);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SignupForm = _mol2.default;
exports.LoginForm = _mol4.default;
exports.SocialLogin = _atm2.default;

/***/ },
/* 50 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
var LOGIN_FAIL = exports.LOGIN_FAIL = 'AUTH/LOGIN_FAIL';

var LOGOUT_USER = exports.LOGOUT_USER = 'AUTH/LOGOUT_USER';
var LOGOUT_USER_FAIL = exports.LOGOUT_USER_FAIL = 'AUTH/LOGOUT_USER_FAIL';

var CHECK_AUTH_REQUEST = exports.CHECK_AUTH_REQUEST = 'AUTH/CHECK_AUTH_REQUEST';
var CHECK_AUTH_SUCCESS = exports.CHECK_AUTH_SUCCESS = 'AUTH/CHECK_AUTH_SUCCESS';
var CHECK_AUTH_FAIL = exports.CHECK_AUTH_FAIL = 'AUTH/CHECK_AUTH_FAIL';

var LOAD = exports.LOAD = 'auth/LOAD';
var LOAD_SUCCESS = exports.LOAD_SUCCESS = 'auth/LOAD_SUCCESS';
var LOAD_FAIL = exports.LOAD_FAIL = 'auth/LOAD_FAIL';

// Account
var CREATE_ACCOUNT_REQUEST = exports.CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST';
var CREATE_ACCOUNT_SUCCESS = exports.CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
var CREATE_ACCOUNT_FAIL = exports.CREATE_ACCOUNT_FAIL = 'CREATE_ACCOUNT_FAIL';
var LOGIN_POPULATE_ACCOUNT = exports.LOGIN_POPULATE_ACCOUNT = 'LOGIN_POPULATE_ACCOUNT';
var POPULATE_ACCOUNT = exports.POPULATE_ACCOUNT = 'POPULATE_ACCOUNT';

var FORGOT_PASSWORD_REQUEST = exports.FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
var FORGOT_PASSWORD_SUCCESS = exports.FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
var FORGOT_PASSWORD_FAIL = exports.FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';

var RESET_PASSWORD_REQUEST = exports.RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
var RESET_PASSWORD_SUCCESS = exports.RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
var RESET_PASSWORD_FAIL = exports.RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';

var GET_MY_PROFILE_REQUEST = exports.GET_MY_PROFILE_REQUEST = 'GET_MY_PROFILE_REQUEST';
var GET_MY_PROFILE_SUCCESS = exports.GET_MY_PROFILE_SUCCESS = 'GET_MY_PROFILE_SUCCESS';
var GET_MY_PROFILE_FAIL = exports.GET_MY_PROFILE_FAIL = 'GET_MY_PROFILE_FAIL';

var PUBLIC_PROFILE_REQUEST = exports.PUBLIC_PROFILE_REQUEST = 'PUBLIC_PROFILE_REQUEST';
var PUBLIC_PROFILE_SUCCESS = exports.PUBLIC_PROFILE_SUCCESS = 'PUBLIC_PROFILE_SUCCESS';
var PUBLIC_PROFILE_FAIL = exports.PUBLIC_PROFILE_FAIL = 'PUBLIC_PROFILE_FAIL';

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _account = __webpack_require__(17);

Object.keys(_account).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _account[key];
    }
  });
});

var _auth = __webpack_require__(28);

Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth[key];
    }
  });
});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

exports.fetchMediaSuccess = fetchMediaSuccess;
exports.fetchMediaFail = fetchMediaFail;
exports.fetchMedia = fetchMedia;
exports.uploadSuccess = uploadSuccess;
exports.uploadFail = uploadFail;
exports.uploadFiles = uploadFiles;
exports.default = mediaReducer;

var _superagent = __webpack_require__(15);

var _superagent2 = _interopRequireDefault(_superagent);

var _fetch = __webpack_require__(27);

var _fetch2 = _interopRequireDefault(_fetch);

var _notifications = __webpack_require__(19);

var _config = __webpack_require__(16);

var _constants = __webpack_require__(170);

var at = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchMediaStart = function fetchMediaStart() {
  return { type: at.GET_MEDIA_REQUEST };
};
// Fetch Articles Success
function fetchMediaSuccess(response) {
  return {
    type: at.GET_MEDIA_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
function fetchMediaFail(err) {
  return {
    type: at.GET_MEDIA_FAIL,
    error: err
  };
}

function fetchMedia() {
  return function (dispatch) {
    dispatch(fetchMediaStart());
    return _superagent2.default.get('' + _config.API_MEDIA).then(function (response) {
      if (response.status === 200) {
        dispatch(fetchMediaSuccess(response));
      }
    }).catch(function (err) {
      dispatch(fetchMediaFail(err));
    });
  };
}

var beginUpload = function beginUpload() {
  return { type: at.UPLOAD_REQUEST };
};
// Fetch Articles Success
function uploadSuccess(response) {
  return {
    type: at.UPLOAD_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
function uploadFail(err) {
  return {
    type: at.UPLOAD_FAIL,
    error: err
  };
}

function uploadFiles(payload) {
  return function (dispatch) {
    dispatch(beginUpload());
    return _superagent2.default.post(_config.API_MEDIA + '/dashboard', payload).set('Authorization', 'Bearer ' + localStorage.getItem('token')).then(function (response) {
      if (response.status === 201) {
        dispatch(uploadSuccess(response));
      }
    }).catch(function (err) {
      dispatch(uploadFail(err));
    });
  };
}

var INITIAL_STATE = {
  isLoading: false,
  error: null,
  files: []
};
/**
 * Media Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
function mediaReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case at.GET_MEDIA_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });
    case at.GET_MEDIA_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        files: action.payload
      });
    case at.GET_MEDIA_FAIL:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        error: action.payload
      });
    default:
      return state;
  }
}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UsersList = __webpack_require__(179);

var _UsersList2 = _interopRequireDefault(_UsersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _UsersList2.default;

/***/ },
/* 54 */
/***/ function(module, exports) {



/***/ },
/* 55 */
/***/ function(module, exports) {

(function(exports) {
  exports.noop = function(){};
})(typeof module === 'object' && typeof module.exports === 'object' ? module.exports : window);


/***/ },
/* 56 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ },
/* 57 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 58 */
/***/ function(module, exports) {

module.exports = require("classnames");

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = require("material-ui/List");

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = require("material-ui/Subheader");

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/action/description");

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = require("normalizr");

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = __webpack_require__(223);

var _http2 = _interopRequireDefault(_http);

var _debug = __webpack_require__(221);

var _debug2 = _interopRequireDefault(_debug);

var _server = __webpack_require__(192);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('boldr:server');
var port = normalizePort(3000 || 3000);

// Create an http server
var server = _http2.default.createServer(_server2.default);

server.listen(port);
console.log('🎯   ===> Application running in ' + "production" + ' on ' + port);
server.on('error', onError);
server.on('listening', onListening);

process.on('uncaughtException', function (err) {
  debug(err);
  debug(err.stack);
});

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 * @param error   the error object
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // eslint-disable-line
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      debug(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      debug(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'pipe ' + addr.port;
}

exports.default = server;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)("title", {}, void 0, "BoldrLogo"); /* eslint-disable */


var _ref2 = (0, _jsx3.default)("g", {
    id: "boldrlogo",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1431.000000, 566.000000)"
}, void 0, (0, _jsx3.default)("path", {
    d: "M44.1994536,69.503701 L4.33082137,92.5218665 C1.934615,93.9053169 -1.19585379e-13,97.2612026 -1.18052235e-13,100.023069 L-1.64832351e-14,282.993514 C-1.49472966e-14,285.760415 1.93897477,289.113783 4.33082137,290.494717 L162.787875,381.979939 C165.184081,383.363389 169.057671,383.360872 171.449517,381.979939 L329.906571,290.494717 C332.302777,289.111266 334.237392,285.755381 334.237392,282.993514 L334.237392,100.023069 C334.237392,97.2561684 332.298417,93.9027998 329.906571,92.5218665 L171.449517,1.03664409 C169.053311,-0.346806304 165.179721,-0.344289185 162.787875,1.03664409 L132.800546,18.3498361 L132.800546,70.9916391 L163.368224,53.343382 C165.285863,52.2362327 168.390757,52.2338002 170.312609,53.343382 L285.98588,120.127376 C287.903519,121.234526 289.458073,123.922226 289.458073,126.14139 L289.458073,259.709378 C289.458073,261.923677 287.907732,264.61381 285.98588,265.723392 L170.312609,332.507386 C168.39497,333.614535 165.290077,333.616968 163.368224,332.507386 L47.6949534,265.723392 C45.7773145,264.616242 44.2227611,261.928542 44.2227611,259.709378 L44.2227611,129.986607 L44.1994536,130 L44.1994536,69.503701 Z",
    id: "Combined-Shape",
    fill: "#DD144D"
}), (0, _jsx3.default)("path", {
    d: "M65,163.023676 L65,248.393331 C65,250.051289 66.1638836,252.067067 67.5996067,252.895982 L164.461066,308.818971 C165.8969,309.647951 168.224557,309.647887 169.66028,308.818971 L266.52174,252.895982 C267.957573,252.067003 269.121346,250.051161 269.121346,248.393331 L269.121346,136.547351 C269.121346,134.889393 267.957463,132.873615 266.52174,132.0447 L169.66028,76.1217103 C168.224446,75.2927313 165.89679,75.2927952 164.461066,76.1217103 L112,106.410121 L112,31 L69.3374023,55.5083008 C66.9448608,56.8827395 65,60.2360603 65,62.9943805 L65,163.023676 Z M165.299449,129.951625 C166.259356,129.397423 167.815541,129.397348 168.775578,129.951625 L220.336963,159.720605 C221.296869,160.274807 222.075027,161.622466 222.075027,162.731021 L222.075027,222.268979 C222.075027,223.377384 221.297,224.725118 220.336963,225.279395 L168.775578,255.048375 C167.815672,255.602577 166.259486,255.602652 165.299449,255.048375 L113.738065,225.279395 C112.778158,224.725193 112,223.377534 112,222.268979 L112,162.731021 C112,161.622616 112.778028,160.274882 113.738065,159.720605 L165.299449,129.951625 Z",
    id: "Combined-Shape",
    fill: "#424242"
}));

exports.default = function (props) {
    return (0, _jsx3.default)("svg", {
        width: props.width,
        height: props.height,
        viewBox: "1430 566 336 384"
    }, void 0, _ref, _ref2);
};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RadioButton = __webpack_require__(39);

var _createFormComponent = __webpack_require__(44);

var _createFormComponent2 = _interopRequireDefault(_createFormComponent);

var _mapError = __webpack_require__(45);

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createFormComponent2.default)(_RadioButton.RadioButtonGroup, _mapError2.default);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichTextInput = undefined;

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _lodash = __webpack_require__(59);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRte = __webpack_require__(270);

var _reactRte2 = _interopRequireDefault(_reactRte);

var _reduxForm = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORMAT = 'html';

// inner control needed to map from the editor to reduxForm

var SimpleRte = function (_Component) {
  (0, _inherits3.default)(SimpleRte, _Component);

  function SimpleRte(props) {
    (0, _classCallCheck3.default)(this, SimpleRte);

    var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(SimpleRte).call(this, props));

    _this.state = {
      editorValue: _reactRte2.default.createEmptyValue(),
      htmlValue: ''
    };
    return _this;
  }

  // load


  (0, _createClass3.default)(SimpleRte, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setStateFromProps(null, this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setStateFromProps(this.props, newProps);
    }
  }, {
    key: 'setStateFromProps',
    value: function setStateFromProps(oldProps, newProps) {
      // eslint-disable-line
      if (oldProps !== null && oldProps.value === newProps.value) {
        return;
      }

      if (this.state.htmlValue === newProps.value) {
        return;
      }

      this.setState({
        editorValue: this.state.editorValue.setContentFromString(newProps.value, FORMAT)
      });
    }

    // onChange

  }, {
    key: 'onEditorChange',
    value: function onEditorChange(editorValue) {
      var _this2 = this;

      var htmlValue = editorValue.toString(FORMAT);

      this.setState({ editorValue: editorValue, htmlValue: htmlValue });
      setTimeout(function () {
        return _this2.props.onChange(htmlValue);
      }, 1);
    }

    // render

  }, {
    key: 'render',
    value: function render() {
      var otherProps = _lodash2.default.omit(this.props, ['value', 'onChange']);
      return _react2.default.createElement(_reactRte2.default, (0, _extends3.default)({}, otherProps, {
        value: this.state.editorValue,
        onChange: this.onEditorChange
      }));
    }
  }]);
  return SimpleRte;
}(_react.Component);

SimpleRte.propTypes = {
  value: _react.PropTypes.string.isRequired,
  onChange: _react.PropTypes.func.isRequired
};

// bring it together
var renderControl = function renderControl(_ref) {
  var input = _ref.input;
  return (0, _jsx3.default)(SimpleRte, {
    value: input.value,
    onChange: input.onChange,
    className: 'rte'
  });
};

renderControl.propTypes = {
  input: _react.PropTypes.object.isRequired
};

// ReduxForm control
var RichTextInput = exports.RichTextInput = function RichTextInput(_ref2) {
  var name = _ref2.name;
  var label = _ref2.label;
  return (// eslint-disable-line
    (0, _jsx3.default)(_reduxForm.Field, {
      name: name,
      label: label,
      component: renderControl
    })
  );
};

RichTextInput.propTypes = {
  name: _react.PropTypes.string.isRequired,
  label: _react.PropTypes.string.isRequired
};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = function Heading(props) {
  var tagName = 'h' + props.size;
  var className = 'heading heading--' + props.size;
  var style = {
    color: props.color,
    textAlign: props.align,
    paddingTop: props.top,
    paddingBottom: props.bottom
  };
  return _react2.default.createElement(tagName, { className: className, style: style }, props.children);
};

exports.default = Heading;


Heading.propTypes = {
  size: _react.PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  color: _react.PropTypes.string,
  align: _react.PropTypes.string,
  children: _react.PropTypes.node,
  top: _react.PropTypes.string,
  bottom: _react.PropTypes.string
};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CircularProgress = __webpack_require__(228);

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_CircularProgress2.default, {}), (0, _jsx3.default)(_CircularProgress2.default, {
  size: 1.5
}), (0, _jsx3.default)(_CircularProgress2.default, {
  size: 2
}));

var Loader = function Loader() {
  return _ref;
};

exports.default = Loader;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _style = __webpack_require__(54);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var inline = {
  zIndex: '99999',
  boxSizing: 'border-box',
  width: '100%',
  padding: '1em',
  backgroundColor: '#323232',
  color: 'rgb(250, 250, 250)',
  lineHeight: '16px',
  boxShadow: '0 2px 5px 0 rgba(0, 0, 0, .26)',
  borderRadius: '2px',
  transition: 'bottom .5s cubic-bezier(.42, 0, .58, 1)',
  left: '10px',
  maxWidth: '320px',
  textRendering: 'optimizeLegibility'
};

var Notification = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification() {
    (0, _classCallCheck3.default)(this, Notification);

    var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Notification).call(this));

    _this._id = new Date().getTime();
    _this._onActionClick = _this._onActionClick.bind(_this);
    return _this;
  }

  /*
   * Handle action click event
   * @description Handle click events on the
   */


  (0, _createClass3.default)(Notification, [{
    key: '_onActionClick',
    value: function _onActionClick(event) {
      event.preventDefault();
      if (this.props.onActionClick) {
        this.props.onActionClick(this.props.id);
      } else {
        return;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var kind = _props.kind;
      var actionLabel = _props.actionLabel;

      return (0, _jsx3.default)('div', {
        style: inline,
        className: cx('notification notification--' + kind)
      }, void 0, (0, _jsx3.default)('div', {
        className: cx('notification__icon')
      }), (0, _jsx3.default)('div', {
        className: cx('notification__content')
      }, void 0, (0, _jsx3.default)('span', {
        className: cx('notification__message')
      }, void 0, this.props.message)), actionLabel && (0, _jsx3.default)('span', {
        className: cx('notification__action')
      }, void 0, (0, _jsx3.default)('button', {
        onClick: this._onActionClick
      }, void 0, this.props.actionLabel)), (0, _jsx3.default)('div', {
        className: cx('notification__close')
      }));
    }
  }]);
  return Notification;
}(_react.Component);

Notification.defaultProps = {
  kind: 'info'
};

Notification.propTypes = {
  id: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]).isRequired,
  message: _react2.default.PropTypes.string.isRequired,
  kind: _react2.default.PropTypes.oneOf(['success', 'info', 'error', 'danger']).isRequired,
  onActionClick: _react2.default.PropTypes.func,
  actionLabel: _react2.default.PropTypes.string
};

exports.default = Notification;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _reactAddonsCssTransitionGroup = __webpack_require__(248);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _Notification = __webpack_require__(72);

var _Notification2 = _interopRequireDefault(_Notification);

var _style = __webpack_require__(54);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var getter = function getter(obj, propName) {
  return obj.get ? obj.get(propName) : obj[propName];
};

function Notifications(props) {
  var notifications = props.notifications;
  var className = props.className;
  var transitionEnterTimeout = props.transitionEnterTimeout;
  var transitionLeaveTimeout = props.transitionLeaveTimeout;
  var onActionClick = props.onActionClick;
  var actionLabel = props.actionLabel;


  var items = notifications.map(function (notification) {
    return (0, _jsx3.default)(_Notification2.default, {
      id: getter(notification, 'id'),
      message: getter(notification, 'message'),
      kind: getter(notification, 'kind'),
      onActionClick: onActionClick,
      actionLabel: actionLabel
    }, getter(notification, 'id'));
  });
  var classes = ['notification__container', className || null].join(' ').split();

  return (0, _jsx3.default)('div', {
    className: cx(classes)
  }, void 0, (0, _jsx3.default)(_reactAddonsCssTransitionGroup2.default, {
    transitionName: 'notification-transition',
    transitionEnterTimeout: transitionEnterTimeout,
    transitionLeaveTimeout: transitionLeaveTimeout
  }, void 0, items));
}

Notifications.defaultProps = {
  className: null,
  transitionEnterTimeout: 600,
  transitionLeaveTimeout: 600,
  onActionClick: null,
  action: null
};

Notifications.propTypes = {
  notifications: _react2.default.PropTypes.array,
  className: _react2.default.PropTypes.string,
  transitionEnterTimeout: _react2.default.PropTypes.number,
  transitionLeaveTimeout: _react2.default.PropTypes.number,
  onActionClick: _react2.default.PropTypes.func,
  actionLabel: _react2.default.PropTypes.string
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    notifications: state.get ? state.get('notifications') : state.notifications
  };
}, {})(Notifications);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Notifications = __webpack_require__(73);

var _Notifications2 = _interopRequireDefault(_Notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Notifications2.default;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

exports.default = SiteLogo;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _atm = __webpack_require__(34);

var _atm2 = _interopRequireDefault(_atm);

var _boldrWhite = __webpack_require__(55);

var _boldrWhite2 = _interopRequireDefault(_boldrWhite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inlineStyle = {
  logo: {
    verticalAlign: 'middle'
  },
  img: {
    verticalAlign: 'middle'
  },
  title: {
    verticalAlign: 'top',
    color: '#333'
  }
};
function SiteLogo(props) {
  return (0, _jsx3.default)('div', {
    className: 'sitelogo',
    style: inlineStyle.logo
  }, void 0, (0, _jsx3.default)('img', {
    src: _boldrWhite2.default,
    alt: 'logo',
    height: props.logoHeight,
    style: inlineStyle.img
  }), (0, _jsx3.default)('span', {
    style: inlineStyle.title
  }, void 0, props.SiteLogoOrTitle));
}

SiteLogo.propTypes = {
  SiteLogoOrTitle: _react2.default.PropTypes.string,
  logoHeight: _react2.default.PropTypes.string
};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _s3Uploader = __webpack_require__(77);

var _s3Uploader2 = _interopRequireDefault(_s3Uploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _s3Uploader2.default;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(249);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _s3Upload = __webpack_require__(95);

var _s3Upload2 = _interopRequireDefault(_s3Upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S3Uploader = _react2.default.createClass({
  displayName: 'S3Uploader',

  propTypes: {
    signingUrl: _react2.default.PropTypes.string,
    getSignedUrl: _react2.default.PropTypes.func,
    onProgress: _react2.default.PropTypes.func,
    onFinish: _react2.default.PropTypes.func,
    onError: _react2.default.PropTypes.func,
    signingUrlHeaders: _react2.default.PropTypes.object,
    signingUrlQueryParams: _react2.default.PropTypes.object,
    uploadRequestHeaders: _react2.default.PropTypes.object,
    contentDisposition: _react2.default.PropTypes.string,
    server: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onProgress: function onProgress(percent, message) {
        console.log('Upload progress: ' + percent + ' % ' + message);
      },
      onFinish: function onFinish(signResult) {
        console.log(signResult);
        // /api/v1/s3/uploads/0fb879b7-fff3-4281-a86e-6e866b717282_Screen_Shot_2016-07-28_at_12.30.02_PM.png
        // <BUCKET>.<REGION>.amazonaws.com/0fb879b7-fff3-4281-a86e-6e866b717282_Screen_Shot_2016-07-28_at_12.30.02_PM.png
        console.log('Upload finished: ' + signResult.publicUrl);
        this.setState({
          file: signResult.publicUrl
        });
      },
      onError: function onError(message) {
        console.log('Upload error: ' + message);
      },

      server: ''
    };
  },
  getInputProps: function getInputProps() {
    var temporaryProps = Object.assign({}, this.props, { className: 'uploader', type: 'file', onChange: this.uploadFile });
    var inputProps = {};

    var invalidProps = Object.keys(S3Uploader.propTypes);

    for (var key in temporaryProps) {
      if (temporaryProps.hasOwnProperty(key) && invalidProps.indexOf(key) === -1) {
        inputProps[key] = temporaryProps[key];
      }
    }

    return inputProps;
  },
  uploadFile: function uploadFile() {
    new _s3Upload2.default({ // eslint-disable-line
      fileElement: _reactDom2.default.findDOMNode(this),
      signingUrl: this.props.signingUrl,
      getSignedUrl: this.props.getSignedUrl,
      onProgress: this.props.onProgress,
      onFinishS3Put: this.props.onFinish,
      onError: this.props.onError,
      signingUrlHeaders: this.props.signingUrlHeaders,
      signingUrlQueryParams: this.props.signingUrlQueryParams,
      uploadRequestHeaders: this.props.uploadRequestHeaders,
      contentDisposition: this.props.contentDisposition,
      server: this.props.server
    });
  },
  clear: function clear() {
    clearInputFile(_reactDom2.default.findDOMNode(this));
  },
  render: function render() {
    return _react2.default.DOM.input(this.getInputProps());
  }
});

// http://stackoverflow.com/a/24608023/194065
/* eslint-disable react/prefer-es6-class */
function clearInputFile(f) {
  if (f.value) {
    try {
      f.value = ''; // for IE11, latest Chrome/Firefox/Opera...
    } catch (err) {
      console.log(err);
    }
    if (f.value) {
      // for IE5 ~ IE10
      var form = document.createElement('form');
      var parentNode = f.parentNode;
      var ref = f.nextSibling;
      form.appendChild(f);
      form.reset();
      parentNode.insertBefore(f, ref);
    }
  }
}
module.exports = S3Uploader;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _style = __webpack_require__(193);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var Hero = function Hero(props) {
  return (0, _jsx3.default)('div', {
    className: cx('hero')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'wrap'
  }, void 0, (0, _jsx3.default)('h1', {
    className: cx('heroTag')
  }, void 0, 'Bold', (0, _jsx3.default)('span', {
    style: { color: 'rgb(229, 0, 80)' }
  }, void 0, 'r'))));
};

exports.default = Hero;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hero = __webpack_require__(78);

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Hero2.default;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _DropdownList = __webpack_require__(85);

var _DropdownList2 = _interopRequireDefault(_DropdownList);

var _DropdownHighlight = __webpack_require__(83);

var _DropdownHighlight2 = _interopRequireDefault(_DropdownHighlight);

var _Dropdown = __webpack_require__(194);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Dropdown2.default);

var Dropdown = function (_Component) {
  (0, _inherits3.default)(Dropdown, _Component);

  function Dropdown() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(Dropdown)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      highlight: {}
    }, _this.highlightHandler = function (highlight) {
      if (!highlight) return;
      _this.setState({ highlight: highlight });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var data = this.props.data;
      // Set highlight object to default highlight of the dropdown

      var highlightComponent = data.childrens.filter(function (component) {
        return !!component.default;
      });

      if (!highlightComponent.length) return;

      this.setState({ highlight: highlightComponent[0].default });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var data = _props.data;
      var closeDropdowns = _props.closeDropdowns;
      var open = _props.open;


      return (0, _jsx3.default)('div', {
        className: cx('dropdown', data.dropdownClass, {
          'is-open': open
        })
      }, void 0, data.childrens.map(function (component) {
        switch (component.componentType) {
          case 'list':
            return (0, _jsx3.default)(_DropdownList2.default, {
              data: component,
              parentClass: data.dropdownClass,
              highlightHandler: _this2.highlightHandler,
              closeDropdowns: closeDropdowns
            }, component.key);
          case 'highlight':
            return (0, _jsx3.default)(_DropdownHighlight2.default, {
              data: _this2.state.highlight,
              parentClass: data.dropdownClass,
              closeDropdowns: closeDropdowns
            }, component.key);
          default:
            return null;
        }
      }));
    }
  }]);
  return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
  data: _react.PropTypes.object,
  closeDropdowns: _react.PropTypes.func,
  open: _react.PropTypes.bool
};

Dropdown.defaultProps = {
  data: {}
};

exports.default = Dropdown;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Dropdown = __webpack_require__(80);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Dropdown2.default;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _DropdownHighlight = __webpack_require__(195);

var _DropdownHighlight2 = _interopRequireDefault(_DropdownHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_DropdownHighlight2.default);

var DropdownHighlight = function DropdownHighlight(_ref) {
  var data = _ref.data;
  var parentClass = _ref.parentClass;
  var closeDropdowns = _ref.closeDropdowns;
  return (0, _jsx3.default)('div', {
    className: cx({
      highlight: parentClass !== 'moreDropdown',
      moreHighlight: parentClass === 'moreDropdown'
    })
  }, void 0, data.componentTitle ? (0, _jsx3.default)('h4', {
    className: cx('section-title'),
    dangerouslySetInnerHTML: { __html: data.componentTitle }
  }, void 0) : null, (0, _jsx3.default)('a', {
    href: data.link,
    onClick: closeDropdowns,
    className: cx('content'),
    rel: data.external ? 'external' : null
  }, void 0, (0, _jsx3.default)('img', {
    src: data.thumbnail,
    alt: data.title
  }), (0, _jsx3.default)('h5', {
    className: cx('title')
  }, void 0, data.title), data.excerpt ? (0, _jsx3.default)('p', {
    className: cx('text')
  }, void 0, data.excerpt) : null, data.date ? (0, _jsx3.default)('span', {
    className: cx('time')
  }, void 0, data.date) : null), (0, _jsx3.default)('div', {
    className: cx('content')
  }, void 0, (data.morelinks || []).map(function (_ref2, index) {
    var href = _ref2.href;
    var text = _ref2.text;
    var external = _ref2.external;
    return (0, _jsx3.default)('a', {
      href: href,
      className: cx('link'),
      onClick: closeDropdowns,
      rel: external ? 'external' : null
    }, index, text);
  })));
};

DropdownHighlight.propTypes = {
  data: _react.PropTypes.object,
  parentClass: _react.PropTypes.string,
  closeDropdowns: _react.PropTypes.func
};

exports.default = DropdownHighlight;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _DropdownHighlight = __webpack_require__(82);

var _DropdownHighlight2 = _interopRequireDefault(_DropdownHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DropdownHighlight2.default;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _DropdownListItem = __webpack_require__(87);

var _DropdownListItem2 = _interopRequireDefault(_DropdownListItem);

var _DropdownList = __webpack_require__(196);

var _DropdownList2 = _interopRequireDefault(_DropdownList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_DropdownList2.default);

var DropdownList = function DropdownList(_ref) {
  var data = _ref.data;
  var highlightHandler = _ref.highlightHandler;
  var parentClass = _ref.parentClass;
  var closeDropdowns = _ref.closeDropdowns;
  return (0, _jsx3.default)('div', {
    className: cx('dropdownList', { moreDropdownList: parentClass === 'moreDropdown' })
  }, void 0, data.title ? (0, _jsx3.default)('h4', {
    className: cx('section-title')
  }, void 0, data.title) : null, (0, _jsx3.default)('ul', {}, void 0, data.items.map(function (item) {
    return (0, _jsx3.default)(_DropdownListItem2.default, {
      item: item,
      highlightHandler: highlightHandler,
      hasArrow: data.hasArrows,
      parentClass: parentClass,
      closeDropdowns: closeDropdowns
    }, item.id);
  })));
};

DropdownList.propTypes = {
  data: _react.PropTypes.object,
  highlightHandler: _react.PropTypes.func,
  dropdownReference: _react.PropTypes.object,
  parentClass: _react.PropTypes.string,
  closeDropdowns: _react.PropTypes.func
};

exports.default = DropdownList;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _DropdownList = __webpack_require__(84);

var _DropdownList2 = _interopRequireDefault(_DropdownList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DropdownList2.default;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DropdownListItem = __webpack_require__(197);

var _DropdownListItem2 = _interopRequireDefault(_DropdownListItem);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_DropdownListItem2.default);

var DropdownListItem = function (_Component) {
  (0, _inherits3.default)(DropdownListItem, _Component);

  function DropdownListItem() {
    (0, _classCallCheck3.default)(this, DropdownListItem);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(DropdownListItem).apply(this, arguments));
  }

  (0, _createClass3.default)(DropdownListItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var item = this.props.item;

      if (item.highlight && item.highlight.thumbnail) {
        var preloadImage = new Image();
        preloadImage.src = item.highlight.thumbnail;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var hasArrow = _props.hasArrow;
      var parentClass = _props.parentClass;
      var highlightHandler = _props.highlightHandler;
      var item = _props.item;
      var closeDropdowns = _props.closeDropdowns;

      var logos = {
        auth0: 'https://styleguide.auth0.com/lib/logos/img/badge.png',
        webtask: 'https://webtask.io/images/symbol.svg'
      };
      var linkExternal = item.external ? 'external' : null;
      return (0, _jsx3.default)('li', {
        className: cx({
          item: !hasArrow,
          arrowItem: hasArrow,
          moreItem: parentClass === 'moreDropdown'
        }),
        onMouseEnter: function onMouseEnter() {
          highlightHandler(item.highlight);
        },
        onFocus: function onFocus() {
          highlightHandler(item.highlight);
        }
      }, void 0, (0, _jsx3.default)('a', {
        href: item.href,
        onClick: closeDropdowns,
        rel: linkExternal
      }, void 0, item.icon ? (0, _jsx3.default)('img', {
        src: logos[item.icon],
        className: cx('icon'),
        role: 'presentation',
        alt: ''
      }) : null, (0, _jsx3.default)('span', {
        className: cx('text')
      }, void 0, item.name)));
    }
  }]);
  return DropdownListItem;
}(_react.Component);

DropdownListItem.propTypes = {
  item: _react.PropTypes.object,
  highlightHandler: _react.PropTypes.func,
  dropdownReference: _react.PropTypes.object,
  hasArrow: _react.PropTypes.bool,
  parentClass: _react.PropTypes.string,
  closeDropdowns: _react.PropTypes.func
};
exports.default = DropdownListItem;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _DropdownListItem = __webpack_require__(86);

var _DropdownListItem2 = _interopRequireDefault(_DropdownListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DropdownListItem2.default;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _Head = __webpack_require__(198);

var _Head2 = _interopRequireDefault(_Head);

var _boldrWhite = __webpack_require__(55);

var _boldrWhite2 = _interopRequireDefault(_boldrWhite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Head2.default);

var _ref2 = (0, _jsx3.default)('img', {
  src: _boldrWhite2.default,
  alt: 'logo',
  height: '50px'
});

var Head = function Head(_ref) {
  var toggleDropdownHandler = _ref.toggleDropdownHandler;
  var dropdownOpen = _ref.dropdownOpen;
  var theme = _ref.theme;
  var closeHeaderDropdown = _ref.closeHeaderDropdown;
  return (0, _jsx3.default)('div', {
    className: cx('head', ['theme-' + theme], {
      dropdownOpen: dropdownOpen
    })
  }, void 0, (0, _jsx3.default)('button', {
    className: cx('toggleButton', 'collapsed', { closeButton: dropdownOpen }),
    onClick: toggleDropdownHandler
  }, void 0, (0, _jsx3.default)('span', {
    className: cx('iconBar')
  }), (0, _jsx3.default)('span', {
    className: cx('iconBar')
  }), (0, _jsx3.default)('span', {
    className: cx('iconBar')
  }), (0, _jsx3.default)('span', {
    className: cx('iconBar')
  })), (0, _jsx3.default)('h1', {
    className: cx('brand')
  }, void 0, (0, _jsx3.default)('a', {
    href: '/',
    rel: 'home',
    className: cx('logo'),
    onClick: closeHeaderDropdown
  }, void 0, _ref2)));
};

Head.propTypes = {
  toggleDropdownHandler: _react.PropTypes.func,
  dropdownOpen: _react.PropTypes.bool,
  theme: _react.PropTypes.string,
  closeHeaderDropdown: _react.PropTypes.func
};

exports.default = Head;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Head = __webpack_require__(88);

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Head2.default;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _IconButton = __webpack_require__(23);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _menu = __webpack_require__(242);

var _menu2 = _interopRequireDefault(_menu);

var _classnames = __webpack_require__(58);

var _classnames2 = _interopRequireDefault(_classnames);

var _redux = __webpack_require__(42);

var _reactRouter = __webpack_require__(26);

var _reactRedux = __webpack_require__(7);

var _IconMenu = __webpack_require__(32);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = __webpack_require__(24);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _web = __webpack_require__(240);

var _web2 = _interopRequireDefault(_web);

var _description = __webpack_require__(63);

var _description2 = _interopRequireDefault(_description);

var _person = __webpack_require__(244);

var _person2 = _interopRequireDefault(_person);

var _moreVert = __webpack_require__(40);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _boldr = __webpack_require__(29);

var _Head = __webpack_require__(89);

var _Head2 = _interopRequireDefault(_Head);

var _Item = __webpack_require__(93);

var _Item2 = _interopRequireDefault(_Item);

var _menuItems = __webpack_require__(217);

var _menuItems2 = _interopRequireDefault(_menuItems);

var _Header = __webpack_require__(199);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Header2.default);
// import FlatButton from 'material-ui/FlatButton';

var _ref = (0, _jsx3.default)(_person2.default, {
  color: 'white'
});

var _ref2 = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_MenuItem2.default, {
  primaryText: 'Profile',
  containerElement: (0, _jsx3.default)(_reactRouter.Link, {
    to: '/profile'
  })
}), (0, _jsx3.default)(_MenuItem2.default, {
  primaryText: 'Preferences',
  containerElement: (0, _jsx3.default)(_reactRouter.Link, {
    to: '/account/preferences'
  })
}), (0, _jsx3.default)(_MenuItem2.default, {
  primaryText: 'Sign out'
}));

var _ref3 = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_MenuItem2.default, {
  primaryText: 'Log In',
  containerElement: (0, _jsx3.default)(_reactRouter.Link, {
    to: '/account/login'
  })
}), (0, _jsx3.default)(_MenuItem2.default, {
  primaryText: 'Sign Up',
  containerElement: (0, _jsx3.default)(_reactRouter.Link, {
    to: '/account/signup'
  })
}));

var _ref4 = (0, _jsx3.default)(_web2.default, {
  color: 'white'
});

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(Header)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      navbarDropdownIsOpen: false,
      mobileState: true
    }, _this.setHeightDropdown = function () {
      var height = _this.state.mobileState ? window.innerHeight - 75 + 'px' : '';
      _this.refs.dropdownContent.style.height = height;
    }, _this.handleResize = function () {
      var mobileState = window.innerWidth < _this.props.breakpoint;
      _this.setState({ mobileState: mobileState }, function () {
        _this.addOverflowBody();
        _this.setHeightDropdown();
      });
    }, _this.navbarDropdownHandler = function () {
      _this.setState({ navbarDropdownIsOpen: !_this.state.navbarDropdownIsOpen }, _this.addOverflowBody);
    }, _this.closeDropdownOnButtonClick = function (callback) {
      return function (event) {
        var isMobile = _this.state.mobileState;
        var isDropdownOpen = _this.state.navbarDropdownIsOpen;

        if (callback) callback(event);
        if (isMobile && isDropdownOpen) _this.navbarDropdownHandler();
      };
    }, _this.handleKeyDown = function (e) {
      // Only enable focusable elements on key tab pressed
      if (e.keyCode !== 9 || _this.state.focusable) return;
      _this.setState({ focusable: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'handleClickHome',
    value: function handleClickHome(dispatch) {
      this.props.actions.goHome();
    }
  }, {
    key: 'addOverflowBody',
    value: function addOverflowBody() {
      var _state = this.state;
      var navbarDropdownIsOpen = _state.navbarDropdownIsOpen;
      var mobileState = _state.mobileState;


      if (navbarDropdownIsOpen && mobileState) {
        document.body.classList.add(cx('overflow'));
      } else {
        document.body.classList.remove(cx('overflow'));
      }
    }
  }, {
    key: 'renderButton',
    value: function renderButton(link, onClick, text, className) {
      return !!link ? (0, _jsx3.default)('a', {
        href: link,
        className: className,
        onClick: onClick
      }, void 0, text) : (0, _jsx3.default)(_RaisedButton2.default, {
        className: className,
        onClick: onClick
      }, void 0, text);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var menuItems = _props.menuItems;
      var theme = _props.theme;
      var _state2 = this.state;
      var navbarDropdownIsOpen = _state2.navbarDropdownIsOpen;
      var mobileState = _state2.mobileState;
      var focusable = _state2.focusable;


      var renderedMenuItems = menuItems.map(function (item) {
        return (0, _jsx3.default)(_Item2.default, {
          item: item,
          theme: theme,
          simpleList: item.simpleList,
          closeHeaderDropdown: _this2.closeDropdownOnButtonClick(),
          mobile: mobileState
        }, item.position + item.id);
      });

      return (0, _jsx3.default)('header', {
        className: cx('header', ['theme-' + theme], className, {
          'is-dropdown-open': navbarDropdownIsOpen,
          focusable: focusable
        }),
        onKeyDown: this.handleKeyDown
      }, void 0, (0, _jsx3.default)('div', {
        className: cx('menu', { 'is-dropdown-open': navbarDropdownIsOpen })
      }, void 0, (0, _jsx3.default)('div', {
        className: cx('container')
      }, void 0, (0, _jsx3.default)(_Head2.default, {
        toggleDropdownHandler: this.navbarDropdownHandler,
        dropdownOpen: navbarDropdownIsOpen,
        theme: theme,
        closeHeaderDropdown: this.closeDropdownOnButtonClick()
      }), _react2.default.createElement(
        'nav',
        { className: cx('collapse', {
            'is-dropdown-open': navbarDropdownIsOpen
          }),
          ref: 'dropdownContent'
        },
        (0, _jsx3.default)('ul', {
          className: cx('navigation')
        }, void 0, !!children ? children : renderedMenuItems)
      ), (0, _jsx3.default)('div', {
        className: (0, _classnames2.default)(cx('buttons-group', { 'is-dropdown-open': navbarDropdownIsOpen }), {
          'theme-dark': theme === 'dark'
        })
      }, void 0, (0, _jsx3.default)('ul', {
        style: { listStyleType: 'none', display: 'flex', margin: '0' }
      }, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_IconMenu2.default, {
        iconButtonElement: (0, _jsx3.default)(_IconButton2.default, {
          style: { padding: '0' }
        }, void 0, _ref),
        anchorOrigin: { horizontal: 'left', vertical: 'top' },
        targetOrigin: { horizontal: 'left', vertical: 'top' }
      }, void 0, this.props.auth.isAuthenticated ? _ref2 : _ref3)), this.props.auth.roleId > 4 ? (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactRouter.Link, {
        to: '/dashboard'
      }, void 0, (0, _jsx3.default)(_IconButton2.default, {
        style: { padding: '0' }
      }, void 0, _ref4))) : null)))));
    }
  }]);
  return Header;
}(_react.Component);

Header.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  menuItems: _react.PropTypes.array,
  theme: _react.PropTypes.oneOf(['light', 'dark']),
  featuredEnable: _react.PropTypes.bool,
  featuredLink: _react.PropTypes.string,
  featuredText: _react.PropTypes.string,
  breakpoint: _react.PropTypes.number,
  auth: _react.PropTypes.object,
  actions: _react.PropTypes.object,
  handleBurger: _react.PropTypes.func
};
Header.defaultProps = {
  className: '',
  children: null,
  menuItems: _menuItems2.default,
  theme: 'light',
  breakpoint: 992
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)({ goHome: _boldr.goHome }, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Header = __webpack_require__(90);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Header2.default;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _Dropdown = __webpack_require__(81);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Item = __webpack_require__(200);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Item2.default);

var Item = function (_Component) {
  (0, _inherits3.default)(Item, _Component);

  function Item() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(Item)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      openDropdown: false
    }, _this.handleDropdown = function (e) {
      var openDropdown = _this.state.openDropdown;
      var mobile = _this.props.mobile;

      var isMobile = mobile;
      var shouldOpenDropdown = ['mouseenter', 'focus'].indexOf(e.type) > -1;

      if (shouldOpenDropdown === openDropdown || isMobile) return;

      _this.setState({ openDropdown: shouldOpenDropdown });
    }, _this.closeItemDropdown = function () {
      var isDesktop = !_this.props.mobile;
      var isDropdownOpen = _this.state.openDropdown;

      if (isDesktop && isDropdownOpen) {
        _this.setState({ openDropdown: false });
      }
    }, _this.closeDropdowns = function () {
      _this.closeItemDropdown();
      _this.props.closeHeaderDropdown();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var item = _props.item;
      var theme = _props.theme;
      var simpleList = _props.simpleList;
      var mobile = _props.mobile;


      var linkContent = (0, _jsx3.default)(ItemContent, {
        name: item.name,
        childrens: item.childrens,
        theme: theme
      });
      var linkHref = (mobile ? item.mobileHref : null) || item.href;
      var linkExternal = item.external ? 'external' : null;

      return (0, _jsx3.default)('li', {
        className: cx('item', ['item-' + item.id], ['theme-' + theme], {
          'simple-list': simpleList,
          'is-dropdown-open': this.state.openDropdown
        }),
        onMouseEnter: this.handleDropdown,
        onFocus: this.handleDropdown,
        onMouseLeave: this.handleDropdown,
        onBlur: this.handleDropdown
      }, void 0, linkHref ? (0, _jsx3.default)('a', {
        href: linkHref,
        onClick: this.closeDropdowns,
        className: cx('link'),
        rel: linkExternal
      }, void 0, linkContent) : (0, _jsx3.default)('span', {
        tabIndex: '0',
        className: cx('link')
      }, void 0, linkContent), item.childrens ? (0, _jsx3.default)(_Dropdown2.default, {
        data: item,
        closeDropdowns: this.closeDropdowns,
        open: this.state.openDropdown
      }) : null);
    }
  }]);
  return Item;
}(_react.Component);

Item.propTypes = {
  className: _react.PropTypes.string,
  item: _react.PropTypes.object,
  theme: _react.PropTypes.string,
  simpleList: _react.PropTypes.bool,
  closeHeaderDropdown: _react.PropTypes.func,
  mobile: _react.PropTypes.bool
};

exports.default = Item;


var ItemContent = function ItemContent(_ref) {
  var name = _ref.name;
  var childrens = _ref.childrens;
  var theme = _ref.theme;
  return (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('span', {
    className: cx('text')
  }, void 0, name), childrens ? (0, _jsx3.default)('svg', {
    width: '10',
    height: '6',
    viewBox: '62 7 10 6',
    className: cx('item-caret')
  }, void 0, (0, _jsx3.default)('path', {
    d: 'M71.884 7.698l-4.56 5.116c-.013.022-.008.05-.026.07-.083.084-.192.12-.3.116-.106.004-.214-.033-.295-.117-.02-.02-.014-.047-.028-.068L62.115 7.7c-.154-.16-.154-.42 0-.58.156-.16.408-.16.563 0L67 11.97l4.322-4.85c.155-.16.406-.16.56 0 .157.16.157.418.002.578z',
    fill: theme === 'dark' ? '#fff' : '#000'
  })) : null, childrens ? (0, _jsx3.default)('span', {
    className: cx('dropdown-caret')
  }) : null);
};

ItemContent.propTypes = {
  name: _react.PropTypes.string,
  childrens: _react.PropTypes.array,
  theme: _react.PropTypes.string
};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Item = __webpack_require__(92);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Item2.default;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonHeaders = exports.credentials = undefined;

var _typeof2 = __webpack_require__(57);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.processResponse = processResponse;

var _lodash = __webpack_require__(59);

var _lodash2 = _interopRequireDefault(_lodash);

var _superagent = __webpack_require__(15);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */

var methods = ['get', 'post', 'put', 'patch', 'del'];

function processResponse(response) {
  return response.json().then(function (json) {
    if (response.status >= 400) {
      throw new Error(json.data.message);
    }
    return json;
  });
}

var credentials = exports.credentials = 'same-origin';
var jsonHeaders = exports.jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function formatUrl(path) {
  var adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (true) {

    // Prepend host and port of the API server to the path.
    return {"NODE_ENV":"production","SERVER_PORT":3000}.TARGET_URL + adjustedPath;
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return '/api/v1' + adjustedPath;
  // return 'http://localhost:';
}

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */

var _ApiClient = function _ApiClient() {
  var _this = this;

  (0, _classCallCheck3.default)(this, _ApiClient);

  methods.forEach(function (method) {
    return _this[method] = function (path) {
      var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var params = _ref.params;
      var formData = _ref.formData;
      var data = _ref.data;
      var headers = _ref.headers;
      return new Promise(function (resolve, reject) {
        var request = _superagent2.default[method](formatUrl(path));
        if (formData) {

          if (typeof FormData !== 'undefined') {
            (function () {
              var fD = new FormData();
              _lodash2.default.map(formData, function (value, key) {
                if (value && window.File && window.FileReader && window.FileList && window.Blob && value instanceof FileList) {
                  _lodash2.default.map(value, function (f, index) {
                    if (f && f instanceof File) {
                      fD.append(key + '[' + index + ']', f);
                    }
                  });
                } else if (value) {
                  if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
                    fD.append(key, JSON.stringify(value));
                  } else {
                    fD.append(key, value);
                  }
                }
              });
              request.send(fD);
            })();
          }
        }

        if (params) {
          // console.log('PARAMS BINNEN API', params);

          params.time = Date.now().toString();
          request.query(qs.stringify(params, { encode: false }));
        } else {
          request.query([Date.now().toString()]);
        }

        // const token = cookie.load('token');
        // if (token) {
        //   request.set('Authorization', 'Bearer ' + token);
        // }

        if (headers !== undefined) {
          for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
              if (key === 'Authorization') {
                request.set(key, headers[key]);
              } else if (key !== 'Authorization') {
                request.set(key, headers[key]);
              }
            }
          }
        }

        // IE cache headers
        request.set('X-Requested-With', 'XMLHttpRequest');
        request.set('Expires', '-1');
        request.set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1,private');

        if (data) {
          request.send(data);
        }

        request.end(function (err) {
          var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

          var body = _ref2.body;
          return err ? reject(body || err) : resolve(body);
        });
      });
    };
  });
};

var ApiClient = _ApiClient;

exports.default = ApiClient;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _latinize = __webpack_require__(100);

var _latinize2 = _interopRequireDefault(_latinize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

S3Upload.prototype.server = '';
S3Upload.prototype.signingUrl = '/sign-s3';
S3Upload.prototype.fileElement = null;
S3Upload.prototype.files = null;

S3Upload.prototype.onFinishS3Put = function (signResult, file) {
  return console.log('base.onFinishS3Put()', signResult.publicUrl);
};

S3Upload.prototype.onProgress = function (percent, status, file) {
  return console.log('base.onProgress()', percent, status);
};

S3Upload.prototype.onError = function (status, file) {
  return console.log('base.onError()', status);
};

function S3Upload(options) {
  if (options === null) {
    options = {};
  }
  for (var option in options) {
    if (options.hasOwnProperty(option)) {
      this[option] = options[option];
    }
  }
  var files = this.fileElement ? this.fileElement.files : this.files || [];
  this.handleFileSelect(files);
}

S3Upload.prototype.handleFileSelect = function (files) {
  var result = [];
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    this.onProgress(0, 'Waiting', file);
    result.push(this.uploadFile(file));
  }
  return result;
};

S3Upload.prototype.createCORSRequest = function (method, url) {
  var xhr = new XMLHttpRequest();

  if (xhr.withCredentials !== null) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest !== 'undefined') {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
};

S3Upload.prototype.executeOnSignedUrl = function (file, callback) {
  var _this = this;

  var normalizedFileName = file.name.replace(/[!\^`><{}\[\]()*#%'"~|&@:;$=+?\s\\\/\x00-\x1F\x7f’]+/ig, '_').normalize('NFC');

  var fileName = (0, _latinize2.default)(normalizedFileName);
  var queryString = '?objectName=' + fileName + '&contentType=' + encodeURIComponent(file.type);
  if (this.signingUrlQueryParams) {
    (function () {
      var signingUrlQueryParams = _this.signingUrlQueryParams;
      Object.keys(signingUrlQueryParams).forEach(function (key) {
        var val = signingUrlQueryParams[key];
        queryString += '&' + key + '=' + val;
      });
    })();
  }
  var xhr = this.createCORSRequest('GET', this.server + this.signingUrl + queryString);
  if (this.signingUrlHeaders) {
    (function () {
      var signingUrlHeaders = _this.signingUrlHeaders;
      Object.keys(signingUrlHeaders).forEach(function (key) {
        var val = signingUrlHeaders[key];
        xhr.setRequestHeader(key, val);
      });
    })();
  }
  xhr.overrideMimeType && xhr.overrideMimeType('text/plain; charset=x-user-defined');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = void 0;
      try {
        result = JSON.parse(xhr.responseText);
      } catch (error) {
        this.onError('Invalid response from server', file);
        return false;
      }
      return callback(result);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      return this.onError('Could not contact request signing server. Status = ' + xhr.status, file);
    }
  }.bind(this);
  return xhr.send();
};

S3Upload.prototype.uploadToS3 = function (file, signResult) {
  var _this2 = this;

  var xhr = this.createCORSRequest('PUT', signResult.signedUrl);
  if (!xhr) {
    this.onError('CORS not supported', file);
  } else {
    xhr.onload = function () {
      if (xhr.status === 200) {
        this.onProgress(100, 'Upload completed', file);
        return this.onFinishS3Put(signResult, file);
      } else {
        return this.onError('Upload error: ' + xhr.status, file);
      }
    }.bind(this);
    xhr.onerror = function () {
      return this.onError('XHR error', file);
    }.bind(this);
    xhr.upload.onprogress = function (e) {
      var percentLoaded = void 0;
      if (e.lengthComputable) {
        percentLoaded = Math.round(e.loaded / e.total * 100);
        return this.onProgress(percentLoaded, percentLoaded === 100 ? 'Finalizing' : 'Uploading', file);
      }
    }.bind(this);
  }
  xhr.setRequestHeader('Content-Type', file.type);
  if (this.contentDisposition) {
    var disposition = this.contentDisposition;
    if (disposition === 'auto') {
      if (file.type.substr(0, 6) === 'image/') {
        disposition = 'inline';
      } else {
        disposition = 'attachment';
      }
    }
    var normalizedFileName = file.name.replace(/[!\^`><{}\[\]()*#%'"~|&@:;$=+?\s\\\/\x00-\x1F\x7f]+/ig, '_').normalize('NFC');

    var fileName = (0, _latinize2.default)(normalizedFileName);
    xhr.setRequestHeader('Content-Disposition', disposition + '; filename=' + fileName);
  }
  if (this.uploadRequestHeaders) {
    (function () {
      var uploadRequestHeaders = _this2.uploadRequestHeaders;
      Object.keys(uploadRequestHeaders).forEach(function (key) {
        var val = uploadRequestHeaders[key];
        xhr.setRequestHeader(key, val);
      });
    })();
  } else {
    xhr.setRequestHeader('x-amz-acl', 'public-read');
  }
  this.httprequest = xhr;
  return xhr.send(file);
};

S3Upload.prototype.uploadFile = function (file) {
  var uploadToS3Callback = this.uploadToS3.bind(this, file);

  if (this.getSignedUrl) return this.getSignedUrl(file, uploadToS3Callback);
  return this.executeOnSignedUrl(file, uploadToS3Callback);
};

S3Upload.prototype.abortUpload = function () {
  this.httprequest && this.httprequest.abort();
};

exports.default = S3Upload;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

if (true) {
  module.exports = __webpack_require__(97).default; // eslint-disable-line global-require
} else {
  module.exports = require('./createStore.dev').default; // eslint-disable-line global-require
}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _redux = __webpack_require__(42);

var _reactRouterRedux = __webpack_require__(12);

var _reduxThunk = __webpack_require__(256);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _helpers = __webpack_require__(99);

var _reducers = __webpack_require__(98);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * createStore
 *
 * @param {Object} data     Initial state for store
 * @param {Object} history  the browser history
 * @param {Object} client   The client api middleware
 * @return {Object} Returns store with state
 */
function createStore(history, client, data) {
  // Sync dispatched route actions to the history
  var reduxRouterMiddleware = (0, _reactRouterRedux.routerMiddleware)(history);
  var middleware = [_reduxThunk2.default, reduxRouterMiddleware];

  var finalCreateStore = _redux.applyMiddleware.apply(undefined, middleware)(_redux.createStore);

  var store = finalCreateStore(_reducers2.default, data);

  return store;
}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(42);

var _reactRouterRedux = __webpack_require__(12);

var _reduxForm = __webpack_require__(14);

var _post = __webpack_require__(18);

var _post2 = _interopRequireDefault(_post);

var _siteUsers = __webpack_require__(38);

var _siteUsers2 = _interopRequireDefault(_siteUsers);

var _media = __webpack_require__(52);

var _media2 = _interopRequireDefault(_media);

var _account = __webpack_require__(17);

var _account2 = _interopRequireDefault(_account);

var _auth = __webpack_require__(28);

var _auth2 = _interopRequireDefault(_auth);

var _boldr = __webpack_require__(29);

var _boldr2 = _interopRequireDefault(_boldr);

var _notifications = __webpack_require__(19);

var _notifications2 = _interopRequireDefault(_notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  notifications: _notifications2.default,
  auth: _auth2.default,
  boldr: _boldr2.default,
  posts: _post2.default,
  siteUsers: _siteUsers2.default,
  media: _media2.default,
  users: _account2.default,
  form: _reduxForm.reducer
});

exports.default = reducers;

/***/ },
/* 99 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncateMiddleString = truncateMiddleString;
exports.truncString = truncString;
exports.fireEvent = fireEvent;
exports.executionEnvironment = executionEnvironment;
exports.getWindowHeight = getWindowHeight;
exports.getWindowWidth = getWindowWidth;
exports.getDeviceType = getDeviceType;
exports.getScrollTop = getScrollTop;
exports.getScreenHeight = getScreenHeight;
exports.isEmpty = isEmpty;
var isServer = exports.isServer = typeof window === 'undefined';
function truncateMiddleString(str, length, separator) {
  if (!str) {
    return str;
  }
  if (str && str.length <= length) return str;
  separator = separator || '...';

  var sepLen = separator.length;
  var charsToShow = length - sepLen;
  var frontChars = Math.ceil(charsToShow / 2);
  var backChars = Math.floor(charsToShow / 2);

  return str.substr(0, frontChars) + separator + str.substr(str.length - backChars);
}

function truncString(str, length, separator) {
  separator = separator || '...';
  return typeof str === 'string' && str.length > length ? str.substring(0, length) + separator : str;
}

function fireEvent(node, eventName) {
  var doc = {};
  if (node.ownerDocument) {
    doc = node.ownerDocument;
  } else if (node.nodeType === 9) {
    doc = node;
  }
  if (node.dispatchEvent) {
    var eventClass = '';
    switch (eventName) {
      case 'click':
      case 'mousedown':
      case 'mouseup':
        eventClass = 'MouseEvents';
        break;
      case 'focus':
      case 'change':
      case 'blur':
      case 'select':
        eventClass = 'HTMLEvents';
        break;
      default:
        break;
    }
    var event = doc.createEvent(eventClass);
    event.initEvent(eventName, true, true); // All events created as bubbling and cancelable.

    event.synthetic = true; // allow detection of synthetic events
    // The second parameter says go ahead with the default action
    node.dispatchEvent(event, true);
  } else if (node.fireEvent) {
    // IE-old school style
    var _event = doc.createEventObject();
    _event.synthetic = true; // allow detection of synthetic events
    node.fireEvent('on' + eventName, _event);
  }
}

function executionEnvironment() {
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  return {
    canUseDOM: canUseDOM,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen
  };
}

function getWindowHeight() {
  if (!executionEnvironment().canUseDOM) {
    return 0;
  }
  var w = window;
  var d = document;
  var e = d.documentElement;
  var g = d.getElementsByTagName('body')[0];
  return w.innerHeight || e.clientHeight || g.clientHeight;
}

function getWindowWidth() {
  if (!executionEnvironment().canUseDOM) {
    return 0;
  }
  var w = window;
  var d = document;
  var e = d.documentElement;
  var g = d.getElementsByTagName('body')[0];
  return w.innerWidth || e.clientWidth || g.clientWidth;
}

function getDeviceType() {
  if (!executionEnvironment().canUseDOM) {
    return 0;
  }
  var w = window || null;
  var d = document;
  var e = d.documentElement;
  var g = d.getElementsByTagName('body')[0];
  var witdh = w.innerWidth || e.clientWidth || g.clientWidth;
  if (witdh < 768) {
    return 'mobile';
  }
  if (witdh >= 768 && w < 992) {
    return 'tablet';
  }
  return 'desktop';
}

function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function getScreenHeight() {
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
}

function isEmpty(obj) {
  if (obj === null) return true;
  if (obj && obj.length > 0) return false;
  if (obj && obj.length === 0) return true;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

// export const token = localStorage.getItem('token');

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

var _typeof2 = __webpack_require__(57);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
/*
  Latinize
  https://github.com/dundalek/latinize
  Is is a lookup table taken from http://jsperf.com/latinize packaged
  for node and browser. Visit the link to see more approaches.
 */
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : (0, _typeof3.default)(exports)) === 'object') {
        // CommonJS
        module.exports = factory();
    } else {
        // running in browser
        root.latinize = factory();
    }
})(undefined, function () {

    function latinize(str) {
        return str.replace(/[^A-Za-z0-9]/g, function (x) {
            return latinize.characters[x] || x;
        });
    }

    latinize.characters = {
        'Á': 'A',
        'Ă': 'A',
        'Ắ': 'A',
        'Ặ': 'A',
        'Ằ': 'A',
        'Ẳ': 'A',
        'Ẵ': 'A',
        'Ǎ': 'A',
        'Â': 'A',
        'Ấ': 'A',
        'Ậ': 'A',
        'Ầ': 'A',
        'Ẩ': 'A',
        'Ẫ': 'A',
        'Ä': 'A',
        'Ǟ': 'A',
        'Ȧ': 'A',
        'Ǡ': 'A',
        'Ạ': 'A',
        'Ȁ': 'A',
        'À': 'A',
        'Ả': 'A',
        'Ȃ': 'A',
        'Ā': 'A',
        'Ą': 'A',
        'Å': 'A',
        'Ǻ': 'A',
        'Ḁ': 'A',
        'Ⱥ': 'A',
        'Ã': 'A',
        'Ꜳ': 'AA',
        'Æ': 'AE',
        'Ǽ': 'AE',
        'Ǣ': 'AE',
        'Ꜵ': 'AO',
        'Ꜷ': 'AU',
        'Ꜹ': 'AV',
        'Ꜻ': 'AV',
        'Ꜽ': 'AY',
        'Ḃ': 'B',
        'Ḅ': 'B',
        'Ɓ': 'B',
        'Ḇ': 'B',
        'Ƀ': 'B',
        'Ƃ': 'B',
        'Ć': 'C',
        'Č': 'C',
        'Ç': 'C',
        'Ḉ': 'C',
        'Ĉ': 'C',
        'Ċ': 'C',
        'Ƈ': 'C',
        'Ȼ': 'C',
        'Ď': 'D',
        'Ḑ': 'D',
        'Ḓ': 'D',
        'Ḋ': 'D',
        'Ḍ': 'D',
        'Ɗ': 'D',
        'Ḏ': 'D',
        'ǲ': 'D',
        'ǅ': 'D',
        'Đ': 'D',
        'Ƌ': 'D',
        'Ǳ': 'DZ',
        'Ǆ': 'DZ',
        'É': 'E',
        'Ĕ': 'E',
        'Ě': 'E',
        'Ȩ': 'E',
        'Ḝ': 'E',
        'Ê': 'E',
        'Ế': 'E',
        'Ệ': 'E',
        'Ề': 'E',
        'Ể': 'E',
        'Ễ': 'E',
        'Ḙ': 'E',
        'Ë': 'E',
        'Ė': 'E',
        'Ẹ': 'E',
        'Ȅ': 'E',
        'È': 'E',
        'Ẻ': 'E',
        'Ȇ': 'E',
        'Ē': 'E',
        'Ḗ': 'E',
        'Ḕ': 'E',
        'Ę': 'E',
        'Ɇ': 'E',
        'Ẽ': 'E',
        'Ḛ': 'E',
        'Ꝫ': 'ET',
        'Ḟ': 'F',
        'Ƒ': 'F',
        'Ǵ': 'G',
        'Ğ': 'G',
        'Ǧ': 'G',
        'Ģ': 'G',
        'Ĝ': 'G',
        'Ġ': 'G',
        'Ɠ': 'G',
        'Ḡ': 'G',
        'Ǥ': 'G',
        'Ḫ': 'H',
        'Ȟ': 'H',
        'Ḩ': 'H',
        'Ĥ': 'H',
        'Ⱨ': 'H',
        'Ḧ': 'H',
        'Ḣ': 'H',
        'Ḥ': 'H',
        'Ħ': 'H',
        'Í': 'I',
        'Ĭ': 'I',
        'Ǐ': 'I',
        'Î': 'I',
        'Ï': 'I',
        'Ḯ': 'I',
        'İ': 'I',
        'Ị': 'I',
        'Ȉ': 'I',
        'Ì': 'I',
        'Ỉ': 'I',
        'Ȋ': 'I',
        'Ī': 'I',
        'Į': 'I',
        'Ɨ': 'I',
        'Ĩ': 'I',
        'Ḭ': 'I',
        'Ꝺ': 'D',
        'Ꝼ': 'F',
        'Ᵹ': 'G',
        'Ꞃ': 'R',
        'Ꞅ': 'S',
        'Ꞇ': 'T',
        'Ꝭ': 'IS',
        'Ĵ': 'J',
        'Ɉ': 'J',
        'Ḱ': 'K',
        'Ǩ': 'K',
        'Ķ': 'K',
        'Ⱪ': 'K',
        'Ꝃ': 'K',
        'Ḳ': 'K',
        'Ƙ': 'K',
        'Ḵ': 'K',
        'Ꝁ': 'K',
        'Ꝅ': 'K',
        'Ĺ': 'L',
        'Ƚ': 'L',
        'Ľ': 'L',
        'Ļ': 'L',
        'Ḽ': 'L',
        'Ḷ': 'L',
        'Ḹ': 'L',
        'Ⱡ': 'L',
        'Ꝉ': 'L',
        'Ḻ': 'L',
        'Ŀ': 'L',
        'Ɫ': 'L',
        'ǈ': 'L',
        'Ł': 'L',
        'Ǉ': 'LJ',
        'Ḿ': 'M',
        'Ṁ': 'M',
        'Ṃ': 'M',
        'Ɱ': 'M',
        'Ń': 'N',
        'Ň': 'N',
        'Ņ': 'N',
        'Ṋ': 'N',
        'Ṅ': 'N',
        'Ṇ': 'N',
        'Ǹ': 'N',
        'Ɲ': 'N',
        'Ṉ': 'N',
        'Ƞ': 'N',
        'ǋ': 'N',
        'Ñ': 'N',
        'Ǌ': 'NJ',
        'Ó': 'O',
        'Ŏ': 'O',
        'Ǒ': 'O',
        'Ô': 'O',
        'Ố': 'O',
        'Ộ': 'O',
        'Ồ': 'O',
        'Ổ': 'O',
        'Ỗ': 'O',
        'Ö': 'O',
        'Ȫ': 'O',
        'Ȯ': 'O',
        'Ȱ': 'O',
        'Ọ': 'O',
        'Ő': 'O',
        'Ȍ': 'O',
        'Ò': 'O',
        'Ỏ': 'O',
        'Ơ': 'O',
        'Ớ': 'O',
        'Ợ': 'O',
        'Ờ': 'O',
        'Ở': 'O',
        'Ỡ': 'O',
        'Ȏ': 'O',
        'Ꝋ': 'O',
        'Ꝍ': 'O',
        'Ō': 'O',
        'Ṓ': 'O',
        'Ṑ': 'O',
        'Ɵ': 'O',
        'Ǫ': 'O',
        'Ǭ': 'O',
        'Ø': 'O',
        'Ǿ': 'O',
        'Õ': 'O',
        'Ṍ': 'O',
        'Ṏ': 'O',
        'Ȭ': 'O',
        'Ƣ': 'OI',
        'Ꝏ': 'OO',
        'Ɛ': 'E',
        'Ɔ': 'O',
        'Ȣ': 'OU',
        'Ṕ': 'P',
        'Ṗ': 'P',
        'Ꝓ': 'P',
        'Ƥ': 'P',
        'Ꝕ': 'P',
        'Ᵽ': 'P',
        'Ꝑ': 'P',
        'Ꝙ': 'Q',
        'Ꝗ': 'Q',
        'Ŕ': 'R',
        'Ř': 'R',
        'Ŗ': 'R',
        'Ṙ': 'R',
        'Ṛ': 'R',
        'Ṝ': 'R',
        'Ȑ': 'R',
        'Ȓ': 'R',
        'Ṟ': 'R',
        'Ɍ': 'R',
        'Ɽ': 'R',
        'Ꜿ': 'C',
        'Ǝ': 'E',
        'Ś': 'S',
        'Ṥ': 'S',
        'Š': 'S',
        'Ṧ': 'S',
        'Ş': 'S',
        'Ŝ': 'S',
        'Ș': 'S',
        'Ṡ': 'S',
        'Ṣ': 'S',
        'Ṩ': 'S',
        'ß': 'ss',
        'Ť': 'T',
        'Ţ': 'T',
        'Ṱ': 'T',
        'Ț': 'T',
        'Ⱦ': 'T',
        'Ṫ': 'T',
        'Ṭ': 'T',
        'Ƭ': 'T',
        'Ṯ': 'T',
        'Ʈ': 'T',
        'Ŧ': 'T',
        'Ɐ': 'A',
        'Ꞁ': 'L',
        'Ɯ': 'M',
        'Ʌ': 'V',
        'Ꜩ': 'TZ',
        'Ú': 'U',
        'Ŭ': 'U',
        'Ǔ': 'U',
        'Û': 'U',
        'Ṷ': 'U',
        'Ü': 'U',
        'Ǘ': 'U',
        'Ǚ': 'U',
        'Ǜ': 'U',
        'Ǖ': 'U',
        'Ṳ': 'U',
        'Ụ': 'U',
        'Ű': 'U',
        'Ȕ': 'U',
        'Ù': 'U',
        'Ủ': 'U',
        'Ư': 'U',
        'Ứ': 'U',
        'Ự': 'U',
        'Ừ': 'U',
        'Ử': 'U',
        'Ữ': 'U',
        'Ȗ': 'U',
        'Ū': 'U',
        'Ṻ': 'U',
        'Ų': 'U',
        'Ů': 'U',
        'Ũ': 'U',
        'Ṹ': 'U',
        'Ṵ': 'U',
        'Ꝟ': 'V',
        'Ṿ': 'V',
        'Ʋ': 'V',
        'Ṽ': 'V',
        'Ꝡ': 'VY',
        'Ẃ': 'W',
        'Ŵ': 'W',
        'Ẅ': 'W',
        'Ẇ': 'W',
        'Ẉ': 'W',
        'Ẁ': 'W',
        'Ⱳ': 'W',
        'Ẍ': 'X',
        'Ẋ': 'X',
        'Ý': 'Y',
        'Ŷ': 'Y',
        'Ÿ': 'Y',
        'Ẏ': 'Y',
        'Ỵ': 'Y',
        'Ỳ': 'Y',
        'Ƴ': 'Y',
        'Ỷ': 'Y',
        'Ỿ': 'Y',
        'Ȳ': 'Y',
        'Ɏ': 'Y',
        'Ỹ': 'Y',
        'Ź': 'Z',
        'Ž': 'Z',
        'Ẑ': 'Z',
        'Ⱬ': 'Z',
        'Ż': 'Z',
        'Ẓ': 'Z',
        'Ȥ': 'Z',
        'Ẕ': 'Z',
        'Ƶ': 'Z',
        'Ĳ': 'IJ',
        'Œ': 'OE',
        'ᴀ': 'A',
        'ᴁ': 'AE',
        'ʙ': 'B',
        'ᴃ': 'B',
        'ᴄ': 'C',
        'ᴅ': 'D',
        'ᴇ': 'E',
        'ꜰ': 'F',
        'ɢ': 'G',
        'ʛ': 'G',
        'ʜ': 'H',
        'ɪ': 'I',
        'ʁ': 'R',
        'ᴊ': 'J',
        'ᴋ': 'K',
        'ʟ': 'L',
        'ᴌ': 'L',
        'ᴍ': 'M',
        'ɴ': 'N',
        'ᴏ': 'O',
        'ɶ': 'OE',
        'ᴐ': 'O',
        'ᴕ': 'OU',
        'ᴘ': 'P',
        'ʀ': 'R',
        'ᴎ': 'N',
        'ᴙ': 'R',
        'ꜱ': 'S',
        'ᴛ': 'T',
        'ⱻ': 'E',
        'ᴚ': 'R',
        'ᴜ': 'U',
        'ᴠ': 'V',
        'ᴡ': 'W',
        'ʏ': 'Y',
        'ᴢ': 'Z',
        'á': 'a',
        'ă': 'a',
        'ắ': 'a',
        'ặ': 'a',
        'ằ': 'a',
        'ẳ': 'a',
        'ẵ': 'a',
        'ǎ': 'a',
        'â': 'a',
        'ấ': 'a',
        'ậ': 'a',
        'ầ': 'a',
        'ẩ': 'a',
        'ẫ': 'a',
        'ä': 'a',
        'ǟ': 'a',
        'ȧ': 'a',
        'ǡ': 'a',
        'ạ': 'a',
        'ȁ': 'a',
        'à': 'a',
        'ả': 'a',
        'ȃ': 'a',
        'ā': 'a',
        'ą': 'a',
        'ᶏ': 'a',
        'ẚ': 'a',
        'å': 'a',
        'ǻ': 'a',
        'ḁ': 'a',
        'ⱥ': 'a',
        'ã': 'a',
        'ꜳ': 'aa',
        'æ': 'ae',
        'ǽ': 'ae',
        'ǣ': 'ae',
        'ꜵ': 'ao',
        'ꜷ': 'au',
        'ꜹ': 'av',
        'ꜻ': 'av',
        'ꜽ': 'ay',
        'ḃ': 'b',
        'ḅ': 'b',
        'ɓ': 'b',
        'ḇ': 'b',
        'ᵬ': 'b',
        'ᶀ': 'b',
        'ƀ': 'b',
        'ƃ': 'b',
        'ɵ': 'o',
        'ć': 'c',
        'č': 'c',
        'ç': 'c',
        'ḉ': 'c',
        'ĉ': 'c',
        'ɕ': 'c',
        'ċ': 'c',
        'ƈ': 'c',
        'ȼ': 'c',
        'ď': 'd',
        'ḑ': 'd',
        'ḓ': 'd',
        'ȡ': 'd',
        'ḋ': 'd',
        'ḍ': 'd',
        'ɗ': 'd',
        'ᶑ': 'd',
        'ḏ': 'd',
        'ᵭ': 'd',
        'ᶁ': 'd',
        'đ': 'd',
        'ɖ': 'd',
        'ƌ': 'd',
        'ı': 'i',
        'ȷ': 'j',
        'ɟ': 'j',
        'ʄ': 'j',
        'ǳ': 'dz',
        'ǆ': 'dz',
        'é': 'e',
        'ĕ': 'e',
        'ě': 'e',
        'ȩ': 'e',
        'ḝ': 'e',
        'ê': 'e',
        'ế': 'e',
        'ệ': 'e',
        'ề': 'e',
        'ể': 'e',
        'ễ': 'e',
        'ḙ': 'e',
        'ë': 'e',
        'ė': 'e',
        'ẹ': 'e',
        'ȅ': 'e',
        'è': 'e',
        'ẻ': 'e',
        'ȇ': 'e',
        'ē': 'e',
        'ḗ': 'e',
        'ḕ': 'e',
        'ⱸ': 'e',
        'ę': 'e',
        'ᶒ': 'e',
        'ɇ': 'e',
        'ẽ': 'e',
        'ḛ': 'e',
        'ꝫ': 'et',
        'ḟ': 'f',
        'ƒ': 'f',
        'ᵮ': 'f',
        'ᶂ': 'f',
        'ǵ': 'g',
        'ğ': 'g',
        'ǧ': 'g',
        'ģ': 'g',
        'ĝ': 'g',
        'ġ': 'g',
        'ɠ': 'g',
        'ḡ': 'g',
        'ᶃ': 'g',
        'ǥ': 'g',
        'ḫ': 'h',
        'ȟ': 'h',
        'ḩ': 'h',
        'ĥ': 'h',
        'ⱨ': 'h',
        'ḧ': 'h',
        'ḣ': 'h',
        'ḥ': 'h',
        'ɦ': 'h',
        'ẖ': 'h',
        'ħ': 'h',
        'ƕ': 'hv',
        'í': 'i',
        'ĭ': 'i',
        'ǐ': 'i',
        'î': 'i',
        'ï': 'i',
        'ḯ': 'i',
        'ị': 'i',
        'ȉ': 'i',
        'ì': 'i',
        'ỉ': 'i',
        'ȋ': 'i',
        'ī': 'i',
        'į': 'i',
        'ᶖ': 'i',
        'ɨ': 'i',
        'ĩ': 'i',
        'ḭ': 'i',
        'ꝺ': 'd',
        'ꝼ': 'f',
        'ᵹ': 'g',
        'ꞃ': 'r',
        'ꞅ': 's',
        'ꞇ': 't',
        'ꝭ': 'is',
        'ǰ': 'j',
        'ĵ': 'j',
        'ʝ': 'j',
        'ɉ': 'j',
        'ḱ': 'k',
        'ǩ': 'k',
        'ķ': 'k',
        'ⱪ': 'k',
        'ꝃ': 'k',
        'ḳ': 'k',
        'ƙ': 'k',
        'ḵ': 'k',
        'ᶄ': 'k',
        'ꝁ': 'k',
        'ꝅ': 'k',
        'ĺ': 'l',
        'ƚ': 'l',
        'ɬ': 'l',
        'ľ': 'l',
        'ļ': 'l',
        'ḽ': 'l',
        'ȴ': 'l',
        'ḷ': 'l',
        'ḹ': 'l',
        'ⱡ': 'l',
        'ꝉ': 'l',
        'ḻ': 'l',
        'ŀ': 'l',
        'ɫ': 'l',
        'ᶅ': 'l',
        'ɭ': 'l',
        'ł': 'l',
        'ǉ': 'lj',
        'ſ': 's',
        'ẜ': 's',
        'ẛ': 's',
        'ẝ': 's',
        'ḿ': 'm',
        'ṁ': 'm',
        'ṃ': 'm',
        'ɱ': 'm',
        'ᵯ': 'm',
        'ᶆ': 'm',
        'ń': 'n',
        'ň': 'n',
        'ņ': 'n',
        'ṋ': 'n',
        'ȵ': 'n',
        'ṅ': 'n',
        'ṇ': 'n',
        'ǹ': 'n',
        'ɲ': 'n',
        'ṉ': 'n',
        'ƞ': 'n',
        'ᵰ': 'n',
        'ᶇ': 'n',
        'ɳ': 'n',
        'ñ': 'n',
        'ǌ': 'nj',
        'ó': 'o',
        'ŏ': 'o',
        'ǒ': 'o',
        'ô': 'o',
        'ố': 'o',
        'ộ': 'o',
        'ồ': 'o',
        'ổ': 'o',
        'ỗ': 'o',
        'ö': 'o',
        'ȫ': 'o',
        'ȯ': 'o',
        'ȱ': 'o',
        'ọ': 'o',
        'ő': 'o',
        'ȍ': 'o',
        'ò': 'o',
        'ỏ': 'o',
        'ơ': 'o',
        'ớ': 'o',
        'ợ': 'o',
        'ờ': 'o',
        'ở': 'o',
        'ỡ': 'o',
        'ȏ': 'o',
        'ꝋ': 'o',
        'ꝍ': 'o',
        'ⱺ': 'o',
        'ō': 'o',
        'ṓ': 'o',
        'ṑ': 'o',
        'ǫ': 'o',
        'ǭ': 'o',
        'ø': 'o',
        'ǿ': 'o',
        'õ': 'o',
        'ṍ': 'o',
        'ṏ': 'o',
        'ȭ': 'o',
        'ƣ': 'oi',
        'ꝏ': 'oo',
        'ɛ': 'e',
        'ᶓ': 'e',
        'ɔ': 'o',
        'ᶗ': 'o',
        'ȣ': 'ou',
        'ṕ': 'p',
        'ṗ': 'p',
        'ꝓ': 'p',
        'ƥ': 'p',
        'ᵱ': 'p',
        'ᶈ': 'p',
        'ꝕ': 'p',
        'ᵽ': 'p',
        'ꝑ': 'p',
        'ꝙ': 'q',
        'ʠ': 'q',
        'ɋ': 'q',
        'ꝗ': 'q',
        'ŕ': 'r',
        'ř': 'r',
        'ŗ': 'r',
        'ṙ': 'r',
        'ṛ': 'r',
        'ṝ': 'r',
        'ȑ': 'r',
        'ɾ': 'r',
        'ᵳ': 'r',
        'ȓ': 'r',
        'ṟ': 'r',
        'ɼ': 'r',
        'ᵲ': 'r',
        'ᶉ': 'r',
        'ɍ': 'r',
        'ɽ': 'r',
        'ↄ': 'c',
        'ꜿ': 'c',
        'ɘ': 'e',
        'ɿ': 'r',
        'ś': 's',
        'ṥ': 's',
        'š': 's',
        'ṧ': 's',
        'ş': 's',
        'ŝ': 's',
        'ș': 's',
        'ṡ': 's',
        'ṣ': 's',
        'ṩ': 's',
        'ʂ': 's',
        'ᵴ': 's',
        'ᶊ': 's',
        'ȿ': 's',
        'ɡ': 'g',
        'ᴑ': 'o',
        'ᴓ': 'o',
        'ᴝ': 'u',
        'ť': 't',
        'ţ': 't',
        'ṱ': 't',
        'ț': 't',
        'ȶ': 't',
        'ẗ': 't',
        'ⱦ': 't',
        'ṫ': 't',
        'ṭ': 't',
        'ƭ': 't',
        'ṯ': 't',
        'ᵵ': 't',
        'ƫ': 't',
        'ʈ': 't',
        'ŧ': 't',
        'ᵺ': 'th',
        'ɐ': 'a',
        'ᴂ': 'ae',
        'ǝ': 'e',
        'ᵷ': 'g',
        'ɥ': 'h',
        'ʮ': 'h',
        'ʯ': 'h',
        'ᴉ': 'i',
        'ʞ': 'k',
        'ꞁ': 'l',
        'ɯ': 'm',
        'ɰ': 'm',
        'ᴔ': 'oe',
        'ɹ': 'r',
        'ɻ': 'r',
        'ɺ': 'r',
        'ⱹ': 'r',
        'ʇ': 't',
        'ʌ': 'v',
        'ʍ': 'w',
        'ʎ': 'y',
        'ꜩ': 'tz',
        'ú': 'u',
        'ŭ': 'u',
        'ǔ': 'u',
        'û': 'u',
        'ṷ': 'u',
        'ü': 'u',
        'ǘ': 'u',
        'ǚ': 'u',
        'ǜ': 'u',
        'ǖ': 'u',
        'ṳ': 'u',
        'ụ': 'u',
        'ű': 'u',
        'ȕ': 'u',
        'ù': 'u',
        'ủ': 'u',
        'ư': 'u',
        'ứ': 'u',
        'ự': 'u',
        'ừ': 'u',
        'ử': 'u',
        'ữ': 'u',
        'ȗ': 'u',
        'ū': 'u',
        'ṻ': 'u',
        'ų': 'u',
        'ᶙ': 'u',
        'ů': 'u',
        'ũ': 'u',
        'ṹ': 'u',
        'ṵ': 'u',
        'ᵫ': 'ue',
        'ꝸ': 'um',
        'ⱴ': 'v',
        'ꝟ': 'v',
        'ṿ': 'v',
        'ʋ': 'v',
        'ᶌ': 'v',
        'ⱱ': 'v',
        'ṽ': 'v',
        'ꝡ': 'vy',
        'ẃ': 'w',
        'ŵ': 'w',
        'ẅ': 'w',
        'ẇ': 'w',
        'ẉ': 'w',
        'ẁ': 'w',
        'ⱳ': 'w',
        'ẘ': 'w',
        'ẍ': 'x',
        'ẋ': 'x',
        'ᶍ': 'x',
        'ý': 'y',
        'ŷ': 'y',
        'ÿ': 'y',
        'ẏ': 'y',
        'ỵ': 'y',
        'ỳ': 'y',
        'ƴ': 'y',
        'ỷ': 'y',
        'ỿ': 'y',
        'ȳ': 'y',
        'ẙ': 'y',
        'ɏ': 'y',
        'ỹ': 'y',
        'ź': 'z',
        'ž': 'z',
        'ẑ': 'z',
        'ʑ': 'z',
        'ⱬ': 'z',
        'ż': 'z',
        'ẓ': 'z',
        'ȥ': 'z',
        'ẕ': 'z',
        'ᵶ': 'z',
        'ᶎ': 'z',
        'ʐ': 'z',
        'ƶ': 'z',
        'ɀ': 'z',
        'ﬀ': 'ff',
        'ﬃ': 'ffi',
        'ﬄ': 'ffl',
        'ﬁ': 'fi',
        'ﬂ': 'fl',
        'ĳ': 'ij',
        'œ': 'oe',
        'ﬆ': 'st',
        'ₐ': 'a',
        'ₑ': 'e',
        'ᵢ': 'i',
        'ⱼ': 'j',
        'ₒ': 'o',
        'ᵣ': 'r',
        'ᵤ': 'u',
        'ᵥ': 'v',
        'ₓ': 'x'
    };

    return latinize;
});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)("h1", {}, void 0, "About Boldr"), (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)("p", {}, void 0, "A bold cms for you?")), (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)("p", {}, void 0, "Want to contribute? Help us out! If you think the code on  ", (0, _jsx3.default)("a", {
  target: "_blank",
  href: "https://github.com/strues/boldr"
}, void 0, "this repo"), " could be improved, please create an issue ", (0, _jsx3.default)("a", {
  target: "_blank",
  href: "https://github.com/strues/boldr/issues"
}, void 0, "here"), "!")));

var About = function About() {
  return _ref;
};

exports.default = About;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _About = __webpack_require__(101);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _About2.default;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)("path", {
  id: "Blue_1_",
  fill: "#3C5A99",
  d: "M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812\n    \tc0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225\n    \tH248.082z"
});

var _ref2 = (0, _jsx3.default)("path", {
  id: "f",
  fill: "#FFFFFF",
  d: "M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935\n    \tl20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585\n    \tv99.803H182.409z"
});

var Facebook = function Facebook(props) {
  return (0, _jsx3.default)("svg", {
    width: props.width + "px",
    height: props.height + "px",
    viewBox: "0 0 266.893 266.895",
    enableBackground: "new 0 0 266.893 266.895"
  }, void 0, _ref, _ref2);
};
exports.default = Facebook;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)("g", {}, void 0, (0, _jsx3.default)("path", {
  fill: "#DC4A38",
  d: "M126.515,4.109H8.144c-2.177,0-3.94,1.763-3.94,3.938v115.546c0,2.179,1.763,3.942,3.94,3.942h118.371\n    \t\tc2.177,0,3.94-1.764,3.94-3.942V8.048C130.455,5.872,128.691,4.109,126.515,4.109z"
}), (0, _jsx3.default)("g", {}, void 0, (0, _jsx3.default)("path", {
  fill: "#FFFFFF",
  d: "M70.479,71.845l-3.983-3.093c-1.213-1.006-2.872-2.334-2.872-4.765c0-2.441,1.659-3.993,3.099-5.43\n    \t\t\tc4.64-3.652,9.276-7.539,9.276-15.73c0-8.423-5.3-12.854-7.84-14.956h6.849l7.189-4.517H60.418\n    \t\t\tc-5.976,0-14.588,1.414-20.893,6.619c-4.752,4.1-7.07,9.753-7.07,14.842c0,8.639,6.633,17.396,18.346,17.396\n    \t\t\tc1.106,0,2.316-0.109,3.534-0.222c-0.547,1.331-1.1,2.439-1.1,4.32c0,3.431,1.763,5.535,3.317,7.528\n    \t\t\tc-4.977,0.342-14.268,0.893-21.117,5.103c-6.523,3.879-8.508,9.525-8.508,13.51c0,8.202,7.731,15.842,23.762,15.842\n    \t\t\tc19.01,0,29.074-10.519,29.074-20.932C79.764,79.709,75.344,75.943,70.479,71.845z M56,59.107\n    \t\t\tc-9.51,0-13.818-12.294-13.818-19.712c0-2.888,0.547-5.87,2.428-8.199c1.773-2.218,4.861-3.657,7.744-3.657\n    \t\t\tc9.168,0,13.923,12.404,13.923,20.382c0,1.996-0.22,5.533-2.762,8.09C61.737,57.785,58.762,59.107,56,59.107z M56.109,103.65\n    \t\t\tc-11.826,0-19.452-5.657-19.452-13.523c0-7.864,7.071-10.524,9.504-11.405c4.64-1.561,10.611-1.779,11.607-1.779\n    \t\t\tc1.105,0,1.658,0,2.538,0.111c8.407,5.983,12.056,8.965,12.056,14.629C72.362,98.542,66.723,103.65,56.109,103.65z"
}), (0, _jsx3.default)("polygon", {
  fill: "#FFFFFF",
  points: "98.393,58.938 98.393,47.863 92.923,47.863 92.923,58.938 81.866,58.938 81.866,64.469\n    \t\t\t92.923,64.469 92.923,75.612 98.393,75.612 98.393,64.469 109.506,64.469 109.506,58.938 \t\t"
})));

var Google = function Google(props) {
  return (0, _jsx3.default)("svg", {
    width: props.width + "px",
    height: props.height + "px",
    viewBox: "0 0 134.658 131.646",
    enableBackground: "new 0 0 134.658 131.646"
  }, void 0, _ref);
};
exports.default = Google;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _styles = __webpack_require__(201);

var _styles2 = _interopRequireDefault(_styles);

var _FacebookIcon = __webpack_require__(103);

var _FacebookIcon2 = _interopRequireDefault(_FacebookIcon);

var _GoogleIcon = __webpack_require__(104);

var _GoogleIcon2 = _interopRequireDefault(_GoogleIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_styles2.default);

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('a', {
  href: '/api/v1/auth/facebook'
}, void 0, (0, _jsx3.default)(_FacebookIcon2.default, {
  height: 50,
  width: 50
})), (0, _jsx3.default)('a', {
  href: '/api/v1/auth/google'
}, void 0, (0, _jsx3.default)(_GoogleIcon2.default, {
  height: 50,
  width: 50
})));

var SocialLogin = function SocialLogin() {
  return _ref;
};

exports.default = SocialLogin;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SocialLogin = __webpack_require__(105);

var _SocialLogin2 = _interopRequireDefault(_SocialLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SocialLogin2.default;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(14);

var _Card = __webpack_require__(11);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = __webpack_require__(31);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TextField = __webpack_require__(35);

var _TextField2 = _interopRequireDefault(_TextField);

var _inlineStyles = __webpack_require__(10);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_RaisedButton2.default, {
  secondary: true,
  type: 'submit',
  label: 'Login'
});

var LoginForm = function LoginForm(props) {
  var handleSubmit = props.handleSubmit;
  var pristine = props.pristine;
  var reset = props.reset;
  var submitting = props.submitting;

  return (0, _jsx3.default)('form', {
    onSubmit: handleSubmit
  }, void 0, (0, _jsx3.default)(_Card.CardText, {}, void 0, (0, _jsx3.default)('div', {
    className: 'grid__row'
  }, void 0, (0, _jsx3.default)(_reduxForm.Field, {
    name: 'email',
    type: 'email',
    component: _TextField2.default,
    floatingLabelText: 'Email address',
    fullWidth: true,
    underlineFocusStyle: _inlineStyles2.default.underlineFocusStyle
  })), (0, _jsx3.default)('div', {
    className: 'grid__row'
  }, void 0, (0, _jsx3.default)(_reduxForm.Field, {
    name: 'password',
    type: 'password',
    component: _TextField2.default,
    floatingLabelText: 'Password',
    fullWidth: true,
    underlineFocusStyle: _inlineStyles2.default.underlineFocusStyle
  }))), (0, _jsx3.default)(_Card.CardActions, {}, void 0, _ref, (0, _jsx3.default)(_FlatButton2.default, {
    label: 'Clear values',
    disabled: pristine || submitting,
    onClick: reset
  })));
};

LoginForm.propTypes = {
  handleSubmit: _react.PropTypes.func.isRequired,
  reset: _react.PropTypes.func,
  submitting: _react.PropTypes.bool,
  pristine: _react.PropTypes.bool
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'LoginForm'
})(LoginForm);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LoginForm = __webpack_require__(107);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LoginForm2.default;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(14);

var _Card = __webpack_require__(11);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _inlineStyles = __webpack_require__(10);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _TextField = __webpack_require__(35);

var _TextField2 = _interopRequireDefault(_TextField);

var _validate = __webpack_require__(111);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_Card.CardActions, {}, void 0, (0, _jsx3.default)(_RaisedButton2.default, {
  secondary: true,
  type: 'submit',
  label: 'Create account'
}));

var SignupForm = function SignupForm(props) {
  var handleSubmit = props.handleSubmit;
  var pristine = props.pristine;
  var reset = props.reset;
  var submitting = props.submitting;

  return (0, _jsx3.default)('form', {
    onSubmit: handleSubmit
  }, void 0, (0, _jsx3.default)(_Card.CardText, {}, void 0, (0, _jsx3.default)('div', {
    className: 'grid__row'
  }, void 0, (0, _jsx3.default)(_reduxForm.Field, {
    name: 'email',
    type: 'email',
    component: _TextField2.default,
    floatingLabelText: 'Email address',
    className: 'grid__half',
    underlineFocusStyle: _inlineStyles2.default.underlineFocusStyle
  }), (0, _jsx3.default)(_reduxForm.Field, {
    name: 'password',
    type: 'password',
    component: _TextField2.default,
    floatingLabelText: 'Password',
    className: 'grid__half',
    underlineFocusStyle: _inlineStyles2.default.underlineFocusStyle
  })), (0, _jsx3.default)('div', {
    className: 'grid__row'
  }, void 0, (0, _jsx3.default)(_reduxForm.Field, {
    name: 'firstName',
    type: 'text',
    component: _TextField2.default,
    floatingLabelText: 'First name',
    className: 'grid__half',
    underlineFocusStyle: _inlineStyles2.default.underlineFocusStyle
  }), (0, _jsx3.default)(_reduxForm.Field, {
    name: 'lastName',
    type: 'text',
    component: _TextField2.default,
    floatingLabelText: 'Last name',
    className: 'grid__half',
    underlineFocusStyle: _inlineStyles2.default.underlineFocusStyle
  })), (0, _jsx3.default)('div', {
    className: 'grid__row'
  }, void 0, (0, _jsx3.default)(_reduxForm.Field, {
    name: 'displayName',
    type: 'text',
    component: _TextField2.default,
    floatingLabelText: 'Display name',
    underlineFocusStyle: _inlineStyles2.default.underlineFocusStyle
  }))), _ref);
};

SignupForm.propTypes = {
  handleSubmit: _react.PropTypes.func.isRequired,
  reset: _react.PropTypes.func,
  submitting: _react.PropTypes.bool,
  fields: _react.PropTypes.object,
  pristine: _react.PropTypes.bool
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'userSignupForm',
  validate: _validate2.default
})(SignupForm);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SignupForm = __webpack_require__(109);

var _SignupForm2 = _interopRequireDefault(_SignupForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SignupForm2.default;

/***/ },
/* 111 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validate = function validate(values) {
  // IMPORTANT: values is an Immutable.Map here!
  var errors = {};
  if (!values.displayName) {
    errors.username = 'Required';
  } else if (values.displayName.length > 30) {
    errors.displayName = 'Must be 30 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  return errors;
};

exports.default = validate;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _org = __webpack_require__(22);

var _org2 = _interopRequireDefault(_org);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_org2.default, {
  theme: 'dark'
});

var AccountLayout = function AccountLayout(props) {

  return (0, _jsx3.default)('div', {}, void 0, _ref, props.children);
};

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr,
    account: state.account
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(AccountLayout);

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AccountLayout = __webpack_require__(112);

var _AccountLayout2 = _interopRequireDefault(_AccountLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AccountLayout2.default;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxAuthWrapper = __webpack_require__(43);

var _reactRouterRedux = __webpack_require__(12);

var UserIsAuthenticated = (0, _reduxAuthWrapper.UserAuthWrapper)({
  authSelector: function authSelector(state) {
    return state.auth;
  }, // how to get the user state
  failureRedirectPath: '/account/login',
  redirectAction: _reactRouterRedux.routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
  predicate: function predicate(auth) {
    return auth.isAuthenticated === true;
  },
  allowRedirectBack: true
});

var errorLoading = function errorLoading(err) {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

var loadModule = function loadModule(cb) {
  return function (componentModule) {
    cb(null, componentModule.default);
  };
};

if (false) require.ensure = function (deps, cb) {
  return cb(require);
};

exports.default = function (store, connect) {
  return {

    path: 'account',
    component: __webpack_require__(113).default,
    childRoutes: [{
      path: 'forgot-password',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 116)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'login',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 118)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'preferences',
      onEnter: connect(UserIsAuthenticated.onEnter),
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 120)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'reset-password/:token',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 122)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'signup',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 124)).then(loadModule(cb)).catch(errorLoading);
      }
    }]
  };
};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(56);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _Card = __webpack_require__(11);

var _TextField = __webpack_require__(33);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _atm = __webpack_require__(21);

var _atm2 = _interopRequireDefault(_atm);

var _inlineStyles = __webpack_require__(10);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _state = __webpack_require__(51);

var _styles = __webpack_require__(30);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_styles2.default);

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_atm2.default, {
  size: 1,
  bottom: '10px'
}, void 0, 'Forgot your password?'), 'Enter your email address below to reset it.');

var _ref2 = (0, _jsx3.default)(_Card.CardActions, {}, void 0, (0, _jsx3.default)(_RaisedButton2.default, {
  secondary: true,
  type: 'submit',
  label: 'Reset Password'
}));

var ForgotPassword = function (_Component) {
  (0, _inherits3.default)(ForgotPassword, _Component);

  function ForgotPassword(props) {
    (0, _classCallCheck3.default)(this, ForgotPassword);

    var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ForgotPassword).call(this, props));

    _this.state = { email: '' };
    return _this;
  }

  (0, _createClass3.default)(ForgotPassword, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'handleForgot',
    value: function handleForgot(event) {
      event.preventDefault();
      this.props.dispatch((0, _state.forgotPassword)(this.state.email));
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      return _ref;
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {
        style: _inlineStyles2.default.headerOverflow
      }, void 0, (0, _jsx3.default)('section', {
        className: cx('root')
      }, void 0, (0, _jsx3.default)(_Card.Card, {
        className: cx('auth-card')
      }, void 0, (0, _jsx3.default)('form', {
        onSubmit: this.handleForgot.bind(this)
      }, void 0, this.renderHeader(), (0, _jsx3.default)(_Card.CardText, {}, void 0, (0, _jsx3.default)('div', {
        className: 'grid__row'
      }, void 0, (0, _jsx3.default)(_TextField2.default, {
        type: 'email',
        name: 'email',
        id: 'email',
        floatingLabelText: 'Email address',
        style: _inlineStyles2.default.underlineFocusStyle,
        autoFocus: true,
        value: this.state.email,
        onChange: this.handleChange.bind(this)
      }))), _ref2))));
    }
  }]);
  return ForgotPassword;
}(_react.Component);

ForgotPassword.propTypes = {
  dispatch: _react.PropTypes.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ForgotPassword);

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ForgotPassword = __webpack_require__(115);

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ForgotPassword2.default;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _reactHelmet = __webpack_require__(20);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Card = __webpack_require__(11);

var _reactRouter = __webpack_require__(26);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _index = __webpack_require__(36);

var _inlineStyles = __webpack_require__(10);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _auth = __webpack_require__(28);

var _components = __webpack_require__(49);

var _styles = __webpack_require__(30);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_styles2.default);

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_index.Heading, {
  size: 1,
  bottom: '10px'
}, void 0, 'Log in'), 'Not what you want?', (0, _jsx3.default)(_reactRouter.Link, {
  to: '/account/signup'
}, void 0, ' Register an Account'));

var _ref2 = (0, _jsx3.default)(_reactHelmet2.default, {
  title: 'Login'
});

var _ref3 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_reactRouter.Link, {
  to: '/account/forgot-password'
}, void 0, 'Forgot your password?'));

var Login = function (_Component) {
  (0, _inherits3.default)(Login, _Component);

  function Login() {
    (0, _classCallCheck3.default)(this, Login);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Login).apply(this, arguments));
  }

  (0, _createClass3.default)(Login, [{
    key: 'handleOnSubmit',
    value: function handleOnSubmit(values) {
      var doLogin = this.props.doLogin;

      var loginData = { email: values.email, password: values.password };
      var redir = this.props.redirect;
      doLogin(loginData, redir);
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      return _ref;
    }
  }, {
    key: 'render',
    value: function render() {
      var isLoading = this.props.auth.isLoading;


      return (0, _jsx3.default)('div', {
        style: _inlineStyles2.default.headerOverflow
      }, void 0, _ref2, (0, _jsx3.default)('section', {
        className: cx('root')
      }, void 0, (0, _jsx3.default)(_Card.Card, {
        className: cx('auth-card')
      }, void 0, this.renderHeader(), (0, _jsx3.default)(_components.LoginForm, {
        onSubmit: this.handleOnSubmit.bind(this)
      }), (0, _jsx3.default)('div', {
        className: cx('auth-card__footer')
      }, void 0, _ref3))));
    }
  }]);
  return Login;
}(_react.Component);

Login.propTypes = {
  auth: _react.PropTypes.object,
  doLogin: _react.PropTypes.func,
  redirect: _react.PropTypes.string,
  handleOnSubmit: _react.PropTypes.func
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    redirect: ownProps.location.query.redirect
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { doLogin: _auth.doLogin })(Login);

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Login = __webpack_require__(117);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Login2.default;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(20);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
  title: 'Account Preferences',
  titleTemplate: '%s | powered by Boldr'
}));

var Preferences = function (_Component) {
  (0, _inherits3.default)(Preferences, _Component);

  function Preferences() {
    (0, _classCallCheck3.default)(this, Preferences);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Preferences).apply(this, arguments));
  }

  (0, _createClass3.default)(Preferences, [{
    key: 'render',
    value: function render() {
      return _ref;
    }
  }]);
  return Preferences;
}(_react.Component);

Preferences.propTypes = {
  children: _react.PropTypes.node
};

function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth,
    account: state.account
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Preferences);

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Preferences = __webpack_require__(119);

var _Preferences2 = _interopRequireDefault(_Preferences);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Preferences2.default;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(56);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _Card = __webpack_require__(11);

var _TextField = __webpack_require__(33);

var _TextField2 = _interopRequireDefault(_TextField);

var _es = __webpack_require__(250);

var _atm = __webpack_require__(21);

var _atm2 = _interopRequireDefault(_atm);

var _inlineStyles = __webpack_require__(10);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _styles = __webpack_require__(30);

var _styles2 = _interopRequireDefault(_styles);

var _state = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_styles2.default);

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_atm2.default, {
  size: 1,
  bottom: '10px'
}, void 0, 'Forgot your password?'), 'Enter your email address below to reset it.');

var _ref2 = (0, _jsx3.default)(_Card.CardActions, {}, void 0, (0, _jsx3.default)(_RaisedButton2.default, {
  secondary: true,
  type: 'submit',
  label: 'Change Password'
}));

var ResetPassword = function (_React$Component) {
  (0, _inherits3.default)(ResetPassword, _React$Component);

  function ResetPassword(props) {
    (0, _classCallCheck3.default)(this, ResetPassword);

    var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ResetPassword).call(this, props));

    _this.state = { password: '', confirm: '' };
    return _this;
  }

  (0, _createClass3.default)(ResetPassword, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'handleReset',
    value: function handleReset(event) {
      event.preventDefault();
      this.props.dispatch((0, _state.resetPassword)(this.state.password, this.props.params.token));
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      return _ref;
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {
        style: _inlineStyles2.default.headerOverflow
      }, void 0, (0, _jsx3.default)('section', {
        className: cx('root')
      }, void 0, (0, _jsx3.default)(_Card.Card, {
        className: cx('auth-card')
      }, void 0, (0, _jsx3.default)('form', {
        onSubmit: this.handleReset.bind(this)
      }, void 0, this.renderHeader(), (0, _jsx3.default)(_Card.CardText, {}, void 0, (0, _jsx3.default)('div', {
        className: 'grid__row'
      }, void 0, (0, _jsx3.default)(_TextField2.default, {
        type: 'password',
        name: 'password',
        id: 'password',
        floatingLabelText: 'New password',
        style: _inlineStyles2.default.underlineFocusStyle,
        autoFocus: true,
        value: this.state.password,
        onChange: this.handleChange.bind(this)
      })), (0, _jsx3.default)('div', {
        className: 'grid__row'
      }, void 0, (0, _jsx3.default)(_TextField2.default, {
        type: 'password',
        name: 'password',
        id: 'password',
        floatingLabelText: 'Confirm password',
        style: _inlineStyles2.default.underlineFocusStyle,
        value: this.state.confirm,
        onChange: this.handleChange.bind(this)
      }))), _ref2))));
    }
  }]);
  return ResetPassword;
}(_react2.default.Component);

ResetPassword.propTypes = {
  dispatch: _react.PropTypes.func.isRequired,
  params: _react.PropTypes.object
};
var mapStateToProps = function mapStateToProps(state) {
  return state;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ResetPassword);

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ResetPassword = __webpack_require__(121);

var _ResetPassword2 = _interopRequireDefault(_ResetPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ResetPassword2.default;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _reactHelmet = __webpack_require__(20);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Card = __webpack_require__(11);

var _reactRouter = __webpack_require__(26);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _index = __webpack_require__(36);

var _inlineStyles = __webpack_require__(10);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _account = __webpack_require__(17);

var _components = __webpack_require__(49);

var _styles = __webpack_require__(30);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_styles2.default);

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_index.Heading, {
  size: 1,
  bottom: '10px'
}, void 0, 'Create your identity'), 'Already have an account?', (0, _jsx3.default)(_reactRouter.Link, {
  to: '/account/login'
}, void 0, ' Login'));

var _ref2 = (0, _jsx3.default)(_reactHelmet2.default, {
  title: 'Signup'
});

var Signup = function (_Component) {
  (0, _inherits3.default)(Signup, _Component);

  function Signup() {
    (0, _classCallCheck3.default)(this, Signup);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Signup).apply(this, arguments));
  }

  (0, _createClass3.default)(Signup, [{
    key: 'handleOnSubmit',
    value: function handleOnSubmit(values) {
      var createAccount = this.props.createAccount;

      createAccount({
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        displayName: values.displayName
      });
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      return _ref;
    }
  }, {
    key: 'render',
    value: function render() {
      var isLoading = this.props.users.isLoading;

      return (0, _jsx3.default)('div', {
        style: _inlineStyles2.default.headerOverflow
      }, void 0, _ref2, (0, _jsx3.default)('section', {
        className: cx('root')
      }, void 0, (0, _jsx3.default)(_Card.Card, {
        className: cx('auth-card')
      }, void 0, this.renderHeader(), (0, _jsx3.default)(_components.SignupForm, {
        onSubmit: this.handleOnSubmit.bind(this)
      }))));
    }
  }]);
  return Signup;
}(_react.Component);

Signup.propTypes = {
  users: _react.PropTypes.object,
  createAccount: _react.PropTypes.func,
  handleOnSubmit: _react.PropTypes.func
};
function mapStateToProps(_ref3) {
  var users = _ref3.users;

  return {
    users: users
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { createAccount: _account.createAccount })(Signup);

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Signup = __webpack_require__(123);

var _Signup2 = _interopRequireDefault(_Signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Signup2.default;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _org = __webpack_require__(22);

var _org2 = _interopRequireDefault(_org);

var _inlineStyles = __webpack_require__(10);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _post = __webpack_require__(18);

var _pg = __webpack_require__(37);

var _pg2 = _interopRequireDefault(_pg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_org2.default, {
  theme: 'dark'
});

var BlogContainer = function BlogContainer(props) {
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    style: _inlineStyles2.default.headerOverflow
  }, void 0, _ref), props.children);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts,
    loading: state.posts.isLoading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getPostsListing: _post.getPostsListing })(BlogContainer);


BlogContainer.propTypes = {
  children: _react.PropTypes.element
};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function Tag(props) {
  return (0, _jsx3.default)('div', {}, void 0, props.name);
};

Tag.propTypes = {
  name: _react2.default.PropTypes.string.isRequired
};

exports.default = Tag;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tag = __webpack_require__(126);

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Tag2.default;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Author = function Author(props) {
  return (0, _jsx3.default)('div', {}, void 0, props.user.displayName);
};

Author.propTypes = {
  displayName: _react2.default.PropTypes.string.isRequired
};

exports.default = Author;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Author = __webpack_require__(128);

var _Author2 = _interopRequireDefault(_Author);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Author2.default;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(26);

var _moment = __webpack_require__(41);

var _moment2 = _interopRequireDefault(_moment);

var _bookmark = __webpack_require__(235);

var _bookmark2 = _interopRequireDefault(_bookmark);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Card = __webpack_require__(11);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _style = __webpack_require__(202);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var _ref = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_bookmark2.default, {}));

var _ref2 = (0, _jsx3.default)(_RaisedButton2.default, {
  label: 'Continue',
  secondary: true
});

var PostCard = function PostCard(props) {
  var formattedDate = (0, _moment2.default)(props.createdAt).format('MMMM Do YYYY, h:mm:ss a');
  var profileLink = 'profile/public/' + props.user.id;
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Card.Card, {}, void 0, (0, _jsx3.default)(_Card.CardMedia, {
    overlay: (0, _jsx3.default)(_Card.CardTitle, {
      title: props.title,
      subtitle: formattedDate
    })
  }, void 0, (0, _jsx3.default)('img', {
    className: cx('post__card-image'),
    src: props.featureImage,
    height: '350px'
  })), (0, _jsx3.default)(_Card.CardText, {}, void 0, props.excerpt), (0, _jsx3.default)('div', {
    className: cx('post__card-footer')
  }, void 0, (0, _jsx3.default)('div', {
    className: 'grid__row'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'grid__twothirds'
  }, void 0, (0, _jsx3.default)('ul', {
    style: { display: 'flex', listStyleType: 'none' }
  }, void 0, _ref, props.tags.map(function (tag) {
    return (0, _jsx3.default)('li', {}, tag.id, (0, _jsx3.default)(_reactRouter.Link, {
      to: '/tags/' + tag.id
    }, void 0, tag.name, '  '));
  }))), (0, _jsx3.default)('div', {
    className: 'grid__third'
  }, void 0, (0, _jsx3.default)(_reactRouter.Link, {
    to: '/blog/' + props.slug
  }, void 0, _ref2))), 'Posted by ', (0, _jsx3.default)(_reactRouter.Link, {
    to: profileLink
  }, void 0, props.user.displayName))));
};

PostCard.propTypes = {
  title: _react.PropTypes.string,
  createdAt: _react.PropTypes.string,
  displayName: _react.PropTypes.string,
  featureImage: _react.PropTypes.string,
  excerpt: _react.PropTypes.string,
  tags: _react.PropTypes.array,
  content: _react.PropTypes.string,
  user: _react.PropTypes.object,
  slug: _react.PropTypes.string
};

exports.default = PostCard;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostCard = __webpack_require__(130);

var _PostCard2 = _interopRequireDefault(_PostCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PostCard2.default;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContent = function PostContent(props) {
  function createMarkup() {
    return { __html: props.content };
  };
  return (0, _jsx3.default)("div", {}, void 0, props.title, (0, _jsx3.default)("div", {
    className: "content",
    dangerouslySetInnerHTML: createMarkup()
  }));
};

PostContent.propTypes = {
  title: _react.PropTypes.string.isRequired,
  content: _react.PropTypes.string.isRequired
};

exports.default = PostContent;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostContent = __webpack_require__(132);

var _PostContent2 = _interopRequireDefault(_PostContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PostContent2.default;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _atm = __webpack_require__(127);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {}, void 0, 'No tags');

var TagBlock = function TagBlock(props) {
  if (!props.tags) {
    return _ref;
  }
  return (0, _jsx3.default)('div', {}, void 0, props.tags.map(function (tag) {
    return (0, _jsx3.default)(_atm2.default, {
      name: tag.name,
      id: tag.id
    }, tag.id);
  }));
};

TagBlock.propTypes = {
  tags: _react2.default.PropTypes.array.isRequired
};

exports.default = TagBlock;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TagBlock = __webpack_require__(134);

var _TagBlock2 = _interopRequireDefault(_TagBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TagBlock2.default;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _mol = __webpack_require__(129);

var _mol2 = _interopRequireDefault(_mol);

var _mol3 = __webpack_require__(135);

var _mol4 = _interopRequireDefault(_mol3);

var _style = __webpack_require__(203);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var Sidebar = function Sidebar(props) {
  return (0, _jsx3.default)('div', {
    className: cx('sidebar')
  }, void 0, (0, _jsx3.default)(_mol4.default, {
    tags: props.tags
  }));
};

Sidebar.propTypes = {
  tags: _react2.default.PropTypes.array,
  user: _react2.default.PropTypes.object
};

exports.default = Sidebar;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sidebar = __webpack_require__(136);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Sidebar2.default;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _redial = __webpack_require__(13);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _atm = __webpack_require__(46);

var _atm2 = _interopRequireDefault(_atm);

var _post = __webpack_require__(18);

var _mol = __webpack_require__(131);

var _mol2 = _interopRequireDefault(_mol);

var _style = __webpack_require__(204);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var PostListing = function (_Component) {
  (0, _inherits3.default)(PostListing, _Component);

  function PostListing() {
    (0, _classCallCheck3.default)(this, PostListing);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(PostListing).apply(this, arguments));
  }

  (0, _createClass3.default)(PostListing, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getPostsListing();
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {
        className: 'grid'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'grid__row'
      }, void 0, this.props.posts.data.map(function (post) {
        return (0, _jsx3.default)('div', {
          className: 'grid__third'
        }, post.id, _react2.default.createElement(_mol2.default, post));
      })));
    }
  }]);
  return PostListing;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    isLoading: state.posts.isLoading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getPostsListing: _post.getPostsListing })(PostListing);


PostListing.propTypes = {
  getPostsListing: _react2.default.PropTypes.func,
  posts: _react2.default.PropTypes.object.isRequired
};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _reactRouter = __webpack_require__(26);

var _moment = __webpack_require__(41);

var _moment2 = _interopRequireDefault(_moment);

var _Paper = __webpack_require__(25);

var _Paper2 = _interopRequireDefault(_Paper);

var _redial = __webpack_require__(13);

var _atm = __webpack_require__(46);

var _atm2 = _interopRequireDefault(_atm);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _org = __webpack_require__(137);

var _org2 = _interopRequireDefault(_org);

var _post = __webpack_require__(18);

var _mol = __webpack_require__(133);

var _mol2 = _interopRequireDefault(_mol);

var _style = __webpack_require__(205);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var _ref = (0, _jsx3.default)(_atm2.default, {});

var SinglePost = function (_Component) {
  (0, _inherits3.default)(SinglePost, _Component);

  function SinglePost() {
    (0, _classCallCheck3.default)(this, SinglePost);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(SinglePost).apply(this, arguments));
  }

  (0, _createClass3.default)(SinglePost, [{
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {
        className: 'grid'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'grid__row',
        style: { padding: '1em' }
      }, void 0, (0, _jsx3.default)('div', {
        className: 'grid__twothirds'
      }, void 0, (0, _jsx3.default)(_Paper2.default, {
        style: { padding: '1em' },
        zDepth: 2
      }, void 0, this.props.isLoading ? _ref : _react2.default.createElement(_mol2.default, this.props.selectedPost))), (0, _jsx3.default)('div', {
        className: 'grid__third'
      }, void 0, _react2.default.createElement(_org2.default, this.props.selectedPost))));
    }
  }]);
  return SinglePost;
}(_react.Component);

SinglePost.propTypes = {
  isLoading: _react.PropTypes.bool,
  selectedPost: _react.PropTypes.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts,
    isLoading: state.posts.isLoading,
    selectedPost: state.posts.selectedPost
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SinglePost);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SinglePost = __webpack_require__(139);

var _SinglePost2 = _interopRequireDefault(_SinglePost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SinglePost2.default;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BlogContainer = __webpack_require__(125);

var _BlogContainer2 = _interopRequireDefault(_BlogContainer);

var _pg = __webpack_require__(37);

var _pg2 = _interopRequireDefault(_pg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorLoading = function errorLoading(err) {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

var loadModule = function loadModule(cb) {
  return function (componentModule) {
    cb(null, componentModule.default);
  };
};

exports.default = function (store, connect) {
  return {
    path: 'blog',
    component: _BlogContainer2.default,
    indexRoute: {
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 37)).then(loadModule(cb)).catch(errorLoading);
      }
    },
    childRoutes: [{
      path: ':slug',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 140)).then(loadModule(cb)).catch(errorLoading);
      }
    }]
  };
};

/***/ },
/* 142 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_POSTS_REQUEST = exports.FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
var FETCH_POSTS_SUCCESS = exports.FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
var FETCH_POSTS_FAIL = exports.FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';

var FETCH_POST_REQUEST = exports.FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
var FETCH_POST_SUCCESS = exports.FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
var FETCH_POST_FAIL = exports.FETCH_POST_FAIL = 'FETCH_POST_FAIL';

var SELECT_POST = exports.SELECT_POST = 'SELECT_POST';
var SELECT_POST_SUCCESS = exports.SELECT_POST_SUCCESS = 'SELECT_POST_SUCCESS';
var SELECT_POST_FAIL = exports.SELECT_POST_FAIL = 'SELECT_POST_FAIL';

var UPDATE_POST_REQUEST = exports.UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
var UPDATE_POST_SUCCESS = exports.UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
var UPDATE_POST_FAIL = exports.UPDATE_POST_FAIL = 'UPDATE_POST_FAIL';

var CREATE_POST_REQUEST = exports.CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
var CREATE_POST_SUCCESS = exports.CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
var CREATE_POST_FAIL = exports.CREATE_POST_FAIL = 'CREATE_POST_FAIL';

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayOfPosts = exports.post = undefined;

var _normalizr = __webpack_require__(64);

var post = exports.post = new _normalizr.Schema('posts');
var arrayOfPosts = exports.arrayOfPosts = (0, _normalizr.arrayOf)(post);

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(20);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(7);

var _atm = __webpack_require__(74);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_reactHelmet2.default, {
  title: 'Boldr',
  titleTemplate: '%s | powered by Boldr'
});

var _ref2 = (0, _jsx3.default)(_atm2.default, {});

var Boldr = function Boldr(props) {
  return (0, _jsx3.default)('div', {}, void 0, _ref, props.children, _ref2);
};

Boldr.propTypes = {
  children: _react.PropTypes.node
};

function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth,
    notifications: state.notifications
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Boldr);

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Boldr = __webpack_require__(144);

var _Boldr2 = _interopRequireDefault(_Boldr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Boldr2.default;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(251);

var _Link2 = _interopRequireDefault(_Link);

var _reactRedux = __webpack_require__(7);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _AppBar = __webpack_require__(225);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Drawer = __webpack_require__(229);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _styles = __webpack_require__(231);

var _MenuItem = __webpack_require__(24);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _description = __webpack_require__(63);

var _description2 = _interopRequireDefault(_description);

var _dashboard = __webpack_require__(236);

var _dashboard2 = _interopRequireDefault(_dashboard);

var _permMedia = __webpack_require__(237);

var _permMedia2 = _interopRequireDefault(_permMedia);

var _settings = __webpack_require__(238);

var _settings2 = _interopRequireDefault(_settings);

var _toc = __webpack_require__(239);

var _toc2 = _interopRequireDefault(_toc);

var _people = __webpack_require__(243);

var _people2 = _interopRequireDefault(_people);

var _modeEdit = __webpack_require__(241);

var _modeEdit2 = _interopRequireDefault(_modeEdit);

var _materialTheme = __webpack_require__(48);

var _inlineStyles = __webpack_require__(10);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _atm = __webpack_require__(47);

var _atm2 = _interopRequireDefault(_atm);

var _style = __webpack_require__(214);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var inStyles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
  logo: {
    cursor: 'pointer',
    fontSize: 24,
    color: _styles.typography.textFullWhite,
    lineHeight: _styles.spacing.desktopKeylineIncrement + 'px',
    fontWeight: _styles.typography.fontWeightLight,
    backgroundColor: _materialTheme.midnightBlue,
    paddingLeft: _styles.spacing.desktopGutter,
    marginBottom: 8
  },
  content: {
    marginTop: '80px',
    padding: '16px'
  }
};

var _ref = (0, _jsx3.default)(_Link2.default, {
  to: '/'
}, void 0, (0, _jsx3.default)(_atm2.default, {
  logoHeight: '35px'
}));

var _ref2 = (0, _jsx3.default)(_description2.default, {});

var _ref3 = (0, _jsx3.default)(_MenuItem2.default, {
  leftIcon: (0, _jsx3.default)(_toc2.default, {}),
  containerElement: (0, _jsx3.default)(_Link2.default, {
    to: '/dashboard/articles'
  }),
  primaryText: 'Listing'
});

var _ref4 = (0, _jsx3.default)(_MenuItem2.default, {
  leftIcon: (0, _jsx3.default)(_modeEdit2.default, {}),
  primaryText: 'Editor',
  containerElement: (0, _jsx3.default)(_Link2.default, {
    to: '/dashboard/articles/editor'
  })
});

var _ref5 = (0, _jsx3.default)(_MenuItem2.default, {
  primaryText: 'Dashboard',
  leftIcon: (0, _jsx3.default)(_dashboard2.default, {}),
  containerElement: (0, _jsx3.default)(_Link2.default, {
    to: '/dashboard'
  })
});

var _ref6 = (0, _jsx3.default)(_MenuItem2.default, {
  primaryText: 'Media',
  leftIcon: (0, _jsx3.default)(_permMedia2.default, {}),
  containerElement: (0, _jsx3.default)(_Link2.default, {
    to: '/dashboard/media'
  })
});

var _ref7 = (0, _jsx3.default)(_MenuItem2.default, {
  primaryText: 'Settings',
  leftIcon: (0, _jsx3.default)(_settings2.default, {}),
  containerElement: (0, _jsx3.default)(_Link2.default, {
    to: '/dashboard/settings'
  })
});

var _ref8 = (0, _jsx3.default)(_MenuItem2.default, {
  primaryText: 'Users',
  leftIcon: (0, _jsx3.default)(_people2.default, {}),
  containerElement: (0, _jsx3.default)(_Link2.default, {
    to: '/dashboard/users'
  })
});

var Dashboard = function (_Component) {
  (0, _inherits3.default)(Dashboard, _Component);

  function Dashboard(props) {
    (0, _classCallCheck3.default)(this, Dashboard);

    var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Dashboard).call(this, props));

    _this.handleToggle = function () {
      return _this.setState({ open: !_this.state.open });
    };

    _this.state = {
      docked: true,
      open: true
    };
    return _this;
  }

  (0, _createClass3.default)(Dashboard, [{
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_AppBar2.default, {
        style: _inlineStyles2.default.dashboardAppBar
      }), (0, _jsx3.default)('div', {
        className: cx('dashboard__row')
      }, void 0, (0, _jsx3.default)(_Drawer2.default, {
        open: this.state.open,
        docked: true,
        containerStyle: { zIndex: _styles.zIndex.drawer - 100, width: '200px' }
      }, void 0, (0, _jsx3.default)('div', {
        style: inStyles.logo,
        onTouchTap: this.handleTouchTapHeader
      }, void 0, _ref), (0, _jsx3.default)(_MenuItem2.default, {
        primaryText: 'Articles',
        insetChildren: true,
        leftIcon: _ref2,
        menuItems: [_ref3, _ref4]
      }), _ref5, _ref6, _ref7, _ref8), (0, _jsx3.default)('div', {
        className: cx('dashboard__content')
      }, void 0, this.props.children)));
    }
  }]);
  return Dashboard;
}(_react.Component);

Dashboard.propTypes = {
  children: _react2.default.PropTypes.element,
  toggleOpen: _react2.default.PropTypes.func
};

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Dashboard);

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _formPage = __webpack_require__(148);

var _formPage2 = _interopRequireDefault(_formPage);

var _formPage3 = __webpack_require__(149);

var _formPage4 = _interopRequireDefault(_formPage3);

var _formPage5 = __webpack_require__(150);

var _formPage6 = _interopRequireDefault(_formPage5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SetupForm = function (_Component) {
  (0, _inherits3.default)(SetupForm, _Component);

  function SetupForm(props) {
    (0, _classCallCheck3.default)(this, SetupForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(SetupForm).call(this, props));

    _this.nextPage = _this.nextPage.bind(_this);
    _this.previousPage = _this.previousPage.bind(_this);
    _this.state = {
      page: 1
    };
    return _this;
  }

  (0, _createClass3.default)(SetupForm, [{
    key: 'nextPage',
    value: function nextPage() {
      this.setState({ page: this.state.page + 1 });
    }
  }, {
    key: 'previousPage',
    value: function previousPage() {
      this.setState({ page: this.state.page - 1 });
    }
  }, {
    key: 'render',
    value: function render() {
      var onSubmit = this.props.onSubmit;
      var page = this.state.page;

      return (0, _jsx3.default)('div', {}, void 0, page === 1 && (0, _jsx3.default)(_formPage2.default, {
        onSubmit: this.nextPage
      }), page === 2 && (0, _jsx3.default)(_formPage4.default, {
        previousPage: this.previousPage,
        onSubmit: this.nextPage
      }), page === 3 && (0, _jsx3.default)(_formPage6.default, {
        previousPage: this.previousPage,
        onSubmit: onSubmit
      }));
    }
  }]);
  return SetupForm;
}(_react.Component);

exports.default = SetupForm;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fields = undefined;

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(14);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(33);

var _TextField2 = _interopRequireDefault(_TextField);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _atm = __webpack_require__(21);

var _atm2 = _interopRequireDefault(_atm);

var _atm3 = __webpack_require__(34);

var _atm4 = _interopRequireDefault(_atm3);

var _style = __webpack_require__(206);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);
var fields = exports.fields = ['siteName', 'siteUrl'];

var _ref = (0, _jsx3.default)(_atm2.default, {
  size: 1
}, void 0, 'Welcome to ', (0, _jsx3.default)(_atm4.default, {
  width: '150'
}), ' Boldr');

var _ref2 = (0, _jsx3.default)(_atm2.default, {
  size: 2
}, void 0, 'Please answer a few questions in order to setup your site.');

var _ref3 = (0, _jsx3.default)('br', {});

var _ref4 = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_RaisedButton2.default, {
  primary: true,
  label: 'Next',
  type: 'submit'
}));

var SetupFormPage1 = function SetupFormPage1(props) {
  var _props$fields = props.fields;
  var siteName = _props$fields.siteName;
  var siteUrl = _props$fields.siteUrl;
  var handleSubmit = props.handleSubmit;

  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: cx('sf-toprow')
  }, void 0, _ref, _ref2), (0, _jsx3.default)('div', {
    className: cx('sf-toprow')
  }, void 0, (0, _jsx3.default)('form', {
    onSubmit: handleSubmit
  }, void 0, _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
    floatingLabelText: 'Site Name'
  }, siteName)), _ref3, _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
    floatingLabelText: 'Website URL'
  }, siteUrl)), _ref4)));
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'SetupForm',
  fields: fields,
  destroyOnUnmount: false
})(SetupFormPage1);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fields = undefined;

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(14);

var _Toggle = __webpack_require__(267);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _TextField = __webpack_require__(33);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fields = exports.fields = ['description', 'logo', 'favicon', 'analyticsId', 'allowRegistration'];

var _ref = (0, _jsx3.default)('br', {});

var _ref2 = (0, _jsx3.default)('br', {});

var _ref3 = (0, _jsx3.default)('br', {});

var _ref4 = (0, _jsx3.default)('br', {});

var _ref5 = (0, _jsx3.default)(_RaisedButton2.default, {
  primary: true,
  label: 'Next',
  type: 'submit'
});

var SetupFormPage2 = function SetupFormPage2(props) {
  var _props$fields = props.fields;
  var description = _props$fields.description;
  var logo = _props$fields.logo;
  var favicon = _props$fields.favicon;
  var analyticsId = _props$fields.analyticsId;
  var allowRegistration = _props$fields.allowRegistration;
  var handleSubmit = props.handleSubmit;
  var previousPage = props.previousPage;

  return (0, _jsx3.default)('form', {
    onSubmit: handleSubmit
  }, void 0, _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
    floatingLabelText: 'Site description'
  }, description)), _ref, _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
    floatingLabelText: 'Site logo',
    hintText: 'This will be a file input eventually.'
  }, logo)), _ref2, _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
    floatingLabelText: 'Favicon'
  }, favicon)), _ref3, _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
    floatingLabelText: 'Google Analytics ID'
  }, analyticsId)), _ref4, _react2.default.createElement(_Toggle2.default, (0, _extends3.default)({
    label: 'Allow user registration',
    defaultToggled: true
  }, allowRegistration)), (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_RaisedButton2.default, {
    label: 'Previous',
    onClick: previousPage,
    style: { marginTop: '1em', marginRight: '1em' }
  }), _ref5));
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'SetupForm',
  fields: fields,
  destroyOnUnmount: false
})(SetupFormPage2);

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fields = undefined;

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(14);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _atm = __webpack_require__(21);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fields = exports.fields = ['siteName', 'siteUrl', 'description', 'logo', 'favicon', 'analyticsId', 'allowRegistration'];

var _ref = (0, _jsx3.default)(_atm2.default, {
  size: 1
}, void 0, 'Temporarily empty placeholder page. Click the button below to finish');

var _ref2 = (0, _jsx3.default)(_RaisedButton2.default, {
  primary: true,
  label: 'Save Settings',
  type: 'submit'
});

var SetupFormPage3 = function SetupFormPage3(props) {
  var handleSubmit = props.handleSubmit;
  var previousPage = props.previousPage;

  return (0, _jsx3.default)('form', {
    onSubmit: handleSubmit
  }, void 0, _ref, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_RaisedButton2.default, {
    label: 'Previous',
    onClick: previousPage,
    style: { marginTop: '1em', marginRight: '1em' }
  }), _ref2));
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'SetupForm',
  fields: fields,
  destroyOnUnmount: false
})(SetupFormPage3);

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SetupForm = __webpack_require__(147);

var _SetupForm2 = _interopRequireDefault(_SetupForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SetupForm2.default;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_Card.CardText, {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.');

var Widget = function Widget(props) {
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Card.Card, {}, void 0, (0, _jsx3.default)(_Card.CardTitle, {
    title: props.name,
    subtitle: props.subtitle
  }), _ref));
};

Widget.propTypes = {
  name: _react.PropTypes.string,
  subtitle: _react.PropTypes.string
};

exports.default = Widget;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Widget = __webpack_require__(152);

var _Widget2 = _interopRequireDefault(_Widget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Widget2.default;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _redial = __webpack_require__(13);

var _Checkbox = __webpack_require__(227);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _RadioButton = __webpack_require__(39);

var _Paper = __webpack_require__(25);

var _Paper2 = _interopRequireDefault(_Paper);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Toolbar = __webpack_require__(230);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _classnames = __webpack_require__(58);

var _classnames2 = _interopRequireDefault(_classnames);

var _boldr = __webpack_require__(29);

var _atm = __webpack_require__(151);

var _atm2 = _interopRequireDefault(_atm);

var _styles = __webpack_require__(207);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_styles2.default);

var Setup = function (_Component) {
  (0, _inherits3.default)(Setup, _Component);

  function Setup() {
    (0, _classCallCheck3.default)(this, Setup);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Setup).apply(this, arguments));
  }

  (0, _createClass3.default)(Setup, [{
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      this.props.dispatch((0, _boldr.saveBoldrSetup)(values));
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Toolbar.Toolbar, {
        style: { backgroundColor: 'rgb(64, 64, 78)', marginBottom: '1em' }
      }, void 0, (0, _jsx3.default)(_Toolbar.ToolbarGroup, {}, void 0, (0, _jsx3.default)(_Toolbar.ToolbarTitle, {
        text: 'Setup',
        style: { color: 'rgba(237, 237, 237, 1)' }
      }))), (0, _jsx3.default)('section', {
        className: cx('root')
      }, void 0, (0, _jsx3.default)(_Paper2.default, {
        style: { padding: '1em' }
      }, void 0, (0, _jsx3.default)(_atm2.default, {
        onSubmit: this.handleSubmit.bind(this)
      }))));
    }
  }]);
  return Setup;
}(_react.Component);

Setup.propTypes = {
  dispatch: _react.PropTypes.func.isRequired
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    boldr: state.boldr,
    isLoading: state.boldr.isLoading
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Setup);

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Setup = __webpack_require__(154);

var _Setup2 = _interopRequireDefault(_Setup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Setup2.default;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxAuthWrapper = __webpack_require__(43);

var _reactRouterRedux = __webpack_require__(12);

var UserIsAuthenticated = (0, _reduxAuthWrapper.UserAuthWrapper)({
  authSelector: function authSelector(state) {
    return state.auth;
  }, // how to get the user state
  failureRedirectPath: '/account/login',
  redirectAction: _reactRouterRedux.routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
  predicate: function predicate(auth) {
    return auth.isAuthenticated === true;
  },
  allowRedirectBack: true
});

var errorLoading = function errorLoading(err) {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

var loadModule = function loadModule(cb) {
  return function (componentModule) {
    cb(null, componentModule.default);
  };
};

if (false) require.ensure = function (deps, cb) {
  return cb(require);
};

exports.default = function (store, connect) {
  return {

    path: 'dashboard',
    onEnter: connect(UserIsAuthenticated.onEnter),
    component: UserIsAuthenticated(__webpack_require__(146).default),
    indexRoute: {
      component: __webpack_require__(165).default
    },
    childRoutes: [{
      path: 'articles',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 163)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'articles/editor(/:slug)',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 162)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'media',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 169)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'pages',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 172)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'settings',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
          cb(null, __webpack_require__(176).default);
        }).bind(null, __webpack_require__));
      }
    }, {
      path: 'setup',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
          cb(null, __webpack_require__(155).default);
        }).bind(null, __webpack_require__));
      }
    }, {
      path: 'users',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 180)).then(loadModule(cb)).catch(errorLoading);
      }
    }]
  };
};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _redial = __webpack_require__(13);

var _es = __webpack_require__(250);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _List = __webpack_require__(60);

var _Avatar = __webpack_require__(226);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _colors = __webpack_require__(62);

var _IconButton = __webpack_require__(23);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = __webpack_require__(40);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _IconMenu = __webpack_require__(32);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = __webpack_require__(24);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Paper = __webpack_require__(25);

var _Paper2 = _interopRequireDefault(_Paper);

var _post = __webpack_require__(18);

var _org = __webpack_require__(159);

var _org2 = _interopRequireDefault(_org);

var _style = __webpack_require__(210);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);
var iconButtonElement = (0, _jsx3.default)(_IconButton2.default, {
  touch: true,
  tooltip: 'more',
  tooltipPosition: 'bottom-left'
}, void 0, (0, _jsx3.default)(_moreVert2.default, {
  color: _colors.grey400
}));

var _ref = (0, _jsx3.default)('h1', {}, void 0, 'Perhaps you should create a new post?');

var _ref2 = (0, _jsx3.default)(_MenuItem2.default, {}, void 0, 'Unpublish');

var _ref3 = (0, _jsx3.default)(_MenuItem2.default, {}, void 0, 'Delete');

var Articles = function (_Component) {
  (0, _inherits3.default)(Articles, _Component);

  function Articles(props) {
    (0, _classCallCheck3.default)(this, Articles);

    var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Articles).call(this, props));

    _this.state = {
      visible: false,
      artId: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Articles, [{
    key: 'handleArticleClick',
    value: function handleArticleClick(postId, artSlug) {
      this.props.dispatch((0, _post.selectPost)(postId));
      this.setState({
        visible: true,
        slug: artSlug
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.posts.data.length) {
        return _ref;
      }
      // FIXME: Better way to set the article slug state. Currently you have to click on the card...
      var rightIconMenu = (0, _jsx3.default)(_IconMenu2.default, {
        iconButtonElement: iconButtonElement
      }, void 0, (0, _jsx3.default)(_MenuItem2.default, {}, void 0, (0, _jsx3.default)(_es.Link, {
        to: '/dashboard/articles/editor/' + this.state.slug
      }, void 0, 'Edit')), _ref2, _ref3);
      return (0, _jsx3.default)('div', {
        className: cx('dashboard__row')
      }, void 0, (0, _jsx3.default)('div', {
        className: 'grid__half'
      }, void 0, (0, _jsx3.default)(_Paper2.default, {
        zDepth: 1,
        style: { height: '90vh' }
      }, void 0, (0, _jsx3.default)(_List.List, {
        className: cx('articleList')
      }, void 0, this.props.posts.data.map(function (post) {
        return (0, _jsx3.default)(_List.ListItem, {
          leftAvatar: (0, _jsx3.default)(_Avatar2.default, {
            src: post.featureImage
          }),
          rightIconButton: rightIconMenu,
          primaryText: (0, _jsx3.default)(_org2.default, {
            article: post,
            handleArticleClick: _this2.handleArticleClick.bind(_this2)
          }),
          secondaryText: (0, _jsx3.default)(_org2.default, {
            article: post,
            handleArticleClick: _this2.handleArticleClick.bind(_this2)
          })
        }, post.id);
      })))), (0, _jsx3.default)('div', {
        className: cx('article__preview')
      }, void 0, (0, _jsx3.default)(_Paper2.default, {
        zDepth: 1,
        style: { height: '90vh' }
      }, void 0, this.state.visible ? (0, _jsx3.default)('span', {}, void 0, this.props.current.title) : null)));
    }
  }]);
  return Articles;
}(_react.Component);

Articles.propTypes = {
  children: _react.PropTypes.node,
  posts: _react.PropTypes.object,
  dispatch: _react.PropTypes.func,
  current: _react.PropTypes.object
};
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    isLoading: state.posts.isLoading,
    current: state.posts.current
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Articles);

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _style = __webpack_require__(208);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var ArticleListItem = function ArticleListItem(props) {
  function handleclick() {
    var articleId = props.article.id;
    var artSlug = props.article.slug;
    props.handleArticleClick(articleId, artSlug);
  }
  return (0, _jsx3.default)('div', {
    className: cx('article-wrap')
  }, void 0, (0, _jsx3.default)('ul', {
    className: cx('article-list'),
    onClick: handleclick
  }, void 0, (0, _jsx3.default)('li', {
    className: cx('article-list__item')
  }, void 0, props.article.createdAt)));
};

ArticleListItem.propTypes = {
  article: _react2.default.PropTypes.object.isRequired,
  handleArticleClick: _react2.default.PropTypes.func
};

exports.default = ArticleListItem;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ArticleListItem = __webpack_require__(158);

var _ArticleListItem2 = _interopRequireDefault(_ArticleListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ArticleListItem2.default;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _Checkbox = __webpack_require__(227);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _RadioButton = __webpack_require__(39);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _post = __webpack_require__(18);

var _ArticleForm = __webpack_require__(161);

var _ArticleForm2 = _interopRequireDefault(_ArticleForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleEditor = function (_Component) {
  (0, _inherits3.default)(ArticleEditor, _Component);

  function ArticleEditor() {
    (0, _classCallCheck3.default)(this, ArticleEditor);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ArticleEditor).apply(this, arguments));
  }

  (0, _createClass3.default)(ArticleEditor, [{
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      var postData = {
        title: values.title,
        tags: values.tags,
        status: values.status,
        content: values.content,
        id: this.props.posts.current.id || '',
        origSlug: this.props.params.slug || ''
      };
      if (this.props.posts.isEditing === true) {
        var editId = this.props.posts.current.id;
        this.props.dispatch((0, _post.updatePost)(postData));
      } else {
        this.props.dispatch((0, _post.createPost)(postData));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_ArticleForm2.default, {
        initialValues: this.props.posts.current,
        editing: this.props.posts.isEditing,
        onSubmit: this.handleSubmit.bind(this)
      }));
    }
  }]);
  return ArticleEditor;
}(_react.Component);

ArticleEditor.propTypes = {
  dispatch: _react2.default.PropTypes.func,
  posts: _react2.default.PropTypes.object,
  params: _react2.default.PropTypes.object
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(ArticleEditor);

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderRichText = undefined;

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(249);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(7);

var _reduxForm = __webpack_require__(14);

var _FlatButton = __webpack_require__(31);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RadioButton = __webpack_require__(39);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _Paper = __webpack_require__(25);

var _Paper2 = _interopRequireDefault(_Paper);

var _RichText = __webpack_require__(69);

var _RadioButtonGroup = __webpack_require__(68);

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

var _TextField = __webpack_require__(35);

var _TextField2 = _interopRequireDefault(_TextField);

var _style = __webpack_require__(209);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);
var style = {
  block: {
    maxWidth: 250
  },
  toggle: {
    marginBottom: 16
  },
  margin: 12,
  radioButton: {
    marginBottom: 16
  }
};
var radioStyle = {
  display: 'inline',
  marginTop: '20px',
  float: 'right'
};

var renderRichText = exports.renderRichText = function renderRichText(field) {
  return (0, _jsx3.default)(_RichText.RichTextInput, {
    name: field.name,
    label: field.name
  }, field.name);
};

var _ref = (0, _jsx3.default)(_reduxForm.Field, {
  name: 'title',
  type: 'text',
  component: _TextField2.default,
  floatingLabelText: 'Post Title'
});

var _ref2 = (0, _jsx3.default)(_reduxForm.Field, {
  name: 'tags',
  type: 'text',
  hintText: 'Separate using commas',
  component: _TextField2.default,
  floatingLabelText: 'Tags'
});

var _ref3 = (0, _jsx3.default)(_reduxForm.Field, {
  name: 'featureImage',
  type: 'text',
  hintText: 'URL for your image',
  component: _TextField2.default,
  floatingLabelText: 'Feature Image'
});

var _ref4 = (0, _jsx3.default)(_reduxForm.Field, {
  name: 'excerpt',
  type: 'text',
  component: _TextField2.default,
  hintText: 'A short summary or highlight',
  floatingLabelText: 'Excerpt',
  fullWidth: true,
  multiLine: true
});

var _ref5 = (0, _jsx3.default)(_RaisedButton2.default, {
  type: 'submit',
  secondary: true,
  label: 'Publish',
  style: style
});

var _ref6 = (0, _jsx3.default)(_Paper2.default, {
  zDepth: 3
}, void 0, (0, _jsx3.default)(_reduxForm.Field, {
  name: 'content',
  component: renderRichText
}));

var NewArticleForm = function (_Component) {
  (0, _inherits3.default)(NewArticleForm, _Component);

  function NewArticleForm(props) {
    (0, _classCallCheck3.default)(this, NewArticleForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(NewArticleForm).call(this, props));

    _this.onChange = function (value) {
      _this.setState({
        value: value
      });
    };

    _this.renderReturnedContent = function (value) {
      return _this._renderReturnedContent(value);
    };

    _this.state = {
      tags: [],
      open: false,
      files: []
    };
    return _this;
  }

  (0, _createClass3.default)(NewArticleForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var handleSubmit = _props.handleSubmit;
      var pristine = _props.pristine;
      var reset = _props.reset;
      var submitting = _props.submitting;
      var editorState = this.state.editorState;

      return (0, _jsx3.default)('section', {}, void 0, (0, _jsx3.default)('form', {
        onSubmit: handleSubmit
      }, void 0, (0, _jsx3.default)('div', {
        className: cx('articleEditor__left')
      }, void 0, (0, _jsx3.default)(_Paper2.default, {
        zDepth: 3,
        style: {
          padding: 40
        }
      }, void 0, (0, _jsx3.default)('div', {
        className: cx('row')
      }, void 0, _ref), this.props.editing ? null : (0, _jsx3.default)('div', {
        className: cx('row')
      }, void 0, _ref2), (0, _jsx3.default)('div', {
        className: cx('row')
      }, void 0, _ref3), (0, _jsx3.default)('div', {
        className: cx('row')
      }, void 0, _ref4), (0, _jsx3.default)('div', {
        className: cx('row')
      }, void 0, (0, _jsx3.default)(_reduxForm.Field, {
        name: 'status',
        component: _RadioButtonGroup2.default
      }, void 0, (0, _jsx3.default)(_RadioButton.RadioButton, {
        value: 'draft',
        label: 'Draft',
        style: _style2.default.radioButton
      }), (0, _jsx3.default)(_RadioButton.RadioButton, {
        value: 'published',
        label: 'Published',
        style: _style2.default.radioButton
      }), (0, _jsx3.default)(_RadioButton.RadioButton, {
        value: 'archived',
        label: 'Archived',
        style: _style2.default.radioButton
      }))), (0, _jsx3.default)('div', {
        style: { marginTop: '1em' }
      }, void 0, _ref5))), (0, _jsx3.default)('div', {
        className: cx('articleEditor__right')
      }, void 0, _ref6)));
    }
  }]);
  return NewArticleForm;
}(_react.Component);

exports.default = (0, _reduxForm.reduxForm)({
  form: 'NewArticleForm'
})(NewArticleForm);


NewArticleForm.propTypes = {
  handleSubmit: _react.PropTypes.func.isRequired,
  editing: _react.PropTypes.bool,
  reset: _react.PropTypes.func,
  submitting: _react.PropTypes.bool,
  fields: _react.PropTypes.object,
  pristine: _react.PropTypes.bool
};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ArticleEditor = __webpack_require__(160);

var _ArticleEditor2 = _interopRequireDefault(_ArticleEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ArticleEditor2.default;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Articles = __webpack_require__(157);

var _Articles2 = _interopRequireDefault(_Articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Articles2.default;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _org = __webpack_require__(153);

var _org2 = _interopRequireDefault(_org);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {
  className: 'grid__row'
}, void 0, (0, _jsx3.default)('div', {
  className: 'grid__quarter'
}, void 0, (0, _jsx3.default)(_org2.default, {
  name: 'Widget A'
})), (0, _jsx3.default)('div', {
  className: 'grid__quarter'
}, void 0, (0, _jsx3.default)(_org2.default, {
  name: 'Widget C'
})), (0, _jsx3.default)('div', {
  className: 'grid__half'
}, void 0, (0, _jsx3.default)(_org2.default, {
  name: 'Widget D'
})));

var _ref2 = (0, _jsx3.default)(_org2.default, {
  name: 'Widget E'
});

var DashboardWidgets = function (_Component) {
  (0, _inherits3.default)(DashboardWidgets, _Component);

  function DashboardWidgets() {
    (0, _classCallCheck3.default)(this, DashboardWidgets);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(DashboardWidgets).apply(this, arguments));
  }

  (0, _createClass3.default)(DashboardWidgets, [{
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, _ref, (0, _jsx3.default)('div', {
        className: 'grid__row',
        style: { marginTop: '1.5em' }
      }, void 0, _ref2));
    }
  }]);
  return DashboardWidgets;
}(_react.Component);

exports.default = DashboardWidgets;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DashboardWidgets = __webpack_require__(164);

var _DashboardWidgets2 = _interopRequireDefault(_DashboardWidgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DashboardWidgets2.default;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _redial = __webpack_require__(13);

var _IconMenu = __webpack_require__(32);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = __webpack_require__(23);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FlatButton = __webpack_require__(31);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Dialog = __webpack_require__(260);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FontIcon = __webpack_require__(263);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _expandMore = __webpack_require__(268);

var _expandMore2 = _interopRequireDefault(_expandMore);

var _MenuItem = __webpack_require__(24);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DropDownMenu = __webpack_require__(262);

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _RaisedButton = __webpack_require__(8);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Toolbar = __webpack_require__(230);

var _Paper = __webpack_require__(25);

var _Paper2 = _interopRequireDefault(_Paper);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _atm = __webpack_require__(76);

var _atm2 = _interopRequireDefault(_atm);

var _inlineStyles = __webpack_require__(10);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _config = __webpack_require__(16);

var _media = __webpack_require__(52);

var _mol = __webpack_require__(168);

var _mol2 = _interopRequireDefault(_mol);

var _style = __webpack_require__(212);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var _ref = (0, _jsx3.default)(_MenuItem2.default, {
  value: 1,
  primaryText: 'All Files'
});

var _ref2 = (0, _jsx3.default)(_MenuItem2.default, {
  value: 2,
  primaryText: 'All Photos'
});

var _ref3 = (0, _jsx3.default)(_Toolbar.ToolbarTitle, {
  text: 'Upload a file'
});

var _ref4 = (0, _jsx3.default)(_FontIcon2.default, {
  className: 'muidocs-icon-custom-sort'
});

var _ref5 = (0, _jsx3.default)(_Toolbar.ToolbarSeparator, {});

var _ref6 = (0, _jsx3.default)(_IconMenu2.default, {
  iconButtonElement: (0, _jsx3.default)(_IconButton2.default, {
    touch: true
  }, void 0, (0, _jsx3.default)(_expandMore2.default, {}))
}, void 0, (0, _jsx3.default)(_MenuItem2.default, {
  primaryText: 'Download'
}), (0, _jsx3.default)(_MenuItem2.default, {
  primaryText: 'More Info'
}));

var Media = function (_Component) {
  (0, _inherits3.default)(Media, _Component);

  function Media(props) {
    (0, _classCallCheck3.default)(this, Media);

    var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Media).call(this, props));

    _this.handleOpen = function () {
      _this.setState({ open: true });
    };

    _this.handleClose = function () {
      _this.setState({ open: false });
    };

    _this.handleChange = function (event, index, value) {
      return _this.setState({ value: value });
    };

    _this.state = {
      value: 3,
      open: false
    };
    return _this;
  }

  (0, _createClass3.default)(Media, [{
    key: 'handleFinish',
    value: function handleFinish(signResult) {
      var signUrl = signResult.signedUrl;
      var splitUrl = signUrl.split('?');
      var url = splitUrl[0];
      var payload = {
        filename: signResult.filename,
        s3url: url
      };
      this.props.uploadFiles(payload);
    }
  }, {
    key: 'render',
    value: function render() {
      var actions = [(0, _jsx3.default)(_FlatButton2.default, {
        label: 'Close',
        primary: true,
        onTouchTap: this.handleClose
      })];
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Paper2.default, {}, void 0, (0, _jsx3.default)(_Toolbar.Toolbar, {
        style: _inlineStyles2.default.toolbar
      }, void 0, (0, _jsx3.default)(_Toolbar.ToolbarGroup, {
        firstChild: true
      }, void 0, (0, _jsx3.default)(_DropDownMenu2.default, {
        value: this.state.value,
        onChange: this.handleChange
      }, void 0, _ref, _ref2)), (0, _jsx3.default)(_Toolbar.ToolbarGroup, {}, void 0, _ref3, _ref4, _ref5, (0, _jsx3.default)(_atm2.default, {
        style: { paddingTop: '10px', paddingLeft: '5px', verticalAlign: 'middle' },
        signingUrl: '' + _config.S3_SIGNING_URL,
        accept: 'image/*',
        onProgress: _atm2.default.onUploadProgress,
        onError: _atm2.default.onUploadError,
        onFinish: this.handleFinish.bind(this),
        uploadRequestHeaders: { 'x-amz-acl': 'public-read' },
        contentDisposition: 'auto',
        server: '' + _config.API_BASE
      }), _ref6)), (0, _jsx3.default)(_mol2.default, {
        files: this.props.media.files
      })));
    }
  }]);
  return Media;
}(_react.Component);

Media.propTypes = {
  uploadFiles: _react2.default.PropTypes.func,
  media: _react2.default.PropTypes.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    media: state.media
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { uploadFiles: _media.uploadFiles })(Media);

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GridList = __webpack_require__(264);

var _IconButton = __webpack_require__(23);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Subheader = __webpack_require__(61);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _starBorder = __webpack_require__(269);

var _starBorder2 = _interopRequireDefault(_starBorder);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _style = __webpack_require__(211);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var FileView = function FileView(props) {
  return (0, _jsx3.default)('div', {
    className: cx('fileview__wrap')
  }, void 0, props.files.map(function (file) {
    return (0, _jsx3.default)('div', {
      className: cx('Fileview__card')
    }, file.id, (0, _jsx3.default)('img', {
      className: cx('fileview__img'),
      src: file.s3url
    }));
  }));
};

exports.default = FileView;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FileView = __webpack_require__(167);

var _FileView2 = _interopRequireDefault(_FileView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FileView2.default;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Media = __webpack_require__(166);

var _Media2 = _interopRequireDefault(_Media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Media2.default;

/***/ },
/* 170 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_MEDIA_REQUEST = exports.GET_MEDIA_REQUEST = 'GET_MEDIA_REQUEST';
var GET_MEDIA_SUCCESS = exports.GET_MEDIA_SUCCESS = 'GET_MEDIA_SUCCESS';
var GET_MEDIA_FAIL = exports.GET_MEDIA_FAIL = 'GET_MEDIA_FAIL';

var UPLOAD_REQUEST = exports.UPLOAD_REQUEST = 'UPLOAD_REQUEST';
var UPLOAD_SUCCESS = exports.UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
var UPLOAD_FAIL = exports.UPLOAD_FAIL = 'UPLOAD_FAIL';

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pages = function Pages(props) {
  return (0, _jsx3.default)('div', {}, void 0, props.children);
};

exports.default = Pages;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pages = __webpack_require__(171);

var _Pages2 = _interopRequireDefault(_Pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Pages2.default;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _redial = __webpack_require__(13);

var _IconButton = __webpack_require__(23);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = __webpack_require__(40);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _IconMenu = __webpack_require__(32);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = __webpack_require__(24);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Paper = __webpack_require__(25);

var _Paper2 = _interopRequireDefault(_Paper);

var _Tabs = __webpack_require__(266);

var _boldr = __webpack_require__(29);

var _mol = __webpack_require__(175);

var _mol2 = _interopRequireDefault(_mol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconButtonElement = (0, _jsx3.default)(_IconButton2.default, {
  touch: true,
  tooltip: 'more'
}, void 0, (0, _jsx3.default)(_moreVert2.default, {}));

var rightIconMenu = (0, _jsx3.default)(_IconMenu2.default, {
  iconButtonElement: iconButtonElement
}, void 0, (0, _jsx3.default)(_MenuItem2.default, {}, void 0, 'View'), (0, _jsx3.default)(_MenuItem2.default, {}, void 0, 'Modify'));

var _ref = (0, _jsx3.default)(_Tabs.Tab, {
  label: 'Soon'
}, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'This is empty')));

var _ref2 = (0, _jsx3.default)(_Tabs.Tab, {
  label: 'Soon'
}, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'This is empty')));

var Settings = function (_Component) {
  (0, _inherits3.default)(Settings, _Component);

  function Settings() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Settings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(Settings)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Settings, [{
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Paper2.default, {}, void 0, (0, _jsx3.default)(_Tabs.Tabs, {}, void 0, (0, _jsx3.default)(_Tabs.Tab, {
        label: 'General'
      }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_mol2.default, {
        settings: this.props.boldr
      }))), _ref, _ref2)));
    }
  }]);
  return Settings;
}(_react.Component);

Settings.propTypes = {
  boldr: _react.PropTypes.object
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    boldr: state.boldr,
    isLoading: state.boldr.isLoading
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Settings);

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _Avatar = __webpack_require__(226);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Subheader = __webpack_require__(61);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _List = __webpack_require__(60);

var _styles = __webpack_require__(213);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_styles2.default);

var _ref = (0, _jsx3.default)(_Subheader2.default, {}, void 0, 'The basic information of your webiste.');

var GeneralTab = function GeneralTab(props) {
  return (0, _jsx3.default)('div', {
    className: cx('root')
  }, void 0, (0, _jsx3.default)(_List.List, {}, void 0, _ref, (0, _jsx3.default)(_List.ListItem, {
    primaryText: 'Site name',
    secondaryText: props.settings.siteName
  }), (0, _jsx3.default)(_List.ListItem, {
    primaryText: 'Logo',
    leftAvatar: (0, _jsx3.default)(_Avatar2.default, {
      src: props.settings.logo
    }),
    secondaryText: 'Your sites logo'
  }), (0, _jsx3.default)(_List.ListItem, {
    primaryText: 'Favicon',
    leftAvatar: (0, _jsx3.default)(_Avatar2.default, {
      src: props.settings.favicon
    }),
    secondaryText: 'The favicon chosen for your website'
  }), (0, _jsx3.default)(_List.ListItem, {
    primaryText: 'Website URL',
    secondaryText: props.settings.siteUrl
  }), (0, _jsx3.default)(_List.ListItem, {
    primaryText: 'Description of site',
    secondaryText: props.settings.description
  })), props.settings.allowRegistration);
};
GeneralTab.propTypes = {
  settings: _react.PropTypes.object
};
exports.default = GeneralTab;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GeneralTab = __webpack_require__(174);

var _GeneralTab2 = _interopRequireDefault(_GeneralTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _GeneralTab2.default;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Settings = __webpack_require__(173);

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Settings2.default;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _redial = __webpack_require__(13);

var _mol = __webpack_require__(53);

var _mol2 = _interopRequireDefault(_mol);

var _siteUsers = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = function (_Component) {
  (0, _inherits3.default)(Users, _Component);

  function Users() {
    (0, _classCallCheck3.default)(this, Users);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Users).apply(this, arguments));
  }

  (0, _createClass3.default)(Users, [{
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_mol2.default, {
        users: this.props.siteUsers.users
      }));
    }
  }]);
  return Users;
}(_react.Component); /* eslint-disable react/prefer-stateless-function */


Users.propTypes = {
  siteUsers: _react.PropTypes.object
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    siteUsers: state.siteUsers
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Users);

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersList = undefined;

var _mol = __webpack_require__(53);

var _mol2 = _interopRequireDefault(_mol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.UsersList = _mol2.default;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(265);

var _Subheader = __webpack_require__(61);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Divider = __webpack_require__(261);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_Table.TableHeader, {}, void 0, (0, _jsx3.default)(_Table.TableRow, {}, void 0, (0, _jsx3.default)(_Table.TableHeaderColumn, {}, void 0, 'ID'), (0, _jsx3.default)(_Table.TableHeaderColumn, {}, void 0, 'Name'), (0, _jsx3.default)(_Table.TableHeaderColumn, {}, void 0, 'Email'), (0, _jsx3.default)(_Table.TableHeaderColumn, {}, void 0, 'Role')));

var UsersList = function UsersList(props) {
  return (0, _jsx3.default)(_Table.Table, {}, void 0, _ref, (0, _jsx3.default)(_Table.TableBody, {}, void 0, props.users.map(function (user) {
    return (0, _jsx3.default)(_Table.TableRow, {}, user.id, (0, _jsx3.default)(_Table.TableRowColumn, {}, void 0, user.id), (0, _jsx3.default)(_Table.TableRowColumn, {}, void 0, user.profile.name), (0, _jsx3.default)(_Table.TableRowColumn, {}, void 0, user.email), (0, _jsx3.default)(_Table.TableRowColumn, {}, void 0, user.profile.role));
  })));
};

exports.default = UsersList;


UsersList.propTypes = {
  users: _react2.default.PropTypes.array

};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(178);

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

var _state = __webpack_require__(181);

Object.keys(_state).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _state[key];
    }
  });
});

var _Users = __webpack_require__(177);

var _Users2 = _interopRequireDefault(_Users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Users2.default;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _siteUsers = __webpack_require__(38);

Object.keys(_siteUsers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _siteUsers[key];
    }
  });
});

var _siteUsers2 = _interopRequireDefault(_siteUsers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _siteUsers2.default;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(20);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _org = __webpack_require__(22);

var _org2 = _interopRequireDefault(_org);

var _index = __webpack_require__(36);

var _Home = __webpack_require__(215);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Home2.default);

var _ref = (0, _jsx3.default)(_reactHelmet2.default, {
  title: 'Home'
});

var _ref2 = (0, _jsx3.default)(_org2.default, {
  theme: 'dark'
});

var _ref3 = (0, _jsx3.default)(_index.Hero, {});

var _ref4 = (0, _jsx3.default)(_index.Heading, {
  size: 1
}, void 0, 'Welcome to the Home. Stay tuned...');

var Home = function Home() {
  return (0, _jsx3.default)('div', {}, void 0, _ref, _ref2, _ref3, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('section', {
    className: cx('root')
  }, void 0, _ref4)));
};
exports.default = Home;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(182);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Home2.default;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(7);

var _org = __webpack_require__(186);

var _org2 = _interopRequireDefault(_org);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
    isLoading: state.users.isLoading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_org2.default);

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _Card = __webpack_require__(11);

var _FlatButton = __webpack_require__(31);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _List = __webpack_require__(60);

var _redial = __webpack_require__(13);

var _bind = __webpack_require__(2);

var _bind2 = _interopRequireDefault(_bind);

var _account = __webpack_require__(17);

var _org = __webpack_require__(22);

var _org2 = _interopRequireDefault(_org);

var _inlineStyles = __webpack_require__(10);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _style = __webpack_require__(216);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var _ref = (0, _jsx3.default)(_org2.default, {
  theme: 'dark'
});

var _ref2 = (0, _jsx3.default)(_Card.CardTitle, {
  title: 'Card',
  subtitle: 'Card subtitle'
});

var _ref3 = (0, _jsx3.default)(_Card.CardText, {}, void 0, 'displayName email firstName lastName bio gender birthday location website picture');

var _ref4 = (0, _jsx3.default)(_Card.CardActions, {}, void 0, (0, _jsx3.default)(_FlatButton2.default, {
  label: 'Action1'
}), (0, _jsx3.default)(_FlatButton2.default, {
  label: 'Action2'
}));

var _ref5 = (0, _jsx3.default)(_Card.CardTitle, {
  title: 'Card',
  subtitle: 'Card subtitle'
});

var _ref6 = (0, _jsx3.default)(_Card.CardActions, {}, void 0, (0, _jsx3.default)(_FlatButton2.default, {
  label: 'Action1'
}), (0, _jsx3.default)(_FlatButton2.default, {
  label: 'Action2'
}));

var ProfileMain = function (_Component) {
  (0, _inherits3.default)(ProfileMain, _Component);

  function ProfileMain() {
    (0, _classCallCheck3.default)(this, ProfileMain);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ProfileMain).apply(this, arguments));
  }

  (0, _createClass3.default)(ProfileMain, [{
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
        style: _inlineStyles2.default.headerOverflow
      }, void 0, _ref), (0, _jsx3.default)('div', {
        className: 'grid'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'grid__row'
      }, void 0, (0, _jsx3.default)('div', {
        className: cx('profile__editor')
      }, void 0, (0, _jsx3.default)(_Card.Card, {}, void 0, (0, _jsx3.default)(_Card.CardHeader, {
        title: this.props.users.firstName,
        subtitle: 'Subtitle',
        avatar: this.props.users.avatarUrl
      }), _ref2, _ref3, _ref4)), (0, _jsx3.default)(_Card.Card, {
        className: cx('profile__card')
      }, void 0, (0, _jsx3.default)(_Card.CardHeader, {
        title: this.props.users.firstName,
        subtitle: 'Subtitle',
        avatar: this.props.users.picture
      }), _ref5, (0, _jsx3.default)(_Card.CardText, {}, void 0, (0, _jsx3.default)(_List.List, {}, void 0, (0, _jsx3.default)(_List.ListItem, {
        primaryText: this.props.users.displayName
      }), (0, _jsx3.default)(_List.ListItem, {
        primaryText: this.props.users.email
      }), (0, _jsx3.default)(_List.ListItem, {
        primaryText: this.props.users.firstName
      }), (0, _jsx3.default)(_List.ListItem, {
        primaryText: this.props.users.lastName
      }), (0, _jsx3.default)(_List.ListItem, {
        primaryText: this.props.users.gender
      }), (0, _jsx3.default)(_List.ListItem, {
        primaryText: this.props.users.birthday
      }), (0, _jsx3.default)(_List.ListItem, {
        primaryText: this.props.users.location
      }), (0, _jsx3.default)(_List.ListItem, {
        primaryText: this.props.users.website
      }), (0, _jsx3.default)(_List.ListItem, {
        primaryText: this.props.users.avatarUrl
      }))), _ref6))));
    }
  }]);
  return ProfileMain;
}(_react.Component);

ProfileMain.propTypes = {
  users: _react.PropTypes.object.isRequired
};

exports.default = ProfileMain;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProfileMain = __webpack_require__(185);

var _ProfileMain2 = _interopRequireDefault(_ProfileMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ProfileMain2.default;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _Card = __webpack_require__(11);

var _FlatButton = __webpack_require__(31);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _redial = __webpack_require__(13);

var _account = __webpack_require__(17);

var _org = __webpack_require__(22);

var _org2 = _interopRequireDefault(_org);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @provideHooks({
//   fetch: ({ dispatch }) => dispatch(getPublicProfile(this.props.routeParams.id))
// })
var _ref = (0, _jsx3.default)(_org2.default, {
  theme: 'dark'
});

var _ref2 = (0, _jsx3.default)(_Card.Card, {}, void 0, (0, _jsx3.default)(_Card.CardHeader, {
  title: 'title',
  subtitle: 'Subtitle',
  avatar: 'http://lorempixel.com/100/100/nature/'
}), (0, _jsx3.default)(_Card.CardTitle, {
  title: 'Card',
  subtitle: 'Card subtitle'
}), (0, _jsx3.default)(_Card.CardText, {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'), (0, _jsx3.default)(_Card.CardActions, {}, void 0, (0, _jsx3.default)(_FlatButton2.default, {
  label: 'Action1'
}), (0, _jsx3.default)(_FlatButton2.default, {
  label: 'Action2'
})));

var ProfilePublic = function (_Component) {
  (0, _inherits3.default)(ProfilePublic, _Component);

  function ProfilePublic() {
    (0, _classCallCheck3.default)(this, ProfilePublic);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ProfilePublic).apply(this, arguments));
  }

  (0, _createClass3.default)(ProfilePublic, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getPublicProfile(this.props.params.id);
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
        style: { backgroundColor: '#324A70', height: '110px', width: '100%' }
      }, void 0, _ref), _ref2);
    }
  }]);
  return ProfilePublic;
}(_react.Component);

ProfilePublic.propTypes = {
  account: _react.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    account: state.account,
    isLoading: state.account.isLoading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getPublicProfile: _account.getPublicProfile })(ProfilePublic);

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProfilePublic = __webpack_require__(187);

var _ProfilePublic2 = _interopRequireDefault(_ProfilePublic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ProfilePublic2.default;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Profile = __webpack_require__(184);

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Profile2.default;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxAuthWrapper = __webpack_require__(43);

var _reactRouterRedux = __webpack_require__(12);

var _index = __webpack_require__(156);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(114);

var _index4 = _interopRequireDefault(_index3);

var _Blog = __webpack_require__(141);

var _Blog2 = _interopRequireDefault(_Blog);

var _auth = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorLoading = function errorLoading(err) {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

var loadModule = function loadModule(cb) {
  return function (componentModule) {
    cb(null, componentModule.default);
  };
};
var UserIsAuthenticated = (0, _reduxAuthWrapper.UserAuthWrapper)({
  authSelector: function authSelector(state) {
    return state.auth;
  }, // how to get the user state
  failureRedirectPath: '/account/login',
  redirectAction: _reactRouterRedux.routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
  predicate: function predicate(auth) {
    return auth.isAuthenticated === true;
  },
  allowRedirectBack: true
});

exports.default = function (store) {
  var connect = function connect(fn) {
    return function (nextState, replaceState) {
      return fn(store, nextState, replaceState);
    };
  };
  if (false) require.ensure = function (deps, cb) {
    return cb(require);
  };

  return {
    path: '/',
    component: __webpack_require__(145).default,
    indexRoute: {
      component: __webpack_require__(183).default
    },
    childRoutes: [(0, _index2.default)(store, connect), (0, _index4.default)(store, connect), (0, _Blog2.default)(store, connect), {
      path: 'about',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 102)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'profile',
      onEnter: connect(UserIsAuthenticated.onEnter),
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
          cb(null, UserIsAuthenticated(__webpack_require__(189).default));
        }).bind(null, __webpack_require__));
      }
    }, {
      path: 'profile/public/:id',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
          cb(null, __webpack_require__(188).default);
        }).bind(null, __webpack_require__));
      }
    }]
  };
};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(65);

var _server2 = _interopRequireDefault(_server);

var _serializeJavascript = __webpack_require__(257);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(20);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_reactHelmet2.default, {});

var _ref2 = (0, _jsx3.default)('meta', {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1'
});

var Html = function (_Component) {
  (0, _inherits3.default)(Html, _Component);

  function Html() {
    (0, _classCallCheck3.default)(this, Html);
    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(Html).apply(this, arguments));
  }

  (0, _createClass3.default)(Html, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var assets = _props.assets;
      var component = _props.component;
      var store = _props.store;

      var content = component ? _server2.default.renderToString(component) : '';
      var head = _reactHelmet2.default.rewind();

      return (0, _jsx3.default)('html', {
        lang: 'en-us'
      }, void 0, (0, _jsx3.default)('head', {}, void 0, _ref, head.base.toComponent(), head.title.toComponent(), head.meta.toComponent(), head.link.toComponent(), head.script.toComponent(), _ref2, this.styles), (0, _jsx3.default)('body', {
        className: 'layout'
      }, void 0, (0, _jsx3.default)('div', {
        id: 'content',
        dangerouslySetInnerHTML: { __html: content }
      }), (0, _jsx3.default)('script', {
        dangerouslySetInnerHTML: {
          __html: 'window.__data=' + (0, _serializeJavascript2.default)(store.getState()) + ';' },
        charSet: 'UTF-8'
      }), (0, _jsx3.default)('script', {
        src: assets.javascript.vendor,
        charSet: 'UTF-8'
      }), (0, _jsx3.default)('script', {
        src: assets.javascript.main,
        charSet: 'UTF-8'
      })));
    }
  }, {
    key: 'styles',
    get: function get() {
      var assets = this.props.assets;
      var styles = assets.styles;
      var _assets = assets.assets;

      var stylesArray = Object.keys(styles);

      if (stylesArray.length !== 0) {
        return stylesArray.map(function (style, i) {
          return (0, _jsx3.default)('link', {
            href: assets.styles[style],
            rel: 'stylesheet',
            type: 'text/css'
          }, i);
        });
      }

      var scssPaths = Object.keys(_assets).filter(function (asset) {
        return asset.includes('.scss');
      });
      return scssPaths.map(function (style, i) {
        return (0, _jsx3.default)('style', {
          dangerouslySetInnerHTML: { __html: _assets[style]._style }
        }, i);
      });
    }
  }]);
  return Html;
}(_react.Component);

Html.propTypes = {
  assets: _react.PropTypes.object,
  component: _react.PropTypes.node,
  store: _react.PropTypes.object
};
exports.default = Html;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _path = __webpack_require__(247);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(222);

var _express2 = _interopRequireDefault(_express);

var _httpProxy = __webpack_require__(224);

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _compression = __webpack_require__(220);

var _compression2 = _interopRequireDefault(_compression);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(65);

var _server2 = _interopRequireDefault(_server);

var _match = __webpack_require__(255);

var _match2 = _interopRequireDefault(_match);

var _createMemoryHistory = __webpack_require__(254);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _RouterContext = __webpack_require__(252);

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _reactRouterRedux = __webpack_require__(12);

var _reactRedux = __webpack_require__(7);

var _redial = __webpack_require__(13);

var _getMuiTheme = __webpack_require__(233);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(232);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _materialTheme = __webpack_require__(48);

var _materialTheme2 = _interopRequireDefault(_materialTheme);

var _createStore = __webpack_require__(96);

var _createStore2 = _interopRequireDefault(_createStore);

var _index = __webpack_require__(190);

var _index2 = _interopRequireDefault(_index);

var _Html = __webpack_require__(191);

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create our express server.

// React Deps
var app = (0, _express2.default)();

var proxy = _httpProxy2.default.createProxyServer({
  target: 'http://localhost:9121',
  changeOrigin: true
});

app.use('/api/v1/*', function (req, res) {
  var url = 'http://localhost:9121' + req.originalUrl;
  proxy.web(req, res, { target: url }); // eslint-disable-line
});

app.use((0, _compression2.default)());
app.use(_express2.default.static(_path2.default.resolve('public')));

app.use(function (req, res) {
  if (false) {
    webpackIsomorphicTools.refresh();
  }
  var memoryHistory = (0, _createMemoryHistory2.default)(req.originalUrl);
  var location = memoryHistory.createLocation(req.originalUrl);
  var store = (0, _createStore2.default)(memoryHistory);
  var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);

  function hydrateOnClient() {
    res.send('<!doctype html>\n' + // eslint-disable-line
    _server2.default.renderToString((0, _jsx3.default)(_Html2.default, {
      assets: webpackIsomorphicTools.assets(),
      store: store
    })));
  }

  if (false) {
    hydrateOnClient();
    return;
  }

  (0, _match2.default)({
    history: history,
    routes: (0, _index2.default)(store),
    location: location
  }, function (error, redirectLocation, renderProps) {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      var dispatch = store.dispatch;


      var locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        dispatch: dispatch
      };

      var components = renderProps.components;


      (0, _redial.trigger)('fetch', components, locals).then(function () {

        var muiTheme = (0, _getMuiTheme2.default)(_materialTheme2.default, {
          userAgent: req.headers['user-agent']
        });
        var component = (0, _jsx3.default)(_reactRedux.Provider, {
          store: store
        }, 'provider', (0, _jsx3.default)(_MuiThemeProvider2.default, {
          muiTheme: muiTheme
        }, void 0, _react2.default.createElement(_RouterContext2.default, renderProps)));
        res.status(200);

        res.send('<!doctype html>\n' + // eslint-disable-line
        _server2.default.renderToString((0, _jsx3.default)(_Html2.default, {
          assets: webpackIsomorphicTools.assets(),
          component: component,
          store: store
        })));
      }).catch(function (mountError) {
        console.log(mountError.stack);
        return res.status(500);
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

exports.default = app;

/***/ },
/* 193 */
/***/ function(module, exports) {



/***/ },
/* 194 */
/***/ function(module, exports) {



/***/ },
/* 195 */
/***/ function(module, exports) {



/***/ },
/* 196 */
/***/ function(module, exports) {



/***/ },
/* 197 */
/***/ function(module, exports) {



/***/ },
/* 198 */
/***/ function(module, exports) {



/***/ },
/* 199 */
/***/ function(module, exports) {



/***/ },
/* 200 */
/***/ function(module, exports) {



/***/ },
/* 201 */
/***/ function(module, exports) {



/***/ },
/* 202 */
/***/ function(module, exports) {



/***/ },
/* 203 */
/***/ function(module, exports) {



/***/ },
/* 204 */
/***/ function(module, exports) {



/***/ },
/* 205 */
/***/ function(module, exports) {



/***/ },
/* 206 */
/***/ function(module, exports) {



/***/ },
/* 207 */
/***/ function(module, exports) {



/***/ },
/* 208 */
/***/ function(module, exports) {



/***/ },
/* 209 */
/***/ function(module, exports) {



/***/ },
/* 210 */
/***/ function(module, exports) {



/***/ },
/* 211 */
/***/ function(module, exports) {



/***/ },
/* 212 */
/***/ function(module, exports) {



/***/ },
/* 213 */
/***/ function(module, exports) {



/***/ },
/* 214 */
/***/ function(module, exports) {



/***/ },
/* 215 */
/***/ function(module, exports) {



/***/ },
/* 216 */
/***/ function(module, exports) {



/***/ },
/* 217 */
/***/ function(module, exports) {

module.exports = [
	{
		"name": "About",
		"id": "about",
		"simpleList": true,
		"mobileHref": "#",
		"childrens": [
			{
				"componentType": "list",
				"key": "about-list",
				"items": [
					{
						"name": "Motivation",
						"id": "motivation",
						"href": "#",
						"icon": ""
					},
					{
						"name": "Features",
						"id": "features",
						"href": "#",
						"icon": ""
					}
				]
			}
		]
	},
	{
		"name": "Content",
		"id": "content",
		"simpleList": true,
		"mobileHref": "#",
		"childrens": [
			{
				"componentType": "list",
				"key": "content-list",
				"hasArrows": true,
				"items": [
					{
						"name": "Overview",
						"id": "overview",
						"href": "#",
						"icon": ""
					}
				]
			}
		]
	},
	{
		"name": "Blog",
		"id": "blog",
		"href": "/blog"
	},
	{
		"name": "Documentation",
		"id": "documentation",
		"href": "#",
		"external": true
	},
	{
		"name": "More",
		"id": "more",
		"simpleList": true,
		"childrens": [
			{
				"componentType": "list",
				"title": "Additional info",
				"key": "adittional-list",
				"items": [
					{
						"name": "API",
						"id": "api",
						"href": "#"
					},
					{
						"name": "CMS",
						"id": "cms",
						"href": "#"
					},
					{
						"name": "Contribute",
						"id": "contribute",
						"href": "#"
					}
				]
			}
		]
	}
];

/***/ },
/* 218 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 219 */
/***/ function(module, exports) {

module.exports = require("bluebird");

/***/ },
/* 220 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 221 */
/***/ function(module, exports) {

module.exports = require("debug");

/***/ },
/* 222 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 223 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 224 */
/***/ function(module, exports) {

module.exports = require("http-proxy");

/***/ },
/* 225 */
/***/ function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ },
/* 226 */
/***/ function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ },
/* 227 */
/***/ function(module, exports) {

module.exports = require("material-ui/Checkbox");

/***/ },
/* 228 */
/***/ function(module, exports) {

module.exports = require("material-ui/CircularProgress");

/***/ },
/* 229 */
/***/ function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ },
/* 230 */
/***/ function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ },
/* 231 */
/***/ function(module, exports) {

module.exports = require("material-ui/styles");

/***/ },
/* 232 */
/***/ function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ },
/* 233 */
/***/ function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ },
/* 234 */
/***/ function(module, exports) {

module.exports = require("material-ui/styles/zIndex");

/***/ },
/* 235 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/action/bookmark");

/***/ },
/* 236 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/action/dashboard");

/***/ },
/* 237 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/action/perm-media");

/***/ },
/* 238 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/action/settings");

/***/ },
/* 239 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/action/toc");

/***/ },
/* 240 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/av/web");

/***/ },
/* 241 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/editor/mode-edit");

/***/ },
/* 242 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/menu");

/***/ },
/* 243 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/social/people");

/***/ },
/* 244 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/social/person");

/***/ },
/* 245 */
/***/ function(module, exports) {

module.exports = require("material-ui/utils/colorManipulator");

/***/ },
/* 246 */
/***/ function(module, exports) {

module.exports = require("node-fetch");

/***/ },
/* 247 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 248 */
/***/ function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ },
/* 249 */
/***/ function(module, exports) {

module.exports = require("react-dom");

/***/ },
/* 250 */
/***/ function(module, exports) {

module.exports = require("react-router/es6");

/***/ },
/* 251 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/Link");

/***/ },
/* 252 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/RouterContext");

/***/ },
/* 253 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/browserHistory");

/***/ },
/* 254 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/createMemoryHistory");

/***/ },
/* 255 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/match");

/***/ },
/* 256 */
/***/ function(module, exports) {

module.exports = require("redux-thunk");

/***/ },
/* 257 */
/***/ function(module, exports) {

module.exports = require("serialize-javascript");

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(66);


/***/ },
/* 259 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 260 */
/***/ function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ },
/* 261 */
/***/ function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ },
/* 262 */
/***/ function(module, exports) {

module.exports = require("material-ui/DropDownMenu");

/***/ },
/* 263 */
/***/ function(module, exports) {

module.exports = require("material-ui/FontIcon");

/***/ },
/* 264 */
/***/ function(module, exports) {

module.exports = require("material-ui/GridList");

/***/ },
/* 265 */
/***/ function(module, exports) {

module.exports = require("material-ui/Table");

/***/ },
/* 266 */
/***/ function(module, exports) {

module.exports = require("material-ui/Tabs");

/***/ },
/* 267 */
/***/ function(module, exports) {

module.exports = require("material-ui/Toggle");

/***/ },
/* 268 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/expand-more");

/***/ },
/* 269 */
/***/ function(module, exports) {

module.exports = require("material-ui/svg-icons/toggle/star-border");

/***/ },
/* 270 */
/***/ function(module, exports) {

module.exports = require("react-rte");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map