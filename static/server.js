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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 361);
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

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("classnames");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("react-redux");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccessibleFakeButton = exports.IconButton = exports.FloatingButton = exports.RaisedButton = exports.FlatButton = undefined;

var _Button = __webpack_require__(58);

var _Button2 = _interopRequireDefault(_Button);

var _FlatButton2 = __webpack_require__(36);

var _FlatButton3 = _interopRequireDefault(_FlatButton2);

var _RaisedButton2 = __webpack_require__(120);

var _RaisedButton3 = _interopRequireDefault(_RaisedButton2);

var _FloatingButton2 = __webpack_require__(119);

var _FloatingButton3 = _interopRequireDefault(_FloatingButton2);

var _IconButton2 = __webpack_require__(42);

var _IconButton3 = _interopRequireDefault(_IconButton2);

var _AccessibleFakeButton2 = __webpack_require__(57);

var _AccessibleFakeButton3 = _interopRequireDefault(_AccessibleFakeButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Button2.default;
exports.FlatButton = _FlatButton3.default;
exports.RaisedButton = _RaisedButton3.default;
exports.FloatingButton = _FloatingButton3.default;
exports.IconButton = _IconButton3.default;
exports.AccessibleFakeButton = _AccessibleFakeButton3.default;

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("react-dom");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notifications = exports.Col = exports.Row = exports.Grid = exports.Header = exports.S3Uploader = exports.Loader = exports.TextField = exports.RichText = exports.RadioButtonGroup = exports.SiteLogo = exports.Heading = exports.Hero = exports.BoldrLogo = undefined;

var _atm = __webpack_require__(69);

var _atm2 = _interopRequireDefault(_atm);

var _mol = __webpack_require__(179);

var _mol2 = _interopRequireDefault(_mol);

var _atm3 = __webpack_require__(107);

var _atm4 = _interopRequireDefault(_atm3);

var _atm5 = __webpack_require__(115);

var _atm6 = _interopRequireDefault(_atm5);

var _RadioButtonGroup = __webpack_require__(53);

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

var _RichText = __webpack_require__(70);

var _RichText2 = _interopRequireDefault(_RichText);

var _TextField = __webpack_require__(41);

var _TextField2 = _interopRequireDefault(_TextField);

var _atm7 = __webpack_require__(56);

var _atm8 = _interopRequireDefault(_atm7);

var _atm9 = __webpack_require__(116);

var _atm10 = _interopRequireDefault(_atm9);

var _atm11 = __webpack_require__(113);

var _atm12 = _interopRequireDefault(_atm11);

var _org = __webpack_require__(47);

var _org2 = _interopRequireDefault(_org);

var _org3 = __webpack_require__(200);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BoldrLogo = _atm2.default;
exports.Hero = _mol2.default;
exports.Heading = _atm4.default;
exports.SiteLogo = _atm6.default;
exports.RadioButtonGroup = _RadioButtonGroup2.default;
exports.RichText = _RichText2.default;
exports.TextField = _TextField2.default;
exports.Loader = _atm8.default;
exports.S3Uploader = _atm10.default;
exports.Header = _org2.default;
exports.Grid = _org3.Grid;
exports.Row = _org3.Row;
exports.Col = _org3.Col;
exports.Notifications = _atm12.default;

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("classnames/bind");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FontIcon = __webpack_require__(77);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FontIcon2.default;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardActionOverlay = exports.CardText = exports.CardActions = exports.CardMedia = exports.CardTitle = exports.Card = undefined;

var _Card = __webpack_require__(121);

var _Card2 = _interopRequireDefault(_Card);

var _CardTitle2 = __webpack_require__(73);

var _CardTitle3 = _interopRequireDefault(_CardTitle2);

var _CardMedia2 = __webpack_require__(123);

var _CardMedia3 = _interopRequireDefault(_CardMedia2);

var _CardActions2 = __webpack_require__(71);

var _CardActions3 = _interopRequireDefault(_CardActions2);

var _CardText2 = __webpack_require__(124);

var _CardText3 = _interopRequireDefault(_CardText2);

var _CardActionOverlay2 = __webpack_require__(122);

var _CardActionOverlay3 = _interopRequireDefault(_CardActionOverlay2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Card2.default;
exports.Card = _Card2.default;
exports.CardTitle = _CardTitle3.default;
exports.CardMedia = _CardMedia3.default;
exports.CardActions = _CardActions3.default;
exports.CardText = _CardText3.default;
exports.CardActionOverlay = _CardActionOverlay3.default;

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("redial");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This is the prefix for all of our API requests.
// You can leave as-is and the proxy will take care of everything
// If you change this value, the value in the server proxy will need to be changed
var API_BASE = exports.API_BASE = {"NODE_ENV":"production","SERVER_PORT":NaN}.API_BASE || '/api/v1';

var S3_SIGNING_URL = exports.S3_SIGNING_URL = '/s3/sign';
// Define all endpoints for easy imports.
var API_AUTH = exports.API_AUTH = API_BASE + '/auth';
var API_POSTS = exports.API_POSTS = API_BASE + '/posts';
var API_USERS = exports.API_USERS = API_BASE + '/users';
var API_MEDIA = exports.API_MEDIA = API_BASE + '/media';
var API_TAG = exports.API_TAG = API_BASE + '/tags';
var API_SETTINGS = exports.API_SETTINGS = API_BASE + '/settings';
var API_NAVIGATION = exports.API_NAVIGATION = API_BASE + '/navigations';
// Here you can change the name of the token that is put into localStorage.
var TOKEN_KEY = exports.TOKEN_KEY = 'token';

var API_TARGET = exports.API_TARGET = {"NODE_ENV":"production","SERVER_PORT":NaN}.API_TARGET || 'http://localhost:3000';

var API_PORT = exports.API_PORT = {"NODE_ENV":"production","SERVER_PORT":NaN}.API_PORT || 8121;
var API_HOST = exports.API_HOST = {"NODE_ENV":"production","SERVER_PORT":NaN}.API_HOST || 'localhost';
var SSR_PORT = exports.SSR_PORT = {"NODE_ENV":"production","SERVER_PORT":NaN}.SSR_PORT || 3000;
var HOST = exports.HOST = {"NODE_ENV":"production","SERVER_PORT":NaN}.HOST || 'localhost';

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("react-router-redux");

/***/ },
/* 19 */
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
  headerOverflow: {
    backgroundColor: midnightBlue,
    paddingTop: '50px',
    marginBottom: '50px'
  },
  underlineFocusStyle: {
    borderColor: cyanLike
  },
  headerColumn: {
    color: '#B3B3B3',
    fontWeight: 'bold'
  },
  row: {
    lineHeight: 1.6,
    fontSize: 14
  },
  rowColumn: {
    whiteSpace: 'normal',
    overFlow: 'visible',
    height: 70,
    paddingLeft: 16,
    paddingRight: 16
  },
  floatButton: {
    position: 'fixed',
    zIndex: 100,
    bottom: '5%',
    right: '3%'
  }
};

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notificationClear = exports.notificationDismiss = exports.notificationSend = exports.NOTIFICATION_CLEAR = exports.NOTIFICATION_DISMISS = exports.NOTIFICATION_SEND = undefined;

var _toConsumableArray2 = __webpack_require__(98);

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
/* 22 */
/***/ function(module, exports) {

module.exports = require("draft-js");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("superagent");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _injectInk = __webpack_require__(145);

var _injectInk2 = _interopRequireDefault(_injectInk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _injectInk2.default;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextField = __webpack_require__(172);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextField2.default;

/***/ },
/* 27 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getField = getField;
exports.setOverflow = setOverflow;
exports.isObject = isObject;
exports.getOffset = getOffset;
exports.getTouchOffset = getTouchOffset;
exports.isPointInCircle = isPointInCircle;
exports.easeInOut = easeInOut;
exports.animate = animate;
exports.onOutsideClick = onOutsideClick;
exports.isTouchDevice = isTouchDevice;
/* eslint-disable no-param-reassign */

/**
 * Gets the current field for a component that can the field
 * as either uncontrolled or controlled.
 *
 * @param {Object} props - the props object.
 * @param {Object} state = the state object.
 * @param {string=} field - the field to extract a value from. Defaults to 'value'.
 *
 * @return the field's value.
 */
function getField(props, state) {
  var field = arguments.length <= 2 || arguments[2] === undefined ? 'value' : arguments[2];

  return typeof props[field] !== 'undefined' ? props[field] : state[field];
}

function setOverflow(enabled, selector) {
  var el = selector ? document.querySelector(selector) : document.body;
  if (enabled) {
    el.classList.add('hide-overflow');
  } else {
    el.classList.remove('hide-overflow');
  }
}

/**
 * Checkis of the given thing is an object
 * @param thing the thing to check
 * @return true if the thing is an object
 */
function isObject(thing) {
  return Object.prototype.toString.call(thing) === '[object Object]';
}

function getScrollProp(key) {
  // document.body is deprecated for some browsers
  return Math.max(document.body[key], document.documentElement[key]);
}

function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScrollProp('scrollLeft'),
    top: rect.top + getScrollProp('scrollTop')
  };
}

/**
 * Generates an object of an offsetX and offsetY from
 * a mouse or touch event.
 *
 * @param {Object} event The event to extract data from
 * @return {Object} an object holding the offsetX and offsetY of the event.
 */
function getTouchOffset(event) {
  var el = event.target;
  var rect = el.getBoundingClientRect();

  var _ref = event.changedTouches ? event.changedTouches[0] : event;

  var clientX = _ref.clientX;
  var clientY = _ref.clientY;

  return {
    offsetX: clientX - rect.left,
    offsetY: clientY - rect.top
  };
}

/**
 * Determines if a point is in a circle.
 *
 * @param {Number} cx the center X coordinate in the circle
 * @param {Number} cy the center Y coordinate in the circle
 * @param {Number} r the radius of the circle
 * @param {Number} x the x coordinate to check
 * @param {Number} y the y coordinate to check
 * @return {bool} true if the given x and y coordinates are in the circle.
 */
function isPointInCircle(cx, cy, r, x, y) {
  var distance = Math.pow(cx - x, 2) + Math.pow(cy - y, 2);
  return distance <= Math.pow(r, 2);
}

function easeInOut(currentTime, start, change, duration) {
  currentTime /= duration / 2;
  if (currentTime < 1) {
    return change / 2 * currentTime * currentTime + start;
  }
  currentTime -= 1;
  return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}

/**
 *
 * @param el
 * @param increment
 * @param elapsedTime
 * @param transitionTime
 * @param styleName
 * @param currentValue
 * @param finalValue
 * @param next
 */
function animate(el, increment, elapsedTime, transitionTime, styleName, startValue, currentValue, finalValue, next) {
  elapsedTime += increment;
  el.style[styleName] = easeInOut(elapsedTime, startValue, finalValue, transitionTime) + 'px';

  if (elapsedTime < transitionTime) {
    setTimeout(function () {
      animate(el, increment, elapsedTime, transitionTime, styleName, startValue, currentValue, finalValue, next);
    }, increment);
  } else {
    next(elapsedTime);
  }
}

/**
 * Takes an event, a container node, and a function to call if the clicked
 * element is not inside of the container node.
 *
 * @param {Object} event the click event
 * @param {Object} node the container node to compare against
 * @param {func} callback the function to call if the clicked element
 *    is not inside the container node
 */
function onOutsideClick(event, node, callback) {
  var target = event.target;
  if (target === node) {
    return;
  }

  while (target.parentNode) {
    if (target === node) {
      return;
    }
    target = target.parentNode;
  }

  callback(event);
}

/**
 * Checks if touch events are in the browser.
 * @return {bool} true if it is a touch device
 */
function isTouchDevice() {
  return typeof window !== 'undefined' && ('ontouchstart' in window || !!navigator.maxTouchPoints);
}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

exports.fetchPostsIfNeeded = fetchPostsIfNeeded;
exports.fetchPosts = fetchPosts;
exports.createPost = createPost;
exports.selectPost = selectPost;
exports.default = postsReducer;

var _superagent = __webpack_require__(24);

var _superagent2 = _interopRequireDefault(_superagent);

var _reactRouterRedux = __webpack_require__(18);

var _fetch = __webpack_require__(31);

var _fetch2 = _interopRequireDefault(_fetch);

var _config = __webpack_require__(17);

var _notifications = __webpack_require__(21);

var _helpers = __webpack_require__(48);

var _constants = __webpack_require__(64);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestPosts = function requestPosts() {
  return { type: types.FETCH_POSTS_REQUEST };
};
var receivePosts = function receivePosts(json) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    results: json.results
  };
};
var receivePostsFailed = function receivePostsFailed(err) {
  return {
    type: types.FETCH_POSTS_FAILURE, error: err
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
  if (!posts.results) {
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
    return (0, _fetch2.default)(_config.API_BASE + '/posts?include=[author,tags]').then(function (response) {
      return (0, _helpers.processResponse)(response);
    }).then(function (json) {
      return dispatch(receivePosts(json));
    }).catch(function (err) {
      dispatch(receivePostsFailed(err));
    });
  };
}

/**
 * CREATE ARTICLE ACTIONS
 */
var beginCreatePost = function beginCreatePost() {
  return { type: types.CREATE_POST_REQUEST };
};

var createPostSuccess = function createPostSuccess(response) {
  return {
    type: types.CREATE_POST_SUCCESS,
    payload: response.body
  };
};
var errorCreatingPost = function errorCreatingPost(err) {
  return {
    type: types.CREATE_POST_FAIL,
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
    return _superagent2.default.post(_config.API_POSTS).set('Authorization', 'Bearer ' + localStorage.getItem(_config.TOKEN_KEY)).send({
      title: postData.title,
      content: postData.content,
      tags: postData.tags,
      status: postData.status,
      excerpt: postData.excerpt
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
 * Takes the user selected article and fetches the data from
 * the api.
 * @param  {String} articleId Technically its the uuid, but for all
 * intents and purposes its a String
 * @return {Object}           The post object.
 */
function selectPost(postId) {
  return function (dispatch) {
    dispatch(postSelected(postId));
    return _superagent2.default.get(_config.API_POSTS + '/id/' + postId).then(function (response) {
      if (response.status === 200) {
        dispatch(receiveSelectedPost(response));
      }
    }).catch(function (err) {
      dispatch(receiveSelectedPostFailed(err));
    });
  };
}

var INITIAL_STATE = exports.INITIAL_STATE = {
  isLoading: false,
  error: null,
  results: []
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
    case types.FETCH_POSTS_REQUEST:
    case types.LOAD_POST_REQUEST:
    case types.CREATE_POST_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });
    case types.FETCH_POSTS_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        // pagination: action.pagination,
        results: action.results
      });
    case types.LOAD_POST_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        selectedPost: action.payload
      });
    case types.CREATE_POST_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false
      });
    case types.FETCH_POSTS_FAILURE:
    case types.LOAD_POST_FAILURE:
    case types.CREATE_POST_FAIL:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        error: action.error
      });
    case types.SELECT_POST:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        id: action.id,
        isEditing: true
      });
    case types.SELECT_POST_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        current: action.current,
        isEditing: true
      });
    case types.SELECT_POST_FAIL:
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
/* 29 */
/***/ function(module, exports) {

module.exports = require("redux-form");

/***/ },
/* 30 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LEFT_MOUSE = exports.LEFT_MOUSE = 0;
var RIGHT_MOUSE = exports.RIGHT_MOUSE = 2;

var TAB = exports.TAB = 9;
var ENTER = exports.ENTER = 13;
var ESC = exports.ESC = 27;
var SPACE = exports.SPACE = 32;
var LEFT = exports.LEFT = 37;
var UP = exports.UP = 38;
var RIGHT = exports.RIGHT = 39;
var DOWN = exports.DOWN = 40;

var ZERO = exports.ZERO = 48;
var NINE = exports.NINE = 57;
var KEYPAD_ZERO = exports.KEYPAD_ZERO = 96;
var KEYPAD_NINE = exports.KEYPAD_NINE = 105;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Response = exports.Headers = exports.Request = exports.default = undefined;

var _bluebird = __webpack_require__(340);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _nodeFetch = __webpack_require__(352);

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

  return {"NODE_ENV":"production","SERVER_PORT":NaN}.SITE_URL;
}

function localFetch(url, options) {
  return (0, _nodeFetch2.default)(localUrl(url), options);
}

exports.default = localFetch;
exports.Request = _nodeFetch.Request;
exports.Headers = _nodeFetch.Headers;
exports.Response = _nodeFetch.Response;

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("class-autobind");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("react-helmet");

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("react-router");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Avatar = __webpack_require__(118);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Avatar2.default;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = __webpack_require__(58);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Any other props such as style or event listeners will also
 * be applied to the button.
 */
var FlatButton = function (_PureComponent) {
  (0, _inherits3.default)(FlatButton, _PureComponent);

  function FlatButton() {
    (0, _classCallCheck3.default)(this, FlatButton);
    return (0, _possibleConstructorReturn3.default)(this, (FlatButton.__proto__ || Object.getPrototypeOf(FlatButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(FlatButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className']);

      return _react2.default.createElement(_Button2.default, (0, _extends3.default)({}, props, { className: (0, _classnames2.default)('md-flat-btn', className) }));
    }
  }]);
  return FlatButton;
}(_react.PureComponent);

FlatButton.propTypes = {
  /**
   * The label to display in the button.
   */
  label: _react.PropTypes.any,

  /**
   * An optional className to apply to the button.
   */
  className: _react.PropTypes.string,

  /**
   * Boolean if the icon should be displayed before the label.
   */
  iconBefore: _react.PropTypes.bool,

  /**
   * A `FontIcon` to display in the button. It can be placed before
   * or after the label.
   */
  children: _react.PropTypes.node,

  /**
   * The button type.
   */
  type: _react.PropTypes.string,

  /**
   * Boolean if the button should be styled with the primary color.
   */
  primary: _react.PropTypes.bool,

  /**
   * Boolean if the button should be styled with the secondary color.
   */
  secondary: _react.PropTypes.bool,

  /**
   * Boolean if the button is disabled.
   */
  disabled: _react.PropTypes.bool,

  /**
   * An optional href to convert the button into a link button.
   */
  href: _react.PropTypes.string,

  /**
   * An optional function to call when the button is clicked.
   */
  onClick: _react.PropTypes.func
};
FlatButton.defaultProps = {
  type: 'button',
  iconBefore: true
};
exports.default = FlatButton;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

exports.default = {
  uncheckedIconClassName: _react.PropTypes.string.isRequired,
  uncheckedIconChildren: _react.PropTypes.node,
  checkedIconClassName: _react.PropTypes.string.isRequired,
  checkedIconChildren: _react.PropTypes.node,
  plain: _react.PropTypes.bool,
  allSelected: _react.PropTypes.bool.isRequired,
  selectedRows: _react.PropTypes.arrayOf(_react.PropTypes.bool).isRequired,
  toggleAllRows: _react.PropTypes.func.isRequired,
  toggleSelectedRow: _react.PropTypes.func.isRequired
};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Divider = __webpack_require__(76);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Divider2.default;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Paper = __webpack_require__(154);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Paper2.default;

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("redux");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextFields = __webpack_require__(26);

var _TextFields2 = _interopRequireDefault(_TextFields);

var _createFormComponent = __webpack_require__(54);

var _createFormComponent2 = _interopRequireDefault(_createFormComponent);

var _mapError = __webpack_require__(55);

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createFormComponent2.default)(_TextFields2.default, _mapError2.default);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Inks = __webpack_require__(25);

var _Inks2 = _interopRequireDefault(_Inks);

var _Tooltips = __webpack_require__(175);

var _Tooltips2 = _interopRequireDefault(_Tooltips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `IconButton` component automatically includes ink and a tooltip.
 * The tooltip will only be included if the `tooltipLabel` prop is given.
 *
 * Any other props (such as style or event listeners) will also be
 * applied.
 */
var IconButton = function (_PureComponent) {
  (0, _inherits3.default)(IconButton, _PureComponent);

  function IconButton() {
    (0, _classCallCheck3.default)(this, IconButton);
    return (0, _possibleConstructorReturn3.default)(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(IconButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var iconClassName = _props.iconClassName;
      var children = _props.children;
      var className = _props.className;
      var href = _props.href;
      var type = _props.type;
      var tooltip = _props.tooltip;
      var disabled = _props.disabled;
      var ink = _props.ink;
      var props = (0, _objectWithoutProperties3.default)(_props, ['iconClassName', 'children', 'className', 'href', 'type', 'tooltip', 'disabled', 'ink']);

      delete props.tooltipLabel;
      delete props.tooltipPosition;

      var btnProps = (0, _extends3.default)({}, props, {
        disabled: disabled,
        className: (0, _classnames2.default)('md-btn md-icon-btn', className)
      });

      if (href) {
        btnProps.href = href;
      } else {
        btnProps.type = type;
      }

      var displayedChildren = children;
      if (!(children && children.type && children.type === _FontIcons2.default)) {
        displayedChildren = (0, _jsx3.default)(_FontIcons2.default, {
          iconClassName: iconClassName
        }, 'icon', children);
      }

      return _react2.default.createElement(href ? 'a' : 'button', btnProps, [ink, displayedChildren, tooltip]);
    }
  }]);
  return IconButton;
}(_react.PureComponent);

IconButton.propTypes = {
  /**
   * The className to use for rendering the `FontIcon`.
   */
  iconClassName: _react.PropTypes.string,

  /**
   * Any children to use to render the `FontIcon`.
   */
  children: _react.PropTypes.node,

  /**
   * An optional className to apply to the button.
   */
  className: _react.PropTypes.string,

  /**
   * The button type.
   */
  type: _react.PropTypes.string,

  /**
   * Boolean if the button is disabled.
   */
  disabled: _react.PropTypes.bool,

  /**
   * An optional href to convert the button into a link button.
   */
  href: _react.PropTypes.string,

  /**
   * An optional function to call when the button is clicked.
   */
  onClick: _react.PropTypes.func,

  /**
   * An optional label to use if you would like a tooltip to display
   * on hover or touch hold.
   */
  tooltipLabel: _react.PropTypes.string,

  /**
   * The position that the tooltip should be displayed relative to
   * the button.
   */
  tooltipPosition: _react.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * An optional amount of delay before the tooltip appears.
   */
  tooltipDelay: _react.PropTypes.number,

  // Injected from injectInk
  ink: _react.PropTypes.node,

  // Inject from injectTooltip
  tooltip: _react.PropTypes.node
};
IconButton.defaultProps = {
  type: 'button'
};
exports.default = (0, _Tooltips2.default)((0, _Inks2.default)(IconButton));

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

exports.default = {
  onExpandClick: _react.PropTypes.func,
  isExpanded: _react.PropTypes.bool,
  iconClassName: _react.PropTypes.string,
  iconChildren: _react.PropTypes.string,
  tooltipPosition: _react.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  tooltipLabel: _react.PropTypes.string
};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TablePagination = exports.EditDialogColumn = exports.TableColumn = exports.TableRow = exports.TableBody = exports.TableHeader = exports.DataTable = undefined;

var _DataTable2 = __webpack_require__(127);

var _DataTable3 = _interopRequireDefault(_DataTable2);

var _TableHeader2 = __webpack_require__(131);

var _TableHeader3 = _interopRequireDefault(_TableHeader2);

var _TableBody2 = __webpack_require__(129);

var _TableBody3 = _interopRequireDefault(_TableBody2);

var _TableRow2 = __webpack_require__(133);

var _TableRow3 = _interopRequireDefault(_TableRow2);

var _TableColumn2 = __webpack_require__(74);

var _TableColumn3 = _interopRequireDefault(_TableColumn2);

var _EditDialogColumn2 = __webpack_require__(128);

var _EditDialogColumn3 = _interopRequireDefault(_EditDialogColumn2);

var _TablePagination2 = __webpack_require__(132);

var _TablePagination3 = _interopRequireDefault(_TablePagination2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DataTable = _DataTable3.default;
exports.TableHeader = _TableHeader3.default;
exports.TableBody = _TableBody3.default;
exports.TableRow = _TableRow3.default;
exports.TableColumn = _TableColumn3.default;
exports.EditDialogColumn = _EditDialogColumn3.default;
exports.TablePagination = _TablePagination3.default;

/***/ },
/* 45 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBetween = isBetween;
exports.calculateValueDistance = calculateValueDistance;
exports.updateUnit = updateUnit;
/**
 * Checks if a number is between a min and maximum (inclusive)
 *
 * @param {Number} num the number to check
 * @param {Number} min the minimum
 * @param {Number} max the maximum
 * @return {Boolean} true if the number is between the min and max (inclusive)
 */
function isBetween(num, min, max) {
  return num >= min && num <= max;
}

/**
 * This calculates the distance from a screen x location to a position in some element
 * by comparing the width of the element and the element's page position to the screen
 * x position.
 *
 * If the distance is not _normalized_ the distance will be updated to be a percentage
 * of the element's total width.
 *
 * @param {Number} x - the screen x location.
 * @param {Number} width - the element's width
 * @param {Number} left - the element's page x position.
 * @param {Boolean} normalize - boolean if the distance should be a percentage.
 *
 * @return {Number} the distance from the element's left position to the page x
 *    location.
 */
function calculateDistance(x, width, left, normalize) {
  var distance = Math.min(width, Math.max(0, x - left));

  return normalize ? distance : distance / width * 100;
}

/**
 * This calculates the new value and distance for a sliter. It will compare the page x
 * location of a touch or mouse event to the slider's track page x position. If the
 * final value and distance should be _normalized_, they will be updated to be rounded
 * with the scale and steps in mind.
 *
 * The distance will always be contained within a percentage of 0 - 100 while the
 * value will be contained within the min and max values.
 *
 * @param {Number} x - the page x location of the touch or mouse event.
 * @param {Number} width - the slider's width
 * @param {Number} left - the slider's left position in the page.
 * @param {Number} scale - the total number values included in the slider.
 * @param {Number} step - the amount to increment by.
 * @param {Number} min - the min value for the slider.
 * @param {Number} max - the max value for the slider.
 * @param {Boolean} normalize - boolean if the vaue and distance should be _normalized_.
 *
 * @return {Object} an object with the value and distance.
 */
function calculateValueDistance(x, width, left, scale, step, min, max, normalize) {
  var value = void 0;
  var distance = calculateDistance(x, width, left, normalize);
  if (normalize) {
    value = Math.round(distance / (width / scale));
    if (step < 1) {
      var modded = value % step;
      if (modded !== 0 && modded >= step / 2) {
        value += step - modded;
      } else if (modded !== 0) {
        value -= modded;
      }
    }

    distance = value / scale * 100;
    value += min;
  } else {
    value = Math.round(distance / 100 * scale);
  }

  if (step > 1) {
    value *= step;
  }

  return {
    distance: Math.max(0, Math.min(100, distance)),
    value: Math.max(min, Math.min(max, value))
  };
}

/**
 * Takes in a css unit (px, rem, em, etc) or a number and applies a function to the
 * number part of the unit.
 *
 * If the unit was a number to start with and a `toUnit` is given, the number will
 * be given the `toUnit`. Otherwise the number will be returned.
 *
 * If the unit was a string, the original units will be applied back to the updated
 * unit's value.
 *
 * @param {number|String} unit - the unit to apply a function to.
 * @param {function} fn - the function to apply to the number.
 * @param {String=} toUnit - an optional unit to cast the updated unit to.
 *
 * @return {String|number} the updated unit.
 */
function updateUnit(unit, fn, toUnit) {
  var updated = fn(parseInt(unit, 10));

  if (typeof unit === 'number') {
    return toUnit ? '' + updated + toUnit : updated;
  }

  return '' + updated + unit.replace(/[0-9]/g, '');
}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = __webpack_require__(192);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonWrap = __webpack_require__(193);

var _ButtonWrap2 = _interopRequireDefault(_ButtonWrap);

var _IconButton = __webpack_require__(320);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Use a more specific type here.
var IconButton = function (_Component) {
  (0, _inherits3.default)(IconButton, _Component);

  function IconButton() {
    (0, _classCallCheck3.default)(this, IconButton);
    return (0, _possibleConstructorReturn3.default)(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(IconButton, [{
    key: 'render',
    value: function render() {
      var _cx;

      var props = this.props;
      var className = props.className;
      var iconName = props.iconName;
      var label = props.label;
      var children = props.children;
      var isActive = props.isActive;
      var otherProps = (0, _objectWithoutProperties3.default)(props, ['className', 'iconName', 'label', 'children', 'isActive']);

      className = (0, _classnames2.default)(className, (_cx = {}, (0, _defineProperty3.default)(_cx, _IconButton2.default.root, true), (0, _defineProperty3.default)(_cx, _IconButton2.default.isActive, isActive), _cx));
      return (0, _jsx3.default)(_ButtonWrap2.default, {}, void 0, _react2.default.createElement(
        _Button2.default,
        (0, _extends3.default)({}, otherProps, { title: label, className: className }),
        (0, _jsx3.default)('span', {
          className: _IconButton2.default['icon-' + iconName]
        })
      ), children);
    }
  }]);
  return IconButton;
}(_react.Component);

// $FlowIssue - Flow doesn't understand CSS Modules


exports.default = IconButton;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Header = __webpack_require__(212);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Header2.default;

/***/ },
/* 48 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processResponse = processResponse;
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

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = signup;
exports.login = login;
exports.logoutSuccess = logoutSuccess;
exports.logoutError = logoutError;
exports.logOut = logOut;
exports.checkAuth = checkAuth;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;

var _superagent = __webpack_require__(24);

var _superagent2 = _interopRequireDefault(_superagent);

var _reactRouterRedux = __webpack_require__(18);

var _jwtDecode = __webpack_require__(99);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _fetch = __webpack_require__(31);

var _fetch2 = _interopRequireDefault(_fetch);

var _config = __webpack_require__(17);

var _notifications = __webpack_require__(21);

var _constants = __webpack_require__(90);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SIGNUP ACTION TYPES
 */

// Signup
var beginSignUp = function beginSignUp() {
  return { type: types.CREATE_ACCOUNT_REQUEST };
};

// Signup Success
var signUpSuccess = function signUpSuccess(response) {
  return {
    type: types.CREATE_ACCOUNT_SUCCESS,
    payload: response
  };
};

// Signup Error
var signUpError = function signUpError(err) {
  return {
    type: types.CREATE_ACCOUNT_FAILURE,
    error: err
  };
};

// Signup Action
function signup(data) {
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
 * LOGIN ACTIONS
 */

var beginLogin = function beginLogin() {
  return { type: types.LOGIN_REQUEST };
};

// Login Success
function loginSuccess(response) {
  var decodeToken = (0, _jwtDecode2.default)(response.body.token);
  return {
    type: types.LOGIN_SUCCESS,
    token: response.body.token,
    user: {
      display_name: response.body.user.display_name,
      email: response.body.user.email,
      first_name: response.body.user.first_name,
      id: response.body.user.id,
      last_name: response.body.user.last_name,
      avatar_url: response.body.user.avatar_url,
      roleId: decodeToken.roleId,
      role: decodeToken.role
    }
  };
}
// Login Error
function loginError(err) {
  return {
    type: types.LOGIN_FAILURE,
    error: err
  };
}
// Login Action
function login(loginData, redir) {
  return function (dispatch) {
    dispatch(beginLogin());
    return _superagent2.default.post(_config.API_BASE + '/auth/login').send(loginData).then(function (response) {
      localStorage.setItem('token', response.body.token);
      dispatch(loginSuccess(response));
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
  return { type: types.LOGOUT_USER };
}

function logoutError() {
  return { type: types.LOGOUT_USER_FAIL };
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
  return { type: types.CHECK_AUTH_REQUEST };
}

function checkAuthSuccess(response, token) {
  var decodeToken = (0, _jwtDecode2.default)(token);
  return {
    type: types.CHECK_AUTH_SUCCESS,
    token: token, // eslint-disable-line
    user: {
      display_name: response.body.user.display_name,
      email: response.body.user.email,
      first_name: response.body.user.first_name,
      id: response.body.user.id,
      last_name: response.body.user.last_name,
      avatar_url: response.body.user.avatar_url,
      roleId: decodeToken.roleId,
      role: decodeToken.role
    }
  };
}

function checkAuthFailure(error) {
  return {
    type: types.CHECK_AUTH_FAILURE,
    payload: error
  };
}

function checkAuth(token) {
  return function (dispatch) {
    dispatch(checkAuthRequest());
    return _superagent2.default.get(_config.API_AUTH + '/check').set('Authorization', '' + token).then(function (response) {
      dispatch(checkAuthSuccess(response, token));
    }).catch(function () {
      dispatch(checkAuthFailure('Token is invalid'));
      dispatch((0, _notifications.notificationSend)({
        message: 'There was a problem authenticating. Please login again.',
        kind: 'error',
        dismissAfter: 3000
      }));
    });
  };
}

/**
 * FORGOT PASSWORD ACTION TYPES
 */

function forgotPassword(email) {
  return function (dispatch) {
    dispatch({
      type: types.FORGOT_PASSWORD_REQUEST
    });
    return (0, _fetch2.default)(_config.API_AUTH + '/forgot-password', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    }).then(function (response) {
      if (response.ok) {
        return response.json().then(function (json) {
          dispatch({
            type: types.FORGOT_PASSWORD_SUCCESS,
            error: [json]
          });
        });
      } else {
        return response.json().then(function (json) {
          dispatch({
            type: types.FORGOT_PASSWORD_FAILURE,
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
      type: types.RESET_PASSWORD_REQUEST
    });
    return (0, _fetch2.default)(_config.API_AUTH + '/reset-password/' + pathToken, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: password
      })
    }).then(function (response) {
      if (response.ok) {
        return response.json().then(function (json) {
          browserHistory.push('/login');
          dispatch({
            type: types.RESET_PASSWORD_SUCCESS,
            error: [json]
          });
        });
      } else {
        return response.json().then(function (json) {
          dispatch({
            type: types.RESET_PASSWORD_FAILURE,
            error: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

exports.goHome = goHome;
exports.fetchSettingsIfNeeded = fetchSettingsIfNeeded;
exports.updateBoldrSettings = updateBoldrSettings;
exports.default = boldrReducer;

var _superagent = __webpack_require__(24);

var _superagent2 = _interopRequireDefault(_superagent);

var _redux = __webpack_require__(40);

var _reactRouterRedux = __webpack_require__(18);

var _core = __webpack_require__(217);

var _notifications = __webpack_require__(21);

var _constants = __webpack_require__(267);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------
// React-Router-Redux push location
// ------------------------------------
function goHome() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/'));
  };
}

// ------------------------------------
// Load Settings
// ------------------------------------
var loadSettings = function loadSettings() {
  return { type: types.LOAD_SETTINGS };
};

function doneLoadSettings(response) {
  return {
    type: types.LOAD_SETTINGS_SUCCESS,
    siteName: response.body.site_name,
    description: response.body.site_description,
    logo: response.body.site_logo,
    slogan: response.body.site_slogan,
    siteUrl: response.body.site_url,
    favicon: response.body.site_favicon,
    analyticsId: response.body.google_analytics,
    configuration: response.body.configuration
  };
}

var failLoadSettings = function failLoadSettings(err) {
  return {
    type: types.LOAD_SETTINGS_FAILURE,
    error: err
  };
};

function loadBoldrSettings() {
  return function (dispatch) {
    dispatch(loadSettings());
    return (0, _superagent2.default)('' + _core.API_SETTINGS).then(function (response) {
      dispatch(doneLoadSettings(response));
    }).catch(function (err) {
      dispatch(failLoadSettings(err));
    });
  };
}

/**
 * Called by fetchMenusIfNeeded to retrieve the state containing menus
 * @param  {Object} state   The blog state which contains menus
 */
function shouldFetchSettings(state) {
  var settings = state.boldr;
  if (!settings.siteName) {
    return true;
  }
  if (state.boldr.isLoading) {
    return false;
  }
  return settings;
}

/**
 * @function fetchSettingsIfNeeded
 * @description Function that determines whether or not menus need to be
 * fetched from the api. Dispatches either the loadMenus Function
 * or returns the resolved promise if the menus are up to date.
 * @return {Promise} Menus Promise that resolves when menus are fetched
 * or they arent required to be refreshed.
 */
function fetchSettingsIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFetchSettings(getState())) {
      return dispatch(loadBoldrSettings());
    }

    return Promise.resolve();
  };
}

// ------------------------------------
// Update Settings
// ------------------------------------
var beginUpdateSettings = function beginUpdateSettings() {
  return {
    type: types.UPDATE_SETTINGS_REQUEST
  };
};

var doneUpdateSettings = function doneUpdateSettings(response) {
  return {
    type: types.UPDATE_SETTINGS_SUCCESS,
    payload: response.body
  };
};

// Fail receivers
var failUpdateSettings = function failUpdateSettings(err) {
  return {
    type: types.UPDATE_SETTINGS_FAILURE,
    error: err
  };
};

function updateBoldrSettings(data, id) {
  return function (dispatch) {
    dispatch(beginUpdateSettings());
    return _superagent2.default.put(_core.API_SETTINGS + '/' + id).set('Authorization', '' + localStorage.getItem(_core.TOKEN_KEY)).send(data).then(function (response) {
      dispatch(doneUpdateSettings(response));
      dispatch(loadSettings());
      dispatch((0, _notifications.notificationSend)({
        message: 'Your site is set up!',
        kind: 'info',
        dismissAfter: 3000
      }));
      dispatch((0, _reactRouterRedux.push)('/dashboard'));
    }).catch(function (err) {
      dispatch(failUpdateSettings(err));
      dispatch((0, _notifications.notificationSend)({
        message: 'We ran into a problem with your set up ' + err,
        kind: 'error',
        dismissAfter: 3000
      }));
    });
  };
}

// ------------------------------------
// Reducer
// ------------------------------------
var INITIAL_STATE = {
  isLoading: false,
  siteName: null,
  description: null,
  logo: null,
  siteUrl: null,
  favicon: null,
  slogan: null,
  analyticsId: null,
  configuration: {},
  primaryNav: null
};

function boldrReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case types.LOAD_SETTINGS:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });
    case types.LOAD_SETTINGS_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        siteName: action.siteName,
        description: action.description,
        logo: action.logo,
        siteUrl: action.siteUrl,
        favicon: action.favicon,
        slogan: action.slogan,
        analyticsId: action.analyticsId,
        configuration: action.configuration
      });
    case types.LOAD_SETTINGS_FAILURE:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
}

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = require("draft-js-utils");

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports = require("react-addons-transition-group");

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RadioGroup = __webpack_require__(162);

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _createFormComponent = __webpack_require__(54);

var _createFormComponent2 = _interopRequireDefault(_createFormComponent);

var _mapError = __webpack_require__(55);

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createFormComponent2.default)(_RadioGroup2.default, _mapError2.default);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

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
      return (0, _possibleConstructorReturn3.default)(this, (InputComponent.__proto__ || Object.getPrototypeOf(InputComponent)).apply(this, arguments));
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(6);

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = __webpack_require__(8);

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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = __webpack_require__(110);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loader2.default;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _reactDom = __webpack_require__(11);

var _keyCodes = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `AccessibleFakeButton` is a generic component that can be used to render
 * a `div` or any other non `button` components as a button. This should not be
 * used often.
 *
 * The `AccessibleFakeButton` allows the user to tab focus the element, use the
 * space or enter key to trigger the `onClick` event, and toggles the `aria-pressed`
 * attribute.
 */
var AccessibleFakeButton = function (_PureComponent) {
  (0, _inherits3.default)(AccessibleFakeButton, _PureComponent);

  function AccessibleFakeButton(props) {
    (0, _classCallCheck3.default)(this, AccessibleFakeButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AccessibleFakeButton.__proto__ || Object.getPrototypeOf(AccessibleFakeButton)).call(this, props));

    _this.state = { pressed: false };
    _this._handleClick = _this._handleClick.bind(_this);
    _this._handleKeyUp = _this._handleKeyUp.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AccessibleFakeButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._node = (0, _reactDom.findDOMNode)(this);
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(e) {
      if (this.props.disabled) {
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      this._node.focus();
      this.setState({ pressed: !this.state.pressed });
    }
  }, {
    key: '_handleKeyUp',
    value: function _handleKeyUp(e) {
      if (this.props.disabled) {
        return;
      }

      if (this.props.onKeyUp) {
        this.props.onKeyUp(e);
      }

      if ([_keyCodes.SPACE, _keyCodes.ENTER].indexOf(e.which || e.keyCode) !== -1) {
        this._handleClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var component = _props.component;
      var children = _props.children;
      var disabled = _props.disabled;
      var tabIndex = _props.tabIndex;
      var props = (0, _objectWithoutProperties3.default)(_props, ['component', 'children', 'disabled', 'tabIndex']);

      delete props.onClick;
      delete props.onKeyUp;

      return (0, _react.createElement)(component, (0, _extends3.default)({}, props, {
        disabled: disabled,
        tabIndex: disabled ? null : tabIndex,
        role: 'button',
        onClick: this._handleClick,
        onKeyUp: this._handleKeyUp,
        'aria-pressed': this.state.pressed
      }), children);
    }
  }]);
  return AccessibleFakeButton;
}(_react.PureComponent);

AccessibleFakeButton.propTypes = {
  /**
   * Any children to display in the Accessible Fake Button.
   */
  children: _react.PropTypes.node,

  /**
   * An optional onClick function to call whent he user clicks the
   * button or presses space || enter.
   */
  onClick: _react.PropTypes.func,

  /**
   * An optional onKeyUp function to call.
   */
  onKeyUp: _react.PropTypes.func,

  /**
   * The component to render the Fake button as.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,

  /**
   * The tab index to use for the Fake button so it is keyboard focusable.
   */
  tabIndex: _react.PropTypes.number,

  /**
   * Boolean if the Button is disabled. This will prevent tab focus.
   */
  disabled: _react.PropTypes.bool
};
AccessibleFakeButton.defaultProps = {
  component: 'div',
  tabIndex: 0
};
exports.default = AccessibleFakeButton;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Inks = __webpack_require__(25);

var _Inks2 = _interopRequireDefault(_Inks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button(props) {
    (0, _classCallCheck3.default)(this, Button);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this._renderChildren = _this._renderChildren.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Button, [{
    key: '_renderChildren',
    value: function _renderChildren() {
      var _props = this.props;
      var children = _props.children;
      var iconBefore = _props.iconBefore;
      var label = _props.label;

      if (!children) {
        return label;
      } else if (children) {
        return (0, _jsx3.default)('div', {
          className: 'icon-separator'
        }, 'label-icons', iconBefore && children, (0, _jsx3.default)('span', {
          className: 'text'
        }, void 0, label), !iconBefore && children);
      }
      return label;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var href = _props2.href;
      var primary = _props2.primary;
      var secondary = _props2.secondary;
      var ink = _props2.ink;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'href', 'primary', 'secondary', 'ink']);


      delete props.iconBefore;
      delete props.label;
      delete props.children;

      return _react2.default.createElement(href ? 'a' : 'button', (0, _extends3.default)({}, props, {
        href: href,
        className: (0, _classnames2.default)('md-btn', className, {
          'md-primary': primary,
          'md-secondary': secondary
        })
      }), [ink, this._renderChildren()]);
    }
  }]);
  return Button;
}(_react.Component);

Button.propTypes = {
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  label: _react.PropTypes.any,
  children: _react.PropTypes.node,
  type: _react.PropTypes.string,
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  iconBefore: _react.PropTypes.bool,
  href: _react.PropTypes.string,

  // Injected from injectInk
  ink: _react.PropTypes.node
};
Button.defaultProps = {
  type: 'button',
  iconBefore: true
};
exports.default = (0, _Inks2.default)(Button);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Subheaders = __webpack_require__(84);

var _Subheaders2 = _interopRequireDefault(_Subheaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Lists present multiple line items vertically as a single continuous element.
 */
var List = function (_PureComponent) {
  (0, _inherits3.default)(List, _PureComponent);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var subheader = _props.subheader;
      var children = _props.children;
      var primarySubheader = _props.primarySubheader;
      var ordered = _props.ordered;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'subheader', 'children', 'primarySubheader', 'ordered']);

      var allChildren = children;
      if (subheader) {
        allChildren = [(0, _jsx3.default)(_Subheaders2.default, {
          primary: primarySubheader,
          primaryText: subheader
        }, 'subheader')].concat(children);
      }

      return _react2.default.createElement(ordered ? 'ol' : 'ul', (0, _extends3.default)({
        className: (0, _classnames2.default)('md-list', className)
      }, props), _react2.default.Children.map(allChildren, function (child, i) {
        if (i + 1 < children.length) {
          var nextChild = children[i + 1];
          if (nextChild.type && nextChild.type.name === 'Divider') {
            return _react2.default.cloneElement(child, { className: (0, _classnames2.default)(child.props.className, 'extra-mb') });
          }
        }
        return child;
      }));
    }
  }]);
  return List;
}(_react.PureComponent);

List.propTypes = {
  /**
   * Boolean if this should be an ordered list (`<ol>`) component. Otherwise, it will
   * be rendered as `<ul>`.
   */
  ordered: _react.PropTypes.bool,

  /**
   * An optional className to apply to the list.
   */
  className: _react.PropTypes.string,

  /**
   * An optional subheader primaryText to use if you want the list to start
   * with a subheader.
   */
  subheader: _react.PropTypes.string,

  /**
   * A boolean if the optional subheader should be styled with the primary color.
   */
  primarySubheader: _react.PropTypes.bool,

  /**
   * This *should* be a list of `ListItem`, `ListItemControl`, `Divider`, or
   * `Subheader`.
   */
  children: _react.PropTypes.node
};
exports.default = List;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTransitionGroup = __webpack_require__(52);

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Buttons = __webpack_require__(10);

var _Transitions = __webpack_require__(177);

var _List = __webpack_require__(59);

var _List2 = _interopRequireDefault(_List);

var _ListTile = __webpack_require__(147);

var _ListTile2 = _interopRequireDefault(_ListTile);

var _ListItemText = __webpack_require__(78);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A component for rendering a `li` component with icons, avatars, and text.
 *
 * Any remaing props will be passed to the inner `ListItem` component. This
 * will allow you to use custom components such as `react-router`'s `Link`
 * component.
 */
var ListItem = function (_Component) {
  (0, _inherits3.default)(ListItem, _Component);

  function ListItem(props) {
    (0, _classCallCheck3.default)(this, ListItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

    _this.state = { isOpen: props.initiallyOpen, hover: false };

    _this._renderLeftChildren = _this._renderLeftChildren.bind(_this);
    _this._renderRightChildren = _this._renderRightChildren.bind(_this);
    _this._toggleNestedItems = _this._toggleNestedItems.bind(_this);
    _this._handleClick = _this._handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ListItem, [{
    key: '_isOpen',
    value: function _isOpen(props, state) {
      return typeof props.isOpen === 'undefined' ? state.isOpen : props.isOpen;
    }
  }, {
    key: '_renderLeftChildren',
    value: function _renderLeftChildren() {
      var _props = this.props;
      var leftIcon = _props.leftIcon;
      var leftAvatar = _props.leftAvatar;

      if (!leftIcon && !leftAvatar) {
        return null;
      }

      return _react2.default.cloneElement(leftIcon || leftAvatar, { key: 'left-children' });
    }
  }, {
    key: '_renderRightChildren',
    value: function _renderRightChildren() {
      var _props2 = this.props;
      var rightIcon = _props2.rightIcon;
      var rightAvatar = _props2.rightAvatar;
      var expanderIconChildren = _props2.expanderIconChildren;
      var expanderIconClassName = _props2.expanderIconClassName;
      var nestedItems = _props2.nestedItems;
      var disabled = _props2.disabled;


      if (!rightIcon && !rightAvatar && !(nestedItems && nestedItems.length)) {
        return null;
      }

      if (nestedItems && nestedItems.length) {
        var className = (0, _classnames2.default)('md-list-expander', { 'active': this._isOpen(this.props, this.state) });
        if (!rightIcon) {
          return (0, _jsx3.default)(_Buttons.IconButton, {
            disabled: disabled,
            onClick: this._toggleNestedItems,
            iconClassName: expanderIconClassName,
            className: className,
            children: expanderIconChildren
          }, 'toggle');
        }

        return _react2.default.cloneElement(rightIcon, { key: 'toggle', className: className });
      }

      return _react2.default.cloneElement(rightIcon || rightAvatar, { key: 'right-children' });
    }
  }, {
    key: '_toggleNestedItems',
    value: function _toggleNestedItems(e) {
      var onExpanderClick = this.props.onExpanderClick;

      e.stopPropagation();

      if (onExpanderClick) {
        onExpanderClick(e);
      } else {
        this.setState({ isOpen: !this.state.isOpen });
      }
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(e) {
      var _props3 = this.props;
      var onClick = _props3.onClick;
      var nestedItems = _props3.nestedItems;
      var expandOnClick = _props3.expandOnClick;
      var disabled = _props3.disabled;

      if (disabled) {
        return;
      }
      if (onClick) {
        onClick(e);
      }

      if (expandOnClick && nestedItems) {
        this._toggleNestedItems(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var hover = this.state.hover;
      var _props4 = this.props;
      var component = _props4.component;
      var className = _props4.className;
      var style = _props4.style;
      var tileClassName = _props4.tileClassName;
      var tileStyle = _props4.tileStyle;
      var primaryText = _props4.primaryText;
      var secondaryText = _props4.secondaryText;
      var threeLines = _props4.threeLines;
      var leftIcon = _props4.leftIcon;
      var leftAvatar = _props4.leftAvatar;
      var rightAvatar = _props4.rightAvatar;
      var nestedItems = _props4.nestedItems;
      var disabled = _props4.disabled;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['component', 'className', 'style', 'tileClassName', 'tileStyle', 'primaryText', 'secondaryText', 'threeLines', 'leftIcon', 'leftAvatar', 'rightAvatar', 'nestedItems', 'disabled']);


      delete props.rightIcon;
      delete props.expanderIconClassName;
      delete props.expanderIconChildren;
      delete props.isOpen;
      delete props.onExpanderClick;
      delete props.initiallyOpen;
      delete props.expandOnClick;

      var children = void 0;
      if (this._isOpen(this.props, this.state) && nestedItems && nestedItems.length) {
        children = (0, _jsx3.default)(_Transitions.Height, {}, 'nested-list', (0, _jsx3.default)(_List2.default, {}, void 0, nestedItems));
      }

      return (0, _jsx3.default)(_reactAddonsTransitionGroup2.default, {
        component: 'li',
        className: (0, _classnames2.default)('md-list-item', className, { hover: hover }),
        style: style
      }, void 0, _react2.default.createElement(
        _ListTile2.default,
        (0, _extends3.default)({}, props, {
          style: tileStyle,
          component: component,
          disabled: disabled,
          onClick: this._handleClick,
          className: (0, _classnames2.default)(tileClassName, {
            'secondary-action': nestedItems && nestedItems.length,
            'avatar-height': !secondaryText && (leftAvatar || rightAvatar),
            'two-lines': !threeLines && secondaryText,
            'three-lines': threeLines && secondaryText
          })
        }),
        this._renderLeftChildren(),
        (0, _jsx3.default)(_ListItemText2.default, {
          primaryText: primaryText,
          secondaryText: secondaryText,
          className: (0, _classnames2.default)({
            'avatar-offset': !!leftAvatar,
            'icon-offset': !!leftIcon
          })
        }, 'text'),
        this._renderRightChildren()
      ), children);
    }
  }]);
  return ListItem;
}(_react.Component);

ListItem.propTypes = {
  /**
   * This should be the main text to display.
   */
  primaryText: _react.PropTypes.node.isRequired,

  /**
   * An optional secondary text to display below the `primaryText`. This can
   * be an additional 1 or 2 lines. The text will automatically be ellipsed
   * if it spans more than one line. If the prop `threeLines` is set to true,
   * then the text will automatically be ellipsed if it spans more than two lines.
   */
  secondaryText: _react.PropTypes.node,

  /**
   * The className to apply to the `.md-list-item` component which is the
   * entire container.
   */
  className: _react.PropTypes.string,

  /**
   * An optional style to apply to the `.md-list-item` component.
   */
  style: _react.PropTypes.object,

  /**
   * The className to apply to the `.md-list-tile` component.
   */
  tileClassName: _react.PropTypes.string,

  /**
   * An optional style to apply to the `.md-list-tile` component.
   */
  tileStyle: _react.PropTypes.object,

  /**
   * An optional icon to display to the left of the text.
   */
  leftIcon: _react.PropTypes.node,

  /**
   * An optional avatar to display to the left of the text.
   */
  leftAvatar: _react.PropTypes.node,

  /**
   * An optional icon to display to the left of the text.
   */
  rightIcon: _react.PropTypes.node,

  /**
   * An optional avatar to display to the left of the text.
   */
  rightAvatar: _react.PropTypes.node,

  /**
   * The component to render the `.md-list-tile` as. This can be set
   * as an external component if you need additional functionality.
   *
   * An example would be setting this to be `react-router`'s `Link` component
   * so that it redirects on click.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,

  /**
   * An optional list of `ListItem`, `ListItemControl`, `Divider`, or `Subheader`
   * to use as a nested list.
   */
  nestedItems: _react.PropTypes.arrayOf(_react.PropTypes.node),

  /**
   * Boolean if the nested list should initially be displayed.
   */
  initiallyOpen: _react.PropTypes.bool,

  /**
   * Boolean if the nested list is currently open. This forces the component
   * to be a controlled component.
   */
  isOpen: _react.PropTypes.bool,

  /**
   * The optional function to call when the nested item expander button is clicked.
   */
  onExpanderClick: _react.PropTypes.func,

  /**
   * A boolean if the nested items should be toggled if the `ListItem` is clicked
   * instead of only the expander button.
   */
  expandOnClick: _react.PropTypes.bool,

  /**
   * Any children required to render the expander icon.
   */
  expanderIconChildren: _react.PropTypes.node,

  /**
   * The icon className to use for the expander icon.
   */
  expanderIconClassName: _react.PropTypes.string,

  /**
   * An optional function to call when the `ListItem` is clicked.
   */
  onClick: _react.PropTypes.func,

  /**
   * Boolean if the item is currently disabled.
   */
  disabled: _react.PropTypes.bool,

  /**
   * Boolean if the `ListItem` should allow three lines of text including
   * the `primaryText`.
   */
  threeLines: _react.PropTypes.bool
};
ListItem.defaultProps = {
  component: 'div',
  initiallyOpen: false,
  expanderIconChildren: 'keyboard_arrow_down',
  expandOnClick: true
};
exports.default = ListItem;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _reactDom = __webpack_require__(11);

var _utils = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Height = function (_Component) {
  (0, _inherits3.default)(Height, _Component);

  function Height(props) {
    (0, _classCallCheck3.default)(this, Height);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Height.__proto__ || Object.getPrototypeOf(Height)).call(this, props));

    _this._init = _this._init.bind(_this);
    _this._animatePadding = _this._animatePadding.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Height, [{
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      this._init(done, true);
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      var el = (0, _reactDom.findDOMNode)(this);
      el.style.height = null;
      el.style.paddingTop = null;
      el.style.paddingBottom = null;
      el.style.overflow = null;
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      this._init(done, false);
    }
  }, {
    key: '_linearIncrement',
    value: function _linearIncrement(value, time) {
      return value / time;
    }
  }, {
    key: '_init',
    value: function _init(done) {
      var _this2 = this;

      var isEnter = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var el = (0, _reactDom.findDOMNode)(this);
      var fullHeight = el.offsetHeight;
      var elStyle = window.getComputedStyle(el);
      var paddingTop = parseInt(elStyle.paddingTop, 10);

      var _props = this.props;
      var increment = _props.increment;
      var transitionEnterTimeout = _props.transitionEnterTimeout;
      var transitionLeaveTimeout = _props.transitionLeaveTimeout;

      var transitionTime = isEnter ? transitionEnterTimeout : transitionLeaveTimeout;
      var intervals = transitionTime / increment;

      var ptTime = Math.ceil(intervals * paddingTop / fullHeight) * increment;
      var hTime = transitionTime - ptTime;

      el.style.overflow = 'hidden';
      el.style.paddingBottom = 0;
      var animationIncrement = this._linearIncrement(paddingTop, ptTime / increment);
      if (isEnter) {
        el.style.paddingTop = 0;
        el.style.height = 0;

        this._animatePadding(el, 0, animationIncrement, 'paddingTop', 0, ptTime, increment, function () {
          (0, _utils.animate)(el, increment, ptTime, hTime, 'height', 0, paddingTop, fullHeight, done);
        });
      } else {
        el.style.paddingTop = paddingTop + 'px';
        el.style.height = fullHeight + 'px';
        (0, _utils.animate)(el, increment, 0, hTime, 'height', fullHeight - paddingTop, fullHeight, -fullHeight, function () {
          _this2._animatePadding(el, paddingTop, -animationIncrement, 'paddingTop', 0, ptTime, increment, done);
        });
      }
    }
  }, {
    key: '_animatePadding',
    value: function _animatePadding(el, padding, paddingIncrement, name, elapsedTime, transitionTime, increment, next) {
      var _this3 = this;

      elapsedTime += increment;
      padding += paddingIncrement;
      el.style[name] = padding + 'px';
      if (elapsedTime < transitionTime) {
        setTimeout(function () {
          _this3._animatePadding(el, padding, paddingIncrement, name, elapsedTime, transitionTime, increment, next);
        }, increment);
      } else {
        el.style[name] = Math.floor(padding) + 'px';
        next();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return Height;
}(_react.Component); /* eslint-disable no-param-reassign */


Height.propTypes = {
  children: _react.PropTypes.node,
  transitionEnterTimeout: _react.PropTypes.number.isRequired,
  transitionLeaveTimeout: _react.PropTypes.number.isRequired,
  increment: _react.PropTypes.number.isRequired
};
Height.defaultProps = {
  transitionEnterTimeout: 150,
  transitionLeaveTimeout: 150,
  increment: 15
};
exports.default = Height;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCurrentPost = clearCurrentPost;
exports.loadPost = loadPost;
exports.updatePost = updatePost;

var _superagent = __webpack_require__(24);

var _superagent2 = _interopRequireDefault(_superagent);

var _fetch = __webpack_require__(31);

var _fetch2 = _interopRequireDefault(_fetch);

var _config = __webpack_require__(17);

var _notifications = __webpack_require__(21);

var _helpers = __webpack_require__(48);

var _constants = __webpack_require__(64);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clearCurrentPost() {
  return { type: types.CLEAR_CURRENT_POST };
}

var requestPost = function requestPost() {
  return { type: types.LOAD_POST_REQUEST };
};
var receivedPost = function receivedPost(json) {
  return {
    type: types.LOAD_POST_SUCCESS,
    title: json.title,
    slug: json.slug,
    id: json.id,
    feature_image: json.feature_image,
    content: json.content,
    author: json.author,
    tags: json.tags
  };
};
var receivePostFailed = function receivePostFailed(err) {
  return {
    type: types.LOAD_POST_FAILURE,
    error: err
  };
};

/**
 * Retrieves a specific post from the API based on the value of its slug
 * @param  {string} slug the slug is the title of the post normalized / sluggified
 * @return {Object}      The post object
 */
function loadPost(slug) {
  return function (dispatch) {
    dispatch(requestPost());
    return (0, _fetch2.default)(_config.API_POSTS + '/slug/' + slug).then(function (response) {
      return (0, _helpers.processResponse)(response);
    }).then(function (json) {
      return dispatch(receivedPost(json));
    }).catch(function (err) {
      dispatch(receivePostFailed(err));
    });
  };
}

var updatePostDetails = function updatePostDetails() {
  return { type: types.UPDATE_POST_REQUEST };
};
var updatePostSuccess = function updatePostSuccess(response) {
  return { type: types.UPDATE_POST_SUCCESS };
};
var errorUpdatingPost = function errorUpdatingPost(err) {
  return {
    type: types.UPDATE_POST_FAILURE,
    error: err
  };
};

function updatePost(postData) {
  // const articleSlug = slug(articleData.title);
  var payload = {
    title: postData.title,
    content: postData.content,
    excerpt: postData.excerpt,
    feature_image: postData.feature_image,
    status: postData.status
  };
  return function (dispatch) {
    dispatch(updatePostDetails(postData));
    return _superagent2.default.put(_config.API_POSTS + '/pid/' + postData.id).set('Authorization', '' + localStorage.getItem('token')).send({
      // title: articleData.title,
      content: postData.content,
      excerpt: postData.excerpt,
      feature_image: postData.feature_image,
      tag: postData.tag,
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

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TagBlock = __webpack_require__(261);

var _TagBlock2 = _interopRequireDefault(_TagBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TagBlock2.default;

/***/ },
/* 64 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_POSTS_REQUEST = exports.FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
var FETCH_POSTS_SUCCESS = exports.FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
var FETCH_POSTS_FAILURE = exports.FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

var LOAD_POST_REQUEST = exports.LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = exports.LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = exports.LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

var UPDATE_POST_REQUEST = exports.UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
var UPDATE_POST_SUCCESS = exports.UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
var UPDATE_POST_FAILURE = exports.UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

var SELECT_POST = exports.SELECT_POST = 'SELECT_POST';
var SELECT_POST_SUCCESS = exports.SELECT_POST_SUCCESS = 'SELECT_POST_SUCCESS';
var SELECT_POST_FAIL = exports.SELECT_POST_FAIL = 'SELECT_POST_FAIL';

var CREATE_POST_REQUEST = exports.CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
var CREATE_POST_SUCCESS = exports.CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
var CREATE_POST_FAIL = exports.CREATE_POST_FAIL = 'CREATE_POST_FAIL';

var CLEAR_CURRENT_POST = exports.CLEAR_CURRENT_POST = 'CLEAR_CURRENT_POST';

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MEMBER_SELECTED = exports.LOAD_MEMBERS_FAILURE = exports.LOAD_MEMBERS_SUCCESS = exports.LOAD_MEMBERS_REQUEST = undefined;

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

exports.loadSiteMembers = loadSiteMembers;
exports.updateMember = updateMember;
exports.memberSelected = memberSelected;
exports.default = membersReducer;

var _superagent = __webpack_require__(24);

var _superagent2 = _interopRequireDefault(_superagent);

var _config = __webpack_require__(17);

var _notifications = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_MEMBERS_REQUEST = exports.LOAD_MEMBERS_REQUEST = 'LOAD_MEMBERS_REQUEST';
var LOAD_MEMBERS_SUCCESS = exports.LOAD_MEMBERS_SUCCESS = 'LOAD_MEMBERS_SUCCESS';
var LOAD_MEMBERS_FAILURE = exports.LOAD_MEMBERS_FAILURE = 'LOAD_MEMBERS_FAILURE';

var loadMembers = function loadMembers() {
  return {
    type: LOAD_MEMBERS_REQUEST
  };
};

var loadMembersSuccess = function loadMembersSuccess(response) {
  return {
    type: LOAD_MEMBERS_SUCCESS,
    isLoading: false,
    payload: response.body
  };
};

// Fail receivers
var failedToLoadMembers = function failedToLoadMembers(err) {
  return {
    type: LOAD_MEMBERS_FAILURE,
    isLoading: false,
    error: err
  };
};

// Public action creators
function loadSiteMembers() {
  return function (dispatch) {
    dispatch(loadMembers());
    return _superagent2.default.get('' + _config.API_USERS).then(function (response) {
      if (response.status === 200) {
        dispatch(loadMembersSuccess(response));
      }
    }).catch(function (err) {
      dispatch(failedToLoadMembers(err));
    });
  };
}

var UPDATE_MEMBER_REQUEST = 'UPDATE_MEMBER_REQUEST';
var UPDATE_MEMBER_SUCCESS = 'UPDATE_MEMBER_SUCCESS';
var UPDATE_MEMBER_FAILURE = 'UPDATE_MEMBER_FAILURE';
var beginUpdateMember = function beginUpdateMember() {
  return { type: UPDATE_MEMBER_REQUEST };
};

var doneUpdateMember = function doneUpdateMember(response) {
  return { type: UPDATE_MEMBER_SUCCESS };
};

var failUpdateMember = function failUpdateMember(err) {
  return {
    type: UPDATE_MEMBER_FAILURE,
    error: err
  };
};

function updateMember(userData) {
  var payload = {
    display_name: userData.display_name,
    first_name: userData.first_name,
    last_name: userData.last_name,
    roleId: userData.roleId
  };
  return function (dispatch) {
    dispatch(beginUpdateMember(userData));
    return _superagent2.default.put(_config.API_USERS + '/' + userData.id).set('Authorization', 'Bearer ' + localStorage.getItem('token')).send(payload).then(function (response) {
      dispatch(doneUpdateMember(response));
      dispatch((0, _notifications.notificationSend)({
        message: 'Updated user.',
        kind: 'info',
        dismissAfter: 3000
      }));
    }).catch(function (err) {
      dispatch(failUpdateMember(err.message));
      dispatch((0, _notifications.notificationSend)({
        message: 'There was a problem updating the user.',
        kind: 'error',
        dismissAfter: 3000
      }));
    });
  };
}

var MEMBER_SELECTED = exports.MEMBER_SELECTED = 'MEMBER_SELECTED';

function memberSelected(userId) {
  return {
    type: MEMBER_SELECTED,
    id: userId
  };
}
var INITIAL_STATE = {
  isLoading: false,
  members: [],
  error: null,
  selected: {}
};

function membersReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case LOAD_MEMBERS_REQUEST:
    case UPDATE_MEMBER_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });
    case LOAD_MEMBERS_SUCCESS:
      return (0, _extends3.default)({}, state, {
        members: action.payload
      });
    case LOAD_MEMBERS_FAILURE:
    case UPDATE_MEMBER_FAILURE:
      return (0, _extends3.default)({}, state, {
        error: action.error,
        isLoading: false
      });
    case UPDATE_MEMBER_SUCCESS:
      return (0, _extends3.default)({}, state);
    case MEMBER_SELECTED:
      return (0, _extends3.default)({}, state, {
        selected: state.members.map(function (member, index) {
          console.log(member.id === action.id, member.id, action.id);
          return Object.assign(member, {
            selected: member.id === action.id ? true : false
          });
        })
      });
    default:
      return state;
  }
}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

exports.getMyProfile = getMyProfile;
exports.getPublicProfile = getPublicProfile;
exports.default = profileReducer;

var _superagent = __webpack_require__(24);

var _superagent2 = _interopRequireDefault(_superagent);

var _reactRouterRedux = __webpack_require__(18);

var _jwtDecode = __webpack_require__(99);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _browserHistory = __webpack_require__(356);

var _browserHistory2 = _interopRequireDefault(_browserHistory);

var _fetch = __webpack_require__(31);

var _fetch2 = _interopRequireDefault(_fetch);

var _notifications = __webpack_require__(21);

var _config = __webpack_require__(17);

var _constants = __webpack_require__(309);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * MY PROFILE ACTION TYPES
 */

function getMyProfile() {
  var token = localStorage.getItem('token');
  return function (dispatch) {
    dispatch({
      type: types.GET_MY_PROFILE_REQUEST
    });
    return (0, _fetch2.default)(_config.API_AUTH + '/check', {
      method: 'get',
      headers: { 'Content-Type': 'application/json', Authorization: '' + token }
    }).then(function (response) {
      if (response.ok) {
        return response.json().then(function (json) {
          dispatch({
            type: types.GET_MY_PROFILE_SUCCESS,
            payload: json
          });
        });
      } else {
        return response.json().then(function (json) {
          dispatch({
            type: types.GET_MY_PROFILE_FAIL,
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
      type: types.PUBLIC_PROFILE_REQUEST
    });
    return _superagent2.default.get(_config.API_BASE + '/users/' + userId).then(function (response) {
      if (response.status === 200) {
        dispatch({
          type: types.PUBLIC_PROFILE_SUCCESS,
          payload: response.body
        });
      }
    }).catch(function (err) {
      dispatch({
        type: types.PUBLIC_PROFILE_FAIL,
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
  display_name: '',
  email: '',
  first_name: '',
  gender: '',
  id: '',
  last_name: '',
  location: '',
  avatar_url: '',
  roleId: '',
  role: '',
  website: ''
};

/**
 * Profile Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
function profileReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case types.GET_MY_PROFILE_REQUEST:
    case types.PUBLIC_PROFILE_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });

    case types.GET_MY_PROFILE_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        bio: action.payload.bio,
        display_name: action.payload.display_name,
        email: action.payload.email,
        first_name: action.payload.first_name,
        id: action.payload.id,
        last_name: action.payload.last_name,
        location: action.payload.location,
        avatar_url: action.payload.avatar_url,
        roleId: action.payload.roleId,
        website: action.payload.website
      });
    case types.GET_MY_PROFILE_FAIL:
    case types.PUBLIC_PROFILE_FAIL:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        error: action.error
      });
    case types.PUBLIC_PROFILE_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        public: {
          email: action.payload.email,
          display_name: action.payload.display_name,
          first_name: action.payload.first_name,
          roleId: action.payload.roleId,
          id: action.payload.id
        }
      });
    default:
      return state;
  }
}

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = require("moment");

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports = require("redux-auth-wrapper");

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BoldrLogo = __webpack_require__(104);

var _BoldrLogo2 = _interopRequireDefault(_BoldrLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BoldrLogo2.default;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichTextInput = undefined;

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _lodash = __webpack_require__(100);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(29);

var _BoldrEditor = __webpack_require__(180);

var _BoldrEditor2 = _interopRequireDefault(_BoldrEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORMAT = 'html';

// inner control needed to map from the editor to reduxForm

var SimpleRte = function (_Component) {
  (0, _inherits3.default)(SimpleRte, _Component);

  function SimpleRte(props) {
    (0, _classCallCheck3.default)(this, SimpleRte);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SimpleRte.__proto__ || Object.getPrototypeOf(SimpleRte)).call(this, props));

    _this.state = {
      editorValue: _BoldrEditor2.default.createEmptyValue(),
      htmlValue: ''
    };
    _this.onEditorChange = _this.onEditorChange.bind(_this);
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
      return _react2.default.createElement(_BoldrEditor2.default, (0, _extends3.default)({}, otherProps, {
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _CardExpander = __webpack_require__(72);

var _CardExpander2 = _interopRequireDefault(_CardExpander);

var _contextTypes = __webpack_require__(43);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `CardActions` component is used for adding actions on your card.
 * The actions should be `FlatButton`s or `IconButton`s.
 *
 * This component can act as a `CardExpander`.
 */
var _ref = (0, _jsx3.default)(_CardExpander2.default, {});

var CardActions = function (_PureComponent) {
  (0, _inherits3.default)(CardActions, _PureComponent);

  function CardActions() {
    (0, _classCallCheck3.default)(this, CardActions);
    return (0, _possibleConstructorReturn3.default)(this, (CardActions.__proto__ || Object.getPrototypeOf(CardActions)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardActions, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var isExpander = _props.isExpander;
      var centered = _props.centered;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'isExpander', 'centered']);

      return _react2.default.createElement(
        'section',
        (0, _extends3.default)({}, props, { className: (0, _classnames2.default)('md-card-actions', className, { centered: centered }) }),
        (0, _jsx3.default)('div', {
          className: 'action-area'
        }, void 0, children),
        isExpander && _ref
      );
    }
  }]);
  return CardActions;
}(_react.PureComponent);

CardActions.propTypes = {
  /**
   * Boolean if this component should act as an expander and inject the
   * `CardExpander`.
   */
  isExpander: _react.PropTypes.bool,

  /**
   * An optional className to apply to the actions container.
   */
  className: _react.PropTypes.string,

  /**
   * An actions to display.
   */
  children: _react.PropTypes.node,

  /**
   * Boolean if the actions should be centered.
   */
  centered: _react.PropTypes.bool
};
CardActions.contextTypes = _contextTypes2.default;
exports.default = CardActions;

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

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _contextTypes = __webpack_require__(43);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _IconButton = __webpack_require__(42);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The CardExpander component is just a simple `IconButton` that
 * gets generated through the `Card`'s `contextTypes`. Props are not used
 * at all.
 *
 * Any component below a component that has this component inject into it
 * and has the prop `expandable={true}` will be toggleable when this is clicked.
 *
 * You can manually inject the `CardExpander` component yourself if you want to
 * use a component that is not a `CardActions` or a `CardTitle`.
 */
var CardExpander = function (_PureComponent) {
  (0, _inherits3.default)(CardExpander, _PureComponent);

  function CardExpander() {
    (0, _classCallCheck3.default)(this, CardExpander);
    return (0, _possibleConstructorReturn3.default)(this, (CardExpander.__proto__ || Object.getPrototypeOf(CardExpander)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardExpander, [{
    key: 'render',
    value: function render() {
      var _context = this.context;
      var isExpanded = _context.isExpanded;
      var onExpandClick = _context.onExpandClick;
      var iconClassName = _context.iconClassName;
      var iconChildren = _context.iconChildren;
      var tooltipPosition = _context.tooltipPosition;
      var tooltipLabel = _context.tooltipLabel;


      return (0, _jsx3.default)(_IconButton2.default, {
        className: (0, _classnames2.default)('md-card-expander', {
          'flipped': isExpanded
        }),
        onClick: onExpandClick,
        iconClassName: iconClassName,
        children: iconChildren,
        tooltipLabel: tooltipLabel,
        tooltipPosition: tooltipPosition
      });
    }
  }]);
  return CardExpander;
}(_react.PureComponent);

CardExpander.contextTypes = _contextTypes2.default;
exports.default = CardExpander;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _contextTypes = __webpack_require__(43);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _CardExpander = __webpack_require__(72);

var _CardExpander2 = _interopRequireDefault(_CardExpander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `CardTitle` component is used to display the main content title for the card.
 *
 * This can include an optional `Avatar` to display before the title as well as
 * an optional subtitle.
 *
 * This component can also act as an expander which will inject the `CardExpander`.
 */
var _ref = (0, _jsx3.default)(_CardExpander2.default, {});

var CardTitle = function (_PureComponent) {
  (0, _inherits3.default)(CardTitle, _PureComponent);

  function CardTitle() {
    (0, _classCallCheck3.default)(this, CardTitle);
    return (0, _possibleConstructorReturn3.default)(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var subtitle = _props.subtitle;
      var avatar = _props.avatar;
      var className = _props.className;
      var children = _props.children;
      var isExpander = _props.isExpander;
      var props = (0, _objectWithoutProperties3.default)(_props, ['title', 'subtitle', 'avatar', 'className', 'children', 'isExpander']);

      delete props.expandable;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, props, {
          className: (0, _classnames2.default)('md-card-title', className, {
            'title-large': !!avatar,
            'card-expander': isExpander
          })
        }),
        avatar,
        (0, _jsx3.default)('div', {
          className: 'titles'
        }, void 0, (0, _jsx3.default)('h2', {
          className: 'md-headline'
        }, void 0, title), subtitle && (0, _jsx3.default)('h3', {
          className: 'md-subheader'
        }, void 0, subtitle)),
        children,
        isExpander && _ref
      );
    }
  }]);
  return CardTitle;
}(_react.PureComponent);

CardTitle.propTypes = {
  /**
   * The main title to display.
   */
  title: _react.PropTypes.string.isRequired,

  /**
   * An optional subtitle.
   */
  subtitle: _react.PropTypes.string,

  /**
   * The optional className to apply.
   */
  className: _react.PropTypes.string,

  /**
   * An optional `Avatar` to display before the titles.
   */
  avatar: _react.PropTypes.node,

  /**
   * Any additional children to display after the titles.
   */
  children: _react.PropTypes.node,

  /**
   * Boolean if this should act as an expander. This will inject the
   * `CardExpander` after the titles and optional children.
   */
  isExpander: _react.PropTypes.bool,

  /**
   * Boolean if this component should be expandable when there is a `CardExpander`
   * above it in the `Card`.
   */
  expandable: _react.PropTypes.bool
};
CardTitle.defaultProps = {
  avatar: null
};
CardTitle.contextTypes = _contextTypes2.default;
exports.default = CardTitle;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A column in a table. This is either the `th` or `td` component. This column
 * can be automatically configured to be adjusted with additional padding
 * or auto expand to fill the remaining table space if the `TableRow` component
 * has `autoAdjust` set to `true`. If you would like to prevent this column
 * for being a candidate for auto expanding to remaining space, add the className
 * `.prevent-grow`.
 */
var TableColumn = function (_PureComponent) {
  (0, _inherits3.default)(TableColumn, _PureComponent);

  function TableColumn() {
    (0, _classCallCheck3.default)(this, TableColumn);
    return (0, _possibleConstructorReturn3.default)(this, (TableColumn.__proto__ || Object.getPrototypeOf(TableColumn)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var numeric = _props.numeric;
      var adjusted = _props.adjusted;
      var header = _props.header;
      var children = _props.children;
      var sorted = _props.sorted;
      var sortIconChildren = _props.sortIconChildren;
      var sortIconClassName = _props.sortIconClassName;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'numeric', 'adjusted', 'header', 'children', 'sorted', 'sortIconChildren', 'sortIconClassName']);

      var sortable = typeof sorted === 'boolean';

      var displayedChildren = [children];
      if (sortable) {
        displayedChildren = [(0, _jsx3.default)(_FontIcons2.default, {
          className: !sorted ? 'flipped' : null,
          iconClassName: sortIconClassName,
          children: sortIconChildren
        }, 'sort-icon'), (0, _jsx3.default)('span', {
          className: 'inline-top'
        }, 'children', children)];
      }

      return _react2.default.createElement(header ? 'th' : 'td', (0, _extends3.default)({}, props, {
        className: (0, _classnames2.default)('md-table-' + (header ? 'header' : 'data'), className, {
          numeric: numeric,
          adjusted: adjusted,
          sortable: sortable
        }),
        children: displayedChildren
      }));
    }
  }]);
  return TableColumn;
}(_react.PureComponent);

TableColumn.defaultProps = {
  header: false,
  sortIconClassName: 'material-icons',
  sortIconChildren: 'arrow_upward'
};
TableColumn.propTypes = {
  /**
   * The optional className for the table column
   */
  className: _react.PropTypes.string,

  /**
   * The children to display in the column.
   */
  children: _react.PropTypes.node,

  /**
   * Boolean if the column is currently sorted. If this prop is not `undefined`,
   * it will add the sort icon unto this column. You will also need to use the
   * `onClick` function to toggle the `sorted` prop as well as handling the sorting
   * of data.
   *
   * This value should really only be set in the `TableHeader` component.
   */
  sorted: _react.PropTypes.bool,

  /**
   * The optional icon children to display in the sort icon.
   */
  sortIconChildren: _react.PropTypes.node,

  /**
   * The icon className for the sort icon.
   */
  sortIconClassName: _react.PropTypes.string.isRequired,

  /**
   * A boolean if the column has numeric data. It will right-align the data.
   */
  numeric: _react.PropTypes.bool,

  /**
   * Boolean if this column should be adjusted with additional padding. This *should*
   * be handled automatically by the `TableRow` component but can be set manually as well.
   */
  adjusted: _react.PropTypes.bool,

  /**
   * Boolean if this is a `th` component. This value **should** be set
   * automatically for you if it is in the `TableHeader` component.
   */
  header: _react.PropTypes.bool.isRequired
};
exports.default = TableColumn;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _contextTypes = __webpack_require__(37);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, _contextTypes2.default, { header: _react.PropTypes.bool });

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The divider component will pass all other props such as style or
 * event listeners on to the component.
 */
var Divider = function (_PureComponent) {
  (0, _inherits3.default)(Divider, _PureComponent);

  function Divider() {
    (0, _classCallCheck3.default)(this, Divider);
    return (0, _possibleConstructorReturn3.default)(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).apply(this, arguments));
  }

  (0, _createClass3.default)(Divider, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var inset = _props.inset;
      var vertical = _props.vertical;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'inset', 'vertical']);
      // When in a list

      delete props.expanderIconChildren;
      delete props.expanderIconClassName;

      var dividerProps = (0, _extends3.default)({
        role: 'divider',
        className: (0, _classnames2.default)('md-divider', className, { inset: inset, vertical: vertical })
      }, props);

      return _react2.default.createElement(vertical ? 'div' : 'hr', dividerProps);
    }
  }]);
  return Divider;
}(_react.PureComponent);

Divider.propTypes = {
  /**
   * An optional className to apply to the divider.
   */
  className: _react.PropTypes.string,

  /**
   * Boolean if this divider should be inset relative to it's container
   * component. This means that if it is in a `List` with `Avatar`, it
   * will start the divider  to the left of the main text in the list.
   */
  inset: _react.PropTypes.bool,

  /**
   * Boolean if the divider should be vertical instead of horizontal.
   */
  vertical: _react.PropTypes.bool
};
exports.default = Divider;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Any additional props such as style or event listeners will also be included.
 */
var FontIcon = function (_PureComponent) {
  (0, _inherits3.default)(FontIcon, _PureComponent);

  function FontIcon() {
    (0, _classCallCheck3.default)(this, FontIcon);
    return (0, _possibleConstructorReturn3.default)(this, (FontIcon.__proto__ || Object.getPrototypeOf(FontIcon)).apply(this, arguments));
  }

  (0, _createClass3.default)(FontIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var iconClassName = _props.iconClassName;
      var className = _props.className;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['iconClassName', 'className', 'children']);

      return _react2.default.createElement(
        'i',
        (0, _extends3.default)({ className: (0, _classnames2.default)('md-icon', iconClassName, className) }, props),
        children
      );
    }
  }]);
  return FontIcon;
}(_react.PureComponent);

FontIcon.propTypes = {
  /**
   * The icon font library className to use to display the icon.
   */
  iconClassName: _react.PropTypes.string.isRequired,

  /**
   * Any children required to display the icon with the font library.
   */
  children: _react.PropTypes.node,

  /**
   * An optional className to apply to the `FontIcon`.
   */
  className: _react.PropTypes.string
};
FontIcon.defaultProps = {
  iconClassName: 'material-icons'
};
exports.default = FontIcon;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItemText = function (_PureComponent) {
  (0, _inherits3.default)(ListItemText, _PureComponent);

  function ListItemText() {
    (0, _classCallCheck3.default)(this, ListItemText);
    return (0, _possibleConstructorReturn3.default)(this, (ListItemText.__proto__ || Object.getPrototypeOf(ListItemText)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListItemText, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var primaryText = _props.primaryText;
      var secondaryText = _props.secondaryText;
      var props = (0, _objectWithoutProperties3.default)(_props, ['primaryText', 'secondaryText']);

      var className = (0, _classnames2.default)('md-tile-content', props.className);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, props, { className: className }),
        (0, _jsx3.default)('div', {
          className: 'md-tile-primary-text'
        }, void 0, primaryText),
        secondaryText && (0, _jsx3.default)('div', {
          className: 'md-tile-secondary-text'
        }, void 0, secondaryText)
      );
    }
  }]);
  return ListItemText;
}(_react.PureComponent);

ListItemText.propTypes = {
  primaryText: _react.PropTypes.node.isRequired,
  secondaryText: _react.PropTypes.node,
  className: _react.PropTypes.string
};
exports.default = ListItemText;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemControl = exports.ListItem = exports.List = undefined;

var _List2 = __webpack_require__(59);

var _List3 = _interopRequireDefault(_List2);

var _ListItem2 = __webpack_require__(60);

var _ListItem3 = _interopRequireDefault(_ListItem2);

var _ListItemControl2 = __webpack_require__(146);

var _ListItemControl3 = _interopRequireDefault(_ListItemControl2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.List = _List3.default;
exports.ListItem = _ListItem3.default;
exports.ListItemControl = _ListItemControl3.default;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Menu = __webpack_require__(148);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Menu2.default;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SelectField = __webpack_require__(158);

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SelectField2.default;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _InkedControl = __webpack_require__(161);

var _InkedControl2 = _interopRequireDefault(_InkedControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is the component that is used for the `Checkbox` component
 * and the `Radio` component. This is a label that includes
 * the input type, an icon showing the state of the control,
 * and an optional label.
 */
var ControlContainer = function (_PureComponent) {
  (0, _inherits3.default)(ControlContainer, _PureComponent);

  function ControlContainer(props) {
    (0, _classCallCheck3.default)(this, ControlContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ControlContainer.__proto__ || Object.getPrototypeOf(ControlContainer)).call(this, props));

    _this.state = { checked: props.defaultChecked };
    _this._handleChange = _this._handleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ControlContainer, [{
    key: '_isChecked',
    value: function _isChecked(props, state) {
      return typeof props.checked === 'undefined' ? state.checked : props.checked;
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(e) {
      var _props = this.props;
      var onChange = _props.onChange;
      var value = _props.value;
      var type = _props.type;

      var checked = !this._isChecked(this.props, this.state);
      if (onChange) {
        var arg = type === 'radio' ? value : checked;
        onChange(arg, e);
      }

      // prevents 2 change events triggering
      e.stopPropagation();

      if (typeof this.props.checked === 'undefined') {
        this.setState({ checked: checked });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var isChecked = this._isChecked(this.props, this.state);
      var _props2 = this.props;
      var className = _props2.className;
      var disabled = _props2.disabled;
      var label = _props2.label;
      var labelBefore = _props2.labelBefore;
      var checkedIcon = _props2.checkedIcon;
      var uncheckedIcon = _props2.uncheckedIcon;
      var name = _props2.name;
      var value = _props2.value;
      var type = _props2.type;
      var onClick = _props2.onClick;
      var id = _props2.id;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'disabled', 'label', 'labelBefore', 'checkedIcon', 'uncheckedIcon', 'name', 'value', 'type', 'onClick', 'id']);


      delete props.checked;

      return _react2.default.createElement(
        'label',
        (0, _extends3.default)({}, props, {
          htmlFor: id,
          className: (0, _classnames2.default)('md-control-container', className, { disabled: disabled })
        }),
        labelBefore && label,
        (0, _jsx3.default)('input', {
          id: id,
          onClick: onClick,
          disabled: disabled,
          type: type,
          className: 'md-control-input',
          checked: isChecked,
          onChange: this._handleChange,
          name: name,
          value: value
        }),
        (0, _jsx3.default)(_InkedControl2.default, {
          type: type,
          checked: isChecked,
          disabled: disabled
        }, void 0, isChecked ? checkedIcon : uncheckedIcon),
        !labelBefore && label
      );
    }
  }]);
  return ControlContainer;
}(_react.PureComponent);

ControlContainer.propTypes = {
  /**
   * The type of the selection control.
   */
  type: _react.PropTypes.oneOf(['radio', 'checkbox']).isRequired,

  /**
   * The optional className to apply to the surrounding label.
   */
  className: _react.PropTypes.string,

  /**
   * Boolean if the control is disabled.
   */
  disabled: _react.PropTypes.bool,

  /**
   * An optional function to call when the checked state is called.
   */
  onChange: _react.PropTypes.func,

  /**
   * An optional value for the control field.
   */
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

  /**
   * Boolean if the control field is checked by default.
   */
  defaultChecked: _react.PropTypes.bool.isRequired,

  /**
   * Boolean if this control is currently checked. This will
   * require the `onChange` prop to be defined since it will
   * become a controlled component.
   */
  checked: _react.PropTypes.bool,

  /**
   * The icon to use for the checked state.
   */
  checkedIcon: _react.PropTypes.node.isRequired,

  /**
   * The icon to use for the unchecked state.
   */
  uncheckedIcon: _react.PropTypes.node.isRequired,

  /**
   * An optional label to display with the control.
   */
  label: _react.PropTypes.node,

  /**
   * Boolean if the label should be displayed before or after the control field.
   */
  labelBefore: _react.PropTypes.bool.isRequired,

  /**
   * An optional form name to give to the control.
   */
  name: _react.PropTypes.string,

  /**
   * An optional onClik function.
   */
  onClick: _react.PropTypes.func,

  /**
   * An optional id for the control item.
   */
  id: _react.PropTypes.string
};
exports.default = ControlContainer;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _ControlContainer = __webpack_require__(82);

var _ControlContainer2 = _interopRequireDefault(_ControlContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `Radio` component can be used with the `RadioGroup` component for
 * additional state management. It is completely optional to use these
 * two components together though. It is just to eliminate some redundancies.
 */
var Radio = function (_PureComponent) {
  (0, _inherits3.default)(Radio, _PureComponent);

  function Radio() {
    (0, _classCallCheck3.default)(this, Radio);
    return (0, _possibleConstructorReturn3.default)(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
  }

  (0, _createClass3.default)(Radio, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_ControlContainer2.default, (0, _extends3.default)({}, this.props, { type: 'radio' }));
    }
  }]);
  return Radio;
}(_react.PureComponent);

Radio.propTypes = {
  /**
   * The optional className to apply to the surrounding label.
   */
  className: _react.PropTypes.string,

  /**
   * Boolean if the radio is disabled.
   */
  disabled: _react.PropTypes.bool,

  /**
   * An optional function to call when the checked state is called.
   * The radio value and change event will be passed.
   *
   * `onChange(value, event)`.
   */
  onChange: _react.PropTypes.func,

  /**
   * The value for the radio
   */
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,

  /**
   * Boolean if the radio should be checked by default. Only use this
   * if you are not using the `RadioGroup` component.
   */
  defaultChecked: _react.PropTypes.bool.isRequired,

  /**
   * Boolean if the radio button is checked. If you are using the
   * `RadioGroup` component, this will be injected automatically
   * for you. If this prop is defined, it has become a controlled component
   * so you will need to use include the `onChange` prop as well.
   */
  checked: _react.PropTypes.bool,

  /**
   * The icon to use for the checked state of the radio.
   */
  checkedIcon: _react.PropTypes.node.isRequired,

  /**
   * The icon to use for the unchecked state of the radio.
   */
  uncheckedIcon: _react.PropTypes.node.isRequired,

  /**
  * The optional label to display with the radio button.
  */
  label: _react.PropTypes.node,

  /**
   * Boolean if the label should appear before the radio button.
   */
  labelBefore: _react.PropTypes.bool.isRequired,

  /**
   * The name to use for the radio. If you are usng the `RadioGroup` component,
   * this will be injected automatically.
   */
  name: _react.PropTypes.string
};
Radio.defaultProps = {
  labelBefore: false,
  defaultChecked: false,
  checkedIcon: (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'radio_button_checked'),
  uncheckedIcon: (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'radio_button_unchecked')
};
exports.default = Radio;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Subheader = __webpack_require__(163);

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Subheader2.default;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A toolbar is a container that has an optional title and action areas.
 *
 * If you do not want to use the `NavigationDrawer` component, you can get
 * almost the same effect by combining the `Toolbar` and `Sidebar` components.
 */
var Toolbar = function (_PureComponent) {
  (0, _inherits3.default)(Toolbar, _PureComponent);

  function Toolbar(props) {
    (0, _classCallCheck3.default)(this, Toolbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Toolbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.refs.content) {
        return;
      }

      var tabs = (0, _reactDom.findDOMNode)(this.refs.content);
      if (tabs.querySelector('.md-tabs.tabs-centered') || tabs.querySelector('.md-tabs.fixed-width')) {
        return;
      }

      var actionLeft = (0, _reactDom.findDOMNode)(this).querySelector('.action-left');
      if (!actionLeft) {
        return;
      }
      var actionLeftMargin = parseInt(window.getComputedStyle(actionLeft, null).getPropertyValue('margin-left'), 10);
      var offset = tabs.querySelector('.md-tab-label > div').offsetLeft;

      /* eslint-disable react/no-did-mount-set-state*/
      this.setState({
        tabsOffset: actionLeftMargin * 2 + actionLeft.offsetWidth - offset + 'px'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var actionLeft = _props.actionLeft;
      var title = _props.title;
      var actionsRight = _props.actionsRight;
      var children = _props.children;
      var fixed = _props.fixed;
      var primary = _props.primary;
      var className = _props.className;
      var containerStyle = _props.containerStyle;
      var containerClassName = _props.containerClassName;
      var props = (0, _objectWithoutProperties3.default)(_props, ['actionLeft', 'title', 'actionsRight', 'children', 'fixed', 'primary', 'className', 'containerStyle', 'containerClassName']);
      var tabsOffset = this.state.tabsOffset;

      var childrenAsHeader = !!children && !actionLeft && !title && !actionsRight;

      var header = void 0;
      if (childrenAsHeader) {
        header = children;
      } else {
        header = [actionLeft && _react2.default.cloneElement(actionLeft, { key: 'action-left', className: 'action-left' }), title && (0, _jsx3.default)('h3', {
          className: 'md-title'
        }, 'title', title), actionsRight && _react2.default.cloneElement(actionsRight, { key: 'actions-right' })];
      }

      var content = void 0;
      if (!childrenAsHeader && children) {
        content = _react2.default.cloneElement(children, {
          ref: 'content',
          style: Object.assign({}, children.props.style, { marginLeft: tabsOffset })
        });
      }
      return (0, _jsx3.default)('div', {
        className: (0, _classnames2.default)('md-toolbar-container', containerClassName, { fixed: fixed }),
        style: containerStyle
      }, void 0, _react2.default.createElement(
        'header',
        (0, _extends3.default)({}, props, {
          className: (0, _classnames2.default)('md-toolbar', className, { 'md-primary': primary })
        }),
        header
      ), content);
    }
  }]);
  return Toolbar;
}(_react.PureComponent);

Toolbar.propTypes = {
  /**
   * An optional style to apply to the toobar header.
   */
  style: _react.PropTypes.object,

  /**
   * An optional style to apply to the toolbar container.
   */
  containerStyle: _react.PropTypes.object,

  /**
   * An optional className to apply to the header.
   */
  className: _react.PropTypes.string,

  /**
   * An optional className to apply to the toolbar container.
   */
  containerClassName: _react.PropTypes.string,

  /**
   * Boolean if the toolbar should be styled with the primary color.
   */
  primary: _react.PropTypes.bool,

  /**
   * An element to render to the left of the toolbar's title. This is normally a
   * Hamburger menu button or some sort of button.
   */
  actionLeft: _react.PropTypes.element,

  /**
   * A title to include in the toolbar.
   */
  title: _react.PropTypes.string,

  /**
   * Any children to display underneath the toolbar title. This will
   * normally be the `Tabs` component.
   */
  children: _react.PropTypes.node,

  /**
   * Any elements or nodes to display to the right of the toolbar title.
   */
  actionsRight: _react.PropTypes.node,

  /**
   * Boolean if the toolbar is fixed to the top of the page. If this is set to true,
   * box-shadow will be added and any relative components/DOM nodes will have
   * additional spacing applied to them.
   */
  fixed: _react.PropTypes.bool
};
Toolbar.defaultProps = {
  primary: true
};
exports.default = Toolbar;

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

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(23);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is a controlled component for rendering an overlay on the page.
 *
 * Any event listeners will be applied to overlay instead of the `CSSTransitionGroup`
 * containing the overlay when open.
 */
var Overlay = function (_PureComponent) {
  (0, _inherits3.default)(Overlay, _PureComponent);

  function Overlay() {
    (0, _classCallCheck3.default)(this, Overlay);
    return (0, _possibleConstructorReturn3.default)(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  (0, _createClass3.default)(Overlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var isOpen = _props.isOpen;
      var component = _props.component;
      var style = _props.style;
      var className = _props.className;
      var overlayStyle = _props.overlayStyle;
      var overlayClassName = _props.overlayClassName;
      var transitionName = _props.transitionName;
      var transitionEnterTimeout = _props.transitionEnterTimeout;
      var transitionLeaveTimeout = _props.transitionLeaveTimeout;
      var props = (0, _objectWithoutProperties3.default)(_props, ['isOpen', 'component', 'style', 'className', 'overlayStyle', 'overlayClassName', 'transitionName', 'transitionEnterTimeout', 'transitionLeaveTimeout']);


      var overlay = void 0;
      if (isOpen) {
        var overlayProps = (0, _extends3.default)({
          key: 'overlay',
          style: overlayStyle,
          className: (0, _classnames2.default)('md-overlay', overlayClassName)
        }, props);

        overlay = _react2.default.createElement('div', overlayProps);
      }

      return (0, _jsx3.default)(_reactAddonsCssTransitionGroup2.default, {
        component: component,
        style: style,
        className: className,
        transitionName: transitionName,
        transitionEnterTimeout: transitionEnterTimeout,
        transitionLeaveTimeout: transitionLeaveTimeout
      }, void 0, overlay);
    }
  }]);
  return Overlay;
}(_react.PureComponent);

Overlay.propTypes = {
  /**
   * Boolean if the Overlay is currently open.
   */
  isOpen: _react.PropTypes.bool.isRequired,

  /**
   * An optional function to call when the overlay is clicked.
   */
  onClick: _react.PropTypes.func,

  /**
   * The transition name for the overlay.
   */
  transitionName: _react.PropTypes.string.isRequired,

  /**
   * The enter timeout for the overlay when it has been toggled on.
   */
  transitionEnterTimeout: _react.PropTypes.number.isRequired,

  /**
   * The leave timeout for the overlay when it has been toggled off.
   */
  transitionLeaveTimeout: _react.PropTypes.number.isRequired,

  /**
   * An optional style to apply to the `CSSTransitionGroup` containing the overlay.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply to the `CSSTransitionGroup` holding the overlay.
   */
  className: _react.PropTypes.string,

  /**
   * The component to render the `CSSTransitionGroup` as.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,

  /**
   * An optional style to apply to the overlay itself.
   */
  overlayStyle: _react.PropTypes.object,

  /**
   * An optional className to apply to the overlay itself.
   */
  overlayClassName: _react.PropTypes.string
};
Overlay.defaultProps = {
  component: 'span',
  transitionName: 'md-overlay',
  transitionEnterTimeout: 150,
  transitionLeaveTimeout: 150
};
exports.default = Overlay;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = ButtonGroup;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonGroup = __webpack_require__(317);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonGroup(props_) {
  var className = (0, _classnames2.default)(props_.className, _ButtonGroup2.default.root);
  return _react2.default.createElement('div', (0, _extends3.default)({}, props_, { className: className }));
}

// $FlowIssue - Flow doesn't understand CSS Modules

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

if (true) {
  module.exports = __webpack_require__(219).default; // eslint-disable-line global-require
} else {
  module.exports = require('./createStore.dev').default; // eslint-disable-line global-require
}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(40);

var _reactRouterRedux = __webpack_require__(18);

var _reduxForm = __webpack_require__(29);

var _post = __webpack_require__(28);

var _post2 = _interopRequireDefault(_post);

var _reducer = __webpack_require__(247);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(66);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(251);

var _reducer6 = _interopRequireDefault(_reducer5);

var _members = __webpack_require__(65);

var _members2 = _interopRequireDefault(_members);

var _media = __webpack_require__(93);

var _media2 = _interopRequireDefault(_media);

var _auth = __webpack_require__(239);

var _auth2 = _interopRequireDefault(_auth);

var _boldr = __webpack_require__(50);

var _boldr2 = _interopRequireDefault(_boldr);

var _notifications = __webpack_require__(21);

var _notifications2 = _interopRequireDefault(_notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  notifications: _notifications2.default,
  auth: _auth2.default,
  boldr: _boldr2.default,
  posts: _post2.default,
  currentPost: _reducer2.default,
  members: _members2.default,
  media: _media2.default,
  form: _reduxForm.reducer,
  tags: _reducer6.default,
  profile: _reducer4.default
});

exports.default = reducers;

/***/ },
/* 90 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
var LOGIN_FAILURE = exports.LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE';

var LOGOUT_USER = exports.LOGOUT_USER = 'AUTH/LOGOUT_USER';
var LOGOUT_USER_FAIL = exports.LOGOUT_USER_FAIL = 'AUTH/LOGOUT_USER_FAIL';

var CHECK_AUTH_REQUEST = exports.CHECK_AUTH_REQUEST = 'AUTH/CHECK_AUTH_REQUEST';
var CHECK_AUTH_SUCCESS = exports.CHECK_AUTH_SUCCESS = 'AUTH/CHECK_AUTH_SUCCESS';
var CHECK_AUTH_FAILURE = exports.CHECK_AUTH_FAILURE = 'AUTH/CHECK_AUTH_FAILURE';

// Account
var CREATE_ACCOUNT_REQUEST = exports.CREATE_ACCOUNT_REQUEST = 'AUTH/CREATE_ACCOUNT_REQUEST';
var CREATE_ACCOUNT_SUCCESS = exports.CREATE_ACCOUNT_SUCCESS = 'AUTH/CREATE_ACCOUNT_SUCCESS';
var CREATE_ACCOUNT_FAILURE = exports.CREATE_ACCOUNT_FAILURE = 'AUTH/CREATE_ACCOUNT_FAILURE';

var FORGOT_PASSWORD_REQUEST = exports.FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
var FORGOT_PASSWORD_SUCCESS = exports.FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
var FORGOT_PASSWORD_FAILURE = exports.FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

var RESET_PASSWORD_REQUEST = exports.RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
var RESET_PASSWORD_SUCCESS = exports.RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
var RESET_PASSWORD_FAILURE = exports.RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOAD_TAG_FAILURE = exports.LOAD_TAG_SUCCESS = exports.LOAD_TAG_REQUEST = undefined;
exports.requestPostTags = requestPostTags;

var _fetch = __webpack_require__(31);

var _fetch2 = _interopRequireDefault(_fetch);

var _config = __webpack_require__(17);

var _helpers = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_TAG_REQUEST = exports.LOAD_TAG_REQUEST = 'LOAD_TAG_REQUEST';
var LOAD_TAG_SUCCESS = exports.LOAD_TAG_SUCCESS = 'LOAD_TAG_SUCCESS';
var LOAD_TAG_FAILURE = exports.LOAD_TAG_FAILURE = 'LOAD_TAG_FAILURE';

/**
 * Select Post
 * @description Used when on the article list state.
 */
var requestTag = function requestTag() {
  return {
    type: LOAD_TAG_REQUEST
  };
};

var receiveTag = function receiveTag(json) {
  return {
    type: LOAD_TAG_SUCCESS,
    result: json
  };
};

var failedToReceiveTag = function failedToReceiveTag(err) {
  return {
    type: LOAD_TAG_FAILURE,
    error: err
  };
};

function requestPostTags(tagId) {
  return function (dispatch) {
    dispatch(requestTag());
    return (0, _fetch2.default)(_config.API_BASE + '/tags/' + tagId + '/posts').then(function (response) {
      return (0, _helpers.processResponse)(response);
    }).then(function (json) {
      return dispatch(receiveTag(json));
    }).catch(function (err) {
      dispatch(failedToReceiveTag(err));
    });
  };
}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostCard = __webpack_require__(258);

var _PostCard2 = _interopRequireDefault(_PostCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PostCard2.default;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

exports.fetchMediaSuccess = fetchMediaSuccess;
exports.fetchMediaFail = fetchMediaFail;
exports.fetchMedia = fetchMedia;
exports.uploadSuccess = uploadSuccess;
exports.uploadFail = uploadFail;
exports.uploadFiles = uploadFiles;
exports.default = mediaReducer;

var _superagent = __webpack_require__(24);

var _superagent2 = _interopRequireDefault(_superagent);

var _fetch = __webpack_require__(31);

var _fetch2 = _interopRequireDefault(_fetch);

var _notifications = __webpack_require__(21);

var _config = __webpack_require__(17);

var _constants = __webpack_require__(277);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchMediaStart = function fetchMediaStart() {
  return { type: types.GET_MEDIA_REQUEST };
};
// Fetch Articles Success
function fetchMediaSuccess(response) {
  return {
    type: types.GET_MEDIA_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
function fetchMediaFail(err) {
  return {
    type: types.GET_MEDIA_FAIL,
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
  return { type: types.UPLOAD_REQUEST };
};
// Fetch Articles Success
function uploadSuccess(response) {
  return {
    type: types.UPLOAD_SUCCESS,
    payload: response.body
  };
}
// Fetch Articles Error
function uploadFail(err) {
  return {
    type: types.UPLOAD_FAIL,
    error: err
  };
}

function uploadFiles(payload) {
  return function (dispatch) {
    dispatch(beginUpload());
    return _superagent2.default.post(_config.API_MEDIA + '/dashboard', payload).set('Authorization', '' + localStorage.getItem(_config.TOKEN_KEY)).then(function (response) {
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
    case types.GET_MEDIA_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });
    case types.GET_MEDIA_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        files: action.payload
      });
    case types.GET_MEDIA_FAIL:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        error: action.payload
      });
    default:
      return state;
  }
}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EditorForm = __webpack_require__(294);

var _EditorForm2 = _interopRequireDefault(_EditorForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _EditorForm2.default;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inlineStyles = undefined;

var _inlineStyles = __webpack_require__(19);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.inlineStyles = _inlineStyles2.default;

/***/ },
/* 96 */
/***/ function(module, exports) {



/***/ },
/* 97 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 98 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 99 */
/***/ function(module, exports) {

module.exports = require("jwt-decode");

/***/ },
/* 100 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 101 */
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 102 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/Link");

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _path = __webpack_require__(353);

var _path2 = _interopRequireDefault(_path);

var _http = __webpack_require__(350);

var _http2 = _interopRequireDefault(_http);

var _express = __webpack_require__(349);

var _express2 = _interopRequireDefault(_express);

var _httpProxy = __webpack_require__(351);

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _compression = __webpack_require__(341);

var _compression2 = _interopRequireDefault(_compression);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(101);

var _server2 = _interopRequireDefault(_server);

var _match = __webpack_require__(358);

var _match2 = _interopRequireDefault(_match);

var _createMemoryHistory = __webpack_require__(357);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _RouterContext = __webpack_require__(355);

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _reactRouterRedux = __webpack_require__(18);

var _reactRedux = __webpack_require__(9);

var _redial = __webpack_require__(16);

var _createStore = __webpack_require__(88);

var _createStore2 = _interopRequireDefault(_createStore);

var _ApiClient = __webpack_require__(215);

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _config = __webpack_require__(17);

var _index = __webpack_require__(311);

var _index2 = _interopRequireDefault(_index);

var _atm = __webpack_require__(109);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Server deps
var debug = __webpack_require__(342)('boldr:ssr-server');
// Boldr Deps

// React Deps


var targetUrl = 'http://' + _config.API_HOST + ':' + _config.API_PORT + '/api/v1';
var app = new _express2.default();
var server = _http2.default.createServer(app);
var proxy = _httpProxy2.default.createProxyServer({
  target: targetUrl,
  ws: true
});

app.use((0, _compression2.default)());

app.use(_express2.default.static(_path2.default.join(__dirname, 'assets')));
app.use('/assets', _express2.default.static(__dirname + '/assets'));

app.use('/api/v1', function (req, res) {
  proxy.web(req, res, { target: targetUrl });
});

proxy.on('error', function (error, req, res) {
  if (error.code !== 'ECONNRESET') {
    debug('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' });
  }

  var json = { error: 'proxy_error', reason: error.message };
  res.end(JSON.stringify(json));
});

app.use(function (req, res) {
  if (false) {
    webpackIsomorphicTools.refresh();
  }
  var client = new _ApiClient2.default(req);
  var memoryHistory = (0, _createMemoryHistory2.default)(req.originalUrl);
  var location = memoryHistory.createLocation(req.originalUrl);
  var store = (0, _createStore2.default)(memoryHistory, client);
  var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);

  function hydrateOnClient() {
    res.send('<!doctype html>\n' + // eslint-disable-line
    _server2.default.renderToString((0, _jsx3.default)(_atm2.default, {
      assets: webpackIsomorphicTools.assets(),
      store: store
    })));
  }

  if (false) {
    hydrateOnClient();
    return;
  }

  (0, _match2.default)({ history: history, routes: (0, _index2.default)(store), location: location }, function (error, redirectLocation, renderProps) {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      var dispatch = store.dispatch;
      var getState = store.getState;


      var locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        helpers: client,
        dispatch: dispatch,
        getState: getState
      };

      var components = renderProps.components;


      (0, _redial.trigger)('fetch', components, locals).then(function () {
        var component = (0, _jsx3.default)(_reactRedux.Provider, {
          store: store
        }, 'provider', _react2.default.createElement(_RouterContext2.default, renderProps));
        res.status(200);
        global.navigator = { userAgent: req.headers['user-agent'] };
        res.send('<!doctype html>\n' + // eslint-disable-line
        _server2.default.renderToString((0, _jsx3.default)(_atm2.default, {
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

server.listen(_config.SSR_PORT);
console.log('🎯   ===> Application running in ' + "production" + ' on ' + _config.SSR_PORT);

exports.default = server;
/* WEBPACK VAR INJECTION */}.call(exports, ""))

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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _SelectFields = __webpack_require__(81);

var _SelectFields2 = _interopRequireDefault(_SelectFields);

var _createFormComponent = __webpack_require__(54);

var _createFormComponent2 = _interopRequireDefault(_createFormComponent);

var _mapError = __webpack_require__(55);

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createFormComponent2.default)(_SelectFields2.default, function (_ref) {
  var _ref$input = _ref.input;
  var _onChange = _ref$input.onChange;
  var inputProps = (0, _objectWithoutProperties3.default)(_ref$input, ['onChange']);
  var props = (0, _objectWithoutProperties3.default)(_ref, ['input']);
  return (0, _extends3.default)({}, (0, _mapError2.default)(props), inputProps, {
    onChange: function onChange(event, index, value) {
      return _onChange(value);
    }
  });
});

/***/ },
/* 106 */
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
    paddingBottom: props.bottom,
    fontSize: props.override,
    textDecoration: props.textDeco
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
  bottom: _react.PropTypes.string,
  override: _react.PropTypes.string,
  textDeco: _react.PropTypes.string
};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Heading = __webpack_require__(106);

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Heading2.default;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(101);

var _server2 = _interopRequireDefault(_server);

var _serializeJavascript = __webpack_require__(360);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(33);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_reactHelmet2.default, {});

var _ref2 = (0, _jsx3.default)('meta', {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1'
});

var _ref3 = (0, _jsx3.default)('script', {
  src: '/assets/dlls/dll__vendor.js',
  charSet: 'UTF-8'
}, 'dlls__vendor');

var Html = function (_Component) {
  (0, _inherits3.default)(Html, _Component);

  function Html() {
    (0, _classCallCheck3.default)(this, Html);
    return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || Object.getPrototypeOf(Html)).apply(this, arguments));
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
      }, void 0, (0, _jsx3.default)('head', {}, void 0, _ref, head.base.toComponent(), head.title.toComponent(), head.meta.toComponent(), head.link.toComponent(), head.script.toComponent(), _ref2, Object.keys(assets.styles).map(function (style, key) {
        return (0, _jsx3.default)('link', {
          href: assets.styles[style],
          media: 'screen, projection',
          rel: 'stylesheet',
          type: 'text/css',
          charSet: 'UTF-8'
        }, key);
      }), Object.keys(assets.styles).length === 0 ? (0, _jsx3.default)('style', {
        dangerouslySetInnerHTML: { __html: '#content{display:none}' }
      }) : null), (0, _jsx3.default)('body', {}, void 0, (0, _jsx3.default)('div', {
        id: 'content',
        dangerouslySetInnerHTML: { __html: content }
      }), (0, _jsx3.default)('script', {
        dangerouslySetInnerHTML: {
          __html: 'window.PRELOAD_STATE=' + (0, _serializeJavascript2.default)(store.getState()) + ';' },
        charSet: 'UTF-8'
      }), __DLLS__ && [_ref3], !__DLLS__ && [(0, _jsx3.default)('script', {
        src: assets.javascript.vendor,
        charSet: 'UTF-8'
      }, 'vendor')], (0, _jsx3.default)('script', {
        src: assets.javascript.main,
        charSet: 'UTF-8'
      }), Object.keys(assets.styles).length === 0 ? (0, _jsx3.default)('script', {
        dangerouslySetInnerHTML: { __html: 'document.getElementById("content").style.display="block";' }
      }) : null));
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Html = __webpack_require__(108);

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Html2.default;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(23);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _Progress = __webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function (_Component) {
  (0, _inherits3.default)(Loader, _Component);

  function Loader() {
    (0, _classCallCheck3.default)(this, Loader);
    return (0, _possibleConstructorReturn3.default)(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loader, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var loading = _props.loading;
      var props = (0, _objectWithoutProperties3.default)(_props, ['style', 'loading']);


      var loadingDiv = void 0;
      var loadingStyle = {};
      if (loading) {
        loadingDiv = (0, _jsx3.default)('div', {
          style: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center'
          }
        }, void 0, (0, _jsx3.default)(_reactAddonsCssTransitionGroup2.default, {
          component: 'div',
          className: 'text-container',
          transitionName: 'opacity',
          transitionEnterTimeout: 150,
          transitionLeaveTimeout: 150
        }, void 0, (0, _jsx3.default)(_Progress.CircularProgress, {
          style: { margin: '0 auto' }
        }, 'progress')));
        loadingStyle.opacity = 0.2;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ style: Object.assign({ position: 'relative', width: '100%' }, style) }, props),
        loadingDiv,
        (0, _jsx3.default)('div', {
          style: loadingStyle
        }, void 0, this.props.children)
      );
    }
  }]);
  return Loader;
}(_react.Component);

Loader.defaultProps = {
  loading: false
};
exports.default = Loader;


Loader.propTypes = {
  loading: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  style: _react.PropTypes.object
};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _style = __webpack_require__(96);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var inline = {
  zIndex: '99999',
  boxSizing: 'border-box',
  width: '100%',
  padding: '1em',
  position: 'fixed',
  bottom: '2rem',
  backgroundColor: '#212121',
  color: 'rgb(250, 250, 250)',
  lineHeight: '16px',
  boxShadow: '0 0 1px 1px rgba(10, 10, 11, .125)',
  borderRadius: '3px',
  maxWidth: '320px',
  textRendering: 'optimizeLegibility',
  WebKittransition: '.5s cubic-bezier(0.89, 0.01, 0.5, 1.1)',
  MozTransition: '.5s cubic-bezier(0.89, 0.01, 0.5, 1.1)',
  msTransition: '.5s cubic-bezier(0.89, 0.01, 0.5, 1.1)',
  OTransition: '.5s cubic-bezier(0.89, 0.01, 0.5, 1.1)',
  transition: '.5s cubic-bezier(0.89, 0.01, 0.5, 1.1)',
  WebkitTransform: 'translatez(0)',
  MozTransform: 'translatez(0)',
  msTransform: 'translatez(0)',
  OTransform: 'translatez(0)',
  transform: 'translatez(0)'
};

var Notification = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification() {
    (0, _classCallCheck3.default)(this, Notification);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this));

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

var _reactRedux = __webpack_require__(9);

var _reactAddonsCssTransitionGroup = __webpack_require__(23);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _Notification = __webpack_require__(111);

var _Notification2 = _interopRequireDefault(_Notification);

var _style = __webpack_require__(96);

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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Notifications = __webpack_require__(112);

var _Notifications2 = _interopRequireDefault(_Notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Notifications2.default;

/***/ },
/* 114 */
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

var _atm = __webpack_require__(69);

var _atm2 = _interopRequireDefault(_atm);

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
    src: __webpack_require__(338),
    alt: 'logo',
    height: props.logoHeight,
    style: inlineStyle.img
  }));
}

SiteLogo.propTypes = {
  SiteLogoOrTitle: _react2.default.PropTypes.string,
  logoHeight: _react2.default.PropTypes.string
};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SiteLogo = __webpack_require__(114);

var _SiteLogo2 = _interopRequireDefault(_SiteLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SiteLogo2.default;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _s3Uploader = __webpack_require__(117);

var _s3Uploader2 = _interopRequireDefault(_s3Uploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _s3Uploader2.default;

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

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _s3Upload = __webpack_require__(216);

var _s3Upload2 = _interopRequireDefault(_s3Upload);

var _FileUpload = __webpack_require__(143);

var _FileUpload2 = _interopRequireDefault(_FileUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-es6-class */
var S3Uploader = function (_Component) {
  (0, _inherits3.default)(S3Uploader, _Component);

  function S3Uploader(props) {
    (0, _classCallCheck3.default)(this, S3Uploader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (S3Uploader.__proto__ || Object.getPrototypeOf(S3Uploader)).call(this, props));

    _this._setFile = function (file) {
      _this.setState({ file: file });
    };

    _this.uploadFile = _this.uploadFile.bind(_this);
    _this.preprocess = _this.preprocess.bind(_this);
    _this.onFinish = _this.onFinish.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(S3Uploader, [{
    key: 'onProgress',
    value: function onProgress(percent, message) {
      console.log('Upload progress: ' + percent + ' % ' + message);
    }
  }, {
    key: 'onFinish',
    value: function onFinish(signResult) {
      console.log(signResult);
      this.props.onFinish(signResult);
      this.setState({
        file: signResult.publicUrl
      });
    }
  }, {
    key: 'onError',
    value: function onError(message) {
      console.log('Upload error: ' + message);
    }
  }, {
    key: 'preprocess',
    value: function preprocess(file, next) {
      console.log('Pre-process: ' + file.name);
      next(file);
    }
  }, {
    key: 'uploadFile',
    value: function uploadFile(event) {
      new _s3Upload2.default({ // eslint-disable-line
        fileElement: event,
        signingUrl: this.props.signingUrl || '/s3/sign',
        getSignedUrl: this.props.getSignedUrl,
        preprocess: this.preprocess,
        onProgress: this.onProgress,
        onFinishS3Put: this.onFinish,
        onError: this.props.onError,
        signingUrlHeaders: this.props.signingUrlHeaders,
        signingUrlQueryParams: this.props.signingUrlQueryParams,
        uploadRequestHeaders: this.props.uploadRequestHeaders,
        contentDisposition: this.props.contentDisposition,
        server: this.props.server
      });
    }
    // http://stackoverflow.com/a/24608023/194065

  }, {
    key: 'clearInputFile',
    value: function clearInputFile(f) {
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
  }, {
    key: 'clear',
    value: function clear(event) {
      this.clearInputFile(event.target);
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)(_FileUpload2.default, {
        label: 'Select a file',
        onChange: this.uploadFile,
        accept: 'image/*',
        primary: true
      });
    }
  }]);
  return S3Uploader;
}(_react.Component);

S3Uploader.propTypes = {
  signingUrl: _react.PropTypes.string,
  preprocess: _react.PropTypes.func,
  getSignedUrl: _react.PropTypes.func,
  onProgress: _react.PropTypes.func,
  onFinish: _react.PropTypes.func,
  onError: _react.PropTypes.func,
  signingUrlHeaders: _react.PropTypes.object,
  signingUrlQueryParams: _react.PropTypes.object,
  uploadRequestHeaders: _react.PropTypes.object,
  contentDisposition: _react.PropTypes.string,
  server: _react.PropTypes.string
};
exports.default = S3Uploader;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The avatar component is used to convert a `FontIcon`, an image, or
 * a letter into an avatar.
 *
 * Any other props given to the Avatar component such as event listeners
 * or styles will also be applied.
 */
var Avatar = function (_PureComponent) {
  (0, _inherits3.default)(Avatar, _PureComponent);

  function Avatar() {
    (0, _classCallCheck3.default)(this, Avatar);
    return (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Avatar, [{
    key: '_getColor',
    value: function _getColor(suffix, suffixes, random) {
      if (suffix) {
        return 'md-avatar-' + suffix;
      } else if (!!suffixes && !random) {
        return null;
      }

      var i = Math.floor(Math.random() * (suffixes.length - 1)) + 1;
      return 'md-avatar-' + suffixes[i];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var src = _props.src;
      var alt = _props.alt;
      var icon = _props.icon;
      var children = _props.children;
      var suffix = _props.suffix;
      var suffixes = _props.suffixes;
      var random = _props.random;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'src', 'alt', 'icon', 'children', 'suffix', 'suffixes', 'random']);


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)('md-avatar', className, this._getColor(suffix, suffixes, random))
        }, props),
        src && (0, _jsx3.default)('img', {
          src: src,
          alt: alt,
          className: 'md-img-avatar'
        }),
        !src && (0, _jsx3.default)('div', {
          className: 'md-avatar-content'
        }, void 0, icon || children)
      );
    }
  }]);
  return Avatar;
}(_react.PureComponent);

Avatar.propTypes = {
  /**
   * An optional className to apply to the avatar.
   */
  className: _react.PropTypes.string,

  /**
   * An optional image source to use for the avatar.
   */
  src: _react.PropTypes.string,

  /**
   * An optional image alt to use for the avatar if it is
   * an image.
   */
  alt: _react.PropTypes.string,

  /**
   * An optional `FontIcon` to convert into an avatar.
   */
  icon: _react.PropTypes.node,

  /**
   * An optional letter to display in the avatar.
   */
  children: _react.PropTypes.string,

  /**
   * A boolean if a random color should be applied to the avatar.
   * This will be one of the `suffixes`.
   */
  random: _react.PropTypes.bool,

  /**
   * A list of available suffixes to use when generating a random
   * color for the avatar.
   */
  suffixes: _react.PropTypes.arrayOf(_react.PropTypes.string),

  /**
   * The suffix to use for a color. This can be any value but
   * *should* be one of the available `suffixes`.
   */
  suffix: _react.PropTypes.string
};
Avatar.defaultProps = {
  suffixes: ['color-1', 'color-2', 'color-3']
};
exports.default = Avatar;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _IconButton = __webpack_require__(42);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A `FloatingButton` is an extension of the `IconButton`.
 * A tooltip can be displayed on hover or touch hold if the
 * `tooltipLabel` prop is given.
 *
 * Another name for this button is a `FloatingActionButton` (FAB).
 *
 * Any other props (such as style or event listeners) will also be
 * applied.
 */
var FloatingButton = function (_PureComponent) {
  (0, _inherits3.default)(FloatingButton, _PureComponent);

  function FloatingButton() {
    (0, _classCallCheck3.default)(this, FloatingButton);
    return (0, _possibleConstructorReturn3.default)(this, (FloatingButton.__proto__ || Object.getPrototypeOf(FloatingButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(FloatingButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var fixed = _props.fixed;
      var mini = _props.mini;
      var primary = _props.primary;
      var secondary = _props.secondary;
      var children = _props.children;
      var iconClassName = _props.iconClassName;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'fixed', 'mini', 'primary', 'secondary', 'children', 'iconClassName']);

      return _react2.default.createElement(
        _IconButton2.default,
        (0, _extends3.default)({}, props, {
          className: (0, _classnames2.default)('md-floating-btn', className, {
            mini: mini,
            fixed: fixed,
            'md-primary': primary,
            'md-secondary': secondary
          }),
          iconClassName: iconClassName
        }),
        children
      );
    }
  }]);
  return FloatingButton;
}(_react.PureComponent);

FloatingButton.propTypes = {
  /**
   * The className to use for rendering the `FontIcon`.
   */
  iconClassName: _react.PropTypes.string,

  /**
   * Any children to use to render the `FontIcon`.
   */
  children: _react.PropTypes.node,

  /**
   * An optional className to apply to the button.
   */
  className: _react.PropTypes.string,

  /**
   * The button type.
   */
  type: _react.PropTypes.string,

  /**
   * Boolean if the button is disabled.
   */
  disabled: _react.PropTypes.bool,

  /**
   * An optional href to convert the button into a link button.
   */
  href: _react.PropTypes.string,

  /**
   * An optional function to call when the button is clicked.
   */
  onClick: _react.PropTypes.func,

  /**
   * An optional label to use if you would like a tooltip to display
   * on hover or touch hold.
   */
  tooltipLabel: _react.PropTypes.string,

  /**
   * The position that the tooltip should be displayed relative to
   * the button.
   */
  tooltipPosition: _react.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * An optional amount of delay before the tooltip appears.
   */
  tooltipDelay: _react.PropTypes.number,

  /**
   * Boolean if the floating button is fixed.
   */
  fixed: _react.PropTypes.bool,

  /**
   * Boolean if the floating button should be displayed as the mini
   * version.
   */
  mini: _react.PropTypes.bool,

  /**
   * Boolean if the floating button should be styled with the primary color.
   */
  primary: _react.PropTypes.bool,

  /**
   * Boolean if the floating button should be styled with the secondary color.
   */
  secondary: _react.PropTypes.bool
};
exports.default = FloatingButton;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = __webpack_require__(58);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Any other props such as style or event listeners will also
 * be applied to the button.
 */
var RaisedButton = function (_PureComponent) {
  (0, _inherits3.default)(RaisedButton, _PureComponent);

  function RaisedButton() {
    (0, _classCallCheck3.default)(this, RaisedButton);
    return (0, _possibleConstructorReturn3.default)(this, (RaisedButton.__proto__ || Object.getPrototypeOf(RaisedButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(RaisedButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className']);

      return _react2.default.createElement(_Button2.default, (0, _extends3.default)({}, props, { className: (0, _classnames2.default)('md-raised-btn', className) }));
    }
  }]);
  return RaisedButton;
}(_react.PureComponent);

RaisedButton.propTypes = {
  /**
   * The label to display in the button.
   */
  label: _react.PropTypes.string.isRequired,

  /**
   * An optional className to apply to the button.
   */
  className: _react.PropTypes.string,

  /**
   * Boolean if the icon should be displayed before the label.
   */
  iconBefore: _react.PropTypes.bool,

  /**
   * A `FontIcon` to display in the button. It can be placed before
   * or after the label.
   */
  children: _react.PropTypes.node,

  /**
   * The button type.
   */
  type: _react.PropTypes.string,

  /**
   * Boolean if the button should be styled with the primary color.
   */
  primary: _react.PropTypes.bool,

  /**
   * Boolean if the button should be styled with the secondary color.
   */
  secondary: _react.PropTypes.bool,

  /**
   * Boolean if the button is disabled.
   */
  disabled: _react.PropTypes.bool,

  /**
   * An optional href to convert the button into a link button.
   */
  href: _react.PropTypes.string,

  /**
   * An optional function to call when the button is clicked.
   */
  onClick: _react.PropTypes.func
};
RaisedButton.defaultProps = {
  type: 'button',
  iconBefore: true
};
exports.default = RaisedButton;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTransitionGroup = __webpack_require__(52);

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Height = __webpack_require__(61);

var _Height2 = _interopRequireDefault(_Height);

var _contextTypes = __webpack_require__(43);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `Card` component is a sheet of material that serves as an entry point to
 * more detailed information. A card could contain a photo, text, and a link
 * about a single subject.
 *
 * The `Card` component also defines `contextTypes` for checking if the `Card`
 * is expanded. The expander icon can have a tooltip and be changed through
 * props. If the card is not expanded, the children components will not be
 * visible until it has been toggled.
 */
var Card = function (_PureComponent) {
  (0, _inherits3.default)(Card, _PureComponent);

  function Card(props) {
    (0, _classCallCheck3.default)(this, Card);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

    _this.state = { expanded: props.initiallyExpanded };
    _this._handleExpandClick = _this._handleExpandClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Card, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props;
      var iconClassName = _props.iconClassName;
      var iconChildren = _props.iconChildren;
      var isExpanded = _props.isExpanded;
      var expanderTooltipLabel = _props.expanderTooltipLabel;
      var expanderTooltipPosition = _props.expanderTooltipPosition;


      return {
        onExpandClick: this._handleExpandClick,
        isExpanded: typeof isExpanded !== 'undefined' ? isExpanded : this.state.expanded,
        iconClassName: iconClassName,
        iconChildren: iconChildren,
        tooltipLabel: expanderTooltipLabel,
        tooltipPosition: expanderTooltipPosition
      };
    }
  }, {
    key: '_handleExpandClick',
    value: function _handleExpandClick(e) {
      var _props2 = this.props;
      var onExpanderClick = _props2.onExpanderClick;
      var isExpanded = _props2.isExpanded;

      if (onExpanderClick) {
        onExpanderClick(e);
      }

      if (typeof isExpanded === 'undefined') {
        this.setState({ expanded: !this.state.expanded });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props;
      var className = _props3.className;
      var children = _props3.children;
      var raise = _props3.raise;
      var tableCard = _props3.tableCard;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'children', 'raise', 'tableCard']);

      delete props.iconChildren;
      delete props.iconClassName;
      delete props.initiallyExpanded;
      delete props.expanderTooltipLabel;
      delete props.expanderTooltipPosition;
      delete props.onExpanderClick;

      var expanderIndex = -1;
      var cardChildren = _react2.default.Children.map(children, function (child, i) {
        if (!child || !child.props) {
          return child;
        }
        if (expanderIndex < 0 && child.props.isExpander) {
          expanderIndex = i;
        }

        if (!child.props.expandable) {
          return child;
        } else if (expanderIndex !== i && expanderIndex > -1 && !_this2.state.expanded) {
          return null;
        } else {
          return (0, _jsx3.default)(_Height2.default, {}, void 0, child);
        }
      });
      return _react2.default.createElement(
        _reactAddonsTransitionGroup2.default,
        (0, _extends3.default)({
          component: 'div'
        }, props, {
          className: (0, _classnames2.default)('md-card', className, { raise: raise, 'md-table-card': tableCard })
        }),
        cardChildren
      );
    }
  }]);
  return Card;
}(_react.PureComponent);

Card.propTypes = {
  /**
   * An optional className to apply to the card.
   */
  className: _react.PropTypes.string,

  /**
   * Any Card parts that should be rendered.
   */
  children: _react.PropTypes.node,

  /**
   * The icon className to use for the expander icon.
   */
  iconClassName: _react.PropTypes.string,

  /**
   * Any icon children required for the expander icon.
   */
  iconChildren: _react.PropTypes.string,

  /**
   * Boolean if the card is initially expanded when there is an expander
   * component.
   */
  initiallyExpanded: _react.PropTypes.bool,

  /**
   * Boolean if the card should raise on hover when on a desktop display.
   */
  raise: _react.PropTypes.bool,

  /**
   * Boolean if the card is currently expanded. This will require the `onExpanderClick` function
   * to toggle the state. The card will become controlled if this is not `undefined`.
   */
  isExpanded: _react.PropTypes.bool,

  /**
   * An optional function to call when the expander is clicked.
   */
  onExpanderClick: _react.PropTypes.func,

  /**
   * The tooltip position for the expander icon.
   */
  expanderTooltipPosition: _react.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The optional tooltip to display for the expander icon.
   */
  expanderTooltipLabel: _react.PropTypes.string,

  /**
   * Boolean if the card contains a table. It will update the styling accordingly.
   * When using the `DataTable` component, do not wrap it in a `CardText` component.
   *
   * ```js
   * <Card tableCard={true}>
   *   <CardTitle title="Example />
   *   <DataTable>
   *     ...
   *   </DataTable>
   * </Card>
   * ```
   */
  tableCard: _react.PropTypes.bool
};
Card.defaultProps = {
  raise: true,
  initiallyExpanded: false,
  iconClassName: 'material-icons',
  iconChildren: 'keyboard_arrow_down',
  expanderTooltipPosition: 'left'
};
Card.childContextTypes = _contextTypes2.default;
exports.default = Card;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CardTitle = __webpack_require__(73);

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardActions = __webpack_require__(71);

var _CardActions2 = _interopRequireDefault(_CardActions);

var _FlatButton = __webpack_require__(36);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `CardActionOverlay` component is a simple wrapper for generating an overlay
 * for the `CardMedia` component by having a `CardTitle` and an array of props
 * for generating `FlatButton` for the `CardActions` component.
 */
var CardActionOverlay = function (_PureComponent) {
  (0, _inherits3.default)(CardActionOverlay, _PureComponent);

  function CardActionOverlay() {
    (0, _classCallCheck3.default)(this, CardActionOverlay);
    return (0, _possibleConstructorReturn3.default)(this, (CardActionOverlay.__proto__ || Object.getPrototypeOf(CardActionOverlay)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardActionOverlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var actions = _props.actions;
      var titleProps = (0, _objectWithoutProperties3.default)(_props, ['actions']);

      return (0, _jsx3.default)('span', {}, void 0, _react2.default.createElement(_CardTitle2.default, titleProps), (0, _jsx3.default)(_CardActions2.default, {}, void 0, actions.map(function (actionProps, i) {
        return _react2.default.createElement(_FlatButton2.default, (0, _extends3.default)({ key: i }, actionProps));
      })));
    }
  }]);
  return CardActionOverlay;
}(_react.PureComponent);

CardActionOverlay.propTypes = {
  /**
   * The title to use.
   */
  title: _react.PropTypes.string,

  /**
   * The optional subtitle to use.
   */
  subtitle: _react.PropTypes.string,

  /**
   * An array of flat button props.
   */
  actions: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string.isRequired
  })),

  /**
   * Any children to display in the `CardTitle` component.
   */
  children: _react.PropTypes.node
};
exports.default = CardActionOverlay;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `CardMedia` component is used to display images or some sort
 * media.
 *
 * The media can be forced to be 1:1 aspect ratio or a 16:9 aspect ratio.
 */
var CardMedia = function (_PureComponent) {
  (0, _inherits3.default)(CardMedia, _PureComponent);

  function CardMedia() {
    (0, _classCallCheck3.default)(this, CardMedia);
    return (0, _possibleConstructorReturn3.default)(this, (CardMedia.__proto__ || Object.getPrototypeOf(CardMedia)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardMedia, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var overlay = _props.overlay;
      var children = _props.children;
      var forceAspect = _props.forceAspect;
      var aspectRatio = _props.aspectRatio;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'overlay', 'children', 'forceAspect', 'aspectRatio']);

      delete props.expandable;

      return _react2.default.createElement(
        'section',
        (0, _extends3.default)({}, props, {
          className: (0, _classnames2.default)('md-card-media', className, (0, _defineProperty3.default)({}, 'md-media-wide', forceAspect))
        }),
        children,
        overlay && (0, _jsx3.default)('div', {
          className: 'md-card-media-overlay'
        }, void 0, overlay)
      );
    }
  }]);
  return CardMedia;
}(_react.PureComponent);

CardMedia.aspect = {
  equal: '1-1',
  wide: '16-9'
};
CardMedia.propTypes = {
  /**
   * An optional className to apply to the card media component.
   */
  className: _react.PropTypes.string,

  /**
   * An optional overlay component to be rendered over the media. This *should*
   * be A `CardTitle`, `CardActions` or both.
   */
  overlay: _react.PropTypes.node,

  /**
   * Any media to display.
   */
  children: _react.PropTypes.node,

  /**
   * Boolean if this component should be expandable when there is a `CardExpander`
   * above it in the `Card`.
   */
  expandable: _react.PropTypes.bool
};
CardMedia.defaultProps = {
  forceAspect: true,
  aspectRatio: 'wide'
};
exports.default = CardMedia;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `CardText` component is a simple wrapper for text or any content in a `Card`.
 * It really just adds correct padding and font color.
 */
var CardText = function (_PureComponent) {
  (0, _inherits3.default)(CardText, _PureComponent);

  function CardText() {
    (0, _classCallCheck3.default)(this, CardText);
    return (0, _possibleConstructorReturn3.default)(this, (CardText.__proto__ || Object.getPrototypeOf(CardText)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardText, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var component = _props.component;
      var className = _props.className;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['component', 'className', 'children']);

      delete props.expandable;

      return _react2.default.createElement(component, (0, _extends3.default)({
        className: (0, _classnames2.default)('md-card-text', className)
      }, props), children);
    }
  }]);
  return CardText;
}(_react.PureComponent);

CardText.propTypes = {
  /**
   * An optional className to apply.
   */
  className: _react.PropTypes.string,

  /**
   * The children to display.
   */
  children: _react.PropTypes.node,

  /**
   * The component to render as.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,

  /**
   * Boolean if this component should be expandable when there is a `CardExpander`
   * above it in the `Card`.
   */
  expandable: _react.PropTypes.bool
};
CardText.defaultProps = {
  component: 'section'
};
exports.default = CardText;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Any additional props such as event listeners will be applied
 * to the chip itself, not the chip container.
 */
var Chip = function (_PureComponent) {
  (0, _inherits3.default)(Chip, _PureComponent);

  function Chip(props) {
    (0, _classCallCheck3.default)(this, Chip);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).call(this, props));

    _this.state = { focus: false };
    _this._handleFocus = _this._handleFocus.bind(_this);
    _this._handleBlur = _this._handleBlur.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Chip, [{
    key: '_handleFocus',
    value: function _handleFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }

      this.setState({ focus: true });
    }
  }, {
    key: '_handleBlur',
    value: function _handleBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }

      this.setState({ focus: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var className = _props.className;
      var label = _props.label;
      var children = _props.children;
      var remove = _props.remove;
      var removeIconChildren = _props.removeIconChildren;
      var removeIconClassName = _props.removeIconClassName;
      var onClick = _props.onClick;
      var props = (0, _objectWithoutProperties3.default)(_props, ['style', 'className', 'label', 'children', 'remove', 'removeIconChildren', 'removeIconClassName', 'onClick']);


      var removeBtn = void 0;
      if (remove) {
        removeBtn = (0, _jsx3.default)('button', {
          type: 'button',
          className: 'md-chip-remove',
          onClick: remove
        }, void 0, (0, _jsx3.default)(_FontIcons2.default, {
          iconClassName: removeIconClassName,
          children: removeIconChildren
        }));
      }

      return (0, _jsx3.default)('div', {
        className: (0, _classnames2.default)('md-chip-container', className, {
          'md-contact-chip': !!children,
          'focus': this.state.focus
        }),
        style: style
      }, void 0, children, _react2.default.createElement(
        'button',
        (0, _extends3.default)({
          type: 'button'
        }, props, {
          className: (0, _classnames2.default)('md-chip', {
            'with-remove': !!remove
          }),
          onClick: onClick,
          onFocus: this._handleFocus,
          onBlur: this._handleBlur
        }),
        label
      ), removeBtn);
    }
  }]);
  return Chip;
}(_react.PureComponent);

Chip.propTypes = {
  /**
   * Any style that should be added to the chip container.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to add to the chip container.
   */
  className: _react.PropTypes.string,

  /**
   * The label to display in the chip.
   */
  label: _react.PropTypes.string.isRequired,

  /**
   * An optional function to call when the chip is clicked.
   */
  onClick: _react.PropTypes.func,

  /**
   * An optional function to call to convert the chip into a removable chip.
   * This will inject a remove icon button into the chip.
   */
  remove: _react.PropTypes.func,

  /**
   * The children to use to display the remove icon button.
   */
  removeIconChildren: _react.PropTypes.node,

  /**
   * The icon className to use to display the remove icon button.
   */
  removeIconClassName: _react.PropTypes.string,

  /**
   * An optional function to call when the chip is focused.
   */
  onFocus: _react.PropTypes.func,

  /**
   * An optional function to call when the chip is blurred.
   */
  onBlur: _react.PropTypes.func,

  /**
   * This should be an Avatar component that will be injected before the
   * label in the chip.
   */
  children: _react.PropTypes.node
};
Chip.defaultProps = {
  removeIconChildren: 'add_circle',
  removeIconClassName: 'material-icons rotate-45-deg'
};
exports.default = Chip;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Chip = __webpack_require__(125);

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Chip2.default;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _contextTypes = __webpack_require__(37);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `DataTable` component is used to manage the state of all rows.
 * This can either be a __plain__ table or a __data__ table.
 *
 * A __data__ table will include checkboxes on each row while a __plain__ table
 * will not.
 */
var DataTable = function (_PureComponent) {
  (0, _inherits3.default)(DataTable, _PureComponent);

  function DataTable(props) {
    (0, _classCallCheck3.default)(this, DataTable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this, props));

    _this.state = {
      allSelected: props.defaultSelectedRows.filter(function (b) {
        return b;
      }).length === 0,
      selectedRows: props.defaultSelectedRows
    };

    _this._initializeRows = _this._initializeRows.bind(_this);
    _this._toggleAllRows = _this._toggleAllRows.bind(_this);
    _this._toggleSelectedRow = _this._toggleSelectedRow.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DataTable, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props;
      var uncheckedIconChildren = _props.uncheckedIconChildren;
      var uncheckedIconClassName = _props.uncheckedIconClassName;
      var checkedIconChildren = _props.checkedIconChildren;
      var checkedIconClassName = _props.checkedIconClassName;
      var plain = _props.plain;


      return {
        uncheckedIconChildren: uncheckedIconChildren,
        uncheckedIconClassName: uncheckedIconClassName,
        checkedIconChildren: checkedIconChildren,
        checkedIconClassName: checkedIconClassName,
        plain: plain,
        allSelected: this.state.allSelected,
        selectedRows: this.state.selectedRows,
        toggleAllRows: this._toggleAllRows,
        toggleSelectedRow: this._toggleSelectedRow
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._initializeRows();
    }
  }, {
    key: '_toggleAllRows',
    value: function _toggleAllRows() {
      var allSelected = !this.state.allSelected;
      this.setState({
        allSelected: allSelected,
        selectedRows: this.state.selectedRows.map(function () {
          return allSelected;
        })
      });
    }
  }, {
    key: '_toggleSelectedRow',
    value: function _toggleSelectedRow(row) {
      var selectedRows = this.state.selectedRows.slice();
      selectedRows[row] = !selectedRows[row];

      this.setState({
        selectedRows: selectedRows,
        allSelected: selectedRows.filter(function (selected) {
          return selected;
        }).length === selectedRows.length
      });
    }
  }, {
    key: '_initializeRows',
    value: function _initializeRows() {
      var rows = (0, _reactDom.findDOMNode)(this).querySelectorAll('.md-data-table tbody tr').length;

      var selectedRows = [];
      for (var i = 0; i < rows; i++) {
        selectedRows[i] = this.state.selectedRows[i] || false;
      }

      this.setState({
        selectedRows: selectedRows,
        allSelected: selectedRows.map(function (b) {
          return b;
        }).length === 0
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var children = _props2.children;
      var plain = _props2.plain;
      var responsive = _props2.responsive;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'children', 'plain', 'responsive']);

      delete props.checkedIconChildren;
      delete props.checkedIconClassName;
      delete props.uncheckedIconChildren;
      delete props.uncheckedIconClassName;
      delete props.defaultSelectedRows;

      var table = _react2.default.createElement(
        'table',
        (0, _extends3.default)({ className: (0, _classnames2.default)('md-data-table', className, { 'md-plain-table': plain }) }, props),
        children
      );

      return responsive ? (0, _jsx3.default)('div', {
        className: 'md-data-table-container'
      }, void 0, table) : table;
    }
  }]);
  return DataTable;
}(_react.PureComponent);

DataTable.propTypes = {
  /**
   * An optional className to apply to the table.
   */
  className: _react.PropTypes.string,

  /**
   * Optional style to apply to the table.
   */
  style: _react.PropTypes.object,

  /**
   * The table contents to display. This *should* be a list of `TableHeader` and `TableBody`
   * components.
   */
  children: _react.PropTypes.node.isRequired,

  /**
   * An optional array of booleans denoting if a row is selected.
   * This is an associative array so the index must match the row
   * number in the `TableBody` component.
   */
  defaultSelectedRows: _react.PropTypes.arrayOf(_react.PropTypes.bool).isRequired,

  /**
   * Boolean if the table is responsive. This will wrap the table in a container
   * that allows scrolling to the right if overflow exists.
   */
  responsive: _react.PropTypes.bool.isRequired,

  /**
   * Boolean if this table should not include the checkboxes on each row.
   * This really means that the entire table is unselectable and you wish
   * to display as a normal table.
   */
  plain: _react.PropTypes.bool,

  /**
   * The icon className to use for the unchecked row icon. This value
   * will be passed down as `context`.
   */
  uncheckedIconClassName: _react.PropTypes.string.isRequired,

  /**
   * The icon children to use for the unchecked row icon. This value
   * will be passed down as `context`.
   */
  uncheckedIconChildren: _react.PropTypes.node,

  /**
   * The icon className to use for the checked row icon. This value
   * will be passed down as `context`.
   */
  checkedIconClassName: _react.PropTypes.string.isRequired,

  /**
   * The icon children to use for the checked row icon. This value
   * will be passed down as `context`.
   */
  checkedIconChildren: _react.PropTypes.node
};
DataTable.defaultProps = {
  uncheckedIconChildren: 'check_box_outline_blank',
  uncheckedIconClassName: 'material-icons',
  checkedIconChildren: 'check_box',
  checkedIconClassName: 'material-icons',
  defaultSelectedRows: [],
  responsive: true
};
DataTable.childContextTypes = _contextTypes2.default;
exports.default = DataTable;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _FlatButton = __webpack_require__(36);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TableColumn = __webpack_require__(74);

var _TableColumn2 = _interopRequireDefault(_TableColumn);

var _TextFields = __webpack_require__(26);

var _TextFields2 = _interopRequireDefault(_TextFields);

var _keyCodes = __webpack_require__(30);

var _utils = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Text Edit dialog for tables. This can either be a small
 * version which only has the text field or a large version
 * that includes a title with a save and cancel action buttons.
 */
var EditDialogColumn = function (_PureComponent) {
  (0, _inherits3.default)(EditDialogColumn, _PureComponent);

  function EditDialogColumn(props) {
    (0, _classCallCheck3.default)(this, EditDialogColumn);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditDialogColumn.__proto__ || Object.getPrototypeOf(EditDialogColumn)).call(this, props));

    _this.state = {
      value: props.defaultValue,
      active: false,
      animating: false
    };

    _this._save = _this._save.bind(_this);
    _this._getValue = _this._getValue.bind(_this);
    _this._overrideTab = _this._overrideTab.bind(_this);
    _this._handleFocus = _this._handleFocus.bind(_this);
    _this._handleChange = _this._handleChange.bind(_this);
    _this._handleKeyDown = _this._handleKeyDown.bind(_this);
    _this._handleCancelClick = _this._handleCancelClick.bind(_this);
    _this._handleClickOutside = _this._handleClickOutside.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EditDialogColumn, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var _this2 = this;

      if (this.state.active === nextState.active) {
        return;
      }

      if (nextState.active) {
        window.addEventListener('click', this._handleClickOutside);
      } else {
        window.removeEventListener('click', this._handleClickOutside);
      }

      this.setState({
        animating: true,
        timeout: setTimeout(function () {
          if (!nextState.active) {
            (0, _reactDom.findDOMNode)(_this2).querySelector('input').blur();
          }

          _this2.setState({ animating: false, timeout: null });
        }, nextProps.transitionDuration)
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.statetimeout) {
        clearTimeout(this.state.timeout);
      }
    }
  }, {
    key: '_handleClickOutside',
    value: function _handleClickOutside(e) {
      var _this3 = this;

      (0, _utils.onOutsideClick)(e, (0, _reactDom.findDOMNode)(this.refs.column), function () {
        if (_this3.props.onOutsideClick) {
          _this3.props.onOutsideClick(e);
        }

        if (_this3.props.okOnOutsideClick) {
          _this3._save(e);
        } else {
          _this3._handleCancelClick(e);
        }
      });
    }
  }, {
    key: '_handleFocus',
    value: function _handleFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }

      var state = { active: true };
      if (!this.state.active) {
        state.cancelValue = this._getValue() || '';
      }

      this.setState(state);
    }
  }, {
    key: '_handleKeyDown',
    value: function _handleKeyDown(e) {
      var onKeyDown = this.props.onKeyDown;

      if (onKeyDown) {
        onKeyDown(e);
      }

      var key = e.which || e.keyCode;
      if (key === _keyCodes.ENTER) {
        this._save(e);
      } else if (key === _keyCodes.TAB) {
        this._overrideTab(e);
      } else if (key === _keyCodes.ESC) {
        this._handleCancelClick(e);
      }
    }
  }, {
    key: '_save',
    value: function _save(e) {
      if (this.props.onOkClick) {
        this.props.onOkClick(this._getValue(), e);
      }

      this.setState({ active: false });
    }
  }, {
    key: '_handleCancelClick',
    value: function _handleCancelClick(e) {
      if (this.props.onCancelClick) {
        this.props.onCancelClick(this.state.cancelValue, e);
      }

      this.setState({ active: false, value: this.state.cancelValue });
    }
  }, {
    key: '_getValue',
    value: function _getValue() {
      return typeof this.props.value === 'undefined' ? this.state.value : this.props.value;
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(value, e) {
      if (this.props.onChange) {
        this.props.onChange(value, e);
      }

      if (typeof this.props.value === 'undefined') {
        this.setState({ value: value });
      }
    }
  }, {
    key: '_overrideTab',
    value: function _overrideTab(e) {
      var large = this.props.large;

      var key = e.which || e.keyCode;
      if (key !== _keyCodes.TAB) {
        return;
      }

      if (!large) {
        e.preventDefault();
        return;
      }

      var shiftKey = e.shiftKey;
      var classList = e.target.classList;


      var nextFocus = void 0;
      if (classList.contains('md-text-field') && shiftKey) {
        nextFocus = (0, _reactDom.findDOMNode)(this.refs.okButton);
      } else if (classList.contains('md-btn') && !shiftKey) {
        nextFocus = (0, _reactDom.findDOMNode)(this.refs.textField).querySelector('.md-text-field');
      }

      if (nextFocus) {
        e.preventDefault();
        nextFocus.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var active = _state.active;
      var animating = _state.animating;
      var _props = this.props;
      var columnStyle = _props.columnStyle;
      var columnClassName = _props.columnClassName;
      var style = _props.style;
      var className = _props.className;
      var maxLength = _props.maxLength;
      var title = _props.title;
      var okLabel = _props.okLabel;
      var cancelLabel = _props.cancelLabel;
      var large = _props.large;
      var props = (0, _objectWithoutProperties3.default)(_props, ['columnStyle', 'columnClassName', 'style', 'className', 'maxLength', 'title', 'okLabel', 'cancelLabel', 'large']);


      delete props.defaultValue;
      delete props.onOkClick;
      delete props.onCancelClick;
      delete props.header;
      delete props.okOnOutsideClick;
      delete props.transitionDuration;

      var value = this._getValue();
      var actions = void 0;
      var largeTitle = void 0;
      if (large && active) {
        actions = (0, _jsx3.default)('footer', {
          className: 'md-dialog-footer'
        }, void 0, (0, _jsx3.default)(_FlatButton2.default, {
          label: cancelLabel,
          onClick: this._handleCancelClick,
          primary: true
        }), _react2.default.createElement(_FlatButton2.default, {
          ref: 'okButton',
          label: okLabel,
          onClick: this._save,
          primary: true,
          onKeyDown: this._overrideTab
        }));

        largeTitle = (0, _jsx3.default)('h3', {
          className: 'md-title'
        }, void 0, title);
      }

      return _react2.default.createElement(
        _TableColumn2.default,
        {
          className: (0, _classnames2.default)('prevent-grow md-edit-dialog-column', columnClassName),
          ref: 'column',
          style: columnStyle
        },
        (0, _jsx3.default)('div', {
          className: (0, _classnames2.default)('md-edit-dialog', className, {
            animating: animating,
            active: active,
            large: large
          }),
          style: style
        }, void 0, largeTitle, _react2.default.createElement(_TextFields2.default, (0, _extends3.default)({}, props, {
          ref: 'textField',
          floatingLabel: false,
          onKeyDown: this._handleKeyDown,
          onFocus: this._handleFocus,
          value: value,
          onChange: this._handleChange,
          maxLength: active ? maxLength : null
        })), actions)
      );
    }
  }]);
  return EditDialogColumn;
}(_react.PureComponent);

EditDialogColumn.propTypes = {
  /**
   * The optional style to apply to the edit dialog.
   */
  style: _react.PropTypes.object,

  /**
   * The optional className to apply to the edit dialog.
   */
  className: _react.PropTypes.string,

  /**
   * The optional style to apply to the column.
   */
  columnStyle: _react.PropTypes.object,

  /**
   * The optional className to apply to the column.
   */
  columnClassName: _react.PropTypes.string,

  /**
   * The transition duration when the dialog is moving from
   * active to inactive.
   */
  transitionDuration: _react.PropTypes.number.isRequired,

  /**
   * Boolean if the edit dialog is disabled.
   */
  disabled: _react.PropTypes.bool,

  /**
   * The optional max length for the edit dialog.
   */
  maxLength: _react.PropTypes.number,

  /**
   * A value to use for the edit dialog text field. This
   * will make the component controlled so you will need
   * to provide an `onChange` function.
   */
  value: _react.PropTypes.string,

  /**
   * An optional function to call when the text field's value
   * is changed. It is called with `(newValue, changeEvent)`.
   */
  onChange: _react.PropTypes.func,

  /**
   * The default value for the column.
   */
  defaultValue: _react.PropTypes.string,

  /**
   * An optional onFocus function to call.
   */
  onFocus: _react.PropTypes.func,

  /**
   * An optional onBlur function to call.
   */
  onBlur: _react.PropTypes.func,

  /**
   * An optional onKeyDown function to call.
   */
  onKeyDown: _react.PropTypes.func,

  /**
   * Boolean if the edit dialog should be large.
   */
  large: _react.PropTypes.bool,

  /**
   * The title for the large edit dialog. The custom validation changes to required
   * when the `large` prop is set to true.
   */
  title: function title(props, propName, component) {
    for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      others[_key - 3] = arguments[_key];
    }

    if (props.large) {
      var _PropTypes$string;

      return (_PropTypes$string = _react.PropTypes.string).isRequired.apply(_PropTypes$string, [props, propName, component].concat(others));
    } else {
      return _react.PropTypes.string.apply(_react.PropTypes, [props, propName, component].concat(others));
    }
  },

  /**
   * An optional function to call when the OK button is clicked.
   * It is called with `(textFieldValue, clickEvent)`. This function
   * will also be called when a user pressed the enter key.
   */
  onOkClick: _react.PropTypes.func,

  /**
   * The label to use for the OK button.
   */
  okLabel: _react.PropTypes.string.isRequired,

  /**
   * An optional function to call when the Cancel button is clicked.
   * It is called with `(textFieldValueBeforeEdit, clickEvent)`. This
   * function will also be called when the user presses the escape key.
   */
  onCancelClick: _react.PropTypes.func,

  /**
   * The label to use for the Cancel button.
   */
  cancelLabel: _react.PropTypes.string.isRequired,

  /**
   * An optional function to call when the edit dialog is open and the user clicks
   * somewhere else on the page.
   */
  onOutsideClick: _react.PropTypes.func,

  /**
   * A boolean if the action when the edit dialog is open and the user clicks somewhere
   * else on the page should be to confirm the current changes.
   *
   * If this is set to `true`, `onOkClick` will be called. Otherwise `onCancelClick` will
   * be called.
   */
  okOnOutsideClick: _react.PropTypes.bool.isRequired
};
EditDialogColumn.defaultProps = {
  transitionDuration: 300,
  okOnOutsideClick: true,
  okLabel: 'Save',
  cancelLabel: 'Cancel'
};
exports.default = EditDialogColumn;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _contextTypes = __webpack_require__(37);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `TableBody` component is used for managing the state of all
 * `TableRow` inside of it.
 */
var TableBody = function (_Component) {
  (0, _inherits3.default)(TableBody, _Component);

  function TableBody() {
    (0, _classCallCheck3.default)(this, TableBody);
    return (0, _possibleConstructorReturn3.default)(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableBody, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var props = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);
      var _context = this.context;
      var selectedRows = _context.selectedRows;
      var toggleSelectedRow = _context.toggleSelectedRow;


      var rows = _react2.default.Children.map(children, function (row, i) {
        var uncontrolled = typeof row.props.selected === 'undefined';

        // Update the row to inject the selected prop from context if it is uncontrolled.
        // Also update the onCheckbox click function to additionally toggle the row if uncontrolled.
        return _react2.default.cloneElement(row, (0, _extends3.default)({}, row.props, {
          key: row.key || i,
          selected: uncontrolled ? selectedRows[i] : row.props.selected,
          onCheckboxClick: function onCheckboxClick(e) {
            if (row.props.onCheckboxClick) {
              row.props.onCheckboxClick(i, e);
            }

            if (uncontrolled) {
              toggleSelectedRow(i);
            }
          }
        }));
      });

      return _react2.default.createElement(
        'tbody',
        (0, _extends3.default)({}, props, { className: (0, _classnames2.default)('md-table-body', className) }),
        rows
      );
    }
  }]);
  return TableBody;
}(_react.Component);

TableBody.propTypes = {
  /**
   * An optional style to apply to the tbody.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply to the tbody.
   */
  className: _react.PropTypes.string,

  /**
   * A list or a single item of `TableRow` components to render.
   */
  children: _react.PropTypes.node.isRequired
};
TableBody.contextTypes = _contextTypes2.default;
exports.default = TableBody;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Checkbox = __webpack_require__(160);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _contextTypes = __webpack_require__(37);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableCheckbox = function (_Component) {
  (0, _inherits3.default)(TableCheckbox, _Component);

  function TableCheckbox() {
    (0, _classCallCheck3.default)(this, TableCheckbox);
    return (0, _possibleConstructorReturn3.default)(this, (TableCheckbox.__proto__ || Object.getPrototypeOf(TableCheckbox)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableCheckbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var checked = _props.checked;
      var props = (0, _objectWithoutProperties3.default)(_props, ['checked']);
      var _context = this.context;
      var uncheckedIconChildren = _context.uncheckedIconChildren;
      var uncheckedIconClassName = _context.uncheckedIconClassName;
      var checkedIconChildren = _context.checkedIconChildren;
      var checkedIconClassName = _context.checkedIconClassName;


      var checkedIcon = (0, _jsx3.default)(_FontIcons2.default, {
        iconClassName: checkedIconClassName,
        children: checkedIconChildren
      });
      var uncheckedIcon = (0, _jsx3.default)(_FontIcons2.default, {
        iconClassName: uncheckedIconClassName,
        children: uncheckedIconChildren
      });

      return (0, _jsx3.default)('td', {
        className: 'md-table-checkbox'
      }, void 0, _react2.default.createElement(_Checkbox2.default, (0, _extends3.default)({
        checked: checked
      }, props, {
        checkedIcon: checkedIcon,
        uncheckedIcon: uncheckedIcon
      })));
    }
  }]);
  return TableCheckbox;
}(_react.Component);

TableCheckbox.propTypes = {
  checked: _react.PropTypes.bool
};
TableCheckbox.contextTypes = _contextTypes2.default;
exports.default = TableCheckbox;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contextTypes = __webpack_require__(37);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _headerContextTypes = __webpack_require__(75);

var _headerContextTypes2 = _interopRequireDefault(_headerContextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A `thead` component ot use in the `DataTable` component. This
 * will automatically update the header row to check if it is selected
 * and inject a function to toggle all rows selected if the row is
 * uncontrolled. It will also automatically attempt to set the `TableColumn`
 * components to be the header type.
 */
var TableHeader = function (_Component) {
  (0, _inherits3.default)(TableHeader, _Component);

  function TableHeader() {
    (0, _classCallCheck3.default)(this, TableHeader);
    return (0, _possibleConstructorReturn3.default)(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableHeader, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return (0, _extends3.default)({}, this.context, {
        header: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['children']);
      var _context = this.context;
      var toggleAllRows = _context.toggleAllRows;
      var allSelected = _context.allSelected;

      var header = _react2.default.Children.only(children);
      var selected = typeof header.props.selected === 'undefined' ? allSelected : header.props.selected;

      var row = _react2.default.cloneElement(header, (0, _extends3.default)({}, header.props, {
        selected: selected,
        onCheckboxClick: function onCheckboxClick(e) {
          if (header.props.onCheckboxClick) {
            header.props.onCheckboxClick(e);
          }

          if (typeof header.props.selected === 'undefined') {
            toggleAllRows();
          }
        }
      }));

      return _react2.default.createElement(
        'thead',
        props,
        row
      );
    }
  }]);
  return TableHeader;
}(_react.Component);

TableHeader.contextTypes = _contextTypes2.default;
TableHeader.childContextTypes = _headerContextTypes2.default;
TableHeader.propTypes = {
  /**
   * An optional className to apply to the table header
   */
  className: _react.PropTypes.string,

  /**
   * This should be a single `TableRow` component. The `custom` validation will
   * warn you if there are more than one children given or none at all.
   */
  children: function children(props, propName, component) {
    try {
      _react2.default.Children.only(props.children);
      return null;
    } catch (e) {
      var amt = props.children ? props.children.length : 0;
      return new Error('There must only be one child in a \'' + component + '\', but ' + amt + ' were given.');
    }
  }
};
exports.default = TableHeader;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _SelectFields = __webpack_require__(81);

var _SelectFields2 = _interopRequireDefault(_SelectFields);

var _IconButton = __webpack_require__(42);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `TablePagination` component is used to generate the table footer that helps
 * pagination through a large dataset by limiting the number of rows per page.
 * The pagination will always be placed persistently at the bottom of the table
 * so that when a user scrolls to the right, they will always be able to use the
 * pagination.
 */
var _ref = (0, _jsx3.default)('div', {
  className: 'md-table-footer-controls-mask'
});

var TablePagination = function (_PureComponent) {
  (0, _inherits3.default)(TablePagination, _PureComponent);

  function TablePagination(props) {
    (0, _classCallCheck3.default)(this, TablePagination);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TablePagination.__proto__ || Object.getPrototypeOf(TablePagination)).call(this, props));

    _this.state = {
      start: Math.max(0, props.defaultPage - 1) * props.defaultRowsPerPage,
      rowsPerPage: props.defaultRowsPerPage,
      controlsMarginLeft: 0
    };

    _this._position = _this._position.bind(_this);
    _this._increment = _this._increment.bind(_this);
    _this._decrement = _this._decrement.bind(_this);
    _this._setRowsPerPage = _this._setRowsPerPage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TablePagination, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._position();
      window.addEventListener('resize', this._position);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var rows = this.props.rows;
      var _state = this.state;
      var start = _state.start;
      var rowsPerPage = _state.rowsPerPage;

      if (rows !== prevProps.rows || start !== prevState.start || rowsPerPage !== prevState.rowsPerPage) {
        this._position();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._position);
    }
  }, {
    key: '_findTable',
    value: function _findTable(el) {
      var table = void 0;
      var node = el;
      while (node && node.parentNode) {
        if (node.classList && node.classList.contains('md-data-table')) {
          // Attempt to check one more element up to see if there is a table-container
          // for responsive tables.
          table = node;
        } else if (node.classList && node.classList.contains('md-data-table-container')) {
          return node;
        } else if (table) {
          return table;
        }

        node = node.parentNode;
      }

      return null;
    }
  }, {
    key: '_position',
    value: function _position() {
      var table = this._findTable((0, _reactDom.findDOMNode)(this));
      if (table) {
        this.setState({
          controlsMarginLeft: table.offsetWidth - this.refs.controls.offsetWidth
        });
      }
    }
  }, {
    key: '_increment',
    value: function _increment() {
      var _props = this.props;
      var rows = _props.rows;
      var onPagination = _props.onPagination;
      var _state2 = this.state;
      var start = _state2.start;
      var rowsPerPage = _state2.rowsPerPage;

      // Only correct multiple of rows per page

      var max = rows - rows % rowsPerPage;

      var newStart = Math.min(start + rowsPerPage, max);

      onPagination(newStart, rowsPerPage);
      this.setState({ start: newStart });
    }
  }, {
    key: '_decrement',
    value: function _decrement() {
      var _state3 = this.state;
      var start = _state3.start;
      var rowsPerPage = _state3.rowsPerPage;

      var newStart = Math.max(0, start - rowsPerPage);

      this.props.onPagination(newStart, rowsPerPage);
      this.setState({ start: newStart });
    }
  }, {
    key: '_setRowsPerPage',
    value: function _setRowsPerPage(rowsPerPage) {
      var start = this.state.start;


      var newStart = Math.max(0, start - start % rowsPerPage);
      this.props.onPagination(newStart, rowsPerPage);
      this.setState({ start: newStart, rowsPerPage: rowsPerPage });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state4 = this.state;
      var start = _state4.start;
      var rowsPerPage = _state4.rowsPerPage;
      var controlsMarginLeft = _state4.controlsMarginLeft;
      var _props2 = this.props;
      var className = _props2.className;
      var rows = _props2.rows;
      var rowsPerPageLabel = _props2.rowsPerPageLabel;
      var rowsPerPageItems = _props2.rowsPerPageItems;
      var incrementIconChildren = _props2.incrementIconChildren;
      var incrementIconClassName = _props2.incrementIconClassName;
      var decrementIconChildren = _props2.decrementIconChildren;
      var decrementIconClassName = _props2.decrementIconClassName;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'rows', 'rowsPerPageLabel', 'rowsPerPageItems', 'incrementIconChildren', 'incrementIconClassName', 'decrementIconChildren', 'decrementIconClassName']);

      delete props.onPagination;
      delete props.defaultPage;
      delete props.defaultRowsPerPage;

      var pagination = start + 1 + '-' + Math.min(rows, start + rowsPerPage) + ' of ' + rows;
      return _react2.default.createElement(
        'tfoot',
        (0, _extends3.default)({}, props, { className: (0, _classnames2.default)('md-table-footer', className) }),
        (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {
          colSpan: '100%'
        }, void 0, _react2.default.createElement(
          'div',
          {
            ref: 'controls',
            className: 'md-table-footer-controls',
            style: { marginLeft: controlsMarginLeft }
          },
          rowsPerPageLabel,
          _react2.default.createElement(_SelectFields2.default, {
            ref: 'selectField',
            menuItems: rowsPerPageItems,
            position: 'below',
            value: rowsPerPage,
            onChange: this._setRowsPerPage
          }),
          (0, _jsx3.default)('span', {
            className: 'pagination'
          }, void 0, pagination),
          (0, _jsx3.default)(_IconButton2.default, {
            onClick: this._decrement,
            disabled: start === 0,
            children: decrementIconChildren,
            iconClassName: decrementIconClassName
          }),
          (0, _jsx3.default)(_IconButton2.default, {
            onClick: this._increment,
            disabled: start + rowsPerPage >= rows,
            children: incrementIconChildren,
            iconClassName: incrementIconClassName
          })
        ), _ref))
      );
    }
  }]);
  return TablePagination;
}(_react.PureComponent);

TablePagination.propTypes = {
  /**
   * An optional style to apply to the `tfoot` tag.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply to the `tfoot` tag.
   */
  className: _react.PropTypes.string,

  /**
   * A function to call when a user clicks the increment or decrement pagination
   * icon button. This function will be given the new start index and the number
   * or rows per page.
   *
   * ```js
   * onPagination(newStart, rowsPerPage);
   * ```
   */
  onPagination: _react.PropTypes.func.isRequired,

  /**
   * The page number to start from. This should be a number starting from 1.
   */
  defaultPage: _react.PropTypes.number.isRequired,

  /**
   * The default number of rows per page to display. This will be the value for the
   * `SelectField`.
   */
  defaultRowsPerPage: _react.PropTypes.number.isRequired,

  /**
   * The label to use for the rows per page `SelectField`.
   */
  rowsPerPageLabel: _react.PropTypes.node.isRequired,

  /**
   * A list of numbers for the amount of rows per page to display at a time.
   * This will be rendered into the `SelectField`.
   */
  rowsPerPageItems: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,

  /**
   * The total number of rows that can be displayed. This is the unfiltered/non-subset
   * number of rows. This is used to help calculate the increment/decrement values to
   * display and determine if the user can increment/decrement again.
   */
  rows: _react.PropTypes.number.isRequired,

  /**
   * Any children used to display the increment icon button.
   */
  incrementIconChildren: _react.PropTypes.node,

  /**
   * An icon className used to display the increment icon button.
   */
  incrementIconClassName: _react.PropTypes.string,

  /**
   * Any children used to display the decrement icon button.
   */
  decrementIconChildren: _react.PropTypes.node,

  /**
   * An icon className used to display the decrement icon button.
   */
  decrementIconClassName: _react.PropTypes.string
};
TablePagination.defaultProps = {
  defaultPage: 1,
  defaultRowsPerPage: 10,
  rowsPerPageLabel: 'Rows per page:',
  rowsPerPageItems: [10, 20, 30, 40, 50, 100],
  incrementIconChildren: 'keyboard_arrow_right',
  decrementIconChildren: 'keyboard_arrow_left'
};
exports.default = TablePagination;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _headerContextTypes = __webpack_require__(75);

var _headerContextTypes2 = _interopRequireDefault(_headerContextTypes);

var _TableCheckbox = __webpack_require__(130);

var _TableCheckbox2 = _interopRequireDefault(_TableCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A component for displaying a row in a `DataTable`. This will
 * automatically add a `Checkbox` component to the row if it is not
 * a `plain` table.
 *
 * This component will also automatically adjust the padding between
 * columns based on the longest column if the `autoAdjust` prop
 * is set to true.
 */
var TableRow = function (_Component) {
  (0, _inherits3.default)(TableRow, _Component);

  function TableRow(props, context) {
    (0, _classCallCheck3.default)(this, TableRow);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props, context));

    _this.state = {
      biggest: null,
      widths: [],
      hover: false
    };

    _this._handleMouseOver = _this._handleMouseOver.bind(_this);
    _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
    _this._setLongestColumn = _this._setLongestColumn.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TableRow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoAdjust) {
        this._setLongestColumn();
      }
    }

    /**
     * Need to ignore adding the hvoer state if the mouse is over a menu/menu item
     * or the edit dialog is open.
     *
     * @param {Function} classList - the classList to use for checking cn
     * @return {Boolean} true if the hover state should be ignored for this classList
     */

  }, {
    key: '_ignoreHoverState',
    value: function _ignoreHoverState(classList) {
      return classList.contains('md-menu') || ['md-edit-dialog', 'active'].every(function (className) {
        return classList.contains(className);
      });
    }
  }, {
    key: '_handleMouseOver',
    value: function _handleMouseOver(e) {
      if (this.props.onMouseOver) {
        this.props.onMouseOver(e);
      }

      var target = e.target;
      while (target && target.parentNode) {
        if (target.classList && this._ignoreHoverState(target.classList)) {
          return this.setState({ hover: false });
        }

        target = target.parentNode;
      }

      return this.setState({ hover: true });
    }
  }, {
    key: '_handleMouseLeave',
    value: function _handleMouseLeave(e) {
      if (this.props.onMouseLeave) {
        this.props.onMouseLeave(e);
      }

      this.setState({ hover: false });
    }
  }, {
    key: '_setLongestColumn',
    value: function _setLongestColumn() {
      var widths = [];
      var biggest = Array.prototype.slice.call((0, _reactDom.findDOMNode)(this).querySelectorAll('.md-table-data:not(.prevent-grow),.md-table-header:not(.prevent-grow)')).reduce(function (prev, curr, i) {
        var width = curr.offsetWidth;
        widths.push(width);
        if (prev.width < width) {
          return { i: i, width: width };
        } else {
          return prev;
        }
      }, { width: 0, i: 0 });

      this.setState({ biggest: biggest, widths: widths });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state;
      var biggest = _state.biggest;
      var widths = _state.widths;
      var hover = _state.hover;
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var selected = _props.selected;
      var onCheckboxClick = _props.onCheckboxClick;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'selected', 'onCheckboxClick']);

      delete props.autoAdjust;

      var checkbox = void 0;
      if (!this.context.plain) {
        checkbox = (0, _jsx3.default)(_TableCheckbox2.default, {
          checked: selected,
          onChange: onCheckboxClick
        }, 'checkbox');
      }

      var columns = _react2.default.Children.map(children, function (column, i) {
        return _react2.default.cloneElement(column, (0, _extends3.default)({
          key: column.key || i
        }, column.props, {
          header: typeof column.props.header === 'undefined' ? _this2.context.header : column.props.header,
          className: (0, _classnames2.default)(column.props.className, {
            'grow': biggest && biggest.i === i,
            // Not last item and the biggest width is greater than this item
            'adjusted': children.length > i + 1 && biggest && biggest.width > widths[i]
          })
        }));
      });

      return _react2.default.createElement(
        'tr',
        (0, _extends3.default)({}, props, {
          className: (0, _classnames2.default)('md-table-row', className, {
            hover: hover,
            'active': selected
          }),
          onMouseOver: this._handleMouseOver,
          onMouseLeave: this._handleMouseLeave
        }),
        checkbox,
        columns
      );
    }
  }]);
  return TableRow;
}(_react.Component);

TableRow.propTypes = {
  /**
   * Boolean if the row is currently selected. If this value will be
   * injected by the `TableHeader` or `TableBody` component.
   */
  selected: _react.PropTypes.bool,

  /**
   * An optional className to apply to the row.
   */
  className: _react.PropTypes.string,

  /**
   * A list of `TableColumn` to display in the table.
   *
   * > There should be at least 3 columns in a Data table (non plain)
   */
  children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired,

  /**
   * An optional onClick function to call when a row is clicked.
   */
  onClick: _react.PropTypes.func,

  /**
   * A function to call when the checkbox is clicked. This
   * function will will be called with `(rowIndex, event)`. The
   * `TableBody` and `TableHeader` components will automatically
   * merge in a function to goggle the checkbox.
   */
  onCheckboxClick: _react.PropTypes.func,

  /**
   * A boolean if the row should automatically check all the `TableColumn`s in the row
   * and add the className `grow` to the one that is the biggest. You can also disable
   * individual columns by adding the className `.prevent-grow` to them.
   */
  autoAdjust: _react.PropTypes.bool.isRequired,

  /**
   * An optional function to call onMouseOver.
   */
  onMouseOver: _react.PropTypes.func,

  /**
   * An optional function to call onMouseLeave.
   */
  onMouseLeave: _react.PropTypes.func
};
TableRow.defaultProps = {
  autoAdjust: true
};
TableRow.contextTypes = _headerContextTypes2.default;
exports.default = TableRow;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Toolbar = __webpack_require__(85);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Divider = __webpack_require__(76);

var _Divider2 = _interopRequireDefault(_Divider);

var _DialogFooter = __webpack_require__(136);

var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DIALOG_PADDING = 8;

/**
 * This is the Dialog that appears when the `DialogContainer` component has
 * a true value for `isOpen`.
 */

var _ref = (0, _jsx3.default)(_Divider2.default, {});

var _ref2 = (0, _jsx3.default)(_Divider2.default, {});

var Dialog = function (_PureComponent) {
  (0, _inherits3.default)(Dialog, _PureComponent);

  function Dialog(props) {
    (0, _classCallCheck3.default)(this, Dialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.state = { stacked: false };
    return _this;
  }

  (0, _createClass3.default)(Dialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var state = {};
      var _refs = this.refs;
      var dialog = _refs.dialog;
      var content = _refs.content;


      if (content.scrollHeight > content.clientHeight) {
        state.divided = true;
      }

      if (this.props.actions) {
        var maxButtonWidth = (dialog.offsetWidth - DIALOG_PADDING * 3) / 2;
        var actions = dialog.querySelectorAll('.md-btn');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = actions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var action = _step.value;

            if (action.offsetWidth > maxButtonWidth) {
              state.stacked = true;
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      this.setState(state); // eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var children = _props.children;
      var className = _props.className;
      var contentStyle = _props.contentStyle;
      var contentClassName = _props.contentClassName;
      var actions = _props.actions;
      var actionLeft = _props.actionLeft;
      var actionRight = _props.actionRight;
      var style = _props.style;
      var transformOrigin = _props.transformOrigin;
      var isSimple = _props.isSimple;
      var isFullPage = _props.isFullPage;
      var props = (0, _objectWithoutProperties3.default)(_props, ['title', 'children', 'className', 'contentStyle', 'contentClassName', 'actions', 'actionLeft', 'actionRight', 'style', 'transformOrigin', 'isSimple', 'isFullPage']);

      delete props.pageX;
      delete props.pageY;

      var _state = this.state;
      var stacked = _state.stacked;
      var divided = _state.divided;


      var header = void 0;
      var footer = void 0;
      if (!isFullPage && title) {
        header = (0, _jsx3.default)('h1', {
          className: 'md-title'
        }, void 0, title);
      } else if (isFullPage) {
        header = (0, _jsx3.default)(_Toolbar2.default, {
          primary: true,
          fixed: true,
          actionLeft: actionLeft,
          title: title,
          actionsRight: actionRight
        });
      }

      if (actions && actions.length) {
        footer = (0, _jsx3.default)(_DialogFooter2.default, {
          className: (0, _classnames2.default)({ stacked: stacked }),
          actions: actions
        });
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          ref: 'dialog',
          className: (0, _classnames2.default)('md-dialog', className, {
            'full-page': isFullPage,
            'dialog-centered': !isFullPage
          }),
          style: Object.assign({}, style, { transformOrigin: transformOrigin })
        }, props),
        header,
        header && divided && _ref,
        _react2.default.createElement(
          'section',
          {
            ref: 'content',
            style: contentStyle,
            className: (0, _classnames2.default)('md-dialog-content', contentClassName, {
              'simple': isSimple
            })
          },
          children
        ),
        footer && divided && _ref2,
        footer
      );
    }
  }]);
  return Dialog;
}(_react.PureComponent);

Dialog.propTypes = {
  /**
   * Boolean if it is a simple dialog.
   */
  isSimple: _react.PropTypes.bool.isRequired,

  /**
   * Boolean if it is a full page dialog.
   */
  isFullPage: _react.PropTypes.bool.isRequired,

  /**
   * A transform-origin string to use for a full page dialog. This will
   * allow the dialog to appear from that origin.
   */
  transformOrigin: _react.PropTypes.string,

  /**
   * An optional title to display above the content or in the `Toolbar` of a `Dialog`.
   */
  title: _react.PropTypes.string,

  /**
   * A single action or a list of actions to display in the Dialog.
   * This can either be a list of `FlatButton` props or `FlatButton` elements.
   */
  actions: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object]))]),

  /**
   * Any action to display to the left of the title in a full page dialog's toolbar.
   * See the [Toolbar's actionLeft](/components/toolbars) documentation for more information.
   */
  actionLeft: _react.PropTypes.node,

  /**
   * Any action to display to the right of the title in a full page dialog's toolbar.
   * See the [Toolbar actionsRight](/components/toolbars) documentation for more information.
   */
  actionRight: _react.PropTypes.node,

  /**
   * An optional style to apply to the `Dialog`.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply to the `Dialog`.
   */
  className: _react.PropTypes.string,

  /**
   * An optional style to apply to the dialog's content.
   */
  contentStyle: _react.PropTypes.object,

  /**
   * An optional className to apply to the dialog's content.
   */
  contentClassName: _react.PropTypes.string,

  /**
   * Any children to display in the `Dialog`.
   */
  children: _react.PropTypes.node
};
exports.default = Dialog;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(23);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(27);

var _Dialog = __webpack_require__(134);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Overlay = __webpack_require__(86);

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This component renders a `Dialog` when the `isOpen` prop is set to true.
 * It will manage the css transitions between the open and closed states.
 */
var DialogContainer = function (_PureComponent) {
  (0, _inherits3.default)(DialogContainer, _PureComponent);

  function DialogContainer(props) {
    (0, _classCallCheck3.default)(this, DialogContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DialogContainer.__proto__ || Object.getPrototypeOf(DialogContainer)).call(this, props));

    _this.state = { openClassName: props.isOpen };
    _this._delayIsOpen = _this._delayIsOpen.bind(_this);
    _this._openFullPageDialog = _this._openFullPageDialog.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DialogContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.isOpen && nextProps.isOpen) {
        (0, _utils.setOverflow)(true);
        if (nextProps.pageX && nextProps.pageY) {
          this._openFullPageDialog(nextProps);
        }
      } else if (this.props.isOpen && !nextProps.isOpen) {
        (0, _utils.setOverflow)(false);
        this._delayIsOpen(nextProps.transitionLeaveTimeout);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _utils.setOverflow)(false);

      if (this.state.timeout) {
        clearTimeout(this.state.timeout);
      }
    }
  }, {
    key: '_getTransformOrigin',
    value: function _getTransformOrigin(pageX, pageY) {
      if (!pageX || !pageY) {
        return null;
      }

      return pageX - window.scrollX + 'px ' + (pageY - window.scrollY) + 'px';
    }

    /**
     * The only purpose of this function is to be used when closing the dialog.
     * The visibility gets changed to hidden and the z-index turns to -1. So
     * this function will wait for the dialog to finish animating before removing
     * the open className
     */

  }, {
    key: '_delayIsOpen',
    value: function _delayIsOpen(time) {
      var _this2 = this;

      var timeout = setTimeout(function () {
        _this2.setState({ openClassName: false, timeout: null });
      }, time);

      this.setState({ timeout: timeout, openClassName: true });
    }
  }, {
    key: '_openFullPageDialog',
    value: function _openFullPageDialog(_ref) {
      var pageX = _ref.pageX;
      var pageY = _ref.pageY;

      this.setState({ transformOrigin: this._getTransformOrigin(pageX, pageY) });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var actions = _props.actions;
      var isOpen = _props.isOpen;
      var title = _props.title;
      var children = _props.children;
      var className = _props.className;
      var contentClassName = _props.contentClassName;
      var dialogClassName = _props.dialogClassName;
      var modal = _props.modal;
      var close = _props.close;
      var actionLeft = _props.actionLeft;
      var actionRight = _props.actionRight;
      var style = _props.style;
      var dialogStyle = _props.dialogStyle;
      var contentStyle = _props.contentStyle;
      var transitionName = _props.transitionName;
      var transitionEnter = _props.transitionEnter;
      var transitionEnterTimeout = _props.transitionEnterTimeout;
      var transitionLeave = _props.transitionLeave;
      var transitionLeaveTimeout = _props.transitionLeaveTimeout;
      var props = (0, _objectWithoutProperties3.default)(_props, ['actions', 'isOpen', 'title', 'children', 'className', 'contentClassName', 'dialogClassName', 'modal', 'close', 'actionLeft', 'actionRight', 'style', 'dialogStyle', 'contentStyle', 'transitionName', 'transitionEnter', 'transitionEnterTimeout', 'transitionLeave', 'transitionLeaveTimeout']);

      var isSimple = !actions || !actions.length;

      var isFullPage = !!actionLeft || !!actionRight;
      return (0, _jsx3.default)(_reactAddonsCssTransitionGroup2.default, {
        transitionName: transitionName,
        transitionEnter: transitionEnter,
        transitionEnterTimeout: transitionEnterTimeout,
        transitionLeave: transitionLeave,
        transitionLeaveTimeout: transitionLeaveTimeout,
        className: (0, _classnames2.default)('md-dialog-container', className, {
          'open': isOpen || this.state.openClassName,
          'simple': isSimple,
          'dialog-centered': !isFullPage
        }),
        style: style
      }, void 0, isOpen && _react2.default.createElement(_Dialog2.default, (0, _extends3.default)({
        key: 'dialog',
        title: title,
        children: children,
        className: dialogClassName,
        contentClassName: contentClassName,
        actions: actions,
        actionLeft: actionLeft,
        actionRight: actionRight,
        style: dialogStyle,
        contentStyle: contentStyle,
        transformOrigin: this.state.transformOrigin,
        isSimple: isSimple,
        isFullPage: isFullPage
      }, props)), (0, _jsx3.default)(_Overlay2.default, {
        isOpen: isOpen,
        onClick: modal ? null : close
      }));
    }
  }]);
  return DialogContainer;
}(_react.PureComponent);

DialogContainer.propTypes = {
  /**
   * Boolean if the Dialog is currently open.
   */
  isOpen: _react.PropTypes.bool.isRequired,

  /**
   * A function to call that will close the dialog. This function will
   * be called when the overlay is clicked on simple dialogs.
   */
  close: _react.PropTypes.func.isRequired,

  /**
   * Any children to display in the Dialog.
   */
  children: _react.PropTypes.node,

  /**
   * An optional title to display in the dialog.
   */
  title: _react.PropTypes.string,

  /**
   * A single action or a list of actions to display in the Dialog.
   * This can either be a list of `FlatButton` props or `FlatButton` elements.
   */
  actions: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object]))]),

  /**
   * Any action to display to the left of the title in a full page dialog's toolbar.
   * See the [Toolbar's actionLeft](/components/toolbars) documentation for more information.
   */
  actionLeft: _react.PropTypes.node,

  /**
   * Any action to display to the right of the title in a full page dialog's toolbar.
   * See the [Toolbar actionsRight](/components/toolbars) documentation for more information.
   */
  actionRight: _react.PropTypes.node,

  /**
   * An optional className to apply to the `Dialog` container.
   */
  className: _react.PropTypes.string,

  /**
   * An optional className to apply to the `Dialog` itself.
   */
  dialogClassName: _react.PropTypes.string,

  /**
   * An optional className to apply to the `Dialog`'s content section.
   */
  contentClassName: _react.PropTypes.string,

  /**
   * Boolean if the `Dialog` should behave as a modal. This means that one
   * of the actions must be selected to close the dialog. The overlay
   * can not be clicked to be closed.
   */
  modal: _react.PropTypes.bool,

  /**
   * An optional style to apply to the `Dialog` container.
   */
  style: _react.PropTypes.object,

  /**
   * An optional style to apply to the `Dialog` itself.
   */
  dialogStyle: _react.PropTypes.object,

  /**
   * An optional style to apply to the `Dialog`'s content section.
   */
  contentStyle: _react.PropTypes.object,

  /**
   * An optional click/touch event's pageX location to use when
   * rendering a full page dialog. This will make the `Dialog` appear relative
   * to the click origin.
   */
  pageX: _react.PropTypes.number,

  /**
   * An optional click/touch event's pageY location to use when
   * rendering a full page dialog. This will make the `Dialog` appear relative
   * to the click origin.
   */
  pageY: _react.PropTypes.number,

  /**
   * The transition name to use for the `Dialog` when appearing/disappearing
   */
  transitionName: _react.PropTypes.string.isRequired,

  /**
   * Boolean if the enter transition should be used.
   */
  transitionEnter: _react.PropTypes.bool,

  /**
   * The timeout for the the enter transition.
   */
  transitionEnterTimeout: _react.PropTypes.number,

  /**
   * Boolean if the leave transition should be used.
   */
  transitionLeave: _react.PropTypes.bool,

  /**
   * The timeout for the leave transition.
   */
  transitionLeaveTimeout: _react.PropTypes.number
};
DialogContainer.defaultProps = {
  modal: false,
  transitionName: 'md-dialog',
  transitionEnter: true,
  transitionEnterTimeout: 300,
  transitionLeave: true,
  transitionLeaveTimeout: 300
};
exports.default = DialogContainer;

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

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _FlatButton = __webpack_require__(36);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A simple component for converting action objects into `FlatButton`
 * or just rendering the actions that are valid elements.
 */
var DialogFooter = function (_PureComponent) {
  (0, _inherits3.default)(DialogFooter, _PureComponent);

  function DialogFooter() {
    (0, _classCallCheck3.default)(this, DialogFooter);
    return (0, _possibleConstructorReturn3.default)(this, (DialogFooter.__proto__ || Object.getPrototypeOf(DialogFooter)).apply(this, arguments));
  }

  (0, _createClass3.default)(DialogFooter, [{
    key: '_actionToElement',
    value: function _actionToElement(action, key) {
      if (!_react2.default.isValidElement(action)) {
        return _react2.default.createElement(_FlatButton2.default, (0, _extends3.default)({ key: key }, action));
      } else {
        return action;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var actions = _props.actions;


      var children = void 0;
      if (Array.isArray(actions)) {
        children = actions.map(this._actionToElement);
      } else {
        children = this._actionToElement(actions);
      }

      return (0, _jsx3.default)('footer', {
        className: (0, _classnames2.default)('md-dialog-footer', className)
      }, void 0, children);
    }
  }]);
  return DialogFooter;
}(_react.PureComponent);

DialogFooter.propTypes = {
  /**
   * The optional className to apply.
   */
  className: _react.PropTypes.string,

  /**
   * The list of actions or a single action to display in the footer.
   */
  actions: _react.PropTypes.oneOfType([_react.PropTypes.shape({
    onClick: _react.PropTypes.func.isRequired,
    label: _react.PropTypes.string.isRequired
  }), _react.PropTypes.element, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.shape({
    onClick: _react.PropTypes.func.isRequired,
    label: _react.PropTypes.string.isRequired
  })]))]).isRequired
};
exports.default = DialogFooter;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DialogContainer = __webpack_require__(135);

var _DialogContainer2 = _interopRequireDefault(_DialogContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DialogContainer2.default;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _reactDom = __webpack_require__(11);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _keyCodes = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `ExpansionList` component is a wrapper for the `ExpansionPanel` that helps
 * determine which `ExpansionPanel` currently has tab focus and adjusts the column
 * sizes in the header of the `ExpansionPanel`.
 *
 * The `ExpansionList` and `ExpansionPanel` components should have probably been
 * implemented as a `table` insead of a `ul || ol` since it is more column based,
 * but it would complicate the API to have dynamic row generation for the expanded
 * panels. The expanded panels _might_ not follow the same column widths as their labels
 * so a singular row with a div for expanded content might not work correctly.
 */
var ExpansionList = function (_PureComponent) {
  (0, _inherits3.default)(ExpansionList, _PureComponent);

  function ExpansionList(props) {
    (0, _classCallCheck3.default)(this, ExpansionList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ExpansionList.__proto__ || Object.getPrototypeOf(ExpansionList)).call(this, props));

    _this.state = { columnWidths: [], focusedIndex: -1 };

    _this._removeFocus = _this._removeFocus.bind(_this);
    _this._calcColumnWidths = _this._calcColumnWidths.bind(_this);
    _this._determineTabFocus = _this._determineTabFocus.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ExpansionList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._calcColumnWidths();
      window.addEventListener('keyup', this._determineTabFocus);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.children !== nextProps.chilren) {
        this._calcColumnWidths();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var focusedIndex = this.state.focusedIndex;

      if (prevState.focusedIndex === focusedIndex || prevState.focusedIndex > -1 && focusedIndex > -1) {
        return;
      }

      if (this.state.focusedIndex === -1) {
        window.removeEventListener('click', this._removeFocus);
      } else {
        window.addEventListener('click', this._removeFocus);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keyup', this._determineTabFocus);
    }
  }, {
    key: '_determineTabFocus',
    value: function _determineTabFocus(e) {
      if ((e.which || e.keyCode) === _keyCodes.TAB) {
        var panels = Array.prototype.slice.call((0, _reactDom.findDOMNode)(this).querySelectorAll('.md-panel-header'));
        this.setState({ focusedIndex: panels.indexOf(e.target) });
      }
    }
  }, {
    key: '_removeFocus',
    value: function _removeFocus() {
      this.setState({ focusedIndex: -1 });
    }

    /**
     * Since this should really be rendered as a table, need to calculate the max width for each _column_
     * on the panel's header and apply that as a min width for the other panels.
     */

  }, {
    key: '_calcColumnWidths',
    value: function _calcColumnWidths() {
      var columnWidths = Array.prototype.slice.call((0, _reactDom.findDOMNode)(this).querySelectorAll('.md-panel-header')).reduce(function (maxes, row) {
        var columns = row.querySelectorAll('.md-panel-column');
        for (var i = 0; i < columns.length; i++) {
          // Only need to include the offsetWidth of the column because the child will really
          // determine the width of the column. Since it has already been defined at this point,
          // no additional work needs to be done.
          maxes[i] = Math.max(columns[i].offsetWidth, maxes[i] || 0);
        }

        return maxes;
      }, [0]);

      this.setState({ columnWidths: columnWidths });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var columnWidths = _state.columnWidths;
      var focusedIndex = _state.focusedIndex;
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var component = _props.component;
      var props = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'component']);


      return (0, _react.createElement)(component, (0, _extends3.default)({}, props, {
        className: (0, _classnames2.default)('md-expansion-panel-list', className)
      }), _react.Children.map(children, function (child, i) {
        return (0, _react.cloneElement)(child, {
          key: child.key || i,
          columnWidths: columnWidths,
          focused: focusedIndex === i
        });
      }));
    }
  }]);
  return ExpansionList;
}(_react.PureComponent);

ExpansionList.propTypes = {
  /**
   * An optional style object to apply to the list.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply to the list.
   */
  className: _react.PropTypes.string,

  /**
   * The children should be a list or singular `ExpansionPanel` component
   * to render with some additional props injected.
   */
  children: _react.PropTypes.node,

  /**
   * The component to render the list as.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired
};
ExpansionList.defaultProps = {
  component: 'ul'
};
exports.default = ExpansionList;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactAddonsTransitionGroup = __webpack_require__(52);

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Height = __webpack_require__(61);

var _Height2 = _interopRequireDefault(_Height);

var _PanelContent = __webpack_require__(140);

var _PanelContent2 = _interopRequireDefault(_PanelContent);

var _AccessibleFakeButton = __webpack_require__(57);

var _AccessibleFakeButton2 = _interopRequireDefault(_AccessibleFakeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LABEL_FONT_SIZE = 15;
var LINE_HEIGHT = 1.42857;
var SINGLE_LINE_HEIGHT = LABEL_FONT_SIZE * LINE_HEIGHT;

/**
 * The `ExpansionPanel` component needs to be used with the `ExpansionList`
 * component. The only reason is that the `ExpansionPanel` should really
 * be rendered as a table, but it was a bit hard to have a single component
 * dynamically rendering another row when expanded. It couldn't be in the
 * same row since the expanded content might not have the same columns.
 */

var ExpansionPanel = function (_PureComponent) {
  (0, _inherits3.default)(ExpansionPanel, _PureComponent);

  function ExpansionPanel(props) {
    (0, _classCallCheck3.default)(this, ExpansionPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ExpansionPanel.__proto__ || Object.getPrototypeOf(ExpansionPanel)).call(this, props));

    _this.state = {
      received: false,
      twoLine: false
    };

    if (typeof props.expanded === 'undefined') {
      _this.state.expanded = props.defaultExpanded;
    }

    _this._handleSave = _this._handleSave.bind(_this);
    _this._handleCancel = _this._handleCancel.bind(_this);
    _this._handleClick = _this._handleClick.bind(_this);
    _this._determineIfTwoLine = _this._determineIfTwoLine.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ExpansionPanel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._determineIfTwoLine();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (false) {
        if (nextProps.columnWidths.length === 0) {
          // Hopefully a nice warning about fixing the missing props injected from ExpansionList
          /* eslint-disable no-console */
          console.error('The `ExpansionPanel` component expects the `columnWidths` prop to be injected from the ' + '`ExpansionList` component. It could be missing because:' + '\n - you have a wrapper component with extra functionality' + '\n - the `ExpansionPanel` is not a direct child of the `ExpansonList` component' + '\n\nYou can fix this by making sure to pass `this.props.focused` and `this.props.columWidths` ' + 'within your wrapper component and making the `ExpansionPanel` a direct child of `ExpansionList`.');
        }

        this.setState({ received: true });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.label === prevProps.label && this.props.secondaryLabel === prevProps.secondaryLabel) {
        return;
      }

      this._determineIfTwoLine();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._delayed) {
        clearTimeout(this._delayed);
      }
    }
  }, {
    key: '_isExpanded',
    value: function _isExpanded(props, state) {
      return typeof props.expanded === 'undefined' ? state.expanded : props.expanded;
    }
  }, {
    key: '_determineIfTwoLine',
    value: function _determineIfTwoLine() {
      var twoLine = false;
      Array.prototype.slice.call((0, _reactDom.findDOMNode)(this).querySelectorAll('.md-panel-column')).some(function (el) {
        return twoLine = el.offsetHeight > SINGLE_LINE_HEIGHT;
      });

      this.setState({ twoLine: twoLine });
    }
  }, {
    key: '_handleClick',
    value: function _handleClick() {
      var expanded = !this._isExpanded(this.props, this.state);
      if (this.props.onExpandToggle) {
        this.props.onExpandToggle(expanded);
      }

      if (typeof this.props.expanded === 'undefined') {
        this.setState({ expanded: expanded });
      }
    }
  }, {
    key: '_handleSave',
    value: function _handleSave(e) {
      var _this2 = this;

      var _props = this.props;
      var onSave = _props.onSave;
      var onExpandToggle = _props.onExpandToggle;
      var closeOnSave = _props.closeOnSave;

      if (onSave) {
        onSave(e);
      }

      if (closeOnSave) {
        this._delayed = setTimeout(function () {
          _this2._delayed = null;

          if (onExpandToggle) {
            onExpandToggle(false);
          }

          if (typeof _this2.props.expanded === 'undefined') {
            _this2.setState({ expanded: false });
          }
        }, 300);
      }
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel(e) {
      var _this3 = this;

      var _props2 = this.props;
      var onCancel = _props2.onCancel;
      var onExpandToggle = _props2.onExpandToggle;
      var closeOnCancel = _props2.closeOnCancel;

      if (onCancel) {
        onCancel(e);
      }

      if (closeOnCancel) {
        this._delayed = setTimeout(function () {
          _this3._delayed = null;

          if (onExpandToggle) {
            onExpandToggle(false);
          }

          if (typeof _this3.props.expanded === 'undefined') {
            _this3.setState({ expanded: false });
          }
        }, 300);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var className = _props3.className;
      var label = _props3.label;
      var secondaryLabel = _props3.secondaryLabel;
      var expandedSecondaryLabel = _props3.expandedSecondaryLabel;
      var children = _props3.children;
      var expandIconChildren = _props3.expandIconChildren;
      var expandIconClassName = _props3.expandIconClassName;
      var focused = _props3.focused;
      var columnWidths = _props3.columnWidths;
      var saveType = _props3.saveType;
      var saveLabel = _props3.saveLabel;
      var savePrimary = _props3.savePrimary;
      var saveSecondary = _props3.saveSecondary;
      var cancelType = _props3.cancelType;
      var cancelLabel = _props3.cancelLabel;
      var cancelPrimary = _props3.cancelPrimary;
      var cancelSecondary = _props3.cancelSecondary;
      var headerStyle = _props3.headerStyle;
      var headerClassName = _props3.headerClassName;
      var contentStyle = _props3.contentStyle;
      var contentClassName = _props3.contentClassName;
      var tabIndex = _props3.tabIndex;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'label', 'secondaryLabel', 'expandedSecondaryLabel', 'children', 'expandIconChildren', 'expandIconClassName', 'focused', 'columnWidths', 'saveType', 'saveLabel', 'savePrimary', 'saveSecondary', 'cancelType', 'cancelLabel', 'cancelPrimary', 'cancelSecondary', 'headerStyle', 'headerClassName', 'contentStyle', 'contentClassName', 'tabIndex']);


      delete props.defaultExpanded;
      delete props.expanded;
      delete props.onSave;
      delete props.onCancel;
      delete props.onExpandToggle;
      delete props.closeOnSave;
      delete props.closeOnCancel;

      var twoLine = this.state.twoLine;

      var expanded = this._isExpanded(this.props, this.state);

      var visibleChildren = void 0;
      if (expanded) {
        visibleChildren = (0, _jsx3.default)(_Height2.default, {}, 'content', (0, _jsx3.default)(_PanelContent2.default, {
          style: contentStyle,
          className: contentClassName,
          children: children,
          onSave: this._handleSave,
          onCancel: this._handleCancel,
          saveType: saveType,
          saveLabel: saveLabel,
          savePrimary: savePrimary,
          saveSecondary: saveSecondary,
          cancelType: cancelType,
          cancelLabel: cancelLabel,
          cancelPrimary: cancelPrimary,
          cancelSecondary: cancelSecondary
        }));
      }

      var columns = _react.Children.map(expanded && expandedSecondaryLabel || secondaryLabel, function (panelLabel, i) {
        return (0, _jsx3.default)('div', {
          className: 'md-panel-column',
          style: { minWidth: columnWidths[i + 1] }
        }, void 0, panelLabel);
      });

      if (!Array.isArray(columns)) {
        columns = [columns];
      }

      columns.unshift((0, _jsx3.default)('div', {
        className: 'md-panel-column md-panel-label',
        style: { minWidth: columnWidths[0] }
      }, 'main-label', label));

      return _react2.default.createElement(
        _reactAddonsTransitionGroup2.default,
        (0, _extends3.default)({
          className: (0, _classnames2.default)('md-expansion-panel', className, { expanded: expanded }),
          component: 'li'
        }, props, {
          'aria-expanded': expanded
        }),
        (0, _jsx3.default)(_AccessibleFakeButton2.default, {
          onClick: this._handleClick,
          style: headerStyle,
          className: (0, _classnames2.default)('md-panel-header', headerClassName, { 'expanded': expanded || twoLine, focused: focused }),
          tabIndex: tabIndex
        }, void 0, columns, (0, _jsx3.default)(_FontIcons2.default, {
          className: (0, _classnames2.default)('md-panel-expander', { 'flipped': expanded }),
          iconClassName: expandIconClassName,
          children: expandIconChildren
        })),
        visibleChildren
      );
    }
  }]);
  return ExpansionPanel;
}(_react.PureComponent);

ExpansionPanel.propTypes = {
  /**
   * An optional style to apply to the panel.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply to the panel.
   */
  className: _react.PropTypes.string,

  /**
   * An options style to apply to the panel's header content. This is the
   * section that toggles the children to be visible and label columns.
   */
  headerStyle: _react.PropTypes.object,

  /**
   * An optional className to apply to the panel's header content. This is the
   * section that toggles the children to be visible and label columns.
   */
  headerClassName: _react.PropTypes.string,

  /**
   * An optional style to applt to the element surrounding the children when expanded.
   */
  contentStyle: _react.PropTypes.object,

  /**
   * An optional className to applt to the element surrounding the children when expanded.
   */
  contentClassName: _react.PropTypes.string,

  /**
   * The main label to display in the unexpanded panel.
   */
  label: _react.PropTypes.node.isRequired,

  /**
   * Any additional columns to display after the main label. If this is a `list`
   * instead of a singular item, they will each be formatted as a column.
   */
  secondaryLabel: _react.PropTypes.node,

  /**
   * Any additional columns to display after the main label when the panel is
   * expanded. If this is omitted, the default `secondaryLabel` will be displayed
   * instead.
   */
  expandedSecondaryLabel: _react.PropTypes.node,

  /**
   * The component to render the panel as.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,

  /**
   * The content to display once the panel is toggled open.
   */
  children: _react.PropTypes.node,

  /**
   * A boolean if the panel is currently expanded. This will force the component
   * to be controlled and require's the `onExpandToggle` function to be defined.
   */
  expanded: _react.PropTypes.bool,

  /**
   * Boolean if an uncontrolled panel should be expanded by default.
   */
  defaultExpanded: _react.PropTypes.bool.isRequired,

  /**
   * Any children required to render the expand icon.
   */
  expandIconChildren: _react.PropTypes.node,

  /**
   * The icon className to use to render the expand icon.
   */
  expandIconClassName: _react.PropTypes.string,

  /**
   * Boolean if the `ExpansionPanel` is currently tab focused. This is injected
   * and managed by the `ExpansionList` component. Do not set yourself.
   */
  focused: _react.PropTypes.bool.isRequired,

  /**
   * A list of min-widths to apply to each column in the panel header. This is injected
   * and managed by the `ExpansionList` component. Do not set yourself.
   */
  columnWidths: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,

  /**
   * A function to call when the expansion panel's expanded state is toggled.
   * The callback for this function will include the new expanded state.
   *
   * `onExpandToggle(expanded)`
   */
  onExpandToggle: function onExpandToggle(props, propName, component) {
    for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      others[_key - 3] = arguments[_key];
    }

    if (typeof props.expanded !== 'undefined') {
      var _PropTypes$func;

      return (_PropTypes$func = _react.PropTypes.func).isRequired.apply(_PropTypes$func, [props, propName, component].concat(others));
    } else {
      return _react.PropTypes.func.apply(_react.PropTypes, [props, propName, component].concat(others));
    }
  },

  /**
   * An optional function to call when the Save button is clicked on the expanded panel.
   */
  onSave: _react.PropTypes.func,

  /**
   * An optional function to call when the Cancel button is clicked on the expanded panel.
   */
  onCancel: _react.PropTypes.func,

  /**
   * Boolean if the panel should close when the Save button is clicked.
   */
  closeOnSave: _react.PropTypes.bool,

  /**
   * Boolean if the panel should close when the Cancel button is clicked.
   */
  closeOnCancel: _react.PropTypes.bool,

  /**
   * An optional button type to apply to the Save button. This will get
   * passed to the `FlatButton`.
   */
  saveType: _react.PropTypes.oneOf(['button', 'submit', 'reset']),

  /**
   * The label for the Save button.
   */
  saveLabel: _react.PropTypes.string.isRequired,

  /**
   * Boolean if the Save button should be styled with the primary color.
   */
  savePrimary: _react.PropTypes.bool,

  /**
   * Boolean if the Save button should be styled with the secondary color,
   */
  saveSecondary: _react.PropTypes.bool,

  /**
   * An optional button type to apply to the Cancel button. This will get
   * passed to the `FlatButton`.
   */
  cancelType: _react.PropTypes.oneOf(['button', 'submit', 'reset']),

  /**
   * The label for the Cancel button.
   */
  cancelLabel: _react.PropTypes.string.isRequired,

  /**
   * Boolean if the Cancel button should be styled with the primary color,
   */
  cancelPrimary: _react.PropTypes.bool,

  /**
   * Boolean if the Cancel button should be styled with the secondary color,
   */
  cancelSecondary: _react.PropTypes.bool,

  /**
   * The tab index for the panel's header. This allows keyboard navigation.
   */
  tabIndex: _react.PropTypes.number.isRequired
};
ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  expandIconChildren: 'keyboard_arrow_down',
  component: 'li',
  saveLabel: 'Save',
  cancelLabel: 'Cancel',
  savePrimary: true,
  tabIndex: 0,
  closeOnSave: true,
  closeOnCancel: true,
  focused: false,
  columnWidths: []
};
exports.default = ExpansionPanel;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _PanelControls = __webpack_require__(141);

var _PanelControls2 = _interopRequireDefault(_PanelControls);

var _Dividers = __webpack_require__(38);

var _Dividers2 = _interopRequireDefault(_Dividers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `PanelContent` component is for displaying the expanded content
 * for an `ExpansionPanel`. It wil display any children in a `md-panel-content`
 * container followed by a `Divider` and the `PanelControls` .
 */
var _ref = (0, _jsx3.default)(_Dividers2.default, {
  className: 'md-panel-divider'
});

var PanelContent = function (_PureComponent) {
  (0, _inherits3.default)(PanelContent, _PureComponent);

  function PanelContent() {
    (0, _classCallCheck3.default)(this, PanelContent);
    return (0, _possibleConstructorReturn3.default)(this, (PanelContent.__proto__ || Object.getPrototypeOf(PanelContent)).apply(this, arguments));
  }

  (0, _createClass3.default)(PanelContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var className = _props.className;
      var children = _props.children;
      var onSave = _props.onSave;
      var onCancel = _props.onCancel;
      var saveType = _props.saveType;
      var saveLabel = _props.saveLabel;
      var savePrimary = _props.savePrimary;
      var saveSecondary = _props.saveSecondary;
      var cancelType = _props.cancelType;
      var cancelLabel = _props.cancelLabel;
      var cancelPrimary = _props.cancelPrimary;
      var cancelSecondary = _props.cancelSecondary;


      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
        className: (0, _classnames2.default)('md-panel-content', className),
        style: style
      }, void 0, children), _ref, (0, _jsx3.default)(_PanelControls2.default, {
        onSave: onSave,
        onCancel: onCancel,
        saveType: saveType,
        saveLabel: saveLabel,
        savePrimary: savePrimary,
        saveSecondary: saveSecondary,
        cancelType: cancelType,
        cancelLabel: cancelLabel,
        cancelPrimary: cancelPrimary,
        cancelSecondary: cancelSecondary
      }));
    }
  }]);
  return PanelContent;
}(_react.PureComponent);

PanelContent.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  onSave: _react.PropTypes.func.isRequired,
  onCancel: _react.PropTypes.func.isRequired,
  saveType: _react.PropTypes.string,
  saveLabel: _react.PropTypes.string.isRequired,
  savePrimary: _react.PropTypes.bool,
  saveSecondary: _react.PropTypes.bool,
  cancelType: _react.PropTypes.string,
  cancelLabel: _react.PropTypes.string.isRequired,
  cancelPrimary: _react.PropTypes.bool,
  cancelSecondary: _react.PropTypes.bool
};
exports.default = PanelContent;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _FlatButton = __webpack_require__(36);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `PanelControls` component is used for rendering the two buttons
 * below the expanded content for the panel.
 */
var PanelControls = function (_PureComponent) {
  (0, _inherits3.default)(PanelControls, _PureComponent);

  function PanelControls() {
    (0, _classCallCheck3.default)(this, PanelControls);
    return (0, _possibleConstructorReturn3.default)(this, (PanelControls.__proto__ || Object.getPrototypeOf(PanelControls)).apply(this, arguments));
  }

  (0, _createClass3.default)(PanelControls, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var onSave = _props.onSave;
      var onCancel = _props.onCancel;
      var saveType = _props.saveType;
      var saveLabel = _props.saveLabel;
      var savePrimary = _props.savePrimary;
      var saveSecondary = _props.saveSecondary;
      var cancelType = _props.cancelType;
      var cancelLabel = _props.cancelLabel;
      var cancelPrimary = _props.cancelPrimary;
      var cancelSecondary = _props.cancelSecondary;


      return (0, _jsx3.default)('div', {
        className: (0, _classnames2.default)('md-panel-controls', className)
      }, void 0, (0, _jsx3.default)(_FlatButton2.default, {
        type: cancelType,
        label: cancelLabel,
        onClick: onCancel,
        primary: cancelPrimary,
        secondary: cancelSecondary
      }), (0, _jsx3.default)(_FlatButton2.default, {
        type: saveType,
        label: saveLabel,
        onClick: onSave,
        primary: savePrimary,
        secondary: saveSecondary
      }));
    }
  }]);
  return PanelControls;
}(_react.PureComponent);

PanelControls.propTypes = {
  className: _react.PropTypes.string,
  onSave: _react.PropTypes.func.isRequired,
  onCancel: _react.PropTypes.func.isRequired,
  saveLabel: _react.PropTypes.string.isRequired,
  savePrimary: _react.PropTypes.bool,
  saveSecondary: _react.PropTypes.bool,
  saveType: _react.PropTypes.string,
  cancelLabel: _react.PropTypes.string.isRequired,
  cancelPrimary: _react.PropTypes.bool,
  cancelSecondary: _react.PropTypes.bool,
  cancelType: _react.PropTypes.string
};
exports.default = PanelControls;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Inks = __webpack_require__(25);

var _Inks2 = _interopRequireDefault(_Inks);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `FileInput` component is used as simple styling for the `<input type="file" />`.
 * It will style the input as a raised button by default.
 */
var FileInput = function (_PureComponent) {
  (0, _inherits3.default)(FileInput, _PureComponent);

  function FileInput(props) {
    (0, _classCallCheck3.default)(this, FileInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).call(this, props));

    _this._handleChange = _this._handleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(FileInput, [{
    key: '_handleChange',
    value: function _handleChange(e) {
      var _props = this.props;
      var multiple = _props.multiple;
      var onChange = _props.onChange;
      var files = e.target.files;

      if (!multiple) {
        onChange(files[0] || null, e);
      } else {
        onChange(Array.prototype.slice.call(files), e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var style = _props2.style;
      var className = _props2.className;
      var label = _props2.label;
      var iconChildren = _props2.iconChildren;
      var iconClassName = _props2.iconClassName;
      var primary = _props2.primary;
      var secondary = _props2.secondary;
      var flat = _props2.flat;
      var ink = _props2.ink;
      var id = _props2.id;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['style', 'className', 'label', 'iconChildren', 'iconClassName', 'primary', 'secondary', 'flat', 'ink', 'id']);

      delete props.onChange;

      return (0, _jsx3.default)('label', {
        style: style,
        className: (0, _classnames2.default)('md-btn md-' + (flat ? 'flat' : 'raised') + '-btn md-file-input-btn', className, {
          'md-primary': primary,
          'md-secondary': secondary
        }),
        disabled: props.disabled,
        htmlFor: id
      }, void 0, ink, _react2.default.createElement('input', (0, _extends3.default)({}, props, {
        id: id,
        'aria-hidden': 'true',
        type: 'file',
        className: 'md-file-input',
        onChange: this._handleChange
      })), (0, _jsx3.default)('div', {
        className: 'icon-separator'
      }, void 0, (0, _jsx3.default)(_FontIcons2.default, {
        iconClassName: iconClassName,
        children: iconChildren
      }), (0, _jsx3.default)('span', {
        className: 'text'
      }, void 0, label)));
    }
  }]);
  return FileInput;
}(_react.PureComponent);

FileInput.propTypes = {
  /**
   * An optional style to apply.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply.
   */
  className: _react.PropTypes.string,

  /**
   * Boolean if the `FileInput` should be styled with the primary color.
   */
  primary: _react.PropTypes.bool,

  /**
   * Boolean if the `FileInput` should be styled with the secondary color.
   */
  secondary: _react.PropTypes.bool,

  /**
   * Boolean if the `FileInput` should be styled as a flat button instead of a
   * raised button.
   */
  flat: _react.PropTypes.bool,

  /**
   * This should be a comma separated list of Media Types that the `FileInput` can
   * accept. If this prop is left blank, any file will be accepted.
   *
   * The values can either be:
   * - A file extension
   * - audio/*
   * - video/*
   * - image/*
   * - any valid [IANA Media Type](http://www.iana.org/assignments/media-types/media-types.xhtml)
   */
  accept: _react.PropTypes.string,

  /**
   * Boolean if multiple files will be accepted.
   */
  multiple: _react.PropTypes.bool,

  /**
   * A label to display on the `FileInput` when no files have been selected.
   */
  label: _react.PropTypes.string.isRequired,

  /**
   * The icon children to use for the upload icon.
   */
  iconChildren: _react.PropTypes.node,

  /**
   * The icon className to use for the upload icon.
   */
  iconClassName: _react.PropTypes.string,

  /**
   * A function to call when the value of the input changes. This will
   * be triggered when the user selects a new file or cancels the new file selection.
   *
   * This function will be given the new [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
   * as an array and the change event. If this is not a multiple file input, only the
   * newly selected File will be given instead of a list of one file. Since this is an
   * `input` tag, the user will not be able to select the same file multiple times unless
   * you manually clear the input's value.
   *
   * > NOTE: If the user hits cancel, null will be given for a single file input.
   *
   * ```js
   * onChange(files, e);
   * ```
   */
  onChange: _react.PropTypes.func.isRequired,

  /**
   * Injected from `injectInk`
   */
  ink: _react.PropTypes.node,

  /**
   * An optional id for the file input field.
   */
  id: _react.PropTypes.string
};
FileInput.defaultProps = {
  label: 'Select a file from your computer',
  iconChildren: 'file_upload'
};
exports.default = (0, _Inks2.default)(FileInput);

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _FileInput = __webpack_require__(142);

var _FileInput2 = _interopRequireDefault(_FileInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `FileUpload` component is used to upload files locally. If you want
 * to upload files to a server, use [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
 * by attaching the `File`.
 *
 * Quick example:
 *
 * ```js
 * function upload(file) {
 *   fetch('/api/images', {
 *     method: 'POST',
 *     body: new FormData().append('file', file),
 *   });
 * }
 * ```
 *
 * An upload can be aborted by calling the `abort(file || fileName)` function. If
 * the file or fileName are ommitted, it will *attempt* to abort the current
 * file that is uploading. Unreliable for multiselect.
 *
 * ```js
 * <FileUpload ref="upload" />
 * <RaisedButton onClick={() => this.refs.upload.abort()} label="Abort! Abort!" />
 * ```
 */
var FileUpload = function (_PureComponent) {
  (0, _inherits3.default)(FileUpload, _PureComponent);

  function FileUpload(props) {
    (0, _classCallCheck3.default)(this, FileUpload);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this, props));

    _this.state = {};
    _this.abort = _this.abort.bind(_this);
    _this._uploadFile = _this._uploadFile.bind(_this);
    _this._handleUpload = _this._handleUpload.bind(_this);
    return _this;
  }

  /**
   * Attempts to abort the upload of a file. This function takes an optional `file` or `fileName`
   * as it's parameter. If the parameter is omitted, it attempts to abort the first file that was
   * added. If the `onAbort` function was given, it will be called as well.
   *
   * @param {Object|string=} file - The file or the file name to use to find the
   *     correct `FileReader`.
   */


  (0, _createClass3.default)(FileUpload, [{
    key: 'abort',
    value: function abort(file) {
      var fileName = file;
      if (!file) {
        // Attempt to remove first file added...
        fileName = Object.keys(this.state)[0];
      } else if (typeof file.name === 'string') {
        fileName = file.name;
      }

      var reader = this.state[fileName];
      if (reader) {
        reader.abort();
        var state = this.state;
        delete state[fileName];

        (0, _reactDom.findDOMNode)(this).querySelector('.md-file-input').value = '';

        this.setState(state);
      }
    }
  }, {
    key: '_uploadFile',
    value: function _uploadFile(file) {
      var _this2 = this;

      var _props = this.props;
      var onAbort = _props.onAbort;
      var onError = _props.onError;
      var onLoad = _props.onLoad;
      var onLoadStart = _props.onLoadStart;
      var onLoadEnd = _props.onLoadEnd;
      var onProgress = _props.onProgress;
      var readAs = _props.readAs;
      var name = file.name;
      var type = file.type;


      var fr = new FileReader();
      if (onError) {
        fr.onerror = function (e) {
          onError(file, e.target.error, e);
        };
      }

      if (onAbort) {
        fr.onabort = function (e) {
          onAbort(file, e);
        };
      }

      if (onLoadStart) {
        fr.onloadstart = function (e) {
          onLoadStart(file, e);
        };
      }

      if (onLoadEnd) {
        fr.onloadend = function (e) {
          onLoadEnd(file, e);
        };
      }

      fr.onload = function (e) {
        if (onLoad) {
          onLoad(file, e.target.result, e);
        }

        var state = Object.assign({}, _this2.state);
        delete state[name];
        _this2.setState(state);
      };

      if (onProgress) {
        fr.onprogress = function (e) {
          if (e.lengthComputable) {
            onProgress(file, e.loaded / e.total * 100, e);
          }
        };
      }

      if (readAs) {
        if (typeof readAs === 'function') {
          readAs(file.type, file, fr);
        } else {
          fr['readAs' + readAs](file);
        }
      } else if (type.match(/image|video|audio/)) {
        fr.readAsDataURL(file);
      } else if (type.match(/json$/)) {
        fr.readAsText(file);
      } else if (type.match(/application|model|multipart/) || name.match(/(w|e)ar$/)) {
        fr.readAsArrayBuffer(file);
      } else {
        fr.readAsText(file);
      }

      return fr;
    }
  }, {
    key: '_handleUpload',
    value: function _handleUpload(fileList, e) {
      var _this3 = this;

      if (this.props.onChange) {
        this.props.onChange(fileList, e);
      }

      if (!fileList) {
        return;
      }
      var _props2 = this.props;
      var maxSize = _props2.maxSize;
      var onSizeError = _props2.onSizeError;

      var files = Array.isArray(fileList) ? fileList : [fileList];

      var errorFiles = [];
      if (maxSize) {
        errorFiles = files.filter(function (file) {
          return file.size > maxSize;
        });
        files = files.filter(function (file) {
          return file.size <= maxSize;
        });
      }

      if (errorFiles.length) {
        onSizeError(errorFiles);
      }

      if (!files.length) {
        return;
      }

      var nextState = {};
      files.forEach(function (file) {
        var fileReader = _this3._uploadFile(file);
        nextState[file.name] = fileReader;
      });

      this.setState(nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = (0, _objectWithoutProperties3.default)(this.props, []);

      // Remove invalid input props

      delete props.maxSize;
      delete props.onLoad;
      delete props.onLoadStart;
      delete props.onLoadEnd;
      delete props.onProgress;
      delete props.onAbort;
      delete props.onError;
      delete props.maxSize;
      delete props.onSizeError;
      delete props.readAs;

      return _react2.default.createElement(_FileInput2.default, (0, _extends3.default)({}, props, { onChange: this._handleUpload }));
    }
  }]);
  return FileUpload;
}(_react.PureComponent);

FileUpload.propTypes = {
  /**
   * An optional style to apply.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply.
   */
  className: _react.PropTypes.string,

  /**
   * Boolean if the `FileInput` should be styled with the primary color.
   */
  primary: _react.PropTypes.bool,

  /**
   * Boolean if the `FileInput` should be styled with the secondary color.
   */
  secondary: _react.PropTypes.bool,

  /**
   * Boolean if the `FileInput` should be styled as a flat button instead of a
   * raised button.
   */
  flat: _react.PropTypes.bool,

  /**
   * This should be a comma separated list of Media Types that the `FileInput` can
   * accept. If this prop is left blank, any file will be accepted.
   *
   * The values can either be:
   * - A file extension
   * - audio/*
   * - video/*
   * - image/*
   * - any valid [IANA Media Type](http://www.iana.org/assignments/media-types/media-types.xhtml)
   */
  accept: _react.PropTypes.string,

  /**
   * Boolean if multiple files will be accepted.
   */
  multiple: _react.PropTypes.bool,

  /**
   * A label to display on the `FileInput`.
   */
  label: _react.PropTypes.string,

  /**
   * The icon children to use for the upload icon.
   */
  iconChildren: _react.PropTypes.node,

  /**
   * The icon className to use for the upload icon.
   */
  iconClassName: _react.PropTypes.string,

  /**
   * An optional max size for the file. If the file is greater than
   * this limit, the file will not be uploaded.
   */
  maxSize: _react.PropTypes.number,

  /**
   * A required function to call when the `maxSize` prop is set. It will
   * be given a list of files that were too big.
   */
  onSizeError: function onSizeError(props, propName, component) {
    for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      others[_key - 3] = arguments[_key];
    }

    if (typeof props.maxSize === 'number') {
      var _PropTypes$func;

      return (_PropTypes$func = _react.PropTypes.func).isRequired.apply(_PropTypes$func, [props, propName, component].concat(others));
    }

    return null;
  },

  /**
   * You can force the `FileReader` to read the file as a specific type
   * if you do not trust the *amazing* regex I have for choosing the correct
   * one.
   *
   * ```js
   * if(type.match(/image|video|audio/)) {
   *   fr.readAsDataURL(file);
   * } else if(type.match(/application|model|multipart/)) {
   *   fr.readAsArrayBuffer(file);
   * } else {
   *   fr.readAsText(file);
   * }
   * ```
   *
   * > `.yml` and `.js` both are considered `application`, so it definitely fails there.
   *
   * If this prop is a function, you will be given the file's type, the file object, and
   * the file reader. You will then need to call `fileReader.readAsYOUR_CORRECT_TYPE(file)`.
   */
  readAs: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['DataURL', 'ArrayBuffer', 'Text']), _react.PropTypes.func]),

  /**
   * An optional function to call when the `FileUpload` aborts. The current
   * file and the abort event are given. This might not be the most useful
   * function to use since you will need to manually call abort yourself anyways.
   */
  onAbort: _react.PropTypes.func,

  /**
   * An optional function to call when the `FileUpload` errors. The current
   * file, the error, and the error event are given.
   *
   * ```js
   * onError(file, event.target.error, event);
   * ```
   */
  onError: _react.PropTypes.func,

  /**
   * An optional function to call when the `FileUpload` loads. The current
   * file, the load result, and the load event are given.
   *
   * ```js
   * onLoad(file, event.target.result, event);
   * ```
   *
   * The load result will either be:
   * - a data url
   * - a plain text string
   * - an array buffer
   *
   * depending on what type the file is.
   */
  onLoad: _react.PropTypes.func,

  /**
   * An optional function to call when the `FileUpload` starts loading. The current
   * file and the load start event are given.
   */
  onLoadStart: _react.PropTypes.func,

  /**
   * An optional function to call when the `FileUpload` finishes loading. The
   * current file and the load end event are given.
   */
  onLoadEnd: _react.PropTypes.func,

  /**
   * An optional function to call when the `FileUpload` progress. The current
   * file, upload progress, and the progress event are given. The progress
   * will be a number between 0 and 100 that has not been rounded.
   *
   * ```js
   * onProgress(file, progress, event);
   * ```
   */
  onProgress: _react.PropTypes.func,

  /**
   * An optional function to call when a file selects or unselects a file.
   * This will be called before any local uploading occurs.
   *
   * ```js
   * onChange(file(s) || null, event);
   * ```
   */
  onChange: _react.PropTypes.func
};
exports.default = FileUpload;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InkTransition = function (_Component) {
  (0, _inherits3.default)(InkTransition, _Component);

  function InkTransition(props) {
    (0, _classCallCheck3.default)(this, InkTransition);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InkTransition.__proto__ || Object.getPrototypeOf(InkTransition)).call(this, props));

    _this.componentWillEnter = function (done) {
      var node = _reactDom2.default.findDOMNode(_this);
      var timeout = setTimeout(function () {
        node.classList.add('active');
        var timeout2 = setTimeout(function () {
          _this.setState({ timeout: null });
          done();
        }, _this.props.transitionEnterTimeout);
        _this.setState({ timeout: timeout2 });
      }, 25);

      _this.setState({ timeout: timeout });
    };

    _this.componentWillLeave = function (done) {
      var node = _reactDom2.default.findDOMNode(_this);
      node.classList.add('leaving');
      var timeout = setTimeout(function () {
        _this.setState({ timeout: null });
        done();
      }, _this.props.transitionLeaveTimeout);
      _this.setState({ timeout: timeout });
    };

    _this.state = { timeout: null };
    return _this;
  }

  (0, _createClass3.default)(InkTransition, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.state.timeout) {
        clearTimeout(this.state.timeout);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = (0, _objectWithoutProperties3.default)(this.props, []);

      delete props.transitionEnterTimeout;
      delete props.transitionLeaveTimeout;

      return _react2.default.createElement('div', (0, _extends3.default)({ className: 'md-ink' }, props));
    }
  }]);
  return InkTransition;
}(_react.Component);

InkTransition.propTypes = {
  style: _react.PropTypes.object.isRequired,
  transitionEnterTimeout: _react.PropTypes.number.isRequired,
  transitionLeaveTimeout: _react.PropTypes.number.isRequired
};
InkTransition.defaultProps = {
  transitionEnterTimeout: 150,
  transitionLeaveTimeout: 450
};
exports.default = InkTransition;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = __webpack_require__(98);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactAddonsTransitionGroup = __webpack_require__(52);

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _keyCodes = __webpack_require__(30);

var _InkTransition = __webpack_require__(144);

var _InkTransition2 = _interopRequireDefault(_InkTransition);

var _utils = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Takes any component and injects an ink container along with event
 * listeners for handling those inks. It also injects a prop
 * named `ink` which needs to be added to the `ComposedComponent`.
 *
 * ```js
 * @param ComposedComponent the component to compose with the ink functionality.
 * @return the ComposedComponent with inks.
 * ```
 */
exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_PureComponent) {
    (0, _inherits3.default)(Ink, _PureComponent);

    function Ink(props) {
      (0, _classCallCheck3.default)(this, Ink);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Ink.__proto__ || Object.getPrototypeOf(Ink)).call(this, props));

      _this.state = {
        inks: [],
        touch: false
      };

      _this._popInk = _this._popInk.bind(_this);
      _this._createInk = _this._createInk.bind(_this);
      _this._disabled = _this._disabled.bind(_this);
      _this._handleBlur = _this._handleBlur.bind(_this);
      _this._handleFocus = _this._handleFocus.bind(_this);
      _this._handleMouseUp = _this._handleMouseUp.bind(_this);
      _this._handleMouseDown = _this._handleMouseDown.bind(_this);
      _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
      _this._handleTouchEnd = _this._handleTouchEnd.bind(_this);
      _this._handleTouchMove = _this._handleTouchMove.bind(_this);
      _this._handleTouchStart = _this._handleTouchStart.bind(_this);
      _this._handleTouchCancel = _this._handleTouchCancel.bind(_this);
      return _this;
    }

    (0, _createClass3.default)(Ink, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setState({ touch: (0, _utils.isTouchDevice)() }); // eslint-disable-line
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.state.timeout) {
          clearTimeout(this.state.timeout);
        }
      }
    }, {
      key: '_calcR',
      value: function _calcR(a, b) {
        return Math.sqrt(a * a + b * b);
      }
    }, {
      key: '_invalidClickEvent',
      value: function _invalidClickEvent(_ref) {
        var button = _ref.button;
        var ctrlKey = _ref.ctrlKey;

        return button !== _keyCodes.LEFT_MOUSE || ctrlKey;
      }
    }, {
      key: '_createInk',
      value: function _createInk(pageX, pageY) {
        var container = (0, _reactDom.findDOMNode)(this).querySelector('.md-ink-container');

        var x = void 0;
        var y = void 0;
        if (typeof pageX !== 'undefined' && typeof pageY !== 'undefined') {
          var offset = (0, _utils.getOffset)(container);

          x = pageX - offset.left;
          y = pageY - offset.top;
        } else {
          var node = container.parentNode;
          x = node.offsetWidth / 2;
          y = node.offsetHeight / 2;
        }

        var offsetWidth = container.offsetWidth;
        var offsetHeight = container.offsetHeight;

        var r = Math.max(this._calcR(x, y), this._calcR(offsetWidth - x, y), this._calcR(offsetWidth - x, offsetHeight - y), this._calcR(x, offsetHeight - y));

        var left = x - r;
        var top = y - r;
        var size = r * 2;

        var ink = {
          style: {
            left: left,
            top: top,
            width: size,
            height: size
          },
          time: new Date()
        };
        this.setState({
          inks: [].concat((0, _toConsumableArray3.default)(this.state.inks), [ink])
        });
      }
    }, {
      key: '_popInk',
      value: function _popInk() {
        if (!this.state.inks.length) {
          return;
        }
        var inks = this.state.inks.slice();
        inks.pop();
        this.setState({ inks: inks });
      }
    }, {
      key: '_disabled',
      value: function _disabled() {
        return this.props.disabled || this.props.inkDisabled;
      }
    }, {
      key: '_handleMouseDown',
      value: function _handleMouseDown(e) {
        if (this.props.onMouseDown) {
          this.props.onMouseDown(e);
        }

        if (this.state.touch) {
          return;
        }
        var nextState = { skipFocus: true };
        if (!this._invalidClickEvent(e)) {
          e.stopPropagation();
          this._createInk(e.pageX, e.pageY);
          nextState.skipMouseUp = false;
        }

        this.setState(nextState);
      }
    }, {
      key: '_handleMouseLeave',
      value: function _handleMouseLeave(e) {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(e);
        }

        if (this.state.touch) {
          return;
        }
        this._popInk();
        this.setState({ skipMouseUp: true });
      }
    }, {
      key: '_handleMouseUp',
      value: function _handleMouseUp(e) {
        if (this.props.onMouseUp) {
          this.props.onMouseUp(e);
        }

        if (this.state.touch || this._invalidClickEvent(e) || this.state.skipMouseUp) {
          return;
        }
        this._popInk();
        this.setState({ skipFocus: false });
      }
    }, {
      key: '_handleTouchStart',
      value: function _handleTouchStart(e) {
        var _this2 = this;

        if (this.props.onTouchStart) {
          this.props.onTouchStart(e);
        }

        e.stopPropagation();
        var _e$changedTouches$ = e.changedTouches[0];
        var pageX = _e$changedTouches$.pageX;
        var pageY = _e$changedTouches$.pageY;

        this.setState({
          skipFocus: true,
          timeout: setTimeout(function () {
            _this2._createInk(pageX, pageY);
            _this2.setState({ timeout: null });
          }, 100)
        });
      }
    }, {
      key: '_handleTouchMove',
      value: function _handleTouchMove(e) {
        if (this.props.onTouchMove) {
          this.props.onTouchMove(e);
        }

        if (this.state.timeout) {
          clearTimeout(this.state.timeout);
          this.setState({ timeout: null });
        }
      }
    }, {
      key: '_handleTouchEnd',
      value: function _handleTouchEnd(e) {
        if (this.props.onTouchEnd) {
          this.props.onTouchEnd(e);
        }

        this._popInk();
      }
    }, {
      key: '_handleTouchCancel',
      value: function _handleTouchCancel(e) {
        if (this.props.onTouchCancel) {
          this.props.onTouchCancel(e);
        }

        this._popInk();
      }
    }, {
      key: '_handleBlur',
      value: function _handleBlur(e) {
        if (this.props.onBlur) {
          this.props.onBlur(e);
        }

        this._popInk();
      }
    }, {
      key: '_handleFocus',
      value: function _handleFocus(e) {
        if (this.props.onFocus) {
          this.props.onFocus(e);
        }

        if (this.state.skipFocus) {
          return;
        }
        e.stopPropagation();

        this._createInk();
      }
    }, {
      key: 'render',
      value: function render() {
        var props = (0, _objectWithoutProperties3.default)(this.props, []);

        delete props.inkDisabled;

        // Don't inject ink and new props if disabled
        if (this._disabled()) {
          return _react2.default.createElement(ComposedComponent, props);
        }

        var inks = this.state.inks.map(function (_ref2) {
          var time = _ref2.time;
          var inkProps = (0, _objectWithoutProperties3.default)(_ref2, ['time']);
          return _react2.default.createElement(_InkTransition2.default, (0, _extends3.default)({ key: time.getTime() }, inkProps));
        });
        var ink = (0, _jsx3.default)(_reactAddonsTransitionGroup2.default, {
          className: 'md-ink-container'
        }, 'ink-container', inks);

        return _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, props, {
          onMouseUp: this._handleMouseUp,
          onMouseDown: this._handleMouseDown,
          onMouseLeave: this._handleMouseLeave,
          onFocus: this._handleFocus,
          onBlur: this._handleBlur,
          onTouchStart: this._handleTouchStart,
          onTouchMove: this._handleTouchMove,
          onTouchCancel: this._handleTouchCancel,
          onTouchEnd: this._handleTouchEnd,
          ink: ink
        }));
      }
    }]);
    return Ink;
  }(_react.PureComponent), _class.propTypes = {
    /**
     * An optional onMouseUp function to call along with the ink creation onMouseUp.
     */
    onMouseUp: _react.PropTypes.func,

    /**
     * An optional onMouseDown function to call along with the ink creation onMouseDown.
     */
    onMouseDown: _react.PropTypes.func,

    /**
     * An optional onMouseLeave function to call along with the ink creation onMouseLeave.
     */
    onMouseLeave: _react.PropTypes.func,

    /**
     * An optional onFocus function to call along with the ink creation onFocus.
     */
    onFocus: _react.PropTypes.func,

    /**
     * An optional onBlur function to call along with the ink creation onBlur.
     */
    onBlur: _react.PropTypes.func,

    /**
     * An optional onTouchStart function to call along with the ink creation onTouchStart.
     */
    onTouchStart: _react.PropTypes.func,

    /**
     * An optional onTouchMove function to call along with the ink creation onTouchMove.
     */
    onTouchMove: _react.PropTypes.func,

    /**
     * An optional onTouchEnd function to call along with the ink creation onTouchEnd.
     */
    onTouchEnd: _react.PropTypes.func,

    /**
     * An optional onTouchCancel function to call along with the ink creation onTouchCancel.
     */
    onTouchCancel: _react.PropTypes.func,

    /**
     * Boolean if the ink or the composed component is disabled.
     */
    disabled: _react.PropTypes.bool,

    /**
     * Boolean if only the ink is disabled.
     */
    inkDisabled: _react.PropTypes.bool
  }, _temp;
};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _ListItemText = __webpack_require__(78);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A `ListItemControl` component has either a `primaryAction` or a `secondaryAction`.
 * The `primaryAction` can **only** be a `Checkbox`. A `secondaryAction` can either be
 * a `Checkbox`, `Switch`, or a `Reorder` icon.
 */
var ListItemControl = function (_Component) {
  (0, _inherits3.default)(ListItemControl, _Component);

  function ListItemControl() {
    (0, _classCallCheck3.default)(this, ListItemControl);
    return (0, _possibleConstructorReturn3.default)(this, (ListItemControl.__proto__ || Object.getPrototypeOf(ListItemControl)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListItemControl, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var primaryAction = _props.primaryAction;
      var secondaryAction = _props.secondaryAction;
      var primaryText = _props.primaryText;
      var secondaryText = _props.secondaryText;
      var threeLines = _props.threeLines;
      var props = (0, _objectWithoutProperties3.default)(_props, ['primaryAction', 'secondaryAction', 'primaryText', 'secondaryText', 'threeLines']);


      var label = (0, _jsx3.default)(_ListItemText2.default, {
        primaryText: primaryText,
        secondaryText: secondaryText
      });

      var control = _react2.default.cloneElement(primaryAction || secondaryAction, { label: label, labelBefore: !!secondaryAction });
      var className = (0, _classnames2.default)('md-list-item', props.className, {
        'primary-action': !!primaryAction,
        'secondary-action': !!secondaryAction,
        'two-lines': secondaryText && !threeLines,
        'three-lines': threeLines
      });

      return _react2.default.createElement(
        'li',
        (0, _extends3.default)({}, props, { className: className }),
        control
      );
    }
  }]);
  return ListItemControl;
}(_react.Component);

ListItemControl.propTypes = {
  /**
   * An optional className to apply to the list item.
   */
  className: _react.PropTypes.string,

  /**
   * The primary text to display in the item.
   */
  primaryText: _react.PropTypes.string.isRequired,

  /**
   * An optional secondary text to display below the `primaryText`. This can
   * be an additional 1 or 2 lines. The text will automatically be ellipsed
   * if it spans more than one line. If the prop `threeLines` is set to true,
   * then the text will automatically be ellipsed if it spans more than two lines.
   */
  secondaryText: _react.PropTypes.node,

  /**
   * Boolean if the `ListItem` should allow three lines of text including
   * the `primaryText`.
   */
  threeLines: _react.PropTypes.bool,

  /**
   * The primary action element for the `ListItemControl`. This should be a `Checkbox`
   * component.
   *
   * The custom validation will warn you about missing both a `primaryAction` and
   * a `secondaryAction` or if you have both a `primaryAction` and a `secondaryAction`.
   */
  primaryAction: function primaryAction(props, propName, component) {
    for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      others[_key - 3] = arguments[_key];
    }

    var primaryAction = props[propName];
    var secondaryAction = props.secondaryAction;
    if (primaryAction && !secondaryAction) {
      return _react.PropTypes.element.apply(_react.PropTypes, [props, propName, component].concat(others));
    } else if (!primaryAction && !secondaryAction) {
      return new Error('Missing required prop \'primaryAction\' or \'secondaryAction\' for the component \'' + component + '\'.');
    } else if (primaryAction && secondaryAction) {
      return new Error('You can not have a \'primaryAction\' and a \'secondaryAction\' prop for the component \'' + component + '\'.');
    }

    return null;
  },

  /**
   * A secondary action element. This should be either a `Checkbox`, `Switch`, or a
   * `Reorder` icon.
   */
  secondaryAction: _react.PropTypes.element
};
ListItemControl.defaultProps = {
  threeLines: false
};
exports.default = ListItemControl;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Inks = __webpack_require__(25);

var _Inks2 = _interopRequireDefault(_Inks);

var _AccessibleFakeButton = __webpack_require__(57);

var _AccessibleFakeButton2 = _interopRequireDefault(_AccessibleFakeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListTile = function (_PureComponent) {
  (0, _inherits3.default)(ListTile, _PureComponent);

  function ListTile() {
    (0, _classCallCheck3.default)(this, ListTile);
    return (0, _possibleConstructorReturn3.default)(this, (ListTile.__proto__ || Object.getPrototypeOf(ListTile)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListTile, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var ink = _props.ink;
      var children = _props.children;
      var className = _props.className;
      var props = (0, _objectWithoutProperties3.default)(_props, ['ink', 'children', 'className']);

      return _react2.default.createElement(
        _AccessibleFakeButton2.default,
        (0, _extends3.default)({}, props, { className: (0, _classnames2.default)('md-list-tile', className) }),
        ink,
        children
      );
    }
  }]);
  return ListTile;
}(_react.PureComponent);

ListTile.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  tabIndex: _react.PropTypes.number,

  // Injected from injectInk
  ink: _react.PropTypes.node
};
ListTile.defaultProps = {
  tabIndex: 0
};
exports.default = (0, _Inks2.default)(ListTile);

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsCssTransitionGroup = __webpack_require__(23);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Lists = __webpack_require__(79);

var _utils = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Menu component is a controlled component. It requires a boolean `isOpen`
 * to determinte its state.
 *
 * Menus allow users to take an action by selecting from a list of choices revealed
 * upon opening a temporary, new sheet of material.
 */
var Menu = function (_PureComponent) {
  (0, _inherits3.default)(Menu, _PureComponent);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.closeOnOutsideClick = function (e) {
      return (0, _utils.onOutsideClick)(e, _reactDom2.default.findDOMNode(_this.refs.container), _this.props.close);
    }, _this.handleListClick = function (e) {
      var node = e.target;
      while (node) {
        if (node.classList.contains('md-list-item')) {
          _this.props.close();
          return;
        }

        node = node.parentNode;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var isOpen = _props.isOpen;
      var autoclose = _props.autoclose;
      var close = _props.close;

      if (isOpen && autoclose && close) {
        window.addEventListener('click', this.closeOnOutsideClick);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props;
      var isOpen = _props2.isOpen;
      var autoclose = _props2.autoclose;
      var close = _props2.close;

      if (!close || !autoclose || isOpen === prevProps.isOpen) {
        return;
      }
      if (isOpen) {
        window.addEventListener('click', this.closeOnOutsideClick);
      } else {
        window.removeEventListener('click', this.closeOnOutsideClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.closeOnOutsideClick);
    }

    /**
     * Checks if a list item was the target of a click event. Closes the menu if it was.
     *
     * There is only a single event listener to help with giant lists always rerendering since the
     * onClick functions were not equal with autobinding.
     *
     * @param {Object} e the click event.
     */

  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var className = _props3.className;
      var listClassName = _props3.listClassName;
      var listStyle = _props3.listStyle;
      var children = _props3.children;
      var toggle = _props3.toggle;
      var isOpen = _props3.isOpen;
      var close = _props3.close;
      var autoclose = _props3.autoclose;
      var cascading = _props3.cascading;
      var expanderIconChildren = _props3.expanderIconChildren;
      var expanderIconClassName = _props3.expanderIconClassName;
      var fullWidth = _props3.fullWidth;
      var limitHeight = _props3.limitHeight;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'listClassName', 'listStyle', 'children', 'toggle', 'isOpen', 'close', 'autoclose', 'cascading', 'expanderIconChildren', 'expanderIconClassName', 'fullWidth', 'limitHeight']);


      var menuItems = void 0;
      if (isOpen) {
        var listProps = {
          ref: 'list',
          className: (0, _classnames2.default)('md-menu', listClassName, 'md-transition-tr', {
            cascading: cascading,
            'limit-height': limitHeight
          }),
          style: listStyle
        };

        if (autoclose && close) {
          listProps.onClick = this.handleListClick;
        }

        var items = _react2.default.Children.map(children, function (child, key) {
          if (!child) {
            return child;
          }

          return _react2.default.cloneElement(child, {
            key: child.key || key
          });
        });

        menuItems = _react2.default.createElement(
          _Lists.List,
          listProps,
          items
        );
      }
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        (0, _extends3.default)({
          ref: 'container',
          component: 'div',
          transitionName: 'md-menu',
          transitionEnterTimeout: 300,
          transitionLeaveTimeout: 300,
          className: (0, _classnames2.default)('md-menu-container', className, { 'full-width': fullWidth })
        }, props),
        toggle,
        menuItems
      );
    }
  }]);
  return Menu;
}(_react.PureComponent);

Menu.propTypes = {
  /**
   * The optional className for the menu container.
   */
  className: _react.PropTypes.string,

  /**
   * The optional style to apply to the menu container.
   */
  style: _react.PropTypes.object,

  /**
   * The optional className to apply to the opened menu List.
   */
  listClassName: _react.PropTypes.string,

  /**
   * The optional style to apply to the opened menu List.
   */
  listStyle: _react.PropTypes.object,

  /**
   * An array of `ListItem`, `ListItemControl`, `Divider`, `Subheader`, or react element
   * to display when the menu is open.
   */
  children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.arrayOf(_react.PropTypes.element)]),

  /**
   * The component to use that will toggle the `isOpen` prop. This will make
   * the menu relative to this component. An example would be using an `IconButton`,
   * or another button as a toggle.
   */
  toggle: _react.PropTypes.node,

  /**
   * Boolean if the menu is currently open.
   */
  isOpen: _react.PropTypes.bool.isRequired,

  /**
   * An optional function that will force the menu to close. This is used so that the
   * menu will be closed when an element outside the menu is clicked.
   */
  close: _react.PropTypes.func,

  /**
   * Boolean if the menu should autoclose when one of the items are clicked.
   * This will only work if the `close` function is given as well.
   */
  autoclose: _react.PropTypes.bool,

  /**
   * Boolean if there are any nested items in the menu items. This will apply additional
   * styling and position for the nested items.
   */
  cascading: _react.PropTypes.bool,

  /**
   * Any children needed to display the expander icon for nested `ListItem`.
   */
  expanderIconChildren: _react.PropTypes.node,

  /**
   * The icon className to use for the expander icon.
   */
  expanderIconClassName: _react.PropTypes.string,

  /**
   * Boolean if the height of the open menu should be limited to the `$md-dropdown-max-height`
   * and enable scrolling in the menu.
   */
  limitHeight: _react.PropTypes.bool,

  /**
   * Boolean if the menu should span the full width.
   */
  fullWidth: _react.PropTypes.bool
};
Menu.defaultProps = {
  autoclose: true,
  expanderIconChildren: 'keyboard_arrow_right',
  expanderIconClassName: 'material-icons'
};
exports.default = Menu;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Dividers = __webpack_require__(38);

var _Dividers2 = _interopRequireDefault(_Dividers);

var _List = __webpack_require__(59);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(60);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Subheaders = __webpack_require__(84);

var _Subheaders2 = _interopRequireDefault(_Subheaders);

var _DrawerHeader = __webpack_require__(150);

var _DrawerHeader2 = _interopRequireDefault(_DrawerHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `Drawer` component is another version of the `Sidebar` component
 * that is built into the `NavigationDrawer` component.
 */
var Drawer = function (_PureComponent) {
  (0, _inherits3.default)(Drawer, _PureComponent);

  function Drawer(props) {
    (0, _classCallCheck3.default)(this, Drawer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _this._mapItemsToComponents = _this._mapItemsToComponents.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Drawer, [{
    key: '_mapItemsToComponents',
    value: function _mapItemsToComponents(item, key) {
      if ((0, _react.isValidElement)(item)) {
        return item;
      }

      var _props = this.props;
      var mini = _props.mini;
      var isOpen = _props.isOpen;
      var divider = item.divider;
      var subheader = item.subheader;
      var nestedItems = item.nestedItems;
      var remainingProps = (0, _objectWithoutProperties3.default)(item, ['divider', 'subheader', 'nestedItems']);

      var component = void 0;
      if (divider) {
        component = _Dividers2.default;
      } else if (subheader) {
        component = _Subheaders2.default;
      } else {
        component = _ListItem2.default;
      }

      var props = Object.assign({}, remainingProps, {
        key: item.key || key
      });

      if (nestedItems && (!mini || isOpen)) {
        props.nestedItems = nestedItems.map(this._mapItemsToComponents);
      }

      return (0, _react.createElement)(component, props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var style = _props2.style;
      var className = _props2.className;
      var title = _props2.title;
      var closeDrawer = _props2.closeDrawer;
      var closeIconChildren = _props2.closeIconChildren;
      var closeIconClassName = _props2.closeIconClassName;
      var navItems = _props2.navItems;
      var persistent = _props2.persistent;
      var temporary = _props2.temporary;
      var drawerType = _props2.drawerType;
      var mini = _props2.mini;
      var isOpen = _props2.isOpen;
      var children = _props2.children;
      var autoclose = _props2.autoclose;
      var mobile = _props2.mobile;
      var drawerHeaderFixed = _props2.drawerHeaderFixed;


      var items = navItems.map(this._mapItemsToComponents);
      var header = void 0;
      if (!mini || mini && isOpen) {
        header = (0, _jsx3.default)(_DrawerHeader2.default, {
          title: title,
          closeDrawer: closeDrawer,
          closeIconChildren: closeIconChildren,
          closeIconClassName: closeIconClassName,
          persistent: persistent,
          temporary: temporary,
          children: children
        }, header);
      }

      return (0, _jsx3.default)('nav', {
        style: style,
        className: (0, _classnames2.default)('md-navigation-drawer', className, drawerType, {
          mobile: mobile,
          'active': mini && isOpen,
          'mobile-inactive': mobile && !isOpen,
          'mobile-active': mobile && isOpen
        })
      }, void 0, header, (0, _jsx3.default)(_List2.default, {
        onClick: autoclose && temporary ? closeDrawer : null,
        className: (0, _classnames2.default)({ 'md-drawer-scrolling-list': drawerHeaderFixed })
      }, 'nav-items', items));
    }
  }]);
  return Drawer;
}(_react.PureComponent);

Drawer.propTypes = {
  /**
   * An optional style to apply to the drawer.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply to the drawer.
   */
  className: _react.PropTypes.string,

  /**
   * Any additional children to display in the drawer's header.
   */
  children: _react.PropTypes.node,

  /**
   * Any children used to render the close button for a persistent Drawer.
   */
  closeIconChildren: _react.PropTypes.node,

  /**
   * The icon className to render the close button for a persistent Drawer.
   */
  closeIconClassName: _react.PropTypes.string,

  /**
   * An optional title to display in the header.
   */
  title: _react.PropTypes.string,

  /**
   * Boolean if the `closeDrawer` function should be called automatically when
   * a nav item is clicked.
   */
  autoclose: _react.PropTypes.bool.isRequired,

  /**
   * A function to close the drawer for persistent and temporary drawers.
   */
  closeDrawer: _react.PropTypes.func.isRequired,

  /**
   * Boolean if the drawer is temporary.
   */
  temporary: _react.PropTypes.bool.isRequired,

  /**
   * Boolean if the drawer is persistent.
   */
  persistent: _react.PropTypes.bool.isRequired,

  /**
   * Boolean if the drawer is the mini variant.
   */
  mini: _react.PropTypes.bool.isRequired,

  /**
   * The current drawer type for the media size.
   */
  drawerType: _react.PropTypes.string.isRequired,

  /**
   * Boolean if the drawer is currently open.
   */
  isOpen: _react.PropTypes.bool.isRequired,

  /**
   * Boolean if this is a drawer on a mobile device.
   */
  mobile: _react.PropTypes.bool,

  /**
   * The nav items to display in the drawer.
   *
   * @see NavigationDrawer for more info
   */
  navItems: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.shape({
    /**
     * Boolean if this item should be rendered as a divider.
     */
    divider: _react.PropTypes.bool,

    /**
     * Boolean if this item should be rendered as a subheader.
     */
    subheader: _react.PropTypes.bool,

    /**
     * An optional component to render the `ListItem` as.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),

    /**
     * The main text to be displayed in a `Subheader` or a `ListItem`.
     */
    primaryText: _react.PropTypes.string
  })])).isRequired,

  /**
   * Boolean if the drawer header should be fixed to the top of the
   * sliding drawer. This will add the `className` `md-drawer-scrolling-list`
   * the list surrounding the `navItems`. The `md-drawer-scrolling-list`
   * `className` adjusts the max-height for the list content for the different
   * device sizes.
   */
  drawerHeaderFixed: _react.PropTypes.bool
};
exports.default = Drawer;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Buttons = __webpack_require__(10);

var _Dividers = __webpack_require__(38);

var _Dividers2 = _interopRequireDefault(_Dividers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `DrawerHeader` component is used to create a simple header for the sidebar
 * in the Navigation Drawer. It consists of an optional title, any children, and
 * a close icon for persistent Navigation Drawers.
 */
var _ref = (0, _jsx3.default)(_Dividers2.default, {}, 'divider');

var DrawerHeader = function (_PureComponent) {
  (0, _inherits3.default)(DrawerHeader, _PureComponent);

  function DrawerHeader() {
    (0, _classCallCheck3.default)(this, DrawerHeader);
    return (0, _possibleConstructorReturn3.default)(this, (DrawerHeader.__proto__ || Object.getPrototypeOf(DrawerHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(DrawerHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var title = _props.title;
      var children = _props.children;
      var closeDrawer = _props.closeDrawer;
      var closeIconChildren = _props.closeIconChildren;
      var closeIconClassName = _props.closeIconClassName;
      var persistent = _props.persistent;
      var temporary = _props.temporary;


      var headerTitle = void 0;
      if (title) {
        headerTitle = (0, _jsx3.default)('h3', {
          className: 'md-title'
        }, 'title', title);
      }

      var closeBtn = void 0;
      if (persistent || temporary) {
        closeBtn = (0, _jsx3.default)(_Buttons.IconButton, {
          className: 'md-drawer-toggle',
          onClick: closeDrawer,
          children: closeIconChildren,
          iconClassName: closeIconClassName
        }, 'close-btn');
      }

      if (!persistent && !title && !children) {
        return null;
      }

      return (0, _jsx3.default)('header', {
        className: (0, _classnames2.default)('md-drawer-header', className)
      }, void 0, headerTitle, children, closeBtn, _ref);
    }
  }]);
  return DrawerHeader;
}(_react.PureComponent);

DrawerHeader.propTypes = {
  /**
   * A className to apply.
   */
  className: _react.PropTypes.string,

  /**
   * Any additional children to display after the close icon button (for persistent drawers)
   * and the optional title.
   */
  children: _react.PropTypes.node,

  /**
   * An optional title.
   */
  title: _react.PropTypes.string,

  /**
   * A function that will close the drawer.
   */
  closeDrawer: _react.PropTypes.func.isRequired,

  /**
   * Any children to render the close icon button.
   */
  closeIconChildren: _react.PropTypes.node,

  /**
   * The icon className to use to render the close icon button.
   */
  closeIconClassName: _react.PropTypes.string,

  /**
   * Boolean if the drawer is persistent.
   */
  persistent: _react.PropTypes.bool.isRequired,

  /**
   * Boolean if the drawer is temporary.
   */
  temporary: _react.PropTypes.bool.isRequired
};
exports.default = DrawerHeader;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Buttons = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `DrawerToolbar` component is the Toolbar that gets rendered to the right
 * of the sliding drawer and above the main content.
 */
var DrawerToolbar = function (_PureComponent) {
  (0, _inherits3.default)(DrawerToolbar, _PureComponent);

  function DrawerToolbar() {
    (0, _classCallCheck3.default)(this, DrawerToolbar);
    return (0, _possibleConstructorReturn3.default)(this, (DrawerToolbar.__proto__ || Object.getPrototypeOf(DrawerToolbar)).apply(this, arguments));
  }

  (0, _createClass3.default)(DrawerToolbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var className = _props.className;
      var drawerType = _props.drawerType;
      var isOpen = _props.isOpen;
      var openDrawer = _props.openDrawer;
      var persistent = _props.persistent;
      var temporary = _props.temporary;
      var menuIconChildren = _props.menuIconChildren;
      var menuIconClassName = _props.menuIconClassName;
      var title = _props.title;
      var children = _props.children;


      var menuBtn = void 0;
      if (temporary || !isOpen && persistent) {
        menuBtn = (0, _jsx3.default)(_Buttons.IconButton, {
          onClick: openDrawer,
          children: menuIconChildren,
          iconClassName: menuIconClassName
        }, 'menu-btn');
      }

      var toolbarTitle = void 0;
      if (title) {
        toolbarTitle = (0, _jsx3.default)('h3', {
          className: 'md-title'
        }, 'title', title);
      }

      return (0, _jsx3.default)('header', {
        style: style,
        className: (0, _classnames2.default)('md-navigation-drawer-toolbar', className, drawerType, {
          'active': isOpen && !temporary
        })
      }, void 0, menuBtn, toolbarTitle, children);
    }
  }]);
  return DrawerToolbar;
}(_react.PureComponent);

DrawerToolbar.propTypes = {
  /**
   * An optional style to apply.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply.
   */
  className: _react.PropTypes.string,

  /**
   * The current drawer type.
   */
  drawerType: _react.PropTypes.string.isRequired,

  /**
   * Any additional children to display after the menu button (if temporary or persistent)
   * and the optional title.
   */
  children: _react.PropTypes.node,

  /**
   * Boolean if the sliding drawer is currently open.
   */
  isOpen: _react.PropTypes.bool.isRequired,

  /**
   * Boolean if the sliding drawer is temporary.
   */
  temporary: _react.PropTypes.bool.isRequired,

  /**
   * Boolean if the sliding drawer is persistent.
   */
  persistent: _react.PropTypes.bool.isRequired,

  /**
   * A function that will open the sliding drawer. This will be
   * added to the menu button on temporary and persistent drawers.
   */
  openDrawer: _react.PropTypes.func.isRequired,

  /**
   * Any children to render the menu icon button.
   */
  menuIconChildren: _react.PropTypes.node,

  /**
   * The icon className to use to render the menu icon button.
   */
  menuIconClassName: _react.PropTypes.string,

  /**
   * An optional title to display
   */
  title: _react.PropTypes.string
};
exports.default = DrawerToolbar;

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

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(23);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Overlay = __webpack_require__(86);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Drawer = __webpack_require__(149);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _DrawerToolbar = __webpack_require__(151);

var _DrawerToolbar2 = _interopRequireDefault(_DrawerToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrawerType = {
  FULL_HEIGHT: 'full-height',
  CLIPPED: 'clipped',
  FLOATING: 'floating',
  PERSISTENT: 'persistent',
  PERSISTENT_MINI: 'mini',
  TEMPORARY: 'temporary',
  // want styles of temporary and mini. Little hacky.
  TEMPORARY_MINI: 'temporary mini'
};
/**
 * Navigation Drawers are an excellent component to use to set up the initial
 * layout of your application. This component combines a Drawer
 * (a sidebar of nav items), an app bar, and displays any additional content.
 *
 * The `NavigationDrawer` component is customizable to have different
 * display states for mobile, tablet, and desktop displays.
 */

var NavigationDrawer = function (_PureComponent) {
  (0, _inherits3.default)(NavigationDrawer, _PureComponent);

  function NavigationDrawer(props) {
    (0, _classCallCheck3.default)(this, NavigationDrawer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NavigationDrawer.__proto__ || Object.getPrototypeOf(NavigationDrawer)).call(this, props));

    var initiallyOpen = props.initiallyOpen;
    var initialDrawerType = props.initialDrawerType;


    _this.state = {
      isOpen: typeof initiallyOpen !== 'undefined' ? initiallyOpen : initialDrawerType !== 'mobile',
      mobile: initialDrawerType === 'mobile',
      tablet: initialDrawerType === 'tablet',
      desktop: initialDrawerType === 'desktop',
      drawerType: props[initialDrawerType + 'DrawerType']
    };

    _this._openDrawer = _this._openDrawer.bind(_this);
    _this._closeDrawer = _this._closeDrawer.bind(_this);
    _this._updateMedia = _this._updateMedia.bind(_this);
    _this._updateDrawerType = _this._updateDrawerType.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NavigationDrawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this._updateMedia);
      this._updateMedia();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props;
      var mobileMinWidth = _props.mobileMinWidth;
      var mobileDrawerType = _props.mobileDrawerType;
      var tabletMinWidth = _props.tabletMinWidth;
      var tabletDrawerType = _props.tabletDrawerType;
      var desktopMinWidth = _props.desktopMinWidth;
      var desktopDrawerType = _props.desktopDrawerType;


      if (nextProps.mobileMinWidth !== mobileMinWidth || nextProps.mobileDrawerType !== mobileDrawerType || nextProps.tabletMinWidth !== tabletMinWidth || nextProps.tabletDrawerType !== tabletDrawerType || nextProps.desktopMinWidth !== desktopMinWidth || nextProps.desktopDrawerType !== desktopDrawerType) {
        this._updateDrawerType(nextProps);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.state.isOpen !== nextState.isOpen && nextProps.onDrawerChange) {
        nextProps.onDrawerChange(nextState.isOpen);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._updateMedia);
    }
  }, {
    key: '_matches',
    value: function _matches(min, max, orientation) {
      var media = 'only screen';
      if (orientation) {
        media += ' and (orientation: ' + orientation + ')';
      }

      media += ' and (min-width: ' + min + 'px)';

      if (max) {
        media += ' and (max-width: ' + max + 'px)';
      }

      return window.matchMedia(media).matches;
    }
  }, {
    key: '_isFullHeight',
    value: function _isFullHeight(drawerType) {
      var FULL_HEIGHT = DrawerType.FULL_HEIGHT;
      var CLIPPED = DrawerType.CLIPPED;
      var FLOATING = DrawerType.FLOATING;

      return [FULL_HEIGHT, CLIPPED, FLOATING].indexOf(drawerType) !== -1;
    }
  }, {
    key: '_isPersistent',
    value: function _isPersistent(drawerType) {
      var PERSISTENT = DrawerType.PERSISTENT;
      var PERSISTENT_MINI = DrawerType.PERSISTENT_MINI;

      return [PERSISTENT, PERSISTENT_MINI].indexOf(drawerType) !== -1;
    }
  }, {
    key: '_isTemporary',
    value: function _isTemporary(drawerType) {
      var TEMPORARY = DrawerType.TEMPORARY;
      var TEMPORARY_MINI = DrawerType.TEMPORARY_MINI;

      return [TEMPORARY, TEMPORARY_MINI].indexOf(drawerType) !== -1;
    }
  }, {
    key: '_isMini',
    value: function _isMini(drawerType) {
      var PERSISTENT_MINI = DrawerType.PERSISTENT_MINI;
      var TEMPORARY_MINI = DrawerType.TEMPORARY_MINI;

      return [PERSISTENT_MINI, TEMPORARY_MINI].indexOf(drawerType) !== -1;
    }
  }, {
    key: '_updateDrawerType',
    value: function _updateDrawerType(props) {
      var mobileMinWidth = props.mobileMinWidth;
      var mobileDrawerType = props.mobileDrawerType;
      var tabletMinWidth = props.tabletMinWidth;
      var tabletDrawerType = props.tabletDrawerType;
      var desktopMinWidth = props.desktopMinWidth;
      var desktopDrawerType = props.desktopDrawerType;


      var nextState = {
        mobile: this._matches(mobileMinWidth, desktopMinWidth - 1),
        tablet: this._matches(tabletMinWidth, desktopMinWidth - 1, 'landscape'),
        desktop: this._matches(desktopMinWidth)
      };

      if (nextState.tablet) {
        nextState.drawerType = tabletDrawerType;
      } else if (nextState.mobile) {
        nextState.drawerType = mobileDrawerType;
      } else {
        nextState.drawerType = desktopDrawerType;
      }

      if (this._isFullHeight(nextState.drawerType) !== this._isFullHeight(this.state.drawerType)) {
        nextState.isOpen = this._isFullHeight(nextState.drawerType);
      }

      this.setState(nextState);
    }
  }, {
    key: '_updateMedia',
    value: function _updateMedia() {
      this._updateDrawerType(this.props);
    }
  }, {
    key: '_openDrawer',
    value: function _openDrawer() {
      this.setState({ isOpen: true });
    }
  }, {
    key: '_closeDrawer',
    value: function _closeDrawer() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var style = _props2.style;
      var className = _props2.className;
      var drawerStyle = _props2.drawerStyle;
      var drawerClassName = _props2.drawerClassName;
      var contentStyle = _props2.contentStyle;
      var contentClassName = _props2.contentClassName;
      var toolbarStyle = _props2.toolbarStyle;
      var toolbarClassName = _props2.toolbarClassName;
      var drawerTitle = _props2.drawerTitle;
      var drawerHeaderFixed = _props2.drawerHeaderFixed;
      var drawerChildren = _props2.drawerChildren;
      var menuIconChildren = _props2.menuIconChildren;
      var menuIconClassName = _props2.menuIconClassName;
      var closeIconChildren = _props2.closeIconChildren;
      var closeIconClassName = _props2.closeIconClassName;
      var toolbarTitle = _props2.toolbarTitle;
      var toolbarChildren = _props2.toolbarChildren;
      var autoclose = _props2.autoclose;
      var navItems = _props2.navItems;
      var children = _props2.children;
      var transitionName = _props2.transitionName;
      var transitionEnterTimeout = _props2.transitionEnterTimeout;
      var transitionLeaveTimeout = _props2.transitionLeaveTimeout;
      var contentTransitionName = _props2.contentTransitionName;
      var contentTransitionEnterTimeout = _props2.contentTransitionEnterTimeout;
      var contentTransitionLeaveTimeout = _props2.contentTransitionLeaveTimeout;
      var _state = this.state;
      var isOpen = _state.isOpen;
      var drawerType = _state.drawerType;
      var mobile = _state.mobile;

      var persistent = this._isPersistent(drawerType);
      var temporary = this._isTemporary(drawerType);
      var mini = this._isMini(drawerType);

      var drawer = void 0;
      if (isOpen || mini || mobile) {
        drawer = (0, _jsx3.default)(_Drawer2.default, {
          style: drawerStyle,
          className: drawerClassName,
          drawerHeaderFixed: drawerHeaderFixed,
          autoclose: autoclose,
          title: drawerTitle,
          closeDrawer: this._closeDrawer,
          closeIconChildren: closeIconChildren,
          closeIconClassName: closeIconClassName,
          temporary: temporary,
          persistent: persistent,
          navItems: navItems,
          drawerType: drawerType,
          children: drawerChildren,
          mini: mini,
          isOpen: isOpen,
          mobile: mobile
        }, 'drawer');
      }

      var overlay = void 0;
      if (temporary) {
        overlay = (0, _jsx3.default)(_Overlay2.default, {
          isOpen: isOpen,
          onClick: this._closeDrawer
        });
      }

      return (0, _jsx3.default)(_reactAddonsCssTransitionGroup2.default, {
        style: style,
        className: (0, _classnames2.default)('md-navigation-drawer-container', className),
        component: 'div',
        transitionName: transitionName,
        transitionEnterTimeout: transitionEnterTimeout,
        transitionLeaveTimeout: transitionLeaveTimeout
      }, void 0, drawer, (0, _jsx3.default)(_reactAddonsCssTransitionGroup2.default, {
        style: contentStyle,
        className: (0, _classnames2.default)('md-navigation-drawer-content', contentClassName, drawerType, {
          'active': isOpen && !temporary
        }),
        component: 'div',
        transitionName: contentTransitionName,
        transitionEnter: !!contentTransitionEnterTimeout,
        transitionEnterTimeout: contentTransitionEnterTimeout,
        transitionLeave: !!contentTransitionLeaveTimeout,
        transitionLeaveTimeout: contentTransitionLeaveTimeout
      }, void 0, (0, _jsx3.default)(_DrawerToolbar2.default, {
        isOpen: isOpen,
        drawerType: drawerType,
        style: toolbarStyle,
        className: toolbarClassName,
        temporary: temporary,
        persistent: persistent,
        openDrawer: this._openDrawer,
        menuIconChildren: menuIconChildren,
        menuIconClassName: menuIconClassName,
        title: toolbarTitle,
        children: toolbarChildren
      }), children, overlay));
    }
  }]);
  return NavigationDrawer;
}(_react.PureComponent);

NavigationDrawer.propTypes = {
  /**
   * An optional style to apply to the entire container.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply to the entire container.
   */
  className: _react.PropTypes.string,

  /**
   * An optional style to apply to the drawer.
   */
  drawerStyle: _react.PropTypes.object,

  /**
   * An optional className to apply to the drawer.
   */
  drawerClassName: _react.PropTypes.string,

  /**
   * An optional style to apply to the main content.
   */
  contentStyle: _react.PropTypes.object,

  /**
   * An optional className to apply to the main content.
   */
  contentClassName: _react.PropTypes.string,

  /**
   * An optional style to apply to the main toolbar.
   */
  toolbarStyle: _react.PropTypes.object,

  /**
   * An optional className to applt to the main toolbar.
   */
  toolbarClassName: _react.PropTypes.string,

  /**
   * An optional title to display in the navigation drawer header.
   */
  drawerTitle: _react.PropTypes.string,

  /**
   * Any additional children you want to display in the navigation drawer header after
   * the optional title.
   */
  drawerChildren: _react.PropTypes.node,

  /**
   * Boolean if the drawer header should be fixed to the top of the
   * sliding drawer. This will add the `className` `md-drawer-scrolling-list`
   * the list surrounding the `navItems`. The `md-drawer-scrolling-list`
   * `className` adjusts the max-height for the list content for the different
   * device sizes.
   */
  drawerHeaderFixed: _react.PropTypes.bool,

  /**
   * An optional title to display in the toolbar.
   */
  toolbarTitle: _react.PropTypes.string,

  /**
   * Any additional children you want to display in the main toolbar after the menu
   * button (for persistent drawers) and the optional title.
   */
  toolbarChildren: _react.PropTypes.node,

  /**
   * The main content to display.
   */
  children: _react.PropTypes.node,

  /**
   * An optional boolean if the drawer is open for persistent or temporary
   * drawers.
   */
  initiallyOpen: _react.PropTypes.bool,

  /**
   * The initial drawer type to render. This is used for Server Side Rendering.
   */
  initialDrawerType: _react.PropTypes.oneOf(['mobile', 'tablet', 'desktop']).isRequired,

  /**
   * The `DrawerType` to use for mobile devices. If the `mobileMinWidth` prop
   * matches or the `tabletMinWidth` prop matches and the orientation is portrait,
   * this drawer type will be used.
   */
  mobileDrawerType: _react.PropTypes.oneOf([DrawerType.TEMPORARY, DrawerType.TEMPORARY_MINI]).isRequired,

  /**
   * The `DrawerType` to use for landscape oriented tablets. If the
   * `tabletMinWidth` prop matches and the orientation is landscape, this drawer
   * type will be used.
   */
  tabletDrawerType: _react.PropTypes.oneOf([DrawerType.FULL_HEIGHT, DrawerType.CLIPPED, DrawerType.FLOATING, DrawerType.PERSISTENT, DrawerType.PERSISTENT_MINI, DrawerType.TEMPORARY, DrawerType.TEMPORARY_MINI]).isRequired,

  /**
   * The `DrawerType` to use for desktop displays. If the `desktopMinWidth`
   * prop matches, this drawer type will be used.
   */
  desktopDrawerType: _react.PropTypes.oneOf([DrawerType.FULL_HEIGHT, DrawerType.CLIPPED, DrawerType.FLOATING, DrawerType.PERSISTENT, DrawerType.PERSISTENT_MINI, DrawerType.TEMPORARY, DrawerType.TEMPORARY_MINI]).isRequired,

  /**
   * The min width to use for a mobile media query.
   */
  mobileMinWidth: _react.PropTypes.number.isRequired,

  /**
   * The min width to use for a tablet media query.
   */
  tabletMinWidth: _react.PropTypes.number.isRequired,

  /**
   * The min width to use for a desktop media query.
   */
  desktopMinWidth: _react.PropTypes.number.isRequired,

  /**
   * The icon className to use for the main menu icon.
   */
  menuIconClassName: _react.PropTypes.string,

  /**
   * Any children required to render the main menu icon.
   */
  menuIconChildren: _react.PropTypes.node,

  /**
   * The icon className to use for closing a persistent navigation drawer.
   */
  closeIconClassName: _react.PropTypes.string,

  /**
   * Any children required to render the close icon for a persistent navigation drawer.
   */
  closeIconChildren: _react.PropTypes.node,

  /**
   * Boolean if the sliding drawer should automatically close when a nav item
   * is clicked for a temporary or temporary mini drawer.
   */
  autoclose: _react.PropTypes.bool.isRequired,

  /**
   * An optional function to call when the sliding drawer's open state changes.
   * This can happen from rotating a tablet, resizing the browser window,
   * or toggling the drawer for persistent and temporary versions. The
   * `onDrawerChange` prop will be given the new open state.
   *
   * `onDrawerChange(isOpen)`
   */
  onDrawerChange: _react.PropTypes.func,

  /**
   * A list of items to render in the navigation drawer. If an item
   * is a prop object, all props will be passed to either a `ListItem`,
   * `Divider`, or `Subheader` component.
   *
   * ##### Additional Info
   */
  navItems: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([
  /**
   * Any react component you want to render instead of using props
   * to generate a component.
   */
  _react.PropTypes.element,

  /**
   * An object of props to use that will generate either a `ListItem`, `Divider`,
   * or a `Subheader` component. Any props not listed will be passed
   * to the component.
   */
  _react.PropTypes.shape({
    /**
     * Boolean if this item should be rendered as a divider.
     */
    divider: _react.PropTypes.bool,

    /**
     * Boolean if this item should be rendered as a subheader.
     */
    subheader: _react.PropTypes.bool,

    /**
     * An optional component to render the `ListItem` as.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),

    /**
     * The main text to be displayed in a `Subheader` or a `ListItem`.
     */
    primaryText: _react.PropTypes.string
  })])).isRequired,

  /**
   * The transition name to use for the drawer sliding in and out of view.
   */
  transitionName: _react.PropTypes.string.isRequired,

  /**
   * The transition enter duration for the drawer sliding in to view.
   */
  transitionEnterTimeout: _react.PropTypes.number.isRequired,

  /**
   * The transition leave duration for the drawer sliding out of view.
   */
  transitionLeaveTimeout: _react.PropTypes.number.isRequired,

  /**
   * An optional transition to use when the content changes. To disable this transition,
   * set the enter and leave timeouts to `0`, `null`, or `undefined`. Make sure your
   * child has a new key as well.
   */
  contentTransitionName: _react.PropTypes.string.isRequired,

  /**
   * The transition enter timeout for when the main content changes. Settings this value
   * to `0`, `null`, or `undefined` will disable the enter transition.
   */
  contentTransitionEnterTimeout: _react.PropTypes.number,

  /**
   * The transition leave timeout for when the main content changes. Settings this value
   * to `0`, `null`, or `undefined` will disable the leave transition.
   */
  contentTransitionLeaveTimeout: _react.PropTypes.number
};
NavigationDrawer.defaultProps = {
  initialDrawerType: 'desktop',
  mobileDrawerType: DrawerType.TEMPORARY,
  tabletDrawerType: DrawerType.PERSISTENT,
  desktopDrawerType: DrawerType.FULL_HEIGHT,
  mobileMinWidth: 320,
  tabletMinWidth: 768,
  desktopMinWidth: 1025,
  menuIconChildren: 'menu',
  autoclose: true,
  closeIconChildren: 'keyboard_arrow_left',
  transitionName: 'drawer',
  transitionEnterTimeout: 300,
  transitionLeaveTimeout: 300,
  contentTransitionName: 'cross-fade',
  contentTransitionEnterTimeout: 300
};
exports.default = NavigationDrawer;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NavigationDrawer = __webpack_require__(152);

var _NavigationDrawer2 = _interopRequireDefault(_NavigationDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _NavigationDrawer2.default;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _NumberUtils = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `Paper` component is a simple wrappper that adds box-shadow.
 *
 * You can use the sass mixin instead to get the same functionality
 * without an additional div.
 *
 * ```scss
 * @include md-box-shadow(5);
 * ```
 */
var Paper = function (_PureComponent) {
  (0, _inherits3.default)(Paper, _PureComponent);

  function Paper() {
    (0, _classCallCheck3.default)(this, Paper);
    return (0, _possibleConstructorReturn3.default)(this, (Paper.__proto__ || Object.getPrototypeOf(Paper)).apply(this, arguments));
  }

  (0, _createClass3.default)(Paper, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var zDepth = _props.zDepth;
      var props = (0, _objectWithoutProperties3.default)(_props, ['children', 'zDepth']);

      var className = (0, _classnames2.default)('paper-' + zDepth, props.className);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, props, { className: className }),
        children
      );
    }
  }]);
  return Paper;
}(_react.PureComponent);

Paper.propTypes = {
  /**
   * An optional className to apply.
   */
  className: _react.PropTypes.string,

  /**
   * The depth of the paper. This should be a number between 0 - 5. If
   * the depth is 0, it will raise to a depth of 3 on hover.
   */
  zDepth: function zDepth(props, propName, component) {
    for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      others[_key - 3] = arguments[_key];
    }

    var _PropTypes$number;

    var err = (_PropTypes$number = _react.PropTypes.number).isRequired.apply(_PropTypes$number, [props, propName, component].concat(others));
    if (err) {
      return err;
    }

    if (!(0, _NumberUtils.isBetween)(props[propName], 0, 5)) {
      return new Error('The zDepth of \'Paper\' must be a number between 0 and 5 but \'' + props[propName] + '\' was given.');
    }

    return null;
  },

  /**
   * Any children to display in the paper.
   */
  children: _react.PropTypes.node
};
Paper.defaultProps = {
  zDepth: 1
};
exports.default = Paper;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _NumberUtils = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROATE_DISTANCE = 360 * 1.75;
var BASE_SIZE = 24; // font-icon font size

/**
 * The `CircularProgress` component is used to give visual feedback while your app
 * is loading.
 *
 * There are two different types of circular progress bars: `Determinate` and `Indeterminate`.
 *
 * A `Determinate` circular progress bar should be used when you want to keep track of the current
 * progress. An example would be downloading a file.
 *
 * An `Indeterminate` circular progress bar should be used when you can not keep track of the progress
 * yourself. An example would be waiting for some API call to complete.
 */

var CircularProgress = function (_PureComponent) {
  (0, _inherits3.default)(CircularProgress, _PureComponent);

  function CircularProgress() {
    (0, _classCallCheck3.default)(this, CircularProgress);
    return (0, _possibleConstructorReturn3.default)(this, (CircularProgress.__proto__ || Object.getPrototypeOf(CircularProgress)).apply(this, arguments));
  }

  (0, _createClass3.default)(CircularProgress, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var scale = _props.scale;
      var style = _props.style;
      var className = _props.className;
      var value = _props.value;
      var determinateDashoffset = _props.determinateDashoffset;
      var centered = _props.centered;
      var props = (0, _objectWithoutProperties3.default)(_props, ['scale', 'style', 'className', 'value', 'determinateDashoffset', 'centered']);


      var isDeterminate = typeof value === 'number';
      var circleStyle = void 0;
      var svgStyle = style;
      if (isDeterminate) {
        var rotate = 'rotate(' + ROATE_DISTANCE / 100 * value + 'deg)';
        circleStyle = {
          strokeDashoffset: determinateDashoffset - determinateDashoffset / 100 * value
        };

        svgStyle = Object.assign({}, style, {
          WebkitTransform: (0, _classnames2.default)(style.WebkitTransform, rotate),
          MozTransform: (0, _classnames2.default)(style.MozTransform, rotate),
          transform: (0, _classnames2.default)(style.transform, rotate)
        });
      }

      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, props, {
          style: svgStyle,
          className: (0, _classnames2.default)('md-circular-progress', className, {
            centered: centered,
            'determinate': isDeterminate,
            'indeterminate': !isDeterminate
          }),
          width: scale * BASE_SIZE,
          height: scale * BASE_SIZE,
          viewBox: '0 0 66 66'
        }),
        (0, _jsx3.default)('circle', {
          className: 'md-circular-progress-path',
          strokeWidth: '6',
          strokeLinecap: 'round',
          style: circleStyle,
          cx: '33',
          cy: '33',
          r: '30'
        })
      );
    }
  }]);
  return CircularProgress;
}(_react.PureComponent);

CircularProgress.propTypes = {
  /**
   * A style object to apply to the svg. If this is a determinate `CircularProgress`,
   * the `transform` (and vendor prefixes) styles will be merged with the current
   * progress rotation.
   */
  style: _react.PropTypes.object.isRequired,

  /**
   * An optional className to apply to the svg.
   */
  className: _react.PropTypes.string,

  /**
   * The current value of the progress. If this value is defined, it will
   * be converted to a determinate circular progress. The progress will not
   * advance unless this value changes.
   *
   * This value should also be a number between 0 and 100.
   */
  value: function value(props, propName, component) {
    for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      others[_key - 3] = arguments[_key];
    }

    if (typeof props[propName] === 'undefined') {
      return null;
    }
    var err = _react.PropTypes.number.apply(_react.PropTypes, [props, propName, component].concat(others));
    if (!err) {
      var value = props[propName];
      if (!(0, _NumberUtils.isBetween)(value, 0, 100)) {
        err = new Error('A determinate \'' + component + '\' was given a value \'' + value + '\'. The \'value\' prop should be between 0 and 100');
      }
    }

    return err;
  },

  /**
   * The scale for the circular progress.
   */
  scale: _react.PropTypes.number.isRequired,

  /**
   * You probably don't want to update this. I'm not good at svg. This should
   * match the scss variable `$md-circular-progress-stroke-dashoffset`.
   */
  determinateDashoffset: _react.PropTypes.number.isRequired,

  /**
   * Boolean if the the progress should be centered in it's container.
   */
  centered: _react.PropTypes.bool
};
CircularProgress.defaultProps = {
  style: {},
  scale: 1,
  determinateDashoffset: 187,
  centered: true
};
exports.default = CircularProgress;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _NumberUtils = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * There are 3 different types of linear progress bars: `Determinate`,
 * `Indeterminate`, and `Query Indeterminate`.
 *
 * A `Determinate` linear progress bar should be used when you can keep track of the
 * progress and have a percentage complete you can work with. An example would be
 * uploading/downloading a file.
 *
 * An `Indeterminate` linear progress bar should be used when you can not keep track
 * of the progess yourself. An example might be waiting for an API call to complete.
 *
 * A `Query Indeterminate` linear progress bar is used when you are combining
 * `Indeterminate` and `Determinate`. A Linear Progress component can be displayed
 * as a query indeterminate progress bar by adding the prop `query={true}` to the
 * component. Until a progress value is given, it will display the query linear
 * progress animation. Afterwards, it will start the determinate animation of where
 * you manually keep updating the value of the progress.
 */
var LinearProgress = function (_PureComponent) {
  (0, _inherits3.default)(LinearProgress, _PureComponent);

  function LinearProgress() {
    (0, _classCallCheck3.default)(this, LinearProgress);
    return (0, _possibleConstructorReturn3.default)(this, (LinearProgress.__proto__ || Object.getPrototypeOf(LinearProgress)).apply(this, arguments));
  }

  (0, _createClass3.default)(LinearProgress, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var value = _props.value;
      var query = _props.query;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'value', 'query']);

      var isDeterminate = typeof value === 'number';

      var style = void 0;
      if (isDeterminate) {
        style = { width: value + '%' };
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: (0, _classnames2.default)('md-linear-progress-container', className) }, props),
        (0, _jsx3.default)('div', {
          style: style,
          className: (0, _classnames2.default)('md-linear-progress', {
            query: query,
            'determinate': isDeterminate,
            'indeterminate': !isDeterminate
          })
        })
      );
    }
  }]);
  return LinearProgress;
}(_react.PureComponent);

LinearProgress.propTypes = {
  /**
   * An optional className to apply to the linear progress container.
   */
  className: _react.PropTypes.string,

  /**
   * The current value of the progress. If this value is defined, it will
   * be converted to a determinate circular progress. The progress will not
   * advance unless this value changes.
   *
   * This value should also be a number between 0 and 100.
   */
  value: function value(props, propName, component) {
    for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      others[_key - 3] = arguments[_key];
    }

    if (typeof props[propName] === 'undefined') {
      return null;
    }
    var err = _react.PropTypes.number.apply(_react.PropTypes, [props, propName, component].concat(others));
    if (!err) {
      var value = props[propName];
      if (!(0, _NumberUtils.isBetween)(value, 0, 100)) {
        err = new Error('A determinate \'' + component + '\' was given a value \'' + value + '\'. The \'value\' prop should be between 0 and 100');
      }
    }

    return err;
  },

  /**
   * Boolean if this should be a query indeterminate progress bar.
   */
  query: _react.PropTypes.bool
};
LinearProgress.defaultProps = {
  query: false
};
exports.default = LinearProgress;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircularProgress = exports.LinearProgress = undefined;

var _LinearProgress2 = __webpack_require__(156);

var _LinearProgress3 = _interopRequireDefault(_LinearProgress2);

var _CircularProgress2 = __webpack_require__(155);

var _CircularProgress3 = _interopRequireDefault(_CircularProgress2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LinearProgress = _LinearProgress3.default;
exports.CircularProgress = _CircularProgress3.default;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(27);

var _NumberUtils = __webpack_require__(45);

var _keyCodes = __webpack_require__(30);

var _ListItem = __webpack_require__(60);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Menus = __webpack_require__(80);

var _Menus2 = _interopRequireDefault(_Menus);

var _SelectFieldControl = __webpack_require__(159);

var _SelectFieldControl2 = _interopRequireDefault(_SelectFieldControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIST_PADDING = 8;

/**
 * A SelectField is a material design inspired `<select>` component.
 */

var SelectField = function (_PureComponent) {
  (0, _inherits3.default)(SelectField, _PureComponent);

  function SelectField(props) {
    (0, _classCallCheck3.default)(this, SelectField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SelectField.__proto__ || Object.getPrototypeOf(SelectField)).call(this, props));

    _this.state = {
      open: props.initiallyOpen,
      focused: props.initiallyOpen,
      value: props.defaultValue,
      size: _this._calcSize(props),
      activeIndex: _this._getActiveIndex(props, { value: props.defaultValue })
    };

    _this._close = _this._close.bind(_this);
    _this._focus = _this._focus.bind(_this);
    _this._toggle = _this._toggle.bind(_this);
    _this._selectItem = _this._selectItem.bind(_this);
    _this._getListItem = _this._getListItem.bind(_this);
    _this._handleKeyDown = _this._handleKeyDown.bind(_this);
    _this._handleItemClick = _this._handleItemClick.bind(_this);
    _this._handleItemIncrement = _this._handleItemIncrement.bind(_this);
    _this._handleContainerClick = _this._handleContainerClick.bind(_this);
    _this._getActiveIndex = _this._getActiveIndex.bind(_this);
    _this._getAnimatedNewValueState = _this._getAnimatedNewValueState.bind(_this);
    _this._attemptCodeFocus = _this._attemptCodeFocus.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SelectField, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var state = void 0;
      if (this._getValue(this.props, this.state) !== this._getValue(nextProps, nextState)) {
        state = this.state.open && !nextState.open ? this._getAnimatedNewValueState() : {};
        state.activeIndex = this._getActiveIndex(nextProps, nextState);
      }

      var menuItems = this.props.menuItems;

      if (menuItems !== nextProps.menuItems || menuItems.length !== nextProps.menuItems.length) {
        state = state || {};
        state.size = this._calcSize(nextProps);
      }

      if (state) {
        this.setState(state);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props = this.props;
      var position = _props.position;
      var noAutoAdjust = _props.noAutoAdjust;
      var open = this.state.open;

      if (!open || open === prevState.open || noAutoAdjust) {
        return;
      }

      this._calcMenuPosition();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.state.timeout) {
        clearTimeout(this.state.timeout);
      }
    }

    /**
     * Finds the longest menu item value to use as the text field's size.to that value.
     * If there is a floating label, it also checks against the label's size so that
     * the floating label won't be clipped
     *
     * @param {Object} props? the props to use
     * @return {Number} the size to use for the text field
     */

  }, {
    key: '_calcSize',
    value: function _calcSize(_ref) {
      var menuItems = _ref.menuItems;
      var itemLabel = _ref.itemLabel;
      var label = _ref.label;

      var items = menuItems.slice();
      if (label) {
        items.push(label);
      }

      return items.reduce(function (prev, curr) {
        var len = ((0, _utils.isObject)(curr) ? curr[itemLabel] : curr.toString()).length;
        return Math.max(prev, len);
      }, 0);
    }

    /**
     * Gets the current value for the select field. If the component is controlled,
     * props.value will be returned. Otherwise, it will return the state.value. If the
     * state.value is an object, it will return value[itemLabel].
     *
     * @param {Object} props? the props to use
     * @param {Object} state? the state to use
     * @return {String} the current value to use for the select field.
     */

  }, {
    key: '_getValue',
    value: function _getValue(props, state) {
      if (typeof props.value !== 'undefined') {
        return props.value;
      }

      var value = state.value;

      if (typeof value === 'undefined') {
        return '';
      } else if ((0, _utils.isObject)(value)) {
        return value[props.itemLabel];
      } else {
        return value;
      }
    }

    /**
     * Selects a new item with the given index and event.
     * If there is an onChange event, the newly selected item, new index, and
     * event will be called with onChange.
     *
     * If this is an uncontrolled component, it will return the new value to be used.
     *
     * @param {Number} index the newly selected item index
     * @param {Object} event the event to pass to onChange
     * @return {String} an optional new value to return if it is an uncontrolled component.
     */

  }, {
    key: '_selectItem',
    value: function _selectItem(index, event) {
      var _props2 = this.props;
      var onChange = _props2.onChange;
      var menuItems = _props2.menuItems;
      var value = _props2.value;
      var itemLabel = _props2.itemLabel;

      var item = menuItems[index];
      if (onChange) {
        onChange(item, index, event);
      }

      if (typeof value === 'undefined') {
        return (0, _utils.isObject)(item) ? item[itemLabel] : item;
      }

      return undefined;
    }

    /**
     * Creates a state object to drop a new value into the text field.
     * @return {Object} a state object with timeouts for animating the new value.
     */

  }, {
    key: '_getAnimatedNewValueState',
    value: function _getAnimatedNewValueState() {
      var _this2 = this;

      return {
        droppingClassName: 'drop-enter',
        timeout: setTimeout(function () {
          _this2.setState({
            droppingClassName: 'drop-enter drop-enter-active',
            timeout: setTimeout(function () {
              _this2.setState({ droppingClassName: null, timeout: null });
            }, 300)
          });
        }, 1)
      };
    }

    /**
     * Gets the current activeIndex for the given props and state.
     *
     * @param {Object} props? the props to use
     * @param {Object} state? the state to use
     * @return the activeIndex or -1
     */

  }, {
    key: '_getActiveIndex',
    value: function _getActiveIndex(props, state) {
      var value = this._getValue(props, state);
      if (!value) {
        return -1;
      }

      var itemLabel = props.itemLabel;
      var menuItems = props.menuItems;

      var i = 0;
      menuItems.some(function (item, j) {
        var found = ((0, _utils.isObject)(item) ? item[itemLabel] : item) === value;
        if (found) {
          i = j;
        }

        return found;
      });

      return i;
    }

    /**
     * Gets the first active list item or the first list item if there are no active items.
     *
     * @return {Object} a list item element.
     */

  }, {
    key: '_getListItem',
    value: function _getListItem() {
      var node = (0, _reactDom.findDOMNode)(this);

      var item = node.querySelector('.md-list-tile.active') || node.querySelector('.md-list-tile');
      if (item) {
        return item.parentNode;
      } else {
        // Isn't found in jest?
        return {};
      }
    }

    /**
     * Sets the transform-origin for the dropdown menu so that the menu will appear
     * from the text field's baseline.
     *
     * Sets the top position to be one list item down if the first item is not selected.
     *
     * Scrolls the current item into view
     */

  }, {
    key: '_calcMenuPosition',
    value: function _calcMenuPosition() {
      var node = (0, _reactDom.findDOMNode)(this);
      var menu = node.querySelector('.md-menu');

      var item = this._getListItem();

      // The height changes based on screen size and if floating label or not.
      var height = node.offsetHeight;
      var diff = item.offsetTop - item.offsetHeight;

      var paddingTop = parseInt(window.getComputedStyle(menu).getPropertyValue('padding-top'), 10);

      var position = this.props.position;

      var transformOrigin = void 0;
      var top = void 0;

      // padding top for mobile (desktop is 4)
      if (diff > LIST_PADDING) {
        menu.scrollTop = diff;
      }

      if (diff > 0) {
        // close enough. It is off by 4px for floating label on desktop
        top = -(item.offsetHeight + paddingTop - (height - item.offsetHeight));
      }

      this.setState({
        listStyle: {
          msTransformOrigin: transformOrigin,
          WebkitTransformOrigin: transformOrigin,
          transformOrigin: transformOrigin,
          top: top
        }
      });
    }
  }, {
    key: '_toggle',
    value: function _toggle() {
      this.setState({ open: !this.state.open });
    }
  }, {
    key: '_close',
    value: function _close() {
      this.setState({ open: false });
    }

    /**
     * Attempts to focus an item with the given index. If the index is not -1
     * or the open list contains that index, the item will be focused.
     */

  }, {
    key: '_focus',
    value: function _focus(index) {
      if (index === -1) {
        return;
      }

      var item = (0, _reactDom.findDOMNode)(this).querySelectorAll('.md-list-tile')[index];
      if (item) {
        item.focus();
      }
    }

    /**
     * Searches the menuItems for an item that starts with the given code. If there is an
     * item that matches, the item will be focused. If the previous code is equal, the
     * next match will be found. If there are no more matches, the first item will be focused
     * again.
     *
     * @param {String} code the number pressed or the capitalized letter pressed.
     * @param {Object} event the keydown event to pass to onChange
     */

  }, {
    key: '_attemptCodeFocus',
    value: function _attemptCodeFocus(code, event) {
      var _props3 = this.props;
      var menuItems = _props3.menuItems;
      var itemLabel = _props3.itemLabel;
      var _state = this.state;
      var lastCode = _state.lastCode;
      var minMatchIndex = _state.minMatchIndex;
      var maxMatchIndex = _state.maxMatchIndex;
      var activeIndex = _state.activeIndex;

      if (code === lastCode) {
        if (minMatchIndex === maxMatchIndex || minMatchIndex === -1 || maxMatchIndex === -1) {
          return;
        }
        var index = activeIndex + 1;
        if (index > maxMatchIndex) {
          index = minMatchIndex;
        }

        this._focus(index);
        this.setState({ activeIndex: index, value: this._selectItem(index, event) });
      } else {
        var matches = menuItems.filter(function (i) {
          var item = '' + ((0, _utils.isObject)(i) ? i[itemLabel] : i);
          return item && item.length ? item.charAt(0).toUpperCase() === code : false;
        });

        var state = {
          lastMatches: matches,
          lastCode: code,
          minMatchIndex: -1,
          maxMatchIndex: -1
        };

        if (matches.length) {
          state.minMatchIndex = menuItems.indexOf(matches[0]);
          state.maxMatchIndex = menuItems.indexOf(matches[matches.length - 1]);
          state.activeIndex = state.minMatchIndex;

          this._focus(state.activeIndex);
          state.value = this._selectItem(state.activeIndex, event);
        }

        this.setState(state);
      }
    }

    /**
     * Attempts to increment the activeIndex by 1 or -1.
     *
     * @param {Boolean} negative boolean if it should be a decrement
     * @param {Object} event the keydown event
     */

  }, {
    key: '_handleItemIncrement',
    value: function _handleItemIncrement(negative, event) {
      event.preventDefault();
      var activeIndex = this.state.activeIndex;

      var length = this.props.menuItems.length - 1;
      var index = void 0;
      if (negative && activeIndex === -1 || !negative && activeIndex >= length) {
        return;
      } else if (negative) {
        index = Math.max(0, activeIndex - 1);
      } else {
        index = Math.min(length, activeIndex + 1);
      }

      this._focus(index);
      this.setState({
        activeIndex: index,
        value: this._selectItem(index, event)
      });
    }

    /**
     * Listens to all key down events in the menu-container. This will improve memory management
     * if there are a ridiculous amount of menu items. One keydown listener vs 10000.
     *
     * @param {Object} e the keydown event
     */

  }, {
    key: '_handleKeyDown',
    value: function _handleKeyDown(e) {
      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }

      var key = e.which || e.keyCode;
      var code = String.fromCharCode(key);
      if (key === _keyCodes.UP || key === _keyCodes.DOWN) {
        this._handleItemIncrement(key === _keyCodes.UP, e);
      } else if (key === _keyCodes.TAB) {
        this._close();
      } else if (key === _keyCodes.ENTER || key === _keyCodes.SPACE) {
        var classList = e.target.classList;
        if (classList.contains('md-text-field')) {
          this._toggle();
        } else if (classList.contains('md-list-tile')) {
          this._handleItemClick(this.state.activeIndex, e);
        }
      } else if (code && code.match(/[A-Z]/)) {
        this._attemptCodeFocus(code, e);
      } else if ((0, _NumberUtils.isBetween)(key, _keyCodes.ZERO, _keyCodes.NINE) || (0, _NumberUtils.isBetween)(key, _keyCodes.KEYPAD_ZERO, _keyCodes.KEYPAD_NINE)) {
        var num = key - ((0, _NumberUtils.isBetween)(key, _keyCodes.ZERO, _keyCodes.NINE) ? _keyCodes.ZERO : _keyCodes.KEYPAD_ZERO);
        this._attemptCodeFocus(String(num), e);
      }
    }

    /**
     * Closes the menu and calls the onChange function. If it is an
     * uncontrolled component, updates the value in the state.
     */

  }, {
    key: '_handleItemClick',
    value: function _handleItemClick(i, e) {
      this.setState({
        open: false,
        value: this._selectItem(i, e)
      });
    }

    /**
     * Listens to all click events on the menu container. If it is one of the menu items,
     * the item is selected. If the target is the text field, the menu will be toggled.
     *
     * The single event listener is for better performance on giant lists.
     * @param {Object} e the click event.
     */

  }, {
    key: '_handleContainerClick',
    value: function _handleContainerClick(e) {
      var node = e.target;
      while (node && node.parentNode) {
        var _node = node;
        var className = _node.className;

        if (className.match(/md-text-field/)) {
          e.preventDefault(); // stops a double click from being triggered. No idea why
          this._toggle();
          return;
        } else if (className.match(/md-list-tile/)) {
          var tiles = Array.prototype.slice.call((0, _reactDom.findDOMNode)(this).querySelectorAll('.md-list-tile'));
          this._handleItemClick(tiles.indexOf(node), e);
          return;
        }

        node = node.parentNode;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state;
      var open = _state2.open;
      var size = _state2.size;
      var activeIndex = _state2.activeIndex;
      var listStyle = _state2.listStyle;
      var droppingClassName = _state2.droppingClassName;
      var lineDirection = this.props.lineDirection;
      var _props4 = this.props;
      var label = _props4.label;
      var floatingLabel = _props4.floatingLabel;
      var menuItems = _props4.menuItems;
      var itemLabel = _props4.itemLabel;
      var position = _props4.position;
      var style = _props4.style;
      var className = _props4.className;
      var listClassName = _props4.listClassName;
      var menuClassName = _props4.menuClassName;
      var iconClassName = _props4.iconClassName;
      var iconChildren = _props4.iconChildren;
      var disabled = _props4.disabled;
      var fullWidth = _props4.fullWidth;
      var adjustMinWidth = _props4.adjustMinWidth;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['label', 'floatingLabel', 'menuItems', 'itemLabel', 'position', 'style', 'className', 'listClassName', 'menuClassName', 'iconClassName', 'iconChildren', 'disabled', 'fullWidth', 'adjustMinWidth']);

      delete props.value;
      delete props.defaultValue;
      delete props.noAutoAdjust;
      delete props.initiallyOpen;
      delete props.lineDirection;

      var displayLabel = this._getValue(this.props, this.state);
      var below = true;

      var toggle = (0, _jsx3.default)(_SelectFieldControl2.default, {
        inputStyle: style,
        inputClassName: (0, _classnames2.default)(className, droppingClassName),
        label: label,
        value: displayLabel,
        floatingLabel: floatingLabel,
        rightIcon: (0, _jsx3.default)(_FontIcons2.default, {
          iconClassName: iconClassName
        }, void 0, iconChildren),
        size: size,
        disabled: disabled,
        open: open,
        below: below,
        inkDisabled: !below,
        fullWidth: fullWidth,
        adjustMinWidth: adjustMinWidth,
        lineDirection: lineDirection
      });

      var items = void 0;
      if (open) {
        items = menuItems.map(function (item, i) {
          return (0, _jsx3.default)(_ListItem2.default, {
            tabIndex: -1,
            primaryText: (0, _utils.isObject)(item) ? item[itemLabel] : item,
            tileClassName: (0, _classnames2.default)({
              'active': i === activeIndex,
              'select-field-btn-tile': below
            })
          }, item.key || i);
        });
      }

      var menuProps = (0, _extends3.default)({
        isOpen: open,
        close: this._close,
        className: (0, _classnames2.default)('md-select-field-menu-container', menuClassName, {
          'full-width': fullWidth
        }),
        listClassName: (0, _classnames2.default)('md-select-field-menu', listClassName, {
          'single-line': !floatingLabel,
          'full-width': fullWidth
        }),
        toggle: toggle,
        listStyle: listStyle,
        position: position
      }, props);

      if (!disabled) {
        menuProps.onClick = this._handleContainerClick;
        menuProps.onKeyDown = this._handleKeyDown;
      }

      return _react2.default.createElement(
        _Menus2.default,
        menuProps,
        items
      );
    }
  }]);
  return SelectField;
}(_react.PureComponent);

SelectField.propTypes = {
  /**
   * An optional style to apply to the text field's input in the select field.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply to the text field's input in the select field.
   */
  className: _react.PropTypes.string,

  /**
   * An optional style to apply to the menu list.
   */
  listStyle: _react.PropTypes.object,

  /**
   * An optional className to apply to the menu list.
   */
  listClassName: _react.PropTypes.string,

  /**
   * An optional style to apply to the menuc ontainer that holds the list
   * of menu items.
   */
  menuStyle: _react.PropTypes.object,

  /**
   * An optional className to apply to the menu container that holds
   * the list of menu items.
   */
  menuClassName: _react.PropTypes.string,

  /**
   * A boolean if the select field is open by default.
   */
  initiallyOpen: _react.PropTypes.bool,

  /**
   * A boolean if the text field should have a floating label instead of
   * an inline label.
   */
  floatingLabel: _react.PropTypes.bool,

  /**
   * The label to apply to the text field.
   */
  label: _react.PropTypes.string,

  /**
   * An optional key to use to extract a `menuItem`'s label if the
   * `menuItems` prop is an array of objects.
   */
  itemLabel: _react.PropTypes.string,

  /**
   * An optional value to convert the select field into a controlled component.
   * This will be the displayed value in the text field.
   */
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

  /**
   * The defaultValue for the select field.
   */
  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

  /**
   * A list of items to display in the opened menu. When a new value is clicked,
   * the entire menuItem will be returned. If the menu item is an object, you will
   * need to define the correct `itemLabel` so it displays correctly in the menu.
   */
  menuItems: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.object])).isRequired,

  /**
   * An optional function to call select field change. It is called with `(newlySelectedMenuItem, changeEvent)`.
   * If this a controlled component, you will manually need to convert the `newlySelectedMenuItem`'s value if
   * it is an object so that the `value` prop is a string or number.
   */
  onChange: _react.PropTypes.func,

  /**
   * An optional function to call when the text field is clicked.
   */
  onClick: _react.PropTypes.func,

  /**
   * An optional function to call when the text field has focus and a key is pressed.
   */
  onKeyDown: _react.PropTypes.func,

  /**
   * The position that the menu should appear from. This should be one of:
   *
   * ```js
   * SelectField.Positions.TOP_LEFT,
   * SelectField.Positions.TOP_RIGHT,
   * SelectField.Positions.BELOW
   * ```
   */
  position: _react.PropTypes.oneOf(['below']),

  /**
   * Boolean if the drop down menu should not automatically attempt to change the top position to match a
   * selected item. This should really just be used if the opened menu expands past the top of the screen.
   */
  noAutoAdjust: _react.PropTypes.bool,

  /**
   * Boolean if the select field is disabled.
   */
  disabled: _react.PropTypes.bool,

  /**
   * The icon className for the dropdown indicator.
   */
  iconClassName: _react.PropTypes.string.isRequired,

  /**
   * The icon children to use for the dropdown indicator.
   */
  iconChildren: _react.PropTypes.node,

  /**
   * Boolean if the this select field should span the full width of a parent
   */
  fullWidth: _react.PropTypes.bool,

  /**
   * Boolean if the select field should automatically increase it's text field's
   * min width to the max size of it's label or placeholder text.
   */
  adjustMinWidth: _react.PropTypes.bool,

  /**
   * The direction that the text field divider expands from when the text field
   * gains focus. If this is omitted, it will automatically match the direction
   * of the `position` prop so that the line expands from the same direction
   * as the menu.
   */
  lineDirection: _react.PropTypes.oneOf(['left', 'center', 'right'])
};
SelectField.defaultProps = {
  initiallyOpen: false,
  floatingLabel: false,
  itemLabel: 'label',
  defaultValue: '',
  menuItems: [],
  iconClassName: 'material-icons',
  iconChildren: 'arrow_drop_down',
  noAutoAdjust: false,
  adjustMinWidth: false
};
exports.default = SelectField;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _TextFields = __webpack_require__(26);

var _TextFields2 = _interopRequireDefault(_TextFields);

var _Inks = __webpack_require__(25);

var _Inks2 = _interopRequireDefault(_Inks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectFieldControl = function (_PureComponent) {
  (0, _inherits3.default)(SelectFieldControl, _PureComponent);

  function SelectFieldControl() {
    (0, _classCallCheck3.default)(this, SelectFieldControl);
    return (0, _possibleConstructorReturn3.default)(this, (SelectFieldControl.__proto__ || Object.getPrototypeOf(SelectFieldControl)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectFieldControl, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var inputClassName = _props.inputClassName;
      var below = _props.below;
      var open = _props.open;
      var ink = _props.ink;
      var props = (0, _objectWithoutProperties3.default)(_props, ['inputClassName', 'below', 'open', 'ink']);

      delete props.inkDisabled;

      var control = _react2.default.createElement(_TextFields2.default, (0, _extends3.default)({}, props, {
        className: (0, _classnames2.default)('md-select-field-container', {
          'select-field-btn': below,
          'active': below && open,
          'disabled': props.disabled
        }),
        inputClassName: (0, _classnames2.default)('md-select-field', inputClassName),
        readOnly: true
      }));

      return ink ? (0, _jsx3.default)('div', {}, void 0, control, ink) : control;
    }
  }]);
  return SelectFieldControl;
}(_react.PureComponent);

SelectFieldControl.propTypes = {
  inputStyle: _react.PropTypes.object,
  inputClassName: _react.PropTypes.string,
  below: _react.PropTypes.bool,
  open: _react.PropTypes.bool.isRequired,
  ink: _react.PropTypes.node,
  disabled: _react.PropTypes.bool
};
exports.default = (0, _Inks2.default)(SelectFieldControl);

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

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _ControlContainer = __webpack_require__(82);

var _ControlContainer2 = _interopRequireDefault(_ControlContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checkboxes can be toggle by clicking the label of the checkbox or the
 * checkbox itself. If the icon itself is clicked, ink will appear. There
 * will be no ink when the label is clicked.
 */
var Checkbox = function (_PureComponent) {
  (0, _inherits3.default)(Checkbox, _PureComponent);

  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);
    return (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_ControlContainer2.default, (0, _extends3.default)({}, this.props, { type: 'checkbox' }));
    }
  }]);
  return Checkbox;
}(_react.PureComponent);

Checkbox.propTypes = {
  /**
   * The optional className to apply to the surrounding label.
   */
  className: _react.PropTypes.string,

  /**
   * Boolean if the checkbox is disabled.
   */
  disabled: _react.PropTypes.bool,

  /**
   * An optional function to call when the checked state is called.
   * The next checked state and change event will be passed.
   *
   * `onChange(!checked, event)`.
   */
  onChange: _react.PropTypes.func,

  /**
   * An optional value for the checkbox.
   */
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

  /**
   * Boolean if the checkbox is checked by default.
   */
  defaultChecked: _react.PropTypes.bool.isRequired,

  /**
   * Boolean if this checkbox is currently checked. This will
   * require the `onChange` prop to be defined since it will
   * become a controlled component.
   */
  checked: _react.PropTypes.bool,

  /**
   * The icon to use for the checked state.
   */
  checkedIcon: _react.PropTypes.node.isRequired,

  /**
   * The icon to use for the unchecked state.
   */
  uncheckedIcon: _react.PropTypes.node.isRequired,

  /**
   * An optional label to display with the checkbox.
   */
  label: _react.PropTypes.node,

  /**
   * Boolean if the label should be displayed before or after the checkbox.
   */
  labelBefore: _react.PropTypes.bool.isRequired,

  /**
   * An optional form name to give to the checkbox.
   */
  name: _react.PropTypes.string
};
Checkbox.defaultProps = {
  defaultChecked: false,
  labelBefore: false,
  checkedIcon: (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'check_box'),
  uncheckedIcon: (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'check_box_outline_blank')
};
exports.default = Checkbox;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Inks = __webpack_require__(25);

var _Inks2 = _interopRequireDefault(_Inks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InkedControl = function (_PureComponent) {
  (0, _inherits3.default)(InkedControl, _PureComponent);

  function InkedControl() {
    (0, _classCallCheck3.default)(this, InkedControl);
    return (0, _possibleConstructorReturn3.default)(this, (InkedControl.__proto__ || Object.getPrototypeOf(InkedControl)).apply(this, arguments));
  }

  (0, _createClass3.default)(InkedControl, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var checked = _props.checked;
      var disabled = _props.disabled;
      var type = _props.type;
      var ink = _props.ink;
      var props = (0, _objectWithoutProperties3.default)(_props, ['children', 'checked', 'disabled', 'type', 'ink']);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: (0, _classnames2.default)('md-' + type, { 'active': checked, disabled: disabled }) }, props),
        ink,
        children
      );
    }
  }]);
  return InkedControl;
}(_react.PureComponent);

InkedControl.propTypes = {
  children: _react.PropTypes.node.isRequired,
  type: _react.PropTypes.string.isRequired,
  disabled: _react.PropTypes.bool,
  checked: _react.PropTypes.bool,

  // Injected from injectInk
  ink: _react.PropTypes.node
};
exports.default = (0, _Inks2.default)(InkedControl);

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `RadioGroup` component is a state manager for the `Radio` component.
 * It will automatically inject the name, an onChange function, and
 * determine whether a radio is checked.
 *
 * This is just a simple wrapper to reduce some prop redundancy.
 */
var RadioGroup = function (_PureComponent) {
  (0, _inherits3.default)(RadioGroup, _PureComponent);

  function RadioGroup(props) {
    (0, _classCallCheck3.default)(this, RadioGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

    _this.state = {
      value: props.defaultValue || _react2.default.Children.toArray(props.children)[0].props.value
    };

    _this._handleChange = _this._handleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(RadioGroup, [{
    key: '_getValue',
    value: function _getValue(props, state) {
      return typeof props.value === 'undefined' ? state.value : props.value;
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(value, e) {
      if (this.props.onChange) {
        this.props.onChange(value, e);
      }
      // prevents 2 change events triggering
      e.stopPropagation();

      if (typeof this.props.value === 'undefined') {
        this.setState({ value: value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var component = _props.component;
      var className = _props.className;
      var children = _props.children;
      var name = _props.name;
      var inline = _props.inline;
      var disabled = _props.disabled;
      var props = (0, _objectWithoutProperties3.default)(_props, ['component', 'className', 'children', 'name', 'inline', 'disabled']);

      var fullProps = (0, _extends3.default)({}, props, {
        className: (0, _classnames2.default)('md-radio-group', className)
      });
      var value = this._getValue(this.props, this.state);

      return _react2.default.createElement(component, fullProps, _react2.default.Children.map(children, function (child, i) {
        return _react2.default.cloneElement(child, {
          key: i,
          checked: value === child.props.value,
          onChange: _this2._handleChange,
          name: name || child.props.name,
          className: (0, _classnames2.default)({ inline: inline }),
          disabled: child.props.disabled || disabled
        });
      }));
    }
  }]);
  return RadioGroup;
}(_react.PureComponent);

RadioGroup.propTypes = {
  /**
   * The default value for the radio group. This will check the radio that
   * has the same value first by default.
   *
   * If this is omitted, the first radio will be selected.
   */
  defaultValue: _react.PropTypes.string,

  /**
   * Boolean if the entire radio group is disabled.
   */
  disabled: _react.PropTypes.bool,

  /**
   * An optional className to apply to the radio group.
   */
  className: _react.PropTypes.string,

  /**
   * The radio buttons to manage.
   */
  children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired,

  /**
   * The component to render the radio group as.
   */
  component: _react.PropTypes.string.isRequired,

  /**
   * Boolean if the radio buttons should be force to be inline.
   */
  inline: _react.PropTypes.bool,

  /**
   * An optional onChange function to call when any of the radio buttons are clicked.
   * This will return the clicked radio's value and the change event.
   *
   * `onChange(value, event)`.
   */
  onChange: _react.PropTypes.func,

  /**
   * The name to give to all the radio buttons.
   */
  name: _react.PropTypes.string,

  /**
   * The current value for the radio group. This will convert the radio group
   * into a controlled component which will require the onChange prop
   * to be given.
   */
  value: _react.PropTypes.string
};
RadioGroup.defaultProps = {
  component: 'div',
  inline: false
};
exports.default = RadioGroup;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `Subheader` component is generally used inside of lists or menus.
 */
var Subheader = function (_PureComponent) {
  (0, _inherits3.default)(Subheader, _PureComponent);

  function Subheader() {
    (0, _classCallCheck3.default)(this, Subheader);
    return (0, _possibleConstructorReturn3.default)(this, (Subheader.__proto__ || Object.getPrototypeOf(Subheader)).apply(this, arguments));
  }

  (0, _createClass3.default)(Subheader, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var component = _props.component;
      var inset = _props.inset;
      var primary = _props.primary;
      var primaryText = _props.primaryText;
      var className = _props.className;
      var props = (0, _objectWithoutProperties3.default)(_props, ['component', 'inset', 'primary', 'primaryText', 'className']);

      delete props.expanderIconChildren;
      delete props.expanderIconClassName;

      return _react2.default.createElement(component, (0, _extends3.default)({}, props, {
        className: (0, _classnames2.default)('md-subheader', className, {
          inset: inset,
          'md-primary': primary
        })
      }), primaryText);
    }
  }]);
  return Subheader;
}(_react.PureComponent);

Subheader.propTypes = {
  /**
   * The text to display as a subheader.
   */
  primaryText: _react.PropTypes.string.isRequired,

  /**
   * The component to render the Subheader as.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,

  /**
   * An optional className to apply to the subheader.
   */
  className: _react.PropTypes.string,

  /**
   * Boolean if the subheader should be styled with the primary color.
   */
  primary: _react.PropTypes.bool,

  /**
   * Boolean if the Subheader is inset in the list. This will add additional
   * spacing to align the subheader.
   */
  inset: _react.PropTypes.bool
};
Subheader.defaultProps = {
  component: 'li'
};
exports.default = Subheader;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactAddonsCssTransitionGroup = __webpack_require__(23);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwipeableView = function (_PureComponent) {
  (0, _inherits3.default)(SwipeableView, _PureComponent);

  function SwipeableView(props) {
    (0, _classCallCheck3.default)(this, SwipeableView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwipeableView.__proto__ || Object.getPrototypeOf(SwipeableView)).call(this, props));

    _this.state = {
      activeIndex: props.initialIndex,
      swiping: false,
      swipeItemStyle: {},
      swipeStart: 0,
      swipeDistance: 0
    };

    _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);
    _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
    _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
    _this._getSwipeItemStyle = _this._getSwipeItemStyle.bind(_this);
    _this._calcSwipeDistance = _this._calcSwipeDistance.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SwipeableView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setInitialSwipeDistance();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.activeIndex !== nextProps.activeIndex) {
        var distance = -(0, _reactDom.findDOMNode)(this.refs.container).offsetWidth * nextProps.activeIndex;
        this.setState({
          swipeItemStyle: this._getSwipeItemStyle(distance),
          swipeDistance: distance
        });
      }
    }
  }, {
    key: '_getSwipeItemStyle',
    value: function _getSwipeItemStyle(distance) {
      var transform = 'translateX(' + distance + 'px)';
      return {
        WebkitTransform: transform,
        MozTransform: transform,
        transform: transform
      };
    }
  }, {
    key: '_getActiveIndex',
    value: function _getActiveIndex(props, state) {
      return typeof props.activeIndex === 'number' ? props.activeIndex : state.activeIndex;
    }
  }, {
    key: '_handleSwipeStart',
    value: function _handleSwipeStart(e) {
      if (this.props.onSwipeStart) {
        this.props.onSwipeStart(e);
      }

      this.setState({
        swiping: true,
        swipeStart: e.changedTouches[0].pageX
      });
    }
  }, {
    key: '_handleSwipeMove',
    value: function _handleSwipeMove(e) {
      var distance = this._calcSwipeDistance(e.changedTouches[0].pageX, 24);

      if (this.props.onSwipeMove) {
        this.props.onSwipeMove(distance, e);
      }

      this.setState({
        swipeItemStyle: this._getSwipeItemStyle(distance)
      });
    }
  }, {
    key: '_handleSwipeEnd',
    value: function _handleSwipeEnd(e) {
      var x = e.changedTouches[0].pageX;
      var activeIndex = this._getActiveIndex(this.props, this.state);

      var _findDOMNode = (0, _reactDom.findDOMNode)(this.refs.container);

      var offsetWidth = _findDOMNode.offsetWidth;

      var deltaX = offsetWidth * this.props.threshold;
      var swipeDistance = this.state.swipeStart - x;

      var distance = this._calcSwipeDistance(x, 0);
      if (swipeDistance > deltaX && activeIndex + 1 < this.props.children.length) {
        activeIndex++;
      } else if (swipeDistance < -deltaX && activeIndex - 1 >= 0) {
        activeIndex--;
      }

      distance = -offsetWidth * activeIndex;

      if (this.props.onChange) {
        this.props.onChange(activeIndex, swipeDistance, e);
      }

      this.setState({
        swipeItemStyle: this.props.transitionName ? {} : this._getSwipeItemStyle(distance),
        swiping: false,
        swipeDistance: distance,
        activeIndex: activeIndex
      });
    }
  }, {
    key: '_setInitialSwipeDistance',
    value: function _setInitialSwipeDistance() {
      var _findDOMNode2 = (0, _reactDom.findDOMNode)(this.refs.container);

      var offsetWidth = _findDOMNode2.offsetWidth;

      var index = this._getActiveIndex(this.props, this.state);
      var distance = -offsetWidth * index;

      this.setState({
        swipeItemStyle: this.props.transitionName ? {} : this._getSwipeItemStyle(distance),
        swipeDistance: distance
      });
    }
  }, {
    key: '_calcSwipeDistance',
    value: function _calcSwipeDistance(x, threshold) {
      var _findDOMNode3 = (0, _reactDom.findDOMNode)(this.refs.container);

      var scrollWidth = _findDOMNode3.scrollWidth;
      var offsetWidth = _findDOMNode3.offsetWidth;

      var distance = this.state.swipeDistance + (x - this.state.swipeStart);
      return Math.max(Math.min(distance, threshold), -scrollWidth - threshold + offsetWidth);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

      delete props.activeIndex;
      delete props.initialIndex;
      delete props.threshold;

      var _state = this.state;
      var swipeItemStyle = _state.swipeItemStyle;
      var swiping = _state.swiping;


      var content = _react2.default.Children.map(children, function (child, i) {
        return _react2.default.cloneElement(child, {
          key: child.key || 'swipe-item-' + i,
          className: 'md-swipeable-item',
          style: Object.assign({}, child.props.style, swipeItemStyle)
        });
      });

      if (props.transitionName) {
        props.component = 'section';
      }

      return _react2.default.createElement(props.transitionName ? _reactAddonsCssTransitionGroup2.default : 'section', (0, _extends3.default)({}, props, {
        ref: 'container',
        className: (0, _classnames2.default)('md-swipeable-view', className, { swiping: swiping }),
        onTouchStart: this._handleSwipeStart,
        onTouchMove: this._handleSwipeMove,
        onTouchEnd: this._handleSwipeEnd,
        children: content
      }));
    }
  }]);
  return SwipeableView;
}(_react.PureComponent);

SwipeableView.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  onSwipeMove: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onSwipeStart: _react.PropTypes.func,
  threshold: _react.PropTypes.number.isRequired,
  initialIndex: _react.PropTypes.number.isRequired,
  activeIndex: _react.PropTypes.number,
  transitionName: _react.PropTypes.string
};
SwipeableView.defaultProps = {
  initialIndex: 0,
  threshold: 0.15
};
exports.default = SwipeableView;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwipeableView = __webpack_require__(164);

var _SwipeableView2 = _interopRequireDefault(_SwipeableView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwipeableView2.default;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Inks = __webpack_require__(25);

var _Inks2 = _interopRequireDefault(_Inks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `Tab` component should be rendered inside the `Tabs` component.
 * It is used for generating a tab and holding some sort of content
 * to be displayed when active.
 */
var Tab = function (_PureComponent) {
  (0, _inherits3.default)(Tab, _PureComponent);

  function Tab() {
    (0, _classCallCheck3.default)(this, Tab);
    return (0, _possibleConstructorReturn3.default)(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var icon = _props.icon;
      var label = _props.label;
      var label2 = _props.label2;
      var checked = _props.checked;
      var ink = _props.ink;
      var onChange = _props.onChange;
      var id = _props.id;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'icon', 'label', 'label2', 'checked', 'ink', 'onChange', 'id']);


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)('md-tab', className, { 'active': checked })
        }, props),
        ink,
        (0, _jsx3.default)('label', {
          className: (0, _classnames2.default)('md-tab-label', {
            'multiline': !!label && !!label2,
            'with-icon': !!label && !!icon
          }),
          htmlFor: id
        }, void 0, icon, label && (0, _jsx3.default)('div', {}, void 0, label), label2 && (0, _jsx3.default)('div', {}, void 0, label2), (0, _jsx3.default)('input', {
          id: id,
          type: 'radio',
          className: 'md-tab-control',
          checked: checked,
          onChange: onChange
        }))
      );
    }
  }]);
  return Tab;
}(_react.PureComponent);

Tab.propTypes = {
  /**
   * An optional className to apply.
   */
  className: _react.PropTypes.string,

  /**
   * The content to display when the tab is active.
   */
  children: _react.PropTypes.node,

  /**
   * An optional icon to display in the tab.
   */
  icon: _react.PropTypes.node,

  /**
   * An optional label to display in the tab.
   */
  label: _react.PropTypes.string,

  /**
   * An optional second line label to display in the tab.
   */
  label2: _react.PropTypes.string,

  /**
   * Boolean if the Tab is currently active. This is managed by the
   * `Tabs` component.
   */
  checked: _react.PropTypes.bool,

  /**
   * A function to call when the tab is clicked. This is managed by the
   * `Tabs` component.
   */
  onChange: _react.PropTypes.func,

  /**
   * Ink that has been injected from the `injectInk` HOC. Do not use.
   */
  ink: _react.PropTypes.node.isRequired,

  /**
   * An optional id for the tab.
   */
  id: _react.PropTypes.string
};
exports.default = (0, _Inks2.default)(Tab);

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabHeader = function TabHeader(_ref) {
  var indicatorStyle = _ref.indicatorStyle;
  var children = _ref.children;
  var className = _ref.className;
  var scrolling = _ref.scrolling;
  var fixedWidth = _ref.fixedWidth;
  var centered = _ref.centered;
  var props = (0, _objectWithoutProperties3.default)(_ref, ['indicatorStyle', 'children', 'className', 'scrolling', 'fixedWidth', 'centered']);
  return (0, _jsx3.default)('header', {
    className: className
  }, void 0, _react2.default.createElement(
    'ul',
    (0, _extends3.default)({
      className: (0, _classnames2.default)('md-tabs', {
        'fixed-width': fixedWidth,
        'tabs-centered': centered,
        scrolling: scrolling
      })
    }, props),
    children,
    (0, _jsx3.default)('span', {
      className: 'md-tab-indicator',
      style: indicatorStyle
    })
  ));
};

TabHeader.propTypes = {
  indicatorStyle: _react.PropTypes.object.isRequired,
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.string.isRequired,
  onTouchStart: _react.PropTypes.func.isRequired,
  onTouchEnd: _react.PropTypes.func.isRequired,
  onTouchMove: _react.PropTypes.func.isRequired,
  style: _react.PropTypes.object.isRequired,
  scrolling: _react.PropTypes.bool.isRequired,
  fixedWidth: _react.PropTypes.bool.isRequired,
  centered: _react.PropTypes.bool.isRequired
};

exports.default = TabHeader;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _TabHeader = __webpack_require__(167);

var _TabHeader2 = _interopRequireDefault(_TabHeader);

var _SwipeableViews = __webpack_require__(165);

var _SwipeableViews2 = _interopRequireDefault(_SwipeableViews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `Tabs` component is a container for the `Tab` component. It will
 * manage selecting the current active tab and allow the tab content
 * to be swiped to change.
 *
 * > Tabs should not be used for indicating navigation.
 */
var Tabs = function (_PureComponent) {
  (0, _inherits3.default)(Tabs, _PureComponent);

  function Tabs(props) {
    (0, _classCallCheck3.default)(this, Tabs);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = {
      activeTabIndex: props.initialActiveTabIndex,
      headerStyle: {},
      indicatorStyle: {},
      tabMoveDistance: 0,
      tabScrolling: false
    };
    _this._updateIndicator = _this._updateIndicator.bind(_this);
    _this._calcTabMoveDistance = _this._calcTabMoveDistance.bind(_this);
    _this._handleTabChange = _this._handleTabChange.bind(_this);
    _this._handleTabScrollEnd = _this._handleTabScrollEnd.bind(_this);
    _this._handleTabScrollMove = _this._handleTabScrollMove.bind(_this);
    _this._handleTabScrollStart = _this._handleTabScrollStart.bind(_this);
    _this._handleSwipeChange = _this._handleSwipeChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._updateIndicator();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (this._getActiveIndex(this.props, this.state) !== this._getActiveIndex(nextProps, nextState)) {
        var node = (0, _reactDom.findDOMNode)(this);
        var tabContainer = node.querySelector('.md-tabs-scroll-container');
        var tabs = (0, _reactDom.findDOMNode)(this).querySelectorAll('.md-tab');
        var active = tabs[this._getActiveIndex(nextProps, nextState)];
        var containerWidth = tabContainer.offsetWidth - parseInt(nextProps.style.marginLeft, 10);
        var activePosition = active.offsetLeft + active.offsetWidth;
        var tabMoveDistance = nextState.tabMoveDistance;

        if (activePosition > containerWidth + Math.abs(tabMoveDistance)) {
          var newDistance = containerWidth - activePosition;
          this.setState({
            headerStyle: this._getHeaderStyle(newDistance),
            tabMoveDistance: newDistance
          });
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this._getActiveIndex(this.props, this.state) !== this._getActiveIndex(prevProps, prevState)) {
        this._updateIndicator();
      }
    }
  }, {
    key: '_getActiveIndex',
    value: function _getActiveIndex(props, state) {
      return typeof props.activeTabIndex === 'undefined' ? state.activeTabIndex : props.activeTabIndex;
    }
  }, {
    key: '_getHeaderStyle',
    value: function _getHeaderStyle(tabMoveDistance) {
      var transform = 'translateX(' + tabMoveDistance + 'px)';
      return {
        WebkitTransform: transform,
        MozTransform: transform,
        transform: transform
      };
    }
  }, {
    key: '_updateIndicator',
    value: function _updateIndicator() {
      var _findDOMNode$querySel = (0, _reactDom.findDOMNode)(this).querySelector('.md-tab.active');

      var offsetWidth = _findDOMNode$querySel.offsetWidth;
      var offsetLeft = _findDOMNode$querySel.offsetLeft;

      this.setState({
        indicatorStyle: {
          left: offsetLeft + 'px',
          width: offsetWidth + 'px'
        }
      });
    }
  }, {
    key: '_calcTabMoveDistance',
    value: function _calcTabMoveDistance(_ref) {
      var pageX = _ref.pageX;
      var threshold = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      var distance = this.state.tabMoveDistance + (pageX - this.state.tabStartX);
      var node = (0, _reactDom.findDOMNode)(this);
      var tabContainer = node.querySelector('.md-tabs-scroll-container');
      var tabs = Array.prototype.slice.call(node.querySelectorAll('.md-tab'));
      var maxWidth = tabs.reduce(function (prev, curr) {
        return prev + curr.offsetWidth;
      }, 0) + threshold;
      maxWidth -= tabContainer.offsetWidth - parseInt(this.props.style.marginLeft || 0, 10);

      if (distance > 0) {
        // moving content left
        distance = Math.min(distance, threshold);
      } else {
        // moving content right
        distance = Math.max(distance, -maxWidth);
      }

      return distance;
    }
  }, {
    key: '_handleTabChange',
    value: function _handleTabChange(tabIndex, tabOnChange, e) {
      var _props = this.props;
      var activeTabIndex = _props.activeTabIndex;
      var onChange = _props.onChange;

      if (tabOnChange) {
        tabOnChange(tabIndex, e);
      }

      if (onChange) {
        onChange(tabIndex, e);
      }

      if (typeof activeTabIndex === 'undefined') {
        this.setState({ activeTabIndex: tabIndex });
      }
    }
  }, {
    key: '_handleTabScrollStart',
    value: function _handleTabScrollStart(_ref2) {
      var changedTouches = _ref2.changedTouches;

      this.setState({
        tabStartX: changedTouches[0].pageX,
        tabScrolling: true
      });
    }
  }, {
    key: '_handleTabScrollMove',
    value: function _handleTabScrollMove(_ref3) {
      var changedTouches = _ref3.changedTouches;

      var tabMoveDistance = this._calcTabMoveDistance(changedTouches[0], 24);
      this.setState({ headerStyle: this.getHeaderStyle(tabMoveDistance) });
    }
  }, {
    key: '_handleTabScrollEnd',
    value: function _handleTabScrollEnd(_ref4) {
      var changedTouches = _ref4.changedTouches;

      var tabMoveDistance = this._calcTabMoveDistance(changedTouches[0], 0);
      this.setState({
        headerStyle: this._getHeaderStyle(tabMoveDistance),
        tabMoveDistance: tabMoveDistance,
        tabScrolling: false
      });
    }
  }, {
    key: '_handleSwipeChange',
    value: function _handleSwipeChange(index) {
      var _props2 = this.props;
      var activeTabIndex = _props2.activeTabIndex;
      var onChange = _props2.onChange;

      if (onChange) {
        onChange(index);
      }

      if (typeof activeTabIndex === 'undefined') {
        this.setState({ activeTabIndex: index });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props;
      var className = _props3.className;
      var children = _props3.children;
      var style = _props3.style;
      var fixedWidth = _props3.fixedWidth;
      var centered = _props3.centered;
      var primary = _props3.primary;
      var remainingProps = (0, _objectWithoutProperties3.default)(_props3, ['className', 'children', 'style', 'fixedWidth', 'centered', 'primary']);

      delete remainingProps.scrollable;
      delete remainingProps.initialActiveTabIndex;

      var _state = this.state;
      var headerStyle = _state.headerStyle;
      var indicatorStyle = _state.indicatorStyle;
      var tabScrolling = _state.tabScrolling;

      var activeTabIndex = this._getActiveIndex(remainingProps, this.state);

      var tabsContent = [];
      var tabs = _react2.default.Children.map(children, function (tab, i) {
        tabsContent.push((0, _jsx3.default)('div', {
          className: 'md-tab-content'
        }, 'content-' + i, tab.props.children));

        return _react2.default.cloneElement(tab, {
          key: tab.key || 'tab-' + i,
          checked: i === activeTabIndex,
          onChange: _this2._handleTabChange.bind(_this2, i, tab.props.onChange) });
      });

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)('md-tabs-container', className)
        }, remainingProps),
        (0, _jsx3.default)(_TabHeader2.default, {
          className: (0, _classnames2.default)('md-tabs-scroll-container', { 'md-primary': primary }),
          fixedWidth: fixedWidth,
          centered: centered,
          scrolling: tabScrolling,
          onTouchStart: this._handleTabScrollStart,
          onTouchMove: this._handleTabScrollMove,
          onTouchEnd: this._handleTabScrollEnd,
          style: Object.assign({}, style, headerStyle),
          indicatorStyle: indicatorStyle
        }, void 0, tabs),
        (0, _jsx3.default)(_SwipeableViews2.default, {
          className: 'md-tab-content-container',
          activeIndex: activeTabIndex,
          onChange: this._handleSwipeChange
        }, void 0, tabsContent)
      );
    }
  }]);
  return Tabs;
}(_react.PureComponent);

Tabs.propTypes = {
  /**
   * An optional style to apply.
   */
  style: _react.PropTypes.object,

  /**
   * An optional className to apply.
   */
  className: _react.PropTypes.string,

  /**
   * The list of tabs to manage.
   */
  children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired,

  /**
   * The initial index of the tab that is active.
   */
  initialActiveTabIndex: _react.PropTypes.number.isRequired,

  /**
   * The active tab index if you want to control the tabs yourself.
   */
  activeTabIndex: _react.PropTypes.number,

  /**
   * An optional function to call when the tab is changed. The next active
   * tab index and the change event will be given.
   *
   * `onChange(tabIndex, event)`.
   */
  onChange: _react.PropTypes.func,

  /**
   * Boolean if the tabs should be styled with the primary color.
   */
  primary: _react.PropTypes.bool,

  /**
   * Boolean if the tabs are fixed width. This means that all of them will
   * be the same size.
   */
  fixedWidth: _react.PropTypes.bool,

  /**
   * Boolean if the tabs should be centered so there is extra whitespace
   * around the tabs.
   */
  centered: _react.PropTypes.bool
};
Tabs.defaultProps = {
  primary: true,
  initialActiveTabIndex: 0,
  style: {},
  fixedWidth: false,
  centered: false
};
exports.default = Tabs;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = exports.Tabs = undefined;

var _Tabs2 = __webpack_require__(168);

var _Tabs3 = _interopRequireDefault(_Tabs2);

var _Tab2 = __webpack_require__(166);

var _Tab3 = _interopRequireDefault(_Tab2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tabs = _Tabs3.default;
exports.Tab = _Tab3.default;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This component is used for rendering the floating label for a text field.
 */
var FloatingLabel = function (_PureComponent) {
  (0, _inherits3.default)(FloatingLabel, _PureComponent);

  function FloatingLabel() {
    (0, _classCallCheck3.default)(this, FloatingLabel);
    return (0, _possibleConstructorReturn3.default)(this, (FloatingLabel.__proto__ || Object.getPrototypeOf(FloatingLabel)).apply(this, arguments));
  }

  (0, _createClass3.default)(FloatingLabel, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var active = _props.active;
      var error = _props.error;
      var required = _props.required;
      var value = _props.value;
      var disabled = _props.disabled;
      var label = this.props.label;

      if (required && label.indexOf('*') === -1) {
        label = label.trim() + ' *';
      }

      var className = (0, _classnames2.default)('md-floating-label', {
        error: error,
        disabled: disabled,
        'focus': active,
        'active': active || value !== ''
      });

      return (0, _jsx3.default)('span', {
        className: className
      }, void 0, label);
    }
  }]);
  return FloatingLabel;
}(_react.PureComponent);

FloatingLabel.propTypes = {
  active: _react.PropTypes.bool.isRequired,
  error: _react.PropTypes.bool.isRequired,
  label: _react.PropTypes.string.isRequired,
  required: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};
exports.default = FloatingLabel;

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

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `TextDivider` component renders the divider below the `TextField` component.
 */
var TextDivider = function (_PureComponent) {
  (0, _inherits3.default)(TextDivider, _PureComponent);

  function TextDivider() {
    (0, _classCallCheck3.default)(this, TextDivider);
    return (0, _possibleConstructorReturn3.default)(this, (TextDivider.__proto__ || Object.getPrototypeOf(TextDivider)).apply(this, arguments));
  }

  (0, _createClass3.default)(TextDivider, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var lineDirection = _props.lineDirection;
      var active = _props.active;
      var error = _props.error;
      var icon = _props.icon;

      var className = (0, _classnames2.default)('md-text-divider', 'from-' + lineDirection, {
        active: active,
        error: error,
        'icon-offset': icon
      });
      return (0, _jsx3.default)('div', {
        className: className
      });
    }
  }]);
  return TextDivider;
}(_react.PureComponent);

TextDivider.propTypes = {
  lineDirection: _react.PropTypes.oneOf(['left', 'center', 'right']).isRequired,
  active: _react.PropTypes.bool.isRequired,
  error: _react.PropTypes.bool.isRequired,
  icon: _react.PropTypes.bool.isRequired
};
exports.default = TextDivider;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _FloatingLabel = __webpack_require__(170);

var _FloatingLabel2 = _interopRequireDefault(_FloatingLabel);

var _TextDivider = __webpack_require__(171);

var _TextDivider2 = _interopRequireDefault(_TextDivider);

var _TextFieldMessage = __webpack_require__(173);

var _TextFieldMessage2 = _interopRequireDefault(_TextFieldMessage);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var valueType = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);

/**
 * There is also an additional css class you can add to the text field to increase the font
 * size to a "title". This is configurable and there is a mixin to generate more of these helpers.
 *
 * Text Fields display as `inline-block` by default so that their size does not span `100%`. If
 * you want a text field per-line, wrap them in a div, or set them to display block (will make their width
 * expand as well though).
 */

var TextField = function (_PureComponent) {
  (0, _inherits3.default)(TextField, _PureComponent);

  function TextField(props) {
    (0, _classCallCheck3.default)(this, TextField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.state = {
      active: false,
      currentRows: props.rows,
      areaHeight: 'auto',
      value: props.defaultValue,
      passwordVisible: false,
      minWidth: null
    };

    _this.focus = _this.focus.bind(_this);
    _this._handleBlur = _this._handleBlur.bind(_this);
    _this._handleFocus = _this._handleFocus.bind(_this);
    _this._handleChange = _this._handleChange.bind(_this);
    _this._togglePasswordField = _this._togglePasswordField.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TextField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.adjustMinWidth) {
        this._setMinWidth();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props;
      var adjustMinWidth = _props.adjustMinWidth;
      var label = _props.label;
      var placeholder = _props.placeholder;

      if (nextProps.adjustMinWidth && (label !== nextProps.label || placeholder !== nextProps.label || !adjustMinWidth)) {
        this._setMinWidth();
      } else if (adjustMinWidth && !nextProps.adjustMinWidth) {
        this.setState({ minWidth: null });
      }
    }
  }, {
    key: '_getValue',
    value: function _getValue(props, state) {
      return typeof props.value === 'undefined' ? state.value : props.value;
    }

    /**
     * This is a helper method to focus the text field since the text field is nested
     * in some containers. This will allow the following to work:
     *
     * ```js
     * this.refs.textField.focus();
     * ```
     *
     * Because of the containers and the positioning of the text field, the following will
     * *not* work:
     *
     * ```js
     * ReactDOM.findDOMNode(this.refs.textFeld).focus();
     * ```
     */

  }, {
    key: 'focus',
    value: function focus() {
      if (!this.textField) {
        this.textField = (0, _reactDom.findDOMNode)(this.refs.textField || this.refs.textarea);
      }

      this.textField.focus();
    }
  }, {
    key: '_handleFocus',
    value: function _handleFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }

      this.setState({ active: true });
    }
  }, {
    key: '_handleBlur',
    value: function _handleBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }

      this.setState({ active: false });
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(e) {
      var reset = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
      var _props2 = this.props;
      var onChange = _props2.onChange;
      var rows = _props2.rows;
      var maxRows = _props2.maxRows;

      var value = reset ? '' : e.target.value;
      if (onChange) {
        onChange(value, e);
      }

      if (typeof this.props.value !== 'undefined') {
        return null;
      } else if (!rows || !maxRows) {
        return this.setState({ value: value });
      }

      var state = { value: value };

      var textarea = this.refs.textarea;
      var offsetHeight = textarea.offsetHeight;
      var scrollHeight = textarea.scrollHeight;
      var currentRows = this.state.currentRows;
      var areaHeight = this.state.areaHeight;


      var moreRows = maxRows !== -1 && currentRows >= maxRows;
      var noScroll = scrollHeight <= (typeof areaHeight === 'number' && areaHeight || offsetHeight);
      if (noScroll || moreRows) {
        return this.setState(state);
      }

      currentRows++;
      state.currentRows = currentRows;
      state.areaHeight = scrollHeight;
      return this.setState(state);
    }
  }, {
    key: '_togglePasswordField',
    value: function _togglePasswordField() {
      this.setState({ passwordVisible: !this.state.passwordVisible });
    }
  }, {
    key: '_setMinWidth',
    value: function _setMinWidth() {
      var _props3 = this.props;
      var placeholder = _props3.placeholder;
      var label = _props3.label;
      var _refs = this.refs;
      var textarea = _refs.textarea;
      var textField = _refs.textField;
      var floatingLabel = _refs.floatingLabel;

      var canvas = document.createElement('canvas');
      canvas.className = 'md-text-field';
      var context = canvas.getContext('2d');

      var minWidth = void 0;
      if (context) {
        context.font = window.getComputedStyle(textarea || textField).getPropertyValue('font');

        minWidth = Math.max(floatingLabel ? (0, _reactDom.findDOMNode)(floatingLabel).offsetWidth : 0, placeholder ? context.measureText(placeholder).width : 0, !floatingLabel ? context.measureText(label).width : 0);

        if (minWidth) {
          minWidth += 12;
        }
      }

      this.setState({ minWidth: minWidth });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var active = _state.active;
      var currentRows = _state.currentRows;
      var areaHeight = _state.areaHeight;
      var passwordVisible = _state.passwordVisible;
      var minWidth = _state.minWidth;
      var _props4 = this.props;
      var style = _props4.style;
      var className = _props4.className;
      var inputStyle = _props4.inputStyle;
      var inputClassName = _props4.inputClassName;
      var label = _props4.label;
      var placeholder = _props4.placeholder;
      var maxLength = _props4.maxLength;
      var helpText = _props4.helpText;
      var errorText = _props4.errorText;
      var floatingLabel = _props4.floatingLabel;
      var icon = _props4.icon;
      var rightIcon = _props4.rightIcon;
      var passwordIconChildren = _props4.passwordIconChildren;
      var passwordIconClassName = _props4.passwordIconClassName;
      var lineDirection = _props4.lineDirection;
      var rows = _props4.rows;
      var maxRows = _props4.maxRows;
      var disabled = _props4.disabled;
      var required = _props4.required;
      var helpOnFocus = _props4.helpOnFocus;
      var block = _props4.block;
      var fullWidth = _props4.fullWidth;
      var type = _props4.type;
      var id = _props4.id;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['style', 'className', 'inputStyle', 'inputClassName', 'label', 'placeholder', 'maxLength', 'helpText', 'errorText', 'floatingLabel', 'icon', 'rightIcon', 'passwordIconChildren', 'passwordIconClassName', 'lineDirection', 'rows', 'maxRows', 'disabled', 'required', 'helpOnFocus', 'block', 'fullWidth', 'type', 'id']);


      delete props.defaultValue;
      delete props.value;
      delete props.onBlur;
      delete props.onChange;
      delete props.onFocus;
      delete props.adjustMinWidth;

      var value = this._getValue(this.props, this.state);
      var error = !!errorText || !!maxLength && value.length > maxLength;
      var multiline = typeof rows === 'number';
      var useFloatingLabel = floatingLabel && !block;

      var fontIcon = void 0;
      if (icon) {
        fontIcon = _react2.default.cloneElement(icon, {
          className: (0, _classnames2.default)('md-text-field-icon', {
            disabled: disabled,
            active: active,
            error: error,
            'with-floating-label': useFloatingLabel,
            'normal': !!value
          })
        });
      }

      var indIcon = void 0;
      if (rightIcon) {
        indIcon = _react2.default.cloneElement(rightIcon, {
          className: (0, _classnames2.default)('md-text-field-ind', {
            'single-line': !useFloatingLabel
          })
        });
      } else if (type === 'password') {
        indIcon = (0, _jsx3.default)('button', {
          type: 'button',
          onClick: this._togglePasswordField,
          className: (0, _classnames2.default)('md-password-btn', {
            'active': passwordVisible,
            'multi-line': useFloatingLabel,
            'single-line': !useFloatingLabel
          })
        }, void 0, (0, _jsx3.default)(_FontIcons2.default, {
          iconClassName: passwordIconClassName,
          children: passwordIconChildren
        }));
      }

      var textFieldMessage = void 0;
      if (errorText || maxLength || helpText) {
        textFieldMessage = (0, _jsx3.default)(_TextFieldMessage2.default, {
          value: value,
          error: error,
          helpOnFocus: helpOnFocus,
          active: active,
          message: errorText || helpText,
          maxLength: maxLength,
          className: icon ? 'icon-offset' : null
        });
      }

      var textFieldProps = (0, _extends3.default)({}, props, {
        id: id,
        className: (0, _classnames2.default)('md-text-field', inputClassName, {
          active: active,
          block: block,
          'floating-label': useFloatingLabel,
          'single-line': !useFloatingLabel && !multiline,
          'multi-line': multiline,
          'full-width': fullWidth,
          'with-icon': rightIcon
        }),
        disabled: disabled,
        onBlur: this._handleBlur,
        onChange: this._handleChange,
        onFocus: this._handleFocus,
        value: value
      });

      var textField = void 0;
      if (multiline) {
        var areaStyle = inputStyle ? Object.assign({}, inputStyle) : {};
        if (maxRows) {
          if (currentRows < maxRows || maxRows === -1) {
            areaStyle.overflow = 'hidden';
          }

          if (areaHeight) {
            areaStyle.height = areaHeight;
          }
        }

        var visiblePlaceholder = void 0;
        if (active || !useFloatingLabel || block) {
          visiblePlaceholder = placeholder || label;

          if (required && visiblePlaceholder.indexOf('*') === -1) {
            visiblePlaceholder = visiblePlaceholder.trim() + ' *';
          }
        }

        textField = _react2.default.createElement('textarea', (0, _extends3.default)({}, textFieldProps, {
          placeholder: visiblePlaceholder,
          ref: 'textarea',
          rows: rows,
          style: areaStyle
        }));
      } else {
        var _visiblePlaceholder = void 0;
        if (!useFloatingLabel) {
          _visiblePlaceholder = placeholder || label;

          if (required && _visiblePlaceholder.indexOf('*') === -1) {
            _visiblePlaceholder = _visiblePlaceholder.trim() + ' *';
          }
        } else if (active || !!value) {
          _visiblePlaceholder = placeholder;
        }

        textField = _react2.default.createElement('input', (0, _extends3.default)({}, textFieldProps, {
          ref: 'textField',
          type: passwordVisible ? 'text' : type,
          style: Object.assign({ minWidth: minWidth }, inputStyle),
          placeholder: _visiblePlaceholder
        }));
      }

      var floatingLabelEl = void 0;
      if (useFloatingLabel && label) {
        floatingLabelEl = _react2.default.createElement(_FloatingLabel2.default, {
          ref: 'floatingLabel',
          label: label,
          active: active,
          error: error,
          required: required,
          value: value,
          disabled: disabled
        });
      }

      var textDivider = void 0;
      if (!block) {
        textDivider = (0, _jsx3.default)(_TextDivider2.default, {
          icon: !!icon,
          active: active,
          error: error,
          lineDirection: lineDirection
        });
      }

      return (0, _jsx3.default)('div', {
        style: style,
        className: (0, _classnames2.default)('md-text-field-container', className, {
          disabled: disabled,
          block: block,
          'multi-line': multiline,
          'full-width': fullWidth,
          'with-message': helpText || errorText
        })
      }, void 0, (0, _jsx3.default)('label', {
        className: 'md-text-field-label',
        htmlFor: id
      }, void 0, fontIcon, floatingLabelEl, textField, indIcon, textDivider), textFieldMessage);
    }
  }]);
  return TextField;
}(_react.PureComponent);

TextField.propTypes = {
  /**
   * An optional className to apply to the text field container.
   */
  className: _react.PropTypes.string,

  /**
   * An optional className to apply to the input field iteself.
   */
  inputClassName: _react.PropTypes.string,

  /**
   * A valid text field type. This should be one of the valid html5 input types.
   *
   * > If the text field is a multiline text field, it will not be applied because
   * > the main text field will be a `textarea`.
   */
  type: _react.PropTypes.string.isRequired,

  /**
   * A label to display with the text field. If the text field is set to be
   * a single line text field, this will automatically be used as the placeholder
   * text if there is no `placeholder` prop given.
   */
  label: _react.PropTypes.string,

  /**
   * An optional placeholder to display along with the floating label.
   */
  placeholder: _react.PropTypes.string,

  /**
   * An optional value to set in the text field. This will make the component
   * controlled and require the `onChange` prop to be set.
   */
  value: valueType,

  /**
   * A default value to use for the text field.
   */
  defaultValue: valueType,

  /**
   * The number of rows to display by default. This will convert the text field
   * into a multiline text field.
   */
  rows: _react.PropTypes.number,

  /**
   * The maximum number of rows that can be displayed in a multiline text field.
   * The text field will continue to expand in height until this value is met.
   * Settings this value to `-1` will allow the text field to expand infinitely.
   */
  maxRows: _react.PropTypes.number,

  /**
   * An optional error text to display below the text field. If this value is `trueish`,
   * the icon, label, and text field didivder will be styled with the error color.
   */
  errorText: _react.PropTypes.string,

  /**
   * An optional help text to display below the text field.
   */
  helpText: _react.PropTypes.string,

  /**
   * A boolean if the help text should only be displayed on focus.
   */
  helpOnFocus: _react.PropTypes.bool,

  /**
   * The max length for the text field. If this prop is set, it will automatically
   * add a counter below the text field.
   */
  maxLength: _react.PropTypes.number,

  /**
   * Boolean if the label for the text field should float. Settings this to false
   * will make a single line text field.
   */
  floatingLabel: _react.PropTypes.bool,

  /**
   * An optional icon to display to the left of the text field.
   */
  icon: _react.PropTypes.node,

  /**
   * An optional icon to display to the right of the text field.
   */
  rightIcon: _react.PropTypes.node,

  /**
   * An optional function to call when the text field is blurred.
   */
  onBlur: _react.PropTypes.func,

  /**
   * An optional function to call when the text field's value has changed.
   * The callback will be `onChange(newValue, event)`.
   */
  onChange: _react.PropTypes.func,

  /**
   * An optional function to call when the text field gains focus.
   */
  onFocus: _react.PropTypes.func,

  /**
   * An optional function to call when the text field's value has changed.
   * It is similar to `onChange` except that it triggers immediately after
   * the value has changed while `onChange` happens on blur and after the
   * content has updated. You most likely want to use `onChange`.
   */
  onInput: _react.PropTypes.func,

  /**
   * An optional function to call when a required text field is submitted in
   * a form without any value.
   */
  onInvalid: _react.PropTypes.func,

  /**
   * An optional function to call when a user has pressed a key down.
   */
  onKeyDown: _react.PropTypes.func,

  /**
   * An optional function to call when a user has pressed and released a key.
   */
  onKeyPress: _react.PropTypes.func,

  /**
   * An optional function to call when a user has released a key.
   */
  onKeyUp: _react.PropTypes.func,

  /**
   * An optional function to call when text in the text field has been selected.
   */
  onSelect: _react.PropTypes.func,

  /**
   * An optional function to call when the text field is clicked.
   */
  onClick: _react.PropTypes.func,

  /**
   * Optional style to apply to the text field container.
   */
  style: _react.PropTypes.object,

  /**
   * Optional style to apply to the text field input itself.
   */
  inputStyle: _react.PropTypes.object,

  /**
   * The direction that the text field divider expands from when the text field
   * gains focus.
   */
  lineDirection: _react.PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * Boolean if the text field is required.
   */
  required: _react.PropTypes.bool,

  /**
   * An optional boolean if the text field is disabaled.
   */
  disabled: _react.PropTypes.bool,

  /**
   * Boolean if the text field is read only.
   */
  readOnly: _react.PropTypes.bool,

  /**
   * An optional size for the text field.
   */
  size: _react.PropTypes.number,

  /**
   * Boolean if this text field should be styled as a full width text field.
   * Floating labels and the text field indicator will be removed automatically.
   */
  block: _react.PropTypes.bool,

  /**
   * Boolean if the this text field should span the full width of a parent.
   */
  fullWidth: _react.PropTypes.bool,

  /**
   * Any children used to render the password icon button.
   */
  passwordIconChildren: _react.PropTypes.node,

  /**
   * Any icon className to use to render the password icon button.
   */
  passwordIconClassName: _react.PropTypes.string,

  /**
   * Boolean if the min-width for the text field should automatically be adjusted
   * to be the max of the placeholder text or label text width.
   */
  adjustMinWidth: _react.PropTypes.bool.isRequired,

  /**
   * An optional id for the text field.
   */
  id: _react.PropTypes.string
};
TextField.defaultProps = {
  type: 'text',
  defaultValue: '',
  floatingLabel: true,
  lineDirection: 'left',
  passwordIconChildren: 'remove_red_eye',
  adjustMinWidth: false
};
exports.default = TextField;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(23);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `TextFieldMessage` component is used for rendering a help or error text message
 * under a `TextField`. It can also be used to display a counter of remaining characters.
 */
var TextFieldMessage = function (_PureComponent) {
  (0, _inherits3.default)(TextFieldMessage, _PureComponent);

  function TextFieldMessage() {
    (0, _classCallCheck3.default)(this, TextFieldMessage);
    return (0, _possibleConstructorReturn3.default)(this, (TextFieldMessage.__proto__ || Object.getPrototypeOf(TextFieldMessage)).apply(this, arguments));
  }

  (0, _createClass3.default)(TextFieldMessage, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var value = _props.value;
      var message = _props.message;
      var maxLength = _props.maxLength;
      var error = _props.error;
      var active = _props.active;
      var helpOnFocus = _props.helpOnFocus;
      var className = _props.className;

      var isMessageVisible = !!message && (!helpOnFocus || active);

      var counter = void 0;
      if (maxLength) {
        counter = (0, _jsx3.default)('span', {
          className: 'md-text-field-counter'
        }, void 0, value.length + ' / ' + maxLength);
      }

      return (0, _jsx3.default)(_reactAddonsCssTransitionGroup2.default, {
        component: 'div',
        transitionName: 'opacity',
        transitionEnterTimeout: 150,
        transitionLeaveTimeout: 150,
        className: (0, _classnames2.default)('md-text-field-message', className, {
          error: error,
          'count-only': !message || !isMessageVisible
        })
      }, void 0, isMessageVisible && (0, _jsx3.default)('span', {}, 'message', message), counter);
    }
  }]);
  return TextFieldMessage;
}(_react.PureComponent);

TextFieldMessage.propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
  message: _react.PropTypes.string,
  maxLength: _react.PropTypes.number,
  error: _react.PropTypes.bool.isRequired,
  active: _react.PropTypes.bool.isRequired,
  helpOnFocus: _react.PropTypes.bool,
  className: _react.PropTypes.string
};
exports.default = TextFieldMessage;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Toolbar = __webpack_require__(85);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Toolbar2.default;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _injectTooltip = __webpack_require__(176);

var _injectTooltip2 = _interopRequireDefault(_injectTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _injectTooltip2.default;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _keyCodes = __webpack_require__(30);

var _utils = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DESKTOP_FONT_SIZE = 10;
var DESKTOP_MARGIN = 14;
var MOBILE_MARGIN = 24;

/**
 * Takes any component and injects a tooltip when the user hovers
 * over the component or touch holds it on a mobile device. It also
 * injects the event listeners and a `tooltip` prop to be added to
 * the `ComposedComponent`.
 *
 * If the `tooltipLabel` prop is omitted, the tooltip and event listeners will not
 * be included.
 *
 * ```js
 * @param ComposedComponent the component to compose with the tooltip functionality.
 * @return the ComposedComponent with a tooltip.
 * ```
 */

exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_PureComponent) {
    (0, _inherits3.default)(Tooltip, _PureComponent);

    function Tooltip(props) {
      (0, _classCallCheck3.default)(this, Tooltip);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

      _this.state = {
        style: null,
        textStyle: null,
        active: false,
        tabActive: false,
        touch: false,
        timeout: null
      };

      _this._setActive = _this._setActive.bind(_this);
      _this._setInactive = _this._setInactive.bind(_this);
      _this._calcPositioningStyle = _this._calcPositioningStyle.bind(_this);
      _this._hackChromeMinimumFontSize = _this._hackChromeMinimumFontSize.bind(_this);
      _this._handleBlur = _this._handleBlur.bind(_this);
      _this._handleKeyUp = _this._handleKeyUp.bind(_this);
      _this._handleMouseOver = _this._handleMouseOver.bind(_this);
      _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
      _this._handleTouchEnd = _this._handleTouchEnd.bind(_this);
      _this._handleTouchStart = _this._handleTouchStart.bind(_this);
      return _this;
    }

    (0, _createClass3.default)(Tooltip, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.tooltipLabel) {
          this._hackChromeMinimumFontSize();
          window.addEventListener('resize', this._hackChromeMinimumFontSize);
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var tooltipLabel = this.props.tooltipLabel;

        if (tooltipLabel === prevProps.tooltipLabel) {
          return;
        }

        if (tooltipLabel) {
          window.addEventListener('resize', this._hackChromeMinimumFontSize);
        } else {
          window.removeEventListener('resize', this._hackChromeMinimumFontSize);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.tooltipLabel) {
          window.removeEventListener('resize', this._hackChromeMinimumFontSize);
        }

        if (this.state.touchTimeout) {
          clearTimeout(this.state.touchTimeout);
        }
      }

      /**
       * Prevent the context menu from appearing on touch hold.
       */

    }, {
      key: '_preventContext',
      value: function _preventContext(e) {
        e.preventDefault();
      }

      /**
       * Chrome doesn't allow a font-size below 12px.
       * You used to be able to use -webkit-text-size-adjust: none
       * but they have dropped support for that.
       *
       * So now the solution is to scale the text if chrome only..
       */

    }, {
      key: '_hackChromeMinimumFontSize',
      value: function _hackChromeMinimumFontSize() {
        var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        var fontSize = parseInt(window.getComputedStyle(this.refs.tooltipText).getPropertyValue('font-size'), 10);

        var touch = (0, _utils.isTouchDevice)();
        var state = { touch: touch };
        if (isChrome && !touch) {
          var transform = 'scale(' + DESKTOP_FONT_SIZE / fontSize + ')';
          state.textStyle = {
            WebkitTransform: transform,
            transform: transform,
            transformOrigin: '51% 50%' };
        }

        this.setState(state);
      }
    }, {
      key: '_calcPositioningStyle',
      value: function _calcPositioningStyle() {
        var tooltipPosition = this.props.tooltipPosition;

        var margin = this.state.touch ? MOBILE_MARGIN : DESKTOP_MARGIN;
        var control = (0, _reactDom.findDOMNode)(this);
        var controlHeight = control.offsetHeight;
        var controlWidth = control.offsetWidth;
        var tooltip = this.refs.tooltip;

        var tooltipWidth = tooltip.offsetWidth;
        var tooltipHeight = tooltip.offsetHeight;

        var top = void 0;
        var right = void 0;
        var bottom = void 0;
        var left = void 0;
        if (tooltipPosition === 'top' || tooltipPosition === 'bottom') {
          left = controlWidth / 2 - tooltipWidth / 2;
        } else {
          // LEFT || RIGHT
          top = controlHeight / 2 - tooltipHeight / 2;
        }

        switch (tooltipPosition) {
          case 'top':
            top = -(tooltipHeight + margin);
            break;
          case 'right':
            left = controlWidth + margin;
            break;
          case 'bottom':
            top = margin + controlHeight;
            break;
          default:
            left = -(tooltipWidth + margin);
        }

        return {
          top: top,
          right: right,
          bottom: bottom,
          left: left
        };
      }
    }, {
      key: '_setActive',
      value: function _setActive(key) {
        var _this2 = this;

        if (!this.props.tooltipLabel || this.state.timeout) {
          return;
        }

        var timeout = setTimeout(function () {
          var _this2$setState;

          _this2.setState((_this2$setState = {}, (0, _defineProperty3.default)(_this2$setState, key, true), (0, _defineProperty3.default)(_this2$setState, 'style', _this2._calcPositioningStyle()), (0, _defineProperty3.default)(_this2$setState, 'timeout', null), _this2$setState));
        }, this.props.tooltipDelay);

        this.setState({ timeout: timeout });
      }
    }, {
      key: '_setInactive',
      value: function _setInactive(key) {
        var _setState;

        if (!this.props.tooltipLabel) {
          return;
        }

        if (this.state.timeout) {
          clearTimeout(this.state.timeout);
        }

        this.setState((_setState = {}, (0, _defineProperty3.default)(_setState, key, false), (0, _defineProperty3.default)(_setState, 'timeout', null), _setState));
      }
    }, {
      key: '_handleMouseOver',
      value: function _handleMouseOver(e) {
        if (this.props.onMouseOver) {
          this.props.onMouseOver(e);
        }
        if (this.state.touch) {
          return;
        }

        this._setActive('active');
      }
    }, {
      key: '_handleMouseLeave',
      value: function _handleMouseLeave(e) {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(e);
        }
        if (this.state.touch) {
          return;
        }

        this._setInactive('active');
      }
    }, {
      key: '_handleKeyUp',
      value: function _handleKeyUp(e) {
        if (this.props.onKeyUp) {
          this.props.onKeyUp(e);
        }
        if (this.state.touch || (e.which || e.keyCode) !== _keyCodes.TAB) {
          return;
        }

        this._setActive('tabActive');
      }
    }, {
      key: '_handleBlur',
      value: function _handleBlur(e) {
        if (this.props.onBlur) {
          this.props.onBlur(e);
        }
        if (this.state.touch) {
          return;
        }

        this._setInactive('tabActive');
      }
    }, {
      key: '_handleTouchStart',
      value: function _handleTouchStart(e) {
        var _this3 = this;

        if (this.props.onTouchStart) {
          this.props.onTouchStart(e);
        }
        if (!this.props.tooltipLabel) {
          return;
        }

        window.addEventListener('contextmenu', this._preventContext);
        this.setState({
          touchTimeout: setTimeout(function () {
            _this3.setState({
              touchTimeout: null,
              style: _this3._calcPositioningStyle(),
              active: true
            });
          }, this.props.tooltipTouchTimeout)
        });
      }
    }, {
      key: '_handleTouchEnd',
      value: function _handleTouchEnd(e) {
        if (this.props.onTouchEnd) {
          this.props.onTouchEnd(e);
        }
        if (!this.props.tooltipLabel) {
          return;
        }
        window.removeEventListener('contextmenu', this._preventContext);
        if (this.state.touchTimeout) {
          clearTimeout(this.state.touchTimeout);
        }

        this.setState({ touchTimeout: null, active: false });
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state;
        var style = _state.style;
        var active = _state.active;
        var tabActive = _state.tabActive;
        var textStyle = _state.textStyle;
        var _props = this.props;
        var tooltipLabel = _props.tooltipLabel;
        var tooltipPosition = _props.tooltipPosition;
        var props = (0, _objectWithoutProperties3.default)(_props, ['tooltipLabel', 'tooltipPosition']);

        delete props.tooltipDelay;
        delete props.tooltipTouchTimeout;

        if (!tooltipLabel) {
          return _react2.default.createElement(ComposedComponent, props);
        }

        var tooltip = _react2.default.createElement(
          'div',
          {
            key: 'tooltip',
            ref: 'tooltip',
            className: (0, _classnames2.default)('md-tooltip md-tooltip-bottom', { 'active': active || tabActive }),
            'aria-hidden': !active && !tabActive,
            style: style
          },
          _react2.default.createElement(
            'span',
            { ref: 'tooltipText', className: 'md-tooltip-text', style: textStyle },
            tooltipLabel
          )
        );

        return _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, props, {
          tooltip: tooltip,
          onMouseOver: this._handleMouseOver,
          onMouseLeave: this._handleMouseLeave,
          onKeyUp: this._handleKeyUp,
          onBlur: this._handleBlur,
          onTouchStart: this._handleTouchStart,
          onTouchEnd: this._handleTouchEnd
        }));
      }
    }]);
    return Tooltip;
  }(_react.PureComponent), _class.propTypes = {
    /**
     * The tooltip to display.
     */
    tooltipLabel: _react.PropTypes.string,

    /**
     * The position of the tooltip relative to the `ComposedComponent`.
     */
    tooltipPosition: _react.PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,

    /**
     * The delay before the tooltip appears or disappears.
     */
    tooltipDelay: _react.PropTypes.number.isRequired,

    /**
     * The timeout to use for displaying the tooltip when using a touch device.
     */
    tooltipTouchTimeout: _react.PropTypes.number.isRequired,

    /**
     * An optional onKeyUp function to call along with the tooltip creation onKeyUp.
     */
    onKeyUp: _react.PropTypes.func,

    /**
     * An optional onBlur function to call along with the tooltip creation onBlur.
     */
    onBlur: _react.PropTypes.func,

    /**
     * An optional onMouseOver function to call along with the tooltip creation onMouseOver.
     */
    onMouseOver: _react.PropTypes.func,

    /**
     * An optional onMouseLeave function to call along with the tooltip creation onMouseLeave.
     */
    onMouseLeave: _react.PropTypes.func,

    /**
     * An optional onTouchStart function to call along with the tooltip creation onTouchStart.
     */
    onTouchStart: _react.PropTypes.func,

    /**
     * An optional onTouchEnd function to call along with the tooltip creation onTouchEnd.
     */
    onTouchEnd: _react.PropTypes.func
  }, _class.defaultProps = {
    tooltipPosition: 'bottom',
    tooltipDelay: 0,
    tooltipTouchTimeout: 500
  }, _temp;
};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Height = undefined;

var _Height2 = __webpack_require__(61);

var _Height3 = _interopRequireDefault(_Height2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Height = _Height3.default;

/***/ },
/* 178 */
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

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _style = __webpack_require__(312);

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
/* 179 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hero = __webpack_require__(178);

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Hero2.default;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createValueFromString = exports.createEmptyValue = exports.decorator = exports.EditorValue = undefined;

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(348);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classAutobind = __webpack_require__(32);

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _draftJs = __webpack_require__(22);

var _getDefaultKeyBinding = __webpack_require__(346);

var _getDefaultKeyBinding2 = _interopRequireDefault(_getDefaultKeyBinding);

var _isSoftNewlineEvent = __webpack_require__(347);

var _isSoftNewlineEvent2 = _interopRequireDefault(_isSoftNewlineEvent);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _draftJsUtils = __webpack_require__(51);

var _changeBlockDepth = __webpack_require__(186);

var _changeBlockDepth2 = _interopRequireDefault(_changeBlockDepth);

var _changeBlockType = __webpack_require__(187);

var _changeBlockType2 = _interopRequireDefault(_changeBlockType);

var _insertBlockAfter = __webpack_require__(190);

var _insertBlockAfter2 = _interopRequireDefault(_insertBlockAfter);

var _isListItem = __webpack_require__(191);

var _isListItem2 = _interopRequireDefault(_isListItem);

var _EditorToolbar = __webpack_require__(181);

var _EditorToolbar2 = _interopRequireDefault(_EditorToolbar);

var _EditorValue = __webpack_require__(183);

var _EditorValue2 = _interopRequireDefault(_EditorValue);

var _LinkDecorator = __webpack_require__(184);

var _LinkDecorator2 = _interopRequireDefault(_LinkDecorator);

__webpack_require__(314);

var _BoldrEditor = __webpack_require__(313);

var _BoldrEditor2 = _interopRequireDefault(_BoldrEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// $FlowIssue - Flow doesn't understand CSS Modules
var MAX_LIST_DEPTH = 2;

// Custom overrides for "code" style.

// $FlowIssue - Flow doesn't understand CSS Modules

// import type { ContentBlock } from 'draft-js';

var styleMap = {
  CODE: {
    backgroundColor: '#f3f3f3',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

var BoldrEditor = function (_Component) {
  (0, _inherits3.default)(BoldrEditor, _Component);

  function BoldrEditor() {
    (0, _classCallCheck3.default)(this, BoldrEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BoldrEditor.__proto__ || Object.getPrototypeOf(BoldrEditor)).apply(this, arguments));

    _this._keyEmitter = new _events.EventEmitter();
    (0, _classAutobind2.default)(_this);
    return _this;
  }

  (0, _createClass3.default)(BoldrEditor, [{
    key: '_shouldHidePlaceholder',
    value: function _shouldHidePlaceholder() {
      var editorState = this.props.value.getEditorState();
      var contentState = editorState.getCurrentContent();
      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          return true;
        }
      }
      return false;
    }
  }, {
    key: '_handleReturn',
    value: function _handleReturn(event) {
      if (this._handleReturnSoftNewline(event)) {
        return true;
      }
      if (this._handleReturnEmptyListItem()) {
        return true;
      }
      if (this._handleReturnSpecialBlock()) {
        return true;
      }
      return false;
    }

    // `shift + return` should insert a soft newline.

  }, {
    key: '_handleReturnSoftNewline',
    value: function _handleReturnSoftNewline(event) {
      var editorState = this.props.value.getEditorState();
      if ((0, _isSoftNewlineEvent2.default)(event)) {
        var selection = editorState.getSelection();
        if (selection.isCollapsed()) {
          this._onChange(_draftJs.RichUtils.insertSoftNewline(editorState));
        } else {
          var content = editorState.getCurrentContent();
          var newContent = _draftJs.Modifier.removeRange(content, selection, 'forward');
          var newSelection = newContent.getSelectionAfter();
          var block = newContent.getBlockForKey(newSelection.getStartKey());
          newContent = _draftJs.Modifier.insertText(newContent, newSelection, '\n', block.getInlineStyleAt(newSelection.getStartOffset()), null);
          this._onChange(_draftJs.EditorState.push(editorState, newContent, 'insert-fragment'));
        }
        return true;
      }
      return false;
    }

    // If the cursor is in an empty list item when return is pressed, then the
    // block type should change to normal (end the list).

  }, {
    key: '_handleReturnEmptyListItem',
    value: function _handleReturnEmptyListItem() {
      var editorState = this.props.value.getEditorState();
      var selection = editorState.getSelection();
      if (selection.isCollapsed()) {
        var contentState = editorState.getCurrentContent();
        var blockKey = selection.getStartKey();
        var block = contentState.getBlockForKey(blockKey);
        if ((0, _isListItem2.default)(block) && block.getLength() === 0) {
          var depth = block.getDepth();
          var newState = depth === 0 ? (0, _changeBlockType2.default)(editorState, blockKey, _draftJsUtils.BLOCK_TYPE.UNSTYLED) : (0, _changeBlockDepth2.default)(editorState, blockKey, depth - 1);
          this._onChange(newState);
          return true;
        }
      }
      return false;
    }

    // If the cursor is at the end of a special block (any block type other than
    // normal or list item) when return is pressed, new block should be normal.

  }, {
    key: '_handleReturnSpecialBlock',
    value: function _handleReturnSpecialBlock() {
      var editorState = this.props.value.getEditorState();
      var selection = editorState.getSelection();
      if (selection.isCollapsed()) {
        var contentState = editorState.getCurrentContent();
        var blockKey = selection.getStartKey();
        var block = contentState.getBlockForKey(blockKey);
        if (!(0, _isListItem2.default)(block) && block.getType() !== _draftJsUtils.BLOCK_TYPE.UNSTYLED) {
          // If cursor is at end.
          if (block.getLength() === selection.getStartOffset()) {
            var newEditorState = (0, _insertBlockAfter2.default)(editorState, blockKey, _draftJsUtils.BLOCK_TYPE.UNSTYLED);
            this._onChange(newEditorState);
            return true;
          }
        }
      }
      return false;
    }
  }, {
    key: '_onTab',
    value: function _onTab(event) {
      var editorState = this.props.value.getEditorState();
      var newEditorState = _draftJs.RichUtils.onTab(event, editorState, MAX_LIST_DEPTH);
      if (newEditorState !== editorState) {
        this._onChange(newEditorState);
      }
    }
  }, {
    key: '_customKeyHandler',
    value: function _customKeyHandler(event) {
      // Allow toolbar to catch key combinations.
      var eventFlags = {};
      this._keyEmitter.emit('keypress', event, eventFlags);
      if (eventFlags.wasHandled) {
        return null;
      } else {
        return (0, _getDefaultKeyBinding2.default)(event);
      }
    }
  }, {
    key: '_handleKeyCommand',
    value: function _handleKeyCommand(command) {
      var editorState = this.props.value.getEditorState();
      var newEditorState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newEditorState) {
        this._onChange(newEditorState);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: '_onChange',
    value: function _onChange(editorState) {
      var _props = this.props;
      var onChange = _props.onChange;
      var value = _props.value; // eslint-disable-line

      if (onChange !== null) {
        var newValue = value.setEditorState(editorState);
        onChange(newValue);
      }
    }
  }, {
    key: '_focus',
    value: function _focus() {
      this.refs.editor.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx;

      var _props2 = this.props;
      var value = _props2.value;
      var className = _props2.className;
      var editorClassName = _props2.editorClassName;
      var placeholder = _props2.placeholder;
      var otherProps = (0, _objectWithoutProperties3.default)(_props2, ['value', 'className', 'editorClassName', 'placeholder']);
      var _props3 = this.props;
      var toolbarClassName = _props3.toolbarClassName;
      var customStyleMap = _props3.customStyleMap;

      var editorState = value.getEditorState();
      customStyleMap = customStyleMap ? (0, _extends3.default)({}, styleMap, customStyleMap) : styleMap;

      // If the user changes block type before entering any text, we can either
      // style the placeholder or hide it. Let's just hide it for now.
      var combinedEditorClassName = (0, _classnames2.default)((_cx = {}, (0, _defineProperty3.default)(_cx, _BoldrEditor2.default.editor, true), (0, _defineProperty3.default)(_cx, _BoldrEditor2.default.hidePlaceholder, this._shouldHidePlaceholder()), _cx), editorClassName);
      return (0, _jsx3.default)('div', {
        className: (0, _classnames2.default)(_BoldrEditor2.default.root, className)
      }, void 0, (0, _jsx3.default)(_EditorToolbar2.default, {
        className: toolbarClassName,
        keyEmitter: this._keyEmitter,
        editorState: editorState,
        onChange: this._onChange,
        focusEditor: this._focus
      }), (0, _jsx3.default)('div', {
        className: combinedEditorClassName
      }, void 0, _react2.default.createElement(_draftJs.Editor, (0, _extends3.default)({}, otherProps, {
        blockStyleFn: getBlockStyle,
        customStyleMap: customStyleMap,
        editorState: editorState,
        handleReturn: this._handleReturn,
        keyBindingFn: this._customKeyHandler,
        handleKeyCommand: this._handleKeyCommand,
        onTab: this._onTab,
        onChange: this._onChange,
        placeholder: placeholder,
        ref: 'editor',
        spellCheck: true
      }))));
    }
  }]);
  return BoldrEditor;
}(_react.Component);

exports.default = BoldrEditor;


function getBlockStyle(block) {
  var result = _BoldrEditor2.default.block;
  switch (block.getType()) {
    case 'unstyled':
      return (0, _classnames2.default)(result, _BoldrEditor2.default.paragraph);
    case 'blockquote':
      return (0, _classnames2.default)(result, _BoldrEditor2.default.blockquote);
    case 'code-block':
      return (0, _classnames2.default)(result, _BoldrEditor2.default.codeBlock);
    default:
      return result;
  }
}

var decorator = new _draftJs.CompositeDecorator([_LinkDecorator2.default]);

function createEmptyValue() {
  return _EditorValue2.default.createEmpty(decorator);
}

function createValueFromString(markup, format) {
  return _EditorValue2.default.createFromString(markup, format, decorator);
}

// $FlowIssue - This should probably not be done this way.
Object.assign(BoldrEditor, {
  EditorValue: _EditorValue2.default,
  decorator: decorator,
  createEmptyValue: createEmptyValue,
  createValueFromString: createValueFromString
});

exports.EditorValue = _EditorValue2.default;
exports.decorator = decorator;
exports.createEmptyValue = createEmptyValue;
exports.createValueFromString = createValueFromString;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _KeyBindingUtil = __webpack_require__(345);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _draftJs = __webpack_require__(22);

var _draftJsUtils = __webpack_require__(51);

var _classAutobind = __webpack_require__(32);

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _PopoverIconButton = __webpack_require__(196);

var _PopoverIconButton2 = _interopRequireDefault(_PopoverIconButton);

var _ButtonGroup = __webpack_require__(87);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Dropdown = __webpack_require__(194);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _IconButton = __webpack_require__(46);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _EditorToolbarConfig = __webpack_require__(182);

var _StyleButton = __webpack_require__(185);

var _StyleButton2 = _interopRequireDefault(_StyleButton);

var _getEntityAtCursor2 = __webpack_require__(189);

var _getEntityAtCursor3 = _interopRequireDefault(_getEntityAtCursor2);

var _clearEntityForRange = __webpack_require__(188);

var _clearEntityForRange2 = _interopRequireDefault(_clearEntityForRange);

var _EditorToolbar = __webpack_require__(315);

var _EditorToolbar2 = _interopRequireDefault(_EditorToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorToolbar = function (_Component) {
  (0, _inherits3.default)(EditorToolbar, _Component);

  function EditorToolbar() {
    (0, _classCallCheck3.default)(this, EditorToolbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditorToolbar.__proto__ || Object.getPrototypeOf(EditorToolbar)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    _this.state = {
      showLinkInput: false
    };
    return _this;
  }

  (0, _createClass3.default)(EditorToolbar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // Technically, we should also attach/detach event listeners when the
      // `keyEmitter` prop changes.
      this.props.keyEmitter.on('keypress', this._onKeypress);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.keyEmitter.removeListener('keypress', this._onKeypress);
    }
  }, {
    key: '_renderBlockTypeDropdown',
    value: function _renderBlockTypeDropdown() {
      var blockType = this._getCurrentBlockType();
      var choices = new Map(_EditorToolbarConfig.BLOCK_TYPE_DROPDOWN.map(function (type) {
        return [type.style, type.label];
      }));
      if (!choices.has(blockType)) {
        blockType = Array.from(choices.keys())[0];
      }
      return (0, _jsx3.default)(_ButtonGroup2.default, {}, void 0, (0, _jsx3.default)(_Dropdown2.default, {
        choices: choices,
        selectedKey: blockType,
        onChange: this._selectBlockType
      }));
    }
  }, {
    key: '_renderBlockTypeButtons',
    value: function _renderBlockTypeButtons() {
      var _this2 = this;

      var blockType = this._getCurrentBlockType();
      var buttons = _EditorToolbarConfig.BLOCK_TYPE_BUTTONS.map(function (type, index) {
        return (0, _jsx3.default)(_StyleButton2.default, {
          isActive: type.style === blockType,
          label: type.label,
          onToggle: _this2._toggleBlockType,
          style: type.style
        }, String(index));
      });
      return (0, _jsx3.default)(_ButtonGroup2.default, {}, void 0, buttons);
    }
  }, {
    key: '_renderInlineStyleButtons',
    value: function _renderInlineStyleButtons() {
      var _this3 = this;

      var editorState = this.props.editorState;

      var currentStyle = editorState.getCurrentInlineStyle();
      var buttons = _EditorToolbarConfig.INLINE_STYLE_BUTTONS.map(function (type, index) {
        return (0, _jsx3.default)(_StyleButton2.default, {
          isActive: currentStyle.has(type.style),
          label: type.label,
          onToggle: _this3._toggleInlineStyle,
          style: type.style
        }, String(index));
      });
      return (0, _jsx3.default)(_ButtonGroup2.default, {}, void 0, buttons);
    }
  }, {
    key: '_renderLinkButtons',
    value: function _renderLinkButtons() {
      var editorState = this.props.editorState;

      var selection = editorState.getSelection();
      var entity = this._getEntityAtCursor();
      var hasSelection = !selection.isCollapsed();
      var isCursorOnLink = entity !== null && entity.type === _draftJsUtils.ENTITY_TYPE.LINK;
      var shouldShowLinkButton = hasSelection || isCursorOnLink;
      return (0, _jsx3.default)(_ButtonGroup2.default, {}, void 0, (0, _jsx3.default)(_PopoverIconButton2.default, {
        label: 'Link',
        iconName: 'link',
        isDisabled: !shouldShowLinkButton,
        showPopover: this.state.showLinkInput,
        onTogglePopover: this._toggleShowLinkInput,
        onSubmit: this._setLink
      }), (0, _jsx3.default)(_IconButton2.default, {
        label: 'Remove Link',
        iconName: 'remove-link',
        isDisabled: !isCursorOnLink,
        onClick: this._removeLink,
        focusOnClick: false
      }));
    }
  }, {
    key: '_renderUndoRedo',
    value: function _renderUndoRedo() {
      var editorState = this.props.editorState;

      var canUndo = editorState.getUndoStack().size !== 0;
      var canRedo = editorState.getRedoStack().size !== 0;
      return (0, _jsx3.default)(_ButtonGroup2.default, {}, void 0, (0, _jsx3.default)(_IconButton2.default, {
        label: 'Undo',
        iconName: 'undo',
        isDisabled: !canUndo,
        onClick: this._undo,
        focusOnClick: false
      }), (0, _jsx3.default)(_IconButton2.default, {
        label: 'Redo',
        iconName: 'redo',
        isDisabled: !canRedo,
        onClick: this._redo,
        focusOnClick: false
      }));
    }
  }, {
    key: '_onKeypress',
    value: function _onKeypress(event, eventFlags) {
      // Catch cmd+k for use with link insertion.
      if ((0, _KeyBindingUtil.hasCommandModifier)(event) && event.keyCode === 75) {
        // TODO: Ensure there is some text selected.
        this.setState({ showLinkInput: true });
        eventFlags.wasHandled = true;
      }
    }
  }, {
    key: '_toggleShowLinkInput',
    value: function _toggleShowLinkInput(event) {
      var isShowing = this.state.showLinkInput;
      // If this is a hide request, decide if we should focus the editor.
      if (isShowing) {
        var shouldFocusEditor = true;
        if (event && event.type === 'click') {
          // TODO: Use a better way to get the editor root node.
          var editorRoot = _reactDom2.default.findDOMNode(this).parentNode;
          var _document = document;
          var activeElement = _document.activeElement;

          var wasClickAway = activeElement === null || activeElement === document.body;
          if (!wasClickAway && !editorRoot.contains(activeElement)) {
            shouldFocusEditor = false;
          }
        }
        if (shouldFocusEditor) {
          this.props.focusEditor();
        }
      }
      this.setState({ showLinkInput: !isShowing });
    }
  }, {
    key: '_setLink',
    value: function _setLink(url) {
      var editorState = this.props.editorState;

      var selection = editorState.getSelection();
      var entityKey = _draftJs.Entity.create(_draftJsUtils.ENTITY_TYPE.LINK, 'MUTABLE', { url: url });
      this.setState({ showLinkInput: false });
      this.props.onChange(_draftJs.RichUtils.toggleLink(editorState, selection, entityKey));
      this._focusEditor();
    }
  }, {
    key: '_removeLink',
    value: function _removeLink() {
      var editorState = this.props.editorState;

      var entity = (0, _getEntityAtCursor3.default)(editorState);
      if (entity !== null) {
        var blockKey = entity.blockKey;
        var startOffset = entity.startOffset;
        var endOffset = entity.endOffset;

        this.props.onChange((0, _clearEntityForRange2.default)(editorState, blockKey, startOffset, endOffset));
      }
    }
  }, {
    key: '_getEntityAtCursor',
    value: function _getEntityAtCursor() {
      var editorState = this.props.editorState;

      var entity = (0, _getEntityAtCursor3.default)(editorState);
      return entity === null ? null : _draftJs.Entity.get(entity.entityKey);
    }
  }, {
    key: '_getCurrentBlockType',
    value: function _getCurrentBlockType() {
      var editorState = this.props.editorState;

      var selection = editorState.getSelection();
      return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
    }
  }, {
    key: '_selectBlockType',
    value: function _selectBlockType() {
      this._toggleBlockType.apply(this, arguments);
      this._focusEditor();
    }
  }, {
    key: '_toggleBlockType',
    value: function _toggleBlockType(blockType) {
      this.props.onChange(_draftJs.RichUtils.toggleBlockType(this.props.editorState, blockType));
    }
  }, {
    key: '_toggleInlineStyle',
    value: function _toggleInlineStyle(inlineStyle) {
      this.props.onChange(_draftJs.RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle));
    }
  }, {
    key: '_undo',
    value: function _undo() {
      var editorState = this.props.editorState;

      this.props.onChange(_draftJs.EditorState.undo(editorState));
    }
  }, {
    key: '_redo',
    value: function _redo() {
      var editorState = this.props.editorState;

      this.props.onChange(_draftJs.EditorState.redo(editorState));
    }
  }, {
    key: '_focusEditor',
    value: function _focusEditor() {
      var _this4 = this;

      // Hacky: Wait to focus the editor so we don't lose selection.
      setTimeout(function () {
        _this4.props.focusEditor();
      }, 50);
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;

      return (0, _jsx3.default)('div', {
        className: (0, _classnames2.default)(_EditorToolbar2.default.root, className)
      }, void 0, this._renderInlineStyleButtons(), this._renderBlockTypeButtons(), this._renderLinkButtons(), this._renderBlockTypeDropdown(), this._renderUndoRedo());
    }
  }]);
  return EditorToolbar;
}(_react.Component);

// $FlowIssue - Flow doesn't understand CSS Modules


exports.default = EditorToolbar;

/***/ },
/* 182 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INLINE_STYLE_BUTTONS = exports.INLINE_STYLE_BUTTONS = [{ label: 'Bold', style: 'BOLD' }, { label: 'Italic', style: 'ITALIC' }, { label: 'Strikethrough', style: 'STRIKETHROUGH' }, { label: 'Monospace', style: 'CODE' }];

var BLOCK_TYPE_DROPDOWN = exports.BLOCK_TYPE_DROPDOWN = [{ label: 'Normal', style: 'unstyled' }, { label: 'Heading Large', style: 'header-one' }, { label: 'Heading Medium', style: 'header-two' }, { label: 'Heading Small', style: 'header-three' }, { label: 'Code Block', style: 'code-block' }];
var BLOCK_TYPE_BUTTONS = exports.BLOCK_TYPE_BUTTONS = [{ label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }, { label: 'Blockquote', style: 'blockquote' }];

exports.default = {
  INLINE_STYLE_BUTTONS: INLINE_STYLE_BUTTONS,
  BLOCK_TYPE_DROPDOWN: BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS: BLOCK_TYPE_BUTTONS
};

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _draftJs = __webpack_require__(22);

var _draftJsExportHtml = __webpack_require__(343);

var _draftJsImportHtml = __webpack_require__(344);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorValue = function () {
  function EditorValue(editorState) {
    var cache = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    (0, _classCallCheck3.default)(this, EditorValue);

    this._cache = cache;
    this._editorState = editorState;
  }

  (0, _createClass3.default)(EditorValue, [{
    key: 'getEditorState',
    value: function getEditorState() {
      return this._editorState;
    }
  }, {
    key: 'setEditorState',
    value: function setEditorState(editorState) {
      return this._editorState === editorState ? this : new EditorValue(editorState);
    }
  }, {
    key: 'toString',
    value: function toString(format) {
      var fromCache = this._cache[format];
      if (fromCache !== null) {
        return fromCache;
      }
      return this._cache[format] = _toString(this.getEditorState(), format);
    }
  }, {
    key: 'setContentFromString',
    value: function setContentFromString(markup, format) {
      var editorState = _draftJs.EditorState.push(this._editorState, fromString(markup, format), 'secondary-paste');
      return new EditorValue(editorState, (0, _defineProperty3.default)({}, format, markup));
    }
  }], [{
    key: 'createEmpty',
    value: function createEmpty(decorator) {
      var editorState = _draftJs.EditorState.createEmpty(decorator);
      return new EditorValue(editorState);
    }
  }, {
    key: 'createFromState',
    value: function createFromState(editorState) {
      return new EditorValue(editorState);
    }
  }, {
    key: 'createFromString',
    value: function createFromString(markup, format, decorator) {
      var contentState = fromString(markup, format);
      var editorState = _draftJs.EditorState.createWithContent(contentState, decorator);
      return new EditorValue(editorState, (0, _defineProperty3.default)({}, format, markup));
    }
  }]);
  return EditorValue;
}();

exports.default = EditorValue;


function _toString(editorState, format) {
  var contentState = editorState.getCurrentContent();
  switch (format) {
    case 'html':
      {
        return (0, _draftJsExportHtml.stateToHTML)(contentState);
      }
    default:
      {
        throw new Error('Format not supported: ' + format);
      }
  }
}

function fromString(markup, format) {
  switch (format) {
    case 'html':
      {
        return (0, _draftJsImportHtml.stateFromHTML)(markup);
      }
    default:
      {
        throw new Error('Format not supported: ' + format);
      }
  }
}

/***/ },
/* 184 */
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

var _draftJs = __webpack_require__(22);

var _draftJsUtils = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Use a more specific type here.
function Link(props_) {
  var _Entity$get$getData = _draftJs.Entity.get(props_.entityKey).getData();

  var url = _Entity$get$getData.url;

  return (0, _jsx3.default)('a', {
    href: url
  }, void 0, props_.children);
}


function findLinkEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey != null && _draftJs.Entity.get(entityKey).getType() === _draftJsUtils.ENTITY_TYPE.LINK;
  }, callback);
}

exports.default = {
  strategy: findLinkEntities,
  component: Link
};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _IconButton = __webpack_require__(46);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _classAutobind = __webpack_require__(32);

var _classAutobind2 = _interopRequireDefault(_classAutobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleButton = function (_Component) {
  (0, _inherits3.default)(StyleButton, _Component);

  function StyleButton() {
    (0, _classCallCheck3.default)(this, StyleButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StyleButton.__proto__ || Object.getPrototypeOf(StyleButton)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    return _this;
  }

  (0, _createClass3.default)(StyleButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var onToggle = _props.onToggle;
      var otherProps = (0, _objectWithoutProperties3.default)(_props, ['style', 'onToggle']); // eslint-disable-line no-unused-vars

      var iconName = style.toLowerCase();
      // `focusOnClick` will prevent the editor from losing focus when a control
      // button is clicked.
      return _react2.default.createElement(_IconButton2.default, (0, _extends3.default)({}, otherProps, {
        iconName: iconName,
        onClick: this._onClick,
        focusOnClick: false
      }));
    }
  }, {
    key: '_onClick',
    value: function _onClick() {
      this.props.onToggle(this.props.style);
    }
  }]);
  return StyleButton;
}(_react.Component);

exports.default = StyleButton;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeBlockDepth;

var _draftJs = __webpack_require__(22);

function changeBlockDepth(editorState, blockKey, newDepth) {
  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);
  var depth = block.getDepth();
  if (depth === newDepth) {
    return editorState;
  }
  var newBlock = block.set('depth', newDepth);
  var newContent = content.merge({
    blockMap: content.getBlockMap().set(blockKey, newBlock)
  });
  return _draftJs.EditorState.push(editorState, newContent, 'adjust-depth');
}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeBlockType;

var _draftJs = __webpack_require__(22);

function changeBlockType(editorState, blockKey, newType) {
  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);
  var type = block.getType();
  if (type === newType) {
    return editorState;
  }
  var newBlock = block.set('type', newType);
  var newContent = content.merge({
    blockMap: content.getBlockMap().set(blockKey, newBlock)
  });
  return _draftJs.EditorState.push(editorState, newContent, 'change-block-type');
}

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clearEntityForRange;

var _draftJs = __webpack_require__(22);

function clearEntityForRange(editorState, blockKey, startOffset, endOffset) {
  var contentState = editorState.getCurrentContent();
  var blockMap = contentState.getBlockMap();
  var block = blockMap.get(blockKey);
  var charList = block.getCharacterList();
  var newCharList = charList.map(function (char, i) {
    if (i >= startOffset && i < endOffset) {
      return _draftJs.CharacterMetadata.applyEntity(char, null);
    } else {
      return char;
    }
  });
  var newBlock = block.set('characterList', newCharList);
  var newBlockMap = blockMap.set(blockKey, newBlock);
  var newContentState = contentState.set('blockMap', newBlockMap);
  return _draftJs.EditorState.push(editorState, newContentState, 'apply-entity');
}

/***/ },
/* 189 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getEntityAtCursor;
function getEntityAtOffset(block, offset) {
  var entityKey = block.getEntityAt(offset);
  if (entityKey === null) {
    return null;
  }
  var startOffset = offset;
  while (startOffset > 0 && block.getEntityAt(startOffset - 1) === entityKey) {
    startOffset -= 1;
  }
  var endOffset = startOffset;
  var blockLength = block.getLength();
  while (endOffset < blockLength && block.getEntityAt(endOffset + 1) === entityKey) {
    endOffset += 1;
  }
  return {
    entityKey: entityKey,
    blockKey: block.getKey(),
    startOffset: startOffset,
    endOffset: endOffset + 1
  };
}

function getEntityAtCursor(editorState) {
  var selection = editorState.getSelection();
  var startKey = selection.getStartKey();
  var startBlock = editorState.getCurrentContent().getBlockForKey(startKey);
  var startOffset = selection.getStartOffset();
  if (selection.isCollapsed()) {
    // Get the entity before the cursor (unless the cursor is at the start).
    return getEntityAtOffset(startBlock, startOffset === 0 ? startOffset : startOffset - 1);
  }
  if (startKey !== selection.getEndKey()) {
    return null;
  }
  var endOffset = selection.getEndOffset();
  var startEntityKey = startBlock.getEntityAt(startOffset);
  for (var i = startOffset; i < endOffset; i++) {
    var _entityKey = startBlock.getEntityAt(i);
    if (_entityKey === null || _entityKey !== startEntityKey) {
      return null;
    }
  }
  return {
    entityKey: startEntityKey,
    blockKey: startBlock.getKey(),
    startOffset: startOffset,
    endOffset: endOffset
  };
}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = insertBlockAfter;

var _draftJs = __webpack_require__(22);

function insertBlockAfter(editorState, blockKey, newType) {
  var content = editorState.getCurrentContent();
  var blockMap = content.getBlockMap();
  var block = blockMap.get(blockKey);
  var blocksBefore = blockMap.toSeq().takeUntil(function (v) {
    return v === block;
  });
  var blocksAfter = blockMap.toSeq().skipUntil(function (v) {
    return v === block;
  }).rest();
  var newBlockKey = (0, _draftJs.genKey)();
  var newBlock = new _draftJs.ContentBlock({
    key: newBlockKey,
    type: newType,
    text: '',
    characterList: block.getCharacterList().slice(0, 0),
    depth: 0
  });
  var newBlockMap = blocksBefore.concat([[blockKey, block], [newBlockKey, newBlock]], blocksAfter).toOrderedMap();
  var selection = editorState.getSelection();
  var newContent = content.merge({
    blockMap: newBlockMap,
    selectionBefore: selection,
    selectionAfter: selection.merge({
      anchorKey: newBlockKey,
      anchorOffset: 0,
      focusKey: newBlockKey,
      focusOffset: 0,
      isBackward: false
    })
  });
  return _draftJs.EditorState.push(editorState, newContent, 'split-block');
}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isListItem;

var _draftJsUtils = __webpack_require__(51);

function isListItem(block) {
  var blockType = block.getType();
  return blockType === _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM || blockType === _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM;
}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Buttons = __webpack_require__(10);

var _Button = __webpack_require__(316);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Use a more specific type here.
var inStyle = {
  width: '30px',
  minWidth: '30px',
  maxWidth: '40px',
  padding: '8px 4px'
};
// $FlowIssue - Flow doesn't understand CSS Modules

var Button = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);

    // eslint-disable-line
    var _this = (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));

    _this._onMouseDownPreventDefault = _this._onMouseDownPreventDefault.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Button, [{
    key: '_onMouseDownPreventDefault',
    value: function _onMouseDownPreventDefault(event) {
      event.preventDefault();
      var onMouseDown = this.props.onMouseDown;

      if (onMouseDown != null) {
        // eslint-disable-line
        onMouseDown(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var className = props.className;
      var isDisabled = props.isDisabled;
      var focusOnClick = props.focusOnClick;
      var formSubmit = props.formSubmit;
      var otherProps = (0, _objectWithoutProperties3.default)(props, ['className', 'isDisabled', 'focusOnClick', 'formSubmit']); // eslint-disable-line

      className = (0, _classnames2.default)(className, _Button2.default.root);
      var onMouseDown = focusOnClick === false ? this._onMouseDownPreventDefault : props.onMouseDown;
      var type = formSubmit ? 'submit' : 'button';
      return _react2.default.createElement(
        _Buttons.FlatButton,
        (0, _extends3.default)({ type: type }, otherProps, { style: inStyle,
          onMouseDown: onMouseDown, className: className, disabled: isDisabled
        }),
        props.children
      );
    }
  }]);
  return Button;
}(_react.Component);

exports.default = Button;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = ButtonWrap;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonWrap = __webpack_require__(318);

var _ButtonWrap2 = _interopRequireDefault(_ButtonWrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonWrap(props) {
  var className = (0, _classnames2.default)(props.className, _ButtonWrap2.default.root);
  return _react2.default.createElement('div', (0, _extends3.default)({}, props, { className: className }));
}

// $FlowIssue - Flow doesn't understand CSS Modules

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _slicedToArray2 = __webpack_require__(97);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _classAutobind = __webpack_require__(32);

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _Dropdown = __webpack_require__(319);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function (_Component) {
  (0, _inherits3.default)(Dropdown, _Component);

  function Dropdown() {
    (0, _classCallCheck3.default)(this, Dropdown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [{
    key: '_onChange',
    value: function _onChange(event) {
      var value = event.target.value;
      this.props.onChange(value);
    }
  }, {
    key: '_renderChoices',
    value: function _renderChoices() {
      var choices = this.props.choices;

      var entries = Array.from(choices.entries());
      return entries.map(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

        var key = _ref2[0];
        var text = _ref2[1];
        return (0, _jsx3.default)('option', {
          value: key
        }, key, text);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var choices = _props.choices;
      var selectedKey = _props.selectedKey;
      var className = _props.className;
      var otherProps = (0, _objectWithoutProperties3.default)(_props, ['choices', 'selectedKey', 'className']); // eslint-disable-line

      className = (0, _classnames2.default)(className, _Dropdown2.default.root);
      var selectedValue = selectedKey === null ? '' : choices.get(selectedKey);
      return (0, _jsx3.default)('span', {
        className: className,
        title: selectedValue
      }, void 0, _react2.default.createElement(
        'select',
        (0, _extends3.default)({}, otherProps, { value: selectedKey, onChange: this._onChange }),
        this._renderChoices()
      ), (0, _jsx3.default)('span', {
        className: _Dropdown2.default.value
      }, void 0, selectedValue));
    }
  }]);
  return Dropdown;
}(_react.Component);

// $FlowIssue - Flow doesn't understand CSS Modules


exports.default = Dropdown;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _classAutobind = __webpack_require__(32);

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _IconButton = __webpack_require__(46);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ButtonGroup = __webpack_require__(87);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _InputPopover = __webpack_require__(321);

var _InputPopover2 = _interopRequireDefault(_InputPopover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputPopover = function (_Component) {
  (0, _inherits3.default)(InputPopover, _Component);

  function InputPopover() {
    (0, _classCallCheck3.default)(this, InputPopover);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputPopover.__proto__ || Object.getPrototypeOf(InputPopover)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    return _this;
  }

  (0, _createClass3.default)(InputPopover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this._onDocumentClick);
      document.addEventListener('keydown', this._onDocumentKeydown);
      if (this._inputRef) {
        this._inputRef.focus();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this._onDocumentClick);
      document.removeEventListener('keydown', this._onDocumentKeydown);
    }
  }, {
    key: '_setInputRef',
    value: function _setInputRef(inputElement) {
      this._inputRef = inputElement;
    }
  }, {
    key: '_onInputKeyPress',
    value: function _onInputKeyPress(event) {
      if (event.which === 13) {
        // Avoid submitting a <form> somewhere up the element tree.
        event.preventDefault();
        this._onSubmit();
      }
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit() {
      var value = this._inputRef ? this._inputRef.value : '';
      this.props.onSubmit(value);
    }
  }, {
    key: '_onDocumentClick',
    value: function _onDocumentClick(event) {
      var rootNode = _reactDom2.default.findDOMNode(this);
      if (!rootNode.contains(event.target)) {
        // Here we pass the event so the parent can manage focus.
        this.props.onCancel(event);
      }
    }
  }, {
    key: '_onDocumentKeydown',
    value: function _onDocumentKeydown(event) {
      if (event.keyCode === 27) {
        this.props.onCancel();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      var className = (0, _classnames2.default)(props.className, _InputPopover2.default.root);
      return (0, _jsx3.default)('div', {
        className: className
      }, void 0, (0, _jsx3.default)('div', {
        className: _InputPopover2.default.inner
      }, void 0, _react2.default.createElement('input', {
        ref: this._setInputRef,
        type: 'text',
        placeholder: 'https://example.com/',
        className: _InputPopover2.default.input,
        onKeyPress: this._onInputKeyPress
      }), (0, _jsx3.default)(_ButtonGroup2.default, {
        className: _InputPopover2.default.buttonGroup
      }, void 0, (0, _jsx3.default)(_IconButton2.default, {
        label: 'Cancel',
        iconName: 'cancel',
        onClick: props.onCancel
      }), (0, _jsx3.default)(_IconButton2.default, {
        label: 'Submit',
        iconName: 'accept',
        onClick: this._onSubmit
      }))));
    }
  }]);
  return InputPopover;
}(_react.Component);

// $FlowIssue - Flow doesn't understand CSS Modules


exports.default = InputPopover;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classAutobind = __webpack_require__(32);

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _IconButton = __webpack_require__(46);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _InputPopover = __webpack_require__(195);

var _InputPopover2 = _interopRequireDefault(_InputPopover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoverIconButton = function (_Component) {
  (0, _inherits3.default)(PopoverIconButton, _Component);

  function PopoverIconButton() {
    (0, _classCallCheck3.default)(this, PopoverIconButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PopoverIconButton.__proto__ || Object.getPrototypeOf(PopoverIconButton)).apply(this, arguments));

    (0, _classAutobind2.default)(_this);
    return _this;
  }

  (0, _createClass3.default)(PopoverIconButton, [{
    key: '_renderPopover',
    value: function _renderPopover() {
      if (!this.props.showPopover) {
        return null;
      }
      return (0, _jsx3.default)(_InputPopover2.default, {
        onSubmit: this._onSubmit,
        onCancel: this._hidePopover
      });
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit() {
      var _props;

      (_props = this.props).onSubmit.apply(_props, arguments);
    }
  }, {
    key: '_hidePopover',
    value: function _hidePopover() {
      if (this.props.showPopover) {
        var _props2;

        (_props2 = this.props).onTogglePopover.apply(_props2, arguments);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var showPopover = this.props.showPopover;
      var _props3 = this.props;
      var onTogglePopover = _props3.onTogglePopover;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['onTogglePopover']); // eslint-disable-line no-unused-vars

      return _react2.default.createElement(
        _IconButton2.default,
        (0, _extends3.default)({}, props, { onClick: onTogglePopover }),
        this._renderPopover()
      );
    }
  }]);
  return PopoverIconButton;
}(_react.Component);

exports.default = PopoverIconButton;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(100);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Col = function (_PureComponent) {
  (0, _inherits3.default)(Col, _PureComponent);

  function Col() {
    (0, _classCallCheck3.default)(this, Col);
    return (0, _possibleConstructorReturn3.default)(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  (0, _createClass3.default)(Col, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var ComponentClass = this.props.componentClass;

      var classes = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, 'grid__col--xs' + ((0, _lodash.isNumber)(this.props.xs) ? '-' + this.props.xs : ''), this.props.xs >= 0), (0, _defineProperty3.default)(_classNames, 'grid__col--sm' + ((0, _lodash.isNumber)(this.props.sm) ? '-' + this.props.sm : ''), this.props.sm >= 0), (0, _defineProperty3.default)(_classNames, 'grid__col--md' + ((0, _lodash.isNumber)(this.props.md) ? '-' + this.props.md : ''), this.props.md >= 0), (0, _defineProperty3.default)(_classNames, 'grid__col--lg' + ((0, _lodash.isNumber)(this.props.lg) ? '-' + this.props.lg : ''), this.props.lg >= 0), (0, _defineProperty3.default)(_classNames, 'grid__col--xs-offset-' + this.props.xsOffset, this.props.xsOffset >= 0), (0, _defineProperty3.default)(_classNames, 'grid__col--sm-offset-' + this.props.smOffset, this.props.smOffset >= 0), (0, _defineProperty3.default)(_classNames, 'grid__col--md-offset-' + this.props.mdOffset, this.props.mdOffset >= 0), (0, _defineProperty3.default)(_classNames, 'grid__col--lg-offset-' + this.props.lgOffset, this.props.lgOffset >= 0), (0, _defineProperty3.default)(_classNames, 'grid__col--reverse', this.props.reverse), (0, _defineProperty3.default)(_classNames, 'grid__col--xs-first', this.props.xsFirst), (0, _defineProperty3.default)(_classNames, 'grid__col--sm-first', this.props.smFirst), (0, _defineProperty3.default)(_classNames, 'grid__col--md-first', this.props.mdFirst), (0, _defineProperty3.default)(_classNames, 'grid__col--lg-first', this.props.lgFirst), (0, _defineProperty3.default)(_classNames, 'grid__col--xs-last', this.props.xsLast), (0, _defineProperty3.default)(_classNames, 'grid__col--sm-last', this.props.smLast), (0, _defineProperty3.default)(_classNames, 'grid__col--md-last', this.props.mdLast), (0, _defineProperty3.default)(_classNames, 'grid__col--lg-last', this.props.lgLast), _classNames), this.props.className);

      return (0, _jsx3.default)(ComponentClass, {
        className: classes,
        style: this.props.style
      }, void 0, this.props.children);
    }
  }]);
  return Col;
}(_react.PureComponent);

Col.propTypes = {
  className: _react2.default.PropTypes.string,
  style: _react2.default.PropTypes.object,
  children: _react2.default.PropTypes.node,

  xs: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
  sm: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
  md: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
  lg: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.bool]),

  xsOffset: _react2.default.PropTypes.number,
  smOffset: _react2.default.PropTypes.number,
  mdOffset: _react2.default.PropTypes.number,
  lgOffset: _react2.default.PropTypes.number,

  reverse: _react2.default.PropTypes.bool,

  xsFirst: _react2.default.PropTypes.bool,
  smFirst: _react2.default.PropTypes.bool,
  mdFirst: _react2.default.PropTypes.bool,
  lgFirst: _react2.default.PropTypes.bool,

  xsLast: _react2.default.PropTypes.bool,
  smLast: _react2.default.PropTypes.bool,
  mdLast: _react2.default.PropTypes.bool,
  lgLast: _react2.default.PropTypes.bool
};

Col.defaultProps = {
  componentClass: 'div'
};

exports.default = Col;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function (_PureComponent) {
  (0, _inherits3.default)(Grid, _PureComponent);

  function Grid() {
    (0, _classCallCheck3.default)(this, Grid);
    return (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  (0, _createClass3.default)(Grid, [{
    key: 'render',
    value: function render() {
      var ComponentClass = this.props.componentClass;

      var classes = (0, _classnames2.default)({ grid: !this.props.fluid,
        'grid--fluid': this.props.fluid
      }, this.props.className);

      return (0, _jsx3.default)(ComponentClass, {
        className: classes,
        style: this.props.style
      }, void 0, this.props.children);
    }
  }]);
  return Grid;
}(_react.PureComponent);

Grid.propTypes = {
  fluid: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  style: _react2.default.PropTypes.object,
  children: _react2.default.PropTypes.node
};

Grid.defaultProps = {
  componentClass: 'div'
};

exports.default = Grid;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function (_PureComponent) {
  (0, _inherits3.default)(Row, _PureComponent);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'render',
    value: function render() {
      var ComponentClass = this.props.componentClass;

      var classes = (0, _classnames2.default)({
        'grid__row': true,
        'grid__row--reverse': this.props.reverse,

        'grid__row--xs-start': this.props.xsStart,
        'grid__row--sm-start': this.props.smStart,
        'grid__row--md-start': this.props.mdStart,
        'grid__row--lg-start': this.props.lgStart,

        'grid__row--xs-center': this.props.xsCenter,
        'grid__row--sm-center': this.props.smCenter,
        'grid__row--md-center': this.props.mdCenter,
        'grid__row--lg-center': this.props.lgCenter,

        'grid__row--xs-end': this.props.xsEnd,
        'grid__row--sm-end': this.props.smEnd,
        'grid__row--md-end': this.props.mdEnd,
        'grid__row--lg-end': this.props.lgEnd,

        'grid__row--xs-top': this.props.xsTop,
        'grid__row--sm-top': this.props.smTop,
        'grid__row--md-top': this.props.mdTop,
        'grid__row--lg-top': this.props.lgTop,

        'grid__row--xs-middle': this.props.xsMiddle,
        'grid__row--sm-middle': this.props.smMiddle,
        'grid__row--md-middle': this.props.mdMiddle,
        'grid__row--lg-middle': this.props.lgMiddle,

        'grid__row--xs-bottom': this.props.xsBottom,
        'grid__row--sm-bottom': this.props.smBottom,
        'grid__row--md-bottom': this.props.mdBottom,
        'grid__row--lg-bottom': this.props.lgBottom,

        'grid__row--xs-around': this.props.xsAround,
        'grid__row--sm-around': this.props.smAround,
        'grid__row--md-around': this.props.mdAround,
        'grid__row--lg-around': this.props.lgAround,

        'grid__row--xs-between': this.props.xsBetween,
        'grid__row--sm-between': this.props.smBetween,
        'grid__row--md-between': this.props.mdBetween,
        'grid__row--lg-between': this.props.lgBetween
      }, this.props.className);

      return (0, _jsx3.default)(ComponentClass, {
        className: classes,
        style: this.props.style
      }, void 0, this.props.children);
    }
  }]);
  return Row;
}(_react.PureComponent);

Row.propTypes = {
  reverse: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  style: _react2.default.PropTypes.object,
  children: _react2.default.PropTypes.node,

  xsStart: _react2.default.PropTypes.bool,
  smStart: _react2.default.PropTypes.bool,
  mdStart: _react2.default.PropTypes.bool,
  lgStart: _react2.default.PropTypes.bool,

  xsCenter: _react2.default.PropTypes.bool,
  smCenter: _react2.default.PropTypes.bool,
  mdCenter: _react2.default.PropTypes.bool,
  lgCenter: _react2.default.PropTypes.bool,

  xsEnd: _react2.default.PropTypes.bool,
  smEnd: _react2.default.PropTypes.bool,
  mdEnd: _react2.default.PropTypes.bool,
  lgEnd: _react2.default.PropTypes.bool,

  xsTop: _react2.default.PropTypes.bool,
  smTop: _react2.default.PropTypes.bool,
  mdTop: _react2.default.PropTypes.bool,
  lgTop: _react2.default.PropTypes.bool,

  xsMiddle: _react2.default.PropTypes.bool,
  smMiddle: _react2.default.PropTypes.bool,
  mdMiddle: _react2.default.PropTypes.bool,
  lgMiddle: _react2.default.PropTypes.bool,

  xsBottom: _react2.default.PropTypes.bool,
  smBottom: _react2.default.PropTypes.bool,
  mdBottom: _react2.default.PropTypes.bool,
  lgBottom: _react2.default.PropTypes.bool,

  xsAround: _react2.default.PropTypes.bool,
  smAround: _react2.default.PropTypes.bool,
  mdAround: _react2.default.PropTypes.bool,
  lgAround: _react2.default.PropTypes.bool,

  xsBetween: _react2.default.PropTypes.bool,
  smBetween: _react2.default.PropTypes.bool,
  mdBetween: _react2.default.PropTypes.bool,
  lgBetween: _react2.default.PropTypes.bool
};

Row.defaultProps = {
  componentClass: 'div'
};

exports.default = Row;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.Col = exports.Row = undefined;

var _Row = __webpack_require__(199);

var _Row2 = _interopRequireDefault(_Row);

var _Col = __webpack_require__(197);

var _Col2 = _interopRequireDefault(_Col);

var _Grid = __webpack_require__(198);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Row = _Row2.default;
exports.Col = _Col2.default;
exports.Grid = _Grid2.default;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _DropdownList = __webpack_require__(206);

var _DropdownList2 = _interopRequireDefault(_DropdownList);

var _DropdownHighlight = __webpack_require__(204);

var _DropdownHighlight2 = _interopRequireDefault(_DropdownHighlight);

var _Dropdown = __webpack_require__(322);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Dropdown2.default);

var Dropdown = function (_Component) {
  (0, _inherits3.default)(Dropdown, _Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
/* 202 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Dropdown = __webpack_require__(201);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Dropdown2.default;

/***/ },
/* 203 */
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

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _DropdownHighlight = __webpack_require__(323);

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
  }, void 0, (0, _jsx3.default)('h5', {
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
/* 204 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _DropdownHighlight = __webpack_require__(203);

var _DropdownHighlight2 = _interopRequireDefault(_DropdownHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DropdownHighlight2.default;

/***/ },
/* 205 */
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

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _DropdownListItem = __webpack_require__(208);

var _DropdownListItem2 = _interopRequireDefault(_DropdownListItem);

var _DropdownList = __webpack_require__(324);

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
/* 206 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _DropdownList = __webpack_require__(205);

var _DropdownList2 = _interopRequireDefault(_DropdownList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DropdownList2.default;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _DropdownListItem = __webpack_require__(325);

var _DropdownListItem2 = _interopRequireDefault(_DropdownListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_DropdownListItem2.default);

var DropdownListItem = function (_Component) {
  (0, _inherits3.default)(DropdownListItem, _Component);

  function DropdownListItem() {
    (0, _classCallCheck3.default)(this, DropdownListItem);
    return (0, _possibleConstructorReturn3.default)(this, (DropdownListItem.__proto__ || Object.getPrototypeOf(DropdownListItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(DropdownListItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var hasArrow = _props.hasArrow;
      var parentClass = _props.parentClass;
      var highlightHandler = _props.highlightHandler;
      var item = _props.item;
      var closeDropdowns = _props.closeDropdowns;

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
      }, void 0, (0, _jsx3.default)('span', {
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
/* 208 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _DropdownListItem = __webpack_require__(207);

var _DropdownListItem2 = _interopRequireDefault(_DropdownListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DropdownListItem2.default;

/***/ },
/* 209 */
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

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _FontIcon = __webpack_require__(77);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Head = __webpack_require__(326);

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Head2.default);

var _ref2 = (0, _jsx3.default)(_FontIcon2.default, {}, void 0, 'menu');

var Head = function Head(_ref) {
  var toggleDropdownHandler = _ref.toggleDropdownHandler;
  var logo = _ref.logo;
  var siteName = _ref.siteName;
  var dropdownOpen = _ref.dropdownOpen;
  var theme = _ref.theme;
  var closeHeaderDropdown = _ref.closeHeaderDropdown;
  return (0, _jsx3.default)('div', {
    className: cx('head', 'theme-dark', {
      dropdownOpen: dropdownOpen
    })
  }, void 0, (0, _jsx3.default)('button', {
    className: cx('toggleButton', 'collapsed', { closeButton: dropdownOpen }),
    onClick: toggleDropdownHandler
  }, void 0, _ref2), (0, _jsx3.default)('a', {
    href: '/',
    rel: 'home',
    className: cx('logo'),
    onClick: closeHeaderDropdown
  }, void 0, logo ? (0, _jsx3.default)('img', {
    src: logo,
    alt: 'logo',
    height: '50px'
  }) : (0, _jsx3.default)('h1', {
    className: cx('brand')
  }, void 0, siteName)));
};

Head.propTypes = {
  toggleDropdownHandler: _react.PropTypes.func,
  dropdownOpen: _react.PropTypes.bool,
  theme: _react.PropTypes.string,
  closeHeaderDropdown: _react.PropTypes.func,
  logo: _react.PropTypes.string,
  siteName: _react.PropTypes.string
};

exports.default = Head;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Head = __webpack_require__(209);

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Head2.default;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _redux = __webpack_require__(40);

var _reactRouter = __webpack_require__(34);

var _reactRedux = __webpack_require__(9);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Buttons = __webpack_require__(10);

var _Lists = __webpack_require__(79);

var _Menus = __webpack_require__(80);

var _Menus2 = _interopRequireDefault(_Menus);

var _menuItems = __webpack_require__(337);

var _menuItems2 = _interopRequireDefault(_menuItems);

var _boldr = __webpack_require__(50);

var _Head = __webpack_require__(210);

var _Head2 = _interopRequireDefault(_Head);

var _Item = __webpack_require__(214);

var _Item2 = _interopRequireDefault(_Item);

var _Header = __webpack_require__(327);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Header2.default);
var kebabMenu = 'more_vert';

var authLinks = (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)(_reactRouter.Link, {
  to: '/profile'
}, void 0, (0, _jsx3.default)(_Lists.ListItem, {
  primaryText: 'Profile'
})), (0, _jsx3.default)(_reactRouter.Link, {
  to: '/account/preferences'
}, void 0, (0, _jsx3.default)(_Lists.ListItem, {
  primaryText: 'Preferences'
})), (0, _jsx3.default)(_Lists.ListItem, {
  primaryText: 'Sign out'
}));
var unAuthLinks = (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)(_reactRouter.Link, {
  to: '/account/login'
}, void 0, (0, _jsx3.default)(_Lists.ListItem, {
  primaryText: 'Log In'
})), (0, _jsx3.default)(_reactRouter.Link, {
  to: '/account/signup'
}, void 0, (0, _jsx3.default)(_Lists.ListItem, {
  primaryText: 'Sign Up'
})));

var _ref = (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'settings');

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.setHeightDropdown = function () {
      var height = _this.state.mobileState ? window.innerHeight - 75 + 'px' : '';
      _this.refs.dropdownContent.style.height = height;
    };

    _this.handleResize = function () {
      var mobileState = window.innerWidth < _this.props.breakpoint;
      _this.setState({ mobileState: mobileState }, function () {
        _this.addOverflowBody();
        _this.setHeightDropdown();
      });
    };

    _this.navbarDropdownHandler = function () {
      _this.setState({ navbarDropdownIsOpen: !_this.state.navbarDropdownIsOpen }, _this.addOverflowBody);
    };

    _this.closeDropdownOnButtonClick = function (callback) {
      return function (event) {
        var isMobile = _this.state.mobileState;
        var isDropdownOpen = _this.state.navbarDropdownIsOpen;

        if (callback) callback(event);
        if (isMobile && isDropdownOpen) _this.navbarDropdownHandler();
      };
    };

    _this.handleKeyDown = function (e) {
      // Only enable focusable elements on key tab pressed
      if (e.keyCode !== 9 || _this.state.focusable) return;
      _this.setState({ focusable: true });
    };

    _this.toggleAuth = function () {
      _this.setState({ authOpen: !_this.state.authOpen });
    };

    _this.close = function () {
      _this.setState({ authOpen: false });
    };

    _this.state = {
      navbarDropdownIsOpen: false,
      mobileState: true,
      authOpen: false
    };
    return _this;
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

      var renderAuthMenu = (0, _jsx3.default)(_Menus2.default, {
        isOpen: this.state.authOpen,
        close: this.close,
        toggle: (0, _jsx3.default)(_Buttons.IconButton, {
          className: 'header__icon',
          tooltipLabel: 'Account',
          onClick: this.toggleAuth
        }, void 0, kebabMenu)
      }, void 0, this.props.auth.isAuthenticated ? authLinks : unAuthLinks);

      return (0, _jsx3.default)('header', {
        className: cx('header', 'theme-dark', className, {
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
        logo: this.props.boldr.logo,
        siteName: this.props.boldr.siteName,
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
        style: { listStyleType: 'none', display: 'flex', alignItems: 'right' }
      }, void 0, (0, _jsx3.default)('li', {}, void 0, renderAuthMenu), this.props.auth.user.roleId > 2 ? (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactRouter.Link, {
        to: '/dashboard'
      }, void 0, (0, _jsx3.default)(_Buttons.IconButton, {
        className: 'header__icon',
        style: { padding: '0' }
      }, void 0, _ref))) : null)))));
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
  handleBurger: _react.PropTypes.func,
  boldr: _react.PropTypes.object
};
Header.defaultProps = {
  className: '',
  children: null,
  theme: 'light',
  menuItems: _menuItems2.default,
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
/* 212 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Header = __webpack_require__(211);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Header2.default;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _Buttons = __webpack_require__(10);

var _Dropdown = __webpack_require__(202);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Item = __webpack_require__(328);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Item2.default);

var Item = function (_Component) {
  (0, _inherits3.default)(Item, _Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
      var mobile = _props.mobile;


      var linkContent = (0, _jsx3.default)(ItemContent, {
        name: item.name,
        childrens: item.childrens,
        theme: 'dark'
      }, item);
      var linkHref = item.href;

      return (0, _jsx3.default)('li', {
        className: cx('item', ['item-' + item.id], 'theme-dark', {
          'is-dropdown-open': this.state.openDropdown
        }),
        onMouseEnter: this.handleDropdown,
        onFocus: this.handleDropdown,
        onMouseLeave: this.handleDropdown,
        onBlur: this.handleDropdown
      }, void 0, linkHref ? (0, _jsx3.default)('a', {
        href: linkHref,
        onClick: this.closeDropdowns,
        className: cx('link')
      }, void 0, (0, _jsx3.default)(_Buttons.FlatButton, {
        label: linkContent
      })) : (0, _jsx3.default)('span', {
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
  closeHeaderDropdown: _react.PropTypes.func,
  mobile: _react.PropTypes.bool
};

exports.default = Item;


var ItemContent = function ItemContent(_ref2) {
  var name = _ref2.name;
  var childrens = _ref2.childrens;
  var theme = _ref2.theme;
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
/* 214 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Item = __webpack_require__(213);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Item2.default;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _superagent = __webpack_require__(24);

var _superagent2 = _interopRequireDefault(_superagent);

var _config = __webpack_require__(17);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  var adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (true) {
    // Prepend host and port of the API server to the path.
    return 'http://' + _config2.default.API_HOST + ':' + (_config2.default.API_PORT + adjustedPath);
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return '/api/v1' + adjustedPath;
}

var ApiClient = function () {
  function ApiClient(req) {
    var _this = this;

    (0, _classCallCheck3.default)(this, ApiClient);

    methods.forEach(function (method) {
      _this[method] = function (path) {
        var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        var params = _ref.params;
        var data = _ref.data;
        var headers = _ref.headers;
        var files = _ref.files;
        var fields = _ref.fields;
        return new Promise(function (resolve, reject) {
          var request = _superagent2.default[method](formatUrl(path));

          if (params) {
            request.query(params);
          }

          if (true && req.get('cookie')) {
            request.set('cookie', req.get('cookie'));
          }

          if (headers) {
            request.set(headers);
          }

          if (_this.token) {
            request.set('Authorization', '' + _this.token);
          }

          if (files) {
            files.forEach(function (file) {
              return request.attach(file.key, file.value);
            });
          }

          if (fields) {
            fields.forEach(function (item) {
              return request.field(item.key, item.value);
            });
          }

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
  }

  (0, _createClass3.default)(ApiClient, [{
    key: 'setJwtToken',
    value: function setJwtToken(token) {
      this.token = token;
    }
  }]);
  return ApiClient;
}();

exports.default = ApiClient;

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _latinize = __webpack_require__(221);

var _latinize2 = _interopRequireDefault(_latinize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

S3Upload.prototype.server = '';
S3Upload.prototype.signingUrl = '/sign-s3';
S3Upload.prototype.fileElement = null;
S3Upload.prototype.files = null;

S3Upload.prototype.onFinishS3Put = function (signResult, file) {
  return console.log('base.onFinishS3Put()', signResult.publicUrl);
};

S3Upload.prototype.preprocess = function (file, next) {
  return console.log('base.preprocess()', file);
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
  var file = this.fileElement;
  this.handleFileSelect(file);
}

S3Upload.prototype.handleFileSelect = function (file) {
  var _this = this;

  console.log('handle file select', this.file);
  var result = [];
  this.preprocess(file, function (processedFile) {
    _this.onProgress(0, 'Waiting', processedFile);
    result.push(_this.uploadFile(processedFile));
    return result;
  });
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
  var _this2 = this;

  var normalizedFileName = file.name.replace(/[!\^`><{}\[\]()*#%'"~|&@:;$=+?\s\\\/\x00-\x1F\x7f’]+/ig, '_').normalize('NFC');

  var fileName = (0, _latinize2.default)(normalizedFileName);
  var queryString = '?objectName=' + fileName + '&contentType=' + encodeURIComponent(file.type);
  if (this.signingUrlQueryParams) {
    (function () {
      var signingUrlQueryParams = _this2.signingUrlQueryParams;
      Object.keys(signingUrlQueryParams).forEach(function (key) {
        var val = signingUrlQueryParams[key];
        queryString += '&' + key + '=' + val;
      });
    })();
  }
  var xhr = this.createCORSRequest('GET', this.server + this.signingUrl + queryString);
  if (this.signingUrlHeaders) {
    (function () {
      var signingUrlHeaders = _this2.signingUrlHeaders;
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
  var _this3 = this;

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
      var uploadRequestHeaders = _this3.uploadRequestHeaders;
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

  if (this.getSignedUrl) {
    return this.getSignedUrl(file, uploadToS3Callback);
  }
  return this.executeOnSignedUrl(file, uploadToS3Callback);
};

S3Upload.prototype.abortUpload = function () {
  this.httprequest && this.httprequest.abort();
};

exports.default = S3Upload;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonHeaders = exports.credentials = exports.processResponse = exports.TOKEN_KEY = exports.API_SETTINGS = exports.API_CATEGORY = exports.API_TAG = exports.API_NAVIGATION = exports.API_MEDIA = exports.API_USERS = exports.API_POSTS = exports.API_AUTH = exports.S3_SIGNING_URL = exports.API_BASE = exports.reducers = exports.createStore = undefined;

var _config = __webpack_require__(17);

var _helpers = __webpack_require__(48);

var _reducers = __webpack_require__(89);

var _reducers2 = _interopRequireDefault(_reducers);

var _createStore = __webpack_require__(88);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createStore = _createStore2.default;
exports.reducers = _reducers2.default;
exports.API_BASE = _config.API_BASE;
exports.S3_SIGNING_URL = _config.S3_SIGNING_URL;
exports.API_AUTH = _config.API_AUTH;
exports.API_POSTS = _config.API_POSTS;
exports.API_USERS = _config.API_USERS;
exports.API_MEDIA = _config.API_MEDIA;
exports.API_NAVIGATION = _config.API_NAVIGATION;
exports.API_TAG = _config.API_TAG;
exports.API_CATEGORY = _config.API_CATEGORY;
exports.API_SETTINGS = _config.API_SETTINGS;
exports.TOKEN_KEY = _config.TOKEN_KEY;
exports.processResponse = _helpers.processResponse;
exports.credentials = _helpers.credentials;
exports.jsonHeaders = _helpers.jsonHeaders;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(97);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = clientMiddleware;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clientMiddleware(client) {
  return function (_ref) {
    var dispatch = _ref.dispatch;
    var getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState);
        }

        var promise = action.promise;
        var types = action.types;
        var rest = (0, _objectWithoutProperties3.default)(action, ['promise', 'types']); // eslint-disable-line no-redeclare

        if (!promise) {
          return next(action);
        }

        var _types = (0, _slicedToArray3.default)(types, 3);

        var REQUEST = _types[0];
        var SUCCESS = _types[1];
        var FAILURE = _types[2];

        next((0, _extends3.default)({}, rest, { type: REQUEST }));

        var _getState = getState();

        var auth = _getState.auth;


        client.setJwtToken(auth.token || null);

        var actionPromise = promise(client, dispatch);
        actionPromise.then(function (result) {
          return next((0, _extends3.default)({}, rest, { result: result, type: SUCCESS }));
        }, function (error) {
          return next((0, _extends3.default)({}, rest, { error: error, type: FAILURE }));
        }).catch(function (error) {
          console.error('MIDDLEWARE ERROR:', error);
          next((0, _extends3.default)({}, rest, { error: error, type: FAILURE }));
        });

        return actionPromise;
      };
    };
  };
}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _redux = __webpack_require__(40);

var _reactRouterRedux = __webpack_require__(18);

var _reduxThunk = __webpack_require__(359);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _helpers = __webpack_require__(220);

var _reducers = __webpack_require__(89);

var _reducers2 = _interopRequireDefault(_reducers);

var _clientMiddleware = __webpack_require__(218);

var _clientMiddleware2 = _interopRequireDefault(_clientMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * createStore
 *
 * @param {Object} data     Initial state for store
 * @param {Object} history  the browser history
 * @param {Object} client   The client api middleware
 * @return {Object} Returns store with state
 */
function createStore(history, client, PRELOAD_STATE) {
  // Sync dispatched route actions to the history
  var reduxRouterMiddleware = (0, _reactRouterRedux.routerMiddleware)(history);
  var middleware = [(0, _clientMiddleware2.default)(client), _reduxThunk2.default, reduxRouterMiddleware];

  var finalCreateStore = _redux.applyMiddleware.apply(undefined, middleware)(_redux.createStore);

  var store = finalCreateStore(_reducers2.default, PRELOAD_STATE);

  return store;
}

/***/ },
/* 220 */
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
/* 221 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

var _typeof2 = __webpack_require__(339);

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
/* 222 */
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

var _reactHelmet = __webpack_require__(33);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _components = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
  title: 'Home'
}), (0, _jsx3.default)(_components.Header, {
  theme: 'dark'
}), (0, _jsx3.default)(_components.Hero, {}), (0, _jsx3.default)(_components.Grid, {
  fluid: true
}, void 0, (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_components.Heading, {
  size: 1
}, void 0, 'Welcome to the Home. Stay tuned...'))));

var Home = function Home() {
  return _ref;
};

exports.default = Home;

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(222);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Home2.default;

/***/ },
/* 224 */
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

var _reactRedux = __webpack_require__(9);

var _components = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_components.Header, {
  theme: 'dark'
});

var Account = function Account(props) {
  return (0, _jsx3.default)('div', {}, void 0, _ref, props.children);
};

Account.propTypes = {
  children: _react.PropTypes.element.isRequired
};

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr,
    auth: state.auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Account);

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _components = __webpack_require__(12);

var _Cards = __webpack_require__(15);

var _TextFields = __webpack_require__(26);

var _TextFields2 = _interopRequireDefault(_TextFields);

var _Buttons = __webpack_require__(10);

var _inlineStyles = __webpack_require__(19);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _actions = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_components.Heading, {
  size: 1,
  bottom: '10px'
}, void 0, 'Forgot your password?'), 'Enter your email address below to reset it.');

var _ref2 = (0, _jsx3.default)(_Cards.CardActions, {}, void 0, (0, _jsx3.default)(_Buttons.RaisedButton, {
  secondary: true,
  type: 'submit',
  label: 'Reset Password'
}));

var ForgotPassword = function (_Component) {
  (0, _inherits3.default)(ForgotPassword, _Component);

  function ForgotPassword(props) {
    (0, _classCallCheck3.default)(this, ForgotPassword);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ForgotPassword.__proto__ || Object.getPrototypeOf(ForgotPassword)).call(this, props));

    _this.state = { email: '' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleForgot = _this.handleForgot.bind(_this);
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
      this.props.dispatch((0, _actions.forgotPassword)(this.state.email));
    }
  }, {
    key: 'render',
    value: function render() {
      var renderHeader = _ref;
      return (0, _jsx3.default)('div', {
        style: _inlineStyles2.default.headerOverflow
      }, void 0, (0, _jsx3.default)(_components.Grid, {
        fluid: true
      }, void 0, (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_components.Col, {
        xs: 12
      }, void 0, (0, _jsx3.default)(_components.Row, {
        xsCenter: true
      }, void 0, (0, _jsx3.default)(_components.Col, {
        xs: 6
      }, void 0, (0, _jsx3.default)(_Cards.Card, {
        style: { marginTop: '150px' }
      }, void 0, (0, _jsx3.default)('form', {
        onSubmit: this.handleForgot
      }, void 0, renderHeader, (0, _jsx3.default)(_Cards.CardText, {}, void 0, (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_TextFields2.default, {
        type: 'email',
        name: 'email',
        id: 'email',
        floatingLabelText: 'Email address',
        style: _inlineStyles2.default.underlineFocusStyle,
        autoFocus: true,
        value: this.state.email,
        onChange: this.handleChange
      }))), _ref2))))))));
    }
  }]);
  return ForgotPassword;
}(_react.Component);

ForgotPassword.propTypes = {
  dispatch: _react.PropTypes.func.isRequired,
  account: _react.PropTypes.object
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ForgotPassword);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ForgotPassword = __webpack_require__(225);

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ForgotPassword2.default;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _reactHelmet = __webpack_require__(33);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = __webpack_require__(34);

var _Cards = __webpack_require__(15);

var _index = __webpack_require__(12);

var _inlineStyles = __webpack_require__(19);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _actions = __webpack_require__(49);

var _LoginForm = __webpack_require__(228);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_index.Heading, {
  size: 1,
  bottom: '10px'
}, void 0, 'Login'), (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_reactRouter.Link, {
  to: '/account/forgot-password'
}, void 0, 'Forgot your password?'), (0, _jsx3.default)(_reactRouter.Link, {
  to: '/account/signup'
}, void 0, 'Create an account')));

var _ref2 = (0, _jsx3.default)(_reactHelmet2.default, {
  title: 'Login'
});

var Login = function (_Component) {
  (0, _inherits3.default)(Login, _Component);

  function Login(props) {
    (0, _classCallCheck3.default)(this, Login);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Login, [{
    key: 'handleOnSubmit',
    value: function handleOnSubmit(values) {
      var login = this.props.login;

      var loginData = { email: values.email, password: values.password };
      var redir = this.props.redirect;
      login(loginData, redir);
    }
  }, {
    key: 'render',
    value: function render() {
      var renderHeader = _ref;
      var isLoading = this.props.auth.isLoading;


      return (0, _jsx3.default)('div', {
        style: _inlineStyles2.default.headerOverflow
      }, void 0, _ref2, (0, _jsx3.default)(_index.Grid, {
        fluid: true
      }, void 0, (0, _jsx3.default)(_index.Row, {}, void 0, (0, _jsx3.default)(_index.Col, {
        xs: 12
      }, void 0, (0, _jsx3.default)(_index.Row, {
        xsCenter: true
      }, void 0, (0, _jsx3.default)(_index.Col, {
        xs: 6
      }, void 0, (0, _jsx3.default)(_Cards.Card, {
        style: { width: '450px', marginTop: '150px' }
      }, void 0, renderHeader, (0, _jsx3.default)(_LoginForm2.default, {
        onSubmit: this.handleOnSubmit
      }))))))));
    }
  }]);
  return Login;
}(_react.Component);

Login.propTypes = {
  auth: _react.PropTypes.object,
  login: _react.PropTypes.func,
  redirect: _react.PropTypes.string,
  handleOnSubmit: _react.PropTypes.func
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    redirect: ownProps.location.query.redirect
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { login: _actions.login })(Login);

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(29);

var _Cards = __webpack_require__(15);

var _TextFields = __webpack_require__(26);

var _TextFields2 = _interopRequireDefault(_TextFields);

var _Buttons = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderField = function renderField(_ref) {
  var input = _ref.input;
  var label = _ref.label;
  var type = _ref.type;
  var _ref$meta = _ref.meta;
  var touched = _ref$meta.touched;
  var error = _ref$meta.error;
  return (// eslint-disable-line
    (0, _jsx3.default)('div', {}, void 0, _react2.default.createElement(_TextFields2.default, (0, _extends3.default)({
      label: label,
      className: 'md-text-field form__auth',
      type: type
    }, input)))
  );
};

var _ref2 = (0, _jsx3.default)('div', {
  className: 'grid__row'
}, void 0, (0, _jsx3.default)(_reduxForm.Field, {
  name: 'email',
  type: 'email',
  label: 'Email',
  component: renderField
}));

var _ref3 = (0, _jsx3.default)(_Buttons.RaisedButton, {
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
    onSubmit: handleSubmit,
    className: 'card__form'
  }, void 0, _ref2, (0, _jsx3.default)('div', {
    className: 'grid__row'
  }, void 0, (0, _jsx3.default)(_reduxForm.Field, {
    name: 'password',
    label: 'Password',
    type: 'password',
    component: renderField,
    style: { marginBottom: '50px' }
  })), (0, _jsx3.default)(_Cards.CardActions, {
    style: { paddingTop: '75px' }
  }, void 0, _ref3, (0, _jsx3.default)(_Buttons.FlatButton, {
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
/* 229 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Login = __webpack_require__(227);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Login2.default;

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(33);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
  title: 'Account Preferences',
  titleTemplate: '%s | powered by Boldr'
}));

var Preferences = function (_Component) {
  (0, _inherits3.default)(Preferences, _Component);

  function Preferences() {
    (0, _classCallCheck3.default)(this, Preferences);
    return (0, _possibleConstructorReturn3.default)(this, (Preferences.__proto__ || Object.getPrototypeOf(Preferences)).apply(this, arguments));
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
    auth: state.auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Preferences);

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Preferences = __webpack_require__(230);

var _Preferences2 = _interopRequireDefault(_Preferences);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Preferences2.default;

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _Cards = __webpack_require__(15);

var _TextFields = __webpack_require__(26);

var _TextFields2 = _interopRequireDefault(_TextFields);

var _Buttons = __webpack_require__(10);

var _components = __webpack_require__(12);

var _inlineStyles = __webpack_require__(19);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _actions = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_components.Heading, {
  size: 1,
  bottom: '10px'
}, void 0, 'Forgot your password?'), 'Enter your email address below to reset it.');

var _ref2 = (0, _jsx3.default)(_Cards.CardActions, {}, void 0, (0, _jsx3.default)(_Buttons.RaisedButton, {
  secondary: true,
  type: 'submit',
  label: 'Change Password'
}));

var ResetPassword = function (_React$Component) {
  (0, _inherits3.default)(ResetPassword, _React$Component);

  function ResetPassword(props) {
    (0, _classCallCheck3.default)(this, ResetPassword);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ResetPassword.__proto__ || Object.getPrototypeOf(ResetPassword)).call(this, props));

    _this.state = { password: '', confirm: '' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
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
      this.props.dispatch((0, _actions.resetPassword)(this.state.password, this.props.params.token));
    }
  }, {
    key: 'render',
    value: function render() {
      var renderHeader = _ref;
      return (0, _jsx3.default)('div', {
        style: _inlineStyles2.default.headerOverflow
      }, void 0, (0, _jsx3.default)(_components.Grid, {
        fluid: true
      }, void 0, (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_components.Col, {
        xs: 12
      }, void 0, (0, _jsx3.default)(_components.Row, {
        xsCenter: true
      }, void 0, (0, _jsx3.default)(_components.Col, {
        xs: 6
      }, void 0, (0, _jsx3.default)(_Cards.Card, {
        style: { marginTop: '150px' }
      }, void 0, (0, _jsx3.default)('form', {
        onSubmit: this.handleReset
      }, void 0, renderHeader, (0, _jsx3.default)(_Cards.CardText, {}, void 0, (0, _jsx3.default)(_components.Row, {}, void 0, '>', (0, _jsx3.default)(_TextFields2.default, {
        type: 'password',
        name: 'password',
        id: 'password',
        floatingLabelText: 'New password',
        style: _inlineStyles2.default.underlineFocusStyle,
        autoFocus: true,
        value: this.state.password,
        onChange: this.handleChange
      })), (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_TextFields2.default, {
        type: 'password',
        name: 'password',
        id: 'password',
        floatingLabelText: 'Confirm password',
        style: _inlineStyles2.default.underlineFocusStyle,
        value: this.state.confirm,
        onChange: this.handleChange
      }))), _ref2))))))));
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
/* 233 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ResetPassword = __webpack_require__(232);

var _ResetPassword2 = _interopRequireDefault(_ResetPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ResetPassword2.default;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _reactHelmet = __webpack_require__(33);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = __webpack_require__(34);

var _Cards = __webpack_require__(15);

var _components = __webpack_require__(12);

var _inlineStyles = __webpack_require__(19);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _actions = __webpack_require__(49);

var _SignupForm = __webpack_require__(235);

var _SignupForm2 = _interopRequireDefault(_SignupForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_components.Heading, {
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

  function Signup(props) {
    (0, _classCallCheck3.default)(this, Signup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

    _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Signup, [{
    key: 'handleOnSubmit',
    value: function handleOnSubmit(values) {
      var signup = this.props.signup;

      signup({
        email: values.email,
        password: values.password,
        first_name: values.first_name,
        last_name: values.last_name,
        display_name: values.display_name
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var isLoading = this.props.auth.isLoading;


      var renderHeader = _ref;

      return (0, _jsx3.default)('div', {
        style: _inlineStyles2.default.headerOverflow
      }, void 0, _ref2, (0, _jsx3.default)(_components.Grid, {
        fluid: true
      }, void 0, (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_components.Col, {
        xs: 12
      }, void 0, (0, _jsx3.default)(_components.Row, {
        xsCenter: true
      }, void 0, (0, _jsx3.default)(_components.Col, {
        xs: 6
      }, void 0, (0, _jsx3.default)(_Cards.Card, {
        style: { marginTop: '150px' }
      }, void 0, renderHeader, (0, _jsx3.default)(_SignupForm2.default, {
        onSubmit: this.handleOnSubmit
      }))))))));
    }
  }]);
  return Signup;
}(_react.Component);

Signup.propTypes = {
  signup: _react.PropTypes.func,
  handleOnSubmit: _react.PropTypes.func,
  isLoading: _react.PropTypes.bool,
  auth: _react.PropTypes.object
};
function mapStateToProps(_ref3) {
  var auth = _ref3.auth;

  return {
    auth: auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { signup: _actions.signup })(Signup);

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(29);

var _Cards = __webpack_require__(15);

var _TextFields = __webpack_require__(26);

var _TextFields2 = _interopRequireDefault(_TextFields);

var _Buttons = __webpack_require__(10);

var _validate = __webpack_require__(237);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderField = function renderField(_ref) {
  var input = _ref.input;
  var label = _ref.label;
  var type = _ref.type;
  var _ref$meta = _ref.meta;
  var touched = _ref$meta.touched;
  var error = _ref$meta.error;
  return (// eslint-disable-line
    (0, _jsx3.default)('div', {}, void 0, _react2.default.createElement(_TextFields2.default, (0, _extends3.default)({
      label: label,
      className: 'md-text-field',
      type: type
    }, input)))
  );
};

var _ref2 = (0, _jsx3.default)('div', {
  className: 'grid__row'
}, void 0, (0, _jsx3.default)('div', {
  className: 'grid__half'
}, void 0, (0, _jsx3.default)(_reduxForm.Field, {
  name: 'email',
  type: 'email',
  component: renderField,
  label: 'Email address'
})), (0, _jsx3.default)('div', {
  className: 'grid__half'
}, void 0, (0, _jsx3.default)(_reduxForm.Field, {
  name: 'password',
  type: 'password',
  component: renderField,
  label: 'Password'
})));

var _ref3 = (0, _jsx3.default)('div', {
  className: 'grid__row'
}, void 0, (0, _jsx3.default)('div', {
  className: 'grid__half'
}, void 0, (0, _jsx3.default)(_reduxForm.Field, {
  name: 'first_name',
  type: 'text',
  component: renderField,
  label: 'First name'
})), (0, _jsx3.default)('div', {
  className: 'grid__half'
}, void 0, (0, _jsx3.default)(_reduxForm.Field, {
  name: 'last_name',
  type: 'text',
  component: renderField,
  label: 'Last name'
})));

var _ref4 = (0, _jsx3.default)('div', {
  className: 'grid__row'
}, void 0, (0, _jsx3.default)(_reduxForm.Field, {
  name: 'display_name',
  type: 'text',
  component: renderField,
  label: 'Display name'
}));

var _ref5 = (0, _jsx3.default)(_Cards.CardActions, {}, void 0, (0, _jsx3.default)(_Buttons.RaisedButton, {
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
  }, void 0, _ref2, _ref3, _ref4, _ref5);
};

SignupForm.propTypes = {
  handleSubmit: _react.PropTypes.func.isRequired,
  reset: _react.PropTypes.func,
  submitting: _react.PropTypes.bool,
  pristine: _react.PropTypes.bool
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'userSignupForm',
  validate: _validate2.default
})(SignupForm);

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Signup = __webpack_require__(234);

var _Signup2 = _interopRequireDefault(_Signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Signup2.default;

/***/ },
/* 237 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validate = function validate(values) {
  // IMPORTANT: values is an Immutable.Map here!
  var errors = {};
  if (!values.display_name) {
    errors.display_name = 'Required';
  } else if (values.display_name.length > 30) {
    errors.display_name = 'Must be 30 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.first_name) {
    errors.first_name = 'Required';
  }
  return errors;
};

exports.default = validate;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxAuthWrapper = __webpack_require__(68);

var _reactRouterRedux = __webpack_require__(18);

var UserIsAuthenticated = (0, _reduxAuthWrapper.UserAuthWrapper)({
  authSelector: function authSelector(state) {
    return state.auth;
  },
  failureRedirectPath: '/account/login',
  redirectAction: _reactRouterRedux.routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
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

exports.default = function (store, connect) {
  return {

    path: 'account',
    component: __webpack_require__(224).default,
    childRoutes: [{
      path: 'forgot-password',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 226)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'login',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 229)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'preferences',
      onEnter: connect(UserIsAuthenticated.onEnter),
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 231)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'reset-password/:token',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 233)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'signup',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 236)).then(loadModule(cb)).catch(errorLoading);
      }
    }]
  };
};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = authReducer;

var _constants = __webpack_require__(90);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * INITIAL STATE
 */
var INITIAL_STATE = {
  isAuthenticated: false,
  error: null,
  isLoading: false,
  token: null,
  hydrated: false,
  user: {
    display_name: null,
    email: null,
    first_name: null,
    id: null,
    last_name: null,
    avatar_url: null,
    roleId: null,
    role: null
  }
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
    case types.LOGIN_FAILURE:
    case types.FORGOT_PASSWORD_FAILURE:
    case types.CREATE_ACCOUNT_FAILURE:
    case types.RESET_PASSWORD_FAILURE:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        isAuthenticated: false,
        error: action.error
      });
    case types.LOGIN_REQUEST:
    case types.CHECK_AUTH_REQUEST:
    case types.CREATE_ACCOUNT_REQUEST:
    case types.FORGOT_PASSWORD_REQUEST:
    case types.RESET_PASSWORD_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: true,
        isAuthenticated: false
      });
    case types.LOGIN_SUCCESS:
    case types.CHECK_AUTH_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        isAuthenticated: true,
        token: action.token,
        user: {
          display_name: action.user.display_name,
          email: action.user.email,
          first_name: action.user.first_name,
          id: action.user.id,
          last_name: action.user.last_name,
          avatar_url: action.user.avatar_url,
          roleId: action.user.roleId,
          role: action.user.role
        }
      });
    case types.LOGOUT_USER:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        isAuthenticated: false
      });
    case types.CREATE_ACCOUNT_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false
      });
    case types.RESET_PASSWORD_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false
      });
    case types.FORGOT_PASSWORD_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
}

/***/ },
/* 240 */
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

var _reactRedux = __webpack_require__(9);

var _org = __webpack_require__(47);

var _org2 = _interopRequireDefault(_org);

var _inlineStyles = __webpack_require__(19);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _post = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @TODO: set header theme from config file
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)(BlogContainer);


BlogContainer.propTypes = {
  children: _react.PropTypes.element
};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _redial = __webpack_require__(16);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _components = __webpack_require__(12);

var _post = __webpack_require__(28);

var _mol = __webpack_require__(92);

var _mol2 = _interopRequireDefault(_mol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostListing = function (_Component) {
  (0, _inherits3.default)(PostListing, _Component);

  function PostListing() {
    (0, _classCallCheck3.default)(this, PostListing);
    return (0, _possibleConstructorReturn3.default)(this, (PostListing.__proto__ || Object.getPrototypeOf(PostListing)).apply(this, arguments));
  }

  (0, _createClass3.default)(PostListing, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchPostsIfNeeded();
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)(_components.Grid, {
        fluid: true
      }, void 0, (0, _jsx3.default)(_components.Row, {}, void 0, this.props.posts.results.map(function (post) {
        return (0, _jsx3.default)(_components.Col, {
          xs: 12,
          md: 4
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPostsIfNeeded: _post.fetchPostsIfNeeded })(PostListing);


PostListing.propTypes = {
  fetchPostsIfNeeded: _react2.default.PropTypes.func,
  posts: _react2.default.PropTypes.object.isRequired
};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostListing = __webpack_require__(241);

var _PostListing2 = _interopRequireDefault(_PostListing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PostListing2.default;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _redial = __webpack_require__(16);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _atm = __webpack_require__(56);

var _atm2 = _interopRequireDefault(_atm);

var _post = __webpack_require__(28);

var _mol = __webpack_require__(92);

var _mol2 = _interopRequireDefault(_mol);

var _style = __webpack_require__(329);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var Search = function (_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    (0, _classCallCheck3.default)(this, Search);
    return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  (0, _createClass3.default)(Search, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchPostsIfNeeded();
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {
        className: cx('container')
      }, void 0, (0, _jsx3.default)('div', {
        className: cx('post__grid')
      }, void 0, this.props.posts.data.map(function (post) {
        return (0, _jsx3.default)('div', {
          className: cx('post__grid-item')
        }, post.id, _react2.default.createElement(_mol2.default, post));
      })));
    }
  }]);
  return Search;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    isLoading: state.posts.isLoading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPostsIfNeeded: _post.fetchPostsIfNeeded })(Search);


Search.propTypes = {
  fetchPostsIfNeeded: _react2.default.PropTypes.func,
  posts: _react2.default.PropTypes.object.isRequired
};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Search = __webpack_require__(243);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Search2.default;

/***/ },
/* 245 */
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

var _reactRedux = __webpack_require__(9);

var _es = __webpack_require__(354);

var _redial = __webpack_require__(16);

var _components = __webpack_require__(12);

var _Papers = __webpack_require__(39);

var _Papers2 = _interopRequireDefault(_Papers);

var _atm = __webpack_require__(56);

var _atm2 = _interopRequireDefault(_atm);

var _org = __webpack_require__(263);

var _org2 = _interopRequireDefault(_org);

var _mol = __webpack_require__(260);

var _mol2 = _interopRequireDefault(_mol);

var _actions = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redial = {
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch;
    var slug = _ref.params.slug;
    return dispatch((0, _actions.loadPost)(slug));
  }
};

var _ref3 = (0, _jsx3.default)(_atm2.default, {});

var SinglePost = function SinglePost(_ref2) {
  var isLoading = _ref2.isLoading;
  var currentPost = _ref2.currentPost;

  return (0, _jsx3.default)('div', {
    className: 'postbg'
  }, void 0, (0, _jsx3.default)(_components.Grid, {
    fluid: true
  }, void 0, (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_components.Col, {
    xs: 12,
    md: 8,
    lg: 9
  }, void 0, (0, _jsx3.default)(_Papers2.default, {
    zDepth: 2
  }, void 0, isLoading ? _ref3 : _react2.default.createElement(_mol2.default, currentPost))), (0, _jsx3.default)(_components.Col, {
    xs: 12,
    md: 4,
    lg: 3
  }, void 0, _react2.default.createElement(_org2.default, currentPost)))));
};

SinglePost.propTypes = {
  isLoading: _react.PropTypes.bool,
  currentPost: _react.PropTypes.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentPost: state.currentPost,
    isLoading: state.currentPost.isLoading
  };
};

exports.default = (0, _redial.provideHooks)(redial)((0, _reactRedux.connect)(mapStateToProps)(SinglePost));

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SinglePost = __webpack_require__(245);

var _SinglePost2 = _interopRequireDefault(_SinglePost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SinglePost2.default;

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _constants = __webpack_require__(64);

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  isEditing: false,
  isLoading: false,
  error: null,
  title: '',
  slug: '',
  id: '',
  feature_image: '',
  content: '',
  author: {},
  tags: []
};

function currentPost() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case types.LOAD_POST_REQUEST:
    case types.UPDATE_POST_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });
    case types.LOAD_POST_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        title: action.title,
        slug: action.slug,
        id: action.id,
        feature_image: action.feature_image,
        content: action.content,
        author: action.author,
        tags: action.tags
      });
    case types.LOAD_POST_FAILURE:
    case types.UPDATE_POST_FAILURE:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        error: action.error
      });
    case types.CLEAR_CURRENT_POST:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        title: '',
        slug: '',
        id: '',
        feature_image: '',
        content: '',
        author: '',
        tags: ''
      });
    default:
      return state;
  }
}

exports.default = currentPost;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(16);

var _reactRedux = __webpack_require__(9);

var _components = __webpack_require__(12);

var _TagListCard = __webpack_require__(249);

var _TagListCard2 = _interopRequireDefault(_TagListCard);

var _actions = __webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_components.Loader, {});

var TagList = function (_Component) {
  (0, _inherits3.default)(TagList, _Component);

  function TagList() {
    (0, _classCallCheck3.default)(this, TagList);
    return (0, _possibleConstructorReturn3.default)(this, (TagList.__proto__ || Object.getPrototypeOf(TagList)).apply(this, arguments));
  }

  (0, _createClass3.default)(TagList, [{
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_components.Grid, {
        fluid: true
      }, void 0, (0, _jsx3.default)(_components.Row, {}, void 0, this.props.tags.isLoading ? _ref : this.props.tags.posts.map(function (post) {
        return (0, _jsx3.default)(_components.Col, {
          xs: 12,
          md: 4
        }, post.id, _react2.default.createElement(_TagListCard2.default, post));
      }))));
    }
  }]);
  return TagList;
}(_react.Component);

TagList.propTypes = {
  tags: _react.PropTypes.object.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    tags: state.tags,
    isLoading: state.tags.isLoading,
    posts: state.tags.posts
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TagList);

/***/ },
/* 249 */
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

var _reactRouter = __webpack_require__(34);

var _moment = __webpack_require__(67);

var _moment2 = _interopRequireDefault(_moment);

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _mol = __webpack_require__(63);

var _mol2 = _interopRequireDefault(_mol);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Buttons = __webpack_require__(10);

var _Cards = __webpack_require__(15);

var _Avatars = __webpack_require__(35);

var _Avatars2 = _interopRequireDefault(_Avatars);

var _style = __webpack_require__(330);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var _ref = (0, _jsx3.default)(_Buttons.IconButton, {
  className: 'margin-left-auto'
}, void 0, 'star_outline');

var _ref2 = (0, _jsx3.default)(_Buttons.FlatButton, {
  label: 'Read more',
  secondary: true
});

var TagListCard = function TagListCard(props) {
  var formattedDate = (0, _moment2.default)(props.createdAt).format('MMMM Do YYYY, h:mm:ss a');

  var overlay = (0, _jsx3.default)(_Cards.CardTitle, {
    title: props.title,
    subtitle: formattedDate
  }, 'overlay', _ref);
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Cards.Card, {}, void 0, (0, _jsx3.default)(_Cards.CardMedia, {
    overlay: overlay
  }, void 0, (0, _jsx3.default)('img', {
    className: cx('post__card-image'),
    src: props.feature_image,
    height: '350px',
    width: '100%'
  })), (0, _jsx3.default)(_Cards.CardActions, {
    isExpander: true
  }, void 0, (0, _jsx3.default)(_reactRouter.Link, {
    to: '/blog/' + props.slug
  }, void 0, _ref2)), (0, _jsx3.default)(_Cards.CardText, {
    expandable: true
  }, void 0, props.excerpt)));
};

TagListCard.propTypes = {
  title: _react.PropTypes.string,
  createdAt: _react.PropTypes.string,
  display_name: _react.PropTypes.string,
  feature_image: _react.PropTypes.string,
  excerpt: _react.PropTypes.string,
  tags: _react.PropTypes.array,
  content: _react.PropTypes.string,
  user: _react.PropTypes.object,
  slug: _react.PropTypes.string
};

exports.default = TagListCard;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TagList = __webpack_require__(248);

var _TagList2 = _interopRequireDefault(_TagList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TagList2.default;

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = tagsReducer;

var _actions = __webpack_require__(91);

var types = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  isLoading: false,
  error: false,
  id: '',
  name: '',
  description: '',
  posts: []
};

/**
 * Blog Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
function tagsReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case types.LOAD_TAG_REQUEST:
      return (0, _extends3.default)({}, state, {
        isLoading: true
      });
    case types.LOAD_TAG_SUCCESS:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        id: action.result.id,
        name: action.result.name,
        posts: action.result.posts,
        description: action.result.description
      });
    case types.LOAD_TAG_FAILURE:
      return (0, _extends3.default)({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
}

/***/ },
/* 252 */
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

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _style = __webpack_require__(331);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var PostImage = function PostImage(props) {
  return (0, _jsx3.default)('div', {
    className: cx('postimage__wrap')
  }, void 0, (0, _jsx3.default)('img', {
    src: props.imageSrc,
    alt: 'post image',
    className: cx('postimage')
  }));
};

PostImage.propTypes = {
  imageSrc: _react2.default.PropTypes.string.isRequired
};

exports.default = PostImage;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostImage = __webpack_require__(252);

var _PostImage2 = _interopRequireDefault(_PostImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PostImage2.default;

/***/ },
/* 254 */
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

var _Link = __webpack_require__(102);

var _Link2 = _interopRequireDefault(_Link);

var _Chips = __webpack_require__(126);

var _Chips2 = _interopRequireDefault(_Chips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

var Tag = function Tag(props) {
  return (0, _jsx3.default)(_Link2.default, {
    to: '/blog/tags/' + props.id
  }, void 0, (0, _jsx3.default)(_Chips2.default, {
    style: styles.chip,
    label: props.name
  }));
};

Tag.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.number.isRequired
};

exports.default = Tag;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tag = __webpack_require__(254);

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Tag2.default;

/***/ },
/* 256 */
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

var _Avatars = __webpack_require__(35);

var _Avatars2 = _interopRequireDefault(_Avatars);

var _components = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
};
var Author = function Author(props) {
  return (0, _jsx3.default)('div', {
    style: styles.wrapper
  }, void 0, (0, _jsx3.default)(_Avatars2.default, {
    src: props.avatar_url
  }), (0, _jsx3.default)(_components.Heading, {
    size: 3
  }, void 0, ' ', props.display_name));
};

Author.propTypes = {
  display_name: _react2.default.PropTypes.string.isRequired,
  avatar_url: _react2.default.PropTypes.string
};

exports.default = Author;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Author = __webpack_require__(256);

var _Author2 = _interopRequireDefault(_Author);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Author2.default;

/***/ },
/* 258 */
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

var _reactRouter = __webpack_require__(34);

var _moment = __webpack_require__(67);

var _moment2 = _interopRequireDefault(_moment);

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _mol = __webpack_require__(63);

var _mol2 = _interopRequireDefault(_mol);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Buttons = __webpack_require__(10);

var _Cards = __webpack_require__(15);

var _Avatars = __webpack_require__(35);

var _Avatars2 = _interopRequireDefault(_Avatars);

var _components = __webpack_require__(12);

var _style = __webpack_require__(332);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var _ref = (0, _jsx3.default)(_Buttons.IconButton, {
  className: 'margin-left-auto'
}, void 0, 'star_outline');

var _ref2 = (0, _jsx3.default)(_Buttons.FlatButton, {
  label: 'Read more',
  secondary: true
});

var PostCard = function PostCard(props) {
  var formattedDate = (0, _moment2.default)(props.created_at).format('MMMM Do YYYY, h:mm:ss a');
  var profileLink = 'profile/public/' + props.author.id;
  var overlay = (0, _jsx3.default)(_Cards.CardTitle, {
    title: props.title,
    subtitle: formattedDate
  }, 'overlay', _ref);
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Cards.Card, {}, void 0, (0, _jsx3.default)(_Cards.CardMedia, {
    overlay: overlay
  }, void 0, (0, _jsx3.default)('img', {
    className: cx('post__card-image'),
    src: props.feature_image,
    height: '350px'
  })), (0, _jsx3.default)(_Cards.CardTitle, {
    avatar: (0, _jsx3.default)(_Avatars2.default, {
      src: props.author.avatar_url,
      alt: 'Author avatar image'
    }),
    title: props.author.display_name
  }), (0, _jsx3.default)('div', {
    className: cx('post__card-footer')
  }, void 0, (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_mol2.default, {
    tags: props.tags
  }))), (0, _jsx3.default)(_Cards.CardActions, {
    isExpander: true
  }, void 0, (0, _jsx3.default)(_reactRouter.Link, {
    to: '/blog/' + props.slug
  }, void 0, _ref2)), (0, _jsx3.default)(_Cards.CardText, {
    expandable: true
  }, void 0, props.excerpt)));
};

PostCard.propTypes = {
  title: _react.PropTypes.string,
  created_at: _react.PropTypes.string,
  display_name: _react.PropTypes.string,
  feature_image: _react.PropTypes.string,
  excerpt: _react.PropTypes.string,
  tags: _react.PropTypes.array,
  content: _react.PropTypes.string,
  author: _react.PropTypes.object,
  slug: _react.PropTypes.string
};

exports.default = PostCard;

/***/ },
/* 259 */
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

var _Dividers = __webpack_require__(38);

var _Dividers2 = _interopRequireDefault(_Dividers);

var _components = __webpack_require__(12);

var _atm = __webpack_require__(253);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContent = function PostContent(props) {
  function createMarkup() {
    return { __html: props.content };
  }
  return (0, _jsx3.default)('article', {
    style: { overflow: 'hidden' }
  }, void 0, props.feature_image ? (0, _jsx3.default)(_atm2.default, {
    imageSrc: props.feature_image
  }) : null, (0, _jsx3.default)('div', {
    style: { padding: '2em 1.5em' }
  }, void 0, (0, _jsx3.default)(_components.Heading, {
    size: 1,
    override: '3.5em',
    textDeco: 'capitalize'
  }, void 0, props.title, ' '), (0, _jsx3.default)(_Dividers2.default, {
    style: { marginTop: '35px', marginBottom: '20px' }
  }), (0, _jsx3.default)('div', {
    className: 'content',
    style: { lineHeight: '1.8em' },
    dangerouslySetInnerHTML: createMarkup()
  })));
};

PostContent.propTypes = {
  title: _react.PropTypes.string.isRequired,
  content: _react.PropTypes.any,
  feature_image: _react.PropTypes.string
};

exports.default = PostContent;

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostContent = __webpack_require__(259);

var _PostContent2 = _interopRequireDefault(_PostContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PostContent2.default;

/***/ },
/* 261 */
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

var _atm = __webpack_require__(255);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

var _ref = (0, _jsx3.default)('div', {}, void 0, 'No tags');

var TagBlock = function TagBlock(props) {
  if (!props.tags) {
    return _ref;
  }
  return (0, _jsx3.default)('div', {
    style: styles.wrapper,
    className: 'tagblock'
  }, void 0, props.tags.map(function (tag) {
    return (0, _jsx3.default)(_atm2.default, {
      name: tag.name,
      id: tag.id
    }, tag.id);
  }));
};

TagBlock.propTypes = {
  tags: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    id: _react2.default.PropTypes.number,
    name: _react2.default.PropTypes.name
  }))
};

exports.default = TagBlock;

/***/ },
/* 262 */
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

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _Dividers = __webpack_require__(38);

var _Dividers2 = _interopRequireDefault(_Dividers);

var _mol = __webpack_require__(257);

var _mol2 = _interopRequireDefault(_mol);

var _mol3 = __webpack_require__(63);

var _mol4 = _interopRequireDefault(_mol3);

var _style = __webpack_require__(333);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var Sidebar = function Sidebar(props) {
  return (0, _jsx3.default)('div', {
    className: cx('sidebar')
  }, void 0, _react2.default.createElement(_mol2.default, props.author), (0, _jsx3.default)(_Dividers2.default, {
    style: { marginTop: '1em', marginBottom: '1em' }
  }), (0, _jsx3.default)(_mol4.default, {
    tags: props.tags
  }));
};

Sidebar.propTypes = {
  tags: _react2.default.PropTypes.array,
  author: _react2.default.PropTypes.object
};

exports.default = Sidebar;

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sidebar = __webpack_require__(262);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Sidebar2.default;

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BlogContainer = __webpack_require__(240);

var _BlogContainer2 = _interopRequireDefault(_BlogContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) require.ensure = function (deps, cb) {
  return cb(require);
};

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
    path: '/blog',
    component: _BlogContainer2.default,
    indexRoute: {
      component: __webpack_require__(242).default
    },
    childRoutes: [{
      path: ':slug',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 246)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'search/:query',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 244)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'tags/:id',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 250)).then(loadModule(cb)).catch(errorLoading);
      }
    }]
  };
};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(33);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(9);

var _redial = __webpack_require__(16);

var _components = __webpack_require__(12);

var _boldr = __webpack_require__(50);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_reactHelmet2.default, {
  title: 'Boldr',
  titleTemplate: '%s | powered by Boldr'
});

var _ref2 = (0, _jsx3.default)(_components.Notifications, {});

var Boldr = function (_Component) {
  (0, _inherits3.default)(Boldr, _Component);

  function Boldr() {
    (0, _classCallCheck3.default)(this, Boldr);
    return (0, _possibleConstructorReturn3.default)(this, (Boldr.__proto__ || Object.getPrototypeOf(Boldr)).apply(this, arguments));
  }

  (0, _createClass3.default)(Boldr, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchSettingsIfNeeded();
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, _ref, this.props.children, _ref2);
    }
  }]);
  return Boldr;
}(_react.Component);

Boldr.propTypes = {
  children: _react.PropTypes.node,
  fetchSettingsIfNeeded: _react.PropTypes.func
};


function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth,
    notifications: state.notifications
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchSettingsIfNeeded: _boldr.fetchSettingsIfNeeded, fetchMenusIfNeeded: _boldr.fetchMenusIfNeeded })(Boldr);

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Boldr = __webpack_require__(265);

var _Boldr2 = _interopRequireDefault(_Boldr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Boldr2.default;

/***/ },
/* 267 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DONE_LOADING = exports.DONE_LOADING = 'DONE_LOADING';

var LOAD_SETTINGS = exports.LOAD_SETTINGS = 'LOAD_SETTINGS';
var LOAD_SETTINGS_SUCCESS = exports.LOAD_SETTINGS_SUCCESS = 'LOAD_SETTINGS_SUCCESS';
var LOAD_SETTINGS_FAILURE = exports.LOAD_SETTINGS_FAILURE = 'LOAD_SETTINGS_FAILURE';

var SAVE_SETUP_REQUEST = exports.SAVE_SETUP_REQUEST = 'SAVE_SETUP_REQUEST';
var SAVE_SETUP_SUCCESS = exports.SAVE_SETUP_SUCCESS = 'SAVE_SETUP_SUCCESS';
var SAVE_SETUP_FAIL = exports.SAVE_SETUP_FAIL = 'SAVE_SETUP_FAIL';

var UPDATE_SETTINGS_REQUEST = exports.UPDATE_SETTINGS_REQUEST = 'UPDATE_SETTINGS_REQUEST';
var UPDATE_SETTINGS_SUCCESS = exports.UPDATE_SETTINGS_SUCCESS = 'UPDATE_SETTINGS_SUCCESS';
var UPDATE_SETTINGS_FAILURE = exports.UPDATE_SETTINGS_FAILURE = 'UPDATE_SETTINGS_FAILURE';

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _post = __webpack_require__(28);

var _actions = __webpack_require__(62);

var _mol = __webpack_require__(94);

var _mol2 = _interopRequireDefault(_mol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('p', {}, void 0, 'Loading...');

var ArticleEditor = function (_Component) {
  (0, _inherits3.default)(ArticleEditor, _Component);

  function ArticleEditor(props) {
    (0, _classCallCheck3.default)(this, ArticleEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ArticleEditor.__proto__ || Object.getPrototypeOf(ArticleEditor)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);

    _this.state = {
      editing: true
    };
    return _this;
  }

  (0, _createClass3.default)(ArticleEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loadPost(this.props.params.slug);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      var postData = {
        title: values.title,
        tags: values.tags,
        status: values.status,
        content: values.content,
        id: this.props.currentPost.id || '',
        origSlug: this.props.params.slug || ''
      };
      var editId = this.props.currentPost.id;
      this.props.dispatch((0, _actions.updatePost)(postData));
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.currentPost.isLoading && !this.props.currentPost.content.length) {
        return _ref;
      }
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_mol2.default, {
        initialValues: this.props.currentPost,
        editing: true,
        onSubmit: this.handleSubmit
      }));
    }
  }]);
  return ArticleEditor;
}(_react.Component);

ArticleEditor.propTypes = {
  dispatch: _react2.default.PropTypes.func,
  posts: _react2.default.PropTypes.object,
  params: _react2.default.PropTypes.object,
  currentPost: _react2.default.PropTypes.object,
  clearCurrentPost: _react2.default.PropTypes.func,
  loadPost: _react2.default.PropTypes.func
};


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    currentPost: state.currentPost,
    isLoading: state.currentPost.isLoading
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadPost: _actions.loadPost, clearCurrentPost: _actions.clearCurrentPost })(ArticleEditor);

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ArticleEditor = __webpack_require__(268);

var _ArticleEditor2 = _interopRequireDefault(_ArticleEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ArticleEditor2.default;

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _redial = __webpack_require__(16);

var _es = __webpack_require__(354);

var _Papers = __webpack_require__(39);

var _Papers2 = _interopRequireDefault(_Papers);

var _DataTables = __webpack_require__(44);

var _theme = __webpack_require__(95);

var _post = __webpack_require__(28);

var _mol = __webpack_require__(293);

var _mol2 = _interopRequireDefault(_mol);

var _components = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('h1', {}, void 0, 'Perhaps you should create a new post?');

var _ref2 = (0, _jsx3.default)(_DataTables.TableHeader, {}, void 0, (0, _jsx3.default)(_DataTables.TableRow, {}, void 0, (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, 'Title'), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, 'Status'), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, 'Date'), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, 'Action')));

var ArticleList = function (_Component) {
  (0, _inherits3.default)(ArticleList, _Component);

  function ArticleList(props) {
    (0, _classCallCheck3.default)(this, ArticleList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ArticleList.__proto__ || Object.getPrototypeOf(ArticleList)).call(this, props));

    _this.state = {
      visible: false,
      artId: ''
    };
    _this.handleArticleClick = _this.handleArticleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ArticleList, [{
    key: 'handleArticleClick',
    value: function handleArticleClick(postId) {
      console.log('clicked ', postId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.posts.results.length) {
        return _ref;
      }

      return (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_Papers2.default, {
        zDepth: 1,
        style: { height: '90vh' }
      }, void 0, (0, _jsx3.default)(_DataTables.DataTable, {
        className: 'complex-table'
      }, void 0, _ref2, (0, _jsx3.default)(_DataTables.TableBody, {}, void 0, this.props.posts.results.map(function (post, index) {
        return (0, _jsx3.default)(_mol2.default, {
          article: post,
          sortRank: index,
          content: post.content,
          title: post.title,
          slug: post.slug,
          handleArticleClick: _this2.handleArticleClick
        }, post.id);
      })))));
    }
  }]);
  return ArticleList;
}(_react.Component);

ArticleList.propTypes = {
  children: _react.PropTypes.element,
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
exports.default = (0, _reactRedux.connect)(mapStateToProps)(ArticleList);

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ArticleList = __webpack_require__(270);

var _ArticleList2 = _interopRequireDefault(_ArticleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ArticleList2.default;

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _redux = __webpack_require__(40);

var _components = __webpack_require__(12);

var _NavigationDrawers = __webpack_require__(153);

var _NavigationDrawers2 = _interopRequireDefault(_NavigationDrawers);

var _Buttons = __webpack_require__(10);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _actions = __webpack_require__(287);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrawerType = {
  FULL_HEIGHT: 'full-height',
  CLIPPED: 'clipped',
  FLOATING: 'floating',
  PERSISTENT: 'persistent',
  PERSISTENT_MINI: 'mini'
};

var _ref = (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'toc');

var _ref2 = (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'edit');

var _ref3 = (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'dashboard');

var _ref4 = (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'perm_media');

var _ref5 = (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'people');

var _ref6 = (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'settings');

var _ref7 = (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'home');

var Dashboard = function (_Component) {
  (0, _inherits3.default)(Dashboard, _Component);

  function Dashboard() {
    (0, _classCallCheck3.default)(this, Dashboard);
    return (0, _possibleConstructorReturn3.default)(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  (0, _createClass3.default)(Dashboard, [{
    key: 'render',
    value: function render() {
      var navItems = [{
        primaryText: 'Article List',
        leftIcon: _ref,
        onClick: this.props.articleListClicked
      }, {
        primaryText: 'Article Editor',
        leftIcon: _ref2,
        onClick: this.props.articleEditorClicked
      }, {
        primaryText: 'Dashboard',
        leftIcon: _ref3,
        onClick: this.props.dashboardClicked
      }, {
        primaryText: 'Media',
        leftIcon: _ref4,
        onClick: this.props.mediaClicked
      }, {
        primaryText: 'Members',
        leftIcon: _ref5,
        onClick: this.props.membersClicked
      }, {
        primaryText: 'Settings',
        leftIcon: _ref6,
        onClick: this.props.settingsClicked
      }, {
        primaryText: 'Home',
        leftIcon: _ref7,
        onClick: this.props.homeClicked
      }];
      return (0, _jsx3.default)(_components.Grid, {
        fluid: true
      }, void 0, (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_NavigationDrawers2.default, {
        drawerTitle: 'Navigation',
        toolbarTitle: 'Dashboard',
        toolbarStyle: { marginBottom: '25px' },
        tabletDrawerType: DrawerType.PERSISTENT_MINI,
        desktopDrawerType: DrawerType.PERSISTENT_MINI,
        navItems: navItems
      }), (0, _jsx3.default)(_components.Col, {
        xs: 12,
        md: 10,
        mdOffset: 2
      }, void 0, this.props.children)));
    }
  }]);
  return Dashboard;
}(_react.Component);

Dashboard.propTypes = {
  children: _react2.default.PropTypes.element,
  toggleOpen: _react2.default.PropTypes.func,
  articleListClicked: _react2.default.PropTypes.func,
  articleEditorClicked: _react2.default.PropTypes.func,
  dashboardClicked: _react2.default.PropTypes.func,
  mediaClicked: _react2.default.PropTypes.func,
  membersClicked: _react2.default.PropTypes.func,
  settingsClicked: _react2.default.PropTypes.func,
  homeClicked: _react2.default.PropTypes.func
};


function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    articleListClicked: _actions.articleListClicked, articleEditorClicked: _actions.articleEditorClicked, dashboardClicked: _actions.dashboardClicked,
    mediaClicked: _actions.mediaClicked, membersClicked: _actions.membersClicked, settingsClicked: _actions.settingsClicked, homeClicked: _actions.homeClicked }, dispatch);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _org = __webpack_require__(302);

var _org2 = _interopRequireDefault(_org);

var _components = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_components.Col, {
  xs: 6,
  md: 3
}, void 0, (0, _jsx3.default)(_org2.default, {
  name: 'Widget A'
})), (0, _jsx3.default)(_components.Col, {
  xs: 6,
  md: 3
}, void 0, (0, _jsx3.default)(_org2.default, {
  name: 'Widget C'
})), (0, _jsx3.default)(_components.Col, {
  xs: 12,
  md: 6
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
    return (0, _possibleConstructorReturn3.default)(this, (DashboardWidgets.__proto__ || Object.getPrototypeOf(DashboardWidgets)).apply(this, arguments));
  }

  (0, _createClass3.default)(DashboardWidgets, [{
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, _ref, (0, _jsx3.default)(_components.Row, {
        style: { marginTop: '1.5em' }
      }, void 0, _ref2));
    }
  }]);
  return DashboardWidgets;
}(_react.Component);

exports.default = DashboardWidgets;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DashboardWidgets = __webpack_require__(273);

var _DashboardWidgets2 = _interopRequireDefault(_DashboardWidgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DashboardWidgets2.default;

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _redial = __webpack_require__(16);

var _components = __webpack_require__(12);

var _Toolbars = __webpack_require__(174);

var _Toolbars2 = _interopRequireDefault(_Toolbars);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Buttons = __webpack_require__(10);

var _Papers = __webpack_require__(39);

var _Papers2 = _interopRequireDefault(_Papers);

var _inlineStyles = __webpack_require__(19);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _mol = __webpack_require__(296);

var _mol2 = _interopRequireDefault(_mol);

var _config = __webpack_require__(17);

var _media = __webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Media = function (_Component) {
  (0, _inherits3.default)(Media, _Component);

  function Media(props) {
    (0, _classCallCheck3.default)(this, Media);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Media.__proto__ || Object.getPrototypeOf(Media)).call(this, props));

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
    _this.handleFinish = _this.handleFinish.bind(_this);
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
      var actions = [(0, _jsx3.default)(_Buttons.FlatButton, {
        label: 'Close',
        primary: true,
        onTouchTap: this.handleClose
      }, 1)];
      return (0, _jsx3.default)('div', {
        style: { paddingTop: '50px' }
      }, void 0, (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_components.Col, {
        xs: 12
      }, void 0, (0, _jsx3.default)(_components.S3Uploader, {
        signingUrl: '' + _config.S3_SIGNING_URL,
        accept: 'image/*',
        onProgress: _components.S3Uploader.onUploadProgress,
        onError: _components.S3Uploader.onUploadError,
        onFinish: this.handleFinish,
        uploadRequestHeaders: { 'x-amz-acl': 'public-read' },
        contentDisposition: 'auto',
        server: '' + _config.API_BASE
      }), (0, _jsx3.default)(_mol2.default, {
        files: this.props.media.files
      }))));
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
/* 276 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Media = __webpack_require__(275);

var _Media2 = _interopRequireDefault(_Media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Media2.default;

/***/ },
/* 277 */
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
/* 278 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(9);

var _redial = __webpack_require__(16);

var _Dialogs = __webpack_require__(137);

var _Dialogs2 = _interopRequireDefault(_Dialogs);

var _Buttons = __webpack_require__(10);

var _mol = __webpack_require__(300);

var _mol2 = _interopRequireDefault(_mol);

var _atm = __webpack_require__(289);

var _atm2 = _interopRequireDefault(_atm);

var _members = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Members = function (_Component) {
  (0, _inherits3.default)(Members, _Component);

  function Members(props) {
    (0, _classCallCheck3.default)(this, Members);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Members.__proto__ || Object.getPrototypeOf(Members)).call(this, props));

    _this.openDialog = function () {
      _this.setState({ isOpen: true });
    };

    _this.closeDialog = function () {
      _this.setState({ isOpen: false });
    };

    _this.toggleUser = _this.toggleUser.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);

    _this.state = { isOpen: false };
    return _this;
  }

  (0, _createClass3.default)(Members, [{
    key: 'toggleUser',
    value: function toggleUser(userId) {
      this.props.memberSelected(userId);
      this.setState({ isOpen: true, userId: userId });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      var userData = {
        display_name: values.display_name,
        first_name: values.first_name,
        last_name: values.last_name,
        roleId: values.roleId,
        id: this.state.userId
      };

      this.props.updateMember(userData);
    }
  }, {
    key: 'render',
    value: function render() {
      var isOpen = this.state.isOpen;

      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_mol2.default, {
        toggleUser: this.toggleUser,
        users: this.props.members.members
      }), (0, _jsx3.default)(_Dialogs2.default, {
        title: 'Update User',
        isOpen: isOpen,
        close: this.closeDialog
      }, void 0, (0, _jsx3.default)(_atm2.default, {
        onSubmit: this.handleSubmit
      }), (0, _jsx3.default)(_Buttons.FlatButton, {
        label: 'Save',
        onClick: this.handleSubmit
      })));
    }
  }]);
  return Members;
}(_react.Component); /* eslint-disable react/prefer-stateless-function */


Members.propTypes = {
  members: _react.PropTypes.object,
  memberSelected: _react.PropTypes.func,
  updateMember: _react.PropTypes.func
};


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    members: state.members,
    selected: state.members.selected
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { memberSelected: _members.memberSelected, updateMember: _members.updateMember })(Members);

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _state = __webpack_require__(280);

Object.keys(_state).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _state[key];
    }
  });
});

var _Members = __webpack_require__(278);

var _Members2 = _interopRequireDefault(_Members);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Members2.default;

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _members = __webpack_require__(65);

Object.keys(_members).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _members[key];
    }
  });
});

var _members2 = _interopRequireDefault(_members);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _members2.default;

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _post = __webpack_require__(28);

var _actions = __webpack_require__(62);

var _mol = __webpack_require__(94);

var _mol2 = _interopRequireDefault(_mol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('p', {}, void 0, 'Loading...');

var NewArticle = function (_Component) {
  (0, _inherits3.default)(NewArticle, _Component);

  function NewArticle(props) {
    (0, _classCallCheck3.default)(this, NewArticle);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewArticle.__proto__ || Object.getPrototypeOf(NewArticle)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);

    _this.state = {
      editing: false
    };
    return _this;
  }

  (0, _createClass3.default)(NewArticle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.clearCurrentPost();
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      var postData = {
        title: values.title,
        tags: values.tags,
        status: values.status,
        content: values.content,
        id: this.props.currentPost.id || '',
        origSlug: this.props.params.slug || ''
      };
      this.props.dispatch((0, _post.createPost)(postData));
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.currentPost.isLoading && !this.props.currentPost.content.length) {
        return _ref;
      }
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_mol2.default, {
        initialValues: this.props.currentPost,
        editing: false,
        onSubmit: this.handleSubmit
      }));
    }
  }]);
  return NewArticle;
}(_react.Component);

NewArticle.propTypes = {
  dispatch: _react2.default.PropTypes.func,
  posts: _react2.default.PropTypes.object,
  params: _react2.default.PropTypes.object,
  currentPost: _react2.default.PropTypes.object,
  clearCurrentPost: _react2.default.PropTypes.func
};


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    currentPost: state.currentPost,
    isLoading: state.currentPost.isLoading
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { clearCurrentPost: _actions.clearCurrentPost })(NewArticle);

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NewArticle = __webpack_require__(281);

var _NewArticle2 = _interopRequireDefault(_NewArticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _NewArticle2.default;

/***/ },
/* 283 */
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
/* 284 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pages = __webpack_require__(283);

var _Pages2 = _interopRequireDefault(_Pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Pages2.default;

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _redial = __webpack_require__(16);

var _Papers = __webpack_require__(39);

var _Papers2 = _interopRequireDefault(_Papers);

var _Tabs = __webpack_require__(169);

var _components = __webpack_require__(12);

var _boldr = __webpack_require__(50);

var _mol = __webpack_require__(298);

var _mol2 = _interopRequireDefault(_mol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_components.Loader, {});

var _ref2 = (0, _jsx3.default)(_Tabs.Tab, {
  label: 'Soon'
}, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'This is empty')));

var _ref3 = (0, _jsx3.default)(_Tabs.Tab, {
  label: 'Soon'
}, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('p', {}, void 0, 'This is empty')));

var Settings = function (_Component) {
  (0, _inherits3.default)(Settings, _Component);

  function Settings(props) {
    (0, _classCallCheck3.default)(this, Settings);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Settings, [{
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      var id = this.props.boldr.id;
      this.props.updateBoldrSettings(values, id);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.boldr.isLoading) {
        return _ref;
      }
      return (0, _jsx3.default)('div', {
        style: { paddingTop: '50px' }
      }, void 0, (0, _jsx3.default)(_Papers2.default, {}, void 0, (0, _jsx3.default)(_Tabs.Tabs, {
        primary: true,
        scrollable: true
      }, void 0, (0, _jsx3.default)(_Tabs.Tab, {
        label: 'General'
      }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_mol2.default, {
        onSubmit: this.handleSubmit,
        settings: this.props.boldr
      }))), _ref2, _ref3)));
    }
  }]);
  return Settings;
}(_react.Component);

Settings.propTypes = {
  boldr: _react.PropTypes.object.isRequired,
  updateBoldrSettings: _react.PropTypes.func
};


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    boldr: state.boldr,
    isLoading: state.boldr.isLoading
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { updateBoldrSettings: _boldr.updateBoldrSettings })(Settings);

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Settings = __webpack_require__(285);

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Settings2.default;

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.articleListClicked = articleListClicked;
exports.articleEditorClicked = articleEditorClicked;
exports.dashboardClicked = dashboardClicked;
exports.mediaClicked = mediaClicked;
exports.membersClicked = membersClicked;
exports.settingsClicked = settingsClicked;
exports.homeClicked = homeClicked;

var _reactRouterRedux = __webpack_require__(18);

function articleListClicked() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/dashboard/articles'));
  };
}

function articleEditorClicked() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/dashboard/articles/editor/new'));
  };
}

function dashboardClicked() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/dashboard'));
  };
}

function mediaClicked() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/dashboard/media'));
  };
}

function membersClicked() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/dashboard/members'));
  };
}

function settingsClicked() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/dashboard/settings'));
  };
}

function homeClicked() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/'));
  };
}

/***/ },
/* 288 */
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

var _reduxForm = __webpack_require__(29);

var _inlineStyles = __webpack_require__(19);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _Buttons = __webpack_require__(10);

var _TextField = __webpack_require__(41);

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = __webpack_require__(105);

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditMemberForm = function EditMemberForm(props) {
  var handleSubmit = props.handleSubmit;
  var pristine = props.pristine;
  var reset = props.reset;
  var submitting = props.submitting;

  return (0, _jsx3.default)('form', {
    onSubmit: handleSubmit
  }, void 0, (0, _jsx3.default)('div', {
    className: 'grid__row'
  }, void 0, (0, _jsx3.default)(_reduxForm.Field, {
    name: 'roleId',
    component: _SelectField2.default,
    label: 'Role ID',
    position: 'below',
    menuItems: [1, 2, 3, 4, 5]
  })));
};

EditMemberForm.propTypes = {
  handleSubmit: _react.PropTypes.func.isRequired,
  reset: _react.PropTypes.func,
  submitting: _react.PropTypes.bool,
  fields: _react.PropTypes.object,
  pristine: _react.PropTypes.bool
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'editMemberForm'
})(EditMemberForm);

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EditMemberForm = __webpack_require__(288);

var _EditMemberForm2 = _interopRequireDefault(_EditMemberForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _EditMemberForm2.default;

/***/ },
/* 290 */
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

var _reactRouter = __webpack_require__(34);

var _Buttons = __webpack_require__(10);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _DataTables = __webpack_require__(44);

var _inlineStyles = __webpack_require__(19);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  user: _react.PropTypes.object,
  handleToggle: _react.PropTypes.func
};

var MemberTableRow = function MemberTableRow(props) {
  function handleToggle() {
    props.handleToggle(props.user.id);
  }
  return (0, _jsx3.default)(_DataTables.TableRow, {}, void 0, (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, props.user.id), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, props.user.display_name), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, props.user.email), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, props.user.role[0].name), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, (0, _jsx3.default)(_Buttons.IconButton, {}, void 0, (0, _jsx3.default)(_FontIcons2.default, {
    onClick: handleToggle
  }, void 0, 'editor'))));
};

MemberTableRow.propTypes = propTypes;

exports.default = MemberTableRow;

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MemberTableRow = __webpack_require__(290);

var _MemberTableRow2 = _interopRequireDefault(_MemberTableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MemberTableRow2.default;

/***/ },
/* 292 */
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

var _Link = __webpack_require__(102);

var _Link2 = _interopRequireDefault(_Link);

var _moment = __webpack_require__(67);

var _moment2 = _interopRequireDefault(_moment);

var _Buttons = __webpack_require__(10);

var _FontIcons = __webpack_require__(14);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _DataTables = __webpack_require__(44);

var _theme = __webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_Buttons.IconButton, {}, void 0, (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'airplay'));

var _ref2 = (0, _jsx3.default)(_Buttons.IconButton, {}, void 0, (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'edit'));

var _ref3 = (0, _jsx3.default)(_Buttons.IconButton, {
  name: 'delete-button'
}, void 0, (0, _jsx3.default)(_FontIcons2.default, {}, void 0, 'delete_forever'));

var ArticleListItem = function ArticleListItem(props) {
  function handleclick() {
    var articleId = props.article.id;
    props.handleArticleClick(articleId);
  }
  var formattedDate = (0, _moment2.default)(props.article.createdAt).format('MM D YYYY');
  var publishedIcon = (0, _jsx3.default)(_FontIcons2.default, {
    onClick: handleclick
  }, void 0, ' visibility');
  var draftIcon = (0, _jsx3.default)(_FontIcons2.default, {
    onClick: handleclick
  }, void 0, 'visibility_off');
  return (0, _jsx3.default)(_DataTables.TableRow, {}, void 0, (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, props.article.title), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, props.article.status === 'published' ? publishedIcon : draftIcon), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, formattedDate), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, (0, _jsx3.default)(_Link2.default, {
    to: '/dashboard/articles/' + props.article.slug + '/preview'
  }, void 0, _ref), (0, _jsx3.default)(_Link2.default, {
    to: '/dashboard/articles/editor/' + props.slug
  }, void 0, _ref2), _ref3));
};

ArticleListItem.propTypes = {
  article: _react2.default.PropTypes.object.isRequired,
  handleArticleClick: _react2.default.PropTypes.func,
  slug: _react2.default.PropTypes.string
};

exports.default = ArticleListItem;

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ArticleListItem = __webpack_require__(292);

var _ArticleListItem2 = _interopRequireDefault(_ArticleListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ArticleListItem2.default;

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderRichText = undefined;

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(9);

var _reduxForm = __webpack_require__(29);

var _components = __webpack_require__(12);

var _Radio = __webpack_require__(83);

var _Radio2 = _interopRequireDefault(_Radio);

var _Buttons = __webpack_require__(10);

var _Papers = __webpack_require__(39);

var _Papers2 = _interopRequireDefault(_Papers);

var _RichText = __webpack_require__(70);

var _RadioButtonGroup = __webpack_require__(53);

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

var _TextField = __webpack_require__(41);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _ref = (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_reduxForm.Field, {
  name: 'title',
  type: 'text',
  component: _TextField2.default,
  label: 'Post Title'
}));

var _ref2 = (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_reduxForm.Field, {
  name: 'tags',
  type: 'text',
  helpText: 'Separate using commas',
  component: _TextField2.default,
  label: 'Tags'
}));

var _ref3 = (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_reduxForm.Field, {
  name: 'feature_image',
  type: 'text',
  helpText: 'URL for your image',
  component: _TextField2.default,
  label: 'Feature Image'
}));

var _ref4 = (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_reduxForm.Field, {
  name: 'excerpt',
  type: 'text',
  component: _TextField2.default,
  helpText: 'A short summary or highlight',
  label: 'Excerpt',
  fullWidth: true,
  multiLine: true
}));

var _ref5 = (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_reduxForm.Field, {
  name: 'status',
  component: _RadioButtonGroup2.default
}, void 0, (0, _jsx3.default)(_Radio2.default, {
  value: 'draft',
  label: 'Draft',
  style: radioStyle
}), (0, _jsx3.default)(_Radio2.default, {
  value: 'published',
  label: 'Published',
  style: radioStyle
}), (0, _jsx3.default)(_Radio2.default, {
  value: 'archived',
  label: 'Archived',
  style: radioStyle
})));

var _ref6 = (0, _jsx3.default)(_reduxForm.Field, {
  name: 'content',
  component: renderRichText
});

var _ref7 = (0, _jsx3.default)(_Buttons.RaisedButton, {
  type: 'submit',
  secondary: true,
  label: 'Publish',
  style: style
});

var EditorForm = function (_Component) {
  (0, _inherits3.default)(EditorForm, _Component);

  function EditorForm(props) {
    (0, _classCallCheck3.default)(this, EditorForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditorForm.__proto__ || Object.getPrototypeOf(EditorForm)).call(this, props));

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

  (0, _createClass3.default)(EditorForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var handleSubmit = _props.handleSubmit;
      var pristine = _props.pristine;
      var reset = _props.reset;
      var submitting = _props.submitting;
      var editorState = this.state.editorState;

      return (0, _jsx3.default)(_components.Row, {}, void 0, (0, _jsx3.default)(_components.Col, {
        xs: true
      }, void 0, (0, _jsx3.default)('form', {
        onSubmit: handleSubmit,
        style: { marginTop: '25px' }
      }, void 0, (0, _jsx3.default)(_Papers2.default, {
        zDepth: 3,
        style: {
          padding: 40
        }
      }, void 0, _ref, this.props.editing ? null : _ref2, _ref3, _ref4, _ref5, _ref6, (0, _jsx3.default)('div', {
        style: { marginTop: '1em' }
      }, void 0, _ref7)))));
    }
  }]);
  return EditorForm;
}(_react.Component);

exports.default = (0, _reduxForm.reduxForm)({
  form: 'EditorForm'
})(EditorForm);


EditorForm.propTypes = {
  handleSubmit: _react.PropTypes.func.isRequired,
  editing: _react.PropTypes.bool,
  reset: _react.PropTypes.func,
  submitting: _react.PropTypes.bool,
  fields: _react.PropTypes.object,
  pristine: _react.PropTypes.bool
};

/***/ },
/* 295 */
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

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _components = __webpack_require__(12);

var _Cards = __webpack_require__(15);

var _Buttons = __webpack_require__(10);

var _style = __webpack_require__(334);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var _ref = (0, _jsx3.default)(_Cards.CardActions, {
  centered: true
}, void 0, (0, _jsx3.default)(_Buttons.IconButton, {}, void 0, 'edit'), (0, _jsx3.default)(_Buttons.IconButton, {}, void 0, 'delete'));

var FileView = function FileView(props) {
  return (0, _jsx3.default)(_components.Row, {}, void 0, props.files.map(function (file) {
    return (0, _jsx3.default)(_components.Col, {
      xs: 12,
      md: 3,
      lg: 4
    }, file.id, (0, _jsx3.default)(_Cards.Card, {}, void 0, (0, _jsx3.default)(_Cards.CardMedia, {
      aspectRatio: _Cards.CardMedia.aspect.equal,
      overlay: (0, _jsx3.default)(_Cards.CardTitle, {
        title: file.filename
      })
    }, void 0, (0, _jsx3.default)('img', {
      className: cx('fileview__img'),
      src: file.s3url,
      alt: file.filename
    })), _ref));
  }));
};

exports.default = FileView;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FileView = __webpack_require__(295);

var _FileView2 = _interopRequireDefault(_FileView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FileView2.default;

/***/ },
/* 297 */
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

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _reactRedux = __webpack_require__(9);

var _reduxForm = __webpack_require__(29);

var _Radio = __webpack_require__(83);

var _Radio2 = _interopRequireDefault(_Radio);

var _Buttons = __webpack_require__(10);

var _RadioButtonGroup = __webpack_require__(53);

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

var _TextField = __webpack_require__(41);

var _TextField2 = _interopRequireDefault(_TextField);

var _styles = __webpack_require__(335);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_styles2.default);

var _ref = (0, _jsx3.default)(_reduxForm.Field, {
  name: 'siteName',
  type: 'text',
  component: _TextField2.default,
  label: 'Website name'
});

var _ref2 = (0, _jsx3.default)(_reduxForm.Field, {
  name: 'siteUrl',
  type: 'text',
  component: _TextField2.default,
  label: 'Website URL'
});

var _ref3 = (0, _jsx3.default)(_reduxForm.Field, {
  name: 'description',
  type: 'text',
  component: _TextField2.default,
  multiLine: true,
  rows: 3,
  label: 'Website description'
});

var _ref4 = (0, _jsx3.default)(_reduxForm.Field, {
  name: 'analyticsId',
  type: 'text',
  component: _TextField2.default,
  label: 'Google Analytics ID'
});

var _ref5 = (0, _jsx3.default)(_reduxForm.Field, {
  name: 'allowRegistration',
  component: _RadioButtonGroup2.default
}, void 0, (0, _jsx3.default)(_Radio2.default, {
  value: 'true',
  label: 'Yes'
}), (0, _jsx3.default)(_Radio2.default, {
  value: 'false',
  label: 'No'
}));

var GeneralTab = function GeneralTab(props) {
  // eslint-disable-line
  var handleSubmit = props.handleSubmit;
  var pristine = props.pristine;
  var reset = props.reset;
  var submitting = props.submitting;

  return (0, _jsx3.default)('div', {
    className: cx('root')
  }, void 0, (0, _jsx3.default)('form', {
    onSubmit: handleSubmit
  }, void 0, (0, _jsx3.default)('div', {
    className: cx('row')
  }, void 0, _ref), (0, _jsx3.default)('div', {
    className: cx('row')
  }, void 0, _ref2), (0, _jsx3.default)('div', {
    className: cx('row')
  }, void 0, _ref3), (0, _jsx3.default)('div', {
    className: cx('row')
  }, void 0, _ref4), (0, _jsx3.default)('div', {
    className: cx('row')
  }, void 0, _ref5), (0, _jsx3.default)('div', {
    className: cx('row')
  }, void 0, (0, _jsx3.default)(_Buttons.RaisedButton, {
    type: 'submit',
    secondary: true,
    label: 'Save',
    disabled: pristine || submitting
  }), (0, _jsx3.default)(_Buttons.RaisedButton, {
    label: 'Undo Changes',
    onClick: reset
  }))));
};
GeneralTab.propTypes = {
  settings: _react.PropTypes.object,
  handleSubmit: _react.PropTypes.func,
  submitting: _react.PropTypes.bool,
  pristine: _react.PropTypes.bool,
  reset: _react.PropTypes.func
};

GeneralTab = (0, _reduxForm.reduxForm)({
  form: 'GeneralTabSettings'
})(GeneralTab);

GeneralTab = (0, _reactRedux.connect)(function (state) {
  return {
    initialValues: state.boldr
  };
})(GeneralTab);

exports.default = GeneralTab;

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GeneralTab = __webpack_require__(297);

var _GeneralTab2 = _interopRequireDefault(_GeneralTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _GeneralTab2.default;

/***/ },
/* 299 */
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

var _DataTables = __webpack_require__(44);

var _atm = __webpack_require__(291);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_DataTables.TableHeader, {}, void 0, (0, _jsx3.default)(_DataTables.TableRow, {}, void 0, (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, 'ID'), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, 'Name'), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, 'Email'), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, 'Role'), (0, _jsx3.default)(_DataTables.TableColumn, {}, void 0, 'Actions')));

var MembersList = function MembersList(props) {
  function handleToggle(userId) {
    props.toggleUser(userId);
  }
  return (0, _jsx3.default)(_DataTables.DataTable, {}, void 0, _ref, (0, _jsx3.default)(_DataTables.TableBody, {}, void 0, props.users.map(function (user) {
    return (0, _jsx3.default)(_atm2.default, {
      user: user,
      handleToggle: handleToggle
    }, user.id);
  })));
};

exports.default = MembersList;


MembersList.propTypes = {
  users: _react2.default.PropTypes.array,
  toggleUser: _react2.default.PropTypes.func
};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MembersList = __webpack_require__(299);

var _MembersList2 = _interopRequireDefault(_MembersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MembersList2.default;

/***/ },
/* 301 */
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

var _Cards = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_Cards.CardText, {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.');

var Widget = function Widget(props) {
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Cards.Card, {}, void 0, (0, _jsx3.default)(_Cards.CardTitle, {
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
/* 302 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Widget = __webpack_require__(301);

var _Widget2 = _interopRequireDefault(_Widget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Widget2.default;

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxAuthWrapper = __webpack_require__(68);

var _reactRouterRedux = __webpack_require__(18);

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

exports.default = function (store, connect) {
  return {

    path: 'dashboard',
    onEnter: connect(UserIsAuthenticated.onEnter),
    component: UserIsAuthenticated(__webpack_require__(272).default),
    indexRoute: {
      component: __webpack_require__(274).default
    },
    childRoutes: [{
      path: 'articles',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 271)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'articles/editor/:slug',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 269)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'articles/editor/new',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 282)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'media',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 276)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'pages',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 284)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'settings',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
          cb(null, __webpack_require__(286).default);
        }).bind(null, __webpack_require__));
      }
    }, {
      path: 'members',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 279)).then(loadModule(cb)).catch(errorLoading);
      }
    }]
  };
};

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(9);

var _org = __webpack_require__(306);

var _org2 = _interopRequireDefault(_org);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    profile: state.profile,
    isLoading: state.profile.isLoading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_org2.default);

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _redial = __webpack_require__(16);

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _Cards = __webpack_require__(15);

var _Buttons = __webpack_require__(10);

var _reducer = __webpack_require__(66);

var _org = __webpack_require__(47);

var _org2 = _interopRequireDefault(_org);

var _inlineStyles = __webpack_require__(19);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _Avatars = __webpack_require__(35);

var _Avatars2 = _interopRequireDefault(_Avatars);

var _ExpansionList = __webpack_require__(138);

var _ExpansionList2 = _interopRequireDefault(_ExpansionList);

var _ExpansionPanel = __webpack_require__(139);

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

var _style = __webpack_require__(336);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var _ref = (0, _jsx3.default)(_org2.default, {
  theme: 'dark'
});

var _ref2 = (0, _jsx3.default)(_Cards.CardActions, {}, void 0, (0, _jsx3.default)(_Buttons.FlatButton, {
  label: 'Action1'
}), (0, _jsx3.default)(_Buttons.FlatButton, {
  label: 'Action2'
}));

var ProfileMain = function (_Component) {
  (0, _inherits3.default)(ProfileMain, _Component);

  function ProfileMain() {
    (0, _classCallCheck3.default)(this, ProfileMain);
    return (0, _possibleConstructorReturn3.default)(this, (ProfileMain.__proto__ || Object.getPrototypeOf(ProfileMain)).apply(this, arguments));
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
      }, void 0, (0, _jsx3.default)(_Cards.Card, {
        className: cx('profile__card')
      }, void 0, (0, _jsx3.default)(_Cards.CardTitle, {
        title: 'Editing ' + this.props.profile.display_name + '\'s profile ',
        subtitle: 'Click the panel for editing options',
        avatar: (0, _jsx3.default)(_Avatars2.default, {
          src: this.props.profile.avatar_url
        })
      }), (0, _jsx3.default)(_Cards.CardText, {}, void 0, (0, _jsx3.default)(_ExpansionList2.default, {}, void 0, (0, _jsx3.default)(_ExpansionPanel2.default, {
        focused: true,
        columnWidths: 10,
        label: 'First name',
        secondaryLabel: this.props.profile.first_name
      }), (0, _jsx3.default)(_ExpansionPanel2.default, {
        focused: true,
        columnWidths: 10,
        label: 'Last name',
        secondaryLabel: this.props.profile.last_name
      }), (0, _jsx3.default)(_ExpansionPanel2.default, {
        focused: true,
        columnWidths: 10,
        label: 'Display name',
        secondaryLabel: this.props.profile.display_name
      }), (0, _jsx3.default)(_ExpansionPanel2.default, {
        focused: true,
        columnWidths: 10,
        label: 'Bio',
        secondaryLabel: this.props.profile.bio
      }), (0, _jsx3.default)(_ExpansionPanel2.default, {
        focused: true,
        columnWidths: 10,
        label: 'Location',
        secondaryLabel: this.props.profile.location
      }), (0, _jsx3.default)(_ExpansionPanel2.default, {
        focused: true,
        columnWidths: 10,
        label: 'Website',
        secondaryLabel: this.props.profile.website
      }))), _ref2))));
    }
  }]);
  return ProfileMain;
}(_react.Component);

ProfileMain.propTypes = {
  profile: _react.PropTypes.object.isRequired
};
exports.default = ProfileMain;

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProfileMain = __webpack_require__(305);

var _ProfileMain2 = _interopRequireDefault(_ProfileMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ProfileMain2.default;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _redial = __webpack_require__(16);

var _Cards = __webpack_require__(15);

var _Buttons = __webpack_require__(10);

var _Avatars = __webpack_require__(35);

var _Avatars2 = _interopRequireDefault(_Avatars);

var _reducer = __webpack_require__(66);

var _org = __webpack_require__(47);

var _org2 = _interopRequireDefault(_org);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @provideHooks({
//   fetch: ({ dispatch }) => dispatch(getPublicProfile(this.props.routeParams.id))
// })
var _ref = (0, _jsx3.default)(_org2.default, {
  theme: 'dark'
});

var _ref2 = (0, _jsx3.default)(_Cards.Card, {}, void 0, (0, _jsx3.default)(_Cards.CardTitle, {
  title: 'title',
  subtitle: 'Subtitle',
  avatar: 'http://lorempixel.com/100/100/nature/'
}), (0, _jsx3.default)(_Cards.CardText, {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'), (0, _jsx3.default)(_Cards.CardActions, {}, void 0, (0, _jsx3.default)(_Buttons.FlatButton, {
  label: 'Action1'
}), (0, _jsx3.default)(_Buttons.FlatButton, {
  label: 'Action2'
})));

var ProfilePublic = function (_Component) {
  (0, _inherits3.default)(ProfilePublic, _Component);

  function ProfilePublic() {
    (0, _classCallCheck3.default)(this, ProfilePublic);
    return (0, _possibleConstructorReturn3.default)(this, (ProfilePublic.__proto__ || Object.getPrototypeOf(ProfilePublic)).apply(this, arguments));
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
  profile: _react.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    profile: state.profile,
    isLoading: state.profile.isLoading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getPublicProfile: getPublicProfile })(ProfilePublic);

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProfilePublic = __webpack_require__(307);

var _ProfilePublic2 = _interopRequireDefault(_ProfilePublic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ProfilePublic2.default;

/***/ },
/* 309 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_MY_PROFILE_REQUEST = exports.GET_MY_PROFILE_REQUEST = 'GET_MY_PROFILE_REQUEST';
var GET_MY_PROFILE_SUCCESS = exports.GET_MY_PROFILE_SUCCESS = 'GET_MY_PROFILE_SUCCESS';
var GET_MY_PROFILE_FAIL = exports.GET_MY_PROFILE_FAIL = 'GET_MY_PROFILE_FAIL';

var PUBLIC_PROFILE_REQUEST = exports.PUBLIC_PROFILE_REQUEST = 'PUBLIC_PROFILE_REQUEST';
var PUBLIC_PROFILE_SUCCESS = exports.PUBLIC_PROFILE_SUCCESS = 'PUBLIC_PROFILE_SUCCESS';
var PUBLIC_PROFILE_FAIL = exports.PUBLIC_PROFILE_FAIL = 'PUBLIC_PROFILE_FAIL';

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Profile = __webpack_require__(304);

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Profile2.default;

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxAuthWrapper = __webpack_require__(68);

var _reactRouterRedux = __webpack_require__(18);

var _index = __webpack_require__(303);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(238);

var _index4 = _interopRequireDefault(_index3);

var _Blog = __webpack_require__(264);

var _Blog2 = _interopRequireDefault(_Blog);

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
    component: __webpack_require__(266).default,
    indexRoute: {
      component: __webpack_require__(223).default
    },
    childRoutes: [(0, _index2.default)(store, connect), (0, _index4.default)(store, connect), (0, _Blog2.default)(store, connect), {
      path: 'profile',
      onEnter: connect(UserIsAuthenticated.onEnter),
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
          cb(null, UserIsAuthenticated(__webpack_require__(310).default));
        }).bind(null, __webpack_require__));
      }
    }, {
      path: 'profile/public/:id',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
          cb(null, __webpack_require__(308).default);
        }).bind(null, __webpack_require__));
      }
    }]
  };
};

/***/ },
/* 312 */
/***/ function(module, exports) {



/***/ },
/* 313 */
/***/ function(module, exports) {



/***/ },
/* 314 */
/***/ function(module, exports) {



/***/ },
/* 315 */
/***/ function(module, exports) {



/***/ },
/* 316 */
/***/ function(module, exports) {



/***/ },
/* 317 */
/***/ function(module, exports) {



/***/ },
/* 318 */
/***/ function(module, exports) {



/***/ },
/* 319 */
/***/ function(module, exports) {



/***/ },
/* 320 */
/***/ function(module, exports) {



/***/ },
/* 321 */
/***/ function(module, exports) {



/***/ },
/* 322 */
/***/ function(module, exports) {



/***/ },
/* 323 */
/***/ function(module, exports) {



/***/ },
/* 324 */
/***/ function(module, exports) {



/***/ },
/* 325 */
/***/ function(module, exports) {



/***/ },
/* 326 */
/***/ function(module, exports) {



/***/ },
/* 327 */
/***/ function(module, exports) {



/***/ },
/* 328 */
/***/ function(module, exports) {



/***/ },
/* 329 */
/***/ function(module, exports) {



/***/ },
/* 330 */
/***/ function(module, exports) {



/***/ },
/* 331 */
/***/ function(module, exports) {



/***/ },
/* 332 */
/***/ function(module, exports) {



/***/ },
/* 333 */
/***/ function(module, exports) {



/***/ },
/* 334 */
/***/ function(module, exports) {



/***/ },
/* 335 */
/***/ function(module, exports) {



/***/ },
/* 336 */
/***/ function(module, exports) {



/***/ },
/* 337 */
/***/ function(module, exports) {

module.exports = [
	{
		"name": "About",
		"id": "about",
		"href": "#"
	},
	{
		"name": "Blog",
		"id": "blog",
		"href": "/blog"
	},
	{
		"name": "Documentation",
		"id": "documentation",
		"href": "https://docs.boldr.io",
		"external": true
	}
];

/***/ },
/* 338 */
/***/ function(module, exports) {

(function(exports) {
  exports.noop = function(){};
})(typeof module === 'object' && typeof module.exports === 'object' ? module.exports : window);


/***/ },
/* 339 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 340 */
/***/ function(module, exports) {

module.exports = require("bluebird");

/***/ },
/* 341 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 342 */
/***/ function(module, exports) {

module.exports = require("debug");

/***/ },
/* 343 */
/***/ function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ },
/* 344 */
/***/ function(module, exports) {

module.exports = require("draft-js-import-html");

/***/ },
/* 345 */
/***/ function(module, exports) {

module.exports = require("draft-js/lib/KeyBindingUtil");

/***/ },
/* 346 */
/***/ function(module, exports) {

module.exports = require("draft-js/lib/getDefaultKeyBinding");

/***/ },
/* 347 */
/***/ function(module, exports) {

module.exports = require("draft-js/lib/isSoftNewlineEvent");

/***/ },
/* 348 */
/***/ function(module, exports) {

module.exports = require("events");

/***/ },
/* 349 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 350 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 351 */
/***/ function(module, exports) {

module.exports = require("http-proxy");

/***/ },
/* 352 */
/***/ function(module, exports) {

module.exports = require("node-fetch");

/***/ },
/* 353 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 354 */
/***/ function(module, exports) {

module.exports = require("react-router/es6");

/***/ },
/* 355 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/RouterContext");

/***/ },
/* 356 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/browserHistory");

/***/ },
/* 357 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/createMemoryHistory");

/***/ },
/* 358 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/match");

/***/ },
/* 359 */
/***/ function(module, exports) {

module.exports = require("redux-thunk");

/***/ },
/* 360 */
/***/ function(module, exports) {

module.exports = require("serialize-javascript");

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(103);


/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map