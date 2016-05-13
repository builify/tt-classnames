(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TTClassNames"] = factory();
	else
		root["TTClassNames"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (options) {
	  return function () {
	    var rootName = options.name || null;
	    var classNames = [];

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var arg = _step.value;

	        if (isString(arg) || isNumber(arg)) {
	          classNames.push(arg);
	        } else if (isObject(arg)) {
	          for (var key in arg) {
	            arg.hasOwnProperty(key) && arg[key] && classNames.push(key);
	          }
	        } else if (isArray(arg)) {
	          var _classNames;

	          (_classNames = classNames).push.apply(_classNames, _toConsumableArray(arg));
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

	    classNames = classNames.map(function (cn) {
	      return rootName + '__' + cn;
	    });

	    return classNames.join(' ');
	  };
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var TYPE_ARRAY = '[object Array]';
	var TYPE_STRING = '[object String]';
	var TYPE_OBJECT = '[object Object]';
	var TYPE_NUMBER = '[object Number]';

	function getType(type) {
	  return Object.prototype.toString.call(type);
	}

	function isNumber(value) {
	  return !!(getType(value) === TYPE_NUMBER);
	}

	function isString(value) {
	  return !!(getType(value) === TYPE_STRING);
	}

	function isObject(value) {
	  return !!(getType(value) === TYPE_OBJECT);
	}

	function isArray(value) {
	  return !!(getType(value) === TYPE_ARRAY);
	}

/***/ }
/******/ ])
});
;