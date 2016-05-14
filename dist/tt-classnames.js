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
	    var prefix = options.prefix || null;
	    var classNames = [];

	    for (var i = 0; i < arguments.length; i++) {
	      var arg = arguments[i];

	      if (isString(arg) || isNumber(arg)) {
	        classNames.push(i === 0 ? normalizeArg(arg, rootName, prefix) : arg);
	      } else if (isObject(arg)) {
	        for (var key in arg) {
	          if (arg.hasOwnProperty(key) && arg[key]) {
	            classNames.push(i === 0 ? normalizeArg(key, rootName, prefix) : key);
	          }
	        }
	      } else if (isArray(arg)) {
	        for (var j = 0; j < arg.length; j++) {
	          var secArg = arg[j];

	          classNames.push(i === 0 ? normalizeArg(secArg, rootName, prefix) : secArg);
	        }
	      }
	    }

	    return classNames.join(' ');
	  };
	};

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

	function normalizeArg(arg, rootName, prefix) {
	  if (rootName !== null) {
	    arg = rootName + '__' + arg;
	  } else if (prefix !== null) {
	    arg = prefix + '-' + arg;
	  }

	  return arg;
	}

/***/ }
/******/ ])
});
;