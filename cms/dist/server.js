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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 340);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("classnames");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("react-redux");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryHeader = exports.BoldrEditor = exports.Notifications = exports.Col = exports.Row = exports.Grid = exports.S3Uploader = exports.Loader = exports.TextField = exports.RadioButtonGroup = exports.SiteLogo = exports.Heading = exports.Hero = exports.BoldrLogo = undefined;

var _atm = __webpack_require__(62);

var _atm2 = _interopRequireDefault(_atm);

var _mol = __webpack_require__(203);

var _mol2 = _interopRequireDefault(_mol);

var _atm3 = __webpack_require__(131);

var _atm4 = _interopRequireDefault(_atm3);

var _atm5 = __webpack_require__(139);

var _atm6 = _interopRequireDefault(_atm5);

var _BoldrEditor = __webpack_require__(122);

var _BoldrEditor2 = _interopRequireDefault(_BoldrEditor);

var _RadioButtonGroup = __webpack_require__(45);

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

var _TextField = __webpack_require__(29);

var _TextField2 = _interopRequireDefault(_TextField);

var _atm7 = __webpack_require__(46);

var _atm8 = _interopRequireDefault(_atm7);

var _atm9 = __webpack_require__(140);

var _atm10 = _interopRequireDefault(_atm9);

var _atm11 = __webpack_require__(137);

var _atm12 = _interopRequireDefault(_atm11);

var _org = __webpack_require__(80);

var _org2 = __webpack_require__(39);

var _org3 = _interopRequireDefault(_org2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BoldrLogo = _atm2.default;
exports.Hero = _mol2.default;
exports.Heading = _atm4.default;
exports.SiteLogo = _atm6.default;
exports.RadioButtonGroup = _RadioButtonGroup2.default;
exports.TextField = _TextField2.default;
exports.Loader = _atm8.default;
exports.S3Uploader = _atm10.default;
exports.Grid = _org.Grid;
exports.Row = _org.Row;
exports.Col = _org.Col;
exports.Notifications = _atm12.default;
exports.BoldrEditor = _BoldrEditor2.default;
exports.PrimaryHeader = _org3.default;

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("react-dom");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AccessibleFakeButton = exports.IconButton = exports.FloatingButton = exports.RaisedButton = exports.FlatButton = exports.Button = undefined;

var _Button = __webpack_require__(49);

var _Button2 = _interopRequireDefault(_Button);

var _FlatButton = __webpack_require__(30);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(145);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FloatingButton = __webpack_require__(144);

var _FloatingButton2 = _interopRequireDefault(_FloatingButton);

var _IconButton = __webpack_require__(35);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _AccessibleFakeButton = __webpack_require__(48);

var _AccessibleFakeButton2 = _interopRequireDefault(_AccessibleFakeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _Button2.default;
exports.FlatButton = _FlatButton2.default;
exports.RaisedButton = _RaisedButton2.default;
exports.FloatingButton = _FloatingButton2.default;
exports.IconButton = _IconButton2.default;
exports.AccessibleFakeButton = _AccessibleFakeButton2.default;

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("superagent");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FontIcon = __webpack_require__(166);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FontIcon2.default;

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("stardust");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiClient = exports.jsonHeaders = exports.credentials = exports.processResponse = exports.TOKEN_KEY = exports.API_SETTINGS = exports.API_CATEGORY = exports.API_TAG = exports.API_NAVIGATION = exports.API_MEDIA = exports.API_USERS = exports.API_POSTS = exports.API_AUTH = exports.S3_SIGNING_URL = exports.API_BASE = undefined;

var _helpers = __webpack_require__(21);

var _ApiClient = __webpack_require__(81);

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.API_BASE = _helpers.API_BASE;
exports.S3_SIGNING_URL = _helpers.S3_SIGNING_URL;
exports.API_AUTH = _helpers.API_AUTH;
exports.API_POSTS = _helpers.API_POSTS;
exports.API_USERS = _helpers.API_USERS;
exports.API_MEDIA = _helpers.API_MEDIA;
exports.API_NAVIGATION = _helpers.API_NAVIGATION;
exports.API_TAG = _helpers.API_TAG;
exports.API_CATEGORY = _helpers.API_CATEGORY;
exports.API_SETTINGS = _helpers.API_SETTINGS;
exports.TOKEN_KEY = _helpers.TOKEN_KEY;
exports.processResponse = _helpers.processResponse;
exports.credentials = _helpers.credentials;
exports.jsonHeaders = _helpers.jsonHeaders;
exports.ApiClient = _ApiClient2.default;

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("redial");

/***/ },
/* 12 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Globals
// -----------------
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

// Notifications
// -----------------
var NOTIFICATION_SEND = exports.NOTIFICATION_SEND = 'NOTIFICATION_SEND';
var NOTIFICATION_DISMISS = exports.NOTIFICATION_DISMISS = 'NOTIFICATION_DISMISS';
var NOTIFICATION_CLEAR = exports.NOTIFICATION_CLEAR = 'NOTIFICATION_CLEAR';

// Posts
// -----------------
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
var CHANGE_STATUS_REQUEST = exports.CHANGE_STATUS_REQUEST = 'post/CHANGE_STATUS_REQUEST';
var CHANGE_STATUS_SUCCESS = exports.CHANGE_STATUS_SUCCESS = 'post/CHANGE_STATUS_SUCCESS';
var CHANGE_STATUS_FAILURE = exports.CHANGE_STATUS_FAILURE = 'post/CHANGE_STATUS_FAILURE';

// Auth
// -----------------
var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
var LOGIN_FAILURE = exports.LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE';
var LOGOUT_USER = exports.LOGOUT_USER = 'AUTH/LOGOUT_USER';
var LOGOUT_USER_FAIL = exports.LOGOUT_USER_FAIL = 'AUTH/LOGOUT_USER_FAIL';
var CHECK_AUTH_REQUEST = exports.CHECK_AUTH_REQUEST = 'AUTH/CHECK_AUTH_REQUEST';
var CHECK_AUTH_SUCCESS = exports.CHECK_AUTH_SUCCESS = 'AUTH/CHECK_AUTH_SUCCESS';
var CHECK_AUTH_FAILURE = exports.CHECK_AUTH_FAILURE = 'AUTH/CHECK_AUTH_FAILURE';

// Account
// -----------------
var CREATE_ACCOUNT_REQUEST = exports.CREATE_ACCOUNT_REQUEST = 'AUTH/CREATE_ACCOUNT_REQUEST';
var CREATE_ACCOUNT_SUCCESS = exports.CREATE_ACCOUNT_SUCCESS = 'AUTH/CREATE_ACCOUNT_SUCCESS';
var CREATE_ACCOUNT_FAILURE = exports.CREATE_ACCOUNT_FAILURE = 'AUTH/CREATE_ACCOUNT_FAILURE';
var FORGOT_PASSWORD_REQUEST = exports.FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
var FORGOT_PASSWORD_SUCCESS = exports.FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
var FORGOT_PASSWORD_FAILURE = exports.FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
var RESET_PASSWORD_REQUEST = exports.RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
var RESET_PASSWORD_SUCCESS = exports.RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
var RESET_PASSWORD_FAILURE = exports.RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

// Media
// -----------------
var GET_MEDIA_REQUEST = exports.GET_MEDIA_REQUEST = 'media/GET_MEDIA_REQUEST';
var GET_MEDIA_SUCCESS = exports.GET_MEDIA_SUCCESS = 'media/GET_MEDIA_SUCCESS';
var GET_MEDIA_FAILURE = exports.GET_MEDIA_FAILURE = 'media/GET_MEDIA_FAILURE';

var UPLOAD_REQUEST = exports.UPLOAD_REQUEST = 'media/UPLOAD_REQUEST';
var UPLOAD_SUCCESS = exports.UPLOAD_SUCCESS = 'media/UPLOAD_SUCCESS';
var UPLOAD_FAILURE = exports.UPLOAD_FAILURE = 'media/UPLOAD_FAILURE';

var DELETE_MEDIA_FAILURE = exports.DELETE_MEDIA_FAILURE = 'media/DELETE_MEDIA_FAILURE';
var DELETE_MEDIA_REQUEST = exports.DELETE_MEDIA_REQUEST = 'media/DELETE_MEDIA_REQUEST';
var DELETE_MEDIA_SUCCESS = exports.DELETE_MEDIA_SUCCESS = 'media/DELETE_MEDIA_SUCCESS';

// Members
// -----------------
var LOAD_MEMBERS_REQUEST = exports.LOAD_MEMBERS_REQUEST = 'members/LOAD_MEMBERS_REQUEST';
var LOAD_MEMBERS_SUCCESS = exports.LOAD_MEMBERS_SUCCESS = 'members/LOAD_MEMBERS_SUCCESS';
var LOAD_MEMBERS_FAILURE = exports.LOAD_MEMBERS_FAILURE = 'members/LOAD_MEMBERS_FAILURE';
var UPDATE_MEMBER_REQUEST = exports.UPDATE_MEMBER_REQUEST = 'members/UPDATE_MEMBER_REQUEST';
var UPDATE_MEMBER_SUCCESS = exports.UPDATE_MEMBER_SUCCESS = 'members/UPDATE_MEMBER_SUCCESS';
var UPDATE_MEMBER_FAILURE = exports.UPDATE_MEMBER_FAILURE = 'members/UPDATE_MEMBER_FAILURE';
var MEMBER_SELECTED = exports.MEMBER_SELECTED = 'members/MEMBER_SELECTED';

// Navigation / Links
// -----------------
var LOAD_NAVIGATION_REQUEST = exports.LOAD_NAVIGATION_REQUEST = 'navigation/LOAD_NAVIGATION_REQUEST';
var LOAD_NAVIGATION_SUCCESS = exports.LOAD_NAVIGATION_SUCCESS = 'navigation/LOAD_NAVIGATION_SUCCESS';
var LOAD_NAVIGATION_FAILURE = exports.LOAD_NAVIGATION_FAILURE = 'navigation/LOAD_NAVIGATION_FAILURE';

var UPDATE_NAVIGATION_REQUEST = exports.UPDATE_NAVIGATION_REQUEST = 'navigation/UPDATE_NAVIGATION_REQUEST';
var UPDATE_NAVIGATION_SUCCESS = exports.UPDATE_NAVIGATION_SUCCESS = 'navigation/UPDATE_NAVIGATION_SUCCESS';
var UPDATE_NAVIGATION_FAILURE = exports.UPDATE_NAVIGATION_FAILURE = 'navigation/UPDATE_NAVIGATION_FAILURE';

var ADD_NAVIGATION_LINK_REQUEST = exports.ADD_NAVIGATION_LINK_REQUEST = 'navigation/ADD_NAVIGATION_LINK_REQUEST';
var ADD_NAVIGATION_LINK_SUCCESS = exports.ADD_NAVIGATION_LINK_SUCCESS = 'navigation/ADD_NAVIGATION_LINK_SUCCESS';
var ADD_NAVIGATION_LINK_FAILURE = exports.ADD_NAVIGATION_LINK_FAILURE = 'navigation/ADD_NAVIGATION_LINK_FAILURE';

// Profile
// -----------------
var GET_MY_PROFILE_REQUEST = exports.GET_MY_PROFILE_REQUEST = 'GET_MY_PROFILE_REQUEST';
var GET_MY_PROFILE_SUCCESS = exports.GET_MY_PROFILE_SUCCESS = 'GET_MY_PROFILE_SUCCESS';
var GET_MY_PROFILE_FAIL = exports.GET_MY_PROFILE_FAIL = 'GET_MY_PROFILE_FAIL';

var PUBLIC_PROFILE_REQUEST = exports.PUBLIC_PROFILE_REQUEST = 'PUBLIC_PROFILE_REQUEST';
var PUBLIC_PROFILE_SUCCESS = exports.PUBLIC_PROFILE_SUCCESS = 'PUBLIC_PROFILE_SUCCESS';
var PUBLIC_PROFILE_FAIL = exports.PUBLIC_PROFILE_FAIL = 'PUBLIC_PROFILE_FAIL';

// Tags
// -----------------
var LOAD_TAG_REQUEST = exports.LOAD_TAG_REQUEST = 'LOAD_TAG_REQUEST';
var LOAD_TAG_SUCCESS = exports.LOAD_TAG_SUCCESS = 'LOAD_TAG_SUCCESS';
var LOAD_TAG_FAILURE = exports.LOAD_TAG_FAILURE = 'LOAD_TAG_FAILURE';

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notificationClear = exports.notificationDismiss = exports.notificationSend = undefined;
exports.default = notificationReducer;

var _actionTypes = __webpack_require__(12);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    dispatch({ type: _actionTypes.NOTIFICATION_SEND, payload: notification });

    if (notification.dismissAfter) {
      setTimeout(function () {
        dispatch({
          type: _actionTypes.NOTIFICATION_DISMISS,
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
  return { type: _actionTypes.NOTIFICATION_DISMISS, payload: id };
};

/**
 * Clear all notifications
 */
var notificationClear = exports.notificationClear = function notificationClear() {
  return { type: _actionTypes.NOTIFICATION_CLEAR };
};

function notificationReducer() {
  var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  if (!action || !action.type) return domain;

  switch (action.type) {
    case _actionTypes.NOTIFICATION_SEND:
      return [action.payload].concat(_toConsumableArray(domain));
    case _actionTypes.NOTIFICATION_DISMISS:
      return domain.filter(function (notification) {
        return notification.id !== action.payload;
      });
    case _actionTypes.NOTIFICATION_CLEAR:
      return [];
    default:
      return domain;
  }
}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CardActionOverlay = exports.CardText = exports.CardActions = exports.CardMedia = exports.CardTitle = exports.Card = undefined;

var _Card = __webpack_require__(146);

var _Card2 = _interopRequireDefault(_Card);

var _CardTitle = __webpack_require__(68);

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardMedia = __webpack_require__(148);

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CardActions = __webpack_require__(66);

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardText = __webpack_require__(149);

var _CardText2 = _interopRequireDefault(_CardText);

var _CardActionOverlay = __webpack_require__(147);

var _CardActionOverlay2 = _interopRequireDefault(_CardActionOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Card = _Card2.default;
exports.CardTitle = _CardTitle2.default;
exports.CardMedia = _CardMedia2.default;
exports.CardActions = _CardActions2.default;
exports.CardText = _CardText2.default;
exports.CardActionOverlay = _CardActionOverlay2.default;

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("jwt-decode");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("react-router-redux");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("redux-form");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _injectInk = __webpack_require__(168);

var _injectInk2 = _interopRequireDefault(_injectInk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _injectInk2.default;

/***/ },
/* 20 */
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
  var field = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';

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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processResponse = processResponse;
// This is the prefix for all of our API requests.
// You can leave as-is and the proxy will take care of everything
// If you change this value, the value in the server proxy will need to be changed
var API_BASE = exports.API_BASE = {"NODE_ENV":"production","SSR_PORT":3000}.API_BASE || '/api/v1';

var S3_SIGNING_URL = exports.S3_SIGNING_URL = '/s3/sign';
// Define all endpoints for easy imports.
var API_AUTH = exports.API_AUTH = API_BASE + '/auth';
var API_POSTS = exports.API_POSTS = API_BASE + '/posts';
var API_USERS = exports.API_USERS = API_BASE + '/users';
var API_LINKS = exports.API_LINKS = API_BASE + '/links';
var API_MEDIA = exports.API_MEDIA = API_BASE + '/media';
var API_TAG = exports.API_TAG = API_BASE + '/tags';
var API_SETTINGS = exports.API_SETTINGS = API_BASE + '/settings';
var API_NAVIGATION = exports.API_NAVIGATION = API_BASE + '/navigations';
// Here you can change the name of the token that is put into localStorage.
var TOKEN_KEY = exports.TOKEN_KEY = 'token';

var API_PORT = exports.API_PORT = {"NODE_ENV":"production","SSR_PORT":3000}.API_PORT || 3000;
var API_HOST = exports.API_HOST = {"NODE_ENV":"production","SSR_PORT":3000}.API_HOST || 'localhost';
var SSR_PORT = exports.SSR_PORT = 3000 || 3000;
var HOST = exports.HOST = {"NODE_ENV":"production","SSR_PORT":3000}.SSR_HOST || 'localhost';

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
/* 22 */
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
  },
  textField: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    border: 0
  },
  radio: {
    display: 'inline',
    marginTop: '20px',
    marginRight: '10px',
    float: 'right'
  }
};

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("react-helmet");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Divider = __webpack_require__(72);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Divider2.default;

/***/ },
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.signup = signup;
exports.login = login;
exports.logout = logout;
exports.checkAuth = checkAuth;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;
exports.default = authReducer;

var _reduxForm = __webpack_require__(18);

var _jwtDecode = __webpack_require__(15);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _reactRouterRedux = __webpack_require__(17);

var _auth = __webpack_require__(208);

var api = _interopRequireWildcard(_auth);

var _helpers = __webpack_require__(21);

var _notificationMessages = __webpack_require__(54);

var notif = _interopRequireWildcard(_notificationMessages);

var _actionTypes = __webpack_require__(12);

var types = _interopRequireWildcard(_actionTypes);

var _notifications = __webpack_require__(13);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Error catcher to prevent redux-form from swallowing
 * @param {object} error
 * @returns {Promise.<*>}
 */
var catchValidation = function catchValidation(error) {
  if (error.message) {
    if (error.message === 'Validation failed' && error.data) {
      throw new _reduxForm.SubmissionError(error.data);
    }
    throw new _reduxForm.SubmissionError({ _error: error.message });
  }
  return Promise.reject(error);
};

// Signup
// -----------------
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

    return api.doSignup(data).then(function (response) {
      if (!response.status === 201) {
        dispatch(signUpError('Oops! Something went wrong'));
        dispatch((0, _notifications.notificationSend)(notif.MSG_SIGNUP_ERROR));
      }
      dispatch(signUpSuccess(response));
      dispatch((0, _reactRouterRedux.push)('/'));
      dispatch((0, _notifications.notificationSend)(notif.MSG_SIGNUP_SUCCESS));
    });
  };
}

// Login
// -----------------
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
    return api.doLogin(loginData).then(function (response) {
      if (!response.status === 200) {
        dispatch(loginError(err));
        dispatch((0, _notifications.notificationSend)(notif.MSG_LOGIN_ERROR(err)));
      }
      localStorage.setItem(_helpers.TOKEN_KEY, response.body.token);
      dispatch(loginSuccess(response));
      dispatch((0, _notifications.notificationSend)(notif.MSG_LOGIN_SUCCESS));
      dispatch((0, _reactRouterRedux.push)('/'));
    });
  };
}

// Logout
// -----------------
function logoutSuccess() {
  return { type: types.LOGOUT_USER };
}

function logout() {
  return function (dispatch) {
    localStorage.removeItem(_helpers.TOKEN_KEY);
    dispatch(logoutSuccess());
    dispatch((0, _notifications.notificationSend)(notif.MSG_LOGOUT));
  };
}

// Auth Check
// -----------------
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
    return api.doAuthCheck(token).then(function (response) {
      if (!response.status === 200) {
        dispatch(checkAuthFailure('Token is invalid'));
        dispatch((0, _notifications.notificationSend)(notif.MSG_AUTH_ERROR));
      }
      dispatch(checkAuthSuccess(response, token));
    });
  };
}

// Forgot Password
// -----------------
function forgotPassword(email) {
  return function (dispatch) {
    dispatch({
      type: types.FORGOT_PASSWORD_REQUEST
    });
    return api.doForgotPassword(email).then(function (response) {
      if (response.ok) {
        return response.json().then(function (json) {
          dispatch({
            type: types.FORGOT_PASSWORD_SUCCESS
          });
          dispatch((0, _reactRouterRedux.push)('/'));
          dispatch((0, _notifications.notificationSend)(notif.MSG_FORGOT_PW_ERROR));
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

// Reset Password
// -----------------
function resetPassword(password, token) {
  return function (dispatch) {
    dispatch({
      type: types.RESET_PASSWORD_REQUEST
    });
    return api.doResetPassword(password, token).then(function (response) {
      if (response.ok) {
        return response.json().then(function (json) {
          browserHistory.push('/login');
          dispatch({
            type: types.RESET_PASSWORD_SUCCESS
          });
          dispatch((0, _reactRouterRedux.push)('/'));
          dispatch((0, _notifications.notificationSend)(notifs.MSG_RESET_PW_SUCCESS));
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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case types.LOGIN_FAILURE:
    case types.FORGOT_PASSWORD_FAILURE:
    case types.CREATE_ACCOUNT_FAILURE:
    case types.RESET_PASSWORD_FAILURE:
      return _extends({}, state, {
        isLoading: false,
        isAuthenticated: false,
        error: action.error
      });
    case types.LOGIN_REQUEST:
    case types.CHECK_AUTH_REQUEST:
    case types.CREATE_ACCOUNT_REQUEST:
    case types.FORGOT_PASSWORD_REQUEST:
    case types.RESET_PASSWORD_REQUEST:
      return _extends({}, state, {
        isLoading: true,
        isAuthenticated: false
      });
    case types.LOGIN_SUCCESS:
    case types.CHECK_AUTH_SUCCESS:
      return _extends({}, state, {
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
      return _extends({}, state, {
        isLoading: false,
        isAuthenticated: false,
        token: '',
        user: {}
      });
    case types.CREATE_ACCOUNT_SUCCESS:
      return _extends({}, state, {
        isLoading: false
      });
    case types.RESET_PASSWORD_SUCCESS:
      return _extends({}, state, {
        isLoading: false
      });
    case types.FORGOT_PASSWORD_SUCCESS:
      return _extends({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPostsArray = exports.getSelectedPost = exports.getPostIdParam = exports.getPosts = exports.postsToState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable default-case */


exports.fetchPostsIfNeeded = fetchPostsIfNeeded;
exports.fetchPosts = fetchPosts;
exports.createPost = createPost;
exports.selectPost = selectPost;
exports.changePostStatus = changePostStatus;
exports.default = postsReducer;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reselect = __webpack_require__(336);

var _index = __webpack_require__(9);

var _post = __webpack_require__(213);

var api = _interopRequireWildcard(_post);

var _actionTypes = __webpack_require__(12);

var types = _interopRequireWildcard(_actionTypes);

var _notifications = __webpack_require__(13);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var requestPosts = function requestPosts() {
  return { type: types.FETCH_POSTS_REQUEST };
};
var receivePosts = function receivePosts(response) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    results: response.body.results,
    total: response.body.total
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
  var posts = state.posts.results;
  if (!posts) {
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
    return api.doFetchPosts().then(function (response) {
      if (!response.status === 200) {
        dispatch(receivePostsFailed());
      }
      console.log(response);
      dispatch(receivePosts(response));
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
function createPost(data) {
  return function (dispatch) {
    dispatch(beginCreatePost());
    return api.doCreatePost(data).then(function (response) {
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
    return api.doSelectPost(postId).then(function (response) {
      if (response.status === 200) {
        dispatch(receiveSelectedPost(response));
      }
    }).catch(function (err) {
      dispatch(receiveSelectedPostFailed(err));
    });
  };
}

var beginChangeStatus = function beginChangeStatus() {
  return { type: types.CHANGE_STATUS_REQUEST };
};

var changeStatusDone = function changeStatusDone(response) {
  return {
    type: types.CHANGE_STATUS_SUCCESS,
    payload: response.body
  };
};
var changeStatusFailed = function changeStatusFailed(err) {
  return {
    type: types.CHANGE_STATUS_FAILURE,
    error: err
  };
};

function changePostStatus(postId, postStatus) {
  return function (dispatch) {
    dispatch(beginChangeStatus());
    return api.doChangeStatus(postId, postStatus).then(function (response) {
      if (response.status === 202) {
        dispatch(changeStatusDone(response));
      }
    }).catch(function (err) {
      dispatch(changeStatusFailed(err));
    });
  };
}

//
// Selectors
// -----------------

var postsToState = exports.postsToState = function postsToState(list) {
  return list.reduce(function (list, a) {
    return _extends({}, list, _defineProperty({}, a.id, a));
  }, {});
};

var getPosts = exports.getPosts = function getPosts(state) {
  return state.posts;
};
var getPostIdParam = exports.getPostIdParam = function getPostIdParam(state, params) {
  return params.postId;
};

var getSelectedPost = exports.getSelectedPost = (0, _reselect.createSelector)(getPosts, getPostIdParam, function (posts, id) {
  return posts[id];
});

var getPostsArray = exports.getPostsArray = (0, _reselect.createSelector)(getPosts, function (posts) {
  return Object.keys(posts).map(function (k) {
    return posts[k];
  });
});

//
// Reducer
// -----------------
var INITIAL_STATE = {
  isLoading: false,
  error: null
};

/**
 * Blog Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
function postsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
    case types.LOAD_POST_REQUEST:
    case types.CREATE_POST_REQUEST:
    case types.CHANGE_STATUS_REQUEST:
      return _extends({}, state, {
        isLoading: true
      });
    case types.FETCH_POSTS_SUCCESS:
      return _extends({}, state, {
        isLoading: false,
        total: action.total,
        results: action.results
      });
    case types.LOAD_POST_SUCCESS:
      return _extends({}, state, {
        isLoading: false,
        selectedPost: action.payload
      });
    case types.CREATE_POST_SUCCESS:
      return _extends({}, state, {
        isLoading: false
      });
    case types.CHANGE_STATUS_SUCCESS:
      return _extends({}, state, _defineProperty({}, action.payload.id, {
        created_at: state.created_at,
        excerpt: state.excerpt,
        feature_image: action.payload.feature_image,
        id: action.payload.id,
        slug: action.payload.slug,
        title: action.payload.title,
        updated_at: action.payload.updated_at,
        user_id: action.payload.user_id,
        status: action.payload.status
      }));

    case types.FETCH_POSTS_FAILURE:
    case types.LOAD_POST_FAILURE:
    case types.CREATE_POST_FAIL:
    case types.CHANGE_STATUS_FAILURE:
      return _extends({}, state, {
        isLoading: false,
        error: action.error
      });
    case types.SELECT_POST:
      return _extends({}, state, {
        isLoading: false,
        id: action.id,
        isEditing: true
      });
    case types.SELECT_POST_SUCCESS:
      return _extends({}, state, {
        isLoading: false,
        current: action.current,
        isEditing: true
      });
    case types.SELECT_POST_FAIL:
      return _extends({}, state, {
        isLoading: false,
        error: action.error,
        isEditing: true
      });
    default:
      return state;
  }
}

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("draft-js");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stardust = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderTextField = function renderTextField(_ref) {
  var input = _ref.input;
  var type = _ref.type;
  var label = _ref.label;
  return _react2.default.createElement(_stardust.Form.Input, _extends({}, input, { type: type, placeholder: label }));
};

renderTextField.propTypes = {
  input: _react.PropTypes.object.isRequired,
  type: _react.PropTypes.string.isRequired,
  label: _react.PropTypes.string.isRequired
};

exports.default = renderTextField;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = __webpack_require__(49);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Any other props such as style or event listeners will also
 * be applied to the button.
 */
var FlatButton = (_temp = _class = function (_PureComponent) {
  _inherits(FlatButton, _PureComponent);

  function FlatButton() {
    _classCallCheck(this, FlatButton);

    return _possibleConstructorReturn(this, (FlatButton.__proto__ || Object.getPrototypeOf(FlatButton)).apply(this, arguments));
  }

  _createClass(FlatButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['className']);

      return _react2.default.createElement(_Button2.default, _extends({}, props, { className: (0, _classnames2.default)('md-flat-btn', className) }));
    }
  }]);

  return FlatButton;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  type: 'button',
  iconBefore: true
}, _temp);
exports.default = FlatButton;

/***/ },
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Paper = __webpack_require__(178);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Paper2.default;

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("react-router");

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("redux");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _FontIcons = __webpack_require__(7);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Inks = __webpack_require__(19);

var _Inks2 = _interopRequireDefault(_Inks);

var _Tooltips = __webpack_require__(199);

var _Tooltips2 = _interopRequireDefault(_Tooltips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `IconButton` component automatically includes ink and a tooltip.
 * The tooltip will only be included if the `tooltipLabel` prop is given.
 *
 * Any other props (such as style or event listeners) will also be
 * applied.
 */
var IconButton = (_temp = _class = function (_PureComponent) {
  _inherits(IconButton, _PureComponent);

  function IconButton() {
    _classCallCheck(this, IconButton);

    return _possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
  }

  _createClass(IconButton, [{
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

      var props = _objectWithoutProperties(_props, ['iconClassName', 'children', 'className', 'href', 'type', 'tooltip', 'disabled', 'ink']);

      delete props.tooltipLabel;
      delete props.tooltipPosition;

      var btnProps = _extends({}, props, {
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
        displayedChildren = _react2.default.createElement(
          _FontIcons2.default,
          { key: 'icon', iconClassName: iconClassName },
          children
        );
      }

      return _react2.default.createElement(href ? 'a' : 'button', btnProps, [ink, displayedChildren, tooltip]);
    }
  }]);

  return IconButton;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  type: 'button'
}, _temp);
exports.default = (0, _Tooltips2.default)((0, _Inks2.default)(IconButton));

/***/ },
/* 36 */
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TablePagination = exports.EditDialogColumn = exports.TableColumn = exports.TableRow = exports.TableBody = exports.TableHeader = exports.DataTable = undefined;

var _DataTable = __webpack_require__(150);

var _DataTable2 = _interopRequireDefault(_DataTable);

var _TableHeader = __webpack_require__(154);

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableBody = __webpack_require__(152);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableRow = __webpack_require__(156);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableColumn = __webpack_require__(69);

var _TableColumn2 = _interopRequireDefault(_TableColumn);

var _EditDialogColumn = __webpack_require__(151);

var _EditDialogColumn2 = _interopRequireDefault(_EditDialogColumn);

var _TablePagination = __webpack_require__(155);

var _TablePagination2 = _interopRequireDefault(_TablePagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DataTable = _DataTable2.default;
exports.TableHeader = _TableHeader2.default;
exports.TableBody = _TableBody2.default;
exports.TableRow = _TableRow2.default;
exports.TableColumn = _TableColumn2.default;
exports.EditDialogColumn = _EditDialogColumn2.default;
exports.TablePagination = _TablePagination2.default;

/***/ },
/* 38 */
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PrimaryHeader = __webpack_require__(207);

var _PrimaryHeader2 = _interopRequireDefault(_PrimaryHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PrimaryHeader2.default;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.goHome = goHome;
exports.fetchSettingsIfNeeded = fetchSettingsIfNeeded;
exports.updateBoldrSettings = updateBoldrSettings;
exports.default = boldrReducer;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _redux = __webpack_require__(34);

var _reactRouterRedux = __webpack_require__(17);

var _boldr = __webpack_require__(209);

var api = _interopRequireWildcard(_boldr);

var _index = __webpack_require__(9);

var _actionTypes = __webpack_require__(12);

var types = _interopRequireWildcard(_actionTypes);

var _notifications = __webpack_require__(13);

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
    siteLogo: response.body.site_logo,
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
    return api.doLoadSettings().then(function (response) {
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
  if (state.boldr.siteName) {
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

var failUpdateSettings = function failUpdateSettings(err) {
  return {
    type: types.UPDATE_SETTINGS_FAILURE,
    error: err
  };
};

function updateBoldrSettings(data, id) {
  return function (dispatch) {
    dispatch(beginUpdateSettings());
    return api.doUpdateSettings(data, id).then(function (response) {
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
  isLoading: false
};

function boldrReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case types.LOAD_SETTINGS:
      return _extends({}, state, {
        isLoading: true
      });
    case types.LOAD_SETTINGS_SUCCESS:
      return _extends({}, state, {
        isLoading: false,
        siteName: action.siteName,
        description: action.description,
        siteLogo: action.siteLogo,
        siteUrl: action.siteUrl,
        favicon: action.favicon,
        slogan: action.slogan,
        analyticsId: action.analyticsId,
        configuration: action.configuration
      });
    case types.LOAD_SETTINGS_FAILURE:
      return _extends({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.updateNavLinks = updateNavLinks;
exports.addNavLinks = addNavLinks;
exports.default = navigationReducer;
exports.isLoaded = isLoaded;
exports.loadPrimary = loadPrimary;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _notifications = __webpack_require__(13);

var _navigation = __webpack_require__(212);

var api = _interopRequireWildcard(_navigation);

var _notificationMessages = __webpack_require__(54);

var notif = _interopRequireWildcard(_notificationMessages);

var _actionTypes = __webpack_require__(12);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var beginUpdateNav = function beginUpdateNav() {
  return { type: types.UPDATE_NAVIGATION_REQUEST };
};

var doneUpdateNav = function doneUpdateNav(response) {
  return { type: types.UPDATE_NAVIGATION_SUCCESS };
};

var failUpdateNav = function failUpdateNav(err) {
  return {
    type: types.UPDATE_NAVIGATION_FAILURE,
    error: err
  };
};

function updateNavLinks(data) {
  return function (dispatch) {
    dispatch(beginUpdateNav());
    return api.doUpdateNavigationLinks(data).then(function (response) {
      dispatch(doneUpdateNav(response));
      dispatch((0, _notifications.notificationSend)(notif.MSG_UPDATE_LINK_SUCCESS));
    }).catch(function (err) {
      dispatch(failUpdateNav(err.message));
      dispatch((0, _notifications.notificationSend)(notif.MSG_UPDATE_LINK_ERROR));
    });
  };
}

var beginAddNavLink = function beginAddNavLink() {
  return { type: types.ADD_NAVIGATION_LINK_REQUEST };
};

var doneAddNavLink = function doneAddNavLink(response) {
  return { type: types.ADD_NAVIGATION_LINK_SUCCESS };
};

var failAddNavLink = function failAddNavLink(err) {
  return {
    type: types.ADD_NAVIGATION_LINK_FAILURE,
    error: err
  };
};

function addNavLinks(data) {
  return function (dispatch) {
    dispatch(beginAddNavLink());
    return api.doAddNavigationLinks(data).then(function (response) {
      if (!response.status === 201) {
        dispatch(failAddNavLink('Error'));
        dispatch((0, _notifications.notificationSend)(notif.MSG_ADD_LINK_ERROR));
      }
      dispatch(doneAddNavLink(response));
      dispatch((0, _notifications.notificationSend)(notif.MSG_ADD_LINK_SUCCESS));
    });
  };
}
var initialState = {
  loaded: false
};

function navigationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case types.LOAD_NAVIGATION_REQUEST:
    case types.UPDATE_NAVIGATION_REQUEST:
    case types.ADD_NAVIGATION_LINK_REQUEST:
      return _extends({}, state, {
        loading: true
      });
    case types.LOAD_NAVIGATION_SUCCESS:
      return _extends({}, state, {
        loading: false,
        loaded: true,
        primary: action.result
      });
    case types.LOAD_NAVIGATION_FAILURE:
    case types.UPDATE_NAVIGATION_FAILURE:
    case types.ADD_NAVIGATION_LINK_FAILURE:
      return _extends({}, state, {
        loading: false,
        loaded: false,
        error: action.error
      });
    default:
      return state;
  }
}

function isLoaded(globalState) {
  return globalState.navigation && globalState.navigation.loaded;
}

function loadPrimary() {
  return {
    types: [types.LOAD_NAVIGATION_REQUEST, types.LOAD_NAVIGATION_SUCCESS, types.LOAD_NAVIGATION_FAILURE],
    promise: function promise(client) {
      return client.get('/navigations/1');
    }
  };
}

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("react-addons-transition-group");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleButton = (_temp = _class = function (_Component) {
  _inherits(StyleButton, _Component);

  function StyleButton() {
    _classCallCheck(this, StyleButton);

    var _this = _possibleConstructorReturn(this, (StyleButton.__proto__ || Object.getPrototypeOf(StyleButton)).call(this));

    _this.onToggle = function (e) {
      e.preventDefault();
      _this.props.onToggle(_this.props.style);
    };
    return _this;
  }

  _createClass(StyleButton, [{
    key: 'render',
    value: function render() {
      var className = 'DraftJSEditor-styleButton';
      if (this.props.active) {
        className += ' DraftJSEditor-activeButton';
      }

      return _react2.default.createElement(
        'span',
        { className: className, onMouseDown: this.onToggle, title: this.props.label },
        this.props.icon ? this.props.icon : this.props.label
      );
    }
  }]);

  return StyleButton;
}(_react.Component), _class.propTypes = {
  onToggle: _react.PropTypes.func,
  style: _react.PropTypes.string,
  active: _react.PropTypes.bool,
  icon: _react.PropTypes.node,
  label: _react.PropTypes.string
}, _temp);
exports.default = StyleButton;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INLINE_CONTROLS = exports.BLOCK_CONTROLS = exports.INLINE_STYLES = exports.BLOCK_TYPES = undefined;
exports.validator = validator;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Blockquote = __webpack_require__(105);

var _Blockquote2 = _interopRequireDefault(_Blockquote);

var _Bold = __webpack_require__(106);

var _Bold2 = _interopRequireDefault(_Bold);

var _Codeblock = __webpack_require__(107);

var _Codeblock2 = _interopRequireDefault(_Codeblock);

var _H = __webpack_require__(108);

var _H2 = _interopRequireDefault(_H);

var _H3 = __webpack_require__(109);

var _H4 = _interopRequireDefault(_H3);

var _H5 = __webpack_require__(110);

var _H6 = _interopRequireDefault(_H5);

var _H7 = __webpack_require__(111);

var _H8 = _interopRequireDefault(_H7);

var _H9 = __webpack_require__(112);

var _H10 = _interopRequireDefault(_H9);

var _H11 = __webpack_require__(113);

var _H12 = _interopRequireDefault(_H11);

var _Italic = __webpack_require__(114);

var _Italic2 = _interopRequireDefault(_Italic);

var _Link = __webpack_require__(115);

var _Link2 = _interopRequireDefault(_Link);

var _Monospace = __webpack_require__(116);

var _Monospace2 = _interopRequireDefault(_Monospace);

var _OrderedList = __webpack_require__(117);

var _OrderedList2 = _interopRequireDefault(_OrderedList);

var _Underline = __webpack_require__(119);

var _Underline2 = _interopRequireDefault(_Underline);

var _UnorderedList = __webpack_require__(120);

var _UnorderedList2 = _interopRequireDefault(_UnorderedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validator(controls) {
  return function (propValue, key, componentName, location, propFullName) {
    var errors = propValue.map(function (value) {
      return controls.indexOf(value) !== -1;
    });
    if (!errors.every(function (error) {
      return !!error;
    })) {
      return new Error('Invalid prop ' + propFullName + ' supplied to ' + componentName);
    }
  };
}

var BLOCK_TYPES = exports.BLOCK_TYPES = [{ label: 'H1', style: 'header-one', icon: _react2.default.createElement(_H2.default, null) }, { label: 'H2', style: 'header-two', icon: _react2.default.createElement(_H4.default, null) }, { label: 'H3', style: 'header-three', icon: _react2.default.createElement(_H6.default, null) }, { label: 'H4', style: 'header-four', icon: _react2.default.createElement(_H8.default, null) }, { label: 'H5', style: 'header-five', icon: _react2.default.createElement(_H10.default, null) }, { label: 'H6', style: 'header-six', icon: _react2.default.createElement(_H12.default, null) }, { label: 'UL', style: 'unordered-list-item', icon: _react2.default.createElement(_UnorderedList2.default, null) }, { label: 'OL', style: 'ordered-list-item', icon: _react2.default.createElement(_OrderedList2.default, null) }, { label: 'Blockquote', style: 'blockquote', icon: _react2.default.createElement(_Blockquote2.default, null) }, { label: 'Code Block', style: 'code-block', icon: _react2.default.createElement(_Codeblock2.default, null) }];

var INLINE_STYLES = exports.INLINE_STYLES = [{ label: 'Bold', style: 'BOLD', icon: _react2.default.createElement(_Bold2.default, null) }, { label: 'Italic', style: 'ITALIC', icon: _react2.default.createElement(_Italic2.default, null) }, { label: 'Underline', style: 'UNDERLINE', icon: _react2.default.createElement(_Underline2.default, null) }, { label: 'Monospace', style: 'CODE', icon: _react2.default.createElement(_Monospace2.default, null) }, { label: 'Link', style: 'LINK', icon: _react2.default.createElement(_Link2.default, null) }];

var BLOCK_CONTROLS = exports.BLOCK_CONTROLS = BLOCK_TYPES.map(function (type) {
  return type.label;
});
var INLINE_CONTROLS = exports.INLINE_CONTROLS = INLINE_STYLES.map(function (style) {
  return style.label;
});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RadioGroup = __webpack_require__(186);

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _createFormComponent = __webpack_require__(63);

var _createFormComponent2 = _interopRequireDefault(_createFormComponent);

var _mapError = __webpack_require__(64);

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createFormComponent2.default)(_RadioGroup2.default, _mapError2.default);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = __webpack_require__(134);

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

var _Avatar = __webpack_require__(143);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Avatar2.default;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _reactDom = __webpack_require__(4);

var _keyCodes = __webpack_require__(25);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `AccessibleFakeButton` is a generic component that can be used to render
 * a `div` or any other non `button` components as a button. This should not be
 * used often.
 *
 * The `AccessibleFakeButton` allows the user to tab focus the element, use the
 * space or enter key to trigger the `onClick` event, and toggles the `aria-pressed`
 * attribute.
 */
var AccessibleFakeButton = (_temp = _class = function (_PureComponent) {
  _inherits(AccessibleFakeButton, _PureComponent);

  function AccessibleFakeButton(props) {
    _classCallCheck(this, AccessibleFakeButton);

    var _this = _possibleConstructorReturn(this, (AccessibleFakeButton.__proto__ || Object.getPrototypeOf(AccessibleFakeButton)).call(this, props));

    _this.state = { pressed: false };
    _this._handleClick = _this._handleClick.bind(_this);
    _this._handleKeyUp = _this._handleKeyUp.bind(_this);
    return _this;
  }

  _createClass(AccessibleFakeButton, [{
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

      var props = _objectWithoutProperties(_props, ['component', 'children', 'disabled', 'tabIndex']);

      delete props.onClick;
      delete props.onKeyUp;

      return (0, _react.createElement)(component, _extends({}, props, {
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
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  component: 'div',
  tabIndex: 0
}, _temp);
exports.default = AccessibleFakeButton;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Inks = __webpack_require__(19);

var _Inks2 = _interopRequireDefault(_Inks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (_temp = _class = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this._renderChildren = _this._renderChildren.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: '_renderChildren',
    value: function _renderChildren() {
      var _props = this.props;
      var children = _props.children;
      var iconBefore = _props.iconBefore;
      var label = _props.label;

      if (!children) {
        return label;
      } else if (children) {
        return _react2.default.createElement(
          'div',
          { className: 'icon-separator', key: 'label-icons' },
          iconBefore && children,
          _react2.default.createElement(
            'span',
            { className: 'text' },
            label
          ),
          !iconBefore && children
        );
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

      var props = _objectWithoutProperties(_props2, ['className', 'href', 'primary', 'secondary', 'ink']);

      delete props.iconBefore;
      delete props.label;
      delete props.children;

      return _react2.default.createElement(href ? 'a' : 'button', _extends({}, props, {
        href: href,
        className: (0, _classnames2.default)('md-btn', className, {
          'md-primary': primary,
          'md-secondary': secondary
        })
      }), [ink, this._renderChildren()]);
    }
  }]);

  return Button;
}(_react.Component), _class.propTypes = {
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
}, _class.defaultProps = {
  type: 'button',
  iconBefore: true
}, _temp);
exports.default = (0, _Inks2.default)(Button);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Subheaders = __webpack_require__(78);

var _Subheaders2 = _interopRequireDefault(_Subheaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Lists present multiple line items vertically as a single continuous element.
 */
var List = (_temp = _class = function (_PureComponent) {
  _inherits(List, _PureComponent);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var subheader = _props.subheader;
      var children = _props.children;
      var primarySubheader = _props.primarySubheader;
      var ordered = _props.ordered;

      var props = _objectWithoutProperties(_props, ['className', 'subheader', 'children', 'primarySubheader', 'ordered']);

      var allChildren = children;
      if (subheader) {
        allChildren = [_react2.default.createElement(_Subheaders2.default, { key: 'subheader', primary: primarySubheader, primaryText: subheader })].concat(children);
      }

      return _react2.default.createElement(ordered ? 'ol' : 'ul', _extends({
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
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = List;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTransitionGroup = __webpack_require__(42);

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Buttons = __webpack_require__(5);

var _Transitions = __webpack_require__(201);

var _List = __webpack_require__(50);

var _List2 = _interopRequireDefault(_List);

var _ListTile = __webpack_require__(170);

var _ListTile2 = _interopRequireDefault(_ListTile);

var _ListItemText = __webpack_require__(73);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A component for rendering a `li` component with icons, avatars, and text.
 *
 * Any remaing props will be passed to the inner `ListItem` component. This
 * will allow you to use custom components such as `react-router`'s `Link`
 * component.
 */
var ListItem = (_temp = _class = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

    _this.state = { isOpen: props.initiallyOpen, hover: false };

    _this._renderLeftChildren = _this._renderLeftChildren.bind(_this);
    _this._renderRightChildren = _this._renderRightChildren.bind(_this);
    _this._toggleNestedItems = _this._toggleNestedItems.bind(_this);
    _this._handleClick = _this._handleClick.bind(_this);
    return _this;
  }

  _createClass(ListItem, [{
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
          return _react2.default.createElement(_Buttons.IconButton, {
            key: 'toggle',
            disabled: disabled,
            onClick: this._toggleNestedItems,
            iconClassName: expanderIconClassName,
            className: className,
            children: expanderIconChildren
          });
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

      var props = _objectWithoutProperties(_props4, ['component', 'className', 'style', 'tileClassName', 'tileStyle', 'primaryText', 'secondaryText', 'threeLines', 'leftIcon', 'leftAvatar', 'rightAvatar', 'nestedItems', 'disabled']);

      delete props.rightIcon;
      delete props.expanderIconClassName;
      delete props.expanderIconChildren;
      delete props.isOpen;
      delete props.onExpanderClick;
      delete props.initiallyOpen;
      delete props.expandOnClick;

      var children = void 0;
      if (this._isOpen(this.props, this.state) && nestedItems && nestedItems.length) {
        children = _react2.default.createElement(
          _Transitions.Height,
          { key: 'nested-list' },
          _react2.default.createElement(
            _List2.default,
            null,
            nestedItems
          )
        );
      }

      return _react2.default.createElement(
        _reactAddonsTransitionGroup2.default,
        {
          component: 'li',
          className: (0, _classnames2.default)('md-list-item', className, { hover: hover }),
          style: style
        },
        _react2.default.createElement(
          _ListTile2.default,
          _extends({}, props, {
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
          _react2.default.createElement(_ListItemText2.default, {
            key: 'text',
            primaryText: primaryText,
            secondaryText: secondaryText,
            className: (0, _classnames2.default)({
              'avatar-offset': !!leftAvatar,
              'icon-offset': !!leftIcon
            })
          }),
          this._renderRightChildren()
        ),
        children
      );
    }
  }]);

  return ListItem;
}(_react.Component), _class.propTypes = {
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
}, _class.defaultProps = {
  component: 'div',
  initiallyOpen: false,
  expanderIconChildren: 'keyboard_arrow_down',
  expandOnClick: true
}, _temp);
exports.default = ListItem;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextField = __webpack_require__(196);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextField2.default;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /* eslint-disable no-param-reassign */


var _react = __webpack_require__(0);

var _reactDom = __webpack_require__(4);

var _utils = __webpack_require__(20);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Height = (_temp = _class = function (_Component) {
  _inherits(Height, _Component);

  function Height(props) {
    _classCallCheck(this, Height);

    var _this = _possibleConstructorReturn(this, (Height.__proto__ || Object.getPrototypeOf(Height)).call(this, props));

    _this._init = _this._init.bind(_this);
    _this._animatePadding = _this._animatePadding.bind(_this);
    return _this;
  }

  _createClass(Height, [{
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

      var isEnter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

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
}(_react.Component), _class.propTypes = {
  children: _react.PropTypes.node,
  transitionEnterTimeout: _react.PropTypes.number.isRequired,
  transitionLeaveTimeout: _react.PropTypes.number.isRequired,
  increment: _react.PropTypes.number.isRequired
}, _class.defaultProps = {
  transitionEnterTimeout: 150,
  transitionLeaveTimeout: 150,
  increment: 15
}, _temp);
exports.default = Height;

/***/ },
/* 54 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MSG_SIGNUP_ERROR = exports.MSG_SIGNUP_ERROR = {
  message: 'There was a problem creating your account.', kind: 'error', dismissAfter: 3000
};

var MSG_SIGNUP_SUCCESS = exports.MSG_SIGNUP_SUCCESS = {
  message: 'Your account has been created!', kind: 'success', dismissAfter: 3000
};

var MSG_LOGIN_ERROR = exports.MSG_LOGIN_ERROR = function MSG_LOGIN_ERROR(err) {
  return {
    message: 'There was a problem logging in to your account: ' + err, kind: 'error', dismissAfter: 3000
  };
};

var MSG_LOGIN_SUCCESS = exports.MSG_LOGIN_SUCCESS = {
  message: 'Welcome back!', kind: 'success', dismissAfter: 3000
};

var MSG_LOGOUT = exports.MSG_LOGOUT = {
  message: 'You are now logged out of your account.', kind: 'info', dismissAfter: 3000
};

var MSG_AUTH_ERROR = exports.MSG_AUTH_ERROR = {
  message: 'There was a problem authenticating. Please login again.', kind: 'error', dismissAfter: 3000
};

var MSG_FORGOT_PW_ERROR = exports.MSG_FORGOT_PW_ERROR = {
  message: 'An email has been sent with instructions to reset your password', kind: 'error', dismissAfter: 3000
};

var MSG_RESET_PW_SUCCESS = exports.MSG_RESET_PW_SUCCESS = {
  message: 'Your password has been reset. You may now login with it.', kind: 'success', dismissAfter: 3000
};

var MSG_UPDATE_MEMBER_ERROR = exports.MSG_UPDATE_MEMBER_ERROR = {
  message: 'There was a problem updating the user.', kind: 'error', dismissAfter: 3000
};

var MSG_UPDATE_MEMBER_SUCCESS = exports.MSG_UPDATE_MEMBER_SUCCESS = {
  message: 'Updated the user successfully.', kind: 'success', dismissAfter: 3000
};

var MSG_UPDATE_LINK_ERROR = exports.MSG_UPDATE_LINK_ERROR = {
  message: 'There was a problem updating the navigation link.', kind: 'error', dismissAfter: 3000
};

var MSG_UPDATE_LINK_SUCCESS = exports.MSG_UPDATE_LINK_SUCCESS = {
  message: 'Link updated.', kind: 'success', dismissAfter: 3000
};

var MSG_ADD_LINK_ERROR = exports.MSG_ADD_LINK_ERROR = {
  message: 'There was a problem creating a new link.', kind: 'error', dismissAfter: 3000
};

var MSG_ADD_LINK_SUCCESS = exports.MSG_ADD_LINK_SUCCESS = {
  message: 'Link added.', kind: 'success', dismissAfter: 3000
};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TagBlock = __webpack_require__(256);

var _TagBlock2 = _interopRequireDefault(_TagBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TagBlock2.default;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.fetchMediaSuccess = fetchMediaSuccess;
exports.fetchMediaFail = fetchMediaFail;
exports.fetchMedia = fetchMedia;
exports.uploadFiles = uploadFiles;
exports.deleteMedia = deleteMedia;
exports.default = mediaReducer;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _notifications = __webpack_require__(13);

var _index = __webpack_require__(9);

var _media = __webpack_require__(210);

var api = _interopRequireWildcard(_media);

var _actionTypes = __webpack_require__(12);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    type: types.GET_MEDIA_FAILURE,
    error: err
  };
}

function fetchMedia() {
  return function (dispatch) {
    dispatch(fetchMediaStart());
    return api.doFetchMedia().then(function (response) {
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

function uploadSuccess(response) {
  return {
    type: types.UPLOAD_SUCCESS,
    payload: response.body
  };
}

function uploadFail(err) {
  return {
    type: types.UPLOAD_FAILURE,
    error: err
  };
}

function uploadFiles(payload) {
  return function (dispatch) {
    dispatch(beginUpload());
    return api.doUpload(payload).then(function (response) {
      if (response.status === 201) {
        dispatch(uploadSuccess(response));
      }
    }).catch(function (err) {
      dispatch(uploadFail(err));
    });
  };
}

var deleteMediaFail = function deleteMediaFail(err) {
  return {
    type: types.DELETE_MEDIA_FAILURE,
    error: err
  };
};

function deleteMedia(id) {
  return function (dispatch) {
    dispatch({
      type: types.DELETE_MEDIA_REQUEST
    });
    return api.doRemoveMedia(id).then(function (response) {
      dispatch({
        type: types.DELETE_MEDIA_SUCCESS,
        id: id
      });
    }).catch(function (err) {
      dispatch(deleteMediaFail(err));
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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case types.GET_MEDIA_REQUEST:
    case types.UPLOAD_REQUEST:
    case types.DELETE_MEDIA_REQUEST:
      return _extends({}, state, {
        isLoading: true
      });
    case types.GET_MEDIA_SUCCESS:
      return _extends({}, state, {
        isLoading: false,
        files: action.payload
      });
    case types.UPLOAD_SUCCESS:
      return _extends({}, state);
    case types.DELETE_MEDIA_SUCCESS:
      return _extends({}, state, {
        files: [].concat(_toConsumableArray(state.files)).filter(function (file) {
          return file.id !== parseInt(action.id, 10);
        })
      });
    case types.GET_MEDIA_FAILURE:
    case types.UPLOAD_FAILURE:
    case types.DELETE_MEDIA_FAILURE:
      return _extends({}, state, {
        isLoading: false,
        error: action.payload
      });
    default:
      return state;
  }
}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getMyProfile = getMyProfile;
exports.getPublicProfile = getPublicProfile;
exports.default = profileReducer;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _notifications = __webpack_require__(13);

var _helpers = __webpack_require__(21);

var _actionTypes = __webpack_require__(12);

var types = _interopRequireWildcard(_actionTypes);

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
    return (0, _isomorphicFetch2.default)(_helpers.API_AUTH + '/check', {
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
    return _superagent2.default.get(API_BASE + '/users/' + userId).then(function (response) {
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
  private: {
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
  }
};

/**
 * Profile Reducer
 * @param  {Object} state       The initial state
 * @param  {Object} action      The action object
 */
function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!state.hydrated) {
    state = Object.assign({}, INITIAL_STATE, state, { hydrated: true });
  }
  switch (action.type) {
    case types.GET_MY_PROFILE_REQUEST:
    case types.PUBLIC_PROFILE_REQUEST:
      return _extends({}, state, {
        isLoading: true
      });

    case types.GET_MY_PROFILE_SUCCESS:
      return _extends({}, state, {
        isLoading: false,
        private: {
          bio: action.payload.user.bio,
          display_name: action.payload.user.display_name,
          email: action.payload.user.email,
          first_name: action.payload.user.first_name,
          id: action.payload.user.id,
          last_name: action.payload.user.last_name,
          location: action.payload.user.location,
          avatar_url: action.payload.user.avatar_url,
          roleId: action.payload.user.roleId,
          website: action.payload.user.website
        }
      });
    case types.GET_MY_PROFILE_FAIL:
    case types.PUBLIC_PROFILE_FAIL:
      return _extends({}, state, {
        isLoading: false,
        error: action.error
      });
    case types.PUBLIC_PROFILE_SUCCESS:
      return _extends({}, state, {
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
/* 58 */
/***/ function(module, exports) {

module.exports = require("classnames/bind");

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = require("date-fns");

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/Link");

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BoldrLogo = __webpack_require__(128);

var _BoldrLogo2 = _interopRequireDefault(_BoldrLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BoldrLogo2.default;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createFormComponent;

var _react = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Creates a component class that renders the given Material UI component
 * @see https://github.com/erikras/redux-form-material-ui
 * @param MaterialUIComponent The material ui component to render
 * @param mapProps A mapping of props provided by redux-form to the props the Material UI
 * component needs
 */
function createFormComponent(MaterialUIComponent, mapProps) {
  var InputComponent = function (_Component) {
    _inherits(InputComponent, _Component);

    function InputComponent() {
      _classCallCheck(this, InputComponent);

      return _possibleConstructorReturn(this, (InputComponent.__proto__ || Object.getPrototypeOf(InputComponent)).apply(this, arguments));
    }

    _createClass(InputComponent, [{
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        return this.refs.component;
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _react.createElement)(MaterialUIComponent, _extends({}, mapProps(this.props), {
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
/* 64 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapError = function mapError(_ref) {
  var _ref$meta = _ref.meta;
  _ref$meta = _ref$meta === undefined ? {} : _ref$meta;
  var touched = _ref$meta.touched;
  var error = _ref$meta.error;

  var inputProps = _objectWithoutProperties(_ref.input, []);

  var props = _objectWithoutProperties(_ref, ['meta', 'input']);

  var errorProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'errorText';
  return touched && error ? _extends({}, props, inputProps, _defineProperty({}, errorProp, error)) : _extends({}, inputProps, props);
};

exports.default = mapError;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Authenticated = __webpack_require__(142);

var _Authenticated2 = _interopRequireDefault(_Authenticated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Authenticated2.default;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _CardExpander = __webpack_require__(67);

var _CardExpander2 = _interopRequireDefault(_CardExpander);

var _contextTypes = __webpack_require__(36);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `CardActions` component is used for adding actions on your card.
 * The actions should be `FlatButton`s or `IconButton`s.
 *
 * This component can act as a `CardExpander`.
 */
var CardActions = (_temp = _class = function (_PureComponent) {
  _inherits(CardActions, _PureComponent);

  function CardActions() {
    _classCallCheck(this, CardActions);

    return _possibleConstructorReturn(this, (CardActions.__proto__ || Object.getPrototypeOf(CardActions)).apply(this, arguments));
  }

  _createClass(CardActions, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var isExpander = _props.isExpander;
      var centered = _props.centered;

      var props = _objectWithoutProperties(_props, ['className', 'children', 'isExpander', 'centered']);

      return _react2.default.createElement(
        'section',
        _extends({}, props, { className: (0, _classnames2.default)('md-card-actions', className, { centered: centered }) }),
        _react2.default.createElement(
          'div',
          { className: 'action-area' },
          children
        ),
        isExpander && _react2.default.createElement(_CardExpander2.default, null)
      );
    }
  }]);

  return CardActions;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.contextTypes = _contextTypes2.default, _temp);
exports.default = CardActions;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _contextTypes = __webpack_require__(36);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _IconButton = __webpack_require__(35);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var CardExpander = (_temp = _class = function (_PureComponent) {
  _inherits(CardExpander, _PureComponent);

  function CardExpander() {
    _classCallCheck(this, CardExpander);

    return _possibleConstructorReturn(this, (CardExpander.__proto__ || Object.getPrototypeOf(CardExpander)).apply(this, arguments));
  }

  _createClass(CardExpander, [{
    key: 'render',
    value: function render() {
      var _context = this.context;
      var isExpanded = _context.isExpanded;
      var onExpandClick = _context.onExpandClick;
      var iconClassName = _context.iconClassName;
      var iconChildren = _context.iconChildren;
      var tooltipPosition = _context.tooltipPosition;
      var tooltipLabel = _context.tooltipLabel;


      return _react2.default.createElement(_IconButton2.default, {
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
}(_react.PureComponent), _class.contextTypes = _contextTypes2.default, _temp);
exports.default = CardExpander;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _contextTypes = __webpack_require__(36);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _CardExpander = __webpack_require__(67);

var _CardExpander2 = _interopRequireDefault(_CardExpander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `CardTitle` component is used to display the main content title for the card.
 *
 * This can include an optional `Avatar` to display before the title as well as
 * an optional subtitle.
 *
 * This component can also act as an expander which will inject the `CardExpander`.
 */
var CardTitle = (_temp = _class = function (_PureComponent) {
  _inherits(CardTitle, _PureComponent);

  function CardTitle() {
    _classCallCheck(this, CardTitle);

    return _possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).apply(this, arguments));
  }

  _createClass(CardTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var subtitle = _props.subtitle;
      var avatar = _props.avatar;
      var className = _props.className;
      var children = _props.children;
      var isExpander = _props.isExpander;

      var props = _objectWithoutProperties(_props, ['title', 'subtitle', 'avatar', 'className', 'children', 'isExpander']);

      delete props.expandable;

      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: (0, _classnames2.default)('md-card-title', className, {
            'title-large': !!avatar,
            'card-expander': isExpander
          })
        }),
        avatar,
        _react2.default.createElement(
          'div',
          { className: 'titles' },
          _react2.default.createElement(
            'h2',
            { className: 'md-headline' },
            title
          ),
          subtitle && _react2.default.createElement(
            'h3',
            { className: 'md-subheader' },
            subtitle
          )
        ),
        children,
        isExpander && _react2.default.createElement(_CardExpander2.default, null)
      );
    }
  }]);

  return CardTitle;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  avatar: null
}, _class.contextTypes = _contextTypes2.default, _temp);
exports.default = CardTitle;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _FontIcons = __webpack_require__(7);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A column in a table. This is either the `th` or `td` component. This column
 * can be automatically configured to be adjusted with additional padding
 * or auto expand to fill the remaining table space if the `TableRow` component
 * has `autoAdjust` set to `true`. If you would like to prevent this column
 * for being a candidate for auto expanding to remaining space, add the className
 * `.prevent-grow`.
 */
var TableColumn = (_temp = _class = function (_PureComponent) {
  _inherits(TableColumn, _PureComponent);

  function TableColumn() {
    _classCallCheck(this, TableColumn);

    return _possibleConstructorReturn(this, (TableColumn.__proto__ || Object.getPrototypeOf(TableColumn)).apply(this, arguments));
  }

  _createClass(TableColumn, [{
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

      var props = _objectWithoutProperties(_props, ['className', 'numeric', 'adjusted', 'header', 'children', 'sorted', 'sortIconChildren', 'sortIconClassName']);

      var sortable = typeof sorted === 'boolean';

      var displayedChildren = [children];
      if (sortable) {
        displayedChildren = [_react2.default.createElement(_FontIcons2.default, {
          key: 'sort-icon',
          className: !sorted ? 'flipped' : null,
          iconClassName: sortIconClassName,
          children: sortIconChildren
        }), _react2.default.createElement(
          'span',
          { key: 'children', className: 'inline-top' },
          children
        )];
      }

      return _react2.default.createElement(header ? 'th' : 'td', _extends({}, props, {
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
}(_react.PureComponent), _class.defaultProps = {
  header: false,
  sortIconClassName: 'material-icons',
  sortIconChildren: 'arrow_upward'
}, _class.propTypes = {
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
}, _temp);
exports.default = TableColumn;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _contextTypes = __webpack_require__(31);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, _contextTypes2.default, { header: _react.PropTypes.bool });

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DialogContainer = __webpack_require__(158);

var _DialogContainer2 = _interopRequireDefault(_DialogContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DialogContainer2.default;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The divider component will pass all other props such as style or
 * event listeners on to the component.
 */
var Divider = (_temp = _class = function (_PureComponent) {
  _inherits(Divider, _PureComponent);

  function Divider() {
    _classCallCheck(this, Divider);

    return _possibleConstructorReturn(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).apply(this, arguments));
  }

  _createClass(Divider, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var inset = _props.inset;
      var vertical = _props.vertical;

      var props = _objectWithoutProperties(_props, ['className', 'inset', 'vertical']);
      // When in a list


      delete props.expanderIconChildren;
      delete props.expanderIconClassName;

      var dividerProps = _extends({
        role: 'divider',
        className: (0, _classnames2.default)('md-divider', className, { inset: inset, vertical: vertical })
      }, props);

      return _react2.default.createElement(vertical ? 'div' : 'hr', dividerProps);
    }
  }]);

  return Divider;
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = Divider;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItemText = (_temp = _class = function (_PureComponent) {
  _inherits(ListItemText, _PureComponent);

  function ListItemText() {
    _classCallCheck(this, ListItemText);

    return _possibleConstructorReturn(this, (ListItemText.__proto__ || Object.getPrototypeOf(ListItemText)).apply(this, arguments));
  }

  _createClass(ListItemText, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var primaryText = _props.primaryText;
      var secondaryText = _props.secondaryText;

      var props = _objectWithoutProperties(_props, ['primaryText', 'secondaryText']);

      var className = (0, _classnames2.default)('md-tile-content', props.className);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: className }),
        _react2.default.createElement(
          'div',
          { className: 'md-tile-primary-text' },
          primaryText
        ),
        secondaryText && _react2.default.createElement(
          'div',
          { className: 'md-tile-secondary-text' },
          secondaryText
        )
      );
    }
  }]);

  return ListItemText;
}(_react.PureComponent), _class.propTypes = {
  primaryText: _react.PropTypes.node.isRequired,
  secondaryText: _react.PropTypes.node,
  className: _react.PropTypes.string
}, _temp);
exports.default = ListItemText;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ListItemControl = exports.ListItem = exports.List = undefined;

var _List = __webpack_require__(50);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(51);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemControl = __webpack_require__(169);

var _ListItemControl2 = _interopRequireDefault(_ListItemControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.List = _List2.default;
exports.ListItem = _ListItem2.default;
exports.ListItemControl = _ListItemControl2.default;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SelectField = __webpack_require__(182);

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SelectField2.default;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _InkedControl = __webpack_require__(185);

var _InkedControl2 = _interopRequireDefault(_InkedControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is the component that is used for the `Checkbox` component
 * and the `Radio` component. This is a label that includes
 * the input type, an icon showing the state of the control,
 * and an optional label.
 */
var ControlContainer = (_temp = _class = function (_PureComponent) {
  _inherits(ControlContainer, _PureComponent);

  function ControlContainer(props) {
    _classCallCheck(this, ControlContainer);

    var _this = _possibleConstructorReturn(this, (ControlContainer.__proto__ || Object.getPrototypeOf(ControlContainer)).call(this, props));

    _this.state = { checked: props.defaultChecked };
    _this._handleChange = _this._handleChange.bind(_this);
    return _this;
  }

  _createClass(ControlContainer, [{
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

      var props = _objectWithoutProperties(_props2, ['className', 'disabled', 'label', 'labelBefore', 'checkedIcon', 'uncheckedIcon', 'name', 'value', 'type', 'onClick', 'id']);

      delete props.checked;

      return _react2.default.createElement(
        'label',
        _extends({}, props, {
          htmlFor: id,
          className: (0, _classnames2.default)('md-control-container', className, { disabled: disabled })
        }),
        labelBefore && label,
        _react2.default.createElement('input', {
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
        _react2.default.createElement(
          _InkedControl2.default,
          {
            type: type,
            checked: isChecked,
            disabled: disabled
          },
          isChecked ? checkedIcon : uncheckedIcon
        ),
        !labelBefore && label
      );
    }
  }]);

  return ControlContainer;
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = ControlContainer;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FontIcons = __webpack_require__(7);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _ControlContainer = __webpack_require__(76);

var _ControlContainer2 = _interopRequireDefault(_ControlContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `Radio` component can be used with the `RadioGroup` component for
 * additional state management. It is completely optional to use these
 * two components together though. It is just to eliminate some redundancies.
 */
var Radio = (_temp = _class = function (_PureComponent) {
  _inherits(Radio, _PureComponent);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_ControlContainer2.default, _extends({}, this.props, { type: 'radio' }));
    }
  }]);

  return Radio;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  labelBefore: false,
  defaultChecked: false,
  checkedIcon: _react2.default.createElement(
    _FontIcons2.default,
    null,
    'radio_button_checked'
  ),
  uncheckedIcon: _react2.default.createElement(
    _FontIcons2.default,
    null,
    'radio_button_unchecked'
  )
}, _temp);
exports.default = Radio;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Subheader = __webpack_require__(187);

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Subheader2.default;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(16);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is a controlled component for rendering an overlay on the page.
 *
 * Any event listeners will be applied to overlay instead of the `CSSTransitionGroup`
 * containing the overlay when open.
 */
var Overlay = (_temp = _class = function (_PureComponent) {
  _inherits(Overlay, _PureComponent);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  _createClass(Overlay, [{
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

      var props = _objectWithoutProperties(_props, ['isOpen', 'component', 'style', 'className', 'overlayStyle', 'overlayClassName', 'transitionName', 'transitionEnterTimeout', 'transitionLeaveTimeout']);

      var overlay = void 0;
      if (isOpen) {
        var overlayProps = _extends({
          key: 'overlay',
          style: overlayStyle,
          className: (0, _classnames2.default)('md-overlay', overlayClassName)
        }, props);

        overlay = _react2.default.createElement('div', overlayProps);
      }

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          component: component,
          style: style,
          className: className,
          transitionName: transitionName,
          transitionEnterTimeout: transitionEnterTimeout,
          transitionLeaveTimeout: transitionLeaveTimeout
        },
        overlay
      );
    }
  }]);

  return Overlay;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  component: 'span',
  transitionName: 'md-overlay',
  transitionEnterTimeout: 150,
  transitionLeaveTimeout: 150
}, _temp);
exports.default = Overlay;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.Col = exports.Row = undefined;

var _Row = __webpack_require__(206);

var _Row2 = _interopRequireDefault(_Row);

var _Col = __webpack_require__(204);

var _Col2 = _interopRequireDefault(_Col);

var _Grid = __webpack_require__(205);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Row = _Row2.default;
exports.Col = _Col2.default;
exports.Grid = _Grid2.default;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _helpers = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  var adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (true) {
    // Prepend host and port of the API server to the path.
    return 'http://' + _helpers.API_HOST + ':' + (_helpers.API_PORT + adjustedPath);
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return '/api/v1' + adjustedPath;
}

var ApiClient = function () {
  function ApiClient(req) {
    var _this = this;

    _classCallCheck(this, ApiClient);

    methods.forEach(function (method) {
      _this[method] = function (path) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var body = _ref2.body;
            return err ? reject(body || err) : resolve(body);
          });
        });
      };
    });
  }

  _createClass(ApiClient, [{
    key: 'setJwtToken',
    value: function setJwtToken(token) {
      this.token = token;
    }
  }]);

  return ApiClient;
}();

exports.default = ApiClient;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _About = __webpack_require__(218);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _About2.default;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ResetPassword = __webpack_require__(229);

var _ResetPassword2 = _interopRequireDefault(_ResetPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ResetPassword2.default;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCurrentPost = clearCurrentPost;
exports.loadPost = loadPost;
exports.updatePost = updatePost;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _notifications = __webpack_require__(13);

var _helpers = __webpack_require__(21);

var _actionTypes = __webpack_require__(12);

var types = _interopRequireWildcard(_actionTypes);

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
    return (0, _isomorphicFetch2.default)(_helpers.API_POSTS + '/slug/' + slug).then(function (response) {
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
    return _superagent2.default.put(_helpers.API_POSTS + '/pid/' + postData.id).set('Authorization', '' + localStorage.getItem('token')).send({
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostCard = __webpack_require__(253);

var _PostCard2 = _interopRequireDefault(_PostCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PostCard2.default;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EditorForm = __webpack_require__(286);

var _EditorForm2 = _interopRequireDefault(_EditorForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _EditorForm2.default;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NavigationForm = __webpack_require__(291);

var _NavigationForm2 = _interopRequireDefault(_NavigationForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _NavigationForm2.default;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.loadSiteMembers = loadSiteMembers;
exports.updateMember = updateMember;
exports.memberSelected = memberSelected;
exports.default = membersReducer;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _index = __webpack_require__(9);

var _notifications = __webpack_require__(13);

var _member = __webpack_require__(211);

var api = _interopRequireWildcard(_member);

var _notificationMessages = __webpack_require__(54);

var notif = _interopRequireWildcard(_notificationMessages);

var _actionTypes = __webpack_require__(12);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadMembers = function loadMembers() {
  return {
    type: types.LOAD_MEMBERS_REQUEST
  };
};

var loadMembersSuccess = function loadMembersSuccess(response) {
  return {
    type: types.LOAD_MEMBERS_SUCCESS,
    isLoading: false,
    payload: response.body
  };
};

// Fail receivers
var failedToLoadMembers = function failedToLoadMembers(err) {
  return {
    type: types.LOAD_MEMBERS_FAILURE,
    isLoading: false,
    error: err
  };
};

// Public action creators
function loadSiteMembers() {
  return function (dispatch) {
    dispatch(loadMembers());
    return api.doFetchMembers().then(function (response) {
      if (response.status === 200) {
        dispatch(loadMembersSuccess(response));
      }
    }).catch(function (err) {
      dispatch(failedToLoadMembers(err));
    });
  };
}

var beginUpdateMember = function beginUpdateMember() {
  return { type: types.UPDATE_MEMBER_REQUEST };
};

var doneUpdateMember = function doneUpdateMember(response) {
  return { type: types.UPDATE_MEMBER_SUCCESS };
};

var failUpdateMember = function failUpdateMember(err) {
  return {
    type: types.UPDATE_MEMBER_FAILURE,
    error: err
  };
};

function updateMember(userData) {
  return function (dispatch) {
    dispatch(beginUpdateMember());
    return api.doUpdateMember(userData).then(function (response) {
      dispatch(doneUpdateMember(response));
      dispatch((0, _notifications.notificationSend)(notif.MSG_UPDATE_MEMBER_SUCCESS));
    }).catch(function (err) {
      dispatch(failUpdateMember(err.message));
      dispatch((0, _notifications.notificationSend)(notif.MSG_UPDATE_MEMBER_ERROR));
    });
  };
}

function memberSelected(userId) {
  return {
    type: types.MEMBER_SELECTED,
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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case types.LOAD_MEMBERS_REQUEST:
    case types.UPDATE_MEMBER_REQUEST:
      return _extends({}, state, {
        isLoading: true
      });
    case types.LOAD_MEMBERS_SUCCESS:
      return _extends({}, state, {
        members: action.payload
      });
    case types.LOAD_MEMBERS_FAILURE:
    case types.UPDATE_MEMBER_FAILURE:
      return _extends({}, state, {
        error: action.error,
        isLoading: false
      });
    case types.UPDATE_MEMBER_SUCCESS:
      return _extends({}, state);
    case types.MEMBER_SELECTED:
      return _extends({}, state, {
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.requestPostTags = requestPostTags;
exports.default = tagsReducer;

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _index = __webpack_require__(9);

var _tag = __webpack_require__(215);

var api = _interopRequireWildcard(_tag);

var _actionTypes = __webpack_require__(12);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Select Post
 * @description Used when on the article list state.
 */
var requestTag = function requestTag() {
  return {
    type: types.LOAD_TAG_REQUEST
  };
};

var receiveTag = function receiveTag(json) {
  return {
    type: types.LOAD_TAG_SUCCESS,
    result: json
  };
};

var failedToReceiveTag = function failedToReceiveTag(err) {
  return {
    type: types.LOAD_TAG_FAILURE,
    error: err
  };
};

function requestPostTags(tagName) {
  return function (dispatch) {
    console.log(tagName);
    dispatch(requestTag());
    return api.doFetchTags(tagName).then(function (json) {
      return dispatch(receiveTag(json));
    }).catch(function (err) {
      dispatch(failedToReceiveTag(err));
    });
  };
}

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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case types.LOAD_TAG_REQUEST:
      return _extends({}, state, {
        isLoading: true
      });
    case types.LOAD_TAG_SUCCESS:
      return _extends({}, state, {
        isLoading: false,
        id: action.result.id,
        name: action.result.name,
        posts: action.result.posts,
        description: action.result.description
      });
    case types.LOAD_TAG_FAILURE:
      return _extends({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
}

/***/ },
/* 90 */
/***/ function(module, exports) {



/***/ },
/* 91 */
/***/ function(module, exports) {

module.exports = require("debug");

/***/ },
/* 92 */
/***/ function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ },
/* 93 */
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

var _regenerator = __webpack_require__(319);

var _regenerator2 = _interopRequireDefault(_regenerator);

__webpack_require__(338);

var _http = __webpack_require__(327);

var _http2 = _interopRequireDefault(_http);

var _path = __webpack_require__(60);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(325);

var _express2 = _interopRequireDefault(_express);

var _httpProxy = __webpack_require__(328);

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _compression = __webpack_require__(323);

var _compression2 = _interopRequireDefault(_compression);

var _prettyError = __webpack_require__(330);

var _prettyError2 = _interopRequireDefault(_prettyError);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(93);

var _server2 = _interopRequireDefault(_server);

var _match = __webpack_require__(333);

var _match2 = _interopRequireDefault(_match);

var _createMemoryHistory = __webpack_require__(332);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _RouterContext = __webpack_require__(331);

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _reactRouterRedux = __webpack_require__(17);

var _reactRedux = __webpack_require__(2);

var _redial = __webpack_require__(11);

var _config = __webpack_require__(317);

var _config2 = _interopRequireDefault(_config);

var _createStore = __webpack_require__(313);

var _createStore2 = _interopRequireDefault(_createStore);

var _index = __webpack_require__(311);

var _index2 = _interopRequireDefault(_index);

var _atm = __webpack_require__(133);

var _atm2 = _interopRequireDefault(_atm);

var _ApiClient = __webpack_require__(81);

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// Server deps


var debug = __webpack_require__(91)('boldr:server');
var paths = _config2.default.paths;
var conf = _config2.default.conf;
var pretty = new _prettyError2.default();
var port = 3000 || 3000;

debug('Booting Boldr API Server');
var targetUrl = 'http://' + conf.get('api.host') + ':' + conf.get('api.port');
var app = (0, _express2.default)();
var server = _http2.default.Server(app);

var proxy = _httpProxy2.default.createProxyServer({
  target: targetUrl,
  ws: true
});

app.use((0, _compression2.default)());
app.use('/api/v1', function (req, res) {
  proxy.web(req, res, { target: targetUrl + '/api/v1' });
});

server.on('upgrade', function (req, socket, head) {
  proxy.ws(req, socket, head);
});

proxy.on('error', function (error, req, res) {
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }

  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' });
  }

  var json = { error: 'proxy_error', reason: error.message };

  res.end(JSON.stringify(json));
});
app.use('/assets/', _express2.default.static('static', { maxAge: '365d' }));
app.use(_express2.default.static(_path2.default.join(__dirname, '../static')));
// Configure static serving of our "public" root http path static files.
app.use(_express2.default.static('static'));
app.use(function () {
  var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(req, res) {
    var client, memoryHistory, location, store, history, hydrateOnClient;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            hydrateOnClient = function hydrateOnClient() {
              res.send('<!doctype html>\n      ' + _server2.default.renderToString(_react2.default.createElement(_atm2.default, { assets: webpackIsomorphicTools.assets(), store: store })));
            };

            if (false) {
              webpackIsomorphicTools.refresh();
            }
            client = new _ApiClient2.default(req);
            memoryHistory = (0, _createMemoryHistory2.default)(req.originalUrl);
            location = memoryHistory.createLocation(req.originalUrl);
            store = (0, _createStore2.default)(memoryHistory, client);
            history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);

            if (true) {
              _context.next = 10;
              break;
            }

            hydrateOnClient();
            return _context.abrupt('return');

          case 10:

            (0, _match2.default)({ history: history, routes: (0, _index2.default)(store), location: location }, function (error, redirectLocation, renderProps) {
              if (redirectLocation) {
                res.redirect(redirectLocation.pathname + redirectLocation.search);
              } else if (error) {
                console.error('ROUTER ERROR:', pretty.render(error));
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
                  var component = _react2.default.createElement(
                    _reactRedux.Provider,
                    { store: store, key: 'provider' },
                    _react2.default.createElement(_RouterContext2.default, renderProps)
                  );

                  var renderHtml = _react2.default.createElement(_atm2.default, { assets: webpackIsomorphicTools.assets(), component: component, store: store });

                  res.status(200);
                  global.navigator = { userAgent: req.headers['user-agent'] };
                  res.send('<!doctype html>\n        ' + _server2.default.renderToString(renderHtml));
                }).catch(function (mountError) {
                  console.error('MOUNT ERROR:', pretty.render(mountError.stack));
                  return res.status(500);
                });
              } else {
                res.status(404).send('Not found');
              }
            });

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

server.on('error', function (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  if (error.code) {
    console.warn('Cannot listen for connections (' + error.code + '): ' + error.message);
    throw error;
  }
  throw error;
});

server.on('listening', function () {
  var addr = server.address();
  console.info('\uD83C\uDFAF  Listening on port ' + addr.family + '/(' + addr.address + '):' + addr.port);
});
server.listen(port);
/* WEBPACK VAR INJECTION */}.call(exports, "cms/src"))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _draftJs = __webpack_require__(28);

var _draftJsExportHtml = __webpack_require__(92);

var _controls = __webpack_require__(103);

var _link = __webpack_require__(104);

var _link2 = _interopRequireDefault(_link);

__webpack_require__(321);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// $FlowExpectedError

var BoldrEditor = function (_Component) {
  _inherits(BoldrEditor, _Component);

  function BoldrEditor(props) {
    _classCallCheck(this, BoldrEditor);

    var _this = _possibleConstructorReturn(this, (BoldrEditor.__proto__ || Object.getPrototypeOf(BoldrEditor)).call(this, props));

    _this.onFocus = function (e) {
      _this.refs.editor.focus();
      _this.props.onFocus(e);
    };

    var decorator = new _draftJs.CompositeDecorator([_link2.default]);

    var editorState = _draftJs.EditorState.createEmpty(decorator);
    if (props.content) {
      editorState = _draftJs.EditorState.createWithContent((0, _draftJs.convertFromRaw)(props.content), decorator);
    }
    _this.state = {
      editorState: editorState,
      showUrlInput: false,
      urlValue: '',
      showCustomBlockInput: false,
      customBlockType: null,
      customBlockData: {}
    };

    _this.focus = function () {
      return _this.refs.editor.focus();
    };

    _this.onChange = _this._onChange.bind(_this);
    _this.handleKeyCommand = function (command) {
      return _this._handleKeyCommand(command);
    };
    _this.toggleBlockType = function (type) {
      return _this._toggleBlockType(type);
    };
    _this.toggleInlineStyle = function (style) {
      return _this._toggleInlineStyle(style);
    };
    _this.toggleCustomBlockInput = function (nextState) {
      return _this._toggleCustomBlockInput(nextState);
    };

    _this.closeLinkPrompt = _this._closeLinkPrompt.bind(_this);
    _this.confirmLink = _this._confirmLink.bind(_this);
    _this.onLinkInputKeyDown = _this._onLinkInputKeyDown.bind(_this);
    _this.onUrlChange = function (e) {
      return _this.setState({ urlValue: e.target.value });
    };
    _this.promptForLink = _this._promptForLink.bind(_this);
    _this.removeLink = _this._removeLink.bind(_this);

    _this.confirmBlock = _this._confirmBlock.bind(_this);
    _this.onBlockInputKeyDown = _this._onBlockInputKeyDown.bind(_this);
    _this.onBlockDataChange = _this._onBlockDataChange.bind(_this);
    _this.renderBlock = _this._renderBlock.bind(_this);
    return _this;
  }

  _createClass(BoldrEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var contentState = this.state.editorState.getCurrentContent();

      if (newProps.content && !this.props.content && !contentState.hasText()) {
        var editorState = _draftJs.EditorState.createWithContent((0, _draftJs.convertFromRaw)(newProps.content));
        this.setState({ editorState: editorState });
      }
    }
  }, {
    key: '_onChange',
    value: function _onChange(editorState) {
      var _this2 = this;

      this.setState({ editorState: editorState }, function () {
        if (_this2.props.onChange) {
          var contentState = editorState.getCurrentContent();
          var html = (0, _draftJsExportHtml.stateToHTML)(editorState.getCurrentContent());
          if (contentState.hasText()) {
            _this2.props.onChange(html);
            _this2.props.onChange((0, _draftJs.convertToRaw)(contentState));
          } else {
            _this2.props.onChange(null);
          }
        }
      });
    }
  }, {
    key: '_handleKeyCommand',
    value: function _handleKeyCommand(command) {
      var editorState = this.state.editorState;

      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }
  }, {
    key: '_toggleBlockType',
    value: function _toggleBlockType(blockType) {
      this.onChange(_draftJs.RichUtils.toggleBlockType(this.state.editorState, blockType));
    }
  }, {
    key: '_toggleInlineStyle',
    value: function _toggleInlineStyle(inlineStyle) {
      if (inlineStyle === 'LINK') {
        if (!this.state.showUrlInput) {
          this.promptForLink();
        } else {
          this.removeLink();
        }
      } else {
        this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
      }
    }
  }, {
    key: '_confirmBlock',
    value: function _confirmBlock(e, data) {
      var _this3 = this;

      this.setState({
        customBlockData: {},
        customBlockType: null,
        editorState: this._insertCustomBlock(this.state.editorState, this.state.customBlockType, data || this.state.customBlockData),
        showCustomBlockInput: false
      }, function () {
        setTimeout(function () {
          return _this3.focus();
        }, 0);
      });
    }
  }, {
    key: '_onBlockInputKeyDown',
    value: function _onBlockInputKeyDown(e) {
      if (e.which === 13) {
        this._confirmBlock();
      }
    }
  }, {
    key: '_onBlockDataChange',
    value: function _onBlockDataChange(customBlockData) {
      this.setState({ customBlockData: customBlockData });
    }
  }, {
    key: '_insertCustomBlock',
    value: function _insertCustomBlock(editorState, type, data) {
      var entityKey = _draftJs.Entity.create(type, 'IMMUTABLE', data);

      // if you use an empty string for the block content here Draft will die
      return _draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
    }
  }, {
    key: '_toggleCustomBlockInput',
    value: function _toggleCustomBlockInput(nextState) {
      var _this4 = this;

      if (this.state.showCustomBlockInput && nextState.customBlockType === this.state.customBlockType) {
        this.setState({
          showCustomBlockInput: false,
          customBlockType: null,
          customBlockData: {}
        });
      } else {
        this.setState(nextState, function () {
          if (_this4.refs.customBlockInput) {
            _this4.refs.customBlockInput.focus();
          }
        });
      }
    }
  }, {
    key: '_renderBlock',
    value: function _renderBlock(block) {
      if (block.getType() === 'atomic') {
        var entityType = _draftJs.Entity.get(block.getEntityAt(0)).getType();

        return this.props.customBlocks[entityType] ? this.props.customBlocks[entityType].getBlockRenderer() : null;
      }

      // fall back to default renderer
      return null;
    }

    // Link setup

    /**
     * @private
     * @name _closeLinkPrompt
     * closes the link alert
     */

  }, {
    key: '_closeLinkPrompt',
    value: function _closeLinkPrompt() {
      var _this5 = this;

      this.setState({
        showUrlInput: false,
        urlValue: ''
      }, function () {
        setTimeout(function () {
          _this5.focus();
        }, 0);
      });
    }
    /**
     * @private
     * @name _confirmLink
     */

  }, {
    key: '_confirmLink',
    value: function _confirmLink() {
      var _state = this.state;
      var editorState = _state.editorState;
      var urlValue = _state.urlValue;

      var entityKey = _draftJs.Entity.create('LINK', 'MUTABLE', { target: this.props.linkTarget, url: urlValue });

      this.onChange(_draftJs.RichUtils.toggleLink(editorState, editorState.getSelection(), entityKey));

      this.closeLinkPrompt();
    }

    /**
     * @private
     * @name _onLinkInputKeyDown
     * @param {Object} e  the event
     */

  }, {
    key: '_onLinkInputKeyDown',
    value: function _onLinkInputKeyDown(e) {
      if (e.which === 13) {
        this._confirmLink(e);
      }
    }

    /**
     * @private
     * @name _promptForLink
     */

  }, {
    key: '_promptForLink',
    value: function _promptForLink() {
      var _this6 = this;

      var editorState = this.state.editorState;

      var selection = editorState.getSelection();

      if (!selection.isCollapsed()) {
        if (_draftJs.RichUtils.currentBlockContainsLink(editorState)) {
          this.removeLink();
        } else {
          this.setState({
            showUrlInput: true,
            urlValue: ''
          }, function () {
            setTimeout(function () {
              return _this6.refs.url.focus();
            }, 0);
          });
        }
      }
    }

    /**
     * @private
     * @name _removeLink
     */

  }, {
    key: '_removeLink',
    value: function _removeLink() {
      var editorState = this.state.editorState;

      var selection = editorState.getSelection();

      this.onChange(_draftJs.RichUtils.toggleLink(editorState, selection, null));
    }

    /**
     * @method renderControls
     */

  }, {
    key: 'renderControls',
    value: function renderControls() {
      var controls = [];

      if (this.props.blockControls) {
        controls.push(_react2.default.createElement(_controls.BlockStyleControls, {
          editorState: this.state.editorState,
          controls: this.props.blockControls,
          display: this.props.controlDisplay,
          key: 'block-controls',
          onToggle: this.toggleBlockType
        }));
      }
      if (this.props.inlineControls) {
        controls.push(_react2.default.createElement(_controls.InlineStyleControls, {
          editorState: this.state.editorState,
          onToggle: this.toggleInlineStyle,
          controls: this.props.inlineControls,
          display: this.props.controlDisplay,
          key: 'inline-controls'
        }));
      }

      if (this.props.customBlockControls) {
        controls.push(_react2.default.createElement(_controls.CustomBlockControls, {
          customBlocks: this.props.customBlocks,
          controls: this.props.customBlockControls,
          customBlockType: this.state.customBlockType,
          display: this.props.controlDisplay,
          key: 'custom-block-controls',
          onClick: this.toggleCustomBlockInput
        }));
      }

      if (this.props.controlDisplay === 'inline') {
        return controls.reverse();
      }

      return controls;
    }
  }, {
    key: 'render',
    value: function render() {
      var editorState = this.state.editorState;

      var className = 'DraftJSEditor-editor';
      var contentState = this.state.editorState.getCurrentContent();
      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          className += ' DraftJSEditor-hidePlaceholder';
        }
      }

      var urlInput = void 0;
      if (this.state.showUrlInput) {
        urlInput = _react2.default.createElement(
          'div',
          { className: 'DraftJSEditor-urlInput' },
          _react2.default.createElement('input', {
            className: 'DraftJSEditor-urlInputText',
            onChange: this.onUrlChange,
            ref: 'url',
            type: 'text',
            value: this.state.urlValue,
            onKeyDown: this.onLinkInputKeyDown
          }),
          _react2.default.createElement(
            'button',
            {
              className: 'DraftJSEditor-urlInputButton',
              onMouseDown: this.confirmLink
            },
            'Confirm'
          )
        );
      }
      var blockInput = void 0;
      if (this.state.showCustomBlockInput) {
        blockInput = this.props.customBlocks[this.state.customBlockType].renderInputForm.apply(this, [this.state.customBlockData, this.onBlockDataChange, this.onBlockInputKeyDown, this.confirmBlock]);
      }
      return _react2.default.createElement(
        'div',
        { className: 'DraftJSEditor-root' },
        !this.props.readOnly ? this.renderControls() : null,
        !this.props.readOnly ? urlInput : null,
        !this.props.readOnly ? blockInput : null,
        _react2.default.createElement(
          'div',
          { className: className, onClick: this.focus },
          _react2.default.createElement(_draftJs.Editor, { ref: 'editor',
            editorState: editorState,
            blockRendererFn: this.renderBlock,
            placeholder: this.props.placeholder,
            onChange: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.props.onBlur,
            handleKeyCommand: this.handleKeyCommand,
            spellCheck: this.props.spellCheck,
            stripPastedStyles: this.props.stripPastedStyles,
            readOnly: this.props.readOnly
          })
        )
      );
    }
  }]);

  return BoldrEditor;
}(_react.Component);

BoldrEditor.defaultProps = {
  blockControls: _controls.BLOCK_CONTROLS,
  controlDisplay: 'block',
  inlineControls: _controls.INLINE_CONTROLS,
  customBlockControls: [],
  customBlocks: {},
  linkTarget: '_blank',
  placeholder: '',
  readOnly: false,
  spellCheck: true,
  stripPastedStyles: false
};

exports.default = BoldrEditor;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _draftJs = __webpack_require__(28);

var _draftJsExportHtml = __webpack_require__(92);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer(customBlocks) {
    _classCallCheck(this, Renderer);

    this.customBlocks = customBlocks;

    this.convertRawToHTML = this.convertRawToHTML.bind(this);
  }

  _createClass(Renderer, [{
    key: 'convertRawToHTML',
    value: function convertRawToHTML(rawContent) {
      var _this = this;

      var options = {
        blockRenderers: {
          atomic: function atomic(block) {
            var data = _draftJs.Entity.get(block.getEntityAt(0)).getData();
            var type = _draftJs.Entity.get(block.getEntityAt(0)).getType();

            return _this.customBlocks[type] ? _this.customBlocks[type].renderHTML(data) : null;
          }
        }
      };

      return (0, _draftJsExportHtml.stateToHTML)((0, _draftJs.convertFromRaw)(rawContent), options);
    }
  }]);

  return Renderer;
}();

exports.default = Renderer;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _StyleButton = __webpack_require__(43);

var _StyleButton2 = _interopRequireDefault(_StyleButton);

var _helpers = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockStyleControls = function BlockStyleControls(_ref) {
  var controls = _ref.controls;
  var display = _ref.display;
  var editorState = _ref.editorState;
  var onToggle = _ref.onToggle;

  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

  return _react2.default.createElement(
    'div',
    { className: 'DraftJSEditor-controls', style: { display: display } },
    _helpers.BLOCK_TYPES.map(function (type) {
      if (controls.indexOf(type.label) !== -1) {
        return _react2.default.createElement(_StyleButton2.default, {
          key: type.label,
          active: type.style === blockType,
          label: type.label,
          icon: type.icon,
          onToggle: onToggle,
          style: type.style
        });
      }
    })
  );
};

BlockStyleControls.propTypes = {
  editorState: _react.PropTypes.object.isRequired,
  onToggle: _react.PropTypes.func.isRequired,
  controls: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.arrayOf(_helpers.BLOCK_CONTROLS)]),
  display: _react2.default.PropTypes.oneOf(['block', 'inline'])
};

exports.default = BlockStyleControls;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BlockStyle = __webpack_require__(97);

var _BlockStyle2 = _interopRequireDefault(_BlockStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BlockStyle2.default;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _StyleButton = __webpack_require__(43);

var _StyleButton2 = _interopRequireDefault(_StyleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CustomBlockControls(_ref) {
  var controls = _ref.controls;
  var display = _ref.display;
  var onClick = _ref.onClick;
  var customBlocks = _ref.customBlocks;
  var customBlockType = _ref.customBlockType;

  var buttons = [];

  var getClickHandlerForType = function getClickHandlerForType(type) {
    return function () {
      onClick({
        showCustomBlockInput: true,
        customBlockType: type,
        customBlockData: customBlocks[type].getInitialData()
      });
    };
  };

  Object.keys(customBlocks).forEach(function (key) {
    if (customBlocks.hasOwnProperty(key) && controls && controls.indexOf(key) > -1) {
      buttons.push(_react2.default.createElement(_StyleButton2.default, {
        key: key + '-button',
        active: key === customBlockType,
        label: customBlocks[key].getLabel(),
        icon: typeof customBlocks[key].getIcon === 'function' ? customBlocks[key].getIcon() : null,
        onToggle: getClickHandlerForType(key),
        style: ''
      }));
    }
  });

  return _react2.default.createElement(
    'div',
    { className: 'DraftJSEditor-controls', style: { display: display } },
    buttons
  );
}

CustomBlockControls.propTypes = {
  controls: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)]),
  display: _react2.default.PropTypes.oneOf(['block', 'inline']),
  onClick: _react.PropTypes.func,
  customBlocks: _react.PropTypes.object,
  customBlockType: _react.PropTypes.string
};

exports.default = CustomBlockControls;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CustomBlock = __webpack_require__(99);

var _CustomBlock2 = _interopRequireDefault(_CustomBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CustomBlock2.default;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _StyleButton = __webpack_require__(43);

var _StyleButton2 = _interopRequireDefault(_StyleButton);

var _helpers = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InlineStyleControls = function InlineStyleControls(_ref) {
  var controls = _ref.controls;
  var display = _ref.display;
  var editorState = _ref.editorState;
  var onToggle = _ref.onToggle;

  var currentStyle = editorState.getCurrentInlineStyle();

  return _react2.default.createElement(
    'div',
    { className: 'btn-group', role: 'group', style: { display: display } },
    _helpers.INLINE_STYLES.map(function (type) {
      if (controls.indexOf(type.label) !== -1) {
        var _React$createElement;

        return _react2.default.createElement(_StyleButton2.default, (_React$createElement = { key: type.label
        }, _defineProperty(_React$createElement, 'key', type.label), _defineProperty(_React$createElement, 'active', currentStyle.has(type.style)), _defineProperty(_React$createElement, 'icon', type.icon), _defineProperty(_React$createElement, 'label', type.label), _defineProperty(_React$createElement, 'onToggle', onToggle), _defineProperty(_React$createElement, 'style', type.style), _React$createElement));
      }
    })
  );
};

InlineStyleControls.propTypes = {
  editorState: _react.PropTypes.object.isRequired,
  onToggle: _react.PropTypes.func.isRequired,
  controls: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.arrayOf(_helpers.INLINE_CONTROLS)]),
  display: _react2.default.PropTypes.oneOf(['block', 'inline'])
};

exports.default = InlineStyleControls;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InlineStyle = __webpack_require__(101);

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _InlineStyle2.default;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INLINE_CONTROLS = exports.BLOCK_CONTROLS = exports.INLINE_STYLES = exports.BLOCK_TYPES = exports.validator = exports.InlineStyleControls = exports.BlockStyleControls = exports.CustomBlockControls = undefined;

var _CustomBlock = __webpack_require__(100);

var _CustomBlock2 = _interopRequireDefault(_CustomBlock);

var _BlockStyle = __webpack_require__(98);

var _BlockStyle2 = _interopRequireDefault(_BlockStyle);

var _InlineStyle = __webpack_require__(102);

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

var _helpers = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CustomBlockControls = _CustomBlock2.default;
exports.BlockStyleControls = _BlockStyle2.default;
exports.InlineStyleControls = _InlineStyle2.default;
exports.validator = _helpers.validator;
exports.BLOCK_TYPES = _helpers.BLOCK_TYPES;
exports.INLINE_STYLES = _helpers.INLINE_STYLES;
exports.BLOCK_CONTROLS = _helpers.BLOCK_CONTROLS;
exports.INLINE_CONTROLS = _helpers.INLINE_CONTROLS;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _draftJs = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkStrategy = function linkStrategy(contentBlock, callback) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'LINK';
  }, callback);
};

var Link = function Link(props) {
  var _Entity$get$getData = _draftJs.Entity.get(props.entityKey).getData();

  var target = _Entity$get$getData.target;
  var url = _Entity$get$getData.url;

  return _react2.default.createElement(
    'a',
    { href: url, target: target },
    props.children
  );
};

Link.propTypes = {
  entityKey: _react2.default.PropTypes.any,
  children: _react2.default.PropTypes.any
};

exports.default = {
  strategy: linkStrategy,
  component: Link
};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Blockquote() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { width: "18", height: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M10 5v5h2.75L11 13h2.25L15 10V5h-5zm-7 5h2.75L4 13h2.25L8 10V5H3v5z" })
  );
  /* eslint-enable */
}

exports.default = Blockquote;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Bold() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { width: "18", height: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M11.63 7.82C12.46 7.24 13 6.38 13 5.5 13 3.57 11.43 2 9.5 2H4v12h6.25c1.79 0 3.25-1.46 3.25-3.25 0-1.3-.77-2.41-1.87-2.93zM6.5 4h2.75c.83 0 1.5.67 1.5 1.5S10.08 7 9.25 7H6.5V4zm3.25 8H6.5V9h3.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" })
  );
  /* eslint-enable */
}

exports.default = Bold;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function H1() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { height: "18", width: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M5.948,15.689A3.034,3.034,0,0,1,3.487,12.51V11.15q0-1.443-1.217-1.442V8.292q1.189,0,1.217-1.36V5.483A3.2,3.2,0,0,1,4.1,3.439,3.469,3.469,0,0,1,5.948,2.311l.383,1.1a1.445,1.445,0,0,0-.786.667,2.805,2.805,0,0,0-.28,1.316V6.83A2.225,2.225,0,0,1,4.041,9a2.245,2.245,0,0,1,1.224,2.181v1.449q.034,1.6,1.066,1.955Z" }),
    _react2.default.createElement("path", { d: "M11.668,14.582q1.04-.369,1.066-1.982V11.15A2.176,2.176,0,0,1,13.986,9a2.2,2.2,0,0,1-1.252-2.181V5.394Q12.708,3.8,11.668,3.412l.383-1.1a3.444,3.444,0,0,1,1.84,1.118,3.2,3.2,0,0,1,.621,2.034v1.47q.029,1.36,1.217,1.36V9.708q-1.216,0-1.217,1.429V12.62a3.022,3.022,0,0,1-2.461,3.069Z" })
  );
  /* eslint-enable */
}

exports.default = H1;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function H1() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", height: "18", width: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M10.212,13.977H8.161V9.711h-4v4.266H2.111V4.023H4.161V8.056h4V4.023h2.051Z" }),
    _react2.default.createElement("path", { d: "M15.889,13.977H13.914V6.351l-2.358.728V5.486L15.677,4.01h.212Z" })
  );
  /* eslint-enable */
}

exports.default = H1;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function H2() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { height: "18", width: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M9.2,14.045H7.149V9.779h-4v4.266H1.1V4.092H3.15V8.125h4V4.092H9.2Z" }),
    _react2.default.createElement("path", { d: "M16.9,14.045H10.079V12.692L13.3,9.26a7.86,7.86,0,0,0,.98-1.265A2.022,2.022,0,0,0,14.6,6.969a1.519,1.519,0,0,0-.335-1.042,1.209,1.209,0,0,0-.957-.379,1.3,1.3,0,0,0-1.056.461,1.826,1.826,0,0,0-.387,1.213H9.881a3.267,3.267,0,0,1,.434-1.661,3.065,3.065,0,0,1,1.228-1.179,3.73,3.73,0,0,1,1.8-.427,3.528,3.528,0,0,1,2.389.738,2.609,2.609,0,0,1,.852,2.085,3.35,3.35,0,0,1-.383,1.5,8.356,8.356,0,0,1-1.312,1.785l-2.263,2.386H16.9Z" })
  );
  /* eslint-enable */
}

exports.default = H2;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function H3() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { height: "18", width: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M9.275,13.977H7.224V9.711h-4v4.266H1.174V4.023H3.225V8.056h4V4.023H9.275Z" }),
    _react2.default.createElement("path", { d: "M12.164,8.125h1.053a1.484,1.484,0,0,0,1.114-.376,1.379,1.379,0,0,0,.362-1,1.221,1.221,0,0,0-.358-.937,1.4,1.4,0,0,0-.988-.335,1.457,1.457,0,0,0-.95.311,1,1,0,0,0-.383.81H10.038a2.437,2.437,0,0,1,.42-1.4,2.81,2.81,0,0,1,1.176-.967A3.926,3.926,0,0,1,13.3,3.886a3.722,3.722,0,0,1,2.475.755,2.578,2.578,0,0,1,.9,2.082,2.093,2.093,0,0,1-.417,1.258,2.711,2.711,0,0,1-1.094.882,2.479,2.479,0,0,1,1.255.9,2.453,2.453,0,0,1,.413,1.422,2.619,2.619,0,0,1-.968,2.126,3.888,3.888,0,0,1-2.56.8,3.685,3.685,0,0,1-2.437-.786,2.566,2.566,0,0,1-.947-2.078H11.89a1.142,1.142,0,0,0,.421.916,1.544,1.544,0,0,0,1.035.355,1.554,1.554,0,0,0,1.1-.372,1.285,1.285,0,0,0,.4-.988q0-1.49-1.641-1.491H12.164Z" })
  );
  /* eslint-enable */
}

exports.default = H3;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function H3() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", height: "18", width: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M9.125,13.977H7.074V9.711h-4v4.266H1.024V4.023H3.074V8.056h4V4.023H9.125Z" }),
    _react2.default.createElement("path", { d: "M15.848,10.231h1.128v1.593H15.848v2.153H13.873V11.823H9.792L9.7,10.579l4.149-6.556h2Zm-4.177,0h2.2V6.717l-.13.226Z" })
  );
  /* eslint-enable */
}

exports.default = H3;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function H3() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", height: "18", width: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M9.224,13.908H7.173V9.642h-4v4.266H1.123V3.955H3.174V7.988h4V3.955H9.224Z" }),
    _react2.default.createElement("path", { d: "M10.4,9.013l.574-5.059h5.578V5.6H12.591l-.246,2.14a3.136,3.136,0,0,1,1.5-.376,2.869,2.869,0,0,1,2.229.882,3.522,3.522,0,0,1,.807,2.468,3.613,3.613,0,0,1-.406,1.726A2.878,2.878,0,0,1,15.3,13.625a3.648,3.648,0,0,1-1.791.42,3.872,3.872,0,0,1-1.675-.365,2.968,2.968,0,0,1-1.22-1.029,2.8,2.8,0,0,1-.476-1.511H12.1a1.459,1.459,0,0,0,.435.968,1.376,1.376,0,0,0,.974.345,1.217,1.217,0,0,0,1.032-.481,2.238,2.238,0,0,0,.362-1.364,1.845,1.845,0,0,0-.417-1.3A1.53,1.53,0,0,0,13.3,8.856a1.71,1.71,0,0,0-1.142.369l-.191.178Z" })
  );
  /* eslint-enable */
}

exports.default = H3;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function H3() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", height: "18", width: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M9.179,13.96H7.129V9.694h-4V13.96H1.078V4.006H3.129V8.039h4V4.006H9.179Z" }),
    _react2.default.createElement("path", { d: "M15.418,3.9V5.531h-.191a3.358,3.358,0,0,0-2.157.7,2.835,2.835,0,0,0-.98,1.88,2.691,2.691,0,0,1,2-.807,2.536,2.536,0,0,1,2.064.93,3.725,3.725,0,0,1,.766,2.448,3.655,3.655,0,0,1-.421,1.757,3,3,0,0,1-1.189,1.224,3.447,3.447,0,0,1-1.739.438A3.229,3.229,0,0,1,11.032,13a4.247,4.247,0,0,1-.967-2.919V9.372a6.4,6.4,0,0,1,.611-2.861,4.489,4.489,0,0,1,1.758-1.921A5.142,5.142,0,0,1,15.09,3.9ZM13.49,8.894a1.578,1.578,0,0,0-.868.249,1.5,1.5,0,0,0-.574.658v.6a2.661,2.661,0,0,0,.39,1.546,1.26,1.26,0,0,0,1.094.556,1.243,1.243,0,0,0,1.028-.5,2.039,2.039,0,0,0,.394-1.3,2.04,2.04,0,0,0-.4-1.31A1.293,1.293,0,0,0,13.49,8.894Z" })
  );
  /* eslint-enable */
}

exports.default = H3;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Italic() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M7 2v2h2.58l-3.66 8H3v2h8v-2H8.42l3.66-8H15V2z" })
  );
  /* eslint-enable */
}

exports.default = Italic;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Link() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { width: "18", height: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M1.9 9c0-1.16.94-2.1 2.1-2.1h4V5H4C1.79 5 0 6.79 0 9s1.79 4 4 4h4v-1.9H4c-1.16 0-2.1-.94-2.1-2.1zM14 5h-4v1.9h4c1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1h-4V13h4c2.21 0 4-1.79 4-4s-1.79-4-4-4zm-8 5h6V8H6v2z" })
  );
  /* eslint-enable */
}

exports.default = Link;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OrderedList() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M6.559,5.023,9,12.242l2.428-7.219H14v9.953H12.035V12.256l.2-4.7L9.666,14.977H8.321L5.762,7.566l.2,4.689v2.721H4V5.023Z" }),
    _react2.default.createElement("polygon", { points: "15 1 15 2 3 2 3 1 1 1 1 5 3 5 3 4 15 4 15 5 17 5 17 1 15 1" })
  );
  /* eslint-enable */
}

exports.default = OrderedList;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OrderedList() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M2 13h2v.5H3v1h1v.5H2v1h3v-4H2v1zm0-5h1.8L2 10.1v.9h3v-1H3.2L5 7.9V7H2v1zm1-2h1V2H2v1h1v3zm4-3v2h9V3H7zm0 12h9v-2H7v2zm0-5h9V8H7v2z" })
  );
  /* eslint-enable */
}

exports.default = OrderedList;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Photo() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M16.5,12V3A1.5,1.5,0,0,0,15,1.5H6A1.5,1.5,0,0,0,4.5,3v9A1.5,1.5,0,0,0,6,13.5h9A1.5,1.5,0,0,0,16.5,12ZM8.25,9l1.522,2.033L12,8.25,15,12H6ZM1.5,4.5V15A1.5,1.5,0,0,0,3,16.5H13.5V15H3V4.5Z" })
  );
  /* eslint-enable */
}

exports.default = Photo;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Underline() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M9 13c2.76 0 5-2.24 5-5V1h-2.5v7c0 1.38-1.12 2.5-2.5 2.5S6.5 9.38 6.5 8V1H4v7c0 2.76 2.24 5 5 5zm-6 2v2h12v-2H3z" })
  );
  /* eslint-enable */
}

exports.default = Underline;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UnorderedList() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M7 10h9V8H7v2zm0-7v2h9V3H7zm0 12h9v-2H7v2zm-4-5h2V8H3v2zm0-7v2h2V3H3zm0 12h2v-2H3v2z" })
  );
  /* eslint-enable */
}

exports.default = UnorderedList;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Video() {
  /* eslint-disable max-len */
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18" },
    _react2.default.createElement("path", { d: "M3,4.5H1.5V15A1.5,1.5,0,0,0,3,16.5H13.5V15H3Zm12-3H6A1.5,1.5,0,0,0,4.5,3v9A1.5,1.5,0,0,0,6,13.5h9A1.5,1.5,0,0,0,16.5,12V3A1.5,1.5,0,0,0,15,1.5ZM9,10.875V4.125L13.5,7.5Z" })
  );
  /* eslint-enable */
}

exports.default = Video;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Entity = exports.convertToRaw = exports.convertFromRaw = exports.defaultBlocks = exports.Renderer = exports.BoldrEditor = undefined;

var _draftJs = __webpack_require__(28);

var _BoldrEditor = __webpack_require__(95);

var _BoldrEditor2 = _interopRequireDefault(_BoldrEditor);

var _Renderer = __webpack_require__(96);

var _Renderer2 = _interopRequireDefault(_Renderer);

var _plugins = __webpack_require__(127);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultBlocks = {
  IMG: _plugins.ImgBlockPlugin,
  VIDEO: _plugins.VidBlockPlugin
};

exports.default = _BoldrEditor2.default;
exports.BoldrEditor = _BoldrEditor2.default;
exports.Renderer = _Renderer2.default;
exports.defaultBlocks = defaultBlocks;
exports.convertFromRaw = _draftJs.convertFromRaw;
exports.convertToRaw = _draftJs.convertToRaw;
exports.Entity = _draftJs.Entity;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = __webpack_require__(28);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Photo = __webpack_require__(118);

var _Photo2 = _interopRequireDefault(_Photo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getBlockRenderer: function getBlockRenderer() {
    return {
      component: function component(props) {
        var entity = _draftJs.Entity.get(props.block.getEntityAt(0)); // eslint-disable-line

        var _entity$getData = entity.getData();

        var src = _entity$getData.src;
        var alt = _entity$getData.alt;

        return _react2.default.createElement('img', { src: src, alt: alt });
      },
      editable: false
    };
  },
  getInitialData: function getInitialData() {
    return {
      src: '',
      alt: ''
    };
  },
  getLabel: function getLabel() {
    return 'Image';
  },
  getIcon: function getIcon() {
    return _react2.default.createElement(_Photo2.default, null);
  },
  renderHTML: function renderHTML(data) {
    return '<img src="' + data.src + '" alt="' + data.alt + '" />';
  },
  renderInputForm: function renderInputForm(data, onDataChange, onKeyDown, onSubmit) {
    var _this = this;

    var updateSrc = function updateSrc(e) {
      onDataChange({
        src: e.target.value,
        alt: data.alt
      });
    };

    var updateAlt = function updateAlt(e) {
      onDataChange({
        src: data.src,
        alt: e.target.value
      });
    };

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('input', {
        onChange: updateSrc,
        type: 'text',
        value: data.src,
        onKeyDown: onKeyDown,
        placeholder: 'URL',
        ref: function ref(c) {
          _this.refs.customBlockInput = c;
        }
      }),
      _react2.default.createElement('input', {
        onChange: updateAlt,
        type: 'text',
        value: data.alt,
        onKeyDown: onKeyDown,
        placeholder: 'Alt text'
      }),
      _react2.default.createElement(
        'button',
        { onMouseDown: onSubmit },
        'Confirm'
      )
    );
  }
};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImgBlockPlugin = __webpack_require__(123);

var _ImgBlockPlugin2 = _interopRequireDefault(_ImgBlockPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ImgBlockPlugin2.default;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _draftJs = __webpack_require__(28);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Video = __webpack_require__(121);

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var youtubeParser = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig; // eslint-disable-line
var vimeoParser = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/ig;

var EditorVideoBlock = function (_Component) {
  _inherits(EditorVideoBlock, _Component);

  function EditorVideoBlock() {
    _classCallCheck(this, EditorVideoBlock);

    return _possibleConstructorReturn(this, (EditorVideoBlock.__proto__ || Object.getPrototypeOf(EditorVideoBlock)).apply(this, arguments));
  }

  _createClass(EditorVideoBlock, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.block !== this.props.block;
    }
  }, {
    key: 'render',
    value: function render() {
      var entity = _draftJs.Entity.get(this.props.block.getEntityAt(0));

      var _entity$getData = entity.getData();

      var src = _entity$getData.src;

      return _react2.default.createElement('iframe', { src: src, allowFullScreen: true });
    }
  }]);

  return EditorVideoBlock;
}(_react.Component);

EditorVideoBlock.propTypes = {
  block: _react2.default.PropTypes.object
};

exports.default = {
  getBlockRenderer: function getBlockRenderer() {
    return {
      component: EditorVideoBlock,
      editable: false
    };
  },
  getInitialData: function getInitialData() {
    return {
      src: ''
    };
  },
  getLabel: function getLabel() {
    return 'Video';
  },
  getIcon: function getIcon() {
    return _react2.default.createElement(_Video2.default, null);
  },
  renderHTML: function renderHTML(data) {
    return '<iframe src="' + data.src + '" allowFullScreen></iframe>';
  },
  renderInputForm: function renderInputForm(data, onDataChange, onKeyDown, onSubmit) {
    var _this2 = this;

    var updateSrc = function updateSrc(e) {
      onDataChange({
        src: e.target.value
      });
    };

    var transformSource = function transformSource(src) {
      var transformed = src;

      var youtubeId = youtubeParser.exec(src);
      var vimeoId = vimeoParser.exec(src);

      if (youtubeId) {
        transformed = 'https://www.youtube.com/embed/' + youtubeId[1];
      } else if (vimeoId) {
        transformed = 'https://player.vimeo.com/video/' + vimeoId[5] + '?color=c9ff23&title=0&byline=0&portrait=0';
      }

      return transformed;
    };

    var handleSubmit = function handleSubmit(e) {
      onSubmit(e, {
        src: transformSource(data.src)
      });
    };

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('input', {
        onChange: updateSrc,
        type: 'text',
        value: data.src,
        onKeyDown: onKeyDown,
        ref: function ref(c) {
          _this2.refs.customBlockInput = c;
        }
      }),
      _react2.default.createElement(
        'button',
        { onMouseDown: handleSubmit },
        'Confirm'
      )
    );
  }
};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VidBlockPlugin = __webpack_require__(125);

var _VidBlockPlugin2 = _interopRequireDefault(_VidBlockPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _VidBlockPlugin2.default;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImgBlockPlugin = exports.VidBlockPlugin = undefined;

var _VidBlockPlugin = __webpack_require__(126);

var _VidBlockPlugin2 = _interopRequireDefault(_VidBlockPlugin);

var _ImgBlockPlugin = __webpack_require__(124);

var _ImgBlockPlugin2 = _interopRequireDefault(_ImgBlockPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.VidBlockPlugin = _VidBlockPlugin2.default;
exports.ImgBlockPlugin = _ImgBlockPlugin2.default;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        "svg",
        { width: props.width, height: props.height, viewBox: "1430 566 336 384" },
        _react2.default.createElement(
            "title",
            null,
            "BoldrLogo"
        ),
        _react2.default.createElement(
            "g",
            { id: "boldrlogo", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", transform: "translate(1431.000000, 566.000000)" },
            _react2.default.createElement("path", { d: "M44.1994536,69.503701 L4.33082137,92.5218665 C1.934615,93.9053169 -1.19585379e-13,97.2612026 -1.18052235e-13,100.023069 L-1.64832351e-14,282.993514 C-1.49472966e-14,285.760415 1.93897477,289.113783 4.33082137,290.494717 L162.787875,381.979939 C165.184081,383.363389 169.057671,383.360872 171.449517,381.979939 L329.906571,290.494717 C332.302777,289.111266 334.237392,285.755381 334.237392,282.993514 L334.237392,100.023069 C334.237392,97.2561684 332.298417,93.9027998 329.906571,92.5218665 L171.449517,1.03664409 C169.053311,-0.346806304 165.179721,-0.344289185 162.787875,1.03664409 L132.800546,18.3498361 L132.800546,70.9916391 L163.368224,53.343382 C165.285863,52.2362327 168.390757,52.2338002 170.312609,53.343382 L285.98588,120.127376 C287.903519,121.234526 289.458073,123.922226 289.458073,126.14139 L289.458073,259.709378 C289.458073,261.923677 287.907732,264.61381 285.98588,265.723392 L170.312609,332.507386 C168.39497,333.614535 165.290077,333.616968 163.368224,332.507386 L47.6949534,265.723392 C45.7773145,264.616242 44.2227611,261.928542 44.2227611,259.709378 L44.2227611,129.986607 L44.1994536,130 L44.1994536,69.503701 Z", id: "Combined-Shape", fill: "#DD144D" }),
            _react2.default.createElement("path", { d: "M65,163.023676 L65,248.393331 C65,250.051289 66.1638836,252.067067 67.5996067,252.895982 L164.461066,308.818971 C165.8969,309.647951 168.224557,309.647887 169.66028,308.818971 L266.52174,252.895982 C267.957573,252.067003 269.121346,250.051161 269.121346,248.393331 L269.121346,136.547351 C269.121346,134.889393 267.957463,132.873615 266.52174,132.0447 L169.66028,76.1217103 C168.224446,75.2927313 165.89679,75.2927952 164.461066,76.1217103 L112,106.410121 L112,31 L69.3374023,55.5083008 C66.9448608,56.8827395 65,60.2360603 65,62.9943805 L65,163.023676 Z M165.299449,129.951625 C166.259356,129.397423 167.815541,129.397348 168.775578,129.951625 L220.336963,159.720605 C221.296869,160.274807 222.075027,161.622466 222.075027,162.731021 L222.075027,222.268979 C222.075027,223.377384 221.297,224.725118 220.336963,225.279395 L168.775578,255.048375 C167.815672,255.602577 166.259486,255.602652 165.299449,255.048375 L113.738065,225.279395 C112.778158,224.725193 112,223.377534 112,222.268979 L112,162.731021 C112,161.622616 112.778028,160.274882 113.738065,159.720605 L165.299449,129.951625 Z", id: "Combined-Shape", fill: "#424242" })
        )
    );
};
/* eslint-disable */

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _SelectFields = __webpack_require__(75);

var _SelectFields2 = _interopRequireDefault(_SelectFields);

var _createFormComponent = __webpack_require__(63);

var _createFormComponent2 = _interopRequireDefault(_createFormComponent);

var _mapError = __webpack_require__(64);

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _createFormComponent2.default)(_SelectFields2.default, function (_ref) {
  var _ref$input = _ref.input;
  var _onChange = _ref$input.onChange;

  var inputProps = _objectWithoutProperties(_ref$input, ['onChange']);

  var props = _objectWithoutProperties(_ref, ['input']);

  return _extends({}, (0, _mapError2.default)(props), inputProps, {
    onChange: function onChange(event, index, value) {
      return _onChange(value);
    }
  });
});

/***/ },
/* 130 */
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

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Heading = __webpack_require__(130);

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Heading2.default;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(93);

var _server2 = _interopRequireDefault(_server);

var _serializeJavascript = __webpack_require__(337);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(23);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Html = function (_Component) {
  _inherits(Html, _Component);

  function Html() {
    _classCallCheck(this, Html);

    return _possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).apply(this, arguments));
  }

  _createClass(Html, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var assets = _props.assets;
      var component = _props.component;
      var store = _props.store;

      var content = component ? _server2.default.renderToString(component) : '';
      var head = _reactHelmet2.default.rewind();

      return _react2.default.createElement(
        'html',
        { lang: 'en-us' },
        _react2.default.createElement(
          'head',
          null,
          _react2.default.createElement(_reactHelmet2.default, null),
          head.base.toComponent(),
          head.title.toComponent(),
          head.meta.toComponent(),
          head.link.toComponent(),
          head.script.toComponent(),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
          Object.keys(assets.styles).map(function (style, key) {
            return _react2.default.createElement('link', {
              href: assets.styles[style], key: key, media: 'screen, projection',
              rel: 'stylesheet', type: 'text/css', charSet: 'UTF-8'
            });
          }),
          _react2.default.createElement('link', { href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.css', rel: 'stylesheet' }),
          Object.keys(assets.styles).length === 0 ? _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: '#content{display:none}' } }) : null,
          _react2.default.createElement('script', { src: '//cdn.polyfill.io/v2/polyfill.min.js' })
        ),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement('div', { id: 'content', dangerouslySetInnerHTML: { __html: content } }),
          _react2.default.createElement('script', { dangerouslySetInnerHTML: {
              __html: 'window.PRELOAD_STATE=' + (0, _serializeJavascript2.default)(store.getState()) + ';' },
            charSet: 'UTF-8'
          }),
          __DLLS__ ? _react2.default.createElement('script', { key: 'dlls__vendor', src: '/assets/dlls/dll__vendor.js', charSet: 'UTF-8' }) : _react2.default.createElement('script', { key: 'vendor', src: assets.javascript.vendor, charSet: 'UTF-8' }),
          _react2.default.createElement('script', { src: assets.javascript.main, charSet: 'UTF-8' }),
          Object.keys(assets.styles).length === 0 ? _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: 'document.getElementById("content").style.display="block";' } }) : null
        )
      );
    }
  }]);

  return Html;
}(_react.Component);

exports.default = Html;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Html = __webpack_require__(132);

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Html2.default;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(16);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _Progress = __webpack_require__(181);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = (_temp = _class = function (_Component) {
  _inherits(Loader, _Component);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
  }

  _createClass(Loader, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var loading = _props.loading;

      var props = _objectWithoutProperties(_props, ['style', 'loading']);

      var loadingDiv = void 0;
      var loadingStyle = {};
      if (loading) {
        loadingDiv = _react2.default.createElement(
          'div',
          { style: {
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center'
            } },
          _react2.default.createElement(
            _reactAddonsCssTransitionGroup2.default,
            {
              component: 'div',
              className: 'text-container',
              transitionName: 'opacity',
              transitionEnterTimeout: 150,
              transitionLeaveTimeout: 150
            },
            _react2.default.createElement(_Progress.CircularProgress, { key: 'progress', style: { margin: '0 auto' } })
          )
        );
        loadingStyle.opacity = 0.2;
      }

      return _react2.default.createElement(
        'div',
        _extends({ style: Object.assign({ position: 'relative', width: '100%' }, style) }, props),
        loadingDiv,
        _react2.default.createElement(
          'div',
          { style: loadingStyle },
          this.props.children
        )
      );
    }
  }]);

  return Loader;
}(_react.Component), _class.defaultProps = {
  loading: false
}, _temp);
exports.default = Loader;


Loader.propTypes = {
  loading: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  style: _react.PropTypes.object
};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(58);

var _bind2 = _interopRequireDefault(_bind);

var _style = __webpack_require__(90);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  _inherits(Notification, _Component);

  function Notification() {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this));

    _this._id = new Date().getTime();
    _this._onActionClick = _this._onActionClick.bind(_this);
    return _this;
  }

  /*
   * Handle action click event
   * @description Handle click events on the
   */


  _createClass(Notification, [{
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

      return _react2.default.createElement(
        'div',
        { style: inline, className: cx('notification notification--' + kind) },
        _react2.default.createElement('div', { className: cx('notification__icon') }),
        _react2.default.createElement(
          'div',
          { className: cx('notification__content') },
          _react2.default.createElement(
            'span',
            { className: cx('notification__message') },
            this.props.message
          )
        ),
        actionLabel && _react2.default.createElement(
          'span',
          { className: cx('notification__action') },
          _react2.default.createElement(
            'button',
            { onClick: this._onActionClick },
            this.props.actionLabel
          )
        ),
        _react2.default.createElement('div', { className: cx('notification__close') })
      );
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
/* 136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactAddonsCssTransitionGroup = __webpack_require__(16);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _bind = __webpack_require__(58);

var _bind2 = _interopRequireDefault(_bind);

var _Notification = __webpack_require__(135);

var _Notification2 = _interopRequireDefault(_Notification);

var _style = __webpack_require__(90);

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
    return _react2.default.createElement(_Notification2.default, {
      key: getter(notification, 'id'),
      id: getter(notification, 'id'),
      message: getter(notification, 'message'),
      kind: getter(notification, 'kind'),
      onActionClick: onActionClick,
      actionLabel: actionLabel
    });
  });
  var classes = ['notification__container', className || null].join(' ').split();

  return _react2.default.createElement(
    'div',
    { className: cx(classes) },
    _react2.default.createElement(
      _reactAddonsCssTransitionGroup2.default,
      {
        transitionName: 'notification-transition',
        transitionEnterTimeout: transitionEnterTimeout,
        transitionLeaveTimeout: transitionLeaveTimeout
      },
      items
    )
  );
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
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Notifications = __webpack_require__(136);

var _Notifications2 = _interopRequireDefault(_Notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Notifications2.default;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SiteLogo;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _atm = __webpack_require__(62);

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
  return _react2.default.createElement(
    'div',
    { className: 'sitelogo', style: inlineStyle.logo },
    _react2.default.createElement('img', { src: props.site_logo, alt: 'logo', height: props.logoHeight, style: inlineStyle.img })
  );
}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SiteLogo = __webpack_require__(138);

var _SiteLogo2 = _interopRequireDefault(_SiteLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SiteLogo2.default;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _s3Uploader = __webpack_require__(141);

var _s3Uploader2 = _interopRequireDefault(_s3Uploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _s3Uploader2.default;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /* eslint-disable react/prefer-es6-class */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _s3Upload = __webpack_require__(214);

var _s3Upload2 = _interopRequireDefault(_s3Upload);

var _FileUpload = __webpack_require__(165);

var _FileUpload2 = _interopRequireDefault(_FileUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var S3Uploader = (_temp = _class = function (_Component) {
  _inherits(S3Uploader, _Component);

  function S3Uploader(props) {
    _classCallCheck(this, S3Uploader);

    var _this = _possibleConstructorReturn(this, (S3Uploader.__proto__ || Object.getPrototypeOf(S3Uploader)).call(this, props));

    _this._setFile = function (file) {
      _this.setState({ file: file });
    };

    _this.uploadFile = _this.uploadFile.bind(_this);
    _this.preprocess = _this.preprocess.bind(_this);
    _this.onFinish = _this.onFinish.bind(_this);
    return _this;
  }

  _createClass(S3Uploader, [{
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
      return _react2.default.createElement(_FileUpload2.default, {
        label: 'Select a file',
        onChange: this.uploadFile,
        accept: 'image/*',
        primary: true
      });
    }
  }]);

  return S3Uploader;
}(_react.Component), _class.propTypes = {
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
}, _temp);
exports.default = S3Uploader;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterRedux = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var _dec, _class, _class2, _temp;

  var mapStateToProps = function mapStateToProps(state) {
    return {
      isAuthenticated: !!state.auth
    };
  };
  var mapDispatchToProps = { replace: _reactRouterRedux.replace };

  var Authenticated = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp = _class2 = function (_Component) {
    _inherits(Authenticated, _Component);

    function Authenticated() {
      _classCallCheck(this, Authenticated);

      return _possibleConstructorReturn(this, (Authenticated.__proto__ || Object.getPrototypeOf(Authenticated)).apply(this, arguments));
    }

    _createClass(Authenticated, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.checkAuth(this.props.isAuthenticated);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.checkAuth(nextProps.isAuthenticated);
      }
    }, {
      key: 'checkAuth',
      value: function checkAuth(isAuthenticated) {
        if (!isAuthenticated) {
          this.props.replace('/');
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.isAuthenticated ? _react2.default.createElement(Component, this.props) : null;
      }
    }]);

    return Authenticated;
  }(Component), _class2.propTypes = {
    isAuthenticated: _react.PropTypes.bool,
    replace: _react.PropTypes.func
  }, _temp)) || _class);


  return Authenticated;
};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The avatar component is used to convert a `FontIcon`, an image, or
 * a letter into an avatar.
 *
 * Any other props given to the Avatar component such as event listeners
 * or styles will also be applied.
 */
var Avatar = (_temp = _class = function (_PureComponent) {
  _inherits(Avatar, _PureComponent);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
  }

  _createClass(Avatar, [{
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

      var props = _objectWithoutProperties(_props, ['className', 'src', 'alt', 'icon', 'children', 'suffix', 'suffixes', 'random']);

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)('md-avatar', className, this._getColor(suffix, suffixes, random))
        }, props),
        src && _react2.default.createElement('img', { src: src, alt: alt, className: 'md-img-avatar' }),
        !src && _react2.default.createElement(
          'div',
          { className: 'md-avatar-content' },
          icon || children
        )
      );
    }
  }]);

  return Avatar;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  suffixes: ['color-1', 'color-2', 'color-3']
}, _temp);
exports.default = Avatar;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _IconButton = __webpack_require__(35);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var FloatingButton = (_temp = _class = function (_PureComponent) {
  _inherits(FloatingButton, _PureComponent);

  function FloatingButton() {
    _classCallCheck(this, FloatingButton);

    return _possibleConstructorReturn(this, (FloatingButton.__proto__ || Object.getPrototypeOf(FloatingButton)).apply(this, arguments));
  }

  _createClass(FloatingButton, [{
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

      var props = _objectWithoutProperties(_props, ['className', 'fixed', 'mini', 'primary', 'secondary', 'children', 'iconClassName']);

      return _react2.default.createElement(
        _IconButton2.default,
        _extends({}, props, {
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
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = FloatingButton;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = __webpack_require__(49);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Any other props such as style or event listeners will also
 * be applied to the button.
 */
var RaisedButton = (_temp = _class = function (_PureComponent) {
  _inherits(RaisedButton, _PureComponent);

  function RaisedButton() {
    _classCallCheck(this, RaisedButton);

    return _possibleConstructorReturn(this, (RaisedButton.__proto__ || Object.getPrototypeOf(RaisedButton)).apply(this, arguments));
  }

  _createClass(RaisedButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['className']);

      return _react2.default.createElement(_Button2.default, _extends({}, props, { className: (0, _classnames2.default)('md-raised-btn', className) }));
    }
  }]);

  return RaisedButton;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  type: 'button',
  iconBefore: true
}, _temp);
exports.default = RaisedButton;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTransitionGroup = __webpack_require__(42);

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Height = __webpack_require__(53);

var _Height2 = _interopRequireDefault(_Height);

var _contextTypes = __webpack_require__(36);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var Card = (_temp = _class = function (_PureComponent) {
  _inherits(Card, _PureComponent);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

    _this.state = { expanded: props.initiallyExpanded };
    _this._handleExpandClick = _this._handleExpandClick.bind(_this);
    return _this;
  }

  _createClass(Card, [{
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

      var props = _objectWithoutProperties(_props3, ['className', 'children', 'raise', 'tableCard']);

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
          return _react2.default.createElement(
            _Height2.default,
            null,
            child
          );
        }
      });
      return _react2.default.createElement(
        _reactAddonsTransitionGroup2.default,
        _extends({
          component: 'div'
        }, props, {
          className: (0, _classnames2.default)('md-card', className, { raise: raise, 'md-table-card': tableCard })
        }),
        cardChildren
      );
    }
  }]);

  return Card;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  raise: true,
  initiallyExpanded: false,
  iconClassName: 'material-icons',
  iconChildren: 'keyboard_arrow_down',
  expanderTooltipPosition: 'left'
}, _class.childContextTypes = _contextTypes2.default, _temp);
exports.default = Card;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CardTitle = __webpack_require__(68);

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardActions = __webpack_require__(66);

var _CardActions2 = _interopRequireDefault(_CardActions);

var _FlatButton = __webpack_require__(30);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `CardActionOverlay` component is a simple wrapper for generating an overlay
 * for the `CardMedia` component by having a `CardTitle` and an array of props
 * for generating `FlatButton` for the `CardActions` component.
 */
var CardActionOverlay = (_temp = _class = function (_PureComponent) {
  _inherits(CardActionOverlay, _PureComponent);

  function CardActionOverlay() {
    _classCallCheck(this, CardActionOverlay);

    return _possibleConstructorReturn(this, (CardActionOverlay.__proto__ || Object.getPrototypeOf(CardActionOverlay)).apply(this, arguments));
  }

  _createClass(CardActionOverlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var actions = _props.actions;

      var titleProps = _objectWithoutProperties(_props, ['actions']);

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_CardTitle2.default, titleProps),
        _react2.default.createElement(
          _CardActions2.default,
          null,
          actions.map(function (actionProps, i) {
            return _react2.default.createElement(_FlatButton2.default, _extends({ key: i }, actionProps));
          })
        )
      );
    }
  }]);

  return CardActionOverlay;
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = CardActionOverlay;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `CardMedia` component is used to display images or some sort
 * media.
 *
 * The media can be forced to be 1:1 aspect ratio or a 16:9 aspect ratio.
 */
var CardMedia = (_temp = _class = function (_PureComponent) {
  _inherits(CardMedia, _PureComponent);

  function CardMedia() {
    _classCallCheck(this, CardMedia);

    return _possibleConstructorReturn(this, (CardMedia.__proto__ || Object.getPrototypeOf(CardMedia)).apply(this, arguments));
  }

  _createClass(CardMedia, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var overlay = _props.overlay;
      var children = _props.children;
      var forceAspect = _props.forceAspect;
      var aspectRatio = _props.aspectRatio;

      var props = _objectWithoutProperties(_props, ['className', 'overlay', 'children', 'forceAspect', 'aspectRatio']);

      delete props.expandable;

      return _react2.default.createElement(
        'section',
        _extends({}, props, {
          className: (0, _classnames2.default)('md-card-media', className, _defineProperty({}, 'md-media-wide', forceAspect))
        }),
        children,
        overlay && _react2.default.createElement(
          'div',
          { className: 'md-card-media-overlay' },
          overlay
        )
      );
    }
  }]);

  return CardMedia;
}(_react.PureComponent), _class.aspect = {
  equal: '1-1',
  wide: '16-9'
}, _class.propTypes = {
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
}, _class.defaultProps = {
  forceAspect: true,
  aspectRatio: 'wide'
}, _temp);
exports.default = CardMedia;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `CardText` component is a simple wrapper for text or any content in a `Card`.
 * It really just adds correct padding and font color.
 */
var CardText = (_temp = _class = function (_PureComponent) {
  _inherits(CardText, _PureComponent);

  function CardText() {
    _classCallCheck(this, CardText);

    return _possibleConstructorReturn(this, (CardText.__proto__ || Object.getPrototypeOf(CardText)).apply(this, arguments));
  }

  _createClass(CardText, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var component = _props.component;
      var className = _props.className;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['component', 'className', 'children']);

      delete props.expandable;

      return _react2.default.createElement(component, _extends({
        className: (0, _classnames2.default)('md-card-text', className)
      }, props), children);
    }
  }]);

  return CardText;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  component: 'section'
}, _temp);
exports.default = CardText;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _contextTypes = __webpack_require__(31);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `DataTable` component is used to manage the state of all rows.
 * This can either be a __plain__ table or a __data__ table.
 *
 * A __data__ table will include checkboxes on each row while a __plain__ table
 * will not.
 */
var DataTable = (_temp = _class = function (_PureComponent) {
  _inherits(DataTable, _PureComponent);

  function DataTable(props) {
    _classCallCheck(this, DataTable);

    var _this = _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this, props));

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

  _createClass(DataTable, [{
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

      var props = _objectWithoutProperties(_props2, ['className', 'children', 'plain', 'responsive']);

      delete props.checkedIconChildren;
      delete props.checkedIconClassName;
      delete props.uncheckedIconChildren;
      delete props.uncheckedIconClassName;
      delete props.defaultSelectedRows;

      var table = _react2.default.createElement(
        'table',
        _extends({ className: (0, _classnames2.default)('md-data-table', className, { 'md-plain-table': plain }) }, props),
        children
      );

      return responsive ? _react2.default.createElement(
        'div',
        { className: 'md-data-table-container' },
        table
      ) : table;
    }
  }]);

  return DataTable;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  uncheckedIconChildren: 'check_box_outline_blank',
  uncheckedIconClassName: 'material-icons',
  checkedIconChildren: 'check_box',
  checkedIconClassName: 'material-icons',
  defaultSelectedRows: [],
  responsive: true
}, _class.childContextTypes = _contextTypes2.default, _temp);
exports.default = DataTable;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _FlatButton = __webpack_require__(30);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TableColumn = __webpack_require__(69);

var _TableColumn2 = _interopRequireDefault(_TableColumn);

var _TextFields = __webpack_require__(52);

var _TextFields2 = _interopRequireDefault(_TextFields);

var _keyCodes = __webpack_require__(25);

var _utils = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Text Edit dialog for tables. This can either be a small
 * version which only has the text field or a large version
 * that includes a title with a save and cancel action buttons.
 */
var EditDialogColumn = (_temp = _class = function (_PureComponent) {
  _inherits(EditDialogColumn, _PureComponent);

  function EditDialogColumn(props) {
    _classCallCheck(this, EditDialogColumn);

    var _this = _possibleConstructorReturn(this, (EditDialogColumn.__proto__ || Object.getPrototypeOf(EditDialogColumn)).call(this, props));

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

  _createClass(EditDialogColumn, [{
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

      var props = _objectWithoutProperties(_props, ['columnStyle', 'columnClassName', 'style', 'className', 'maxLength', 'title', 'okLabel', 'cancelLabel', 'large']);

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
        actions = _react2.default.createElement(
          'footer',
          { className: 'md-dialog-footer' },
          _react2.default.createElement(_FlatButton2.default, { label: cancelLabel, onClick: this._handleCancelClick, primary: true }),
          _react2.default.createElement(_FlatButton2.default, {
            ref: 'okButton',
            label: okLabel,
            onClick: this._save,
            primary: true,
            onKeyDown: this._overrideTab
          })
        );

        largeTitle = _react2.default.createElement(
          'h3',
          { className: 'md-title' },
          title
        );
      }

      return _react2.default.createElement(
        _TableColumn2.default,
        {
          className: (0, _classnames2.default)('prevent-grow md-edit-dialog-column', columnClassName),
          ref: 'column',
          style: columnStyle
        },
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)('md-edit-dialog', className, {
              animating: animating,
              active: active,
              large: large
            }),
            style: style
          },
          largeTitle,
          _react2.default.createElement(_TextFields2.default, _extends({}, props, {
            ref: 'textField',
            floatingLabel: false,
            onKeyDown: this._handleKeyDown,
            onFocus: this._handleFocus,
            value: value,
            onChange: this._handleChange,
            maxLength: active ? maxLength : null
          })),
          actions
        )
      );
    }
  }]);

  return EditDialogColumn;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  transitionDuration: 300,
  okOnOutsideClick: true,
  okLabel: 'Save',
  cancelLabel: 'Cancel'
}, _temp);
exports.default = EditDialogColumn;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _contextTypes = __webpack_require__(31);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `TableBody` component is used for managing the state of all
 * `TableRow` inside of it.
 */
var TableBody = (_temp = _class = function (_Component) {
  _inherits(TableBody, _Component);

  function TableBody() {
    _classCallCheck(this, TableBody);

    return _possibleConstructorReturn(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).apply(this, arguments));
  }

  _createClass(TableBody, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['children', 'className']);

      var _context = this.context;
      var selectedRows = _context.selectedRows;
      var toggleSelectedRow = _context.toggleSelectedRow;


      var rows = _react2.default.Children.map(children, function (row, i) {
        var uncontrolled = typeof row.props.selected === 'undefined';

        // Update the row to inject the selected prop from context if it is uncontrolled.
        // Also update the onCheckbox click function to additionally toggle the row if uncontrolled.
        return _react2.default.cloneElement(row, _extends({}, row.props, {
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
        _extends({}, props, { className: (0, _classnames2.default)('md-table-body', className) }),
        rows
      );
    }
  }]);

  return TableBody;
}(_react.Component), _class.propTypes = {
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
}, _class.contextTypes = _contextTypes2.default, _temp);
exports.default = TableBody;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FontIcons = __webpack_require__(7);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Checkbox = __webpack_require__(184);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _contextTypes = __webpack_require__(31);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableCheckbox = (_temp = _class = function (_Component) {
  _inherits(TableCheckbox, _Component);

  function TableCheckbox() {
    _classCallCheck(this, TableCheckbox);

    return _possibleConstructorReturn(this, (TableCheckbox.__proto__ || Object.getPrototypeOf(TableCheckbox)).apply(this, arguments));
  }

  _createClass(TableCheckbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var checked = _props.checked;

      var props = _objectWithoutProperties(_props, ['checked']);

      var _context = this.context;
      var uncheckedIconChildren = _context.uncheckedIconChildren;
      var uncheckedIconClassName = _context.uncheckedIconClassName;
      var checkedIconChildren = _context.checkedIconChildren;
      var checkedIconClassName = _context.checkedIconClassName;


      var checkedIcon = _react2.default.createElement(_FontIcons2.default, {
        iconClassName: checkedIconClassName,
        children: checkedIconChildren
      });
      var uncheckedIcon = _react2.default.createElement(_FontIcons2.default, {
        iconClassName: uncheckedIconClassName,
        children: uncheckedIconChildren
      });

      return _react2.default.createElement(
        'td',
        { className: 'md-table-checkbox' },
        _react2.default.createElement(_Checkbox2.default, _extends({
          checked: checked
        }, props, {
          checkedIcon: checkedIcon,
          uncheckedIcon: uncheckedIcon
        }))
      );
    }
  }]);

  return TableCheckbox;
}(_react.Component), _class.propTypes = {
  checked: _react.PropTypes.bool
}, _class.contextTypes = _contextTypes2.default, _temp);
exports.default = TableCheckbox;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contextTypes = __webpack_require__(31);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _headerContextTypes = __webpack_require__(70);

var _headerContextTypes2 = _interopRequireDefault(_headerContextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A `thead` component ot use in the `DataTable` component. This
 * will automatically update the header row to check if it is selected
 * and inject a function to toggle all rows selected if the row is
 * uncontrolled. It will also automatically attempt to set the `TableColumn`
 * components to be the header type.
 */
var TableHeader = (_temp = _class = function (_Component) {
  _inherits(TableHeader, _Component);

  function TableHeader() {
    _classCallCheck(this, TableHeader);

    return _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).apply(this, arguments));
  }

  _createClass(TableHeader, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return _extends({}, this.context, {
        header: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['children']);

      var _context = this.context;
      var toggleAllRows = _context.toggleAllRows;
      var allSelected = _context.allSelected;

      var header = _react2.default.Children.only(children);
      var selected = typeof header.props.selected === 'undefined' ? allSelected : header.props.selected;

      var row = _react2.default.cloneElement(header, _extends({}, header.props, {
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
}(_react.Component), _class.contextTypes = _contextTypes2.default, _class.childContextTypes = _headerContextTypes2.default, _class.propTypes = {
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
}, _temp);
exports.default = TableHeader;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _SelectFields = __webpack_require__(75);

var _SelectFields2 = _interopRequireDefault(_SelectFields);

var _IconButton = __webpack_require__(35);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `TablePagination` component is used to generate the table footer that helps
 * pagination through a large dataset by limiting the number of rows per page.
 * The pagination will always be placed persistently at the bottom of the table
 * so that when a user scrolls to the right, they will always be able to use the
 * pagination.
 */
var TablePagination = (_temp = _class = function (_PureComponent) {
  _inherits(TablePagination, _PureComponent);

  function TablePagination(props) {
    _classCallCheck(this, TablePagination);

    var _this = _possibleConstructorReturn(this, (TablePagination.__proto__ || Object.getPrototypeOf(TablePagination)).call(this, props));

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

  _createClass(TablePagination, [{
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

      var props = _objectWithoutProperties(_props2, ['className', 'rows', 'rowsPerPageLabel', 'rowsPerPageItems', 'incrementIconChildren', 'incrementIconClassName', 'decrementIconChildren', 'decrementIconClassName']);

      delete props.onPagination;
      delete props.defaultPage;
      delete props.defaultRowsPerPage;

      var pagination = start + 1 + '-' + Math.min(rows, start + rowsPerPage) + ' of ' + rows;
      return _react2.default.createElement(
        'tfoot',
        _extends({}, props, { className: (0, _classnames2.default)('md-table-footer', className) }),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            { colSpan: '100%' },
            _react2.default.createElement(
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
              _react2.default.createElement(
                'span',
                { className: 'pagination' },
                pagination
              ),
              _react2.default.createElement(_IconButton2.default, {
                onClick: this._decrement,
                disabled: start === 0,
                children: decrementIconChildren,
                iconClassName: decrementIconClassName
              }),
              _react2.default.createElement(_IconButton2.default, {
                onClick: this._increment,
                disabled: start + rowsPerPage >= rows,
                children: incrementIconChildren,
                iconClassName: incrementIconClassName
              })
            ),
            _react2.default.createElement('div', { className: 'md-table-footer-controls-mask' })
          )
        )
      );
    }
  }]);

  return TablePagination;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  defaultPage: 1,
  defaultRowsPerPage: 10,
  rowsPerPageLabel: 'Rows per page:',
  rowsPerPageItems: [10, 20, 30, 40, 50, 100],
  incrementIconChildren: 'keyboard_arrow_right',
  decrementIconChildren: 'keyboard_arrow_left'
}, _temp);
exports.default = TablePagination;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _headerContextTypes = __webpack_require__(70);

var _headerContextTypes2 = _interopRequireDefault(_headerContextTypes);

var _TableCheckbox = __webpack_require__(153);

var _TableCheckbox2 = _interopRequireDefault(_TableCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A component for displaying a row in a `DataTable`. This will
 * automatically add a `Checkbox` component to the row if it is not
 * a `plain` table.
 *
 * This component will also automatically adjust the padding between
 * columns based on the longest column if the `autoAdjust` prop
 * is set to true.
 */
var TableRow = (_temp = _class = function (_Component) {
  _inherits(TableRow, _Component);

  function TableRow(props, context) {
    _classCallCheck(this, TableRow);

    var _this = _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props, context));

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

  _createClass(TableRow, [{
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

      var props = _objectWithoutProperties(_props, ['className', 'children', 'selected', 'onCheckboxClick']);

      delete props.autoAdjust;

      var checkbox = void 0;
      if (!this.context.plain) {
        checkbox = _react2.default.createElement(_TableCheckbox2.default, { key: 'checkbox', checked: selected, onChange: onCheckboxClick });
      }

      var columns = _react2.default.Children.map(children, function (column, i) {
        return _react2.default.cloneElement(column, _extends({
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
        _extends({}, props, {
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
}(_react.Component), _class.propTypes = {
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
}, _class.defaultProps = {
  autoAdjust: true
}, _class.contextTypes = _headerContextTypes2.default, _temp);
exports.default = TableRow;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Toolbar = __webpack_require__(198);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Divider = __webpack_require__(72);

var _Divider2 = _interopRequireDefault(_Divider);

var _DialogFooter = __webpack_require__(159);

var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DIALOG_PADDING = 8;

/**
 * This is the Dialog that appears when the `DialogContainer` component has
 * a true value for `isOpen`.
 */
var Dialog = (_temp = _class = function (_PureComponent) {
  _inherits(Dialog, _PureComponent);

  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.state = { stacked: false };
    return _this;
  }

  _createClass(Dialog, [{
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

      var props = _objectWithoutProperties(_props, ['title', 'children', 'className', 'contentStyle', 'contentClassName', 'actions', 'actionLeft', 'actionRight', 'style', 'transformOrigin', 'isSimple', 'isFullPage']);

      delete props.pageX;
      delete props.pageY;

      var _state = this.state;
      var stacked = _state.stacked;
      var divided = _state.divided;


      var header = void 0;
      var footer = void 0;
      if (!isFullPage && title) {
        header = _react2.default.createElement(
          'h1',
          { className: 'md-title' },
          title
        );
      } else if (isFullPage) {
        header = _react2.default.createElement(_Toolbar2.default, {
          primary: true,
          fixed: true,
          actionLeft: actionLeft,
          title: title,
          actionsRight: actionRight
        });
      }

      if (actions && actions.length) {
        footer = _react2.default.createElement(_DialogFooter2.default, { className: (0, _classnames2.default)({ stacked: stacked }), actions: actions });
      }

      return _react2.default.createElement(
        'div',
        _extends({
          ref: 'dialog',
          className: (0, _classnames2.default)('md-dialog', className, {
            'full-page': isFullPage,
            'dialog-centered': !isFullPage
          }),
          style: Object.assign({}, style, { transformOrigin: transformOrigin })
        }, props),
        header,
        header && divided && _react2.default.createElement(_Divider2.default, null),
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
        footer && divided && _react2.default.createElement(_Divider2.default, null),
        footer
      );
    }
  }]);

  return Dialog;
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = Dialog;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(16);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(20);

var _Dialog = __webpack_require__(157);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Overlay = __webpack_require__(79);

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This component renders a `Dialog` when the `isOpen` prop is set to true.
 * It will manage the css transitions between the open and closed states.
 */
var DialogContainer = (_temp = _class = function (_PureComponent) {
  _inherits(DialogContainer, _PureComponent);

  function DialogContainer(props) {
    _classCallCheck(this, DialogContainer);

    var _this = _possibleConstructorReturn(this, (DialogContainer.__proto__ || Object.getPrototypeOf(DialogContainer)).call(this, props));

    _this.state = { openClassName: props.isOpen };
    _this._delayIsOpen = _this._delayIsOpen.bind(_this);
    _this._openFullPageDialog = _this._openFullPageDialog.bind(_this);
    return _this;
  }

  _createClass(DialogContainer, [{
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

      var props = _objectWithoutProperties(_props, ['actions', 'isOpen', 'title', 'children', 'className', 'contentClassName', 'dialogClassName', 'modal', 'close', 'actionLeft', 'actionRight', 'style', 'dialogStyle', 'contentStyle', 'transitionName', 'transitionEnter', 'transitionEnterTimeout', 'transitionLeave', 'transitionLeaveTimeout']);

      var isSimple = !actions || !actions.length;

      var isFullPage = !!actionLeft || !!actionRight;
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
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
        },
        isOpen && _react2.default.createElement(_Dialog2.default, _extends({
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
        }, props)),
        _react2.default.createElement(_Overlay2.default, { isOpen: isOpen, onClick: modal ? null : close })
      );
    }
  }]);

  return DialogContainer;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  modal: false,
  transitionName: 'md-dialog',
  transitionEnter: true,
  transitionEnterTimeout: 300,
  transitionLeave: true,
  transitionLeaveTimeout: 300
}, _temp);
exports.default = DialogContainer;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _FlatButton = __webpack_require__(30);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A simple component for converting action objects into `FlatButton`
 * or just rendering the actions that are valid elements.
 */
var DialogFooter = (_temp = _class = function (_PureComponent) {
  _inherits(DialogFooter, _PureComponent);

  function DialogFooter() {
    _classCallCheck(this, DialogFooter);

    return _possibleConstructorReturn(this, (DialogFooter.__proto__ || Object.getPrototypeOf(DialogFooter)).apply(this, arguments));
  }

  _createClass(DialogFooter, [{
    key: '_actionToElement',
    value: function _actionToElement(action, key) {
      if (!_react2.default.isValidElement(action)) {
        return _react2.default.createElement(_FlatButton2.default, _extends({ key: key }, action));
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

      return _react2.default.createElement(
        'footer',
        { className: (0, _classnames2.default)('md-dialog-footer', className) },
        children
      );
    }
  }]);

  return DialogFooter;
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = DialogFooter;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _reactDom = __webpack_require__(4);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _keyCodes = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var ExpansionList = (_temp = _class = function (_PureComponent) {
  _inherits(ExpansionList, _PureComponent);

  function ExpansionList(props) {
    _classCallCheck(this, ExpansionList);

    var _this = _possibleConstructorReturn(this, (ExpansionList.__proto__ || Object.getPrototypeOf(ExpansionList)).call(this, props));

    _this.state = { columnWidths: [], focusedIndex: -1 };

    _this._removeFocus = _this._removeFocus.bind(_this);
    _this._calcColumnWidths = _this._calcColumnWidths.bind(_this);
    _this._determineTabFocus = _this._determineTabFocus.bind(_this);
    return _this;
  }

  _createClass(ExpansionList, [{
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

      var props = _objectWithoutProperties(_props, ['children', 'className', 'component']);

      return (0, _react.createElement)(component, _extends({}, props, {
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
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  component: 'ul'
}, _temp);
exports.default = ExpansionList;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactAddonsTransitionGroup = __webpack_require__(42);

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _FontIcons = __webpack_require__(7);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Height = __webpack_require__(53);

var _Height2 = _interopRequireDefault(_Height);

var _PanelContent = __webpack_require__(162);

var _PanelContent2 = _interopRequireDefault(_PanelContent);

var _AccessibleFakeButton = __webpack_require__(48);

var _AccessibleFakeButton2 = _interopRequireDefault(_AccessibleFakeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var ExpansionPanel = (_temp = _class = function (_PureComponent) {
  _inherits(ExpansionPanel, _PureComponent);

  function ExpansionPanel(props) {
    _classCallCheck(this, ExpansionPanel);

    var _this = _possibleConstructorReturn(this, (ExpansionPanel.__proto__ || Object.getPrototypeOf(ExpansionPanel)).call(this, props));

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

  _createClass(ExpansionPanel, [{
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

      var props = _objectWithoutProperties(_props3, ['className', 'label', 'secondaryLabel', 'expandedSecondaryLabel', 'children', 'expandIconChildren', 'expandIconClassName', 'focused', 'columnWidths', 'saveType', 'saveLabel', 'savePrimary', 'saveSecondary', 'cancelType', 'cancelLabel', 'cancelPrimary', 'cancelSecondary', 'headerStyle', 'headerClassName', 'contentStyle', 'contentClassName', 'tabIndex']);

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
        visibleChildren = _react2.default.createElement(
          _Height2.default,
          { key: 'content' },
          _react2.default.createElement(_PanelContent2.default, {
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
          })
        );
      }

      var columns = _react.Children.map(expanded && expandedSecondaryLabel || secondaryLabel, function (panelLabel, i) {
        return _react2.default.createElement(
          'div',
          { className: 'md-panel-column', style: { minWidth: columnWidths[i + 1] } },
          panelLabel
        );
      });

      if (!Array.isArray(columns)) {
        columns = [columns];
      }

      columns.unshift(_react2.default.createElement(
        'div',
        { className: 'md-panel-column md-panel-label', style: { minWidth: columnWidths[0] }, key: 'main-label' },
        label
      ));

      return _react2.default.createElement(
        _reactAddonsTransitionGroup2.default,
        _extends({
          className: (0, _classnames2.default)('md-expansion-panel', className, { expanded: expanded }),
          component: 'li'
        }, props, {
          'aria-expanded': expanded
        }),
        _react2.default.createElement(
          _AccessibleFakeButton2.default,
          {
            onClick: this._handleClick,
            style: headerStyle,
            className: (0, _classnames2.default)('md-panel-header', headerClassName, { 'expanded': expanded || twoLine, focused: focused }),
            tabIndex: tabIndex
          },
          columns,
          _react2.default.createElement(_FontIcons2.default, {
            className: (0, _classnames2.default)('md-panel-expander', { 'flipped': expanded }),
            iconClassName: expandIconClassName,
            children: expandIconChildren
          })
        ),
        visibleChildren
      );
    }
  }]);

  return ExpansionPanel;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
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
}, _temp);
exports.default = ExpansionPanel;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _PanelControls = __webpack_require__(163);

var _PanelControls2 = _interopRequireDefault(_PanelControls);

var _Dividers = __webpack_require__(24);

var _Dividers2 = _interopRequireDefault(_Dividers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `PanelContent` component is for displaying the expanded content
 * for an `ExpansionPanel`. It wil display any children in a `md-panel-content`
 * container followed by a `Divider` and the `PanelControls` .
 */
var PanelContent = (_temp = _class = function (_PureComponent) {
  _inherits(PanelContent, _PureComponent);

  function PanelContent() {
    _classCallCheck(this, PanelContent);

    return _possibleConstructorReturn(this, (PanelContent.__proto__ || Object.getPrototypeOf(PanelContent)).apply(this, arguments));
  }

  _createClass(PanelContent, [{
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


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('md-panel-content', className), style: style },
          children
        ),
        _react2.default.createElement(_Dividers2.default, { className: 'md-panel-divider' }),
        _react2.default.createElement(_PanelControls2.default, {
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
        })
      );
    }
  }]);

  return PanelContent;
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = PanelContent;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _FlatButton = __webpack_require__(30);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `PanelControls` component is used for rendering the two buttons
 * below the expanded content for the panel.
 */
var PanelControls = (_temp = _class = function (_PureComponent) {
  _inherits(PanelControls, _PureComponent);

  function PanelControls() {
    _classCallCheck(this, PanelControls);

    return _possibleConstructorReturn(this, (PanelControls.__proto__ || Object.getPrototypeOf(PanelControls)).apply(this, arguments));
  }

  _createClass(PanelControls, [{
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


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('md-panel-controls', className) },
        _react2.default.createElement(_FlatButton2.default, {
          type: cancelType,
          label: cancelLabel,
          onClick: onCancel,
          primary: cancelPrimary,
          secondary: cancelSecondary
        }),
        _react2.default.createElement(_FlatButton2.default, {
          type: saveType,
          label: saveLabel,
          onClick: onSave,
          primary: savePrimary,
          secondary: saveSecondary
        })
      );
    }
  }]);

  return PanelControls;
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = PanelControls;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Inks = __webpack_require__(19);

var _Inks2 = _interopRequireDefault(_Inks);

var _FontIcons = __webpack_require__(7);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `FileInput` component is used as simple styling for the `<input type="file" />`.
 * It will style the input as a raised button by default.
 */
var FileInput = (_temp = _class = function (_PureComponent) {
  _inherits(FileInput, _PureComponent);

  function FileInput(props) {
    _classCallCheck(this, FileInput);

    var _this = _possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).call(this, props));

    _this._handleChange = _this._handleChange.bind(_this);
    return _this;
  }

  _createClass(FileInput, [{
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

      var props = _objectWithoutProperties(_props2, ['style', 'className', 'label', 'iconChildren', 'iconClassName', 'primary', 'secondary', 'flat', 'ink', 'id']);

      delete props.onChange;

      return _react2.default.createElement(
        'label',
        {
          style: style,
          className: (0, _classnames2.default)('md-btn md-' + (flat ? 'flat' : 'raised') + '-btn md-file-input-btn', className, {
            'md-primary': primary,
            'md-secondary': secondary
          }),
          disabled: props.disabled,
          htmlFor: id
        },
        ink,
        _react2.default.createElement('input', _extends({}, props, {
          id: id,
          'aria-hidden': 'true',
          type: 'file',
          className: 'md-file-input',
          onChange: this._handleChange
        })),
        _react2.default.createElement(
          'div',
          { className: 'icon-separator' },
          _react2.default.createElement(_FontIcons2.default, { iconClassName: iconClassName, children: iconChildren }),
          _react2.default.createElement(
            'span',
            { className: 'text' },
            label
          )
        )
      );
    }
  }]);

  return FileInput;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  label: 'Select a file from your computer',
  iconChildren: 'file_upload'
}, _temp);
exports.default = (0, _Inks2.default)(FileInput);

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _FileInput = __webpack_require__(164);

var _FileInput2 = _interopRequireDefault(_FileInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var FileUpload = (_temp = _class = function (_PureComponent) {
  _inherits(FileUpload, _PureComponent);

  function FileUpload(props) {
    _classCallCheck(this, FileUpload);

    var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this, props));

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


  _createClass(FileUpload, [{
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
      var props = _objectWithoutProperties(this.props, []);

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

      return _react2.default.createElement(_FileInput2.default, _extends({}, props, { onChange: this._handleUpload }));
    }
  }]);

  return FileUpload;
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = FileUpload;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Any additional props such as style or event listeners will also be included.
 */
var FontIcon = (_temp = _class = function (_PureComponent) {
  _inherits(FontIcon, _PureComponent);

  function FontIcon() {
    _classCallCheck(this, FontIcon);

    return _possibleConstructorReturn(this, (FontIcon.__proto__ || Object.getPrototypeOf(FontIcon)).apply(this, arguments));
  }

  _createClass(FontIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var iconClassName = _props.iconClassName;
      var className = _props.className;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['iconClassName', 'className', 'children']);

      return _react2.default.createElement(
        'i',
        _extends({ className: (0, _classnames2.default)('md-icon', iconClassName, className) }, props),
        children
      );
    }
  }]);

  return FontIcon;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  iconClassName: 'material-icons'
}, _temp);
exports.default = FontIcon;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InkTransition = (_temp = _class = function (_Component) {
  _inherits(InkTransition, _Component);

  function InkTransition(props) {
    _classCallCheck(this, InkTransition);

    var _this = _possibleConstructorReturn(this, (InkTransition.__proto__ || Object.getPrototypeOf(InkTransition)).call(this, props));

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

  _createClass(InkTransition, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.state.timeout) {
        clearTimeout(this.state.timeout);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = _objectWithoutProperties(this.props, []);

      delete props.transitionEnterTimeout;
      delete props.transitionLeaveTimeout;

      return _react2.default.createElement('div', _extends({ className: 'md-ink' }, props));
    }
  }]);

  return InkTransition;
}(_react.Component), _class.propTypes = {
  style: _react.PropTypes.object.isRequired,
  transitionEnterTimeout: _react.PropTypes.number.isRequired,
  transitionLeaveTimeout: _react.PropTypes.number.isRequired
}, _class.defaultProps = {
  transitionEnterTimeout: 150,
  transitionLeaveTimeout: 450
}, _temp);
exports.default = InkTransition;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactAddonsTransitionGroup = __webpack_require__(42);

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _keyCodes = __webpack_require__(25);

var _InkTransition = __webpack_require__(167);

var _InkTransition2 = _interopRequireDefault(_InkTransition);

var _utils = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    _inherits(Ink, _PureComponent);

    function Ink(props) {
      _classCallCheck(this, Ink);

      var _this = _possibleConstructorReturn(this, (Ink.__proto__ || Object.getPrototypeOf(Ink)).call(this, props));

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

    _createClass(Ink, [{
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
          inks: [].concat(_toConsumableArray(this.state.inks), [ink])
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
        var props = _objectWithoutProperties(this.props, []);

        delete props.inkDisabled;

        // Don't inject ink and new props if disabled
        if (this._disabled()) {
          return _react2.default.createElement(ComposedComponent, props);
        }

        var inks = this.state.inks.map(function (_ref2) {
          var time = _ref2.time;

          var inkProps = _objectWithoutProperties(_ref2, ['time']);

          return _react2.default.createElement(_InkTransition2.default, _extends({ key: time.getTime() }, inkProps));
        });
        var ink = _react2.default.createElement(
          _reactAddonsTransitionGroup2.default,
          { className: 'md-ink-container', key: 'ink-container' },
          inks
        );

        return _react2.default.createElement(ComposedComponent, _extends({}, props, {
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
/* 169 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _ListItemText = __webpack_require__(73);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A `ListItemControl` component has either a `primaryAction` or a `secondaryAction`.
 * The `primaryAction` can **only** be a `Checkbox`. A `secondaryAction` can either be
 * a `Checkbox`, `Switch`, or a `Reorder` icon.
 */
var ListItemControl = (_temp = _class = function (_Component) {
  _inherits(ListItemControl, _Component);

  function ListItemControl() {
    _classCallCheck(this, ListItemControl);

    return _possibleConstructorReturn(this, (ListItemControl.__proto__ || Object.getPrototypeOf(ListItemControl)).apply(this, arguments));
  }

  _createClass(ListItemControl, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var primaryAction = _props.primaryAction;
      var secondaryAction = _props.secondaryAction;
      var primaryText = _props.primaryText;
      var secondaryText = _props.secondaryText;
      var threeLines = _props.threeLines;

      var props = _objectWithoutProperties(_props, ['primaryAction', 'secondaryAction', 'primaryText', 'secondaryText', 'threeLines']);

      var label = _react2.default.createElement(_ListItemText2.default, { primaryText: primaryText, secondaryText: secondaryText });

      var control = _react2.default.cloneElement(primaryAction || secondaryAction, { label: label, labelBefore: !!secondaryAction });
      var className = (0, _classnames2.default)('md-list-item', props.className, {
        'primary-action': !!primaryAction,
        'secondary-action': !!secondaryAction,
        'two-lines': secondaryText && !threeLines,
        'three-lines': threeLines
      });

      return _react2.default.createElement(
        'li',
        _extends({}, props, { className: className }),
        control
      );
    }
  }]);

  return ListItemControl;
}(_react.Component), _class.propTypes = {
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
}, _class.defaultProps = {
  threeLines: false
}, _temp);
exports.default = ListItemControl;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Inks = __webpack_require__(19);

var _Inks2 = _interopRequireDefault(_Inks);

var _AccessibleFakeButton = __webpack_require__(48);

var _AccessibleFakeButton2 = _interopRequireDefault(_AccessibleFakeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListTile = (_temp = _class = function (_PureComponent) {
  _inherits(ListTile, _PureComponent);

  function ListTile() {
    _classCallCheck(this, ListTile);

    return _possibleConstructorReturn(this, (ListTile.__proto__ || Object.getPrototypeOf(ListTile)).apply(this, arguments));
  }

  _createClass(ListTile, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var ink = _props.ink;
      var children = _props.children;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['ink', 'children', 'className']);

      return _react2.default.createElement(
        _AccessibleFakeButton2.default,
        _extends({}, props, { className: (0, _classnames2.default)('md-list-tile', className) }),
        ink,
        children
      );
    }
  }]);

  return ListTile;
}(_react.PureComponent), _class.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  tabIndex: _react.PropTypes.number,

  // Injected from injectInk
  ink: _react.PropTypes.node
}, _class.defaultProps = {
  tabIndex: 0
}, _temp);
exports.default = (0, _Inks2.default)(ListTile);

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsCssTransitionGroup = __webpack_require__(16);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Lists = __webpack_require__(74);

var _utils = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The Menu component is a controlled component. It requires a boolean `isOpen`
 * to determinte its state.
 *
 * Menus allow users to take an action by selecting from a list of choices revealed
 * upon opening a temporary, new sheet of material.
 */
var Menu = (_temp2 = _class = function (_PureComponent) {
  _inherits(Menu, _PureComponent);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.closeOnOutsideClick = function (e) {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
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

      var props = _objectWithoutProperties(_props3, ['className', 'listClassName', 'listStyle', 'children', 'toggle', 'isOpen', 'close', 'autoclose', 'cascading', 'expanderIconChildren', 'expanderIconClassName', 'fullWidth', 'limitHeight']);

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
        _extends({
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
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  autoclose: true,
  expanderIconChildren: 'keyboard_arrow_right',
  expanderIconClassName: 'material-icons'
}, _temp2);
exports.default = Menu;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Menu = __webpack_require__(171);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Menu2.default;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Dividers = __webpack_require__(24);

var _Dividers2 = _interopRequireDefault(_Dividers);

var _List = __webpack_require__(50);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(51);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Subheaders = __webpack_require__(78);

var _Subheaders2 = _interopRequireDefault(_Subheaders);

var _DrawerHeader = __webpack_require__(174);

var _DrawerHeader2 = _interopRequireDefault(_DrawerHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `Drawer` component is another version of the `Sidebar` component
 * that is built into the `NavigationDrawer` component.
 */
var Drawer = (_temp = _class = function (_PureComponent) {
  _inherits(Drawer, _PureComponent);

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _this._mapItemsToComponents = _this._mapItemsToComponents.bind(_this);
    return _this;
  }

  _createClass(Drawer, [{
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

      var remainingProps = _objectWithoutProperties(item, ['divider', 'subheader', 'nestedItems']);

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
        header = _react2.default.createElement(_DrawerHeader2.default, {
          key: header,
          title: title,
          closeDrawer: closeDrawer,
          closeIconChildren: closeIconChildren,
          closeIconClassName: closeIconClassName,
          persistent: persistent,
          temporary: temporary,
          children: children
        });
      }

      return _react2.default.createElement(
        'nav',
        {
          style: style,
          className: (0, _classnames2.default)('md-navigation-drawer', className, drawerType, {
            mobile: mobile,
            'active': mini && isOpen,
            'mobile-inactive': mobile && !isOpen,
            'mobile-active': mobile && isOpen
          })
        },
        header,
        _react2.default.createElement(
          _List2.default,
          {
            key: 'nav-items',
            onClick: autoclose && temporary ? closeDrawer : null,
            className: (0, _classnames2.default)({ 'md-drawer-scrolling-list': drawerHeaderFixed })
          },
          items
        )
      );
    }
  }]);

  return Drawer;
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = Drawer;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Buttons = __webpack_require__(5);

var _Dividers = __webpack_require__(24);

var _Dividers2 = _interopRequireDefault(_Dividers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `DrawerHeader` component is used to create a simple header for the sidebar
 * in the Navigation Drawer. It consists of an optional title, any children, and
 * a close icon for persistent Navigation Drawers.
 */
var DrawerHeader = (_temp = _class = function (_PureComponent) {
  _inherits(DrawerHeader, _PureComponent);

  function DrawerHeader() {
    _classCallCheck(this, DrawerHeader);

    return _possibleConstructorReturn(this, (DrawerHeader.__proto__ || Object.getPrototypeOf(DrawerHeader)).apply(this, arguments));
  }

  _createClass(DrawerHeader, [{
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
        headerTitle = _react2.default.createElement(
          'h3',
          { key: 'title', className: 'md-title' },
          title
        );
      }

      var closeBtn = void 0;
      if (persistent || temporary) {
        closeBtn = _react2.default.createElement(_Buttons.IconButton, {
          key: 'close-btn',
          className: 'md-drawer-toggle',
          onClick: closeDrawer,
          children: closeIconChildren,
          iconClassName: closeIconClassName
        });
      }

      if (!persistent && !title && !children) {
        return null;
      }

      return _react2.default.createElement(
        'header',
        { className: (0, _classnames2.default)('md-drawer-header', className) },
        headerTitle,
        children,
        closeBtn,
        _react2.default.createElement(_Dividers2.default, { key: 'divider' })
      );
    }
  }]);

  return DrawerHeader;
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = DrawerHeader;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Buttons = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `DrawerToolbar` component is the Toolbar that gets rendered to the right
 * of the sliding drawer and above the main content.
 */
var DrawerToolbar = (_temp = _class = function (_PureComponent) {
  _inherits(DrawerToolbar, _PureComponent);

  function DrawerToolbar() {
    _classCallCheck(this, DrawerToolbar);

    return _possibleConstructorReturn(this, (DrawerToolbar.__proto__ || Object.getPrototypeOf(DrawerToolbar)).apply(this, arguments));
  }

  _createClass(DrawerToolbar, [{
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
        menuBtn = _react2.default.createElement(_Buttons.IconButton, {
          key: 'menu-btn',
          onClick: openDrawer,
          children: menuIconChildren,
          iconClassName: menuIconClassName
        });
      }

      var toolbarTitle = void 0;
      if (title) {
        toolbarTitle = _react2.default.createElement(
          'h3',
          { key: 'title', className: 'md-title' },
          title
        );
      }

      return _react2.default.createElement(
        'header',
        {
          style: style,
          className: (0, _classnames2.default)('md-navigation-drawer-toolbar', className, drawerType, {
            'active': isOpen && !temporary
          })
        },
        menuBtn,
        toolbarTitle,
        children
      );
    }
  }]);

  return DrawerToolbar;
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = DrawerToolbar;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(16);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Overlay = __webpack_require__(79);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Drawer = __webpack_require__(173);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _DrawerToolbar = __webpack_require__(175);

var _DrawerToolbar2 = _interopRequireDefault(_DrawerToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var NavigationDrawer = (_temp = _class = function (_PureComponent) {
  _inherits(NavigationDrawer, _PureComponent);

  function NavigationDrawer(props) {
    _classCallCheck(this, NavigationDrawer);

    var _this = _possibleConstructorReturn(this, (NavigationDrawer.__proto__ || Object.getPrototypeOf(NavigationDrawer)).call(this, props));

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

  _createClass(NavigationDrawer, [{
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
        drawer = _react2.default.createElement(_Drawer2.default, {
          key: 'drawer',
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
        });
      }

      var overlay = void 0;
      if (temporary) {
        overlay = _react2.default.createElement(_Overlay2.default, { isOpen: isOpen, onClick: this._closeDrawer });
      }

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          style: style,
          className: (0, _classnames2.default)('md-navigation-drawer-container', className),
          component: 'div',
          transitionName: transitionName,
          transitionEnterTimeout: transitionEnterTimeout,
          transitionLeaveTimeout: transitionLeaveTimeout
        },
        drawer,
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
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
          },
          _react2.default.createElement(_DrawerToolbar2.default, {
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
          }),
          children,
          overlay
        )
      );
    }
  }]);

  return NavigationDrawer;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
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
}, _temp);
exports.default = NavigationDrawer;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NavigationDrawer = __webpack_require__(176);

var _NavigationDrawer2 = _interopRequireDefault(_NavigationDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _NavigationDrawer2.default;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _NumberUtils = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var Paper = (_temp = _class = function (_PureComponent) {
  _inherits(Paper, _PureComponent);

  function Paper() {
    _classCallCheck(this, Paper);

    return _possibleConstructorReturn(this, (Paper.__proto__ || Object.getPrototypeOf(Paper)).apply(this, arguments));
  }

  _createClass(Paper, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var zDepth = _props.zDepth;

      var props = _objectWithoutProperties(_props, ['children', 'zDepth']);

      var className = (0, _classnames2.default)('paper-' + zDepth, props.className);
      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: className }),
        children
      );
    }
  }]);

  return Paper;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  zDepth: 1
}, _temp);
exports.default = Paper;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _NumberUtils = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var CircularProgress = (_temp = _class = function (_PureComponent) {
  _inherits(CircularProgress, _PureComponent);

  function CircularProgress() {
    _classCallCheck(this, CircularProgress);

    return _possibleConstructorReturn(this, (CircularProgress.__proto__ || Object.getPrototypeOf(CircularProgress)).apply(this, arguments));
  }

  _createClass(CircularProgress, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var scale = _props.scale;
      var style = _props.style;
      var className = _props.className;
      var value = _props.value;
      var determinateDashoffset = _props.determinateDashoffset;
      var centered = _props.centered;

      var props = _objectWithoutProperties(_props, ['scale', 'style', 'className', 'value', 'determinateDashoffset', 'centered']);

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
        _extends({}, props, {
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
        _react2.default.createElement('circle', {
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
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  style: {},
  scale: 1,
  determinateDashoffset: 187,
  centered: true
}, _temp);
exports.default = CircularProgress;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _NumberUtils = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var LinearProgress = (_temp = _class = function (_PureComponent) {
  _inherits(LinearProgress, _PureComponent);

  function LinearProgress() {
    _classCallCheck(this, LinearProgress);

    return _possibleConstructorReturn(this, (LinearProgress.__proto__ || Object.getPrototypeOf(LinearProgress)).apply(this, arguments));
  }

  _createClass(LinearProgress, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var value = _props.value;
      var query = _props.query;

      var props = _objectWithoutProperties(_props, ['className', 'value', 'query']);

      var isDeterminate = typeof value === 'number';

      var style = void 0;
      if (isDeterminate) {
        style = { width: value + '%' };
      }

      return _react2.default.createElement(
        'div',
        _extends({ className: (0, _classnames2.default)('md-linear-progress-container', className) }, props),
        _react2.default.createElement('div', {
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
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  query: false
}, _temp);
exports.default = LinearProgress;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CircularProgress = exports.LinearProgress = undefined;

var _LinearProgress = __webpack_require__(180);

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _CircularProgress = __webpack_require__(179);

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LinearProgress = _LinearProgress2.default;
exports.CircularProgress = _CircularProgress2.default;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(20);

var _NumberUtils = __webpack_require__(38);

var _keyCodes = __webpack_require__(25);

var _ListItem = __webpack_require__(51);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _FontIcons = __webpack_require__(7);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Menus = __webpack_require__(172);

var _Menus2 = _interopRequireDefault(_Menus);

var _SelectFieldControl = __webpack_require__(183);

var _SelectFieldControl2 = _interopRequireDefault(_SelectFieldControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LIST_PADDING = 8;

/**
 * A SelectField is a material design inspired `<select>` component.
 */
var SelectField = (_temp = _class = function (_PureComponent) {
  _inherits(SelectField, _PureComponent);

  function SelectField(props) {
    _classCallCheck(this, SelectField);

    var _this = _possibleConstructorReturn(this, (SelectField.__proto__ || Object.getPrototypeOf(SelectField)).call(this, props));

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

  _createClass(SelectField, [{
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

      var props = _objectWithoutProperties(_props4, ['label', 'floatingLabel', 'menuItems', 'itemLabel', 'position', 'style', 'className', 'listClassName', 'menuClassName', 'iconClassName', 'iconChildren', 'disabled', 'fullWidth', 'adjustMinWidth']);

      delete props.value;
      delete props.defaultValue;
      delete props.noAutoAdjust;
      delete props.initiallyOpen;
      delete props.lineDirection;

      var displayLabel = this._getValue(this.props, this.state);
      var below = true;

      var toggle = _react2.default.createElement(_SelectFieldControl2.default, {
        inputStyle: style,
        inputClassName: (0, _classnames2.default)(className, droppingClassName),
        label: label,
        value: displayLabel,
        floatingLabel: floatingLabel,
        rightIcon: _react2.default.createElement(
          _FontIcons2.default,
          { iconClassName: iconClassName },
          iconChildren
        ),
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
          return _react2.default.createElement(_ListItem2.default, {
            tabIndex: -1,
            primaryText: (0, _utils.isObject)(item) ? item[itemLabel] : item,
            key: item.key || i,
            tileClassName: (0, _classnames2.default)({
              'active': i === activeIndex,
              'select-field-btn-tile': below
            })
          });
        });
      }

      var menuProps = _extends({
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
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  initiallyOpen: false,
  floatingLabel: false,
  itemLabel: 'label',
  defaultValue: '',
  menuItems: [],
  iconClassName: 'material-icons',
  iconChildren: 'arrow_drop_down',
  noAutoAdjust: false,
  adjustMinWidth: false
}, _temp);
exports.default = SelectField;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _TextFields = __webpack_require__(52);

var _TextFields2 = _interopRequireDefault(_TextFields);

var _Inks = __webpack_require__(19);

var _Inks2 = _interopRequireDefault(_Inks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectFieldControl = (_temp = _class = function (_PureComponent) {
  _inherits(SelectFieldControl, _PureComponent);

  function SelectFieldControl() {
    _classCallCheck(this, SelectFieldControl);

    return _possibleConstructorReturn(this, (SelectFieldControl.__proto__ || Object.getPrototypeOf(SelectFieldControl)).apply(this, arguments));
  }

  _createClass(SelectFieldControl, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var inputClassName = _props.inputClassName;
      var below = _props.below;
      var open = _props.open;
      var ink = _props.ink;

      var props = _objectWithoutProperties(_props, ['inputClassName', 'below', 'open', 'ink']);

      delete props.inkDisabled;

      var control = _react2.default.createElement(_TextFields2.default, _extends({}, props, {
        className: (0, _classnames2.default)('md-select-field-container', {
          'select-field-btn': below,
          'active': below && open,
          'disabled': props.disabled
        }),
        inputClassName: (0, _classnames2.default)('md-select-field', inputClassName),
        readOnly: true
      }));

      return ink ? _react2.default.createElement(
        'div',
        null,
        control,
        ink
      ) : control;
    }
  }]);

  return SelectFieldControl;
}(_react.PureComponent), _class.propTypes = {
  inputStyle: _react.PropTypes.object,
  inputClassName: _react.PropTypes.string,
  below: _react.PropTypes.bool,
  open: _react.PropTypes.bool.isRequired,
  ink: _react.PropTypes.node,
  disabled: _react.PropTypes.bool
}, _temp);
exports.default = (0, _Inks2.default)(SelectFieldControl);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FontIcons = __webpack_require__(7);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _ControlContainer = __webpack_require__(76);

var _ControlContainer2 = _interopRequireDefault(_ControlContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Checkboxes can be toggle by clicking the label of the checkbox or the
 * checkbox itself. If the icon itself is clicked, ink will appear. There
 * will be no ink when the label is clicked.
 */
var Checkbox = (_temp = _class = function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_ControlContainer2.default, _extends({}, this.props, { type: 'checkbox' }));
    }
  }]);

  return Checkbox;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  defaultChecked: false,
  labelBefore: false,
  checkedIcon: _react2.default.createElement(
    _FontIcons2.default,
    null,
    'check_box'
  ),
  uncheckedIcon: _react2.default.createElement(
    _FontIcons2.default,
    null,
    'check_box_outline_blank'
  )
}, _temp);
exports.default = Checkbox;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Inks = __webpack_require__(19);

var _Inks2 = _interopRequireDefault(_Inks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InkedControl = (_temp = _class = function (_PureComponent) {
  _inherits(InkedControl, _PureComponent);

  function InkedControl() {
    _classCallCheck(this, InkedControl);

    return _possibleConstructorReturn(this, (InkedControl.__proto__ || Object.getPrototypeOf(InkedControl)).apply(this, arguments));
  }

  _createClass(InkedControl, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var checked = _props.checked;
      var disabled = _props.disabled;
      var type = _props.type;
      var ink = _props.ink;

      var props = _objectWithoutProperties(_props, ['children', 'checked', 'disabled', 'type', 'ink']);

      return _react2.default.createElement(
        'div',
        _extends({ className: (0, _classnames2.default)('md-' + type, { 'active': checked, disabled: disabled }) }, props),
        ink,
        children
      );
    }
  }]);

  return InkedControl;
}(_react.PureComponent), _class.propTypes = {
  children: _react.PropTypes.node.isRequired,
  type: _react.PropTypes.string.isRequired,
  disabled: _react.PropTypes.bool,
  checked: _react.PropTypes.bool,

  // Injected from injectInk
  ink: _react.PropTypes.node
}, _temp);
exports.default = (0, _Inks2.default)(InkedControl);

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `RadioGroup` component is a state manager for the `Radio` component.
 * It will automatically inject the name, an onChange function, and
 * determine whether a radio is checked.
 *
 * This is just a simple wrapper to reduce some prop redundancy.
 */
var RadioGroup = (_temp = _class = function (_PureComponent) {
  _inherits(RadioGroup, _PureComponent);

  function RadioGroup(props) {
    _classCallCheck(this, RadioGroup);

    var _this = _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

    _this.state = {
      value: props.defaultValue || _react2.default.Children.toArray(props.children)[0].props.value
    };

    _this._handleChange = _this._handleChange.bind(_this);
    return _this;
  }

  _createClass(RadioGroup, [{
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

      var props = _objectWithoutProperties(_props, ['component', 'className', 'children', 'name', 'inline', 'disabled']);

      var fullProps = _extends({}, props, {
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
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  component: 'div',
  inline: false
}, _temp);
exports.default = RadioGroup;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `Subheader` component is generally used inside of lists or menus.
 */
var Subheader = (_temp = _class = function (_PureComponent) {
  _inherits(Subheader, _PureComponent);

  function Subheader() {
    _classCallCheck(this, Subheader);

    return _possibleConstructorReturn(this, (Subheader.__proto__ || Object.getPrototypeOf(Subheader)).apply(this, arguments));
  }

  _createClass(Subheader, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var component = _props.component;
      var inset = _props.inset;
      var primary = _props.primary;
      var primaryText = _props.primaryText;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['component', 'inset', 'primary', 'primaryText', 'className']);

      delete props.expanderIconChildren;
      delete props.expanderIconClassName;

      return _react2.default.createElement(component, _extends({}, props, {
        className: (0, _classnames2.default)('md-subheader', className, {
          inset: inset,
          'md-primary': primary
        })
      }), primaryText);
    }
  }]);

  return Subheader;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  component: 'li'
}, _temp);
exports.default = Subheader;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactAddonsCssTransitionGroup = __webpack_require__(16);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwipeableView = (_temp = _class = function (_PureComponent) {
  _inherits(SwipeableView, _PureComponent);

  function SwipeableView(props) {
    _classCallCheck(this, SwipeableView);

    var _this = _possibleConstructorReturn(this, (SwipeableView.__proto__ || Object.getPrototypeOf(SwipeableView)).call(this, props));

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

  _createClass(SwipeableView, [{
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

      var props = _objectWithoutProperties(_props, ['className', 'children']);

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

      return _react2.default.createElement(props.transitionName ? _reactAddonsCssTransitionGroup2.default : 'section', _extends({}, props, {
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
}(_react.PureComponent), _class.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  onSwipeMove: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onSwipeStart: _react.PropTypes.func,
  threshold: _react.PropTypes.number.isRequired,
  initialIndex: _react.PropTypes.number.isRequired,
  activeIndex: _react.PropTypes.number,
  transitionName: _react.PropTypes.string
}, _class.defaultProps = {
  initialIndex: 0,
  threshold: 0.15
}, _temp);
exports.default = SwipeableView;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwipeableView = __webpack_require__(188);

var _SwipeableView2 = _interopRequireDefault(_SwipeableView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwipeableView2.default;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _Inks = __webpack_require__(19);

var _Inks2 = _interopRequireDefault(_Inks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `Tab` component should be rendered inside the `Tabs` component.
 * It is used for generating a tab and holding some sort of content
 * to be displayed when active.
 */
var Tab = (_temp = _class = function (_PureComponent) {
  _inherits(Tab, _PureComponent);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  _createClass(Tab, [{
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

      var props = _objectWithoutProperties(_props, ['className', 'icon', 'label', 'label2', 'checked', 'ink', 'onChange', 'id']);

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)('md-tab', className, { 'active': checked })
        }, props),
        ink,
        _react2.default.createElement(
          'label',
          {
            className: (0, _classnames2.default)('md-tab-label', {
              'multiline': !!label && !!label2,
              'with-icon': !!label && !!icon
            }),
            htmlFor: id
          },
          icon,
          label && _react2.default.createElement(
            'div',
            null,
            label
          ),
          label2 && _react2.default.createElement(
            'div',
            null,
            label2
          ),
          _react2.default.createElement('input', {
            id: id,
            type: 'radio',
            className: 'md-tab-control',
            checked: checked,
            onChange: onChange
          })
        )
      );
    }
  }]);

  return Tab;
}(_react.PureComponent), _class.propTypes = {
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
}, _temp);
exports.default = (0, _Inks2.default)(Tab);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TabHeader = function TabHeader(_ref) {
  var indicatorStyle = _ref.indicatorStyle;
  var children = _ref.children;
  var className = _ref.className;
  var scrolling = _ref.scrolling;
  var fixedWidth = _ref.fixedWidth;
  var centered = _ref.centered;

  var props = _objectWithoutProperties(_ref, ['indicatorStyle', 'children', 'className', 'scrolling', 'fixedWidth', 'centered']);

  return _react2.default.createElement(
    'header',
    { className: className },
    _react2.default.createElement(
      'ul',
      _extends({
        className: (0, _classnames2.default)('md-tabs', {
          'fixed-width': fixedWidth,
          'tabs-centered': centered,
          scrolling: scrolling
        })
      }, props),
      children,
      _react2.default.createElement('span', { className: 'md-tab-indicator', style: indicatorStyle })
    )
  );
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
/* 192 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _TabHeader = __webpack_require__(191);

var _TabHeader2 = _interopRequireDefault(_TabHeader);

var _SwipeableViews = __webpack_require__(189);

var _SwipeableViews2 = _interopRequireDefault(_SwipeableViews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `Tabs` component is a container for the `Tab` component. It will
 * manage selecting the current active tab and allow the tab content
 * to be swiped to change.
 *
 * > Tabs should not be used for indicating navigation.
 */
var Tabs = (_temp = _class = function (_PureComponent) {
  _inherits(Tabs, _PureComponent);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

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

  _createClass(Tabs, [{
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
      var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

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

      var remainingProps = _objectWithoutProperties(_props3, ['className', 'children', 'style', 'fixedWidth', 'centered', 'primary']);

      delete remainingProps.scrollable;
      delete remainingProps.initialActiveTabIndex;

      var _state = this.state;
      var headerStyle = _state.headerStyle;
      var indicatorStyle = _state.indicatorStyle;
      var tabScrolling = _state.tabScrolling;

      var activeTabIndex = this._getActiveIndex(remainingProps, this.state);

      var tabsContent = [];
      var tabs = _react2.default.Children.map(children, function (tab, i) {
        tabsContent.push(_react2.default.createElement(
          'div',
          { className: 'md-tab-content', key: 'content-' + i },
          tab.props.children
        ));

        return _react2.default.cloneElement(tab, {
          key: tab.key || 'tab-' + i,
          checked: i === activeTabIndex,
          onChange: _this2._handleTabChange.bind(_this2, i, tab.props.onChange) });
      });

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)('md-tabs-container', className)
        }, remainingProps),
        _react2.default.createElement(
          _TabHeader2.default,
          {
            className: (0, _classnames2.default)('md-tabs-scroll-container', { 'md-primary': primary }),
            fixedWidth: fixedWidth,
            centered: centered,
            scrolling: tabScrolling,
            onTouchStart: this._handleTabScrollStart,
            onTouchMove: this._handleTabScrollMove,
            onTouchEnd: this._handleTabScrollEnd,
            style: Object.assign({}, style, headerStyle),
            indicatorStyle: indicatorStyle
          },
          tabs
        ),
        _react2.default.createElement(
          _SwipeableViews2.default,
          {
            className: 'md-tab-content-container',
            activeIndex: activeTabIndex,
            onChange: this._handleSwipeChange
          },
          tabsContent
        )
      );
    }
  }]);

  return Tabs;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  primary: true,
  initialActiveTabIndex: 0,
  style: {},
  fixedWidth: false,
  centered: false
}, _temp);
exports.default = Tabs;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = exports.Tabs = undefined;

var _Tabs = __webpack_require__(192);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = __webpack_require__(190);

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tabs = _Tabs2.default;
exports.Tab = _Tab2.default;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This component is used for rendering the floating label for a text field.
 */
var FloatingLabel = (_temp = _class = function (_PureComponent) {
  _inherits(FloatingLabel, _PureComponent);

  function FloatingLabel() {
    _classCallCheck(this, FloatingLabel);

    return _possibleConstructorReturn(this, (FloatingLabel.__proto__ || Object.getPrototypeOf(FloatingLabel)).apply(this, arguments));
  }

  _createClass(FloatingLabel, [{
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

      return _react2.default.createElement(
        'span',
        { className: className },
        label
      );
    }
  }]);

  return FloatingLabel;
}(_react.PureComponent), _class.propTypes = {
  active: _react.PropTypes.bool.isRequired,
  error: _react.PropTypes.bool.isRequired,
  label: _react.PropTypes.string.isRequired,
  required: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
}, _temp);
exports.default = FloatingLabel;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `TextDivider` component renders the divider below the `TextField` component.
 */
var TextDivider = (_temp = _class = function (_PureComponent) {
  _inherits(TextDivider, _PureComponent);

  function TextDivider() {
    _classCallCheck(this, TextDivider);

    return _possibleConstructorReturn(this, (TextDivider.__proto__ || Object.getPrototypeOf(TextDivider)).apply(this, arguments));
  }

  _createClass(TextDivider, [{
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
      return _react2.default.createElement('div', { className: className });
    }
  }]);

  return TextDivider;
}(_react.PureComponent), _class.propTypes = {
  lineDirection: _react.PropTypes.oneOf(['left', 'center', 'right']).isRequired,
  active: _react.PropTypes.bool.isRequired,
  error: _react.PropTypes.bool.isRequired,
  icon: _react.PropTypes.bool.isRequired
}, _temp);
exports.default = TextDivider;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _FloatingLabel = __webpack_require__(194);

var _FloatingLabel2 = _interopRequireDefault(_FloatingLabel);

var _TextDivider = __webpack_require__(195);

var _TextDivider2 = _interopRequireDefault(_TextDivider);

var _TextFieldMessage = __webpack_require__(197);

var _TextFieldMessage2 = _interopRequireDefault(_TextFieldMessage);

var _FontIcons = __webpack_require__(7);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var valueType = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);

/**
 * There is also an additional css class you can add to the text field to increase the font
 * size to a "title". This is configurable and there is a mixin to generate more of these helpers.
 *
 * Text Fields display as `inline-block` by default so that their size does not span `100%`. If
 * you want a text field per-line, wrap them in a div, or set them to display block (will make their width
 * expand as well though).
 */
var TextField = (_temp = _class = function (_PureComponent) {
  _inherits(TextField, _PureComponent);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

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

  _createClass(TextField, [{
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
      var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
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

      var props = _objectWithoutProperties(_props4, ['style', 'className', 'inputStyle', 'inputClassName', 'label', 'placeholder', 'maxLength', 'helpText', 'errorText', 'floatingLabel', 'icon', 'rightIcon', 'passwordIconChildren', 'passwordIconClassName', 'lineDirection', 'rows', 'maxRows', 'disabled', 'required', 'helpOnFocus', 'block', 'fullWidth', 'type', 'id']);

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
        indIcon = _react2.default.createElement(
          'button',
          {
            type: 'button',
            onClick: this._togglePasswordField,
            className: (0, _classnames2.default)('md-password-btn', {
              'active': passwordVisible,
              'multi-line': useFloatingLabel,
              'single-line': !useFloatingLabel
            })
          },
          _react2.default.createElement(_FontIcons2.default, { iconClassName: passwordIconClassName, children: passwordIconChildren })
        );
      }

      var textFieldMessage = void 0;
      if (errorText || maxLength || helpText) {
        textFieldMessage = _react2.default.createElement(_TextFieldMessage2.default, {
          value: value,
          error: error,
          helpOnFocus: helpOnFocus,
          active: active,
          message: errorText || helpText,
          maxLength: maxLength,
          className: icon ? 'icon-offset' : null
        });
      }

      var textFieldProps = _extends({}, props, {
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

        textField = _react2.default.createElement('textarea', _extends({}, textFieldProps, {
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

        textField = _react2.default.createElement('input', _extends({}, textFieldProps, {
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
        textDivider = _react2.default.createElement(_TextDivider2.default, {
          icon: !!icon,
          active: active,
          error: error,
          lineDirection: lineDirection
        });
      }

      return _react2.default.createElement(
        'div',
        {
          style: style,
          className: (0, _classnames2.default)('md-text-field-container', className, {
            disabled: disabled,
            block: block,
            'multi-line': multiline,
            'full-width': fullWidth,
            'with-message': helpText || errorText
          })
        },
        _react2.default.createElement(
          'label',
          { className: 'md-text-field-label', htmlFor: id },
          fontIcon,
          floatingLabelEl,
          textField,
          indIcon,
          textDivider
        ),
        textFieldMessage
      );
    }
  }]);

  return TextField;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  type: 'text',
  defaultValue: '',
  floatingLabel: true,
  lineDirection: 'left',
  passwordIconChildren: 'remove_red_eye',
  adjustMinWidth: false
}, _temp);
exports.default = TextField;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(16);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `TextFieldMessage` component is used for rendering a help or error text message
 * under a `TextField`. It can also be used to display a counter of remaining characters.
 */
var TextFieldMessage = (_temp = _class = function (_PureComponent) {
  _inherits(TextFieldMessage, _PureComponent);

  function TextFieldMessage() {
    _classCallCheck(this, TextFieldMessage);

    return _possibleConstructorReturn(this, (TextFieldMessage.__proto__ || Object.getPrototypeOf(TextFieldMessage)).apply(this, arguments));
  }

  _createClass(TextFieldMessage, [{
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
        counter = _react2.default.createElement(
          'span',
          { className: 'md-text-field-counter' },
          value.length + ' / ' + maxLength
        );
      }

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          component: 'div',
          transitionName: 'opacity',
          transitionEnterTimeout: 150,
          transitionLeaveTimeout: 150,
          className: (0, _classnames2.default)('md-text-field-message', className, {
            error: error,
            'count-only': !message || !isMessageVisible
          })
        },
        isMessageVisible && _react2.default.createElement(
          'span',
          { key: 'message' },
          message
        ),
        counter
      );
    }
  }]);

  return TextFieldMessage;
}(_react.PureComponent), _class.propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
  message: _react.PropTypes.string,
  maxLength: _react.PropTypes.number,
  error: _react.PropTypes.bool.isRequired,
  active: _react.PropTypes.bool.isRequired,
  helpOnFocus: _react.PropTypes.bool,
  className: _react.PropTypes.string
}, _temp);
exports.default = TextFieldMessage;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A toolbar is a container that has an optional title and action areas.
 *
 * If you do not want to use the `NavigationDrawer` component, you can get
 * almost the same effect by combining the `Toolbar` and `Sidebar` components.
 */
var Toolbar = (_temp = _class = function (_PureComponent) {
  _inherits(Toolbar, _PureComponent);

  function Toolbar(props) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Toolbar, [{
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

      var props = _objectWithoutProperties(_props, ['actionLeft', 'title', 'actionsRight', 'children', 'fixed', 'primary', 'className', 'containerStyle', 'containerClassName']);

      var tabsOffset = this.state.tabsOffset;

      var childrenAsHeader = !!children && !actionLeft && !title && !actionsRight;

      var header = void 0;
      if (childrenAsHeader) {
        header = children;
      } else {
        header = [actionLeft && _react2.default.cloneElement(actionLeft, { key: 'action-left', className: 'action-left' }), title && _react2.default.createElement(
          'h3',
          { key: 'title', className: 'md-title' },
          title
        ), actionsRight && _react2.default.cloneElement(actionsRight, { key: 'actions-right' })];
      }

      var content = void 0;
      if (!childrenAsHeader && children) {
        content = _react2.default.cloneElement(children, {
          ref: 'content',
          style: Object.assign({}, children.props.style, { marginLeft: tabsOffset })
        });
      }
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('md-toolbar-container', containerClassName, { fixed: fixed }), style: containerStyle },
        _react2.default.createElement(
          'header',
          _extends({}, props, {
            className: (0, _classnames2.default)('md-toolbar', className, { 'md-primary': primary })
          }),
          header
        ),
        content
      );
    }
  }]);

  return Toolbar;
}(_react.PureComponent), _class.propTypes = {
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
}, _class.defaultProps = {
  primary: true
}, _temp);
exports.default = Toolbar;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _injectTooltip = __webpack_require__(200);

var _injectTooltip2 = _interopRequireDefault(_injectTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _injectTooltip2.default;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _keyCodes = __webpack_require__(25);

var _utils = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    _inherits(Tooltip, _PureComponent);

    function Tooltip(props) {
      _classCallCheck(this, Tooltip);

      var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

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

    _createClass(Tooltip, [{
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

          _this2.setState((_this2$setState = {}, _defineProperty(_this2$setState, key, true), _defineProperty(_this2$setState, 'style', _this2._calcPositioningStyle()), _defineProperty(_this2$setState, 'timeout', null), _this2$setState));
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

        this.setState((_setState = {}, _defineProperty(_setState, key, false), _defineProperty(_setState, 'timeout', null), _setState));
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

        var props = _objectWithoutProperties(_props, ['tooltipLabel', 'tooltipPosition']);

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

        return _react2.default.createElement(ComposedComponent, _extends({}, props, {
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
/* 201 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Height = __webpack_require__(53);

var _Height2 = _interopRequireDefault(_Height);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Height2.default;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bind = __webpack_require__(58);

var _bind2 = _interopRequireDefault(_bind);

var _style = __webpack_require__(320);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_style2.default);

var Hero = function Hero(props) {
  return _react2.default.createElement(
    'div',
    { className: cx('hero') },
    _react2.default.createElement(
      'div',
      { className: 'wrap' },
      _react2.default.createElement(
        'h1',
        { className: cx('heroTag') },
        'Bold',
        _react2.default.createElement(
          'span',
          { style: { color: 'rgb(229, 0, 80)' } },
          'r'
        )
      )
    )
  );
};

exports.default = Hero;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hero = __webpack_require__(202);

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Hero2.default;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNumber2 = __webpack_require__(329);

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Col = function (_PureComponent) {
  _inherits(Col, _PureComponent);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var ComponentClass = this.props.componentClass;

      var classes = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'grid__col--xs' + ((0, _isNumber3.default)(this.props.xs) ? '-' + this.props.xs : ''), this.props.xs >= 0), _defineProperty(_classNames, 'grid__col--sm' + ((0, _isNumber3.default)(this.props.sm) ? '-' + this.props.sm : ''), this.props.sm >= 0), _defineProperty(_classNames, 'grid__col--md' + ((0, _isNumber3.default)(this.props.md) ? '-' + this.props.md : ''), this.props.md >= 0), _defineProperty(_classNames, 'grid__col--lg' + ((0, _isNumber3.default)(this.props.lg) ? '-' + this.props.lg : ''), this.props.lg >= 0), _defineProperty(_classNames, 'grid__col--xs-offset-' + this.props.xsOffset, this.props.xsOffset >= 0), _defineProperty(_classNames, 'grid__col--sm-offset-' + this.props.smOffset, this.props.smOffset >= 0), _defineProperty(_classNames, 'grid__col--md-offset-' + this.props.mdOffset, this.props.mdOffset >= 0), _defineProperty(_classNames, 'grid__col--lg-offset-' + this.props.lgOffset, this.props.lgOffset >= 0), _defineProperty(_classNames, 'grid__col--reverse', this.props.reverse), _defineProperty(_classNames, 'grid__col--xs-first', this.props.xsFirst), _defineProperty(_classNames, 'grid__col--sm-first', this.props.smFirst), _defineProperty(_classNames, 'grid__col--md-first', this.props.mdFirst), _defineProperty(_classNames, 'grid__col--lg-first', this.props.lgFirst), _defineProperty(_classNames, 'grid__col--xs-last', this.props.xsLast), _defineProperty(_classNames, 'grid__col--sm-last', this.props.smLast), _defineProperty(_classNames, 'grid__col--md-last', this.props.mdLast), _defineProperty(_classNames, 'grid__col--lg-last', this.props.lgLast), _classNames), this.props.className);

      return _react2.default.createElement(
        ComponentClass,
        { className: classes, style: this.props.style },
        this.props.children
      );
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
/* 205 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_PureComponent) {
  _inherits(Grid, _PureComponent);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var ComponentClass = this.props.componentClass;

      var classes = (0, _classnames2.default)({ grid: !this.props.fluid,
        'grid--fluid': this.props.fluid
      }, this.props.className);

      return _react2.default.createElement(
        ComponentClass,
        { className: classes, style: this.props.style },
        this.props.children
      );
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
/* 206 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_PureComponent) {
  _inherits(Row, _PureComponent);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
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

      return _react2.default.createElement(
        ComponentClass,
        { className: classes, style: this.props.style },
        this.props.children
      );
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
/* 207 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stardust = __webpack_require__(8);

var _reactRouterRedux = __webpack_require__(17);

var _redial = __webpack_require__(11);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(34);

var _boldr = __webpack_require__(40);

var _auth = __webpack_require__(26);

var _navigation = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrimaryHeader = (_dec = (0, _redial.provideHooks)({
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _navigation.loadPrimary)());
  }
}), _dec(_class = function (_Component) {
  _inherits(PrimaryHeader, _Component);

  function PrimaryHeader(props) {
    _classCallCheck(this, PrimaryHeader);

    var _this = _possibleConstructorReturn(this, (PrimaryHeader.__proto__ || Object.getPrototypeOf(PrimaryHeader)).call(this, props));

    _this.handleItemClick = function (e, _ref2) {
      var name = _ref2.name;
      var href = _ref2.href;

      _this.setState({
        activeItem: name
      });
      _this.props.navigate('' + href);
    };

    _this.handleLoginClick = function (e) {
      _this.props.navigate('/account/login');
    };

    _this.handleSignupClick = function (e) {
      _this.props.navigate('/account/signup');
    };

    _this.handleProfileClick = function (e) {
      _this.props.navigate('/profile');
    };

    _this.handlePreferencesClick = function (e) {
      _this.props.navigate('/account/preferences');
    };

    _this.handleLogoClick = function (e) {
      _this.props.navigate('/');
    };

    _this.handleLogoutClick = function (e) {
      _this.props.actions.logout();
    };

    _this.handleDashClick = function (e) {
      _this.props.navigate('/dashboard');
    };

    _this.state = {};
    return _this;
  }

  _createClass(PrimaryHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actions.loadPrimary();
    }
  }, {
    key: 'renderUnauthenticated',

    /**
     * @method renderUnauthenticated
     * shows the menu with options for unauthenticated users
     */
    value: function renderUnauthenticated() {
      return _react2.default.createElement(
        _stardust.Menu.Menu,
        { position: 'right' },
        _react2.default.createElement(
          _stardust.Menu.Item,
          { onClick: this.handleLoginClick },
          _react2.default.createElement(
            _stardust.Button,
            { secondary: true },
            'Login'
          )
        ),
        _react2.default.createElement(
          _stardust.Menu.Item,
          { onClick: this.handleSignupClick },
          _react2.default.createElement(
            _stardust.Button,
            { primary: true },
            'Sign Up'
          )
        )
      );
    }

    /**
     * @method renderAuthenticated
     * shows the menu with options for authenticated users
     */

  }, {
    key: 'renderAuthenticated',
    value: function renderAuthenticated() {
      return _react2.default.createElement(
        _stardust.Menu.Menu,
        { position: 'right' },
        _react2.default.createElement(
          _stardust.Dropdown,
          { as: _stardust.Menu.Item, text: 'Account' },
          _react2.default.createElement(
            _stardust.Dropdown.Menu,
            null,
            _react2.default.createElement(
              _stardust.Dropdown.Item,
              { onClick: this.handleProfileClick },
              'Profile'
            ),
            _react2.default.createElement(
              _stardust.Dropdown.Item,
              { onClick: this.handlePreferencesClick },
              'Preferences'
            ),
            _react2.default.createElement(
              _stardust.Dropdown.Item,
              { onClick: this.handleLogoutClick },
              'Logout'
            )
          )
        ),
        _react2.default.createElement(
          _stardust.Menu.Item,
          { onClick: this.handleDashClick },
          _react2.default.createElement(
            _stardust.Button,
            { primary: true },
            'Dashboard'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // $FlowFixMe
      var activeItem = this.state.activeItem;

      if (!this.props.navigation.primary) {
        return _react2.default.createElement(
          'h1',
          null,
          'loading'
        );
      }

      var renderedMenuItems = this.props.navigation.primary.links.map(function (item, i) {
        return _react2.default.createElement(
          _stardust.Menu.Item,
          {
            key: item.id,
            name: item.name,
            href: item.href,
            active: activeItem === item.name,
            onClick: _this2.handleItemClick
          },
          item.name
        );
      });

      return _react2.default.createElement(
        _stardust.Menu,
        { size: 'big' },
        _react2.default.createElement(
          _stardust.Container,
          null,
          _react2.default.createElement(
            _stardust.Menu.Item,
            null,
            _react2.default.createElement('img', { src: this.props.boldr.siteLogo, alt: 'logo', onClick: this.handleLogoClick })
          ),
          renderedMenuItems,
          this.props.auth.isAuthenticated ? this.renderAuthenticated() : this.renderUnauthenticated()
        )
      );
    }
  }]);

  return PrimaryHeader;
}(_react.Component)) || _class);


var mapStateToProps = function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth,
    navigation: state.navigation,
    loading: state.navigation.loaded
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)({ goHome: _boldr.goHome, logout: _auth.logout, loadPrimary: _navigation.loadPrimary }, dispatch),
    navigate: function navigate(url) {
      return dispatch((0, _reactRouterRedux.push)(url));
    },
    dispatch: dispatch
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PrimaryHeader);

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doLogin = exports.doSignup = undefined;
exports.doForgotPassword = doForgotPassword;
exports.doResetPassword = doResetPassword;
exports.doAuthCheck = doAuthCheck;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _jwtDecode = __webpack_require__(15);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doSignup = exports.doSignup = function doSignup(data) {
  return _superagent2.default.post(_index.API_AUTH + '/signup').send(data);
};

var doLogin = exports.doLogin = function doLogin(loginData) {
  return _superagent2.default.post(_index.API_AUTH + '/login').send(loginData);
};

function doForgotPassword(email) {
  return (0, _isomorphicFetch2.default)(_index.API_AUTH + '/forgot-password', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email
    })
  });
}

function doResetPassword(password, token) {
  return (0, _isomorphicFetch2.default)(_index.API_AUTH + '/reset-password/' + token, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password: password
    })
  });
}

function doAuthCheck(token) {
  return _superagent2.default.get(_index.API_AUTH + '/check').set('Authorization', '' + token);
}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doUpdateSettings = doUpdateSettings;
exports.doLoadSettings = doLoadSettings;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _jwtDecode = __webpack_require__(15);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doUpdateSettings(data, id) {
  return _superagent2.default.put(_index.API_SETTINGS + '/' + id).set('Authorization', '' + localStorage.getItem(_index.TOKEN_KEY)).send(data);
}

function doLoadSettings() {
  return _superagent2.default.get('' + _index.API_SETTINGS);
}

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchMedia = doFetchMedia;
exports.doUpload = doUpload;
exports.doRemoveMedia = doRemoveMedia;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _jwtDecode = __webpack_require__(15);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doFetchMedia() {
  return _superagent2.default.get('' + _index.API_MEDIA);
}

function doUpload(payload) {
  return _superagent2.default.post(_index.API_MEDIA + '/dashboard', payload).set('Authorization', '' + localStorage.getItem(_index.TOKEN_KEY));
}

function doRemoveMedia(id) {
  return _superagent2.default.delete(_index.API_MEDIA + '/' + id).set('Authorization', '' + localStorage.getItem(_index.TOKEN_KEY));
}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchMembers = doFetchMembers;
exports.doUpdateMember = doUpdateMember;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _jwtDecode = __webpack_require__(15);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doFetchMembers() {
  return _superagent2.default.get('' + _index.API_USERS);
}

function doUpdateMember(userData) {
  var payload = {
    display_name: userData.display_name,
    first_name: userData.first_name,
    last_name: userData.last_name,
    roleId: userData.roleId
  };
  return _superagent2.default.put(_index.API_USERS + '/' + userData.id).set('Authorization', 'Bearer ' + localStorage.getItem(_index.TOKEN_KEY)).send(payload);
}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doUpdateNavigationLinks = doUpdateNavigationLinks;
exports.doAddNavigationLinks = doAddNavigationLinks;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _jwtDecode = __webpack_require__(15);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doUpdateNavigationLinks(data) {
  return _superagent2.default.put(_index.API_LINKS + '/' + data.id).set('Authorization', '' + localStorage.getItem(_index.TOKEN_KEY)).send(data);
}

function doAddNavigationLinks(data) {
  return _superagent2.default.post('' + _index.API_LINKS).set('Authorization', '' + localStorage.getItem(_index.TOKEN_KEY)).send(data);
}

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchPosts = doFetchPosts;
exports.doCreatePost = doCreatePost;
exports.doSelectPost = doSelectPost;
exports.doChangeStatus = doChangeStatus;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _jwtDecode = __webpack_require__(15);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doFetchPosts() {
  return _superagent2.default.get(_index.API_POSTS + '?include=[author,tags]');
}

function doCreatePost(data) {
  return _superagent2.default.post(_index.API_POSTS).set('Authorization', '' + localStorage.getItem(_index.TOKEN_KEY)).send({
    title: data.title,
    content: data.content,
    feature_image: data.feature_image,
    tags: data.tags,
    status: data.status,
    excerpt: data.excerpt
  });
}

function doSelectPost(postId) {
  return _superagent2.default.get(_index.API_POSTS + '/id/' + postId);
}

function doChangeStatus(postId, postStatus) {
  return _superagent2.default.put(_index.API_POSTS + '/pid/' + postId).set('Authorization', '' + localStorage.getItem(_index.TOKEN_KEY)).send({
    status: postStatus
  });
}

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _latinize = __webpack_require__(217);

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
        console.log('uploading-------', file);
        // file.size, file.name, file.type
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
/* 215 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetchPosts = doFetchPosts;
exports.doFetchTags = doFetchTags;

var _superagent = __webpack_require__(6);

var _superagent2 = _interopRequireDefault(_superagent);

var _jwtDecode = __webpack_require__(15);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _isomorphicFetch = __webpack_require__(10);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doFetchPosts() {
  return (0, _isomorphicFetch2.default)(_index.API_BASE + '/posts?include=[author,tags]').then(function (response) {
    return (0, _index.processResponse)(response);
  });
}

function doFetchTags(tagName) {
  return (0, _isomorphicFetch2.default)(_index.API_BASE + '/tags/posts/' + tagName).then(function (response) {
    return (0, _index.processResponse)(response);
  });
}

/***/ },
/* 216 */
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
/* 217 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
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
/* 218 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(23);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'About' }),
    _react2.default.createElement(_index.PrimaryHeader, null),
    _react2.default.createElement(
      _index.Grid,
      { fluid: true },
      _react2.default.createElement(
        _index.Row,
        null,
        _react2.default.createElement(
          _index.Heading,
          { size: 1 },
          'Welcome to the Home. Stay tuned...'
        )
      )
    )
  );
};

exports.default = About;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(23);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: 'Home' }),
    _react2.default.createElement(_index.PrimaryHeader, null),
    _react2.default.createElement(_index.Hero, null),
    _react2.default.createElement(
      _index.Grid,
      { fluid: true },
      _react2.default.createElement(
        _index.Row,
        null,
        _react2.default.createElement(
          _index.Heading,
          { size: 1 },
          'Why shouldn\'t your CMS be a little, Boldr?'
        )
      )
    )
  );
};

exports.default = Home;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(219);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Home2.default;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Account = function Account(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index.PrimaryHeader, null),
    props.children
  );
};
// $FlowFixMe

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr,
    auth: state.auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Account);

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _stardust = __webpack_require__(8);

var _index = __webpack_require__(3);

var _index2 = __webpack_require__(14);

var _inlineStyles = __webpack_require__(22);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _auth = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForgotPassword = (_temp = _class = function (_Component) {
  _inherits(ForgotPassword, _Component);

  function ForgotPassword(props) {
    _classCallCheck(this, ForgotPassword);

    var _this = _possibleConstructorReturn(this, (ForgotPassword.__proto__ || Object.getPrototypeOf(ForgotPassword)).call(this, props));

    _this.handleChange = function (e, _ref) {
      var value = _ref.value;
      return _this.setState({ value: value });
    };

    _this.handleSubmit = function (e, serializedForm) {
      e.preventDefault();
      _this.setState({ serializedForm: serializedForm });

      var email = serializedForm.email;
      _this.props.dispatch((0, _auth.forgotPassword)(email));
    };

    _this.state = { serializedForm: {} };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleForgot = _this.handleForgot.bind(_this);
    return _this;
  }

  _createClass(ForgotPassword, [{
    key: 'handleForgot',
    value: function handleForgot(event, dispatch) {
      event.preventDefault();
      this.props.dispatch((0, _auth.forgotPassword)(this.state.email));
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var serializedForm = _state.serializedForm;
      var value = _state.value;

      var renderHeader = _react2.default.createElement(
        _stardust.Card.Header,
        null,
        _react2.default.createElement(
          _index.Heading,
          { size: 1, bottom: '10px' },
          'Forgot your password?'
        )
      );
      return _react2.default.createElement(
        'div',
        { style: _inlineStyles2.default.headerOverflow },
        _react2.default.createElement(
          _index.Grid,
          null,
          _react2.default.createElement(
            _index.Row,
            null,
            _react2.default.createElement(
              _index.Col,
              { xs: 12 },
              _react2.default.createElement(
                _index.Row,
                { xsCenter: true },
                _react2.default.createElement(
                  _index.Col,
                  { xs: 6 },
                  _react2.default.createElement(
                    _stardust.Card,
                    { style: { width: '450px', marginTop: '150px' } },
                    _react2.default.createElement(
                      _stardust.Form,
                      { onSubmit: this.handleSubmit, className: 'card__form' },
                      _react2.default.createElement(
                        _stardust.Card.Content,
                        null,
                        renderHeader,
                        _react2.default.createElement(
                          _stardust.Card.Meta,
                          null,
                          'Enter your email address below to reset it.'
                        ),
                        _react2.default.createElement(_stardust.Form.Input, {
                          label: 'Email address',
                          name: 'email',
                          placeholder: 'Enter your email'
                        }),
                        _react2.default.createElement(
                          _stardust.Button,
                          { primary: true, type: 'submit' },
                          'Reset Password'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ForgotPassword;
}(_react.Component), _class.propTypes = {
  dispatch: _react.PropTypes.func.isRequired,
  account: _react.PropTypes.object
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ForgotPassword);

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ForgotPassword = __webpack_require__(222);

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ForgotPassword2.default;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(23);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = __webpack_require__(33);

var _stardust = __webpack_require__(8);

var _index = __webpack_require__(3);

var _index2 = __webpack_require__(14);

var _auth = __webpack_require__(26);

var _LoginForm = __webpack_require__(225);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderHeader = _react2.default.createElement(
  _stardust.Card.Header,
  null,
  _react2.default.createElement(
    _index.Heading,
    { size: 1 },
    'Login'
  )
);

var cardMeta = _react2.default.createElement(
  'span',
  null,
  _react2.default.createElement(
    _reactRouter.Link,
    { to: '/account/forgot-password' },
    'Forgot your password? '
  ),
  _react2.default.createElement(
    _reactRouter.Link,
    { to: '/account/signup' },
    'Create an account'
  )
);

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactHelmet2.default, { title: 'Login' }),
        _react2.default.createElement(
          _index.Grid,
          null,
          _react2.default.createElement(
            _index.Row,
            null,
            _react2.default.createElement(
              _index.Col,
              { xs: 12 },
              _react2.default.createElement(
                _index.Row,
                { xsCenter: true },
                _react2.default.createElement(
                  _index.Col,
                  { xs: 6 },
                  _react2.default.createElement(
                    _stardust.Card,
                    { style: { width: '450px', marginTop: '150px' } },
                    _react2.default.createElement(
                      _stardust.Card.Content,
                      null,
                      renderHeader,
                      _react2.default.createElement(_LoginForm2.default, { onSubmit: this.handleOnSubmit }),
                      cardMeta
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    redirect: ownProps.location.query.redirect
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { login: _auth.login })(Login);

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(18);

var _stardust = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderField = function renderField(_ref) {
  var input = _ref.input;
  var label = _ref.label;
  var type = _ref.type;
  var _ref$meta = _ref.meta;
  var touched = _ref$meta.touched;
  var error = _ref$meta.error;
  return (// eslint-disable-line
    _react2.default.createElement(_stardust.Form.Input, _extends({
      label: label,
      className: 'form__auth',
      type: type
    }, input))
  );
};

var LoginForm = function LoginForm(props) {
  var handleSubmit = props.handleSubmit;
  var pristine = props.pristine;
  var reset = props.reset;
  var submitting = props.submitting;

  return _react2.default.createElement(
    _stardust.Form,
    { onSubmit: handleSubmit, className: 'card__form' },
    _react2.default.createElement(_reduxForm.Field, {
      name: 'email',
      type: 'email',
      label: 'Email',
      component: renderField
    }),
    _react2.default.createElement(_reduxForm.Field, {
      name: 'password',
      label: 'Password',
      type: 'password',
      component: renderField,
      style: { marginBottom: '50px' }
    }),
    _react2.default.createElement(
      _stardust.Button,
      { primary: true, type: 'submit' },
      'Login'
    ),
    _react2.default.createElement(
      _stardust.Button,
      { disabled: pristine || submitting, onClick: reset },
      'Clear'
    )
  );
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
/* 226 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Login = __webpack_require__(224);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Login2.default;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(23);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(2);

var _stardust = __webpack_require__(8);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preferences = function (_Component) {
  _inherits(Preferences, _Component);

  function Preferences() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Preferences);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Preferences.__proto__ || Object.getPrototypeOf(Preferences)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemClick = function (name) {
      return _this.setState({ activeItem: name });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Preferences, [{
    key: 'render',
    value: function render() {
      var _ref2 = this.state || {};

      var activeItem = _ref2.activeItem;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactHelmet2.default, {
          title: 'Preferences',
          titleTemplate: '%s | powered by Boldr'
        }),
        _react2.default.createElement(
          _index.Row,
          null,
          _react2.default.createElement(
            _index.Col,
            { xs: 12, md: 2 },
            _react2.default.createElement(
              _stardust.Menu,
              { vertical: true },
              _react2.default.createElement(
                _stardust.Menu.Item,
                null,
                _react2.default.createElement(
                  _stardust.Menu.Header,
                  null,
                  'Profile'
                ),
                _react2.default.createElement(
                  _stardust.Menu.Menu,
                  null,
                  _react2.default.createElement(_stardust.Menu.Item, { name: 'Edit Profile', active: activeItem === 'Edit Profile', onClick: this.handleItemClick }),
                  _react2.default.createElement(_stardust.Menu.Item, { name: 'View Profile', active: activeItem === 'View Profile', onClick: this.handleItemClick })
                )
              ),
              _react2.default.createElement(
                _stardust.Menu.Item,
                null,
                _react2.default.createElement(
                  _stardust.Menu.Header,
                  null,
                  'Settings'
                ),
                _react2.default.createElement(
                  _stardust.Menu.Menu,
                  null,
                  _react2.default.createElement(_stardust.Menu.Item, { name: 'Change...', active: activeItem === 'Change...', onClick: this.handleItemClick })
                )
              )
            )
          ),
          _react2.default.createElement(
            _index.Col,
            { xs: 12, md: 10 },
            'Swag'
          )
        )
      );
    }
  }]);

  return Preferences;
}(_react.Component);

function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Preferences);

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Preferences = __webpack_require__(227);

var _Preferences2 = _interopRequireDefault(_Preferences);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Preferences2.default;

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(3);

var _index2 = __webpack_require__(14);

var _index3 = __webpack_require__(52);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(5);

var _inlineStyles = __webpack_require__(22);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _auth = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResetPassword = function (_Component) {
  _inherits(ResetPassword, _Component);

  function ResetPassword(props) {
    _classCallCheck(this, ResetPassword);

    var _this = _possibleConstructorReturn(this, (ResetPassword.__proto__ || Object.getPrototypeOf(ResetPassword)).call(this, props));

    _this.state = { password: '', confirm: '' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleConfirmChange = _this.handleConfirmChange.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    return _this;
  }

  _createClass(ResetPassword, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ password: event });
    }
  }, {
    key: 'handleConfirmChange',
    value: function handleConfirmChange(event) {
      this.setState({ confirm: event });
    }
  }, {
    key: 'handleReset',
    value: function handleReset(event) {
      event.preventDefault();
      this.props.dispatch((0, _auth.resetPassword)(this.state.password, this.props.params.token));
    }
  }, {
    key: 'render',
    value: function render() {
      var renderHeader = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _index.Heading,
          { size: 1, bottom: '10px' },
          'Forgot your password?'
        ),
        'Enter your email address below to reset it.'
      );
      return _react2.default.createElement(
        'div',
        { style: _inlineStyles2.default.headerOverflow },
        _react2.default.createElement(
          _index.Grid,
          { fluid: true },
          _react2.default.createElement(
            _index.Row,
            null,
            _react2.default.createElement(
              _index.Col,
              { xs: 12 },
              _react2.default.createElement(
                _index.Row,
                { xsCenter: true },
                _react2.default.createElement(
                  _index.Col,
                  { xs: 6 },
                  _react2.default.createElement(
                    _index2.Card,
                    { style: { marginTop: '150px' } },
                    _react2.default.createElement(
                      'form',
                      { onSubmit: this.handleReset },
                      renderHeader,
                      _react2.default.createElement(
                        _index2.CardText,
                        null,
                        _react2.default.createElement(
                          _index.Row,
                          null,
                          _react2.default.createElement(_index4.default, {
                            type: 'password',
                            name: 'password',
                            id: 'password',
                            floatingLabelText: 'New password', style: _inlineStyles2.default.underlineFocusStyle,
                            autoFocus: true, value: this.state.password, onChange: this.handleChange
                          })
                        ),
                        _react2.default.createElement(
                          _index.Row,
                          null,
                          _react2.default.createElement(_index4.default, {
                            type: 'password',
                            name: 'password',
                            id: 'password',
                            floatingLabelText: 'Confirm password', style: _inlineStyles2.default.underlineFocusStyle,
                            value: this.state.confirm, onChange: this.handleConfirmChange
                          })
                        )
                      ),
                      _react2.default.createElement(
                        _index2.CardActions,
                        null,
                        _react2.default.createElement(_index5.RaisedButton, { secondary: true, type: 'submit', label: 'Change Password' })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ResetPassword;
}(_react.Component);

ResetPassword.propTypes = {
  dispatch: _react.PropTypes.func.isRequired,
  params: _react.PropTypes.object
};
var mapStateToProps = function mapStateToProps(state) {
  return state;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ResetPassword);

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(23);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = __webpack_require__(33);

var _stardust = __webpack_require__(8);

var _index = __webpack_require__(3);

var _inlineStyles = __webpack_require__(22);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _auth = __webpack_require__(26);

var _SignupForm = __webpack_require__(231);

var _SignupForm2 = _interopRequireDefault(_SignupForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// $FlowFixMe


var Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    // $FlowFixMe
    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

    _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
    return _this;
  }

  _createClass(Signup, [{
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


      var renderHeader = _react2.default.createElement(
        _stardust.Card.Header,
        null,
        _react2.default.createElement(
          _index.Heading,
          { size: 1, bottom: '10px' },
          'Signup'
        )
      );

      return _react2.default.createElement(
        'div',
        { style: _inlineStyles2.default.headerOverflow },
        _react2.default.createElement(_reactHelmet2.default, { title: 'Signup' }),
        _react2.default.createElement(
          _index.Grid,
          null,
          _react2.default.createElement(
            _index.Row,
            null,
            _react2.default.createElement(
              _index.Col,
              { xs: 12 },
              _react2.default.createElement(
                _index.Row,
                { xsCenter: true },
                _react2.default.createElement(
                  _index.Col,
                  { xs: 6 },
                  _react2.default.createElement(
                    _stardust.Card,
                    { style: { width: '450px', marginTop: '150px' } },
                    renderHeader,
                    _react2.default.createElement(
                      _stardust.Card.Content,
                      null,
                      _react2.default.createElement(_SignupForm2.default, { onSubmit: this.handleOnSubmit }),
                      'Already have an account?',
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/account/login' },
                        ' Login'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Signup;
}(_react.Component);

function mapStateToProps(_ref) {
  var auth = _ref.auth;

  return {
    auth: auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { signup: _auth.signup })(Signup);

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(18);

var _stardust = __webpack_require__(8);

var _validate = __webpack_require__(233);

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
    _react2.default.createElement(_stardust.Form.Input, _extends({
      label: label,
      className: 'form__auth',
      type: type
    }, input))
  );
};

var SignupForm = function SignupForm(props) {
  var handleSubmit = props.handleSubmit;
  var pristine = props.pristine;
  var reset = props.reset;
  var submitting = props.submitting;

  return _react2.default.createElement(
    _stardust.Form,
    { onSubmit: handleSubmit, className: 'card__form' },
    _react2.default.createElement(
      _stardust.Form.Group,
      { widths: 'equal' },
      _react2.default.createElement(_reduxForm.Field, { name: 'display_name',
        type: 'text',
        component: renderField,
        label: 'Display name'
      }),
      _react2.default.createElement(_reduxForm.Field, { name: 'password',
        type: 'password',
        component: renderField,
        label: 'Password'
      })
    ),
    _react2.default.createElement(
      _stardust.Form.Group,
      { widths: 'equal' },
      _react2.default.createElement(_reduxForm.Field, { name: 'first_name',
        type: 'text',
        component: renderField,
        label: 'First name'
      }),
      _react2.default.createElement(_reduxForm.Field, { name: 'last_name',
        type: 'text',
        component: renderField,
        label: 'Last name'
      })
    ),
    _react2.default.createElement(_reduxForm.Field, { name: 'email',
      type: 'email',
      component: renderField,
      label: 'Email address'
    }),
    _react2.default.createElement(
      _stardust.Button,
      { primary: true, type: 'submit' },
      'Create Account'
    )
  );
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
/* 232 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Signup = __webpack_require__(230);

var _Signup2 = _interopRequireDefault(_Signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Signup2.default;

/***/ },
/* 233 */
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
/* 234 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
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
    component: __webpack_require__(221).default,
    childRoutes: [{
      path: 'forgot-password',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 223)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'login',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 226)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'preferences',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 228)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'reset-password/:token',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
          var ResetPage = __webpack_require__(83).default;
          cb(null, ResetPage);
        }).bind(null, __webpack_require__));
      }
    }, {
      path: 'signup',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 232)).then(loadModule(cb)).catch(errorLoading);
      }
    }]
  };
};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(39);

var _index2 = _interopRequireDefault(_index);

var _post = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// $FlowFixMe
var BlogContainer = function BlogContainer(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, null),
    props.children
  );
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts,
    loading: state.posts.isLoading
  };
};

// $FlowFixMe
exports.default = (0, _reactRedux.connect)(mapStateToProps)(BlogContainer);

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redial = __webpack_require__(11);

var _index = __webpack_require__(3);

var _post = __webpack_require__(27);

var _PostListingGroup = __webpack_require__(237);

var _PostListingGroup2 = _interopRequireDefault(_PostListingGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostListing = (_dec = (0, _redial.provideHooks)({
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _post.fetchPosts)());
  }
}), _dec(_class = function (_Component) {
  _inherits(PostListing, _Component);

  function PostListing() {
    _classCallCheck(this, PostListing);

    return _possibleConstructorReturn(this, (PostListing.__proto__ || Object.getPrototypeOf(PostListing)).apply(this, arguments));
  }

  _createClass(PostListing, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchPosts();
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.isLoading ? _react2.default.createElement(_index.Loader, null) : _react2.default.createElement(_PostListingGroup2.default, { posts: this.props.posts.results });
    }
  }]);

  return PostListing;
}(_react.Component)) || _class);


var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts,
    isLoading: state.posts.isLoading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _post.fetchPosts })(PostListing);


PostListing.propTypes = {
  posts: _react.PropTypes.object.isRequired,
  isLoading: _react.PropTypes.bool,
  fetchPosts: _react.PropTypes.func
};

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(3);

var _mol = __webpack_require__(85);

var _mol2 = _interopRequireDefault(_mol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostListingGroup = function PostListingGroup(props) {
  if (!props.posts) {
    return _react2.default.createElement(
      'div',
      null,
      'Loading'
    );
  }
  return _react2.default.createElement(
    _index.Grid,
    { fluid: true },
    _react2.default.createElement(
      _index.Row,
      null,
      props.posts.map(function (post, i) {
        return _react2.default.createElement(
          _index.Col,
          { key: i, xs: 12, md: 4 },
          _react2.default.createElement(_mol2.default, post)
        );
      })
    )
  );
};

PostListingGroup.propTypes = {
  posts: _react.PropTypes.array
};

exports.default = PostListingGroup;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostListing = __webpack_require__(236);

var _PostListing2 = _interopRequireDefault(_PostListing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PostListing2.default;

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redial = __webpack_require__(11);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _atm = __webpack_require__(46);

var _atm2 = _interopRequireDefault(_atm);

var _mol = __webpack_require__(85);

var _mol2 = _interopRequireDefault(_mol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.posts.data.map(function (post) {
          return _react2.default.createElement(
            'div',
            { key: post.id, className: 'post__grid-item' },
            _react2.default.createElement(_mol2.default, post)
          );
        })
      );
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Search);


Search.propTypes = {
  posts: _react2.default.PropTypes.object.isRequired
};

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Search = __webpack_require__(239);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Search2.default;

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _Link = __webpack_require__(61);

var _Link2 = _interopRequireDefault(_Link);

var _redial = __webpack_require__(11);

var _components = __webpack_require__(3);

var _Papers = __webpack_require__(32);

var _Papers2 = _interopRequireDefault(_Papers);

var _atm = __webpack_require__(46);

var _atm2 = _interopRequireDefault(_atm);

var _org = __webpack_require__(258);

var _org2 = _interopRequireDefault(_org);

var _mol = __webpack_require__(255);

var _mol2 = _interopRequireDefault(_mol);

var _actions = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redial = {
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch;
    var slug = _ref.params.slug;
    return dispatch((0, _actions.loadPost)(slug));
  }
};

var SinglePost = function SinglePost(_ref2) {
  var isLoading = _ref2.isLoading;
  var currentPost = _ref2.currentPost;

  return _react2.default.createElement(
    'div',
    { className: 'postbg' },
    _react2.default.createElement(
      _components.Grid,
      { fluid: true },
      _react2.default.createElement(
        _components.Row,
        null,
        _react2.default.createElement(
          _components.Col,
          { xs: 12, md: 8, lg: 9 },
          _react2.default.createElement(
            _Papers2.default,
            { zDepth: 2 },
            isLoading ? _react2.default.createElement(_atm2.default, null) : _react2.default.createElement(_mol2.default, currentPost)
          )
        ),
        _react2.default.createElement(
          _components.Col,
          { xs: 12, md: 4, lg: 3 },
          _react2.default.createElement(_org2.default, currentPost)
        )
      )
    )
  );
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
/* 242 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SinglePost = __webpack_require__(241);

var _SinglePost2 = _interopRequireDefault(_SinglePost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SinglePost2.default;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(12);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case types.LOAD_POST_REQUEST:
    case types.UPDATE_POST_REQUEST:
      return _extends({}, state, {
        isLoading: true
      });
    case types.LOAD_POST_SUCCESS:
      return _extends({}, state, {
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
      return _extends({}, state, {
        isLoading: false,
        error: action.error
      });
    case types.CLEAR_CURRENT_POST:
      return _extends({}, state, {
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
/* 244 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redial = __webpack_require__(11);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(3);

var _tag = __webpack_require__(89);

var _TagListCard = __webpack_require__(245);

var _TagListCard2 = _interopRequireDefault(_TagListCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagList = (_dec = (0, _redial.provideHooks)({
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch;
    var name = _ref.params.name;
    return dispatch((0, _tag.requestPostTags)(name));
  }
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(TagList, _Component);

  function TagList() {
    _classCallCheck(this, TagList);

    return _possibleConstructorReturn(this, (TagList.__proto__ || Object.getPrototypeOf(TagList)).apply(this, arguments));
  }

  _createClass(TagList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _index.Grid,
          { fluid: true },
          _react2.default.createElement(
            _index.Row,
            null,
            this.props.tags.isLoading ? _react2.default.createElement(_index.Loader, null) : this.props.tags.posts.map(function (post) {
              return _react2.default.createElement(
                _index.Col,
                { key: post.id, xs: 12, md: 4 },
                _react2.default.createElement(_TagListCard2.default, post)
              );
            })
          )
        )
      );
    }
  }]);

  return TagList;
}(_react.Component), _class2.propTypes = {
  tags: _react.PropTypes.object.isRequired
}, _temp)) || _class);


var mapStateToProps = function mapStateToProps(state) {
  return {
    tags: state.tags,
    isLoading: state.tags.isLoading,
    posts: state.tags.posts
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TagList);

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(33);

var _dateFns = __webpack_require__(59);

var _dateFns2 = _interopRequireDefault(_dateFns);

var _mol = __webpack_require__(55);

var _mol2 = _interopRequireDefault(_mol);

var _FontIcons = __webpack_require__(7);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Buttons = __webpack_require__(5);

var _Cards = __webpack_require__(14);

var _Avatars = __webpack_require__(47);

var _Avatars2 = _interopRequireDefault(_Avatars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagListCard = function TagListCard(props) {
  var formattedDate = _dateFns2.default.format(props.created_at, 'MM/DD/YYYY');

  var overlay = _react2.default.createElement(
    _Cards.CardTitle,
    {
      key: 'overlay',
      title: props.title,
      subtitle: formattedDate
    },
    _react2.default.createElement(
      _Buttons.IconButton,
      { className: 'margin-left-auto' },
      'star_outline'
    )
  );
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Cards.Card,
      null,
      _react2.default.createElement(
        _Cards.CardMedia,
        { overlay: overlay },
        _react2.default.createElement('img', { className: 'post__card-image', src: props.feature_image, height: '350px', width: '100%' })
      ),
      _react2.default.createElement(
        _Cards.CardActions,
        { isExpander: true },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/blog/' + props.slug },
          _react2.default.createElement(_Buttons.FlatButton, { label: 'Read more', secondary: true })
        )
      ),
      _react2.default.createElement(
        _Cards.CardText,
        { expandable: true },
        props.excerpt
      )
    )
  );
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
/* 246 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TagList = __webpack_require__(244);

var _TagList2 = _interopRequireDefault(_TagList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TagList2.default;

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostImage = function PostImage(props) {
  return _react2.default.createElement(
    "div",
    { className: "postimage__wrap" },
    _react2.default.createElement("img", { src: props.imageSrc, alt: "post image", className: "postimage" })
  );
};
exports.default = PostImage;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostImage = __webpack_require__(247);

var _PostImage2 = _interopRequireDefault(_PostImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PostImage2.default;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(61);

var _Link2 = _interopRequireDefault(_Link);

var _stardust = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function Tag(props) {
  return _react2.default.createElement(
    _Link2.default,
    { to: '/blog/tags/' + props.name },
    _react2.default.createElement(
      _stardust.Label,
      { image: true },
      _react2.default.createElement(_stardust.Icon, { name: 'tag' }),
      props.name
    )
  );
};
exports.default = Tag;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tag = __webpack_require__(249);

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Tag2.default;

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Avatars = __webpack_require__(47);

var _Avatars2 = _interopRequireDefault(_Avatars);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
};
var Author = function Author(props) {
  return _react2.default.createElement(
    'div',
    { style: styles.wrapper },
    _react2.default.createElement(_Avatars2.default, { src: props.avatar_url }),
    _react2.default.createElement(
      _components.Heading,
      { size: 3 },
      ' ',
      props.display_name
    )
  );
};

Author.propTypes = {
  display_name: _react2.default.PropTypes.string.isRequired,
  avatar_url: _react2.default.PropTypes.string
};

exports.default = Author;

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Author = __webpack_require__(251);

var _Author2 = _interopRequireDefault(_Author);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Author2.default;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(33);

var _dateFns = __webpack_require__(59);

var _dateFns2 = _interopRequireDefault(_dateFns);

var _stardust = __webpack_require__(8);

var _index = __webpack_require__(5);

var _index2 = __webpack_require__(3);

var _mol = __webpack_require__(55);

var _mol2 = _interopRequireDefault(_mol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostCard = function PostCard(props) {
  var formattedDate = _dateFns2.default.format(props.created_at, 'MM/DD/YYYY');
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _stardust.Card,
      { fluid: true },
      _react2.default.createElement(_stardust.Image, { className: 'post__card-image', src: props.feature_image }),
      _react2.default.createElement(
        _stardust.Card.Content,
        null,
        _react2.default.createElement(
          _stardust.Card.Header,
          null,
          props.title
        ),
        _react2.default.createElement(
          _stardust.Card.Meta,
          null,
          formattedDate
        ),
        _react2.default.createElement(
          _stardust.Card.Description,
          null,
          props.excerpt
        )
      ),
      _react2.default.createElement(
        _stardust.Card.Content,
        { extra: true },
        _react2.default.createElement(
          _index2.Row,
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/blog/' + props.slug },
            _react2.default.createElement(_index.FlatButton, { label: 'Read more', secondary: true })
          ),
          _react2.default.createElement(_mol2.default, { tags: props.tags })
        )
      )
    )
  );
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
/* 254 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Dividers = __webpack_require__(24);

var _Dividers2 = _interopRequireDefault(_Dividers);

var _components = __webpack_require__(3);

var _atm = __webpack_require__(248);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContent = function PostContent(props) {
  function createMarkup() {
    return { __html: props.content };
  }
  return _react2.default.createElement(
    'article',
    { style: { overflow: 'hidden' } },
    props.feature_image ? _react2.default.createElement(_atm2.default, { imageSrc: props.feature_image }) : null,
    _react2.default.createElement(
      'div',
      { style: { padding: '2em 1.5em' } },
      _react2.default.createElement(
        _components.Heading,
        { size: 1, override: '3.5em', textDeco: 'capitalize' },
        props.title,
        ' '
      ),
      _react2.default.createElement(_Dividers2.default, { style: { marginTop: '35px', marginBottom: '20px' } }),
      _react2.default.createElement('div', { className: 'content', style: { lineHeight: '1.8em' }, dangerouslySetInnerHTML: createMarkup() })
    )
  );
};

PostContent.propTypes = {
  title: _react.PropTypes.string.isRequired,
  content: _react.PropTypes.any,
  feature_image: _react.PropTypes.string
};

exports.default = PostContent;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostContent = __webpack_require__(254);

var _PostContent2 = _interopRequireDefault(_PostContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PostContent2.default;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _atm = __webpack_require__(250);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

var TagBlock = function TagBlock(props) {
  if (!props.tags) {
    return _react2.default.createElement(
      'div',
      null,
      'No tags'
    );
  }
  return _react2.default.createElement(
    'div',
    { style: styles.wrapper, className: 'tagblock' },
    props.tags.map(function (tag) {
      return _react2.default.createElement(_atm2.default, { key: tag.id, name: tag.name, id: tag.id });
    })
  );
};

TagBlock.propTypes = {
  tags: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    id: _react2.default.PropTypes.number,
    name: _react2.default.PropTypes.name
  }))
};

exports.default = TagBlock;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Dividers = __webpack_require__(24);

var _Dividers2 = _interopRequireDefault(_Dividers);

var _mol = __webpack_require__(252);

var _mol2 = _interopRequireDefault(_mol);

var _mol3 = __webpack_require__(55);

var _mol4 = _interopRequireDefault(_mol3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(props) {
  return _react2.default.createElement(
    'div',
    { className: 'sidebar' },
    _react2.default.createElement(_mol2.default, props.author),
    _react2.default.createElement(_Dividers2.default, { style: { marginTop: '1em', marginBottom: '1em' } }),
    _react2.default.createElement(_mol4.default, { tags: props.tags })
  );
};

Sidebar.propTypes = {
  tags: _react2.default.PropTypes.array,
  author: _react2.default.PropTypes.object
};

exports.default = Sidebar;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sidebar = __webpack_require__(257);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Sidebar2.default;

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BlogContainer = __webpack_require__(235);

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
      component: __webpack_require__(238).default
    },
    childRoutes: [{
      path: ':slug',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 242)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'search/:query',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 240)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'tags/:name',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 246)).then(loadModule(cb)).catch(errorLoading);
      }
    }]
  };
};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(23);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(2);

var _redial = __webpack_require__(11);

var _index = __webpack_require__(3);

var _boldr = __webpack_require__(40);

var _navigation = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boldr = (_dec = (0, _redial.provideHooks)({
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _boldr.fetchSettingsIfNeeded)());
  }
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Boldr, _Component);

  function Boldr() {
    _classCallCheck(this, Boldr);

    return _possibleConstructorReturn(this, (Boldr.__proto__ || Object.getPrototypeOf(Boldr)).apply(this, arguments));
  }

  _createClass(Boldr, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchSettingsIfNeeded();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactHelmet2.default, {
          title: 'Boldr',
          titleTemplate: '%s | powered by Boldr'
        }),
        this.props.children,
        _react2.default.createElement(_index.Notifications, null)
      );
    }
  }]);

  return Boldr;
}(_react.Component), _class2.propTypes = {
  children: _react.PropTypes.node,
  fetchSettingsIfNeeded: _react.PropTypes.func
}, _temp)) || _class);


function mapStateToProps(state) {
  return {
    boldr: state.boldr,
    auth: state.auth,
    notifications: state.notifications,
    navigation: state.navigation
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchSettingsIfNeeded: _boldr.fetchSettingsIfNeeded })(Boldr);

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Boldr = __webpack_require__(260);

var _Boldr2 = _interopRequireDefault(_Boldr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Boldr2.default;

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(84);

var _atm = __webpack_require__(86);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleEditor = (_temp = _class = function (_Component) {
  _inherits(ArticleEditor, _Component);

  function ArticleEditor(props) {
    _classCallCheck(this, ArticleEditor);

    var _this = _possibleConstructorReturn(this, (ArticleEditor.__proto__ || Object.getPrototypeOf(ArticleEditor)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);

    _this.state = {
      editing: true
    };
    return _this;
  }

  _createClass(ArticleEditor, [{
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
      this.props.dispatch((0, _actions.updatePost)(postData));
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.currentPost.isLoading && !this.props.currentPost.content.length) {
        return _react2.default.createElement(
          'p',
          null,
          'Loading...'
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_atm2.default, {
          initialValues: this.props.currentPost,
          editing: true,
          onSubmit: this.handleSubmit
        })
      );
    }
  }]);

  return ArticleEditor;
}(_react.Component), _class.propTypes = {
  dispatch: _react2.default.PropTypes.func,
  posts: _react2.default.PropTypes.object,
  params: _react2.default.PropTypes.object,
  currentPost: _react2.default.PropTypes.object,
  clearCurrentPost: _react2.default.PropTypes.func,
  loadPost: _react2.default.PropTypes.func
}, _temp);


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    currentPost: state.currentPost,
    isLoading: state.currentPost.isLoading
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadPost: _actions.loadPost, clearCurrentPost: _actions.clearCurrentPost, updatePost: _actions.updatePost })(ArticleEditor);

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ArticleEditor = __webpack_require__(262);

var _ArticleEditor2 = _interopRequireDefault(_ArticleEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ArticleEditor2.default;

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(32);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(37);

var _index4 = __webpack_require__(3);

var _post = __webpack_require__(27);

var _mol = __webpack_require__(293);

var _mol2 = _interopRequireDefault(_mol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleList = (_temp = _class = function (_Component) {
  _inherits(ArticleList, _Component);

  function ArticleList(props) {
    _classCallCheck(this, ArticleList);

    var _this = _possibleConstructorReturn(this, (ArticleList.__proto__ || Object.getPrototypeOf(ArticleList)).call(this, props));

    _this.handleArticlePublishClick = _this.handleArticlePublishClick.bind(_this);
    _this.handleArticleDraftClick = _this.handleArticleDraftClick.bind(_this);
    return _this;
  }

  _createClass(ArticleList, [{
    key: 'handleArticlePublishClick',
    value: function handleArticlePublishClick(postId, postStatus) {
      this.props.changePostStatus(postId, postStatus);
    }
  }, {
    key: 'handleArticleDraftClick',
    value: function handleArticleDraftClick(postId, postStatus) {
      this.props.changePostStatus(postId, postStatus);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _index4.Row,
        null,
        _react2.default.createElement(
          _index2.default,
          { zDepth: 1, style: { height: '90vh' } },
          _react2.default.createElement(
            _index3.DataTable,
            { className: 'complex-table' },
            _react2.default.createElement(
              _index3.TableHeader,
              null,
              _react2.default.createElement(
                _index3.TableRow,
                null,
                _react2.default.createElement(
                  _index3.TableColumn,
                  null,
                  'Title'
                ),
                _react2.default.createElement(
                  _index3.TableColumn,
                  null,
                  'Status'
                ),
                _react2.default.createElement(
                  _index3.TableColumn,
                  null,
                  'Date'
                ),
                _react2.default.createElement(
                  _index3.TableColumn,
                  null,
                  'Action'
                )
              )
            ),
            _react2.default.createElement(
              _index3.TableBody,
              null,
              this.props.posts.results.map(function (post, index) {
                return _react2.default.createElement(_mol2.default, {
                  article: post,
                  key: post.id,
                  sortRank: index,
                  content: post.content,
                  title: post.title,
                  slug: post.slug,
                  handleArticlePublishClick: _this2.handleArticlePublishClick,
                  handleArticleDraftClick: _this2.handleArticleDraftClick
                });
              })
            )
          )
        )
      );
    }
  }]);

  return ArticleList;
}(_react.Component), _class.propTypes = {
  children: _react.PropTypes.element,
  posts: _react.PropTypes.object,
  dispatch: _react.PropTypes.func,
  current: _react.PropTypes.object,
  allPosts: _react.PropTypes.array,
  changePostStatus: _react.PropTypes.func
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts,
    allPosts: (0, _post.getPostsArray)(state)
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { changePostStatus: _post.changePostStatus })(ArticleList);

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ArticleList = __webpack_require__(264);

var _ArticleList2 = _interopRequireDefault(_ArticleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ArticleList2.default;

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collections = function Collections(props) {
  return _react2.default.createElement(
    'div',
    null,
    props.children
  );
};

exports.default = Collections;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Collections = __webpack_require__(266);

var _Collections2 = _interopRequireDefault(_Collections);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Collections2.default;

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(34);

var _index = __webpack_require__(3);

var _index2 = __webpack_require__(65);

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(177);

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(7);

var _index7 = _interopRequireDefault(_index6);

var _actions = __webpack_require__(283);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrawerType = {
  FULL_HEIGHT: 'full-height',
  CLIPPED: 'clipped',
  FLOATING: 'floating',
  PERSISTENT: 'persistent',
  PERSISTENT_MINI: 'mini'
};

var Dashboard = (0, _index3.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      var navItems = [{
        primaryText: 'Article List',
        leftIcon: _react2.default.createElement(
          _index7.default,
          null,
          'toc'
        ),
        onClick: this.props.articleListClicked
      }, {
        primaryText: 'Article Editor',
        leftIcon: _react2.default.createElement(
          _index7.default,
          null,
          'edit'
        ),
        onClick: this.props.articleEditorClicked
      }, {
        primaryText: 'Dashboard',
        leftIcon: _react2.default.createElement(
          _index7.default,
          null,
          'dashboard'
        ),
        onClick: this.props.dashboardClicked
      }, {
        primaryText: 'Media',
        leftIcon: _react2.default.createElement(
          _index7.default,
          null,
          'perm_media'
        ),
        onClick: this.props.mediaClicked
      }, {
        primaryText: 'Members',
        leftIcon: _react2.default.createElement(
          _index7.default,
          null,
          'people'
        ),
        onClick: this.props.membersClicked
      }, {
        primaryText: 'Navigation',
        leftIcon: _react2.default.createElement(
          _index7.default,
          null,
          'link'
        ),
        onClick: this.props.navigationClicked
      }, {
        primaryText: 'Pages',
        leftIcon: _react2.default.createElement(
          _index7.default,
          null,
          'book'
        ),
        onClick: this.props.pagesClicked
      }, {
        primaryText: 'Content',
        leftIcon: _react2.default.createElement(
          _index7.default,
          null,
          'content_copy'
        ),
        onClick: this.props.contentClicked
      }, {
        primaryText: 'Settings',
        leftIcon: _react2.default.createElement(
          _index7.default,
          null,
          'settings'
        ),
        onClick: this.props.settingsClicked
      }, {
        primaryText: 'Home',
        leftIcon: _react2.default.createElement(
          _index7.default,
          null,
          'home'
        ),
        onClick: this.props.homeClicked
      }];
      return _react2.default.createElement(
        _index.Grid,
        { fluid: true },
        _react2.default.createElement(
          _index.Row,
          null,
          _react2.default.createElement(_index5.default, {
            drawerTitle: 'Navigation',
            toolbarTitle: 'Dashboard',
            toolbarStyle: { marginBottom: '25px' },
            tabletDrawerType: DrawerType.PERSISTENT_MINI,
            desktopDrawerType: DrawerType.PERSISTENT_MINI,
            navItems: navItems
          }),
          _react2.default.createElement(
            _index.Col,
            { xs: true, style: { paddingTop: '6%' } },
            _react2.default.createElement(
              'div',
              null,
              this.props.children
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react.Component), _class2.propTypes = {
  children: _react.PropTypes.element,
  toggleOpen: _react.PropTypes.func,
  articleListClicked: _react.PropTypes.func,
  articleEditorClicked: _react.PropTypes.func,
  dashboardClicked: _react.PropTypes.func,
  mediaClicked: _react.PropTypes.func,
  membersClicked: _react.PropTypes.func,
  settingsClicked: _react.PropTypes.func,
  homeClicked: _react.PropTypes.func,
  navigationClicked: _react.PropTypes.func,
  pagesClicked: _react.PropTypes.func,
  contentClicked: _react.PropTypes.func
}, _temp)) || _class;

function mapStateToProps(state) {
  return {
    router: state.router,
    boldr: state.boldr
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    articleListClicked: _actions.articleListClicked, articleEditorClicked: _actions.articleEditorClicked, dashboardClicked: _actions.dashboardClicked,
    mediaClicked: _actions.mediaClicked, membersClicked: _actions.membersClicked, settingsClicked: _actions.settingsClicked, homeClicked: _actions.homeClicked, navigationClicked: _actions.navigationClicked,
    contentClicked: _actions.contentClicked, pagesClicked: _actions.pagesClicked }, dispatch);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _org = __webpack_require__(303);

var _org2 = _interopRequireDefault(_org);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardWidgets = function (_Component) {
  _inherits(DashboardWidgets, _Component);

  function DashboardWidgets() {
    _classCallCheck(this, DashboardWidgets);

    return _possibleConstructorReturn(this, (DashboardWidgets.__proto__ || Object.getPrototypeOf(DashboardWidgets)).apply(this, arguments));
  }

  _createClass(DashboardWidgets, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _components.Row,
          null,
          _react2.default.createElement(
            _components.Col,
            { xs: 6, md: 3 },
            _react2.default.createElement(_org2.default, { name: 'Widget A' })
          ),
          _react2.default.createElement(
            _components.Col,
            { xs: 6, md: 3 },
            _react2.default.createElement(_org2.default, { name: 'Widget C' })
          ),
          _react2.default.createElement(
            _components.Col,
            { xs: 12, md: 6 },
            _react2.default.createElement(_org2.default, { name: 'Widget D' })
          )
        ),
        _react2.default.createElement(
          _components.Row,
          { style: { marginTop: '1.5em' } },
          _react2.default.createElement(_org2.default, { name: 'Widget E' })
        )
      );
    }
  }]);

  return DashboardWidgets;
}(_react.Component);

exports.default = DashboardWidgets;

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DashboardWidgets = __webpack_require__(269);

var _DashboardWidgets2 = _interopRequireDefault(_DashboardWidgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DashboardWidgets2.default;

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redial = __webpack_require__(11);

var _index = __webpack_require__(3);

var _helpers = __webpack_require__(21);

var _media = __webpack_require__(56);

var _mol = __webpack_require__(295);

var _mol2 = _interopRequireDefault(_mol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Media = (_dec = (0, _redial.provideHooks)({
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _media.fetchMedia)());
  }
}), _dec(_class = function (_Component) {
  _inherits(Media, _Component);

  function Media(props) {
    _classCallCheck(this, Media);

    var _this = _possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).call(this, props));

    _this.handleChange = function (event, index, value) {
      return _this.setState({ value: value });
    };

    _this.state = {
      value: 3,
      open: false
    };
    _this.handleRemoveMedia = _this.handleRemoveMedia.bind(_this);
    _this.handleFinish = _this.handleFinish.bind(_this);
    return _this;
  }

  _createClass(Media, [{
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
    key: 'handleRemoveMedia',
    value: function handleRemoveMedia(mediaId) {
      this.props.deleteMedia(mediaId);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { paddingTop: '50px' } },
        _react2.default.createElement(
          _index.Row,
          null,
          _react2.default.createElement(
            _index.Col,
            { xs: 12 },
            _react2.default.createElement(_index.S3Uploader, {
              signingUrl: '' + _helpers.S3_SIGNING_URL,
              accept: 'image/*',
              onProgress: _index.S3Uploader.onUploadProgress,
              onError: _index.S3Uploader.onUploadError,
              onFinish: this.handleFinish,

              uploadRequestHeaders: { 'x-amz-acl': 'public-read' },
              contentDisposition: 'auto',
              server: '' + _helpers.API_BASE
            }),
            _react2.default.createElement(_mol2.default, { files: this.props.media.files, removeMedia: this.handleRemoveMedia })
          )
        )
      );
    }
  }]);

  return Media;
}(_react.Component)) || _class);


var mapStateToProps = function mapStateToProps(state) {
  return {
    media: state.media,
    isLoading: state.media.isLoading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { uploadFiles: _media.uploadFiles, deleteMedia: _media.deleteMedia })(Media);

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Media = __webpack_require__(271);

var _Media2 = _interopRequireDefault(_Media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Media2.default;

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; /* eslint-disable react/prefer-stateless-function */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redial = __webpack_require__(11);

var _index = __webpack_require__(71);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(5);

var _mol = __webpack_require__(299);

var _mol2 = _interopRequireDefault(_mol);

var _atm = __webpack_require__(285);

var _atm2 = _interopRequireDefault(_atm);

var _members = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Members = (_dec = (0, _redial.provideHooks)({
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _members.loadSiteMembers)());
  }
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Members, _Component);

  function Members(props) {
    _classCallCheck(this, Members);

    var _this = _possibleConstructorReturn(this, (Members.__proto__ || Object.getPrototypeOf(Members)).call(this, props));

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

  _createClass(Members, [{
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

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_mol2.default, { toggleUser: this.toggleUser, users: this.props.members.members }),
        _react2.default.createElement(
          _index2.default,
          {
            title: 'Update User',
            isOpen: isOpen,
            close: this.closeDialog
          },
          _react2.default.createElement(_atm2.default, { onSubmit: this.handleSubmit }),
          _react2.default.createElement(_index3.FlatButton, {
            label: 'Save',
            onClick: this.handleSubmit
          })
        )
      );
    }
  }]);

  return Members;
}(_react.Component), _class2.propTypes = {
  members: _react.PropTypes.object,
  memberSelected: _react.PropTypes.func,
  updateMember: _react.PropTypes.func
}, _temp)) || _class);


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    members: state.members,
    selected: state.members.selected
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { memberSelected: _members.memberSelected, updateMember: _members.updateMember })(Members);

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Members = __webpack_require__(273);

var _Members2 = _interopRequireDefault(_Members);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Members2.default;

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(32);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(71);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(5);

var _index6 = __webpack_require__(74);

var _index7 = __webpack_require__(3);

var _navigation = __webpack_require__(41);

var _mol = __webpack_require__(301);

var _mol2 = _interopRequireDefault(_mol);

var _atm = __webpack_require__(87);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
  return { navigation: state.navigation };
}

var Navigation = (_dec = (0, _reactRedux.connect)(mapStateToProps), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this));

    _this.onUpdateFormSubmit = function (data) {
      var id = _this.state.link.id;
      _this.props.dispatch((0, _navigation.updateNavLinks)(data, id));
    };

    _this.onFormSubmit = function (data) {
      _this.props.dispatch((0, _navigation.addNavLinks)(data));
    };

    _this.openDialog = function () {
      _this.setState({ isOpen: true });
    };

    _this.closeDialog = function () {
      _this.setState({ isOpen: false });
    };

    _this.state = {
      isOpen: false,
      link: {
        name: null,
        position: null,
        href: null,
        id: null,
        icon: null
      }
    };

    _this.handleItemClick = _this.handleItemClick.bind(_this);
    return _this;
  }

  _createClass(Navigation, [{
    key: 'handleItemClick',
    value: function handleItemClick(item) {
      this.setState({
        link: {
          name: item.name,
          position: item.position,
          href: item.href,
          id: item.id,
          icon: item.icon
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var navigation = this.props.navigation;
      var isOpen = this.state.isOpen;

      var listItems = navigation.links.map(function (item, i) {
        return _react2.default.createElement(_index6.ListItem, { key: i, primaryText: item.name, onClick: function onClick() {
            return _this2.handleItemClick(item);
          } });
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _index7.Row,
          null,
          _react2.default.createElement(
            _index7.Col,
            { xs: true },
            _react2.default.createElement(
              _index2.default,
              { zDepth: 2 },
              _react2.default.createElement(
                _index6.List,
                { subheader: 'Navigation Links', className: 'navigation__list' },
                listItems
              )
            ),
            _react2.default.createElement(
              _index5.FloatingButton,
              { primary: true, onClick: this.openDialog },
              'add'
            )
          ),
          _react2.default.createElement(
            _index7.Col,
            { xs: 12, md: 4 },
            _react2.default.createElement(
              _index2.default,
              { zDepth: 2 },
              _react2.default.createElement(_mol2.default, {
                initialValues: this.state.link,
                onFormSubmit: this.onUpdateFormSubmit
              })
            )
          )
        ),
        _react2.default.createElement(
          _index4.default,
          {
            isOpen: isOpen,
            title: 'Add a link',
            close: this.closeDialog,
            dialogStyle: { width: 520 }
          },
          _react2.default.createElement(_atm2.default, { onSubmit: this.onFormSubmit })
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component), _class2.propTypes = {
  navigation: _react.PropTypes.object,
  dispatch: _react.PropTypes.func,
  handleItemClick: _react.PropTypes.func
}, _temp)) || _class);
exports.default = Navigation;

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Navigation = __webpack_require__(275);

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Navigation2.default;

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _media = __webpack_require__(56);

var _post = __webpack_require__(27);

var _atm = __webpack_require__(86);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewArticle = (_temp = _class = function (_Component) {
  _inherits(NewArticle, _Component);

  function NewArticle(props) {
    _classCallCheck(this, NewArticle);

    var _this = _possibleConstructorReturn(this, (NewArticle.__proto__ || Object.getPrototypeOf(NewArticle)).call(this, props));

    _this.state = { imageUrl: '' };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleFinish = _this.handleFinish.bind(_this);
    return _this;
  }

  _createClass(NewArticle, [{
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      var featImg = localStorage.getItem('imgUrl');
      var postData = {
        title: values.title,
        tags: values.tags,
        status: values.status,
        content: values.content,
        feature_image: featImg || values.feature_image
      };
      this.props.dispatch((0, _post.createPost)(postData));
    }
  }, {
    key: 'handleFinish',
    value: function handleFinish(signResult) {
      var signUrl = signResult.signedUrl;
      var splitUrl = signUrl.split('?');
      var url = splitUrl[0];
      var payload = {
        filename: signResult.filename,
        s3url: url
      };
      localStorage.setItem('imgUrl', JSON.stringify(url));
      this.props.uploadFiles(payload);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_atm2.default, {
          editing: false,
          onSubmit: this.props.onFormSubmit,
          handleFinish: this.handleFinish
        })
      );
    }
  }]);

  return NewArticle;
}(_react.Component), _class.propTypes = {
  dispatch: _react.PropTypes.func,
  posts: _react.PropTypes.object,
  params: _react.PropTypes.object,
  currentPost: _react.PropTypes.object,
  onFormSubmit: _react.PropTypes.func,
  uploadFiles: _react.PropTypes.func
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { createPost: _post.createPost, uploadFiles: _media.uploadFiles })(NewArticle);

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _post = __webpack_require__(27);

var _NewArticle = __webpack_require__(277);

var _NewArticle2 = _interopRequireDefault(_NewArticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewArticleContainer = function (_Component) {
  _inherits(NewArticleContainer, _Component);

  function NewArticleContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewArticleContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewArticleContainer.__proto__ || Object.getPrototypeOf(NewArticleContainer)).call.apply(_ref, [this].concat(args))), _this), _this.onFormSubmit = function (data) {
      _this.props.dispatch((0, _post.createPost)(data));
      _this.context.router.push('/');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewArticleContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_NewArticle2.default, { onFormSubmit: this.onFormSubmit });
    }
  }]);

  return NewArticleContainer;
}(_react.Component);

NewArticleContainer.contextTypes = {
  router: _react.PropTypes.object
};

NewArticleContainer.propTypes = {
  dispatch: _react.PropTypes.func
};

exports.default = (0, _reactRedux.connect)()(NewArticleContainer);

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pages = function Pages(props) {
  return _react2.default.createElement(
    'div',
    null,
    props.children
  );
};

exports.default = Pages;

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pages = __webpack_require__(279);

var _Pages2 = _interopRequireDefault(_Pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Pages2.default;

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redial = __webpack_require__(11);

var _index = __webpack_require__(32);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(193);

var _index4 = __webpack_require__(3);

var _boldr = __webpack_require__(40);

var _mol = __webpack_require__(297);

var _mol2 = _interopRequireDefault(_mol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = (_dec = (0, _redial.provideHooks)({
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _boldr.fetchSettingsIfNeeded)());
  }
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Settings, _Component);

  function Settings(props) {
    _classCallCheck(this, Settings);

    var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Settings, [{
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      var id = this.props.boldr.id;
      this.props.updateBoldrSettings(values, id);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.boldr.isLoading) {
        return _react2.default.createElement(_index4.Loader, null);
      }
      return _react2.default.createElement(
        'div',
        { style: { paddingTop: '50px' } },
        _react2.default.createElement(
          _index2.default,
          null,
          _react2.default.createElement(
            _index3.Tabs,
            { primary: true, scrollable: true },
            _react2.default.createElement(
              _index3.Tab,
              { label: 'General' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_mol2.default, { onSubmit: this.handleSubmit, settings: this.props.boldr })
              )
            ),
            _react2.default.createElement(
              _index3.Tab,
              { label: 'Soon' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  'This is empty'
                )
              )
            ),
            _react2.default.createElement(
              _index3.Tab,
              { label: 'Soon' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  'This is empty'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Settings;
}(_react.Component), _class2.propTypes = {
  boldr: _react.PropTypes.object.isRequired,
  updateBoldrSettings: _react.PropTypes.func
}, _temp)) || _class);


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    boldr: state.boldr,
    isLoading: state.boldr.isLoading
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { updateBoldrSettings: _boldr.updateBoldrSettings })(Settings);

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Settings = __webpack_require__(281);

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Settings2.default;

/***/ },
/* 283 */
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
exports.navigationClicked = navigationClicked;
exports.contentClicked = contentClicked;
exports.pagesClicked = pagesClicked;
exports.settingsClicked = settingsClicked;
exports.homeClicked = homeClicked;

var _reactRouterRedux = __webpack_require__(17);

function articleListClicked() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/dashboard/articles'));
  };
}

function articleEditorClicked() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/dashboard/articles/new'));
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

function navigationClicked() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/dashboard/navigation'));
  };
}

function contentClicked() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/dashboard/content'));
  };
}

function pagesClicked() {
  return function (dispatch) {
    dispatch((0, _reactRouterRedux.push)('/dashboard/pages'));
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
/* 284 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(18);

var _inlineStyles = __webpack_require__(22);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _Buttons = __webpack_require__(5);

var _TextField = __webpack_require__(29);

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = __webpack_require__(129);

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditMemberForm = function EditMemberForm(props) {
  var handleSubmit = props.handleSubmit;
  var pristine = props.pristine;
  var reset = props.reset;
  var submitting = props.submitting;

  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit },
    _react2.default.createElement(
      'div',
      { className: 'grid__row' },
      _react2.default.createElement(_reduxForm.Field, {
        name: 'roleId',
        component: _SelectField2.default,
        label: 'Role ID',
        position: 'below',
        menuItems: [1, 2, 3, 4, 5]
      })
    )
  );
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
/* 285 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EditMemberForm = __webpack_require__(284);

var _EditMemberForm2 = _interopRequireDefault(_EditMemberForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _EditMemberForm2.default;

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reduxForm = __webpack_require__(18);

var _stardust = __webpack_require__(8);

var _index = __webpack_require__(3);

var _helpers = __webpack_require__(21);

var _inlineStyles = __webpack_require__(22);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _Radio = __webpack_require__(77);

var _Radio2 = _interopRequireDefault(_Radio);

var _index2 = __webpack_require__(32);

var _index3 = _interopRequireDefault(_index2);

var _RadioButtonGroup = __webpack_require__(45);

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

var _TextField = __webpack_require__(29);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorForm = function EditorForm(props) {
  var handleSubmit = props.handleSubmit;
  var pristine = props.pristine;
  var reset = props.reset;
  var submitting = props.submitting;

  /**
   * wraps the editor component for embedding into redux-form as an input component
   * @param  {object} input
   * @param  {string} label
   * @return {element} BoldrEditor
   */

  var renderEditor = function renderEditor(_ref) {
    var input = _ref.input;
    var label = _ref.label;
    return _react2.default.createElement(
      'div',
      null,
      (0, _TextField.renderLabel)(input.name, label),
      _react2.default.createElement(_index.BoldrEditor, _extends({}, input, { label: label }))
    );
  };

  return _react2.default.createElement(
    _index.Row,
    null,
    _react2.default.createElement(
      _index.Col,
      { xs: true },
      _react2.default.createElement(
        _stardust.Form,
        { onSubmit: handleSubmit },
        _react2.default.createElement(
          _index3.default,
          { zDepth: 3, style: { padding: '1em' } },
          _react2.default.createElement(_reduxForm.Field, { name: 'title', type: 'text', component: _TextField2.default, label: 'Post Title' }),
          _react2.default.createElement(
            _stardust.Form.Group,
            { widths: 'equal' },
            _react2.default.createElement(_reduxForm.Field, { name: 'tags', type: 'text',
              helpText: 'Separate using commas',
              component: _TextField2.default,
              label: 'Tags'
            }),
            _react2.default.createElement(_reduxForm.Field, { name: 'feature_image', type: 'text',
              helpText: 'URL for your image',
              component: _TextField2.default,
              label: 'Feature Image'
            })
          ),
          _react2.default.createElement(_reduxForm.Field, { name: 'excerpt',
            type: 'text',
            component: _TextField2.default,
            label: 'Excerpt'
          }),
          _react2.default.createElement(
            'div',
            { style: { marginTop: '50px' } },
            _react2.default.createElement(_reduxForm.Field, { name: 'content', component: renderEditor })
          ),
          _react2.default.createElement(
            _index.Row,
            null,
            _react2.default.createElement(
              _index.Col,
              { xs: 12, md: 6 },
              _react2.default.createElement(
                _stardust.Button,
                { type: 'submit', primary: true, style: { marginTop: '20px' } },
                'Save Post'
              )
            ),
            _react2.default.createElement(
              _index.Col,
              { xs: 12, md: 6 },
              _react2.default.createElement(
                _reduxForm.Field,
                { name: 'status', component: _RadioButtonGroup2.default },
                _react2.default.createElement(_Radio2.default, {
                  value: 'draft',
                  label: 'Draft',
                  style: _inlineStyles2.default.radio
                }),
                _react2.default.createElement(_Radio2.default, {
                  value: 'published',
                  label: 'Published',
                  style: _inlineStyles2.default.radio
                }),
                _react2.default.createElement(_Radio2.default, {
                  value: 'archived',
                  label: 'Archived',
                  style: _inlineStyles2.default.radio
                })
              )
            )
          )
        )
      )
    )
  );
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'EditorForm'
})(EditorForm);


EditorForm.propTypes = {
  handleSubmit: _react.PropTypes.func.isRequired,
  editing: _react.PropTypes.bool,
  reset: _react.PropTypes.func,
  submitting: _react.PropTypes.bool,
  fields: _react.PropTypes.object,
  pristine: _react.PropTypes.bool,
  input: _react.PropTypes.object,
  label: _react.PropTypes.string
};

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stardust = __webpack_require__(8);

var _index = __webpack_require__(14);

var _index2 = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Column = _stardust.Grid.Column;
var Row = _stardust.Grid.Row;


var File = function File(props) {
  function handleclick() {
    var mediaId = props.file.id;
    props.removeMedia(mediaId);
  }

  return _react2.default.createElement(
    Column,
    { key: props.file.id },
    _react2.default.createElement(
      _stardust.Card,
      null,
      _react2.default.createElement(
        _index.CardMedia,
        {
          aspectRatio: _index.CardMedia.aspect.equal,
          overlay: _react2.default.createElement(_index.CardTitle, { title: props.file.filename })
        },
        _react2.default.createElement(_stardust.Image, { src: props.file.s3url, alt: props.file.filename })
      ),
      _react2.default.createElement(
        _index.CardActions,
        { centered: true },
        _react2.default.createElement(
          _index2.IconButton,
          null,
          'edit'
        ),
        _react2.default.createElement(
          _index2.IconButton,
          { onClick: handleclick },
          'delete'
        )
      )
    )
  );
};

File.propTypes = {
  removeMedia: _react.PropTypes.func.isRequired,
  file: _react.PropTypes.shape({
    id: _react.PropTypes.number.isRequired,
    filename: _react.PropTypes.string.isRequired,
    s3url: _react.PropTypes.string.isRequired
  })
};

exports.default = File;

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _File = __webpack_require__(287);

var _File2 = _interopRequireDefault(_File);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _File2.default;

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(33);

var _Buttons = __webpack_require__(5);

var _FontIcons = __webpack_require__(7);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _DataTables = __webpack_require__(37);

var _inlineStyles = __webpack_require__(22);

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
  return _react2.default.createElement(
    _DataTables.TableRow,
    null,
    _react2.default.createElement(
      _DataTables.TableColumn,
      null,
      props.user.id
    ),
    _react2.default.createElement(
      _DataTables.TableColumn,
      null,
      props.user.display_name
    ),
    _react2.default.createElement(
      _DataTables.TableColumn,
      null,
      props.user.email
    ),
    _react2.default.createElement(
      _DataTables.TableColumn,
      null,
      props.user.role[0].name
    ),
    _react2.default.createElement(
      _DataTables.TableColumn,
      null,
      _react2.default.createElement(
        _Buttons.IconButton,
        null,
        _react2.default.createElement(
          _FontIcons2.default,
          { onClick: handleToggle },
          'editor'
        )
      )
    )
  );
};

MemberTableRow.propTypes = propTypes;

exports.default = MemberTableRow;

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MemberTableRow = __webpack_require__(289);

var _MemberTableRow2 = _interopRequireDefault(_MemberTableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MemberTableRow2.default;

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reduxForm = __webpack_require__(18);

var _TextField = __webpack_require__(29);

var _TextField2 = _interopRequireDefault(_TextField);

var _index = __webpack_require__(5);

var _index2 = __webpack_require__(80);

var _index3 = __webpack_require__(24);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationForm = function NavigationForm(props) {
  var handleSubmit = props.handleSubmit;
  var pristine = props.pristine;
  var reset = props.reset;
  var submitting = props.submitting;

  return _react2.default.createElement(
    'form',
    { className: 'form__navigation', onSubmit: handleSubmit },
    _react2.default.createElement(_reduxForm.Field, { name: 'name', component: _TextField2.default, type: 'text', label: 'Name' }),
    _react2.default.createElement(_reduxForm.Field, { name: 'position', component: _TextField2.default, type: 'text', label: 'Position' }),
    _react2.default.createElement(_reduxForm.Field, { name: 'href', component: _TextField2.default, type: 'text', label: 'Link' }),
    _react2.default.createElement(_reduxForm.Field, { name: 'icon', component: _TextField2.default, type: 'text', label: 'Icon' }),
    _react2.default.createElement(
      'div',
      { className: 'form__footer' },
      _react2.default.createElement(_index.RaisedButton, { type: 'submit', label: 'Save', disabled: pristine || submitting, style: { marginRight: '10px' } }),
      _react2.default.createElement(_index.FlatButton, { type: 'button', label: 'Cancel', onClick: reset, disabled: pristine || submitting })
    )
  );
};
NavigationForm.propTypes = {
  handleSubmit: _react.PropTypes.func.isRequired,
  reset: _react.PropTypes.func,
  submitting: _react.PropTypes.bool,
  fields: _react.PropTypes.object,
  pristine: _react.PropTypes.bool
};
NavigationForm = (0, _reduxForm.reduxForm)({
  form: 'navigationForm'
})(NavigationForm);

exports.default = NavigationForm;

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(61);

var _Link2 = _interopRequireDefault(_Link);

var _dateFns = __webpack_require__(59);

var _dateFns2 = _interopRequireDefault(_dateFns);

var _index = __webpack_require__(5);

var _index2 = __webpack_require__(7);

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleListItem = function ArticleListItem(props) {
  function handlePublishClick() {
    var postId = props.article.id;
    var postStatus = 'draft';
    props.handleArticlePublishClick(postId, postStatus);
  }
  function handleDraftClick() {
    var postId = props.article.id;
    var postStatus = 'published';
    props.handleArticleDraftClick(postId, postStatus);
  }
  var formattedDate = _dateFns2.default.format(props.created_at, 'MM/DD/YYYY');
  var publishedIcon = _react2.default.createElement(
    _index3.default,
    { onClick: handlePublishClick },
    ' visibility'
  );
  var draftIcon = _react2.default.createElement(
    _index3.default,
    { onClick: handleDraftClick },
    'visibility_off'
  );
  return _react2.default.createElement(
    _index4.TableRow,
    null,
    _react2.default.createElement(
      _index4.TableColumn,
      null,
      props.article.title
    ),
    _react2.default.createElement(
      _index4.TableColumn,
      null,
      props.article.status === 'published' ? publishedIcon : draftIcon
    ),
    _react2.default.createElement(
      _index4.TableColumn,
      null,
      formattedDate
    ),
    _react2.default.createElement(
      _index4.TableColumn,
      null,
      _react2.default.createElement(
        _Link2.default,
        { to: '/dashboard/articles/' + props.article.slug + '/preview' },
        _react2.default.createElement(
          _index.IconButton,
          null,
          _react2.default.createElement(
            _index3.default,
            null,
            'airplay'
          )
        )
      ),
      _react2.default.createElement(
        _Link2.default,
        { to: '/dashboard/articles/editor/' + props.slug },
        _react2.default.createElement(
          _index.IconButton,
          null,
          _react2.default.createElement(
            _index3.default,
            null,
            'edit'
          )
        )
      ),
      _react2.default.createElement(
        _index.IconButton,
        { name: 'delete-button' },
        _react2.default.createElement(
          _index3.default,
          null,
          'delete_forever'
        )
      )
    )
  );
};

ArticleListItem.propTypes = {
  article: _react2.default.PropTypes.object.isRequired,
  handleArticlePublishClick: _react2.default.PropTypes.func,
  handleArticleDraftClick: _react2.default.PropTypes.func,
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stardust = __webpack_require__(8);

var _atm = __webpack_require__(288);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Column = _stardust.Grid.Column;
var Row = _stardust.Grid.Row;


var FileView = function FileView(props) {
  return _react2.default.createElement(
    _stardust.Grid,
    null,
    _react2.default.createElement(
      Row,
      { columns: 4 },
      props.files.map(function (file, i) {
        return _react2.default.createElement(_atm2.default, { key: i, file: file, removeMedia: props.removeMedia });
      })
    )
  );
};

FileView.propTypes = {
  files: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.number.isRequired,
    filename: _react.PropTypes.string.isRequired,
    s3url: _react.PropTypes.string.isRequired
  }).isRequired).isRequired,
  removeMedia: _react.PropTypes.func
};

exports.default = FileView;

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FileView = __webpack_require__(294);

var _FileView2 = _interopRequireDefault(_FileView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FileView2.default;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reduxForm = __webpack_require__(18);

var _Radio = __webpack_require__(77);

var _Radio2 = _interopRequireDefault(_Radio);

var _Buttons = __webpack_require__(5);

var _RadioButtonGroup = __webpack_require__(45);

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

var _TextField = __webpack_require__(29);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeneralTab = function GeneralTab(props) {
  // eslint-disable-line
  var handleSubmit = props.handleSubmit;
  var pristine = props.pristine;
  var reset = props.reset;
  var submitting = props.submitting;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'form',
      { onSubmit: handleSubmit },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reduxForm.Field, { name: 'site_name', type: 'text', component: _TextField2.default, label: 'Website name' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reduxForm.Field, { name: 'site_url', type: 'text', component: _TextField2.default, label: 'Website URL' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reduxForm.Field, { name: 'site_description', type: 'text',
          component: _TextField2.default, multiLine: true, rows: 3,
          label: 'Website description'
        })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reduxForm.Field, { name: 'google_analytics', type: 'text', component: _TextField2.default, label: 'Google Analytics ID' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reduxForm.Field,
          { name: 'allow_registration', component: _RadioButtonGroup2.default },
          _react2.default.createElement(_Radio2.default, {
            value: 'true',
            label: 'Yes'
          }),
          _react2.default.createElement(_Radio2.default, {
            value: 'false',
            label: 'No'
          })
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Buttons.RaisedButton, { type: 'submit', secondary: true, label: 'Save', disabled: pristine || submitting }),
        _react2.default.createElement(_Buttons.RaisedButton, { label: 'Undo Changes', onClick: reset })
      )
    )
  );
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
/* 297 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GeneralTab = __webpack_require__(296);

var _GeneralTab2 = _interopRequireDefault(_GeneralTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _GeneralTab2.default;

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(37);

var _atm = __webpack_require__(290);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MembersList = function MembersList(props) {
  function handleToggle(userId) {
    props.toggleUser(userId);
  }
  return _react2.default.createElement(
    _index.DataTable,
    null,
    _react2.default.createElement(
      _index.TableHeader,
      null,
      _react2.default.createElement(
        _index.TableRow,
        null,
        _react2.default.createElement(
          _index.TableColumn,
          null,
          'ID'
        ),
        _react2.default.createElement(
          _index.TableColumn,
          null,
          'Name'
        ),
        _react2.default.createElement(
          _index.TableColumn,
          null,
          'Email'
        ),
        _react2.default.createElement(
          _index.TableColumn,
          null,
          'Role'
        ),
        _react2.default.createElement(
          _index.TableColumn,
          null,
          'Actions'
        )
      )
    ),
    _react2.default.createElement(
      _index.TableBody,
      null,
      props.users.map(function (user) {
        return _react2.default.createElement(_atm2.default, {
          user: user,
          key: user.id,
          handleToggle: handleToggle
        });
      })
    )
  );
};

exports.default = MembersList;


MembersList.propTypes = {
  users: _react2.default.PropTypes.array,
  toggleUser: _react2.default.PropTypes.func
};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MembersList = __webpack_require__(298);

var _MembersList2 = _interopRequireDefault(_MembersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MembersList2.default;

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _atm = __webpack_require__(87);

var _atm2 = _interopRequireDefault(_atm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationEditor = function NavigationEditor(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_atm2.default, { initialValues: props.initialValues, enableReinitialize: true, onSubmit: props.onFormSubmit })
  );
};

NavigationEditor.propTypes = {
  onFormSubmit: _react.PropTypes.func,
  initialValues: _react.PropTypes.shape({
    position: _react.PropTypes.number,
    href: _react.PropTypes.string,
    name: _react.PropTypes.string
  })
};
exports.default = NavigationEditor;

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NavigationEditor = __webpack_require__(300);

var _NavigationEditor2 = _interopRequireDefault(_NavigationEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _NavigationEditor2.default;

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Cards = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Widget = function Widget(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Cards.Card,
      null,
      _react2.default.createElement(_Cards.CardTitle, { title: props.name, subtitle: props.subtitle }),
      _react2.default.createElement(
        _Cards.CardText,
        null,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
      )
    )
  );
};

Widget.propTypes = {
  name: _react.PropTypes.string,
  subtitle: _react.PropTypes.string
};

exports.default = Widget;

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Widget = __webpack_require__(302);

var _Widget2 = _interopRequireDefault(_Widget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Widget2.default;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
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
    component: __webpack_require__(268).default,
    indexRoute: {
      component: __webpack_require__(270).default
    },
    childRoutes: [{
      path: 'articles',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 265)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'articles/editor/:slug',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 263)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'articles/new',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 278)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'media',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 272)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'content',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 267)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'navigation',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 276)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'pages',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 280)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'settings',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
          cb(null, __webpack_require__(282).default);
        }).bind(null, __webpack_require__));
      }
    }, {
      path: 'members',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 274)).then(loadModule(cb)).catch(errorLoading);
      }
    }]
  };
};

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redial = __webpack_require__(11);

var _index = __webpack_require__(14);

var _index2 = __webpack_require__(5);

var _profile = __webpack_require__(57);

var _index3 = __webpack_require__(39);

var _index4 = _interopRequireDefault(_index3);

var _inlineStyles = __webpack_require__(22);

var _inlineStyles2 = _interopRequireDefault(_inlineStyles);

var _index5 = __webpack_require__(47);

var _index6 = _interopRequireDefault(_index5);

var _ExpansionList = __webpack_require__(160);

var _ExpansionList2 = _interopRequireDefault(_ExpansionList);

var _ExpansionPanel = __webpack_require__(161);

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

var _index7 = __webpack_require__(65);

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyProfile = (_dec = (0, _redial.provideHooks)({
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _profile.getMyProfile)());
  }
}), _dec(_class = (0, _index8.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(MyProfile, _Component);

  function MyProfile() {
    _classCallCheck(this, MyProfile);

    return _possibleConstructorReturn(this, (MyProfile.__proto__ || Object.getPrototypeOf(MyProfile)).apply(this, arguments));
  }

  _createClass(MyProfile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_index4.default, null),
        _react2.default.createElement(
          'div',
          { className: 'grid' },
          _react2.default.createElement(
            'div',
            { className: 'grid__row' },
            _react2.default.createElement(
              _index.Card,
              { className: 'profile__card' },
              _react2.default.createElement(_index.CardTitle, {
                title: 'Editing ' + this.props.profile.private.display_name + '\'s profile ',
                subtitle: 'Click the panel for editing options',
                avatar: _react2.default.createElement(_index6.default, { src: this.props.profile.private.avatar_url })
              }),
              _react2.default.createElement(
                _index.CardText,
                null,
                _react2.default.createElement(
                  _ExpansionList2.default,
                  null,
                  _react2.default.createElement(_ExpansionPanel2.default, {
                    focused: true,
                    columnWidths: 10,
                    label: 'First name',
                    secondaryLabel: this.props.profile.private.first_name
                  }),
                  _react2.default.createElement(_ExpansionPanel2.default, {
                    focused: true,
                    columnWidths: 10,
                    label: 'Last name',
                    secondaryLabel: this.props.profile.private.last_name
                  }),
                  _react2.default.createElement(_ExpansionPanel2.default, {
                    focused: true,
                    columnWidths: 10,
                    label: 'Display name',
                    secondaryLabel: this.props.profile.private.display_name
                  }),
                  _react2.default.createElement(_ExpansionPanel2.default, {
                    focused: true,
                    columnWidths: 10,
                    label: 'Bio',
                    secondaryLabel: this.props.profile.private.bio
                  }),
                  _react2.default.createElement(_ExpansionPanel2.default, {
                    focused: true,
                    columnWidths: 10,
                    label: 'Location',
                    secondaryLabel: this.props.profile.private.location
                  }),
                  _react2.default.createElement(_ExpansionPanel2.default, {
                    focused: true,
                    columnWidths: 10,
                    label: 'Website',
                    secondaryLabel: this.props.profile.private.website
                  })
                )
              ),
              _react2.default.createElement(
                _index.CardActions,
                null,
                _react2.default.createElement(_index2.FlatButton, { label: 'Action1' }),
                _react2.default.createElement(_index2.FlatButton, { label: 'Action2' })
              )
            )
          )
        )
      );
    }
  }]);

  return MyProfile;
}(_react.Component), _class2.propTypes = {
  profile: _react.PropTypes.object.isRequired
}, _temp)) || _class) || _class);


var mapStateToProps = function mapStateToProps(state) {
  return {
    profile: state.profile,
    isLoading: state.profile.isLoading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MyProfile);

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MyProfile = __webpack_require__(305);

var _MyProfile2 = _interopRequireDefault(_MyProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MyProfile2.default;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(2);

var _MyProfile = __webpack_require__(306);

var _MyProfile2 = _interopRequireDefault(_MyProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    profile: state.profile,
    isLoading: state.profile.isLoading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_MyProfile2.default);

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redial = __webpack_require__(11);

var _index = __webpack_require__(14);

var _index2 = __webpack_require__(5);

var _profile = __webpack_require__(57);

var _index3 = __webpack_require__(39);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublicProfile = (_dec = (0, _redial.provideHooks)({
  fetch: function fetch(_ref) {
    var dispatch = _ref.dispatch;
    var id = _ref.params.id;
    return dispatch((0, _profile.getPublicProfile)(id));
  }
}), _dec(_class = function (_Component) {
  _inherits(PublicProfile, _Component);

  function PublicProfile() {
    _classCallCheck(this, PublicProfile);

    return _possibleConstructorReturn(this, (PublicProfile.__proto__ || Object.getPrototypeOf(PublicProfile)).apply(this, arguments));
  }

  _createClass(PublicProfile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: { backgroundColor: '#324A70', height: '110px', width: '100%' } },
          _react2.default.createElement(_index4.default, null)
        ),
        _react2.default.createElement(
          _index.Card,
          null,
          _react2.default.createElement(_index.CardTitle, {
            title: this.props.profile.public.display_name,
            subtitle: 'Subtitle',
            avatar: 'http://lorempixel.com/100/100/nature/'
          }),
          _react2.default.createElement(
            _index.CardText,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
          ),
          _react2.default.createElement(
            _index.CardActions,
            null,
            _react2.default.createElement(_index2.FlatButton, { label: 'Action1' }),
            _react2.default.createElement(_index2.FlatButton, { label: 'Action2' })
          )
        )
      );
    }
  }]);

  return PublicProfile;
}(_react.Component)) || _class);


PublicProfile.propTypes = {
  profile: _react.PropTypes.object.isRequired,
  getPublicProfile: _react.PropTypes.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    profile: state.profile,
    public: state.profile.public,
    isLoading: state.profile.isLoading
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getPublicProfile: _profile.getPublicProfile })(PublicProfile);

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PublicProfile = __webpack_require__(308);

var _PublicProfile2 = _interopRequireDefault(_PublicProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PublicProfile2.default;

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Profile = __webpack_require__(307);

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

var _index = __webpack_require__(304);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(234);

var _index4 = _interopRequireDefault(_index3);

var _Blog = __webpack_require__(259);

var _Blog2 = _interopRequireDefault(_Blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/imports-first */
// require.ensure polyfill
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

exports.default = function (store) {
  var connect = function connect(fn) {
    return function (nextState, replaceState) {
      return fn(store, nextState, replaceState);
    };
  };

  return {
    path: '/',
    component: __webpack_require__(261).default,
    indexRoute: {
      component: __webpack_require__(220).default
    },
    childRoutes: [(0, _index2.default)(store, connect), (0, _index4.default)(store, connect), (0, _Blog2.default)(store, connect), {
      path: 'about',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
          var AboutPage = __webpack_require__(82).default;

          cb(null, AboutPage);
        }).bind(null, __webpack_require__));
      }
    }, {
      path: 'profile',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 310)).then(loadModule(cb)).catch(errorLoading);
      }
    }, {
      path: 'profile/public/:id',
      getComponent: function getComponent(nextState, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 309)).then(loadModule(cb)).catch(errorLoading);
      }
    }]
  };
};

/***/ },
/* 312 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = clientMiddleware;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

        var rest = _objectWithoutProperties(action, ['promise', 'types']); // eslint-disable-line no-redeclare


        if (!promise) {
          return next(action);
        }

        var _types = _slicedToArray(types, 3);

        var REQUEST = _types[0];
        var SUCCESS = _types[1];
        var FAILURE = _types[2];

        next(_extends({}, rest, { type: REQUEST }));

        var _getState = getState();

        var auth = _getState.auth;


        client.setJwtToken(auth.token || null);

        var actionPromise = promise(client, dispatch);
        actionPromise.then(function (result) {
          return next(_extends({}, rest, { result: result, type: SUCCESS }));
        }, function (error) {
          return next(_extends({}, rest, { error: error, type: FAILURE }));
        }).catch(function (error) {
          console.error('MIDDLEWARE ERROR:', error);
          next(_extends({}, rest, { error: error, type: FAILURE }));
        });

        return actionPromise;
      };
    };
  };
}

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

if (true) {
  module.exports = __webpack_require__(314).default; // eslint-disable-line global-require
} else {
  module.exports = require('./createStore.dev').default; // eslint-disable-line global-require
}

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _redux = __webpack_require__(34);

var _reactRouterRedux = __webpack_require__(17);

var _reduxThunk = __webpack_require__(334);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _helpers = __webpack_require__(216);

var _clientMiddleware = __webpack_require__(312);

var _clientMiddleware2 = _interopRequireDefault(_clientMiddleware);

var _reducers = __webpack_require__(315);

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
function createStore(history, client, PRELOAD_STATE) {
  // Sync dispatched route actions to the history
  var reduxRouterMiddleware = (0, _reactRouterRedux.routerMiddleware)(history);
  var middleware = [(0, _clientMiddleware2.default)(client), _reduxThunk2.default, reduxRouterMiddleware];

  var finalCreateStore = _redux.applyMiddleware.apply(undefined, middleware)(_redux.createStore);

  var store = finalCreateStore(_reducers2.default, PRELOAD_STATE);

  return store;
}

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(34);

var _reactRouterRedux = __webpack_require__(17);

var _reduxForm = __webpack_require__(18);

var _reducer = __webpack_require__(243);

var _reducer2 = _interopRequireDefault(_reducer);

var _tag = __webpack_require__(89);

var _tag2 = _interopRequireDefault(_tag);

var _members = __webpack_require__(88);

var _members2 = _interopRequireDefault(_members);

var _media = __webpack_require__(56);

var _media2 = _interopRequireDefault(_media);

var _boldr = __webpack_require__(40);

var _boldr2 = _interopRequireDefault(_boldr);

var _notifications = __webpack_require__(13);

var _notifications2 = _interopRequireDefault(_notifications);

var _auth = __webpack_require__(26);

var _auth2 = _interopRequireDefault(_auth);

var _navigation = __webpack_require__(41);

var _navigation2 = _interopRequireDefault(_navigation);

var _post = __webpack_require__(27);

var _post2 = _interopRequireDefault(_post);

var _profile = __webpack_require__(57);

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  form: _reduxForm.reducer,

  notifications: _notifications2.default,
  auth: _auth2.default,
  boldr: _boldr2.default,
  posts: _post2.default,
  navigation: _navigation2.default,
  currentPost: _reducer2.default,
  members: _members2.default,
  media: _media2.default,
  tags: _tag2.default,
  profile: _profile2.default
});

exports.default = reducers;

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var convict = __webpack_require__(324);

var conf = convict({
  env: {
    doc: 'The environment that we\'re running in.',
    format: ['production', 'development', 'test', 'staging', 'travis'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env'
  },
  https: {
    doc: 'Determines whether or not the server will use https',
    format: Boolean,
    env: 'HTTPS_SERVER',
    default: false
  },
  dateFormat: {
    doc: 'The format by which dates will be displayed.',
    format: String,
    default: 'YYYY-MM-DD HH'
  },
  timezone: {
    doc: 'The default timezone.',
    format: String,
    default: '-07:00'
  },
  printStack: {
    doc: 'Indicates if the server should send the stack with the error.',
    format: Boolean,
    default: false
  },
  hmr: {
    doc: 'Hot Module Replacement / Webpack Dev Server port',
    format: 'port',
    default: 3001,
    env: 'HMR_PORT'
  },
  ssr: {
    host: {
      doc: 'The host address bound to the server-side rendering server.',
      format: String,
      default: 'localhost',
      env: 'SSR_HOST'
    },
    port: {
      doc: 'The port to bind for the SSR server.',
      format: 'port',
      default: 3000,
      env: 'SSR_PORT'
    }
  },
  api: {
    host: {
      doc: 'The host address bound to the API server.',
      format: String,
      default: 'localhost',
      env: 'API_HOST'
    },
    port: {
      doc: 'The port to bind for the API server.',
      format: 'port',
      default: 2121,
      env: 'API_PORT'
    },
    base: {
      doc: 'The url prefix for the api',
      format: String,
      default: '/api/v1',
      env: 'API_BASE'
    }
  },
  mail: {
    key: {
      doc: 'The Mailgun API key',
      format: String,
      default: 'key-',
      env: 'MG_API'
    },
    domain: {
      doc: 'The domain used for identification with Mailgun.',
      format: String,
      default: 'boldr.io',
      env: 'MG_DOMAIN'
    },
    from: {
      doc: 'The address for outgoing emails to use.',
      format: String,
      default: 'postmaster@boldr.io',
      env: 'MG_FROM'
    },
    baseUrl: {
      doc: 'The url base used for reset password requests.',
      format: String,
      default: 'http://localhost:3000/api/v1',
      env: 'MAIL_BASE'
    }
  },
  aws: {
    keyId: {
      doc: 'AWS access key id.',
      format: String,
      default: '',
      env: 'AWS_ACCESS_KEY_ID',
      arg: 'awsid'
    },
    keySecret: {
      doc: 'AWS secret access key',
      format: String,
      default: '',
      env: 'AWS_SECRET_ACCESS_KEY'
    },
    bucket: {
      doc: 'Path or bucket name for images to be served publicly.',
      format: String,
      default: 'boldrcms'
    },
    region: {
      doc: 'The region to use for S3 uploads',
      format: String,
      default: 'us-west-1',
      env: 'AWS_REGION'
    }
  },
  logger: {
    console: {
      doc: 'Stream server logs to the console',
      format: Boolean,
      default: true,
      env: 'LOG_CONSOLE'
    },
    files: {
      doc: 'Determines whether or not to store logs as a file.',
      format: Boolean,
      default: false,
      env: 'LOG_FILE'
    }
  },
  redis: {
    uri: {
      doc: 'The redis connection uri',
      format: String,
      default: 'redis://127.0.0.1:6379/1',
      env: 'REDIS_CONN_URI'
    },
    host: {
      doc: 'The Redis host address',
      format: String,
      default: '127.0.0.1',
      env: 'REDIS_HOST'
    },
    port: {
      doc: 'The port of the running Redis server.',
      format: 'port',
      default: 6379,
      env: 'REDIS_PORT'
    },
    database: {
      doc: 'The database number Redis uses.',
      format: Number,
      default: 1,
      env: 'REDIS_DB'
    }
  },
  db: {
    name: {
      doc: 'Name of the database.',
      format: String,
      default: 'boldr',
      env: 'POSTGRES_DB'
    },
    host: {
      doc: 'Host of the database.',
      format: String,
      default: 'localhost',
      env: 'POSTGRES_HOST'
    },
    dialect: {
      doc: 'The dialect of the database.',
      format: String,
      default: 'postgres'
    },
    port: {
      doc: 'Port used by the database.',
      format: 'port',
      default: 5432,
      env: 'POSTGRES_PORT'
    },
    user: {
      doc: 'Username for the database user.',
      format: String,
      default: 'postgres',
      env: 'POSTGRES_USER'
    },
    password: {
      doc: 'Password for the database.',
      format: String,
      default: 'password',
      env: 'POSTGRES_PASSWORD'
    },
    pool: {
      enabled: {
        doc: 'Indicates if sequelize should use a connection pool or not.',
        default: true,
        format: Boolean
      },
      maxConnections: {
        doc: 'If pool is enabled, max number of connections should be this.',
        default: 8,
        format: Number
      },
      minConnections: {
        doc: 'If pool is enabled, min number of connections should be this.',
        default: 0,
        format: Number
      },
      maxIdleTime: {
        doc: 'If pool is enabled, max idle time of a connection in milliseconds.',
        default: 10000,
        format: Number
      }
    }
  },
  session: {
    secret: {
      doc: 'Secret key for JWT and session storage.',
      format: String,
      default: 'boldrAPIk3y',
      env: 'SESSION_SECRET'
    },
    expiration: {
      doc: 'The expiration date of the JWT.',
      format: Number,
      default: 86400,
      env: 'SESSION_EXPIRATION'
    }
  },
  social: {
    facebook: {
      id: {
        doc: 'The client ID for oAuth authentication',
        format: String,
        default: 'secret',
        env: 'FACEBOOK_ID'
      },
      secret: {
        doc: 'The client secret for oAuth authentication',
        format: String,
        default: 'secret',
        env: 'FACEBOOK_SECRET'
      }
    }
  }
});

module.exports = conf;

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var path = __webpack_require__(60);
var fs = __webpack_require__(326);
var util = __webpack_require__(339);
var cp = __webpack_require__(322);
var paths = __webpack_require__(318);
var conf = __webpack_require__(316);
var rcPath = path.join(path.resolve(process.cwd()) + '/.boldrrc.json');

var debug = __webpack_require__(91)('boldr:configuration');

var config = conf.getProperties();
// Perform validation
conf.validate({ strict: true });

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

debug('does it exist? ', fileExists(rcPath));

if (!fileExists(rcPath)) {
  fs.writeFile(rcPath, JSON.stringify(config), function (error) {
    if (error) {
      console.error("write error:  " + error.message);
    } else {
      console.log("Successful Write to " + filePath);
    }
  });
}

debug('Configuration file loaded successfully.', config);

process.on('uncaughtException', function (error) {
  debug('Caught exception without specific handler: ' + util.inspect(error));
  debug(error.stack, 'error');
  process.exit(1);
});

module.exports = { conf: conf, paths: paths };

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

var path = __webpack_require__(60);

var ABS_ROOT = path.normalize(path.join(__dirname, '..'));

var paths = Object.freeze({
  ABS_ROOT: ABS_ROOT,
  NM_DIR: path.resolve(path.join(ABS_ROOT, 'node_modules')),
  STATIC_DIR: path.resolve(path.join(ABS_ROOT, 'cms', 'static')),
  CMS_SRC: path.resolve(path.join(ABS_ROOT, 'cms', 'src')),
  CMS_DIR: path.resolve(path.join(ABS_ROOT, 'cms')),
  CMS_DIST: path.resolve(path.join(ABS_ROOT, 'cms', 'dist')),
  API_SRC: path.resolve(path.join(ABS_ROOT, 'api', 'src')),
  API_DIR: path.resolve(path.join(ABS_ROOT, 'api')),
  ASSETS_DIR: path.resolve(path.join(ABS_ROOT, 'cms', 'static', 'assets'))
});

module.exports = paths;
/* WEBPACK VAR INJECTION */}.call(exports, "config"))

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(335);


/***/ },
/* 320 */
/***/ function(module, exports) {



/***/ },
/* 321 */
/***/ function(module, exports) {



/***/ },
/* 322 */
/***/ function(module, exports) {

module.exports = require("child_process");

/***/ },
/* 323 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 324 */
/***/ function(module, exports) {

module.exports = require("convict");

/***/ },
/* 325 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 326 */
/***/ function(module, exports) {

module.exports = require("fs-extra");

/***/ },
/* 327 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 328 */
/***/ function(module, exports) {

module.exports = require("http-proxy");

/***/ },
/* 329 */
/***/ function(module, exports) {

module.exports = require("lodash/isNumber");

/***/ },
/* 330 */
/***/ function(module, exports) {

module.exports = require("pretty-error");

/***/ },
/* 331 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/RouterContext");

/***/ },
/* 332 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/createMemoryHistory");

/***/ },
/* 333 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/match");

/***/ },
/* 334 */
/***/ function(module, exports) {

module.exports = require("redux-thunk");

/***/ },
/* 335 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 336 */
/***/ function(module, exports) {

module.exports = require("reselect");

/***/ },
/* 337 */
/***/ function(module, exports) {

module.exports = require("serialize-javascript");

/***/ },
/* 338 */
/***/ function(module, exports) {

module.exports = require("source-map-support/register");

/***/ },
/* 339 */
/***/ function(module, exports) {

module.exports = require("util");

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map