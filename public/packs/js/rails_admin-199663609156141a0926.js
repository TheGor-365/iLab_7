/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"rails_admin": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"vendors~actioncable":"vendors~actioncable"}[chunkId]||chunkId) + "-" + {"vendors~actioncable":"c6c256ac2bf94b91cd9f"}[chunkId] + ".chunk.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/rails_admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/rails_admin.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/rails_admin.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rails_admin_src_rails_admin_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rails_admin/src/rails_admin/base */ "./node_modules/rails_admin/src/rails_admin/base.js");
/* harmony import */ var _stylesheets_rails_admin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/rails_admin.scss */ "./app/javascript/stylesheets/rails_admin.scss");
/* harmony import */ var _stylesheets_rails_admin_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_rails_admin_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./app/javascript/stylesheets/rails_admin.scss":
/*!*****************************************************!*\
  !*** ./app/javascript/stylesheets/rails_admin.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./rails_admin.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/rails_admin.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-solid-900-efbd5d20.eot";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-solid-900-13de59f1.svg";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-solid-900-07c3313b.ttf";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-solid-900-c6ec0800.woff";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-solid-900-ada6e6df.woff2";

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js ***!
  \**************************************************************************/
/*! exports provided: getConsumer, setConsumer, createConsumer, subscribeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConsumer", function() { return getConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConsumer", function() { return setConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConsumer", function() { return createConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var consumer;
function getConsumer() {
  return _getConsumer.apply(this, arguments);
}

function _getConsumer() {
  _getConsumer = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", consumer || setConsumer(createConsumer().then(setConsumer)));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getConsumer.apply(this, arguments);
}

function setConsumer(newConsumer) {
  return consumer = newConsumer;
}
function createConsumer() {
  return _createConsumer.apply(this, arguments);
}

function _createConsumer() {
  _createConsumer = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var _yield$import, createConsumer;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __webpack_require__.e(/*! import() | actioncable */ "vendors~actioncable").then(__webpack_require__.bind(null, /*! @rails/actioncable/src */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/index.js"));

          case 2:
            _yield$import = _context2.sent;
            createConsumer = _yield$import.createConsumer;
            return _context2.abrupt("return", createConsumer());

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createConsumer.apply(this, arguments);
}

function subscribeTo(_x, _x2) {
  return _subscribeTo.apply(this, arguments);
}

function _subscribeTo() {
  _subscribeTo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(channel, mixin) {
    var _yield$getConsumer, subscriptions;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getConsumer();

          case 2:
            _yield$getConsumer = _context3.sent;
            subscriptions = _yield$getConsumer.subscriptions;
            return _context3.abrupt("return", subscriptions.create(channel, mixin));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _subscribeTo.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
/* harmony import */ var _cable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cable */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TurboCableStreamSourceElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TurboCableStreamSourceElement, _HTMLElement);

  var _super = _createSuper(TurboCableStreamSourceElement);

  function TurboCableStreamSourceElement() {
    _classCallCheck(this, TurboCableStreamSourceElement);

    return _super.apply(this, arguments);
  }

  _createClass(TurboCableStreamSourceElement, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object(_hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__["connectStreamSource"])(this);
                _context.next = 3;
                return Object(_cable__WEBPACK_IMPORTED_MODULE_2__["subscribeTo"])(this.channel, {
                  received: this.dispatchMessageEvent.bind(this)
                });

              case 3:
                this.subscription = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      Object(_hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__["disconnectStreamSource"])(this);
      if (this.subscription) this.subscription.unsubscribe();
    }
  }, {
    key: "dispatchMessageEvent",
    value: function dispatchMessageEvent(data) {
      var event = new MessageEvent("message", {
        data: data
      });
      return this.dispatchEvent(event);
    }
  }, {
    key: "channel",
    get: function get() {
      var channel = this.getAttribute("channel");
      var signed_stream_name = this.getAttribute("signed-stream-name");
      return {
        channel: channel,
        signed_stream_name: signed_stream_name
      };
    }
  }]);

  return TurboCableStreamSourceElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("turbo-cable-stream-source", TurboCableStreamSourceElement);

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/index.js ***!
  \**************************************************************************/
/*! exports provided: Turbo, cable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cable_stream_source_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cable_stream_source_element */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Turbo", function() { return _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _cable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cable */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "cable", function() { return _cable__WEBPACK_IMPORTED_MODULE_2__; });






/***/ }),

/***/ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js ***!
  \***************************************************************/
/*! exports provided: PageRenderer, PageSnapshot, clearCache, connectStreamSource, disconnectStreamSource, navigator, registerAdapter, renderStreamMessage, session, setConfirmMethod, setProgressBarDelay, start, visit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return PageRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSnapshot", function() { return PageSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCache", function() { return clearCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectStreamSource", function() { return connectStreamSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectStreamSource", function() { return disconnectStreamSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAdapter", function() { return registerAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderStreamMessage", function() { return renderStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "session", function() { return session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfirmMethod", function() { return setConfirmMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProgressBarDelay", function() { return setProgressBarDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject, _templateObject2;

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
Turbo 7.1.0
Copyright © 2021 Basecamp, LLC
 */
(function () {
  if (window.Reflect === undefined || window.customElements === undefined || window.customElements.polyfillWrapFlushCallback) {
    return;
  }

  var BuiltInHTMLElement = HTMLElement;
  var wrapperForTheName = {
    'HTMLElement': function HTMLElement() {
      return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
    }
  };
  window.HTMLElement = wrapperForTheName['HTMLElement'];
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2019 Javan Makhmali
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


(function (prototype) {
  if (typeof prototype.requestSubmit == "function") return;

  prototype.requestSubmit = function (submitter) {
    if (submitter) {
      validateSubmitter(submitter, this);
      submitter.click();
    } else {
      submitter = document.createElement("input");
      submitter.type = "submit";
      submitter.hidden = true;
      this.appendChild(submitter);
      submitter.click();
      this.removeChild(submitter);
    }
  };

  function validateSubmitter(submitter, form) {
    submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
    submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button");
    submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
  }

  function raise(errorConstructor, message, name) {
    throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name);
  }
})(HTMLFormElement.prototype);

var submittersByForm = new WeakMap();

function findSubmitterFromClickTarget(target) {
  var element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
  var candidate = element ? element.closest("input, button") : null;
  return (candidate === null || candidate === void 0 ? void 0 : candidate.type) == "submit" ? candidate : null;
}

function clickCaptured(event) {
  var submitter = findSubmitterFromClickTarget(event.target);

  if (submitter && submitter.form) {
    submittersByForm.set(submitter.form, submitter);
  }
}

(function () {
  if ("submitter" in Event.prototype) return;
  var prototype;

  if ("SubmitEvent" in window && /Apple Computer/.test(navigator.vendor)) {
    prototype = window.SubmitEvent.prototype;
  } else if ("SubmitEvent" in window) {
    return;
  } else {
    prototype = window.Event.prototype;
  }

  addEventListener("click", clickCaptured, true);
  Object.defineProperty(prototype, "submitter", {
    get: function get() {
      if (this.type == "submit" && this.target instanceof HTMLFormElement) {
        return submittersByForm.get(this.target);
      }
    }
  });
})();

var FrameLoadingStyle;

(function (FrameLoadingStyle) {
  FrameLoadingStyle["eager"] = "eager";
  FrameLoadingStyle["lazy"] = "lazy";
})(FrameLoadingStyle || (FrameLoadingStyle = {}));

var FrameElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FrameElement, _HTMLElement);

  var _super = _createSuper(FrameElement);

  function FrameElement() {
    var _this;

    _classCallCheck(this, FrameElement);

    _this = _super.call(this);
    _this.loaded = Promise.resolve();
    _this.delegate = new FrameElement.delegateConstructor(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FrameElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.delegate.connect();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.delegate.disconnect();
    }
  }, {
    key: "reload",
    value: function reload() {
      var src = this.src;
      this.src = null;
      this.src = src;
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name) {
      if (name == "loading") {
        this.delegate.loadingStyleChanged();
      } else if (name == "src") {
        this.delegate.sourceURLChanged();
      } else {
        this.delegate.disabledChanged();
      }
    }
  }, {
    key: "src",
    get: function get() {
      return this.getAttribute("src");
    },
    set: function set(value) {
      if (value) {
        this.setAttribute("src", value);
      } else {
        this.removeAttribute("src");
      }
    }
  }, {
    key: "loading",
    get: function get() {
      return frameLoadingStyleFromString(this.getAttribute("loading") || "");
    },
    set: function set(value) {
      if (value) {
        this.setAttribute("loading", value);
      } else {
        this.removeAttribute("loading");
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.hasAttribute("disabled");
    },
    set: function set(value) {
      if (value) {
        this.setAttribute("disabled", "");
      } else {
        this.removeAttribute("disabled");
      }
    }
  }, {
    key: "autoscroll",
    get: function get() {
      return this.hasAttribute("autoscroll");
    },
    set: function set(value) {
      if (value) {
        this.setAttribute("autoscroll", "");
      } else {
        this.removeAttribute("autoscroll");
      }
    }
  }, {
    key: "complete",
    get: function get() {
      return !this.delegate.isLoading;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.ownerDocument === document && !this.isPreview;
    }
  }, {
    key: "isPreview",
    get: function get() {
      var _a, _b;

      return (_b = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.documentElement) === null || _b === void 0 ? void 0 : _b.hasAttribute("data-turbo-preview");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["disabled", "loading", "src"];
    }
  }]);

  return FrameElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

function frameLoadingStyleFromString(style) {
  switch (style.toLowerCase()) {
    case "lazy":
      return FrameLoadingStyle.lazy;

    default:
      return FrameLoadingStyle.eager;
  }
}

function expandURL(locatable) {
  return new URL(locatable.toString(), document.baseURI);
}

function getAnchor(url) {
  var anchorMatch;

  if (url.hash) {
    return url.hash.slice(1);
  } else if (anchorMatch = url.href.match(/#(.*)$/)) {
    return anchorMatch[1];
  }
}

function getAction(form, submitter) {
  var action = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formaction")) || form.getAttribute("action") || form.action;
  return expandURL(action);
}

function getExtension(url) {
  return (getLastPathComponent(url).match(/\.[^.]*$/) || [])[0] || "";
}

function isHTML(url) {
  return !!getExtension(url).match(/^(?:|\.(?:htm|html|xhtml))$/);
}

function isPrefixedBy(baseURL, url) {
  var prefix = getPrefix(url);
  return baseURL.href === expandURL(prefix).href || baseURL.href.startsWith(prefix);
}

function locationIsVisitable(location, rootLocation) {
  return isPrefixedBy(location, rootLocation) && isHTML(location);
}

function getRequestURL(url) {
  var anchor = getAnchor(url);
  return anchor != null ? url.href.slice(0, -(anchor.length + 1)) : url.href;
}

function toCacheKey(url) {
  return getRequestURL(url);
}

function urlsAreEqual(left, right) {
  return expandURL(left).href == expandURL(right).href;
}

function getPathComponents(url) {
  return url.pathname.split("/").slice(1);
}

function getLastPathComponent(url) {
  return getPathComponents(url).slice(-1)[0];
}

function getPrefix(url) {
  return addTrailingSlash(url.origin + url.pathname);
}

function addTrailingSlash(value) {
  return value.endsWith("/") ? value : value + "/";
}

var FetchResponse = /*#__PURE__*/function () {
  function FetchResponse(response) {
    _classCallCheck(this, FetchResponse);

    this.response = response;
  }

  _createClass(FetchResponse, [{
    key: "succeeded",
    get: function get() {
      return this.response.ok;
    }
  }, {
    key: "failed",
    get: function get() {
      return !this.succeeded;
    }
  }, {
    key: "clientError",
    get: function get() {
      return this.statusCode >= 400 && this.statusCode <= 499;
    }
  }, {
    key: "serverError",
    get: function get() {
      return this.statusCode >= 500 && this.statusCode <= 599;
    }
  }, {
    key: "redirected",
    get: function get() {
      return this.response.redirected;
    }
  }, {
    key: "location",
    get: function get() {
      return expandURL(this.response.url);
    }
  }, {
    key: "isHTML",
    get: function get() {
      return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
    }
  }, {
    key: "statusCode",
    get: function get() {
      return this.response.status;
    }
  }, {
    key: "contentType",
    get: function get() {
      return this.header("Content-Type");
    }
  }, {
    key: "responseText",
    get: function get() {
      return this.response.clone().text();
    }
  }, {
    key: "responseHTML",
    get: function get() {
      if (this.isHTML) {
        return this.response.clone().text();
      } else {
        return Promise.resolve(undefined);
      }
    }
  }, {
    key: "header",
    value: function header(name) {
      return this.response.headers.get(name);
    }
  }]);

  return FetchResponse;
}();

function dispatch(eventName) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      target = _ref.target,
      cancelable = _ref.cancelable,
      detail = _ref.detail;

  var event = new CustomEvent(eventName, {
    cancelable: cancelable,
    bubbles: true,
    detail: detail
  });

  if (target && target.isConnected) {
    target.dispatchEvent(event);
  } else {
    document.documentElement.dispatchEvent(event);
  }

  return event;
}

function nextAnimationFrame() {
  return new Promise(function (resolve) {
    return requestAnimationFrame(function () {
      return resolve();
    });
  });
}

function nextEventLoopTick() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve();
    }, 0);
  });
}

function nextMicrotask() {
  return Promise.resolve();
}

function parseHTMLDocument() {
  var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return new DOMParser().parseFromString(html, "text/html");
}

function unindent(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var lines = interpolate(strings, values).replace(/^\n/, "").split("\n");
  var match = lines[0].match(/^\s+/);
  var indent = match ? match[0].length : 0;
  return lines.map(function (line) {
    return line.slice(indent);
  }).join("\n");
}

function interpolate(strings, values) {
  return strings.reduce(function (result, string, i) {
    var value = values[i] == undefined ? "" : values[i];
    return result + string + value;
  }, "");
}

function uuid() {
  return Array.apply(null, {
    length: 36
  }).map(function (_, i) {
    if (i == 8 || i == 13 || i == 18 || i == 23) {
      return "-";
    } else if (i == 14) {
      return "4";
    } else if (i == 19) {
      return (Math.floor(Math.random() * 4) + 8).toString(16);
    } else {
      return Math.floor(Math.random() * 15).toString(16);
    }
  }).join("");
}

function getAttribute(attributeName) {
  for (var _len2 = arguments.length, elements = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    elements[_key2 - 1] = arguments[_key2];
  }

  var _iterator = _createForOfIteratorHelper(elements.map(function (element) {
    return element === null || element === void 0 ? void 0 : element.getAttribute(attributeName);
  })),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      if (typeof value == "string") return value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
}

function markAsBusy() {
  for (var _len3 = arguments.length, elements = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    elements[_key3] = arguments[_key3];
  }

  for (var _i = 0, _elements = elements; _i < _elements.length; _i++) {
    var element = _elements[_i];

    if (element.localName == "turbo-frame") {
      element.setAttribute("busy", "");
    }

    element.setAttribute("aria-busy", "true");
  }
}

function clearBusyState() {
  for (var _len4 = arguments.length, elements = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    elements[_key4] = arguments[_key4];
  }

  for (var _i2 = 0, _elements2 = elements; _i2 < _elements2.length; _i2++) {
    var element = _elements2[_i2];

    if (element.localName == "turbo-frame") {
      element.removeAttribute("busy");
    }

    element.removeAttribute("aria-busy");
  }
}

var FetchMethod;

(function (FetchMethod) {
  FetchMethod[FetchMethod["get"] = 0] = "get";
  FetchMethod[FetchMethod["post"] = 1] = "post";
  FetchMethod[FetchMethod["put"] = 2] = "put";
  FetchMethod[FetchMethod["patch"] = 3] = "patch";
  FetchMethod[FetchMethod["delete"] = 4] = "delete";
})(FetchMethod || (FetchMethod = {}));

function fetchMethodFromString(method) {
  switch (method.toLowerCase()) {
    case "get":
      return FetchMethod.get;

    case "post":
      return FetchMethod.post;

    case "put":
      return FetchMethod.put;

    case "patch":
      return FetchMethod.patch;

    case "delete":
      return FetchMethod["delete"];
  }
}

var FetchRequest = /*#__PURE__*/function () {
  function FetchRequest(delegate, method, location) {
    var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new URLSearchParams();
    var target = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    _classCallCheck(this, FetchRequest);

    this.abortController = new AbortController();

    this.resolveRequestPromise = function (value) {};

    this.delegate = delegate;
    this.method = method;
    this.headers = this.defaultHeaders;
    this.body = body;
    this.url = location;
    this.target = target;
  }

  _createClass(FetchRequest, [{
    key: "location",
    get: function get() {
      return this.url;
    }
  }, {
    key: "params",
    get: function get() {
      return this.url.searchParams;
    }
  }, {
    key: "entries",
    get: function get() {
      return this.body ? Array.from(this.body.entries()) : [];
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.abortController.abort();
    }
  }, {
    key: "perform",
    value: function () {
      var _perform = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _a, _b, fetchOptions, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchOptions = this.fetchOptions;
                (_b = (_a = this.delegate).prepareHeadersForRequest) === null || _b === void 0 ? void 0 : _b.call(_a, this.headers, this);
                _context.next = 4;
                return this.allowRequestToBeIntercepted(fetchOptions);

              case 4:
                _context.prev = 4;
                this.delegate.requestStarted(this);
                _context.next = 8;
                return fetch(this.url.href, fetchOptions);

              case 8:
                response = _context.sent;
                _context.next = 11;
                return this.receive(response);

              case 11:
                return _context.abrupt("return", _context.sent);

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](4);

                if (!(_context.t0.name !== 'AbortError')) {
                  _context.next = 19;
                  break;
                }

                this.delegate.requestErrored(this, _context.t0);
                throw _context.t0;

              case 19:
                _context.prev = 19;
                this.delegate.requestFinished(this);
                return _context.finish(19);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 14, 19, 22]]);
      }));

      function perform() {
        return _perform.apply(this, arguments);
      }

      return perform;
    }()
  }, {
    key: "receive",
    value: function () {
      var _receive = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(response) {
        var fetchResponse, event;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fetchResponse = new FetchResponse(response);
                event = dispatch("turbo:before-fetch-response", {
                  cancelable: true,
                  detail: {
                    fetchResponse: fetchResponse
                  },
                  target: this.target
                });

                if (event.defaultPrevented) {
                  this.delegate.requestPreventedHandlingResponse(this, fetchResponse);
                } else if (fetchResponse.succeeded) {
                  this.delegate.requestSucceededWithResponse(this, fetchResponse);
                } else {
                  this.delegate.requestFailedWithResponse(this, fetchResponse);
                }

                return _context2.abrupt("return", fetchResponse);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function receive(_x) {
        return _receive.apply(this, arguments);
      }

      return receive;
    }()
  }, {
    key: "fetchOptions",
    get: function get() {
      var _a;

      return {
        method: FetchMethod[this.method].toUpperCase(),
        credentials: "same-origin",
        headers: this.headers,
        redirect: "follow",
        body: this.isIdempotent ? null : this.body,
        signal: this.abortSignal,
        referrer: (_a = this.delegate.referrer) === null || _a === void 0 ? void 0 : _a.href
      };
    }
  }, {
    key: "defaultHeaders",
    get: function get() {
      return {
        "Accept": "text/html, application/xhtml+xml"
      };
    }
  }, {
    key: "isIdempotent",
    get: function get() {
      return this.method == FetchMethod.get;
    }
  }, {
    key: "abortSignal",
    get: function get() {
      return this.abortController.signal;
    }
  }, {
    key: "allowRequestToBeIntercepted",
    value: function () {
      var _allowRequestToBeIntercepted = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(fetchOptions) {
        var _this2 = this;

        var requestInterception, event;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                requestInterception = new Promise(function (resolve) {
                  return _this2.resolveRequestPromise = resolve;
                });
                event = dispatch("turbo:before-fetch-request", {
                  cancelable: true,
                  detail: {
                    fetchOptions: fetchOptions,
                    url: this.url,
                    resume: this.resolveRequestPromise
                  },
                  target: this.target
                });

                if (!event.defaultPrevented) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 5;
                return requestInterception;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function allowRequestToBeIntercepted(_x2) {
        return _allowRequestToBeIntercepted.apply(this, arguments);
      }

      return allowRequestToBeIntercepted;
    }()
  }]);

  return FetchRequest;
}();

var AppearanceObserver = /*#__PURE__*/function () {
  function AppearanceObserver(delegate, element) {
    var _this3 = this;

    _classCallCheck(this, AppearanceObserver);

    this.started = false;

    this.intersect = function (entries) {
      var lastEntry = entries.slice(-1)[0];

      if (lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.isIntersecting) {
        _this3.delegate.elementAppearedInViewport(_this3.element);
      }
    };

    this.delegate = delegate;
    this.element = element;
    this.intersectionObserver = new IntersectionObserver(this.intersect);
  }

  _createClass(AppearanceObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.intersectionObserver.observe(this.element);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        this.intersectionObserver.unobserve(this.element);
      }
    }
  }]);

  return AppearanceObserver;
}();

var StreamMessage = /*#__PURE__*/function () {
  function StreamMessage(html) {
    _classCallCheck(this, StreamMessage);

    this.templateElement = document.createElement("template");
    this.templateElement.innerHTML = html;
  }

  _createClass(StreamMessage, [{
    key: "fragment",
    get: function get() {
      var fragment = document.createDocumentFragment();

      var _iterator2 = _createForOfIteratorHelper(this.foreignElements),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          fragment.appendChild(document.importNode(element, true));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return fragment;
    }
  }, {
    key: "foreignElements",
    get: function get() {
      return this.templateChildren.reduce(function (streamElements, child) {
        if (child.tagName.toLowerCase() == "turbo-stream") {
          return [].concat(_toConsumableArray(streamElements), [child]);
        } else {
          return streamElements;
        }
      }, []);
    }
  }, {
    key: "templateChildren",
    get: function get() {
      return Array.from(this.templateElement.content.children);
    }
  }], [{
    key: "wrap",
    value: function wrap(message) {
      if (typeof message == "string") {
        return new this(message);
      } else {
        return message;
      }
    }
  }]);

  return StreamMessage;
}();

StreamMessage.contentType = "text/vnd.turbo-stream.html";
var FormSubmissionState;

(function (FormSubmissionState) {
  FormSubmissionState[FormSubmissionState["initialized"] = 0] = "initialized";
  FormSubmissionState[FormSubmissionState["requesting"] = 1] = "requesting";
  FormSubmissionState[FormSubmissionState["waiting"] = 2] = "waiting";
  FormSubmissionState[FormSubmissionState["receiving"] = 3] = "receiving";
  FormSubmissionState[FormSubmissionState["stopping"] = 4] = "stopping";
  FormSubmissionState[FormSubmissionState["stopped"] = 5] = "stopped";
})(FormSubmissionState || (FormSubmissionState = {}));

var FormEnctype;

(function (FormEnctype) {
  FormEnctype["urlEncoded"] = "application/x-www-form-urlencoded";
  FormEnctype["multipart"] = "multipart/form-data";
  FormEnctype["plain"] = "text/plain";
})(FormEnctype || (FormEnctype = {}));

function formEnctypeFromString(encoding) {
  switch (encoding.toLowerCase()) {
    case FormEnctype.multipart:
      return FormEnctype.multipart;

    case FormEnctype.plain:
      return FormEnctype.plain;

    default:
      return FormEnctype.urlEncoded;
  }
}

var FormSubmission = /*#__PURE__*/function () {
  function FormSubmission(delegate, formElement, submitter) {
    var mustRedirect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, FormSubmission);

    this.state = FormSubmissionState.initialized;
    this.delegate = delegate;
    this.formElement = formElement;
    this.submitter = submitter;
    this.formData = buildFormData(formElement, submitter);
    this.location = expandURL(this.action);

    if (this.method == FetchMethod.get) {
      mergeFormDataEntries(this.location, _toConsumableArray(this.body.entries()));
    }

    this.fetchRequest = new FetchRequest(this, this.method, this.location, this.body, this.formElement);
    this.mustRedirect = mustRedirect;
  }

  _createClass(FormSubmission, [{
    key: "method",
    get: function get() {
      var _a;

      var method = ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formmethod")) || this.formElement.getAttribute("method") || "";
      return fetchMethodFromString(method.toLowerCase()) || FetchMethod.get;
    }
  }, {
    key: "action",
    get: function get() {
      var _a;

      var formElementAction = typeof this.formElement.action === 'string' ? this.formElement.action : null;
      return ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formaction")) || this.formElement.getAttribute("action") || formElementAction || "";
    }
  }, {
    key: "body",
    get: function get() {
      if (this.enctype == FormEnctype.urlEncoded || this.method == FetchMethod.get) {
        return new URLSearchParams(this.stringFormData);
      } else {
        return this.formData;
      }
    }
  }, {
    key: "enctype",
    get: function get() {
      var _a;

      return formEnctypeFromString(((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formenctype")) || this.formElement.enctype);
    }
  }, {
    key: "isIdempotent",
    get: function get() {
      return this.fetchRequest.isIdempotent;
    }
  }, {
    key: "stringFormData",
    get: function get() {
      return _toConsumableArray(this.formData).reduce(function (entries, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            name = _ref3[0],
            value = _ref3[1];

        return entries.concat(typeof value == "string" ? [[name, value]] : []);
      }, []);
    }
  }, {
    key: "confirmationMessage",
    get: function get() {
      return this.formElement.getAttribute("data-turbo-confirm");
    }
  }, {
    key: "needsConfirmation",
    get: function get() {
      return this.confirmationMessage !== null;
    }
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _FormSubmissionState, initialized, requesting, answer;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _FormSubmissionState = FormSubmissionState, initialized = _FormSubmissionState.initialized, requesting = _FormSubmissionState.requesting;

                if (!this.needsConfirmation) {
                  _context4.next = 5;
                  break;
                }

                answer = FormSubmission.confirmMethod(this.confirmationMessage, this.formElement);

                if (answer) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return");

              case 5:
                if (!(this.state == initialized)) {
                  _context4.next = 8;
                  break;
                }

                this.state = requesting;
                return _context4.abrupt("return", this.fetchRequest.perform());

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      var _FormSubmissionState2 = FormSubmissionState,
          stopping = _FormSubmissionState2.stopping,
          stopped = _FormSubmissionState2.stopped;

      if (this.state != stopping && this.state != stopped) {
        this.state = stopping;
        this.fetchRequest.cancel();
        return true;
      }
    }
  }, {
    key: "prepareHeadersForRequest",
    value: function prepareHeadersForRequest(headers, request) {
      if (!request.isIdempotent) {
        var token = getCookieValue(getMetaContent("csrf-param")) || getMetaContent("csrf-token");

        if (token) {
          headers["X-CSRF-Token"] = token;
        }

        headers["Accept"] = [StreamMessage.contentType, headers["Accept"]].join(", ");
      }
    }
  }, {
    key: "requestStarted",
    value: function requestStarted(request) {
      var _a;

      this.state = FormSubmissionState.waiting;
      (_a = this.submitter) === null || _a === void 0 ? void 0 : _a.setAttribute("disabled", "");
      dispatch("turbo:submit-start", {
        target: this.formElement,
        detail: {
          formSubmission: this
        }
      });
      this.delegate.formSubmissionStarted(this);
    }
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(request, response) {
      this.result = {
        success: response.succeeded,
        fetchResponse: response
      };
    }
  }, {
    key: "requestSucceededWithResponse",
    value: function requestSucceededWithResponse(request, response) {
      if (response.clientError || response.serverError) {
        this.delegate.formSubmissionFailedWithResponse(this, response);
      } else if (this.requestMustRedirect(request) && responseSucceededWithoutRedirect(response)) {
        var error = new Error("Form responses must redirect to another location");
        this.delegate.formSubmissionErrored(this, error);
      } else {
        this.state = FormSubmissionState.receiving;
        this.result = {
          success: true,
          fetchResponse: response
        };
        this.delegate.formSubmissionSucceededWithResponse(this, response);
      }
    }
  }, {
    key: "requestFailedWithResponse",
    value: function requestFailedWithResponse(request, response) {
      this.result = {
        success: false,
        fetchResponse: response
      };
      this.delegate.formSubmissionFailedWithResponse(this, response);
    }
  }, {
    key: "requestErrored",
    value: function requestErrored(request, error) {
      this.result = {
        success: false,
        error: error
      };
      this.delegate.formSubmissionErrored(this, error);
    }
  }, {
    key: "requestFinished",
    value: function requestFinished(request) {
      var _a;

      this.state = FormSubmissionState.stopped;
      (_a = this.submitter) === null || _a === void 0 ? void 0 : _a.removeAttribute("disabled");
      dispatch("turbo:submit-end", {
        target: this.formElement,
        detail: Object.assign({
          formSubmission: this
        }, this.result)
      });
      this.delegate.formSubmissionFinished(this);
    }
  }, {
    key: "requestMustRedirect",
    value: function requestMustRedirect(request) {
      return !request.isIdempotent && this.mustRedirect;
    }
  }], [{
    key: "confirmMethod",
    value: function confirmMethod(message, element) {
      return confirm(message);
    }
  }]);

  return FormSubmission;
}();

function buildFormData(formElement, submitter) {
  var formData = new FormData(formElement);
  var name = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("name");
  var value = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("value");

  if (name && value != null && formData.get(name) != value) {
    formData.append(name, value);
  }

  return formData;
}

function getCookieValue(cookieName) {
  if (cookieName != null) {
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var cookie = cookies.find(function (cookie) {
      return cookie.startsWith(cookieName);
    });

    if (cookie) {
      var value = cookie.split("=").slice(1).join("=");
      return value ? decodeURIComponent(value) : undefined;
    }
  }
}

function getMetaContent(name) {
  var element = document.querySelector("meta[name=\"".concat(name, "\"]"));
  return element && element.content;
}

function responseSucceededWithoutRedirect(response) {
  return response.statusCode == 200 && !response.redirected;
}

function mergeFormDataEntries(url, entries) {
  var searchParams = new URLSearchParams();

  var _iterator3 = _createForOfIteratorHelper(entries),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _ref6 = _step3.value;

      var _ref5 = _slicedToArray(_ref6, 2);

      var name = _ref5[0];
      var value = _ref5[1];
      if (value instanceof File) continue;
      searchParams.append(name, value);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  url.search = searchParams.toString();
  return url;
}

var Snapshot = /*#__PURE__*/function () {
  function Snapshot(element) {
    _classCallCheck(this, Snapshot);

    this.element = element;
  }

  _createClass(Snapshot, [{
    key: "children",
    get: function get() {
      return _toConsumableArray(this.element.children);
    }
  }, {
    key: "hasAnchor",
    value: function hasAnchor(anchor) {
      return this.getElementForAnchor(anchor) != null;
    }
  }, {
    key: "getElementForAnchor",
    value: function getElementForAnchor(anchor) {
      return anchor ? this.element.querySelector("[id='".concat(anchor, "'], a[name='").concat(anchor, "']")) : null;
    }
  }, {
    key: "isConnected",
    get: function get() {
      return this.element.isConnected;
    }
  }, {
    key: "firstAutofocusableElement",
    get: function get() {
      return this.element.querySelector("[autofocus]");
    }
  }, {
    key: "permanentElements",
    get: function get() {
      return _toConsumableArray(this.element.querySelectorAll("[id][data-turbo-permanent]"));
    }
  }, {
    key: "getPermanentElementById",
    value: function getPermanentElementById(id) {
      return this.element.querySelector("#".concat(id, "[data-turbo-permanent]"));
    }
  }, {
    key: "getPermanentElementMapForSnapshot",
    value: function getPermanentElementMapForSnapshot(snapshot) {
      var permanentElementMap = {};

      var _iterator4 = _createForOfIteratorHelper(this.permanentElements),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var currentPermanentElement = _step4.value;
          var id = currentPermanentElement.id;
          var newPermanentElement = snapshot.getPermanentElementById(id);

          if (newPermanentElement) {
            permanentElementMap[id] = [currentPermanentElement, newPermanentElement];
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return permanentElementMap;
    }
  }]);

  return Snapshot;
}();

var FormInterceptor = /*#__PURE__*/function () {
  function FormInterceptor(delegate, element) {
    var _this4 = this;

    _classCallCheck(this, FormInterceptor);

    this.submitBubbled = function (event) {
      var form = event.target;

      if (!event.defaultPrevented && form instanceof HTMLFormElement && form.closest("turbo-frame, html") == _this4.element) {
        var submitter = event.submitter || undefined;
        var method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.method;

        if (method != "dialog" && _this4.delegate.shouldInterceptFormSubmission(form, submitter)) {
          event.preventDefault();
          event.stopImmediatePropagation();

          _this4.delegate.formSubmissionIntercepted(form, submitter);
        }
      }
    };

    this.delegate = delegate;
    this.element = element;
  }

  _createClass(FormInterceptor, [{
    key: "start",
    value: function start() {
      this.element.addEventListener("submit", this.submitBubbled);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.element.removeEventListener("submit", this.submitBubbled);
    }
  }]);

  return FormInterceptor;
}();

var View = /*#__PURE__*/function () {
  function View(delegate, element) {
    _classCallCheck(this, View);

    this.resolveRenderPromise = function (value) {};

    this.resolveInterceptionPromise = function (value) {};

    this.delegate = delegate;
    this.element = element;
  }

  _createClass(View, [{
    key: "scrollToAnchor",
    value: function scrollToAnchor(anchor) {
      var element = this.snapshot.getElementForAnchor(anchor);

      if (element) {
        this.scrollToElement(element);
        this.focusElement(element);
      } else {
        this.scrollToPosition({
          x: 0,
          y: 0
        });
      }
    }
  }, {
    key: "scrollToAnchorFromLocation",
    value: function scrollToAnchorFromLocation(location) {
      this.scrollToAnchor(getAnchor(location));
    }
  }, {
    key: "scrollToElement",
    value: function scrollToElement(element) {
      element.scrollIntoView();
    }
  }, {
    key: "focusElement",
    value: function focusElement(element) {
      if (element instanceof HTMLElement) {
        if (element.hasAttribute("tabindex")) {
          element.focus();
        } else {
          element.setAttribute("tabindex", "-1");
          element.focus();
          element.removeAttribute("tabindex");
        }
      }
    }
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition(_ref7) {
      var x = _ref7.x,
          y = _ref7.y;
      this.scrollRoot.scrollTo(x, y);
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      this.scrollToPosition({
        x: 0,
        y: 0
      });
    }
  }, {
    key: "scrollRoot",
    get: function get() {
      return window;
    }
  }, {
    key: "render",
    value: function () {
      var _render = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(renderer) {
        var _this5 = this;

        var isPreview, shouldRender, snapshot, renderInterception, immediateRender;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                isPreview = renderer.isPreview, shouldRender = renderer.shouldRender, snapshot = renderer.newSnapshot;

                if (!shouldRender) {
                  _context5.next = 22;
                  break;
                }

                _context5.prev = 2;
                this.renderPromise = new Promise(function (resolve) {
                  return _this5.resolveRenderPromise = resolve;
                });
                this.renderer = renderer;
                this.prepareToRenderSnapshot(renderer);
                renderInterception = new Promise(function (resolve) {
                  return _this5.resolveInterceptionPromise = resolve;
                });
                immediateRender = this.delegate.allowsImmediateRender(snapshot, this.resolveInterceptionPromise);

                if (immediateRender) {
                  _context5.next = 11;
                  break;
                }

                _context5.next = 11;
                return renderInterception;

              case 11:
                _context5.next = 13;
                return this.renderSnapshot(renderer);

              case 13:
                this.delegate.viewRenderedSnapshot(snapshot, isPreview);
                this.finishRenderingSnapshot(renderer);

              case 15:
                _context5.prev = 15;
                delete this.renderer;
                this.resolveRenderPromise(undefined);
                delete this.renderPromise;
                return _context5.finish(15);

              case 20:
                _context5.next = 23;
                break;

              case 22:
                this.invalidate();

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2,, 15, 20]]);
      }));

      function render(_x3) {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "invalidate",
    value: function invalidate() {
      this.delegate.viewInvalidated();
    }
  }, {
    key: "prepareToRenderSnapshot",
    value: function prepareToRenderSnapshot(renderer) {
      this.markAsPreview(renderer.isPreview);
      renderer.prepareToRender();
    }
  }, {
    key: "markAsPreview",
    value: function markAsPreview(isPreview) {
      if (isPreview) {
        this.element.setAttribute("data-turbo-preview", "");
      } else {
        this.element.removeAttribute("data-turbo-preview");
      }
    }
  }, {
    key: "renderSnapshot",
    value: function () {
      var _renderSnapshot = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(renderer) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return renderer.render();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function renderSnapshot(_x4) {
        return _renderSnapshot.apply(this, arguments);
      }

      return renderSnapshot;
    }()
  }, {
    key: "finishRenderingSnapshot",
    value: function finishRenderingSnapshot(renderer) {
      renderer.finishRendering();
    }
  }]);

  return View;
}();

var FrameView = /*#__PURE__*/function (_View) {
  _inherits(FrameView, _View);

  var _super2 = _createSuper(FrameView);

  function FrameView() {
    _classCallCheck(this, FrameView);

    return _super2.apply(this, arguments);
  }

  _createClass(FrameView, [{
    key: "invalidate",
    value: function invalidate() {
      this.element.innerHTML = "";
    }
  }, {
    key: "snapshot",
    get: function get() {
      return new Snapshot(this.element);
    }
  }]);

  return FrameView;
}(View);

var LinkInterceptor = /*#__PURE__*/function () {
  function LinkInterceptor(delegate, element) {
    var _this6 = this;

    _classCallCheck(this, LinkInterceptor);

    this.clickBubbled = function (event) {
      if (_this6.respondsToEventTarget(event.target)) {
        _this6.clickEvent = event;
      } else {
        delete _this6.clickEvent;
      }
    };

    this.linkClicked = function (event) {
      if (_this6.clickEvent && _this6.respondsToEventTarget(event.target) && event.target instanceof Element) {
        if (_this6.delegate.shouldInterceptLinkClick(event.target, event.detail.url)) {
          _this6.clickEvent.preventDefault();

          event.preventDefault();

          _this6.delegate.linkClickIntercepted(event.target, event.detail.url);
        }
      }

      delete _this6.clickEvent;
    };

    this.willVisit = function () {
      delete _this6.clickEvent;
    };

    this.delegate = delegate;
    this.element = element;
  }

  _createClass(LinkInterceptor, [{
    key: "start",
    value: function start() {
      this.element.addEventListener("click", this.clickBubbled);
      document.addEventListener("turbo:click", this.linkClicked);
      document.addEventListener("turbo:before-visit", this.willVisit);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.element.removeEventListener("click", this.clickBubbled);
      document.removeEventListener("turbo:click", this.linkClicked);
      document.removeEventListener("turbo:before-visit", this.willVisit);
    }
  }, {
    key: "respondsToEventTarget",
    value: function respondsToEventTarget(target) {
      var element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
      return element && element.closest("turbo-frame, html") == this.element;
    }
  }]);

  return LinkInterceptor;
}();

var Bardo = /*#__PURE__*/function () {
  function Bardo(permanentElementMap) {
    _classCallCheck(this, Bardo);

    this.permanentElementMap = permanentElementMap;
  }

  _createClass(Bardo, [{
    key: "enter",
    value: function enter() {
      for (var id in this.permanentElementMap) {
        var _this$permanentElemen = _slicedToArray(this.permanentElementMap[id], 2),
            newPermanentElement = _this$permanentElemen[1];

        this.replaceNewPermanentElementWithPlaceholder(newPermanentElement);
      }
    }
  }, {
    key: "leave",
    value: function leave() {
      for (var id in this.permanentElementMap) {
        var _this$permanentElemen2 = _slicedToArray(this.permanentElementMap[id], 1),
            currentPermanentElement = _this$permanentElemen2[0];

        this.replaceCurrentPermanentElementWithClone(currentPermanentElement);
        this.replacePlaceholderWithPermanentElement(currentPermanentElement);
      }
    }
  }, {
    key: "replaceNewPermanentElementWithPlaceholder",
    value: function replaceNewPermanentElementWithPlaceholder(permanentElement) {
      var placeholder = createPlaceholderForPermanentElement(permanentElement);
      permanentElement.replaceWith(placeholder);
    }
  }, {
    key: "replaceCurrentPermanentElementWithClone",
    value: function replaceCurrentPermanentElementWithClone(permanentElement) {
      var clone = permanentElement.cloneNode(true);
      permanentElement.replaceWith(clone);
    }
  }, {
    key: "replacePlaceholderWithPermanentElement",
    value: function replacePlaceholderWithPermanentElement(permanentElement) {
      var placeholder = this.getPlaceholderById(permanentElement.id);
      placeholder === null || placeholder === void 0 ? void 0 : placeholder.replaceWith(permanentElement);
    }
  }, {
    key: "getPlaceholderById",
    value: function getPlaceholderById(id) {
      return this.placeholders.find(function (element) {
        return element.content == id;
      });
    }
  }, {
    key: "placeholders",
    get: function get() {
      return _toConsumableArray(document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]"));
    }
  }], [{
    key: "preservingPermanentElements",
    value: function preservingPermanentElements(permanentElementMap, callback) {
      var bardo = new this(permanentElementMap);
      bardo.enter();
      callback();
      bardo.leave();
    }
  }]);

  return Bardo;
}();

function createPlaceholderForPermanentElement(permanentElement) {
  var element = document.createElement("meta");
  element.setAttribute("name", "turbo-permanent-placeholder");
  element.setAttribute("content", permanentElement.id);
  return element;
}

var Renderer = /*#__PURE__*/function () {
  function Renderer(currentSnapshot, newSnapshot, isPreview) {
    var _this7 = this;

    var willRender = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck(this, Renderer);

    this.currentSnapshot = currentSnapshot;
    this.newSnapshot = newSnapshot;
    this.isPreview = isPreview;
    this.willRender = willRender;
    this.promise = new Promise(function (resolve, reject) {
      return _this7.resolvingFunctions = {
        resolve: resolve,
        reject: reject
      };
    });
  }

  _createClass(Renderer, [{
    key: "shouldRender",
    get: function get() {
      return true;
    }
  }, {
    key: "prepareToRender",
    value: function prepareToRender() {
      return;
    }
  }, {
    key: "finishRendering",
    value: function finishRendering() {
      if (this.resolvingFunctions) {
        this.resolvingFunctions.resolve();
        delete this.resolvingFunctions;
      }
    }
  }, {
    key: "createScriptElement",
    value: function createScriptElement(element) {
      if (element.getAttribute("data-turbo-eval") == "false") {
        return element;
      } else {
        var createdScriptElement = document.createElement("script");

        if (this.cspNonce) {
          createdScriptElement.nonce = this.cspNonce;
        }

        createdScriptElement.textContent = element.textContent;
        createdScriptElement.async = false;
        copyElementAttributes(createdScriptElement, element);
        return createdScriptElement;
      }
    }
  }, {
    key: "preservingPermanentElements",
    value: function preservingPermanentElements(callback) {
      Bardo.preservingPermanentElements(this.permanentElementMap, callback);
    }
  }, {
    key: "focusFirstAutofocusableElement",
    value: function focusFirstAutofocusableElement() {
      var element = this.connectedSnapshot.firstAutofocusableElement;

      if (elementIsFocusable(element)) {
        element.focus();
      }
    }
  }, {
    key: "connectedSnapshot",
    get: function get() {
      return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot;
    }
  }, {
    key: "currentElement",
    get: function get() {
      return this.currentSnapshot.element;
    }
  }, {
    key: "newElement",
    get: function get() {
      return this.newSnapshot.element;
    }
  }, {
    key: "permanentElementMap",
    get: function get() {
      return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot);
    }
  }, {
    key: "cspNonce",
    get: function get() {
      var _a;

      return (_a = document.head.querySelector('meta[name="csp-nonce"]')) === null || _a === void 0 ? void 0 : _a.getAttribute("content");
    }
  }]);

  return Renderer;
}();

function copyElementAttributes(destinationElement, sourceElement) {
  for (var _i3 = 0, _arr2 = _toConsumableArray(sourceElement.attributes); _i3 < _arr2.length; _i3++) {
    var _ref9 = _arr2[_i3];
    var name = _ref9.name;
    var value = _ref9.value;
    destinationElement.setAttribute(name, value);
  }
}

function elementIsFocusable(element) {
  return element && typeof element.focus == "function";
}

var FrameRenderer = /*#__PURE__*/function (_Renderer) {
  _inherits(FrameRenderer, _Renderer);

  var _super3 = _createSuper(FrameRenderer);

  function FrameRenderer() {
    _classCallCheck(this, FrameRenderer);

    return _super3.apply(this, arguments);
  }

  _createClass(FrameRenderer, [{
    key: "shouldRender",
    get: function get() {
      return true;
    }
  }, {
    key: "render",
    value: function () {
      var _render2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _this8 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return nextAnimationFrame();

              case 2:
                this.preservingPermanentElements(function () {
                  _this8.loadFrameElement();
                });
                this.scrollFrameIntoView();
                _context7.next = 6;
                return nextAnimationFrame();

              case 6:
                this.focusFirstAutofocusableElement();
                _context7.next = 9;
                return nextAnimationFrame();

              case 9:
                this.activateScriptElements();

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function render() {
        return _render2.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "loadFrameElement",
    value: function loadFrameElement() {
      var _a;

      var destinationRange = document.createRange();
      destinationRange.selectNodeContents(this.currentElement);
      destinationRange.deleteContents();
      var frameElement = this.newElement;
      var sourceRange = (_a = frameElement.ownerDocument) === null || _a === void 0 ? void 0 : _a.createRange();

      if (sourceRange) {
        sourceRange.selectNodeContents(frameElement);
        this.currentElement.appendChild(sourceRange.extractContents());
      }
    }
  }, {
    key: "scrollFrameIntoView",
    value: function scrollFrameIntoView() {
      if (this.currentElement.autoscroll || this.newElement.autoscroll) {
        var element = this.currentElement.firstElementChild;
        var block = readScrollLogicalPosition(this.currentElement.getAttribute("data-autoscroll-block"), "end");

        if (element) {
          element.scrollIntoView({
            block: block
          });
          return true;
        }
      }

      return false;
    }
  }, {
    key: "activateScriptElements",
    value: function activateScriptElements() {
      var _iterator5 = _createForOfIteratorHelper(this.newScriptElements),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var inertScriptElement = _step5.value;
          var activatedScriptElement = this.createScriptElement(inertScriptElement);
          inertScriptElement.replaceWith(activatedScriptElement);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "newScriptElements",
    get: function get() {
      return this.currentElement.querySelectorAll("script");
    }
  }]);

  return FrameRenderer;
}(Renderer);

function readScrollLogicalPosition(value, defaultValue) {
  if (value == "end" || value == "start" || value == "center" || value == "nearest") {
    return value;
  } else {
    return defaultValue;
  }
}

var ProgressBar = /*#__PURE__*/function () {
  function ProgressBar() {
    var _this9 = this;

    _classCallCheck(this, ProgressBar);

    this.hiding = false;
    this.value = 0;
    this.visible = false;

    this.trickle = function () {
      _this9.setValue(_this9.value + Math.random() / 100);
    };

    this.stylesheetElement = this.createStylesheetElement();
    this.progressElement = this.createProgressElement();
    this.installStylesheetElement();
    this.setValue(0);
  }

  _createClass(ProgressBar, [{
    key: "show",
    value: function show() {
      if (!this.visible) {
        this.visible = true;
        this.installProgressElement();
        this.startTrickling();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this10 = this;

      if (this.visible && !this.hiding) {
        this.hiding = true;
        this.fadeProgressElement(function () {
          _this10.uninstallProgressElement();

          _this10.stopTrickling();

          _this10.visible = false;
          _this10.hiding = false;
        });
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
      this.refresh();
    }
  }, {
    key: "installStylesheetElement",
    value: function installStylesheetElement() {
      document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
    }
  }, {
    key: "installProgressElement",
    value: function installProgressElement() {
      this.progressElement.style.width = "0";
      this.progressElement.style.opacity = "1";
      document.documentElement.insertBefore(this.progressElement, document.body);
      this.refresh();
    }
  }, {
    key: "fadeProgressElement",
    value: function fadeProgressElement(callback) {
      this.progressElement.style.opacity = "0";
      setTimeout(callback, ProgressBar.animationDuration * 1.5);
    }
  }, {
    key: "uninstallProgressElement",
    value: function uninstallProgressElement() {
      if (this.progressElement.parentNode) {
        document.documentElement.removeChild(this.progressElement);
      }
    }
  }, {
    key: "startTrickling",
    value: function startTrickling() {
      if (!this.trickleInterval) {
        this.trickleInterval = window.setInterval(this.trickle, ProgressBar.animationDuration);
      }
    }
  }, {
    key: "stopTrickling",
    value: function stopTrickling() {
      window.clearInterval(this.trickleInterval);
      delete this.trickleInterval;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this11 = this;

      requestAnimationFrame(function () {
        _this11.progressElement.style.width = "".concat(10 + _this11.value * 90, "%");
      });
    }
  }, {
    key: "createStylesheetElement",
    value: function createStylesheetElement() {
      var element = document.createElement("style");
      element.type = "text/css";
      element.textContent = ProgressBar.defaultCSS;
      return element;
    }
  }, {
    key: "createProgressElement",
    value: function createProgressElement() {
      var element = document.createElement("div");
      element.className = "turbo-progress-bar";
      return element;
    }
  }], [{
    key: "defaultCSS",
    get: function get() {
      return unindent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      .turbo-progress-bar {\n        position: fixed;\n        display: block;\n        top: 0;\n        left: 0;\n        height: 3px;\n        background: #0076ff;\n        z-index: 9999;\n        transition:\n          width ", "ms ease-out,\n          opacity ", "ms ", "ms ease-in;\n        transform: translate3d(0, 0, 0);\n      }\n    "])), ProgressBar.animationDuration, ProgressBar.animationDuration / 2, ProgressBar.animationDuration / 2);
    }
  }]);

  return ProgressBar;
}();

ProgressBar.animationDuration = 300;

var HeadSnapshot = /*#__PURE__*/function (_Snapshot) {
  _inherits(HeadSnapshot, _Snapshot);

  var _super4 = _createSuper(HeadSnapshot);

  function HeadSnapshot() {
    var _this12;

    _classCallCheck(this, HeadSnapshot);

    _this12 = _super4.apply(this, arguments);
    _this12.detailsByOuterHTML = _this12.children.filter(function (element) {
      return !elementIsNoscript(element);
    }).map(function (element) {
      return elementWithoutNonce(element);
    }).reduce(function (result, element) {
      var outerHTML = element.outerHTML;
      var details = outerHTML in result ? result[outerHTML] : {
        type: elementType(element),
        tracked: elementIsTracked(element),
        elements: []
      };
      return Object.assign(Object.assign({}, result), _defineProperty({}, outerHTML, Object.assign(Object.assign({}, details), {
        elements: [].concat(_toConsumableArray(details.elements), [element])
      })));
    }, {});
    return _this12;
  }

  _createClass(HeadSnapshot, [{
    key: "trackedElementSignature",
    get: function get() {
      var _this13 = this;

      return Object.keys(this.detailsByOuterHTML).filter(function (outerHTML) {
        return _this13.detailsByOuterHTML[outerHTML].tracked;
      }).join("");
    }
  }, {
    key: "getScriptElementsNotInSnapshot",
    value: function getScriptElementsNotInSnapshot(snapshot) {
      return this.getElementsMatchingTypeNotInSnapshot("script", snapshot);
    }
  }, {
    key: "getStylesheetElementsNotInSnapshot",
    value: function getStylesheetElementsNotInSnapshot(snapshot) {
      return this.getElementsMatchingTypeNotInSnapshot("stylesheet", snapshot);
    }
  }, {
    key: "getElementsMatchingTypeNotInSnapshot",
    value: function getElementsMatchingTypeNotInSnapshot(matchedType, snapshot) {
      var _this14 = this;

      return Object.keys(this.detailsByOuterHTML).filter(function (outerHTML) {
        return !(outerHTML in snapshot.detailsByOuterHTML);
      }).map(function (outerHTML) {
        return _this14.detailsByOuterHTML[outerHTML];
      }).filter(function (_ref10) {
        var type = _ref10.type;
        return type == matchedType;
      }).map(function (_ref11) {
        var _ref11$elements = _slicedToArray(_ref11.elements, 1),
            element = _ref11$elements[0];

        return element;
      });
    }
  }, {
    key: "provisionalElements",
    get: function get() {
      var _this15 = this;

      return Object.keys(this.detailsByOuterHTML).reduce(function (result, outerHTML) {
        var _this15$detailsByOute = _this15.detailsByOuterHTML[outerHTML],
            type = _this15$detailsByOute.type,
            tracked = _this15$detailsByOute.tracked,
            elements = _this15$detailsByOute.elements;

        if (type == null && !tracked) {
          return [].concat(_toConsumableArray(result), _toConsumableArray(elements));
        } else if (elements.length > 1) {
          return [].concat(_toConsumableArray(result), _toConsumableArray(elements.slice(1)));
        } else {
          return result;
        }
      }, []);
    }
  }, {
    key: "getMetaValue",
    value: function getMetaValue(name) {
      var element = this.findMetaElementByName(name);
      return element ? element.getAttribute("content") : null;
    }
  }, {
    key: "findMetaElementByName",
    value: function findMetaElementByName(name) {
      var _this16 = this;

      return Object.keys(this.detailsByOuterHTML).reduce(function (result, outerHTML) {
        var _this16$detailsByOute = _slicedToArray(_this16.detailsByOuterHTML[outerHTML].elements, 1),
            element = _this16$detailsByOute[0];

        return elementIsMetaElementWithName(element, name) ? element : result;
      }, undefined);
    }
  }]);

  return HeadSnapshot;
}(Snapshot);

function elementType(element) {
  if (elementIsScript(element)) {
    return "script";
  } else if (elementIsStylesheet(element)) {
    return "stylesheet";
  }
}

function elementIsTracked(element) {
  return element.getAttribute("data-turbo-track") == "reload";
}

function elementIsScript(element) {
  var tagName = element.tagName.toLowerCase();
  return tagName == "script";
}

function elementIsNoscript(element) {
  var tagName = element.tagName.toLowerCase();
  return tagName == "noscript";
}

function elementIsStylesheet(element) {
  var tagName = element.tagName.toLowerCase();
  return tagName == "style" || tagName == "link" && element.getAttribute("rel") == "stylesheet";
}

function elementIsMetaElementWithName(element, name) {
  var tagName = element.tagName.toLowerCase();
  return tagName == "meta" && element.getAttribute("name") == name;
}

function elementWithoutNonce(element) {
  if (element.hasAttribute("nonce")) {
    element.setAttribute("nonce", "");
  }

  return element;
}

var PageSnapshot = /*#__PURE__*/function (_Snapshot2) {
  _inherits(PageSnapshot, _Snapshot2);

  var _super5 = _createSuper(PageSnapshot);

  function PageSnapshot(element, headSnapshot) {
    var _this17;

    _classCallCheck(this, PageSnapshot);

    _this17 = _super5.call(this, element);
    _this17.headSnapshot = headSnapshot;
    return _this17;
  }

  _createClass(PageSnapshot, [{
    key: "clone",
    value: function clone() {
      return new PageSnapshot(this.element.cloneNode(true), this.headSnapshot);
    }
  }, {
    key: "headElement",
    get: function get() {
      return this.headSnapshot.element;
    }
  }, {
    key: "rootLocation",
    get: function get() {
      var _a;

      var root = (_a = this.getSetting("root")) !== null && _a !== void 0 ? _a : "/";
      return expandURL(root);
    }
  }, {
    key: "cacheControlValue",
    get: function get() {
      return this.getSetting("cache-control");
    }
  }, {
    key: "isPreviewable",
    get: function get() {
      return this.cacheControlValue != "no-preview";
    }
  }, {
    key: "isCacheable",
    get: function get() {
      return this.cacheControlValue != "no-cache";
    }
  }, {
    key: "isVisitable",
    get: function get() {
      return this.getSetting("visit-control") != "reload";
    }
  }, {
    key: "getSetting",
    value: function getSetting(name) {
      return this.headSnapshot.getMetaValue("turbo-".concat(name));
    }
  }], [{
    key: "fromHTMLString",
    value: function fromHTMLString() {
      var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return this.fromDocument(parseHTMLDocument(html));
    }
  }, {
    key: "fromElement",
    value: function fromElement(element) {
      return this.fromDocument(element.ownerDocument);
    }
  }, {
    key: "fromDocument",
    value: function fromDocument(_ref12) {
      var head = _ref12.head,
          body = _ref12.body;
      return new this(body, new HeadSnapshot(head));
    }
  }]);

  return PageSnapshot;
}(Snapshot);

var TimingMetric;

(function (TimingMetric) {
  TimingMetric["visitStart"] = "visitStart";
  TimingMetric["requestStart"] = "requestStart";
  TimingMetric["requestEnd"] = "requestEnd";
  TimingMetric["visitEnd"] = "visitEnd";
})(TimingMetric || (TimingMetric = {}));

var VisitState;

(function (VisitState) {
  VisitState["initialized"] = "initialized";
  VisitState["started"] = "started";
  VisitState["canceled"] = "canceled";
  VisitState["failed"] = "failed";
  VisitState["completed"] = "completed";
})(VisitState || (VisitState = {}));

var defaultOptions = {
  action: "advance",
  historyChanged: false,
  visitCachedSnapshot: function visitCachedSnapshot() {},
  willRender: true
};
var SystemStatusCode;

(function (SystemStatusCode) {
  SystemStatusCode[SystemStatusCode["networkFailure"] = 0] = "networkFailure";
  SystemStatusCode[SystemStatusCode["timeoutFailure"] = -1] = "timeoutFailure";
  SystemStatusCode[SystemStatusCode["contentTypeMismatch"] = -2] = "contentTypeMismatch";
})(SystemStatusCode || (SystemStatusCode = {}));

var Visit = /*#__PURE__*/function () {
  function Visit(delegate, location, restorationIdentifier) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Visit);

    this.identifier = uuid();
    this.timingMetrics = {};
    this.followedRedirect = false;
    this.historyChanged = false;
    this.scrolled = false;
    this.snapshotCached = false;
    this.state = VisitState.initialized;
    this.delegate = delegate;
    this.location = location;
    this.restorationIdentifier = restorationIdentifier || uuid();

    var _Object$assign2 = Object.assign(Object.assign({}, defaultOptions), options),
        action = _Object$assign2.action,
        historyChanged = _Object$assign2.historyChanged,
        referrer = _Object$assign2.referrer,
        snapshotHTML = _Object$assign2.snapshotHTML,
        response = _Object$assign2.response,
        visitCachedSnapshot = _Object$assign2.visitCachedSnapshot,
        willRender = _Object$assign2.willRender;

    this.action = action;
    this.historyChanged = historyChanged;
    this.referrer = referrer;
    this.snapshotHTML = snapshotHTML;
    this.response = response;
    this.isSamePage = this.delegate.locationWithActionIsSamePage(this.location, this.action);
    this.visitCachedSnapshot = visitCachedSnapshot;
    this.willRender = willRender;
    this.scrolled = !willRender;
  }

  _createClass(Visit, [{
    key: "adapter",
    get: function get() {
      return this.delegate.adapter;
    }
  }, {
    key: "view",
    get: function get() {
      return this.delegate.view;
    }
  }, {
    key: "history",
    get: function get() {
      return this.delegate.history;
    }
  }, {
    key: "restorationData",
    get: function get() {
      return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
    }
  }, {
    key: "silent",
    get: function get() {
      return this.isSamePage;
    }
  }, {
    key: "start",
    value: function start() {
      if (this.state == VisitState.initialized) {
        this.recordTimingMetric(TimingMetric.visitStart);
        this.state = VisitState.started;
        this.adapter.visitStarted(this);
        this.delegate.visitStarted(this);
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.state == VisitState.started) {
        if (this.request) {
          this.request.cancel();
        }

        this.cancelRender();
        this.state = VisitState.canceled;
      }
    }
  }, {
    key: "complete",
    value: function complete() {
      if (this.state == VisitState.started) {
        this.recordTimingMetric(TimingMetric.visitEnd);
        this.state = VisitState.completed;
        this.adapter.visitCompleted(this);
        this.delegate.visitCompleted(this);
        this.followRedirect();
      }
    }
  }, {
    key: "fail",
    value: function fail() {
      if (this.state == VisitState.started) {
        this.state = VisitState.failed;
        this.adapter.visitFailed(this);
      }
    }
  }, {
    key: "changeHistory",
    value: function changeHistory() {
      var _a;

      if (!this.historyChanged) {
        var actionForHistory = this.location.href === ((_a = this.referrer) === null || _a === void 0 ? void 0 : _a.href) ? "replace" : this.action;
        var method = this.getHistoryMethodForAction(actionForHistory);
        this.history.update(method, this.location, this.restorationIdentifier);
        this.historyChanged = true;
      }
    }
  }, {
    key: "issueRequest",
    value: function issueRequest() {
      if (this.hasPreloadedResponse()) {
        this.simulateRequest();
      } else if (this.shouldIssueRequest() && !this.request) {
        this.request = new FetchRequest(this, FetchMethod.get, this.location);
        this.request.perform();
      }
    }
  }, {
    key: "simulateRequest",
    value: function simulateRequest() {
      if (this.response) {
        this.startRequest();
        this.recordResponse();
        this.finishRequest();
      }
    }
  }, {
    key: "startRequest",
    value: function startRequest() {
      this.recordTimingMetric(TimingMetric.requestStart);
      this.adapter.visitRequestStarted(this);
    }
  }, {
    key: "recordResponse",
    value: function recordResponse() {
      var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.response;
      this.response = response;

      if (response) {
        var statusCode = response.statusCode;

        if (isSuccessful(statusCode)) {
          this.adapter.visitRequestCompleted(this);
        } else {
          this.adapter.visitRequestFailedWithStatusCode(this, statusCode);
        }
      }
    }
  }, {
    key: "finishRequest",
    value: function finishRequest() {
      this.recordTimingMetric(TimingMetric.requestEnd);
      this.adapter.visitRequestFinished(this);
    }
  }, {
    key: "loadResponse",
    value: function loadResponse() {
      var _this18 = this;

      if (this.response) {
        var _this$response = this.response,
            statusCode = _this$response.statusCode,
            responseHTML = _this$response.responseHTML;
        this.render( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _this18.cacheSnapshot();

                  if (!_this18.view.renderPromise) {
                    _context8.next = 4;
                    break;
                  }

                  _context8.next = 4;
                  return _this18.view.renderPromise;

                case 4:
                  if (!(isSuccessful(statusCode) && responseHTML != null)) {
                    _context8.next = 11;
                    break;
                  }

                  _context8.next = 7;
                  return _this18.view.renderPage(PageSnapshot.fromHTMLString(responseHTML), false, _this18.willRender);

                case 7:
                  _this18.adapter.visitRendered(_this18);

                  _this18.complete();

                  _context8.next = 15;
                  break;

                case 11:
                  _context8.next = 13;
                  return _this18.view.renderError(PageSnapshot.fromHTMLString(responseHTML));

                case 13:
                  _this18.adapter.visitRendered(_this18);

                  _this18.fail();

                case 15:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        })));
      }
    }
  }, {
    key: "getCachedSnapshot",
    value: function getCachedSnapshot() {
      var snapshot = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();

      if (snapshot && (!getAnchor(this.location) || snapshot.hasAnchor(getAnchor(this.location)))) {
        if (this.action == "restore" || snapshot.isPreviewable) {
          return snapshot;
        }
      }
    }
  }, {
    key: "getPreloadedSnapshot",
    value: function getPreloadedSnapshot() {
      if (this.snapshotHTML) {
        return PageSnapshot.fromHTMLString(this.snapshotHTML);
      }
    }
  }, {
    key: "hasCachedSnapshot",
    value: function hasCachedSnapshot() {
      return this.getCachedSnapshot() != null;
    }
  }, {
    key: "loadCachedSnapshot",
    value: function loadCachedSnapshot() {
      var _this19 = this;

      var snapshot = this.getCachedSnapshot();

      if (snapshot) {
        var isPreview = this.shouldIssueRequest();
        this.render( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _this19.cacheSnapshot();

                  if (!_this19.isSamePage) {
                    _context9.next = 5;
                    break;
                  }

                  _this19.adapter.visitRendered(_this19);

                  _context9.next = 12;
                  break;

                case 5:
                  if (!_this19.view.renderPromise) {
                    _context9.next = 8;
                    break;
                  }

                  _context9.next = 8;
                  return _this19.view.renderPromise;

                case 8:
                  _context9.next = 10;
                  return _this19.view.renderPage(snapshot, isPreview, _this19.willRender);

                case 10:
                  _this19.adapter.visitRendered(_this19);

                  if (!isPreview) {
                    _this19.complete();
                  }

                case 12:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        })));
      }
    }
  }, {
    key: "followRedirect",
    value: function followRedirect() {
      var _a;

      if (this.redirectedToLocation && !this.followedRedirect && ((_a = this.response) === null || _a === void 0 ? void 0 : _a.redirected)) {
        this.adapter.visitProposedToLocation(this.redirectedToLocation, {
          action: 'replace',
          response: this.response
        });
        this.followedRedirect = true;
      }
    }
  }, {
    key: "goToSamePageAnchor",
    value: function goToSamePageAnchor() {
      var _this20 = this;

      if (this.isSamePage) {
        this.render( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _this20.cacheSnapshot();

                  _this20.adapter.visitRendered(_this20);

                case 2:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        })));
      }
    }
  }, {
    key: "requestStarted",
    value: function requestStarted() {
      this.startRequest();
    }
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(request, response) {}
  }, {
    key: "requestSucceededWithResponse",
    value: function () {
      var _requestSucceededWithResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(request, response) {
        var responseHTML, redirected, statusCode;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return response.responseHTML;

              case 2:
                responseHTML = _context11.sent;
                redirected = response.redirected, statusCode = response.statusCode;

                if (responseHTML == undefined) {
                  this.recordResponse({
                    statusCode: SystemStatusCode.contentTypeMismatch,
                    redirected: redirected
                  });
                } else {
                  this.redirectedToLocation = response.redirected ? response.location : undefined;
                  this.recordResponse({
                    statusCode: statusCode,
                    responseHTML: responseHTML,
                    redirected: redirected
                  });
                }

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function requestSucceededWithResponse(_x5, _x6) {
        return _requestSucceededWithResponse.apply(this, arguments);
      }

      return requestSucceededWithResponse;
    }()
  }, {
    key: "requestFailedWithResponse",
    value: function () {
      var _requestFailedWithResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(request, response) {
        var responseHTML, redirected, statusCode;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return response.responseHTML;

              case 2:
                responseHTML = _context12.sent;
                redirected = response.redirected, statusCode = response.statusCode;

                if (responseHTML == undefined) {
                  this.recordResponse({
                    statusCode: SystemStatusCode.contentTypeMismatch,
                    redirected: redirected
                  });
                } else {
                  this.recordResponse({
                    statusCode: statusCode,
                    responseHTML: responseHTML,
                    redirected: redirected
                  });
                }

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function requestFailedWithResponse(_x7, _x8) {
        return _requestFailedWithResponse.apply(this, arguments);
      }

      return requestFailedWithResponse;
    }()
  }, {
    key: "requestErrored",
    value: function requestErrored(request, error) {
      this.recordResponse({
        statusCode: SystemStatusCode.networkFailure,
        redirected: false
      });
    }
  }, {
    key: "requestFinished",
    value: function requestFinished() {
      this.finishRequest();
    }
  }, {
    key: "performScroll",
    value: function performScroll() {
      if (!this.scrolled) {
        if (this.action == "restore") {
          this.scrollToRestoredPosition() || this.scrollToAnchor() || this.view.scrollToTop();
        } else {
          this.scrollToAnchor() || this.view.scrollToTop();
        }

        if (this.isSamePage) {
          this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation, this.location);
        }

        this.scrolled = true;
      }
    }
  }, {
    key: "scrollToRestoredPosition",
    value: function scrollToRestoredPosition() {
      var scrollPosition = this.restorationData.scrollPosition;

      if (scrollPosition) {
        this.view.scrollToPosition(scrollPosition);
        return true;
      }
    }
  }, {
    key: "scrollToAnchor",
    value: function scrollToAnchor() {
      var anchor = getAnchor(this.location);

      if (anchor != null) {
        this.view.scrollToAnchor(anchor);
        return true;
      }
    }
  }, {
    key: "recordTimingMetric",
    value: function recordTimingMetric(metric) {
      this.timingMetrics[metric] = new Date().getTime();
    }
  }, {
    key: "getTimingMetrics",
    value: function getTimingMetrics() {
      return Object.assign({}, this.timingMetrics);
    }
  }, {
    key: "getHistoryMethodForAction",
    value: function getHistoryMethodForAction(action) {
      switch (action) {
        case "replace":
          return history.replaceState;

        case "advance":
        case "restore":
          return history.pushState;
      }
    }
  }, {
    key: "hasPreloadedResponse",
    value: function hasPreloadedResponse() {
      return _typeof(this.response) == "object";
    }
  }, {
    key: "shouldIssueRequest",
    value: function shouldIssueRequest() {
      if (this.isSamePage) {
        return false;
      } else if (this.action == "restore") {
        return !this.hasCachedSnapshot();
      } else {
        return this.willRender;
      }
    }
  }, {
    key: "cacheSnapshot",
    value: function cacheSnapshot() {
      var _this21 = this;

      if (!this.snapshotCached) {
        this.view.cacheSnapshot().then(function (snapshot) {
          return snapshot && _this21.visitCachedSnapshot(snapshot);
        });
        this.snapshotCached = true;
      }
    }
  }, {
    key: "render",
    value: function () {
      var _render3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(callback) {
        var _this22 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.cancelRender();
                _context13.next = 3;
                return new Promise(function (resolve) {
                  _this22.frame = requestAnimationFrame(function () {
                    return resolve();
                  });
                });

              case 3:
                _context13.next = 5;
                return callback();

              case 5:
                delete this.frame;
                this.performScroll();

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function render(_x9) {
        return _render3.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "cancelRender",
    value: function cancelRender() {
      if (this.frame) {
        cancelAnimationFrame(this.frame);
        delete this.frame;
      }
    }
  }]);

  return Visit;
}();

function isSuccessful(statusCode) {
  return statusCode >= 200 && statusCode < 300;
}

var BrowserAdapter = /*#__PURE__*/function () {
  function BrowserAdapter(session) {
    var _this23 = this;

    _classCallCheck(this, BrowserAdapter);

    this.progressBar = new ProgressBar();

    this.showProgressBar = function () {
      _this23.progressBar.show();
    };

    this.session = session;
  }

  _createClass(BrowserAdapter, [{
    key: "visitProposedToLocation",
    value: function visitProposedToLocation(location, options) {
      this.navigator.startVisit(location, uuid(), options);
    }
  }, {
    key: "visitStarted",
    value: function visitStarted(visit) {
      visit.loadCachedSnapshot();
      visit.issueRequest();
      visit.changeHistory();
      visit.goToSamePageAnchor();
    }
  }, {
    key: "visitRequestStarted",
    value: function visitRequestStarted(visit) {
      this.progressBar.setValue(0);

      if (visit.hasCachedSnapshot() || visit.action != "restore") {
        this.showVisitProgressBarAfterDelay();
      } else {
        this.showProgressBar();
      }
    }
  }, {
    key: "visitRequestCompleted",
    value: function visitRequestCompleted(visit) {
      visit.loadResponse();
    }
  }, {
    key: "visitRequestFailedWithStatusCode",
    value: function visitRequestFailedWithStatusCode(visit, statusCode) {
      switch (statusCode) {
        case SystemStatusCode.networkFailure:
        case SystemStatusCode.timeoutFailure:
        case SystemStatusCode.contentTypeMismatch:
          return this.reload();

        default:
          return visit.loadResponse();
      }
    }
  }, {
    key: "visitRequestFinished",
    value: function visitRequestFinished(visit) {
      this.progressBar.setValue(1);
      this.hideVisitProgressBar();
    }
  }, {
    key: "visitCompleted",
    value: function visitCompleted(visit) {}
  }, {
    key: "pageInvalidated",
    value: function pageInvalidated() {
      this.reload();
    }
  }, {
    key: "visitFailed",
    value: function visitFailed(visit) {}
  }, {
    key: "visitRendered",
    value: function visitRendered(visit) {}
  }, {
    key: "formSubmissionStarted",
    value: function formSubmissionStarted(formSubmission) {
      this.progressBar.setValue(0);
      this.showFormProgressBarAfterDelay();
    }
  }, {
    key: "formSubmissionFinished",
    value: function formSubmissionFinished(formSubmission) {
      this.progressBar.setValue(1);
      this.hideFormProgressBar();
    }
  }, {
    key: "showVisitProgressBarAfterDelay",
    value: function showVisitProgressBarAfterDelay() {
      this.visitProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
    }
  }, {
    key: "hideVisitProgressBar",
    value: function hideVisitProgressBar() {
      this.progressBar.hide();

      if (this.visitProgressBarTimeout != null) {
        window.clearTimeout(this.visitProgressBarTimeout);
        delete this.visitProgressBarTimeout;
      }
    }
  }, {
    key: "showFormProgressBarAfterDelay",
    value: function showFormProgressBarAfterDelay() {
      if (this.formProgressBarTimeout == null) {
        this.formProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
      }
    }
  }, {
    key: "hideFormProgressBar",
    value: function hideFormProgressBar() {
      this.progressBar.hide();

      if (this.formProgressBarTimeout != null) {
        window.clearTimeout(this.formProgressBarTimeout);
        delete this.formProgressBarTimeout;
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
  }, {
    key: "navigator",
    get: function get() {
      return this.session.navigator;
    }
  }]);

  return BrowserAdapter;
}();

var CacheObserver = /*#__PURE__*/function () {
  function CacheObserver() {
    _classCallCheck(this, CacheObserver);

    this.started = false;
  }

  _createClass(CacheObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        addEventListener("turbo:before-cache", this.removeStaleElements, false);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        removeEventListener("turbo:before-cache", this.removeStaleElements, false);
      }
    }
  }, {
    key: "removeStaleElements",
    value: function removeStaleElements() {
      var staleElements = _toConsumableArray(document.querySelectorAll('[data-turbo-cache="false"]'));

      var _iterator6 = _createForOfIteratorHelper(staleElements),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var element = _step6.value;
          element.remove();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }]);

  return CacheObserver;
}();

var FormSubmitObserver = /*#__PURE__*/function () {
  function FormSubmitObserver(delegate) {
    var _this24 = this;

    _classCallCheck(this, FormSubmitObserver);

    this.started = false;

    this.submitCaptured = function () {
      removeEventListener("submit", _this24.submitBubbled, false);
      addEventListener("submit", _this24.submitBubbled, false);
    };

    this.submitBubbled = function (event) {
      if (!event.defaultPrevented) {
        var form = event.target instanceof HTMLFormElement ? event.target : undefined;
        var submitter = event.submitter || undefined;

        if (form) {
          var method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.getAttribute("method");

          if (method != "dialog" && _this24.delegate.willSubmitForm(form, submitter)) {
            event.preventDefault();

            _this24.delegate.formSubmitted(form, submitter);
          }
        }
      }
    };

    this.delegate = delegate;
  }

  _createClass(FormSubmitObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("submit", this.submitCaptured, true);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("submit", this.submitCaptured, true);
        this.started = false;
      }
    }
  }]);

  return FormSubmitObserver;
}();

var FrameRedirector = /*#__PURE__*/function () {
  function FrameRedirector(element) {
    _classCallCheck(this, FrameRedirector);

    this.element = element;
    this.linkInterceptor = new LinkInterceptor(this, element);
    this.formInterceptor = new FormInterceptor(this, element);
  }

  _createClass(FrameRedirector, [{
    key: "start",
    value: function start() {
      this.linkInterceptor.start();
      this.formInterceptor.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.linkInterceptor.stop();
      this.formInterceptor.stop();
    }
  }, {
    key: "shouldInterceptLinkClick",
    value: function shouldInterceptLinkClick(element, url) {
      return this.shouldRedirect(element);
    }
  }, {
    key: "linkClickIntercepted",
    value: function linkClickIntercepted(element, url) {
      var frame = this.findFrameElement(element);

      if (frame) {
        frame.delegate.linkClickIntercepted(element, url);
      }
    }
  }, {
    key: "shouldInterceptFormSubmission",
    value: function shouldInterceptFormSubmission(element, submitter) {
      return this.shouldSubmit(element, submitter);
    }
  }, {
    key: "formSubmissionIntercepted",
    value: function formSubmissionIntercepted(element, submitter) {
      var frame = this.findFrameElement(element, submitter);

      if (frame) {
        frame.removeAttribute("reloadable");
        frame.delegate.formSubmissionIntercepted(element, submitter);
      }
    }
  }, {
    key: "shouldSubmit",
    value: function shouldSubmit(form, submitter) {
      var _a;

      var action = getAction(form, submitter);
      var meta = this.element.ownerDocument.querySelector("meta[name=\"turbo-root\"]");
      var rootLocation = expandURL((_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/");
      return this.shouldRedirect(form, submitter) && locationIsVisitable(action, rootLocation);
    }
  }, {
    key: "shouldRedirect",
    value: function shouldRedirect(element, submitter) {
      var frame = this.findFrameElement(element, submitter);
      return frame ? frame != element.closest("turbo-frame") : false;
    }
  }, {
    key: "findFrameElement",
    value: function findFrameElement(element, submitter) {
      var id = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("data-turbo-frame")) || element.getAttribute("data-turbo-frame");

      if (id && id != "_top") {
        var frame = this.element.querySelector("#".concat(id, ":not([disabled])"));

        if (frame instanceof FrameElement) {
          return frame;
        }
      }
    }
  }]);

  return FrameRedirector;
}();

var History = /*#__PURE__*/function () {
  function History(delegate) {
    var _this25 = this;

    _classCallCheck(this, History);

    this.restorationIdentifier = uuid();
    this.restorationData = {};
    this.started = false;
    this.pageLoaded = false;

    this.onPopState = function (event) {
      if (_this25.shouldHandlePopState()) {
        var _ref16 = event.state || {},
            turbo = _ref16.turbo;

        if (turbo) {
          _this25.location = new URL(window.location.href);
          var restorationIdentifier = turbo.restorationIdentifier;
          _this25.restorationIdentifier = restorationIdentifier;

          _this25.delegate.historyPoppedToLocationWithRestorationIdentifier(_this25.location, restorationIdentifier);
        }
      }
    };

    this.onPageLoad = /*#__PURE__*/function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return nextMicrotask();

              case 2:
                _this25.pageLoaded = true;

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      return function (_x10) {
        return _ref17.apply(this, arguments);
      };
    }();

    this.delegate = delegate;
  }

  _createClass(History, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("popstate", this.onPopState, false);
        addEventListener("load", this.onPageLoad, false);
        this.started = true;
        this.replace(new URL(window.location.href));
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("popstate", this.onPopState, false);
        removeEventListener("load", this.onPageLoad, false);
        this.started = false;
      }
    }
  }, {
    key: "push",
    value: function push(location, restorationIdentifier) {
      this.update(history.pushState, location, restorationIdentifier);
    }
  }, {
    key: "replace",
    value: function replace(location, restorationIdentifier) {
      this.update(history.replaceState, location, restorationIdentifier);
    }
  }, {
    key: "update",
    value: function update(method, location) {
      var restorationIdentifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : uuid();
      var state = {
        turbo: {
          restorationIdentifier: restorationIdentifier
        }
      };
      method.call(history, state, "", location.href);
      this.location = location;
      this.restorationIdentifier = restorationIdentifier;
    }
  }, {
    key: "getRestorationDataForIdentifier",
    value: function getRestorationDataForIdentifier(restorationIdentifier) {
      return this.restorationData[restorationIdentifier] || {};
    }
  }, {
    key: "updateRestorationData",
    value: function updateRestorationData(additionalData) {
      var restorationIdentifier = this.restorationIdentifier;
      var restorationData = this.restorationData[restorationIdentifier];
      this.restorationData[restorationIdentifier] = Object.assign(Object.assign({}, restorationData), additionalData);
    }
  }, {
    key: "assumeControlOfScrollRestoration",
    value: function assumeControlOfScrollRestoration() {
      var _a;

      if (!this.previousScrollRestoration) {
        this.previousScrollRestoration = (_a = history.scrollRestoration) !== null && _a !== void 0 ? _a : "auto";
        history.scrollRestoration = "manual";
      }
    }
  }, {
    key: "relinquishControlOfScrollRestoration",
    value: function relinquishControlOfScrollRestoration() {
      if (this.previousScrollRestoration) {
        history.scrollRestoration = this.previousScrollRestoration;
        delete this.previousScrollRestoration;
      }
    }
  }, {
    key: "shouldHandlePopState",
    value: function shouldHandlePopState() {
      return this.pageIsLoaded();
    }
  }, {
    key: "pageIsLoaded",
    value: function pageIsLoaded() {
      return this.pageLoaded || document.readyState == "complete";
    }
  }]);

  return History;
}();

var LinkClickObserver = /*#__PURE__*/function () {
  function LinkClickObserver(delegate) {
    var _this26 = this;

    _classCallCheck(this, LinkClickObserver);

    this.started = false;

    this.clickCaptured = function () {
      removeEventListener("click", _this26.clickBubbled, false);
      addEventListener("click", _this26.clickBubbled, false);
    };

    this.clickBubbled = function (event) {
      if (_this26.clickEventIsSignificant(event)) {
        var target = event.composedPath && event.composedPath()[0] || event.target;

        var link = _this26.findLinkFromClickTarget(target);

        if (link) {
          var _location = _this26.getLocationForLink(link);

          if (_this26.delegate.willFollowLinkToLocation(link, _location)) {
            event.preventDefault();

            _this26.delegate.followedLinkToLocation(link, _location);
          }
        }
      }
    };

    this.delegate = delegate;
  }

  _createClass(LinkClickObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("click", this.clickCaptured, true);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("click", this.clickCaptured, true);
        this.started = false;
      }
    }
  }, {
    key: "clickEventIsSignificant",
    value: function clickEventIsSignificant(event) {
      return !(event.target && event.target.isContentEditable || event.defaultPrevented || event.which > 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
    }
  }, {
    key: "findLinkFromClickTarget",
    value: function findLinkFromClickTarget(target) {
      if (target instanceof Element) {
        return target.closest("a[href]:not([target^=_]):not([download])");
      }
    }
  }, {
    key: "getLocationForLink",
    value: function getLocationForLink(link) {
      return expandURL(link.getAttribute("href") || "");
    }
  }]);

  return LinkClickObserver;
}();

function isAction(action) {
  return action == "advance" || action == "replace" || action == "restore";
}

var Navigator = /*#__PURE__*/function () {
  function Navigator(delegate) {
    _classCallCheck(this, Navigator);

    this.delegate = delegate;
  }

  _createClass(Navigator, [{
    key: "proposeVisit",
    value: function proposeVisit(location) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.delegate.allowsVisitingLocationWithAction(location, options.action)) {
        if (locationIsVisitable(location, this.view.snapshot.rootLocation)) {
          this.delegate.visitProposedToLocation(location, options);
        } else {
          window.location.href = location.toString();
        }
      }
    }
  }, {
    key: "startVisit",
    value: function startVisit(locatable, restorationIdentifier) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.stop();
      this.currentVisit = new Visit(this, expandURL(locatable), restorationIdentifier, Object.assign({
        referrer: this.location
      }, options));
      this.currentVisit.start();
    }
  }, {
    key: "submitForm",
    value: function submitForm(form, submitter) {
      this.stop();
      this.formSubmission = new FormSubmission(this, form, submitter, true);
      this.formSubmission.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.formSubmission) {
        this.formSubmission.stop();
        delete this.formSubmission;
      }

      if (this.currentVisit) {
        this.currentVisit.cancel();
        delete this.currentVisit;
      }
    }
  }, {
    key: "adapter",
    get: function get() {
      return this.delegate.adapter;
    }
  }, {
    key: "view",
    get: function get() {
      return this.delegate.view;
    }
  }, {
    key: "history",
    get: function get() {
      return this.delegate.history;
    }
  }, {
    key: "formSubmissionStarted",
    value: function formSubmissionStarted(formSubmission) {
      if (typeof this.adapter.formSubmissionStarted === 'function') {
        this.adapter.formSubmissionStarted(formSubmission);
      }
    }
  }, {
    key: "formSubmissionSucceededWithResponse",
    value: function () {
      var _formSubmissionSucceededWithResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(formSubmission, fetchResponse) {
        var responseHTML, statusCode, redirected, action, visitOptions;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!(formSubmission == this.formSubmission)) {
                  _context15.next = 5;
                  break;
                }

                _context15.next = 3;
                return fetchResponse.responseHTML;

              case 3:
                responseHTML = _context15.sent;

                if (responseHTML) {
                  if (formSubmission.method != FetchMethod.get) {
                    this.view.clearSnapshotCache();
                  }

                  statusCode = fetchResponse.statusCode, redirected = fetchResponse.redirected;
                  action = this.getActionForFormSubmission(formSubmission);
                  visitOptions = {
                    action: action,
                    response: {
                      statusCode: statusCode,
                      responseHTML: responseHTML,
                      redirected: redirected
                    }
                  };
                  this.proposeVisit(fetchResponse.location, visitOptions);
                }

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function formSubmissionSucceededWithResponse(_x11, _x12) {
        return _formSubmissionSucceededWithResponse.apply(this, arguments);
      }

      return formSubmissionSucceededWithResponse;
    }()
  }, {
    key: "formSubmissionFailedWithResponse",
    value: function () {
      var _formSubmissionFailedWithResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16(formSubmission, fetchResponse) {
        var responseHTML, snapshot;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return fetchResponse.responseHTML;

              case 2:
                responseHTML = _context16.sent;

                if (!responseHTML) {
                  _context16.next = 14;
                  break;
                }

                snapshot = PageSnapshot.fromHTMLString(responseHTML);

                if (!fetchResponse.serverError) {
                  _context16.next = 10;
                  break;
                }

                _context16.next = 8;
                return this.view.renderError(snapshot);

              case 8:
                _context16.next = 12;
                break;

              case 10:
                _context16.next = 12;
                return this.view.renderPage(snapshot);

              case 12:
                this.view.scrollToTop();
                this.view.clearSnapshotCache();

              case 14:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function formSubmissionFailedWithResponse(_x13, _x14) {
        return _formSubmissionFailedWithResponse.apply(this, arguments);
      }

      return formSubmissionFailedWithResponse;
    }()
  }, {
    key: "formSubmissionErrored",
    value: function formSubmissionErrored(formSubmission, error) {
      console.error(error);
    }
  }, {
    key: "formSubmissionFinished",
    value: function formSubmissionFinished(formSubmission) {
      if (typeof this.adapter.formSubmissionFinished === 'function') {
        this.adapter.formSubmissionFinished(formSubmission);
      }
    }
  }, {
    key: "visitStarted",
    value: function visitStarted(visit) {
      this.delegate.visitStarted(visit);
    }
  }, {
    key: "visitCompleted",
    value: function visitCompleted(visit) {
      this.delegate.visitCompleted(visit);
    }
  }, {
    key: "locationWithActionIsSamePage",
    value: function locationWithActionIsSamePage(location, action) {
      var anchor = getAnchor(location);
      var currentAnchor = getAnchor(this.view.lastRenderedLocation);
      var isRestorationToTop = action === 'restore' && typeof anchor === 'undefined';
      return action !== "replace" && getRequestURL(location) === getRequestURL(this.view.lastRenderedLocation) && (isRestorationToTop || anchor != null && anchor !== currentAnchor);
    }
  }, {
    key: "visitScrolledToSamePageLocation",
    value: function visitScrolledToSamePageLocation(oldURL, newURL) {
      this.delegate.visitScrolledToSamePageLocation(oldURL, newURL);
    }
  }, {
    key: "location",
    get: function get() {
      return this.history.location;
    }
  }, {
    key: "restorationIdentifier",
    get: function get() {
      return this.history.restorationIdentifier;
    }
  }, {
    key: "getActionForFormSubmission",
    value: function getActionForFormSubmission(formSubmission) {
      var formElement = formSubmission.formElement,
          submitter = formSubmission.submitter;
      var action = getAttribute("data-turbo-action", submitter, formElement);
      return isAction(action) ? action : "advance";
    }
  }]);

  return Navigator;
}();

var PageStage;

(function (PageStage) {
  PageStage[PageStage["initial"] = 0] = "initial";
  PageStage[PageStage["loading"] = 1] = "loading";
  PageStage[PageStage["interactive"] = 2] = "interactive";
  PageStage[PageStage["complete"] = 3] = "complete";
})(PageStage || (PageStage = {}));

var PageObserver = /*#__PURE__*/function () {
  function PageObserver(delegate) {
    var _this27 = this;

    _classCallCheck(this, PageObserver);

    this.stage = PageStage.initial;
    this.started = false;

    this.interpretReadyState = function () {
      var readyState = _this27.readyState;

      if (readyState == "interactive") {
        _this27.pageIsInteractive();
      } else if (readyState == "complete") {
        _this27.pageIsComplete();
      }
    };

    this.pageWillUnload = function () {
      _this27.delegate.pageWillUnload();
    };

    this.delegate = delegate;
  }

  _createClass(PageObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        if (this.stage == PageStage.initial) {
          this.stage = PageStage.loading;
        }

        document.addEventListener("readystatechange", this.interpretReadyState, false);
        addEventListener("pagehide", this.pageWillUnload, false);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        document.removeEventListener("readystatechange", this.interpretReadyState, false);
        removeEventListener("pagehide", this.pageWillUnload, false);
        this.started = false;
      }
    }
  }, {
    key: "pageIsInteractive",
    value: function pageIsInteractive() {
      if (this.stage == PageStage.loading) {
        this.stage = PageStage.interactive;
        this.delegate.pageBecameInteractive();
      }
    }
  }, {
    key: "pageIsComplete",
    value: function pageIsComplete() {
      this.pageIsInteractive();

      if (this.stage == PageStage.interactive) {
        this.stage = PageStage.complete;
        this.delegate.pageLoaded();
      }
    }
  }, {
    key: "readyState",
    get: function get() {
      return document.readyState;
    }
  }]);

  return PageObserver;
}();

var ScrollObserver = /*#__PURE__*/function () {
  function ScrollObserver(delegate) {
    var _this28 = this;

    _classCallCheck(this, ScrollObserver);

    this.started = false;

    this.onScroll = function () {
      _this28.updatePosition({
        x: window.pageXOffset,
        y: window.pageYOffset
      });
    };

    this.delegate = delegate;
  }

  _createClass(ScrollObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("scroll", this.onScroll, false);
        this.onScroll();
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("scroll", this.onScroll, false);
        this.started = false;
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(position) {
      this.delegate.scrollPositionChanged(position);
    }
  }]);

  return ScrollObserver;
}();

var StreamObserver = /*#__PURE__*/function () {
  function StreamObserver(delegate) {
    var _this29 = this;

    _classCallCheck(this, StreamObserver);

    this.sources = new Set();
    this.started = false;

    this.inspectFetchResponse = function (event) {
      var response = fetchResponseFromEvent(event);

      if (response && fetchResponseIsStream(response)) {
        event.preventDefault();

        _this29.receiveMessageResponse(response);
      }
    };

    this.receiveMessageEvent = function (event) {
      if (_this29.started && typeof event.data == "string") {
        _this29.receiveMessageHTML(event.data);
      }
    };

    this.delegate = delegate;
  }

  _createClass(StreamObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
      }
    }
  }, {
    key: "connectStreamSource",
    value: function connectStreamSource(source) {
      if (!this.streamSourceIsConnected(source)) {
        this.sources.add(source);
        source.addEventListener("message", this.receiveMessageEvent, false);
      }
    }
  }, {
    key: "disconnectStreamSource",
    value: function disconnectStreamSource(source) {
      if (this.streamSourceIsConnected(source)) {
        this.sources["delete"](source);
        source.removeEventListener("message", this.receiveMessageEvent, false);
      }
    }
  }, {
    key: "streamSourceIsConnected",
    value: function streamSourceIsConnected(source) {
      return this.sources.has(source);
    }
  }, {
    key: "receiveMessageResponse",
    value: function () {
      var _receiveMessageResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(response) {
        var html;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return response.responseHTML;

              case 2:
                html = _context17.sent;

                if (html) {
                  this.receiveMessageHTML(html);
                }

              case 4:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function receiveMessageResponse(_x15) {
        return _receiveMessageResponse.apply(this, arguments);
      }

      return receiveMessageResponse;
    }()
  }, {
    key: "receiveMessageHTML",
    value: function receiveMessageHTML(html) {
      this.delegate.receivedMessageFromStream(new StreamMessage(html));
    }
  }]);

  return StreamObserver;
}();

function fetchResponseFromEvent(event) {
  var _a;

  var fetchResponse = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.fetchResponse;

  if (fetchResponse instanceof FetchResponse) {
    return fetchResponse;
  }
}

function fetchResponseIsStream(response) {
  var _a;

  var contentType = (_a = response.contentType) !== null && _a !== void 0 ? _a : "";
  return contentType.startsWith(StreamMessage.contentType);
}

var ErrorRenderer = /*#__PURE__*/function (_Renderer2) {
  _inherits(ErrorRenderer, _Renderer2);

  var _super6 = _createSuper(ErrorRenderer);

  function ErrorRenderer() {
    _classCallCheck(this, ErrorRenderer);

    return _super6.apply(this, arguments);
  }

  _createClass(ErrorRenderer, [{
    key: "render",
    value: function () {
      var _render4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this.replaceHeadAndBody();
                this.activateScriptElements();

              case 2:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function render() {
        return _render4.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "replaceHeadAndBody",
    value: function replaceHeadAndBody() {
      var _document = document,
          documentElement = _document.documentElement,
          head = _document.head,
          body = _document.body;
      documentElement.replaceChild(this.newHead, head);
      documentElement.replaceChild(this.newElement, body);
    }
  }, {
    key: "activateScriptElements",
    value: function activateScriptElements() {
      var _iterator7 = _createForOfIteratorHelper(this.scriptElements),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var replaceableElement = _step7.value;
          var parentNode = replaceableElement.parentNode;

          if (parentNode) {
            var element = this.createScriptElement(replaceableElement);
            parentNode.replaceChild(element, replaceableElement);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "newHead",
    get: function get() {
      return this.newSnapshot.headSnapshot.element;
    }
  }, {
    key: "scriptElements",
    get: function get() {
      return _toConsumableArray(document.documentElement.querySelectorAll("script"));
    }
  }]);

  return ErrorRenderer;
}(Renderer);

var PageRenderer = /*#__PURE__*/function (_Renderer3) {
  _inherits(PageRenderer, _Renderer3);

  var _super7 = _createSuper(PageRenderer);

  function PageRenderer() {
    _classCallCheck(this, PageRenderer);

    return _super7.apply(this, arguments);
  }

  _createClass(PageRenderer, [{
    key: "shouldRender",
    get: function get() {
      return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
    }
  }, {
    key: "prepareToRender",
    value: function prepareToRender() {
      this.mergeHead();
    }
  }, {
    key: "render",
    value: function () {
      var _render5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (this.willRender) {
                  this.replaceBody();
                }

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function render() {
        return _render5.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "finishRendering",
    value: function finishRendering() {
      _get(_getPrototypeOf(PageRenderer.prototype), "finishRendering", this).call(this);

      if (!this.isPreview) {
        this.focusFirstAutofocusableElement();
      }
    }
  }, {
    key: "currentHeadSnapshot",
    get: function get() {
      return this.currentSnapshot.headSnapshot;
    }
  }, {
    key: "newHeadSnapshot",
    get: function get() {
      return this.newSnapshot.headSnapshot;
    }
  }, {
    key: "newElement",
    get: function get() {
      return this.newSnapshot.element;
    }
  }, {
    key: "mergeHead",
    value: function mergeHead() {
      this.copyNewHeadStylesheetElements();
      this.copyNewHeadScriptElements();
      this.removeCurrentHeadProvisionalElements();
      this.copyNewHeadProvisionalElements();
    }
  }, {
    key: "replaceBody",
    value: function replaceBody() {
      var _this30 = this;

      this.preservingPermanentElements(function () {
        _this30.activateNewBody();

        _this30.assignNewBody();
      });
    }
  }, {
    key: "trackedElementsAreIdentical",
    get: function get() {
      return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
    }
  }, {
    key: "copyNewHeadStylesheetElements",
    value: function copyNewHeadStylesheetElements() {
      var _iterator8 = _createForOfIteratorHelper(this.newHeadStylesheetElements),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var element = _step8.value;
          document.head.appendChild(element);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }, {
    key: "copyNewHeadScriptElements",
    value: function copyNewHeadScriptElements() {
      var _iterator9 = _createForOfIteratorHelper(this.newHeadScriptElements),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var element = _step9.value;
          document.head.appendChild(this.createScriptElement(element));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "removeCurrentHeadProvisionalElements",
    value: function removeCurrentHeadProvisionalElements() {
      var _iterator10 = _createForOfIteratorHelper(this.currentHeadProvisionalElements),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var element = _step10.value;
          document.head.removeChild(element);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
  }, {
    key: "copyNewHeadProvisionalElements",
    value: function copyNewHeadProvisionalElements() {
      var _iterator11 = _createForOfIteratorHelper(this.newHeadProvisionalElements),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var element = _step11.value;
          document.head.appendChild(element);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  }, {
    key: "activateNewBody",
    value: function activateNewBody() {
      document.adoptNode(this.newElement);
      this.activateNewBodyScriptElements();
    }
  }, {
    key: "activateNewBodyScriptElements",
    value: function activateNewBodyScriptElements() {
      var _iterator12 = _createForOfIteratorHelper(this.newBodyScriptElements),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var inertScriptElement = _step12.value;
          var activatedScriptElement = this.createScriptElement(inertScriptElement);
          inertScriptElement.replaceWith(activatedScriptElement);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
  }, {
    key: "assignNewBody",
    value: function assignNewBody() {
      if (document.body && this.newElement instanceof HTMLBodyElement) {
        document.body.replaceWith(this.newElement);
      } else {
        document.documentElement.appendChild(this.newElement);
      }
    }
  }, {
    key: "newHeadStylesheetElements",
    get: function get() {
      return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
    }
  }, {
    key: "newHeadScriptElements",
    get: function get() {
      return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
    }
  }, {
    key: "currentHeadProvisionalElements",
    get: function get() {
      return this.currentHeadSnapshot.provisionalElements;
    }
  }, {
    key: "newHeadProvisionalElements",
    get: function get() {
      return this.newHeadSnapshot.provisionalElements;
    }
  }, {
    key: "newBodyScriptElements",
    get: function get() {
      return this.newElement.querySelectorAll("script");
    }
  }]);

  return PageRenderer;
}(Renderer);

var SnapshotCache = /*#__PURE__*/function () {
  function SnapshotCache(size) {
    _classCallCheck(this, SnapshotCache);

    this.keys = [];
    this.snapshots = {};
    this.size = size;
  }

  _createClass(SnapshotCache, [{
    key: "has",
    value: function has(location) {
      return toCacheKey(location) in this.snapshots;
    }
  }, {
    key: "get",
    value: function get(location) {
      if (this.has(location)) {
        var snapshot = this.read(location);
        this.touch(location);
        return snapshot;
      }
    }
  }, {
    key: "put",
    value: function put(location, snapshot) {
      this.write(location, snapshot);
      this.touch(location);
      return snapshot;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.snapshots = {};
    }
  }, {
    key: "read",
    value: function read(location) {
      return this.snapshots[toCacheKey(location)];
    }
  }, {
    key: "write",
    value: function write(location, snapshot) {
      this.snapshots[toCacheKey(location)] = snapshot;
    }
  }, {
    key: "touch",
    value: function touch(location) {
      var key = toCacheKey(location);
      var index = this.keys.indexOf(key);
      if (index > -1) this.keys.splice(index, 1);
      this.keys.unshift(key);
      this.trim();
    }
  }, {
    key: "trim",
    value: function trim() {
      var _iterator13 = _createForOfIteratorHelper(this.keys.splice(this.size)),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var key = _step13.value;
          delete this.snapshots[key];
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    }
  }]);

  return SnapshotCache;
}();

var PageView = /*#__PURE__*/function (_View2) {
  _inherits(PageView, _View2);

  var _super8 = _createSuper(PageView);

  function PageView() {
    var _this31;

    _classCallCheck(this, PageView);

    _this31 = _super8.apply(this, arguments);
    _this31.snapshotCache = new SnapshotCache(10);
    _this31.lastRenderedLocation = new URL(location.href);
    return _this31;
  }

  _createClass(PageView, [{
    key: "renderPage",
    value: function renderPage(snapshot) {
      var isPreview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var willRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var renderer = new PageRenderer(this.snapshot, snapshot, isPreview, willRender);
      return this.render(renderer);
    }
  }, {
    key: "renderError",
    value: function renderError(snapshot) {
      var renderer = new ErrorRenderer(this.snapshot, snapshot, false);
      return this.render(renderer);
    }
  }, {
    key: "clearSnapshotCache",
    value: function clearSnapshotCache() {
      this.snapshotCache.clear();
    }
  }, {
    key: "cacheSnapshot",
    value: function () {
      var _cacheSnapshot = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20() {
        var snapshot, _location2, cachedSnapshot;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (!this.shouldCacheSnapshot) {
                  _context20.next = 8;
                  break;
                }

                this.delegate.viewWillCacheSnapshot();
                snapshot = this.snapshot, _location2 = this.lastRenderedLocation;
                _context20.next = 5;
                return nextEventLoopTick();

              case 5:
                cachedSnapshot = snapshot.clone();
                this.snapshotCache.put(_location2, cachedSnapshot);
                return _context20.abrupt("return", cachedSnapshot);

              case 8:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function cacheSnapshot() {
        return _cacheSnapshot.apply(this, arguments);
      }

      return cacheSnapshot;
    }()
  }, {
    key: "getCachedSnapshotForLocation",
    value: function getCachedSnapshotForLocation(location) {
      return this.snapshotCache.get(location);
    }
  }, {
    key: "snapshot",
    get: function get() {
      return PageSnapshot.fromElement(this.element);
    }
  }, {
    key: "shouldCacheSnapshot",
    get: function get() {
      return this.snapshot.isCacheable;
    }
  }]);

  return PageView;
}(View);

var Session = /*#__PURE__*/function () {
  function Session() {
    _classCallCheck(this, Session);

    this.navigator = new Navigator(this);
    this.history = new History(this);
    this.view = new PageView(this, document.documentElement);
    this.adapter = new BrowserAdapter(this);
    this.pageObserver = new PageObserver(this);
    this.cacheObserver = new CacheObserver();
    this.linkClickObserver = new LinkClickObserver(this);
    this.formSubmitObserver = new FormSubmitObserver(this);
    this.scrollObserver = new ScrollObserver(this);
    this.streamObserver = new StreamObserver(this);
    this.frameRedirector = new FrameRedirector(document.documentElement);
    this.drive = true;
    this.enabled = true;
    this.progressBarDelay = 500;
    this.started = false;
  }

  _createClass(Session, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.pageObserver.start();
        this.cacheObserver.start();
        this.linkClickObserver.start();
        this.formSubmitObserver.start();
        this.scrollObserver.start();
        this.streamObserver.start();
        this.frameRedirector.start();
        this.history.start();
        this.started = true;
        this.enabled = true;
      }
    }
  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.pageObserver.stop();
        this.cacheObserver.stop();
        this.linkClickObserver.stop();
        this.formSubmitObserver.stop();
        this.scrollObserver.stop();
        this.streamObserver.stop();
        this.frameRedirector.stop();
        this.history.stop();
        this.started = false;
      }
    }
  }, {
    key: "registerAdapter",
    value: function registerAdapter(adapter) {
      this.adapter = adapter;
    }
  }, {
    key: "visit",
    value: function visit(location) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.navigator.proposeVisit(expandURL(location), options);
    }
  }, {
    key: "connectStreamSource",
    value: function connectStreamSource(source) {
      this.streamObserver.connectStreamSource(source);
    }
  }, {
    key: "disconnectStreamSource",
    value: function disconnectStreamSource(source) {
      this.streamObserver.disconnectStreamSource(source);
    }
  }, {
    key: "renderStreamMessage",
    value: function renderStreamMessage(message) {
      document.documentElement.appendChild(StreamMessage.wrap(message).fragment);
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      this.view.clearSnapshotCache();
    }
  }, {
    key: "setProgressBarDelay",
    value: function setProgressBarDelay(delay) {
      this.progressBarDelay = delay;
    }
  }, {
    key: "location",
    get: function get() {
      return this.history.location;
    }
  }, {
    key: "restorationIdentifier",
    get: function get() {
      return this.history.restorationIdentifier;
    }
  }, {
    key: "historyPoppedToLocationWithRestorationIdentifier",
    value: function historyPoppedToLocationWithRestorationIdentifier(location, restorationIdentifier) {
      if (this.enabled) {
        this.navigator.startVisit(location, restorationIdentifier, {
          action: "restore",
          historyChanged: true
        });
      } else {
        this.adapter.pageInvalidated();
      }
    }
  }, {
    key: "scrollPositionChanged",
    value: function scrollPositionChanged(position) {
      this.history.updateRestorationData({
        scrollPosition: position
      });
    }
  }, {
    key: "willFollowLinkToLocation",
    value: function willFollowLinkToLocation(link, location) {
      return this.elementDriveEnabled(link) && locationIsVisitable(location, this.snapshot.rootLocation) && this.applicationAllowsFollowingLinkToLocation(link, location);
    }
  }, {
    key: "followedLinkToLocation",
    value: function followedLinkToLocation(link, location) {
      var action = this.getActionForLink(link);
      this.convertLinkWithMethodClickToFormSubmission(link) || this.visit(location.href, {
        action: action
      });
    }
  }, {
    key: "convertLinkWithMethodClickToFormSubmission",
    value: function convertLinkWithMethodClickToFormSubmission(link) {
      var linkMethod = link.getAttribute("data-turbo-method");

      if (linkMethod) {
        var form = document.createElement("form");
        form.method = linkMethod;
        form.action = link.getAttribute("href") || "undefined";
        form.hidden = true;

        if (link.hasAttribute("data-turbo-confirm")) {
          form.setAttribute("data-turbo-confirm", link.getAttribute("data-turbo-confirm"));
        }

        var frame = this.getTargetFrameForLink(link);

        if (frame) {
          form.setAttribute("data-turbo-frame", frame);
          form.addEventListener("turbo:submit-start", function () {
            return form.remove();
          });
        } else {
          form.addEventListener("submit", function () {
            return form.remove();
          });
        }

        document.body.appendChild(form);
        return dispatch("submit", {
          cancelable: true,
          target: form
        });
      } else {
        return false;
      }
    }
  }, {
    key: "allowsVisitingLocationWithAction",
    value: function allowsVisitingLocationWithAction(location, action) {
      return this.locationWithActionIsSamePage(location, action) || this.applicationAllowsVisitingLocation(location);
    }
  }, {
    key: "visitProposedToLocation",
    value: function visitProposedToLocation(location, options) {
      extendURLWithDeprecatedProperties(location);
      this.adapter.visitProposedToLocation(location, options);
    }
  }, {
    key: "visitStarted",
    value: function visitStarted(visit) {
      extendURLWithDeprecatedProperties(visit.location);

      if (!visit.silent) {
        this.notifyApplicationAfterVisitingLocation(visit.location, visit.action);
      }
    }
  }, {
    key: "visitCompleted",
    value: function visitCompleted(visit) {
      this.notifyApplicationAfterPageLoad(visit.getTimingMetrics());
    }
  }, {
    key: "locationWithActionIsSamePage",
    value: function locationWithActionIsSamePage(location, action) {
      return this.navigator.locationWithActionIsSamePage(location, action);
    }
  }, {
    key: "visitScrolledToSamePageLocation",
    value: function visitScrolledToSamePageLocation(oldURL, newURL) {
      this.notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL);
    }
  }, {
    key: "willSubmitForm",
    value: function willSubmitForm(form, submitter) {
      var action = getAction(form, submitter);
      return this.elementDriveEnabled(form) && (!submitter || this.elementDriveEnabled(submitter)) && locationIsVisitable(expandURL(action), this.snapshot.rootLocation);
    }
  }, {
    key: "formSubmitted",
    value: function formSubmitted(form, submitter) {
      this.navigator.submitForm(form, submitter);
    }
  }, {
    key: "pageBecameInteractive",
    value: function pageBecameInteractive() {
      this.view.lastRenderedLocation = this.location;
      this.notifyApplicationAfterPageLoad();
    }
  }, {
    key: "pageLoaded",
    value: function pageLoaded() {
      this.history.assumeControlOfScrollRestoration();
    }
  }, {
    key: "pageWillUnload",
    value: function pageWillUnload() {
      this.history.relinquishControlOfScrollRestoration();
    }
  }, {
    key: "receivedMessageFromStream",
    value: function receivedMessageFromStream(message) {
      this.renderStreamMessage(message);
    }
  }, {
    key: "viewWillCacheSnapshot",
    value: function viewWillCacheSnapshot() {
      var _a;

      if (!((_a = this.navigator.currentVisit) === null || _a === void 0 ? void 0 : _a.silent)) {
        this.notifyApplicationBeforeCachingSnapshot();
      }
    }
  }, {
    key: "allowsImmediateRender",
    value: function allowsImmediateRender(_ref18, resume) {
      var element = _ref18.element;
      var event = this.notifyApplicationBeforeRender(element, resume);
      return !event.defaultPrevented;
    }
  }, {
    key: "viewRenderedSnapshot",
    value: function viewRenderedSnapshot(snapshot, isPreview) {
      this.view.lastRenderedLocation = this.history.location;
      this.notifyApplicationAfterRender();
    }
  }, {
    key: "viewInvalidated",
    value: function viewInvalidated() {
      this.adapter.pageInvalidated();
    }
  }, {
    key: "frameLoaded",
    value: function frameLoaded(frame) {
      this.notifyApplicationAfterFrameLoad(frame);
    }
  }, {
    key: "frameRendered",
    value: function frameRendered(fetchResponse, frame) {
      this.notifyApplicationAfterFrameRender(fetchResponse, frame);
    }
  }, {
    key: "applicationAllowsFollowingLinkToLocation",
    value: function applicationAllowsFollowingLinkToLocation(link, location) {
      var event = this.notifyApplicationAfterClickingLinkToLocation(link, location);
      return !event.defaultPrevented;
    }
  }, {
    key: "applicationAllowsVisitingLocation",
    value: function applicationAllowsVisitingLocation(location) {
      var event = this.notifyApplicationBeforeVisitingLocation(location);
      return !event.defaultPrevented;
    }
  }, {
    key: "notifyApplicationAfterClickingLinkToLocation",
    value: function notifyApplicationAfterClickingLinkToLocation(link, location) {
      return dispatch("turbo:click", {
        target: link,
        detail: {
          url: location.href
        },
        cancelable: true
      });
    }
  }, {
    key: "notifyApplicationBeforeVisitingLocation",
    value: function notifyApplicationBeforeVisitingLocation(location) {
      return dispatch("turbo:before-visit", {
        detail: {
          url: location.href
        },
        cancelable: true
      });
    }
  }, {
    key: "notifyApplicationAfterVisitingLocation",
    value: function notifyApplicationAfterVisitingLocation(location, action) {
      markAsBusy(document.documentElement);
      return dispatch("turbo:visit", {
        detail: {
          url: location.href,
          action: action
        }
      });
    }
  }, {
    key: "notifyApplicationBeforeCachingSnapshot",
    value: function notifyApplicationBeforeCachingSnapshot() {
      return dispatch("turbo:before-cache");
    }
  }, {
    key: "notifyApplicationBeforeRender",
    value: function notifyApplicationBeforeRender(newBody, resume) {
      return dispatch("turbo:before-render", {
        detail: {
          newBody: newBody,
          resume: resume
        },
        cancelable: true
      });
    }
  }, {
    key: "notifyApplicationAfterRender",
    value: function notifyApplicationAfterRender() {
      return dispatch("turbo:render");
    }
  }, {
    key: "notifyApplicationAfterPageLoad",
    value: function notifyApplicationAfterPageLoad() {
      var timing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      clearBusyState(document.documentElement);
      return dispatch("turbo:load", {
        detail: {
          url: this.location.href,
          timing: timing
        }
      });
    }
  }, {
    key: "notifyApplicationAfterVisitingSamePageLocation",
    value: function notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL) {
      dispatchEvent(new HashChangeEvent("hashchange", {
        oldURL: oldURL.toString(),
        newURL: newURL.toString()
      }));
    }
  }, {
    key: "notifyApplicationAfterFrameLoad",
    value: function notifyApplicationAfterFrameLoad(frame) {
      return dispatch("turbo:frame-load", {
        target: frame
      });
    }
  }, {
    key: "notifyApplicationAfterFrameRender",
    value: function notifyApplicationAfterFrameRender(fetchResponse, frame) {
      return dispatch("turbo:frame-render", {
        detail: {
          fetchResponse: fetchResponse
        },
        target: frame,
        cancelable: true
      });
    }
  }, {
    key: "elementDriveEnabled",
    value: function elementDriveEnabled(element) {
      var container = element === null || element === void 0 ? void 0 : element.closest("[data-turbo]");

      if (this.drive) {
        if (container) {
          return container.getAttribute("data-turbo") != "false";
        } else {
          return true;
        }
      } else {
        if (container) {
          return container.getAttribute("data-turbo") == "true";
        } else {
          return false;
        }
      }
    }
  }, {
    key: "getActionForLink",
    value: function getActionForLink(link) {
      var action = link.getAttribute("data-turbo-action");
      return isAction(action) ? action : "advance";
    }
  }, {
    key: "getTargetFrameForLink",
    value: function getTargetFrameForLink(link) {
      var frame = link.getAttribute("data-turbo-frame");

      if (frame) {
        return frame;
      } else {
        var container = link.closest("turbo-frame");

        if (container) {
          return container.id;
        }
      }
    }
  }, {
    key: "snapshot",
    get: function get() {
      return this.view.snapshot;
    }
  }]);

  return Session;
}();

function extendURLWithDeprecatedProperties(url) {
  Object.defineProperties(url, deprecatedLocationPropertyDescriptors);
}

var deprecatedLocationPropertyDescriptors = {
  absoluteURL: {
    get: function get() {
      return this.toString();
    }
  }
};
var session = new Session();
var navigator$1 = session.navigator;

function start() {
  session.start();
}

function registerAdapter(adapter) {
  session.registerAdapter(adapter);
}

function visit(location, options) {
  session.visit(location, options);
}

function connectStreamSource(source) {
  session.connectStreamSource(source);
}

function disconnectStreamSource(source) {
  session.disconnectStreamSource(source);
}

function renderStreamMessage(message) {
  session.renderStreamMessage(message);
}

function clearCache() {
  session.clearCache();
}

function setProgressBarDelay(delay) {
  session.setProgressBarDelay(delay);
}

function setConfirmMethod(confirmMethod) {
  FormSubmission.confirmMethod = confirmMethod;
}

var Turbo = /*#__PURE__*/Object.freeze({
  __proto__: null,
  navigator: navigator$1,
  session: session,
  PageRenderer: PageRenderer,
  PageSnapshot: PageSnapshot,
  start: start,
  registerAdapter: registerAdapter,
  visit: visit,
  connectStreamSource: connectStreamSource,
  disconnectStreamSource: disconnectStreamSource,
  renderStreamMessage: renderStreamMessage,
  clearCache: clearCache,
  setProgressBarDelay: setProgressBarDelay,
  setConfirmMethod: setConfirmMethod
});

var FrameController = /*#__PURE__*/function () {
  function FrameController(element) {
    _classCallCheck(this, FrameController);

    this.fetchResponseLoaded = function (fetchResponse) {};

    this.currentFetchRequest = null;

    this.resolveVisitPromise = function () {};

    this.connected = false;
    this.hasBeenLoaded = false;
    this.settingSourceURL = false;
    this.element = element;
    this.view = new FrameView(this, this.element);
    this.appearanceObserver = new AppearanceObserver(this, this.element);
    this.linkInterceptor = new LinkInterceptor(this, this.element);
    this.formInterceptor = new FormInterceptor(this, this.element);
  }

  _createClass(FrameController, [{
    key: "connect",
    value: function connect() {
      if (!this.connected) {
        this.connected = true;
        this.reloadable = false;

        if (this.loadingStyle == FrameLoadingStyle.lazy) {
          this.appearanceObserver.start();
        }

        this.linkInterceptor.start();
        this.formInterceptor.start();
        this.sourceURLChanged();
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.connected) {
        this.connected = false;
        this.appearanceObserver.stop();
        this.linkInterceptor.stop();
        this.formInterceptor.stop();
      }
    }
  }, {
    key: "disabledChanged",
    value: function disabledChanged() {
      if (this.loadingStyle == FrameLoadingStyle.eager) {
        this.loadSourceURL();
      }
    }
  }, {
    key: "sourceURLChanged",
    value: function sourceURLChanged() {
      if (this.loadingStyle == FrameLoadingStyle.eager || this.hasBeenLoaded) {
        this.loadSourceURL();
      }
    }
  }, {
    key: "loadingStyleChanged",
    value: function loadingStyleChanged() {
      if (this.loadingStyle == FrameLoadingStyle.lazy) {
        this.appearanceObserver.start();
      } else {
        this.appearanceObserver.stop();
        this.loadSourceURL();
      }
    }
  }, {
    key: "loadSourceURL",
    value: function () {
      var _loadSourceURL = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21() {
        var previousURL;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (!(!this.settingSourceURL && this.enabled && this.isActive && (this.reloadable || this.sourceURL != this.currentURL))) {
                  _context21.next = 16;
                  break;
                }

                previousURL = this.currentURL;
                this.currentURL = this.sourceURL;

                if (!this.sourceURL) {
                  _context21.next = 16;
                  break;
                }

                _context21.prev = 4;
                this.element.loaded = this.visit(expandURL(this.sourceURL));
                this.appearanceObserver.stop();
                _context21.next = 9;
                return this.element.loaded;

              case 9:
                this.hasBeenLoaded = true;
                _context21.next = 16;
                break;

              case 12:
                _context21.prev = 12;
                _context21.t0 = _context21["catch"](4);
                this.currentURL = previousURL;
                throw _context21.t0;

              case 16:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[4, 12]]);
      }));

      function loadSourceURL() {
        return _loadSourceURL.apply(this, arguments);
      }

      return loadSourceURL;
    }()
  }, {
    key: "loadResponse",
    value: function () {
      var _loadResponse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22(fetchResponse) {
        var html, _parseHTMLDocument, body, snapshot, renderer;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (fetchResponse.redirected || fetchResponse.succeeded && fetchResponse.isHTML) {
                  this.sourceURL = fetchResponse.response.url;
                }

                _context22.prev = 1;
                _context22.next = 4;
                return fetchResponse.responseHTML;

              case 4:
                html = _context22.sent;

                if (!html) {
                  _context22.next = 21;
                  break;
                }

                _parseHTMLDocument = parseHTMLDocument(html), body = _parseHTMLDocument.body;
                _context22.t0 = Snapshot;
                _context22.next = 10;
                return this.extractForeignFrameElement(body);

              case 10:
                _context22.t1 = _context22.sent;
                snapshot = new _context22.t0(_context22.t1);
                renderer = new FrameRenderer(this.view.snapshot, snapshot, false, false);

                if (!this.view.renderPromise) {
                  _context22.next = 16;
                  break;
                }

                _context22.next = 16;
                return this.view.renderPromise;

              case 16:
                _context22.next = 18;
                return this.view.render(renderer);

              case 18:
                session.frameRendered(fetchResponse, this.element);
                session.frameLoaded(this.element);
                this.fetchResponseLoaded(fetchResponse);

              case 21:
                _context22.next = 27;
                break;

              case 23:
                _context22.prev = 23;
                _context22.t2 = _context22["catch"](1);
                console.error(_context22.t2);
                this.view.invalidate();

              case 27:
                _context22.prev = 27;

                this.fetchResponseLoaded = function () {};

                return _context22.finish(27);

              case 30:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[1, 23, 27, 30]]);
      }));

      function loadResponse(_x16) {
        return _loadResponse.apply(this, arguments);
      }

      return loadResponse;
    }()
  }, {
    key: "elementAppearedInViewport",
    value: function elementAppearedInViewport(element) {
      this.loadSourceURL();
    }
  }, {
    key: "shouldInterceptLinkClick",
    value: function shouldInterceptLinkClick(element, url) {
      if (element.hasAttribute("data-turbo-method")) {
        return false;
      } else {
        return this.shouldInterceptNavigation(element);
      }
    }
  }, {
    key: "linkClickIntercepted",
    value: function linkClickIntercepted(element, url) {
      this.reloadable = true;
      this.navigateFrame(element, url);
    }
  }, {
    key: "shouldInterceptFormSubmission",
    value: function shouldInterceptFormSubmission(element, submitter) {
      return this.shouldInterceptNavigation(element, submitter);
    }
  }, {
    key: "formSubmissionIntercepted",
    value: function formSubmissionIntercepted(element, submitter) {
      if (this.formSubmission) {
        this.formSubmission.stop();
      }

      this.reloadable = false;
      this.formSubmission = new FormSubmission(this, element, submitter);
      var fetchRequest = this.formSubmission.fetchRequest;
      this.prepareHeadersForRequest(fetchRequest.headers, fetchRequest);
      this.formSubmission.start();
    }
  }, {
    key: "prepareHeadersForRequest",
    value: function prepareHeadersForRequest(headers, request) {
      headers["Turbo-Frame"] = this.id;
    }
  }, {
    key: "requestStarted",
    value: function requestStarted(request) {
      markAsBusy(this.element);
    }
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(request, response) {
      this.resolveVisitPromise();
    }
  }, {
    key: "requestSucceededWithResponse",
    value: function () {
      var _requestSucceededWithResponse2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23(request, response) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return this.loadResponse(response);

              case 2:
                this.resolveVisitPromise();

              case 3:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function requestSucceededWithResponse(_x17, _x18) {
        return _requestSucceededWithResponse2.apply(this, arguments);
      }

      return requestSucceededWithResponse;
    }()
  }, {
    key: "requestFailedWithResponse",
    value: function requestFailedWithResponse(request, response) {
      console.error(response);
      this.resolveVisitPromise();
    }
  }, {
    key: "requestErrored",
    value: function requestErrored(request, error) {
      console.error(error);
      this.resolveVisitPromise();
    }
  }, {
    key: "requestFinished",
    value: function requestFinished(request) {
      clearBusyState(this.element);
    }
  }, {
    key: "formSubmissionStarted",
    value: function formSubmissionStarted(_ref19) {
      var formElement = _ref19.formElement;
      markAsBusy(formElement, this.findFrameElement(formElement));
    }
  }, {
    key: "formSubmissionSucceededWithResponse",
    value: function formSubmissionSucceededWithResponse(formSubmission, response) {
      var frame = this.findFrameElement(formSubmission.formElement, formSubmission.submitter);
      this.proposeVisitIfNavigatedWithAction(frame, formSubmission.formElement, formSubmission.submitter);
      frame.delegate.loadResponse(response);
    }
  }, {
    key: "formSubmissionFailedWithResponse",
    value: function formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
      this.element.delegate.loadResponse(fetchResponse);
    }
  }, {
    key: "formSubmissionErrored",
    value: function formSubmissionErrored(formSubmission, error) {
      console.error(error);
    }
  }, {
    key: "formSubmissionFinished",
    value: function formSubmissionFinished(_ref20) {
      var formElement = _ref20.formElement;
      clearBusyState(formElement, this.findFrameElement(formElement));
    }
  }, {
    key: "allowsImmediateRender",
    value: function allowsImmediateRender(snapshot, resume) {
      return true;
    }
  }, {
    key: "viewRenderedSnapshot",
    value: function viewRenderedSnapshot(snapshot, isPreview) {}
  }, {
    key: "viewInvalidated",
    value: function viewInvalidated() {}
  }, {
    key: "visit",
    value: function () {
      var _visit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24(url) {
        var _this32 = this;

        var _a, request;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                request = new FetchRequest(this, FetchMethod.get, url, new URLSearchParams(), this.element);
                (_a = this.currentFetchRequest) === null || _a === void 0 ? void 0 : _a.cancel();
                this.currentFetchRequest = request;
                return _context24.abrupt("return", new Promise(function (resolve) {
                  _this32.resolveVisitPromise = function () {
                    _this32.resolveVisitPromise = function () {};

                    _this32.currentFetchRequest = null;
                    resolve();
                  };

                  request.perform();
                }));

              case 4:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function visit(_x19) {
        return _visit.apply(this, arguments);
      }

      return visit;
    }()
  }, {
    key: "navigateFrame",
    value: function navigateFrame(element, url, submitter) {
      var frame = this.findFrameElement(element, submitter);
      this.proposeVisitIfNavigatedWithAction(frame, element, submitter);
      frame.setAttribute("reloadable", "");
      frame.src = url;
    }
  }, {
    key: "proposeVisitIfNavigatedWithAction",
    value: function proposeVisitIfNavigatedWithAction(frame, element, submitter) {
      var action = getAttribute("data-turbo-action", submitter, element, frame);

      if (isAction(action)) {
        var _SnapshotSubstitution = new SnapshotSubstitution(frame),
            visitCachedSnapshot = _SnapshotSubstitution.visitCachedSnapshot;

        frame.delegate.fetchResponseLoaded = function (fetchResponse) {
          if (frame.src) {
            var statusCode = fetchResponse.statusCode,
                redirected = fetchResponse.redirected;
            var responseHTML = frame.ownerDocument.documentElement.outerHTML;
            var response = {
              statusCode: statusCode,
              redirected: redirected,
              responseHTML: responseHTML
            };
            session.visit(frame.src, {
              action: action,
              response: response,
              visitCachedSnapshot: visitCachedSnapshot,
              willRender: false
            });
          }
        };
      }
    }
  }, {
    key: "findFrameElement",
    value: function findFrameElement(element, submitter) {
      var _a;

      var id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
      return (_a = getFrameElementById(id)) !== null && _a !== void 0 ? _a : this.element;
    }
  }, {
    key: "extractForeignFrameElement",
    value: function () {
      var _extractForeignFrameElement = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25(container) {
        var element, id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                id = CSS.escape(this.id);
                _context25.prev = 1;

                if (!(element = activateElement(container.querySelector("turbo-frame#".concat(id)), this.currentURL))) {
                  _context25.next = 4;
                  break;
                }

                return _context25.abrupt("return", element);

              case 4:
                if (!(element = activateElement(container.querySelector("turbo-frame[src][recurse~=".concat(id, "]")), this.currentURL))) {
                  _context25.next = 10;
                  break;
                }

                _context25.next = 7;
                return element.loaded;

              case 7:
                _context25.next = 9;
                return this.extractForeignFrameElement(element);

              case 9:
                return _context25.abrupt("return", _context25.sent);

              case 10:
                console.error("Response has no matching <turbo-frame id=\"".concat(id, "\"> element"));
                _context25.next = 16;
                break;

              case 13:
                _context25.prev = 13;
                _context25.t0 = _context25["catch"](1);
                console.error(_context25.t0);

              case 16:
                return _context25.abrupt("return", new FrameElement());

              case 17:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this, [[1, 13]]);
      }));

      function extractForeignFrameElement(_x20) {
        return _extractForeignFrameElement.apply(this, arguments);
      }

      return extractForeignFrameElement;
    }()
  }, {
    key: "formActionIsVisitable",
    value: function formActionIsVisitable(form, submitter) {
      var action = getAction(form, submitter);
      return locationIsVisitable(expandURL(action), this.rootLocation);
    }
  }, {
    key: "shouldInterceptNavigation",
    value: function shouldInterceptNavigation(element, submitter) {
      var id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");

      if (element instanceof HTMLFormElement && !this.formActionIsVisitable(element, submitter)) {
        return false;
      }

      if (!this.enabled || id == "_top") {
        return false;
      }

      if (id) {
        var frameElement = getFrameElementById(id);

        if (frameElement) {
          return !frameElement.disabled;
        }
      }

      if (!session.elementDriveEnabled(element)) {
        return false;
      }

      if (submitter && !session.elementDriveEnabled(submitter)) {
        return false;
      }

      return true;
    }
  }, {
    key: "id",
    get: function get() {
      return this.element.id;
    }
  }, {
    key: "enabled",
    get: function get() {
      return !this.element.disabled;
    }
  }, {
    key: "sourceURL",
    get: function get() {
      if (this.element.src) {
        return this.element.src;
      }
    },
    set: function set(sourceURL) {
      this.settingSourceURL = true;
      this.element.src = sourceURL !== null && sourceURL !== void 0 ? sourceURL : null;
      this.currentURL = this.element.src;
      this.settingSourceURL = false;
    }
  }, {
    key: "reloadable",
    get: function get() {
      var frame = this.findFrameElement(this.element);
      return frame.hasAttribute("reloadable");
    },
    set: function set(value) {
      var frame = this.findFrameElement(this.element);

      if (value) {
        frame.setAttribute("reloadable", "");
      } else {
        frame.removeAttribute("reloadable");
      }
    }
  }, {
    key: "loadingStyle",
    get: function get() {
      return this.element.loading;
    }
  }, {
    key: "isLoading",
    get: function get() {
      return this.formSubmission !== undefined || this.resolveVisitPromise() !== undefined;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.element.isActive && this.connected;
    }
  }, {
    key: "rootLocation",
    get: function get() {
      var _a;

      var meta = this.element.ownerDocument.querySelector("meta[name=\"turbo-root\"]");
      var root = (_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/";
      return expandURL(root);
    }
  }]);

  return FrameController;
}();

var SnapshotSubstitution = function SnapshotSubstitution(element) {
  var _this33 = this;

  _classCallCheck(this, SnapshotSubstitution);

  this.visitCachedSnapshot = function (_ref21) {
    var element = _ref21.element;

    var _a;

    var id = _this33.id,
        clone = _this33.clone;
    (_a = element.querySelector("#" + id)) === null || _a === void 0 ? void 0 : _a.replaceWith(clone);
  };

  this.clone = element.cloneNode(true);
  this.id = element.id;
};

function getFrameElementById(id) {
  if (id != null) {
    var element = document.getElementById(id);

    if (element instanceof FrameElement) {
      return element;
    }
  }
}

function activateElement(element, currentURL) {
  if (element) {
    var src = element.getAttribute("src");

    if (src != null && currentURL != null && urlsAreEqual(src, currentURL)) {
      throw new Error("Matching <turbo-frame id=\"".concat(element.id, "\"> element has a source URL which references itself"));
    }

    if (element.ownerDocument !== document) {
      element = document.importNode(element, true);
    }

    if (element instanceof FrameElement) {
      element.connectedCallback();
      element.disconnectedCallback();
      return element;
    }
  }
}

var StreamActions = {
  after: function after() {
    var _this34 = this;

    this.targetElements.forEach(function (e) {
      var _a;

      return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(_this34.templateContent, e.nextSibling);
    });
  },
  append: function append() {
    var _this35 = this;

    this.removeDuplicateTargetChildren();
    this.targetElements.forEach(function (e) {
      return e.append(_this35.templateContent);
    });
  },
  before: function before() {
    var _this36 = this;

    this.targetElements.forEach(function (e) {
      var _a;

      return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(_this36.templateContent, e);
    });
  },
  prepend: function prepend() {
    var _this37 = this;

    this.removeDuplicateTargetChildren();
    this.targetElements.forEach(function (e) {
      return e.prepend(_this37.templateContent);
    });
  },
  remove: function remove() {
    this.targetElements.forEach(function (e) {
      return e.remove();
    });
  },
  replace: function replace() {
    var _this38 = this;

    this.targetElements.forEach(function (e) {
      return e.replaceWith(_this38.templateContent);
    });
  },
  update: function update() {
    var _this39 = this;

    this.targetElements.forEach(function (e) {
      e.innerHTML = "";
      e.append(_this39.templateContent);
    });
  }
};

var StreamElement = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(StreamElement, _HTMLElement2);

  var _super9 = _createSuper(StreamElement);

  function StreamElement() {
    _classCallCheck(this, StreamElement);

    return _super9.apply(this, arguments);
  }

  _createClass(StreamElement, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.prev = 0;
                _context26.next = 3;
                return this.render();

              case 3:
                _context26.next = 8;
                break;

              case 5:
                _context26.prev = 5;
                _context26.t0 = _context26["catch"](0);
                console.error(_context26.t0);

              case 8:
                _context26.prev = 8;
                this.disconnect();
                return _context26.finish(8);

              case 11:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this, [[0, 5, 8, 11]]);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "render",
    value: function () {
      var _render6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28() {
        var _this40 = this;

        var _a;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                return _context28.abrupt("return", (_a = this.renderPromise) !== null && _a !== void 0 ? _a : this.renderPromise = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
                    while (1) {
                      switch (_context27.prev = _context27.next) {
                        case 0:
                          if (!_this40.dispatchEvent(_this40.beforeRenderEvent)) {
                            _context27.next = 4;
                            break;
                          }

                          _context27.next = 3;
                          return nextAnimationFrame();

                        case 3:
                          _this40.performAction();

                        case 4:
                        case "end":
                          return _context27.stop();
                      }
                    }
                  }, _callee27);
                }))());

              case 1:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function render() {
        return _render6.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "disconnect",
    value: function disconnect() {
      try {
        this.remove();
      } catch (_a) {}
    }
  }, {
    key: "removeDuplicateTargetChildren",
    value: function removeDuplicateTargetChildren() {
      this.duplicateChildren.forEach(function (c) {
        return c.remove();
      });
    }
  }, {
    key: "duplicateChildren",
    get: function get() {
      var _a;

      var existingChildren = this.targetElements.flatMap(function (e) {
        return _toConsumableArray(e.children);
      }).filter(function (c) {
        return !!c.id;
      });

      var newChildrenIds = _toConsumableArray((_a = this.templateContent) === null || _a === void 0 ? void 0 : _a.children).filter(function (c) {
        return !!c.id;
      }).map(function (c) {
        return c.id;
      });

      return existingChildren.filter(function (c) {
        return newChildrenIds.includes(c.id);
      });
    }
  }, {
    key: "performAction",
    get: function get() {
      if (this.action) {
        var actionFunction = StreamActions[this.action];

        if (actionFunction) {
          return actionFunction;
        }

        this.raise("unknown action");
      }

      this.raise("action attribute is missing");
    }
  }, {
    key: "targetElements",
    get: function get() {
      if (this.target) {
        return this.targetElementsById;
      } else if (this.targets) {
        return this.targetElementsByQuery;
      } else {
        this.raise("target or targets attribute is missing");
      }
    }
  }, {
    key: "templateContent",
    get: function get() {
      return this.templateElement.content.cloneNode(true);
    }
  }, {
    key: "templateElement",
    get: function get() {
      if (this.firstElementChild instanceof HTMLTemplateElement) {
        return this.firstElementChild;
      }

      this.raise("first child element must be a <template> element");
    }
  }, {
    key: "action",
    get: function get() {
      return this.getAttribute("action");
    }
  }, {
    key: "target",
    get: function get() {
      return this.getAttribute("target");
    }
  }, {
    key: "targets",
    get: function get() {
      return this.getAttribute("targets");
    }
  }, {
    key: "raise",
    value: function raise(message) {
      throw new Error("".concat(this.description, ": ").concat(message));
    }
  }, {
    key: "description",
    get: function get() {
      var _a, _b;

      return (_b = ((_a = this.outerHTML.match(/<[^>]+>/)) !== null && _a !== void 0 ? _a : [])[0]) !== null && _b !== void 0 ? _b : "<turbo-stream>";
    }
  }, {
    key: "beforeRenderEvent",
    get: function get() {
      return new CustomEvent("turbo:before-stream-render", {
        bubbles: true,
        cancelable: true
      });
    }
  }, {
    key: "targetElementsById",
    get: function get() {
      var _a;

      var element = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.getElementById(this.target);

      if (element !== null) {
        return [element];
      } else {
        return [];
      }
    }
  }, {
    key: "targetElementsByQuery",
    get: function get() {
      var _a;

      var elements = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.targets);

      if (elements.length !== 0) {
        return Array.prototype.slice.call(elements);
      } else {
        return [];
      }
    }
  }]);

  return StreamElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

FrameElement.delegateConstructor = FrameController;
customElements.define("turbo-frame", FrameElement);
customElements.define("turbo-stream", StreamElement);

(function () {
  var element = document.currentScript;
  if (!element) return;
  if (element.hasAttribute("data-turbo-suppress-warning")) return;

  while (element = element.parentElement) {
    if (element == document.body) {
      return console.warn(unindent(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!\n\n        Load your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\n        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements\n\n        \u2014\u2014\n        Suppress this warning by adding a \"data-turbo-suppress-warning\" attribute to: %s\n      "]))), element.outerHTML);
    }
  }
})();

window.Turbo = Turbo;
start();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/rails_admin.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./app/javascript/stylesheets/rails_admin.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-solid-900.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-solid-900.woff */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-solid-900.svg */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: "#fontawesome" });
// Module
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url["default"] : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "./node_modules/flatpickr/dist/esm/utils/dom.js");
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/dates */ "./node_modules/flatpickr/dist/esm/utils/dates.js");
/* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/polyfills */ "./node_modules/flatpickr/dist/esm/utils/polyfills.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var DEBOUNCED_CHANGE_MS = 300;

function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: Object.assign(Object.assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"]), flatpickr.defaultConfig),
    l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  self.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({
    config: self.config,
    l10n: self.l10n
  });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"];
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;

  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function getDaysInMonth() {
        var month = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.currentMonth;
        var yr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self.currentYear;
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }

  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile) build();
    bindEvents();

    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
      }

      updateValue(false);
    }

    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (!self.isMobile && isSafari) {
      positionCalendar();
    }

    triggerEvent("onReady");
  }

  function bindToInstance(fn) {
    return fn.bind(self);
  }

  function setCalendarWidth() {
    var config = self.config;

    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function () {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }

        if (self.daysContainer !== undefined) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }

  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === undefined || Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
      var defaults = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config);
      defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }

    if (e !== undefined && e.type !== "blur") {
      timeWrapper(e);
    }

    var prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();

    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }

  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(amPM === self.l10n.amPM[1]);
  }

  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;

      default:
        return hour % 12;
    }
  }

  function setHoursFromInputs() {
    if (self.hourElement === undefined || self.minuteElement === undefined) return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
        minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
        seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

    if (self.amPM !== undefined) {
      hours = ampm2military(hours, self.amPM.textContent);
    }

    var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

    if (limitMaxHours) {
      var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
      hours = Math.min(hours, maxTime.getHours());
      if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
      if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
    }

    if (limitMinHours) {
      var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
      hours = Math.max(hours, minTime.getHours());
      if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
      if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
    }

    setHours(hours, minutes, seconds);
  }

  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;

    if (date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }

  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== undefined) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }

    if (!self.hourElement || !self.minuteElement || self.isMobile) return;
    self.hourElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(!self.config.time_24hr ? (12 + hours) % 12 + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(hours % 12 === 0) : hours);
    self.minuteElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(minutes);
    if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(hours >= 12)];
    if (self.secondElement !== undefined) self.secondElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(seconds);
  }

  function onYearInput(event) {
    var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);

    if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }

  function bind(element, event, handler, options) {
    if (event instanceof Array) return event.forEach(function (ev) {
      return bind(element, ev, handler, options);
    });
    if (element instanceof Array) return element.forEach(function (el) {
      return bind(el, event, handler, options);
    });
    element.addEventListener(event, handler, options);

    self._handlers.push({
      remove: function remove() {
        return element.removeEventListener(event, handler);
      }
    });
  }

  function triggerChange() {
    triggerEvent("onChange");
  }

  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function (evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-".concat(evt, "]")), function (el) {
          return bind(el, "click", self[evt]);
        });
      });
    }

    if (self.isMobile) {
      setupMobile();
      return;
    }

    var debouncedResize = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(onResize, 50);
    self._debouncedChange = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
      if (self.config.mode === "range") onMouseOver(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e));
    });
    bind(window.document.body, "keydown", onKeyDown);
    if (!self.config.inline && !self.config["static"]) bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, {
      capture: true
    });

    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }

    if (self.daysContainer !== undefined) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }

    if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
      var selText = function selText(e) {
        return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e).select();
      };

      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, {
        capture: true
      });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
        return self.secondElement && self.secondElement.select();
      });

      if (self.amPM !== undefined) {
        bind(self.amPM, "click", function (e) {
          updateTime(e);
          triggerChange();
        });
      }
    }

    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }

  function jumpToDate(jumpDate, triggerChange) {
    var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;

    try {
      if (jumpTo !== undefined) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }

    if (triggerChange && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }

    if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }

    self.redraw();
  }

  function timeIncrement(e) {
    var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
    if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }

  function incrementNumInput(e, delta, inputElem) {
    var target = e && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }

  function build() {
    var fragment = window.document.createDocumentFragment();
    self.calendarContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;

    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-innerContainer");

      if (self.config.weekNumbers) {
        var _buildWeeks = buildWeeks(),
            weekWrapper = _buildWeeks.weekWrapper,
            weekNumbers = _buildWeeks.weekNumbers;

        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }

      self.rContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());

      if (!self.daysContainer) {
        self.daysContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }

      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }

    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }

    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rangeMode", self.config.mode === "range");
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "animate", self.config.animate === true);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

    if (self.config.inline || self.config["static"]) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

      if (self.config.inline) {
        if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
      }

      if (self.config["static"]) {
        var wrapper = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-wrapper");
        if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput) wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }

    if (!self.config["static"] && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }

  function createDay(className, date, dayNumber, i) {
    var dateIsEnabled = isEnabled(date, true),
        dayElement = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-day " + className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

    if (className.indexOf("hidden") === -1 && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }

    if (dateIsEnabled) {
      dayElement.tabIndex = -1;

      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;

        if (self.config.mode === "range") {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(dayElement, "startRange", self.selectedDates[0] && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[0], true) === 0);
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(dayElement, "endRange", self.selectedDates[1] && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay") dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }

    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
    }

    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }

    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }

  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range") onMouseOver(targetNode);
  }

  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    var endMonth = delta > 0 ? self.config.showMonths : -1;

    for (var m = startMonth; m != endMonth; m += delta) {
      var month = self.daysContainer.children[m];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;

      for (var i = startIndex; i != endIndex; i += delta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
      }
    }

    return undefined;
  }

  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;

    for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      var month = self.daysContainer.children[m];
      var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;

      for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
      }
    }

    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return undefined;
  }

  function focusOnDay(current, offset) {
    var dayFocused = isInView(document.activeElement || document.body);
    var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);

    if (startElem === undefined) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }

  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year),
        days = window.document.createDocumentFragment(),
        isMultiMonth = self.config.showMonths > 1,
        prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
        nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth,
        dayIndex = 0;

    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }

    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }

    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }

    var dayContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }

  function buildDays() {
    if (self.daysContainer === undefined) {
      return;
    }

    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.daysContainer);
    if (self.weekNumbers) Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.weekNumbers);
    var frag = document.createDocumentFragment();

    for (var i = 0; i < self.config.showMonths; i++) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }

    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;

    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }

  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;

    var shouldBuildMonth = function shouldBuildMonth(month) {
      if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
        return false;
      }

      return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
    };

    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";

    for (var i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i)) continue;
      var month = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i).getMonth().toString();
      month.textContent = Object(_utils_formatting__WEBPACK_IMPORTED_MODULE_5__["monthToStr"])(i, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;

      if (self.currentMonth === i) {
        month.selected = true;
      }

      self.monthsDropdownContainer.appendChild(month);
    }
  }

  function buildMonth() {
    var container = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;

    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "cur-month");
    } else {
      self.monthsDropdownContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", function (e) {
        var target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
        var selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }

    var yearInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("cur-year", {
      tabindex: "-1"
    });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);

    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }

    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }

    var currentMonth = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container: container,
      yearElement: yearElement,
      monthElement: monthElement
    };
  }

  function buildMonths() {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);

    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }

    for (var m = self.config.showMonths; m--;) {
      var month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }

    self.monthNav.appendChild(self.nextMonthNav);
  }

  function buildMonthNav() {
    self.monthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: function get() {
        return self.__hidePrevMonthArrow;
      },
      set: function set(bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function get() {
        return self.__hideNextMonthArrow;
      },
      set: function set(bool) {
        if (self.__hideNextMonthArrow !== bool) {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }

  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
    var defaults = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config);
    self.timeContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-time-separator", ":");
    var hourInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
    self.minuteElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }

    if (!self.config.time_24hr) {
      self.amPM = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-am-pm", self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }

    return self.timeContainer;
  }

  function buildWeekdays() {
    if (!self.weekdayContainer) self.weekdayContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekdays");else Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.weekdayContainer);

    for (var i = self.config.showMonths; i--;) {
      var container = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }

    updateWeekdays();
    return self.weekdayContainer;
  }

  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }

    var firstDayOfWeek = self.l10n.firstDayOfWeek;

    var weekdays = _toConsumableArray(self.l10n.weekdays.shorthand);

    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = [].concat(_toConsumableArray(weekdays.splice(firstDayOfWeek, weekdays.length)), _toConsumableArray(weekdays.splice(0, firstDayOfWeek)));
    }

    for (var i = self.config.showMonths; i--;) {
      self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        ".concat(weekdays.join("</span><span class='flatpickr-weekday'>"), "\n      </span>\n      ");
    }
  }

  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    var weekNumbers = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper: weekWrapper,
      weekNumbers: weekNumbers
    };
  }

  function changeMonth(value) {
    var isOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
    self.currentMonth += delta;

    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }

    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }

  function clear() {
    var triggerChangeEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var toInitial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    self.input.value = "";
    if (self.altInput !== undefined) self.altInput.value = "";
    if (self.mobileInput !== undefined) self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = undefined;

    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }

    if (self.config.enableTime === true) {
      var _getDefaultHours = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config),
          hours = _getDefaultHours.hours,
          minutes = _getDefaultHours.minutes,
          seconds = _getDefaultHours.seconds;

      setHours(hours, minutes, seconds);
    }

    self.redraw();
    if (triggerChangeEvent) triggerEvent("onChange");
  }

  function close() {
    self.isOpen = false;

    if (!self.isMobile) {
      if (self.calendarContainer !== undefined) {
        self.calendarContainer.classList.remove("open");
      }

      if (self._input !== undefined) {
        self._input.classList.remove("active");
      }
    }

    triggerEvent("onClose");
  }

  function destroy() {
    if (self.config !== undefined) triggerEvent("onDestroy");

    for (var i = self._handlers.length; i--;) {
      self._handlers[i].remove();
    }

    self._handlers = [];

    if (self.mobileInput) {
      if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = undefined;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config["static"] && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

        if (wrapper.parentNode) {
          while (wrapper.firstChild) {
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          }

          wrapper.parentNode.removeChild(wrapper);
        }
      } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }

    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }

    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }

    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
      try {
        delete self[k];
      } catch (_) {}
    });
  }

  function isCalendarElem(elem) {
    if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
    return self.calendarContainer.contains(elem);
  }

  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
      var isCalendarElement = isCalendarElem(eventTarget);
      var isInput = eventTarget === self.input || eventTarget === self.altInput || self.element.contains(eventTarget) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
        return elem.contains(eventTarget);
      });

      if (lostFocus && isIgnored) {
        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) {
          updateTime();
        }

        self.close();

        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) {
          self.clear(false);
          self.redraw();
        }
      }
    }
  }

  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
    var newYearNum = newYear,
        isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;

    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }

    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }

  function isEnabled(date) {
    var timeless = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var _a;

    var dateToCheck = self.parseDate(date, undefined, timeless);
    if (self.config.minDate && dateToCheck && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
    if (!self.config.enable && self.config.disable.length === 0) return true;
    if (dateToCheck === undefined) return false;
    var bool = !!self.config.enable,
        array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;

    for (var i = 0, d; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string") {
        var parsed = self.parseDate(d, undefined, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (_typeof(d) === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
    }

    return !bool;
  }

  function isInView(elem) {
    if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }

  function onBlur(e) {
    var isInput = e.target === self._input;

    if (isInput && (self.selectedDates.length > 0 || self._input.value.length > 0) && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }

  function onKeyDown(e) {
    var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;

    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);

      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else selectDate(e);

          break;

        case 27:
          e.preventDefault();
          focusAndClose();
          break;

        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e.preventDefault();
            self.clear();
          }

          break;

        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();

            if (self.daysContainer !== undefined && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
              var _delta = e.keyCode === 39 ? 1 : -1;

              if (!e.ctrlKey) focusOnDay(undefined, _delta);else {
                e.stopPropagation();
                changeMonth(_delta);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement) self.hourElement.focus();

          break;

        case 38:
        case 40:
          e.preventDefault();
          var delta = e.keyCode === 40 ? 1 : -1;

          if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement) self.hourElement.focus();
            updateTime(e);

            self._debouncedChange();
          }

          break;

        case 9:
          if (isTimeObj) {
            var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(function (x) {
              return x;
            });
            var i = elems.indexOf(eventTarget);

            if (i !== -1) {
              var target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();

              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();

            self._input.focus();
          }

          break;

        default:
          break;
      }
    }

    if (self.amPM !== undefined && eventTarget === self.amPM) {
      switch (e.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;

        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }

    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }

  function onMouseOver(elem) {
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled"))) return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
        initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
        rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
        rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0,
        maxRange = 0;

    for (var t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__["duration"].DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
      }
    }

    for (var m = 0; m < self.config.showMonths; m++) {
      var month = self.daysContainer.children[m];

      var _loop = function _loop(i, l) {
        var dayElem = month.children[i],
            date = dayElem.dateObj;
        var timestamp = date.getTime();
        var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

        if (outOfRange) {
          dayElem.classList.add("notAllowed");
          ["inRange", "startRange", "endRange"].forEach(function (c) {
            dayElem.classList.remove(c);
          });
          return "continue";
        } else if (containsDisabled && !outOfRange) return "continue";

        ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
          dayElem.classList.remove(c);
        });

        if (elem !== undefined) {
          elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
          if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
          if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["isBetween"])(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
        }
      };

      for (var i = 0, l = month.children.length; i < l; i++) {
        var _ret = _loop(i, l);

        if (_ret === "continue") continue;
      }
    }
  }

  function onResize() {
    if (self.isOpen && !self.config["static"] && !self.config.inline) positionCalendar();
  }

  function open(e) {
    var positionElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self._positionElement;

    if (self.isMobile === true) {
      if (e) {
        e.preventDefault();
        var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);

        if (eventTarget) {
          eventTarget.blur();
        }
      }

      if (self.mobileInput !== undefined) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }

      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }

    var wasOpen = self.isOpen;
    self.isOpen = true;

    if (!wasOpen) {
      self.calendarContainer.classList.add("open");

      self._input.classList.add("active");

      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }

    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(function () {
          return self.hourElement.select();
        }, 50);
      }
    }
  }

  function minMaxDateSetter(type) {
    return function (date) {
      var dateObj = self.config["_".concat(type, "Date")] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_".concat(type === "min" ? "max" : "min", "Date")];

      if (dateObj !== undefined) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }

      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function (d) {
          return isEnabled(d);
        });
        if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
        updateValue();
      }

      if (self.daysContainer) {
        redraw();
        if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }

  function parseConfig() {
    var boolOpts = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
    var userConfig = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    var formats = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function get() {
        return self.config._enable;
      },
      set: function set(dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function get() {
        return self.config._disable;
      },
      set: function set(dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";

    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"].dateFormat;
      formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }

    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"].altFormat;
      formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + " h:i".concat(userConfig.enableSeconds ? ":S" : "", " K");
    }

    Object.defineProperty(self.config, "minDate", {
      get: function get() {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function get() {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });

    var minMaxTimeSetter = function minMaxTimeSetter(type) {
      return function (val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };

    Object.defineProperty(self.config, "minTime", {
      get: function get() {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function get() {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });

    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }

    Object.assign(self.config, formats, userConfig);

    for (var i = 0; i < boolOpts.length; i++) {
      self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
    }

    _types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].filter(function (hook) {
      return self.config[hook] !== undefined;
    }).forEach(function (hook) {
      self.config[hook] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    for (var _i = 0; _i < self.config.plugins.length; _i++) {
      var pluginConf = self.config.plugins[_i](self) || {};

      for (var key in pluginConf) {
        if (_types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].indexOf(key) > -1) {
          self.config[key] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
      }
    }

    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }

    triggerEvent("onParseConfig");
  }

  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }

  function setupLocale() {
    if (_typeof(self.config.locale) !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale ".concat(self.config.locale)));
    self.l10n = Object.assign(Object.assign({}, flatpickr.l10ns["default"]), _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].K = "(".concat(self.l10n.amPM[0], "|").concat(self.l10n.amPM[1], "|").concat(self.l10n.amPM[0].toLowerCase(), "|").concat(self.l10n.amPM[1].toLowerCase(), ")");
    var userConfig = Object.assign(Object.assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));

    if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
      self.config.time_24hr = self.l10n.time_24hr;
    }

    self.formatDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateFormatter"])(self);
    self.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({
      config: self.config,
      l10n: self.l10n
    });
  }

  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }

    if (self.calendarContainer === undefined) return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
      return acc + child.offsetHeight;
    }, 0),
        calendarWidth = self.calendarContainer.offsetWidth,
        configPos = self.config.position.split(" "),
        configPosVertical = configPos[0],
        configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
        inputBounds = positionElement.getBoundingClientRect(),
        distanceFromBottom = window.innerHeight - inputBounds.bottom,
        showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowTop", !showOnTop);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline) return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;

    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }

    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowCenter", isCenter);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rightMost", rightMost);
    if (self.config["static"]) return;
    self.calendarContainer.style.top = "".concat(top, "px");

    if (!rightMost) {
      self.calendarContainer.style.left = "".concat(left, "px");
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = "".concat(right, "px");
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === undefined) return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:".concat(inputBounds.left, "px;right:auto;}");
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rightMost", false);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "centerMost", true);
      doc.insertRule("".concat(centerBefore, ",").concat(centerAfter).concat(centerStyle), centerIndex);
      self.calendarContainer.style.left = "".concat(centerLeft, "px");
      self.calendarContainer.style.right = "auto";
    }
  }

  function getDocumentStyleSheet() {
    var editableSheet = null;

    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];

      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }

      editableSheet = sheet;
      break;
    }

    return editableSheet != null ? editableSheet : createStyleSheet();
  }

  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }

  function redraw() {
    if (self.config.noCalendar || self.isMobile) return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }

  function focusAndClose() {
    self._input.focus();

    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }

  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();

    var isSelectable = function isSelectable(day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };

    var t = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["findParent"])(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e), isSelectable);
    if (t === undefined) return;
    var target = t;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }

      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if (Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
        return a.getTime() - b.getTime();
      });
    }
    setHoursFromInputs();

    if (shouldChangeMonth) {
      var isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();

      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }

      triggerEvent("onMonthChange");
    }

    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();

    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

      if (single || range) {
        focusAndClose();
      }
    }

    triggerChange();
  }

  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    clickOpens: [function () {
      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "click", self.open);
      } else {
        self._input.removeEventListener("focus", self.open);

        self._input.removeEventListener("click", self.open);
      }
    }]
  };

  function set(option, value) {
    if (option !== null && _typeof(option) === "object") {
      Object.assign(self.config, option);

      for (var key in option) {
        if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function (x) {
          return x();
        });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
        return x();
      });else if (_types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].indexOf(option) > -1) self.config[option] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(value);
    }

    self.redraw();
    updateValue(true);
  }

  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array) dates = inputDate.map(function (d) {
      return self.parseDate(d, format);
    });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;

        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function (date) {
            return self.parseDate(date, format);
          });
          break;

        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
            return self.parseDate(date, format);
          });
          break;

        default:
          break;
      }
    } else self.config.errorHandler(new Error("Invalid date supplied: ".concat(JSON.stringify(inputDate))));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function (d) {
      return d instanceof Date && isEnabled(d, false);
    });
    if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
      return a.getTime() - b.getTime();
    });
  }

  function setDate(date) {
    var triggerChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : self.config.dateFormat;
    if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(undefined, triggerChange);
    setHoursFromDate();

    if (self.selectedDates.length === 0) {
      self.clear(false);
    }

    updateValue(triggerChange);
    if (triggerChange) triggerEvent("onChange");
  }

  function parseDateRules(arr) {
    return arr.slice().map(function (rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, undefined, true);
      } else if (rule && _typeof(rule) === "object" && rule.from && rule.to) return {
        from: self.parseDate(rule.from, undefined),
        to: self.parseDate(rule.to, undefined)
      };

      return rule;
    }).filter(function (x) {
      return x;
    });
  }

  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || new Date();
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }

  function setupInputs() {
    self.input = getInputElem();

    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }

    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;

    if (self.config.altInput) {
      self.altInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config["static"] && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }

    if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
    self._positionElement = self.config.positionElement || self._input;
  }

  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }

    if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== undefined) self.altInput.type = "hidden";

    try {
      if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {}

    bind(self.mobileInput, "change", function (e) {
      self.setDate(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }

  function toggle(e) {
    if (self.isOpen === true) return self.close();
    self.open(e);
  }

  function triggerEvent(event, data) {
    if (self.config === undefined) return;
    var hooks = self.config[event];

    if (hooks !== undefined && hooks.length > 0) {
      for (var i = 0; hooks[i] && i < hooks.length; i++) {
        hooks[i](self.selectedDates, self.input.value, self, data);
      }
    }

    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }

  function createEvent(name) {
    var e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }

  function isDateSelected(date) {
    for (var i = 0; i < self.selectedDates.length; i++) {
      if (Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(self.selectedDates[i], date) === 0) return "" + i;
    }

    return false;
  }

  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
    return Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[0]) >= 0 && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[1]) <= 0;
  }

  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
    self.yearElements.forEach(function (yearElement, i) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);

      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i].textContent = Object(_utils_formatting__WEBPACK_IMPORTED_MODULE_5__["monthToStr"])(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }

      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }

  function getDateStr(format) {
    return self.selectedDates.map(function (dObj) {
      return self.formatDate(dObj, format);
    }).filter(function (d, i, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }

  function updateValue() {
    var triggerChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (self.mobileInput !== undefined && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }

    self.input.value = getDateStr(self.config.dateFormat);

    if (self.altInput !== undefined) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }

    if (triggerChange !== false) triggerEvent("onValueUpdate");
  }

  function onMonthNavClick(e) {
    var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);

    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }

  function timeWrapper(e) {
    e.preventDefault();
    var isKeyDown = e.type === "keydown",
        eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e),
        input = eventTarget;

    if (self.amPM !== undefined && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(self.amPM.textContent === self.l10n.amPM[0])];
    }

    var min = parseFloat(input.getAttribute("min")),
        max = parseFloat(input.getAttribute("max")),
        step = parseFloat(input.getAttribute("step")),
        curValue = parseInt(input.value, 10),
        delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;

    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement,
          isMinuteElem = input === self.minuteElement;

      if (newValue < min) {
        newValue = max + newValue + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!isHourElem) + (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(isHourElem) && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!self.amPM));
        if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!self.amPM) : min;
        if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
      }

      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(self.amPM.textContent === self.l10n.amPM[0])];
      }

      input.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(newValue);
    }
  }

  init();
  return self;
}

function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
    return x instanceof HTMLElement;
  });
  var instances = [];

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    try {
      if (node.getAttribute("data-fp-omit") !== null) continue;

      if (node._flatpickr !== undefined) {
        node._flatpickr.destroy();

        node._flatpickr = undefined;
      }

      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }

  return instances.length === 1 ? instances[0] : instances;
}

if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
    return _flatpickr(this, config);
  };

  HTMLElement.prototype.flatpickr = function (config) {
    return _flatpickr([this], config);
  };
}

var flatpickr = function flatpickr(selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};

flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: Object.assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
  "default": Object.assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"])
};

flatpickr.localize = function (l10n) {
  flatpickr.l10ns["default"] = Object.assign(Object.assign({}, flatpickr.l10ns["default"]), l10n);
};

flatpickr.setDefaults = function (config) {
  flatpickr.defaultConfig = Object.assign(Object.assign({}, flatpickr.defaultConfig), config);
};

flatpickr.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({});
flatpickr.formatDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateFormatter"])({});
flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"];

if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function (config) {
    return _flatpickr(this, config);
  };
}

Date.prototype.fp_incr = function (days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};

if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}

/* harmony default export */ __webpack_exports__["default"] = (flatpickr);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/l10n/default.js":
/*!*********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
  \*********************************************************/
/*! exports provided: english, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "english", function() { return english; });
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  months: {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function ordinal(nth) {
    var s = nth % 100;
    if (s > 3 && s < 21) return "th";

    switch (s % 10) {
      case 1:
        return "st";

      case 2:
        return "nd";

      case 3:
        return "rd";

      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
/* harmony default export */ __webpack_exports__["default"] = (english);

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/types/options.js":
/*!**********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
  \**********************************************************/
/*! exports provided: HOOKS, defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOKS", function() { return HOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function errorHandler(err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function getWeek(givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: undefined,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  "static": false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dates.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
  \********************************************************/
/*! exports provided: createDateFormatter, createDateParser, compareDates, compareTimes, isBetween, duration, getDefaultHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDateFormatter", function() { return createDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDateParser", function() { return createDateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDates", function() { return compareDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTimes", function() { return compareTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBetween", function() { return isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duration", function() { return duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultHours", function() { return getDefaultHours; });
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");



var createDateFormatter = function createDateFormatter(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"] : _ref$config,
      _ref$l10n = _ref.l10n,
      l10n = _ref$l10n === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__["english"] : _ref$l10n,
      _ref$isMobile = _ref.isMobile,
      isMobile = _ref$isMobile === void 0 ? false : _ref$isMobile;
  return function (dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;

    if (config.formatDate !== undefined && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }

    return frmt.split("").map(function (c, i, arr) {
      return _formatting__WEBPACK_IMPORTED_MODULE_0__["formats"][c] && arr[i - 1] !== "\\" ? _formatting__WEBPACK_IMPORTED_MODULE_0__["formats"][c](dateObj, locale, config) : c !== "\\" ? c : "";
    }).join("");
  };
};
var createDateParser = function createDateParser(_ref2) {
  var _ref2$config = _ref2.config,
      config = _ref2$config === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"] : _ref2$config,
      _ref2$l10n = _ref2.l10n,
      l10n = _ref2$l10n === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__["english"] : _ref2$l10n;
  return function (date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date) return undefined;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
      var format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"]).dateFormat;
      var datestr = String(date).trim();

      if (datestr === "today") {
        parsedDate = new Date();
        timeless = true;
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
        parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
        var matched,
            ops = [];

        for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
          var token = format[i];
          var isBackSlash = token === "\\";
          var escaped = format[i - 1] === "\\" || isBackSlash;

          if (_formatting__WEBPACK_IMPORTED_MODULE_0__["tokenRegex"][token] && !escaped) {
            regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__["tokenRegex"][token];
            var match = new RegExp(regexStr).exec(date);

            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: _formatting__WEBPACK_IMPORTED_MODULE_0__["revFormat"][token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash) regexStr += ".";

          ops.forEach(function (_ref3) {
            var fn = _ref3.fn,
                val = _ref3.val;
            return parsedDate = fn(parsedDate, val, locale) || parsedDate;
          });
        }

        parsedDate = matched ? parsedDate : undefined;
      }
    }

    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: ".concat(dateOrig)));
      return undefined;
    }

    if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2) {
  var timeless = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }

  return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
  return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
}
var isBetween = function isBetween(ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var duration = {
  DAY: 86400000
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;

  if (config.minDate !== undefined) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();

    if (hours < minHour) {
      hours = minHour;
    }

    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }

    if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
  }

  if (config.maxDate !== undefined) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
  }

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dom.js":
/*!******************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
  \******************************************************/
/*! exports provided: toggleClass, createElement, clearNode, findParent, createNumberInput, getEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearNode", function() { return clearNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParent", function() { return findParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNumberInput", function() { return createNumberInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventTarget", function() { return getEventTarget; });
function toggleClass(elem, className, bool) {
  if (bool === true) return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== undefined) e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
function findParent(node, condition) {
  if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
  return undefined;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"),
      numInput = createElement("input", "numInput " + inputClassName),
      arrowUp = createElement("span", "arrowUp"),
      arrowDown = createElement("span", "arrowDown");

  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }

  if (opts !== undefined) for (var key in opts) {
    numInput.setAttribute(key, opts[key]);
  }
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }

    return event.target;
  } catch (error) {
    return event.target;
  }
}

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/formatting.js":
/*!*************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
  \*************************************************************/
/*! exports provided: monthToStr, revFormat, tokenRegex, formats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthToStr", function() { return monthToStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revFormat", function() { return revFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenRegex", function() { return tokenRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formats", function() { return formats; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");


var doNothing = function doNothing() {
  return undefined;
};

var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function F(dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function G(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  H: function H(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function J(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function K(dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_0__["int"])(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function M(dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function S(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function U(_, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1000);
  },
  W: function W(dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function Y(dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function Z(_, ISODate) {
    return new Date(ISODate);
  },
  d: function d(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function h(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  i: function i(dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function j(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function m(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function n(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function s(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function u(_, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function y(dateObj, year) {
    dateObj.setFullYear(2000 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "(\\w+)",
  F: "(\\w+)",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "(\\w+)",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "(\\w+)",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function Z(date) {
    return date.toISOString();
  },
  D: function D(date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function F(date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function G(date, locale, options) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(formats.h(date, locale, options));
  },
  H: function H(date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getHours());
  },
  J: function J(date, locale) {
    return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function K(date, locale) {
    return locale.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["int"])(date.getHours() > 11)];
  },
  M: function M(date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function S(date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getSeconds());
  },
  U: function U(date) {
    return date.getTime() / 1000;
  },
  W: function W(date, _, options) {
    return options.getWeek(date);
  },
  Y: function Y(date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getFullYear(), 4);
  },
  d: function d(date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getDate());
  },
  h: function h(date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function i(date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getMinutes());
  },
  j: function j(date) {
    return date.getDate();
  },
  l: function l(date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function m(date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getMonth() + 1);
  },
  n: function n(date) {
    return date.getMonth() + 1;
  },
  s: function s(date) {
    return date.getSeconds();
  },
  u: function u(date) {
    return date.getTime();
  },
  w: function w(date) {
    return date.getDay();
  },
  y: function y(date) {
    return String(date.getFullYear()).substring(2);
  }
};

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/index.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
  \********************************************************/
/*! exports provided: pad, int, debounce, arrayify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int", function() { return _int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayify", function() { return arrayify; });
var pad = function pad(number) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return "000".concat(number).slice(length * -1);
};

var _int = function _int(bool) {
  return bool === true ? 1 : 0;
};


function debounce(fn, wait) {
  var t;
  return function () {
    var _arguments = arguments,
        _this = this;

    clearTimeout(t);
    t = setTimeout(function () {
      return fn.apply(_this, _arguments);
    }, wait);
  };
}
var arrayify = function arrayify(obj) {
  return obj instanceof Array ? obj : [obj];
};

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/polyfills.js":
/*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Object.assign !== "function") {
  Object.assign = function (target) {
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _loop = function _loop() {
      var source = _args[_i];

      if (source) {
        Object.keys(source).forEach(function (key) {
          return target[key] = source[key];
        });
      }
    };

    for (var _i = 0, _args = args; _i < _args.length; _i++) {
      _loop();
    }

    return target;
  };
}

/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* flatpickr v4.6.9, @license MIT */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  'use strict';
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
    Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  };

  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }

    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }

    return r;
  }

  var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
  var defaults = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: function errorHandler(err) {
      return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function getWeek(givenDate) {
      var date = new Date(givenDate.getTime());
      date.setHours(0, 0, 0, 0); // Thursday in current week decides the year.

      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7); // January 4 is always in week 1.

      var week1 = new Date(date.getFullYear(), 0, 4); // Adjust to Thursday in week 1 and count number of weeks from date to week1.

      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    "static": false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false
  };
  var english = {
    weekdays: {
      shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    months: {
      shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function ordinal(nth) {
      var s = nth % 100;
      if (s > 3 && s < 21) return "th";

      switch (s % 10) {
        case 1:
          return "st";

        case 2:
          return "nd";

        case 3:
          return "rd";

        default:
          return "th";
      }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false
  };

  var pad = function pad(number, length) {
    if (length === void 0) {
      length = 2;
    }

    return ("000" + number).slice(length * -1);
  };

  var _int = function _int(bool) {
    return bool === true ? 1 : 0;
  };
  /* istanbul ignore next */


  function debounce(fn, wait) {
    var t;
    return function () {
      var _this = this;

      clearTimeout(t);
      t = setTimeout(function () {
        return fn.apply(_this, arguments);
      }, wait);
    };
  }

  var arrayify = function arrayify(obj) {
    return obj instanceof Array ? obj : [obj];
  };

  function toggleClass(elem, className, bool) {
    if (bool === true) return elem.classList.add(className);
    elem.classList.remove(className);
  }

  function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined) e.textContent = content;
    return e;
  }

  function clearNode(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function findParent(node, condition) {
    if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
    return undefined; // nothing found
  }

  function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"),
        numInput = createElement("input", "numInput " + inputClassName),
        arrowUp = createElement("span", "arrowUp"),
        arrowDown = createElement("span", "arrowDown");

    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
      numInput.type = "number";
    } else {
      numInput.type = "text";
      numInput.pattern = "\\d*";
    }

    if (opts !== undefined) for (var key in opts) {
      numInput.setAttribute(key, opts[key]);
    }
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
  }

  function getEventTarget(event) {
    try {
      if (typeof event.composedPath === "function") {
        var path = event.composedPath();
        return path[0];
      }

      return event.target;
    } catch (error) {
      return event.target;
    }
  }

  var doNothing = function doNothing() {
    return undefined;
  };

  var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
    return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
  };

  var revFormat = {
    D: doNothing,
    F: function F(dateObj, monthName, locale) {
      dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function G(dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    H: function H(dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    J: function J(dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    K: function K(dateObj, amPM, locale) {
      dateObj.setHours(dateObj.getHours() % 12 + 12 * _int(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function M(dateObj, shortMonth, locale) {
      dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function S(dateObj, seconds) {
      dateObj.setSeconds(parseFloat(seconds));
    },
    U: function U(_, unixSeconds) {
      return new Date(parseFloat(unixSeconds) * 1000);
    },
    W: function W(dateObj, weekNum, locale) {
      var weekNumber = parseInt(weekNum);
      var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
      date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
      return date;
    },
    Y: function Y(dateObj, year) {
      dateObj.setFullYear(parseFloat(year));
    },
    Z: function Z(_, ISODate) {
      return new Date(ISODate);
    },
    d: function d(dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    h: function h(dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    i: function i(dateObj, minutes) {
      dateObj.setMinutes(parseFloat(minutes));
    },
    j: function j(dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: function m(dateObj, month) {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function n(dateObj, month) {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function s(dateObj, seconds) {
      dateObj.setSeconds(parseFloat(seconds));
    },
    u: function u(_, unixMillSeconds) {
      return new Date(parseFloat(unixMillSeconds));
    },
    w: doNothing,
    y: function y(dateObj, year) {
      dateObj.setFullYear(2000 + parseFloat(year));
    }
  };
  var tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
  };
  var formats = {
    // get the date in UTC
    Z: function Z(date) {
      return date.toISOString();
    },
    // weekday name, short, e.g. Thu
    D: function D(date, locale, options) {
      return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    // full month name e.g. January
    F: function F(date, locale, options) {
      return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    // padded hour 1-12
    G: function G(date, locale, options) {
      return pad(formats.h(date, locale, options));
    },
    // hours with leading zero e.g. 03
    H: function H(date) {
      return pad(date.getHours());
    },
    // day (1-30) with ordinal suffix e.g. 1st, 2nd
    J: function J(date, locale) {
      return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
    },
    // AM/PM
    K: function K(date, locale) {
      return locale.amPM[_int(date.getHours() > 11)];
    },
    // shorthand month e.g. Jan, Sep, Oct, etc
    M: function M(date, locale) {
      return monthToStr(date.getMonth(), true, locale);
    },
    // seconds 00-59
    S: function S(date) {
      return pad(date.getSeconds());
    },
    // unix timestamp
    U: function U(date) {
      return date.getTime() / 1000;
    },
    W: function W(date, _, options) {
      return options.getWeek(date);
    },
    // full year e.g. 2016, padded (0001-9999)
    Y: function Y(date) {
      return pad(date.getFullYear(), 4);
    },
    // day in month, padded (01-30)
    d: function d(date) {
      return pad(date.getDate());
    },
    // hour from 1-12 (am/pm)
    h: function h(date) {
      return date.getHours() % 12 ? date.getHours() % 12 : 12;
    },
    // minutes, padded with leading zero e.g. 09
    i: function i(date) {
      return pad(date.getMinutes());
    },
    // day in month (1-30)
    j: function j(date) {
      return date.getDate();
    },
    // weekday name, full, e.g. Thursday
    l: function l(date, locale) {
      return locale.weekdays.longhand[date.getDay()];
    },
    // padded month number (01-12)
    m: function m(date) {
      return pad(date.getMonth() + 1);
    },
    // the month number (1-12)
    n: function n(date) {
      return date.getMonth() + 1;
    },
    // seconds 0-59
    s: function s(date) {
      return date.getSeconds();
    },
    // Unix Milliseconds
    u: function u(date) {
      return date.getTime();
    },
    // number of the day of the week
    w: function w(date) {
      return date.getDay();
    },
    // last two digits of year e.g. 16 for 2016
    y: function y(date) {
      return String(date.getFullYear()).substring(2);
    }
  };

  var createDateFormatter = function createDateFormatter(_a) {
    var _b = _a.config,
        config = _b === void 0 ? defaults : _b,
        _c = _a.l10n,
        l10n = _c === void 0 ? english : _c,
        _d = _a.isMobile,
        isMobile = _d === void 0 ? false : _d;
    return function (dateObj, frmt, overrideLocale) {
      var locale = overrideLocale || l10n;

      if (config.formatDate !== undefined && !isMobile) {
        return config.formatDate(dateObj, frmt, locale);
      }

      return frmt.split("").map(function (c, i, arr) {
        return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
      }).join("");
    };
  };

  var createDateParser = function createDateParser(_a) {
    var _b = _a.config,
        config = _b === void 0 ? defaults : _b,
        _c = _a.l10n,
        l10n = _c === void 0 ? english : _c;
    return function (date, givenFormat, timeless, customLocale) {
      if (date !== 0 && !date) return undefined;
      var locale = customLocale || l10n;
      var parsedDate;
      var dateOrig = date;
      if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined // timestamp
      ) // create a copy
        parsedDate = new Date(date);else if (typeof date === "string") {
        // date string
        var format = givenFormat || (config || defaults).dateFormat;
        var datestr = String(date).trim();

        if (datestr === "today") {
          parsedDate = new Date();
          timeless = true;
        } else if (/Z$/.test(datestr) || /GMT$/.test(datestr) // datestrings w/ timezone
        ) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
          parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
          var matched = void 0,
              ops = [];

          for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
            var token_1 = format[i];
            var isBackSlash = token_1 === "\\";
            var escaped = format[i - 1] === "\\" || isBackSlash;

            if (tokenRegex[token_1] && !escaped) {
              regexStr += tokenRegex[token_1];
              var match = new RegExp(regexStr).exec(date);

              if (match && (matched = true)) {
                ops[token_1 !== "Y" ? "push" : "unshift"]({
                  fn: revFormat[token_1],
                  val: match[++matchIndex]
                });
              }
            } else if (!isBackSlash) regexStr += "."; // don't really care


            ops.forEach(function (_a) {
              var fn = _a.fn,
                  val = _a.val;
              return parsedDate = fn(parsedDate, val, locale) || parsedDate;
            });
          }

          parsedDate = matched ? parsedDate : undefined;
        }
      }
      /* istanbul ignore next */

      if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
        config.errorHandler(new Error("Invalid date provided: " + dateOrig));
        return undefined;
      }

      if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
      return parsedDate;
    };
  };
  /**
   * Compute the difference in dates, measured in ms
   */


  function compareDates(date1, date2, timeless) {
    if (timeless === void 0) {
      timeless = true;
    }

    if (timeless !== false) {
      return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
    }

    return date1.getTime() - date2.getTime();
  }

  var isBetween = function isBetween(ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
  };

  var duration = {
    DAY: 86400000
  };

  function getDefaultHours(config) {
    var hours = config.defaultHour;
    var minutes = config.defaultMinute;
    var seconds = config.defaultSeconds;

    if (config.minDate !== undefined) {
      var minHour = config.minDate.getHours();
      var minMinutes = config.minDate.getMinutes();
      var minSeconds = config.minDate.getSeconds();

      if (hours < minHour) {
        hours = minHour;
      }

      if (hours === minHour && minutes < minMinutes) {
        minutes = minMinutes;
      }

      if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
    }

    if (config.maxDate !== undefined) {
      var maxHr = config.maxDate.getHours();
      var maxMinutes = config.maxDate.getMinutes();
      hours = Math.min(hours, maxHr);
      if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
      if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
    }

    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  if (typeof Object.assign !== "function") {
    Object.assign = function (target) {
      var args = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }

      if (!target) {
        throw TypeError("Cannot convert undefined or null to object");
      }

      var _loop_1 = function _loop_1(source) {
        if (source) {
          Object.keys(source).forEach(function (key) {
            return target[key] = source[key];
          });
        }
      };

      for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var source = args_1[_a];

        _loop_1(source);
      }

      return target;
    };
  }

  var DEBOUNCED_CHANGE_MS = 300;

  function FlatpickrInstance(element, instanceConfig) {
    var self = {
      config: _assign(_assign({}, defaults), flatpickr.defaultConfig),
      l10n: english
    };
    self.parseDate = createDateParser({
      config: self.config,
      l10n: self.l10n
    });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = createElement;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;

    function setupHelperFunctions() {
      self.utils = {
        getDaysInMonth: function getDaysInMonth(month, yr) {
          if (month === void 0) {
            month = self.currentMonth;
          }

          if (yr === void 0) {
            yr = self.currentYear;
          }

          if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
          return self.l10n.daysInMonth[month];
        }
      };
    }

    function init() {
      self.element = self.input = element;
      self.isOpen = false;
      parseConfig();
      setupLocale();
      setupInputs();
      setupDates();
      setupHelperFunctions();
      if (!self.isMobile) build();
      bindEvents();

      if (self.selectedDates.length || self.config.noCalendar) {
        if (self.config.enableTime) {
          setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
        }

        updateValue(false);
      }

      setCalendarWidth();
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      /* TODO: investigate this further
                 Currently, there is weird positioning behavior in safari causing pages
        to scroll up. https://github.com/chmln/flatpickr/issues/563
                 However, most browsers are not Safari and positioning is expensive when used
        in scale. https://github.com/chmln/flatpickr/issues/1096
      */

      if (!self.isMobile && isSafari) {
        positionCalendar();
      }

      triggerEvent("onReady");
    }

    function bindToInstance(fn) {
      return fn.bind(self);
    }

    function setCalendarWidth() {
      var config = self.config;

      if (config.weekNumbers === false && config.showMonths === 1) {
        return;
      } else if (config.noCalendar !== true) {
        window.requestAnimationFrame(function () {
          if (self.calendarContainer !== undefined) {
            self.calendarContainer.style.visibility = "hidden";
            self.calendarContainer.style.display = "block";
          }

          if (self.daysContainer !== undefined) {
            var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
            self.daysContainer.style.width = daysWidth + "px";
            self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
            self.calendarContainer.style.removeProperty("visibility");
            self.calendarContainer.style.removeProperty("display");
          }
        });
      }
    }
    /**
     * The handler for all events targeting the time inputs
     */


    function updateTime(e) {
      if (self.selectedDates.length === 0) {
        var defaultDate = self.config.minDate === undefined || compareDates(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
        var defaults = getDefaultHours(self.config);
        defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
        self.selectedDates = [defaultDate];
        self.latestSelectedDateObj = defaultDate;
      }

      if (e !== undefined && e.type !== "blur") {
        timeWrapper(e);
      }

      var prevValue = self._input.value;
      setHoursFromInputs();
      updateValue();

      if (self._input.value !== prevValue) {
        self._debouncedChange();
      }
    }

    function ampm2military(hour, amPM) {
      return hour % 12 + 12 * _int(amPM === self.l10n.amPM[1]);
    }

    function military2ampm(hour) {
      switch (hour % 24) {
        case 0:
        case 12:
          return 12;

        default:
          return hour % 12;
      }
    }
    /**
     * Syncs the selected date object time with user's time input
     */


    function setHoursFromInputs() {
      if (self.hourElement === undefined || self.minuteElement === undefined) return;
      var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
          minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
          seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

      if (self.amPM !== undefined) {
        hours = ampm2military(hours, self.amPM.textContent);
      }

      var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
      var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
      }

      if (limitMinHours) {
        var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
      }

      setHours(hours, minutes, seconds);
    }
    /**
     * Syncs time input values with a date
     */


    function setHoursFromDate(dateObj) {
      var date = dateObj || self.latestSelectedDateObj;

      if (date) {
        setHours(date.getHours(), date.getMinutes(), date.getSeconds());
      }
    }
    /**
     * Sets the hours, minutes, and optionally seconds
     * of the latest selected date object and the
     * corresponding time inputs
     * @param {Number} hours the hour. whether its military
     *                 or am-pm gets inferred from config
     * @param {Number} minutes the minutes
     * @param {Number} seconds the seconds (optional)
     */


    function setHours(hours, minutes, seconds) {
      if (self.latestSelectedDateObj !== undefined) {
        self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
      }

      if (!self.hourElement || !self.minuteElement || self.isMobile) return;
      self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * _int(hours % 12 === 0) : hours);
      self.minuteElement.value = pad(minutes);
      if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[_int(hours >= 12)];
      if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
    }
    /**
     * Handles the year input and incrementing events
     * @param {Event} event the keyup or increment event
     */


    function onYearInput(event) {
      var eventTarget = getEventTarget(event);
      var year = parseInt(eventTarget.value) + (event.delta || 0);

      if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
        changeYear(year);
      }
    }
    /**
     * Essentially addEventListener + tracking
     * @param {Element} element the element to addEventListener to
     * @param {String} event the event name
     * @param {Function} handler the event handler
     */


    function bind(element, event, handler, options) {
      if (event instanceof Array) return event.forEach(function (ev) {
        return bind(element, ev, handler, options);
      });
      if (element instanceof Array) return element.forEach(function (el) {
        return bind(el, event, handler, options);
      });
      element.addEventListener(event, handler, options);

      self._handlers.push({
        remove: function remove() {
          return element.removeEventListener(event, handler);
        }
      });
    }

    function triggerChange() {
      triggerEvent("onChange");
    }
    /**
     * Adds all the necessary event listeners
     */


    function bindEvents() {
      if (self.config.wrap) {
        ["open", "close", "toggle", "clear"].forEach(function (evt) {
          Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
            return bind(el, "click", self[evt]);
          });
        });
      }

      if (self.isMobile) {
        setupMobile();
        return;
      }

      var debouncedResize = debounce(onResize, 50);
      self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
      if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
        if (self.config.mode === "range") onMouseOver(getEventTarget(e));
      });
      bind(window.document.body, "keydown", onKeyDown);
      if (!self.config.inline && !self.config["static"]) bind(window, "resize", debouncedResize);
      if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", documentClick);
      bind(window.document, "focus", documentClick, {
        capture: true
      });

      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "click", self.open);
      }

      if (self.daysContainer !== undefined) {
        bind(self.monthNav, "click", onMonthNavClick);
        bind(self.monthNav, ["keyup", "increment"], onYearInput);
        bind(self.daysContainer, "click", selectDate);
      }

      if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
        var selText = function selText(e) {
          return getEventTarget(e).select();
        };

        bind(self.timeContainer, ["increment"], updateTime);
        bind(self.timeContainer, "blur", updateTime, {
          capture: true
        });
        bind(self.timeContainer, "click", timeIncrement);
        bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
        if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
          return self.secondElement && self.secondElement.select();
        });

        if (self.amPM !== undefined) {
          bind(self.amPM, "click", function (e) {
            updateTime(e);
            triggerChange();
          });
        }
      }

      if (self.config.allowInput) {
        bind(self._input, "blur", onBlur);
      }
    }
    /**
     * Set the calendar view to a particular date.
     * @param {Date} jumpDate the date to set the view to
     * @param {boolean} triggerChange if change events should be triggered
     */


    function jumpToDate(jumpDate, triggerChange) {
      var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
      var oldYear = self.currentYear;
      var oldMonth = self.currentMonth;

      try {
        if (jumpTo !== undefined) {
          self.currentYear = jumpTo.getFullYear();
          self.currentMonth = jumpTo.getMonth();
        }
      } catch (e) {
        /* istanbul ignore next */
        e.message = "Invalid date supplied: " + jumpTo;
        self.config.errorHandler(e);
      }

      if (triggerChange && self.currentYear !== oldYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }

      if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
        triggerEvent("onMonthChange");
      }

      self.redraw();
    }
    /**
     * The up/down arrow handler for time inputs
     * @param {Event} e the click event
     */


    function timeIncrement(e) {
      var eventTarget = getEventTarget(e);
      if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    /**
     * Increments/decrements the value of input associ-
     * ated with the up/down arrow by dispatching an
     * "increment" event on the input.
     *
     * @param {Event} e the click event
     * @param {Number} delta the diff (usually 1 or -1)
     * @param {Element} inputElem the input element
     */


    function incrementNumInput(e, delta, inputElem) {
      var target = e && getEventTarget(e);
      var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
      var event = createEvent("increment");
      event.delta = delta;
      input && input.dispatchEvent(event);
    }

    function build() {
      var fragment = window.document.createDocumentFragment();
      self.calendarContainer = createElement("div", "flatpickr-calendar");
      self.calendarContainer.tabIndex = -1;

      if (!self.config.noCalendar) {
        fragment.appendChild(buildMonthNav());
        self.innerContainer = createElement("div", "flatpickr-innerContainer");

        if (self.config.weekNumbers) {
          var _a = buildWeeks(),
              weekWrapper = _a.weekWrapper,
              weekNumbers = _a.weekNumbers;

          self.innerContainer.appendChild(weekWrapper);
          self.weekNumbers = weekNumbers;
          self.weekWrapper = weekWrapper;
        }

        self.rContainer = createElement("div", "flatpickr-rContainer");
        self.rContainer.appendChild(buildWeekdays());

        if (!self.daysContainer) {
          self.daysContainer = createElement("div", "flatpickr-days");
          self.daysContainer.tabIndex = -1;
        }

        buildDays();
        self.rContainer.appendChild(self.daysContainer);
        self.innerContainer.appendChild(self.rContainer);
        fragment.appendChild(self.innerContainer);
      }

      if (self.config.enableTime) {
        fragment.appendChild(buildTime());
      }

      toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
      toggleClass(self.calendarContainer, "animate", self.config.animate === true);
      toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
      self.calendarContainer.appendChild(fragment);
      var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

      if (self.config.inline || self.config["static"]) {
        self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

        if (self.config.inline) {
          if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
        }

        if (self.config["static"]) {
          var wrapper = createElement("div", "flatpickr-wrapper");
          if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
          wrapper.appendChild(self.element);
          if (self.altInput) wrapper.appendChild(self.altInput);
          wrapper.appendChild(self.calendarContainer);
        }
      }

      if (!self.config["static"] && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
    }

    function createDay(className, date, dayNumber, i) {
      var dateIsEnabled = isEnabled(date, true),
          dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
      dayElement.dateObj = date;
      dayElement.$i = i;
      dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

      if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
        self.todayDateElem = dayElement;
        dayElement.classList.add("today");
        dayElement.setAttribute("aria-current", "date");
      }

      if (dateIsEnabled) {
        dayElement.tabIndex = -1;

        if (isDateSelected(date)) {
          dayElement.classList.add("selected");
          self.selectedDateElem = dayElement;

          if (self.config.mode === "range") {
            toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
            toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
            if (className === "nextMonthDay") dayElement.classList.add("inRange");
          }
        }
      } else {
        dayElement.classList.add("flatpickr-disabled");
      }

      if (self.config.mode === "range") {
        if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
      }

      if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
        self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
      }

      triggerEvent("onDayCreate", dayElement);
      return dayElement;
    }

    function focusOnDayElem(targetNode) {
      targetNode.focus();
      if (self.config.mode === "range") onMouseOver(targetNode);
    }

    function getFirstAvailableDay(delta) {
      var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
      var endMonth = delta > 0 ? self.config.showMonths : -1;

      for (var m = startMonth; m != endMonth; m += delta) {
        var month = self.daysContainer.children[m];
        var startIndex = delta > 0 ? 0 : month.children.length - 1;
        var endIndex = delta > 0 ? month.children.length : -1;

        for (var i = startIndex; i != endIndex; i += delta) {
          var c = month.children[i];
          if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
        }
      }

      return undefined;
    }

    function getNextAvailableDay(current, delta) {
      var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
      var endMonth = delta > 0 ? self.config.showMonths : -1;
      var loopDelta = delta > 0 ? 1 : -1;

      for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
        var month = self.daysContainer.children[m];
        var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
        var numMonthDays = month.children.length;

        for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
          var c = month.children[i];
          if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
        }
      }

      self.changeMonth(loopDelta);
      focusOnDay(getFirstAvailableDay(loopDelta), 0);
      return undefined;
    }

    function focusOnDay(current, offset) {
      var dayFocused = isInView(document.activeElement || document.body);
      var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);

      if (startElem === undefined) {
        self._input.focus();
      } else if (!dayFocused) {
        focusOnDayElem(startElem);
      } else {
        getNextAvailableDay(startElem, offset);
      }
    }

    function buildMonthDays(year, month) {
      var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
      var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
      var daysInMonth = self.utils.getDaysInMonth(month, year),
          days = window.document.createDocumentFragment(),
          isMultiMonth = self.config.showMonths > 1,
          prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
          nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
      var dayNumber = prevMonthDays + 1 - firstOfMonth,
          dayIndex = 0; // prepend days from the ending of previous month

      for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
        days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
      } // Start at 1 since there is no 0th day


      for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
        days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
      } // append days from the next month


      for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
        days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
      } //updateNavigationCurrentMonth();


      var dayContainer = createElement("div", "dayContainer");
      dayContainer.appendChild(days);
      return dayContainer;
    }

    function buildDays() {
      if (self.daysContainer === undefined) {
        return;
      }

      clearNode(self.daysContainer); // TODO: week numbers for each month

      if (self.weekNumbers) clearNode(self.weekNumbers);
      var frag = document.createDocumentFragment();

      for (var i = 0; i < self.config.showMonths; i++) {
        var d = new Date(self.currentYear, self.currentMonth, 1);
        d.setMonth(self.currentMonth + i);
        frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
      }

      self.daysContainer.appendChild(frag);
      self.days = self.daysContainer.firstChild;

      if (self.config.mode === "range" && self.selectedDates.length === 1) {
        onMouseOver();
      }
    }

    function buildMonthSwitch() {
      if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;

      var shouldBuildMonth = function shouldBuildMonth(month) {
        if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
          return false;
        }

        return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
      };

      self.monthsDropdownContainer.tabIndex = -1;
      self.monthsDropdownContainer.innerHTML = "";

      for (var i = 0; i < 12; i++) {
        if (!shouldBuildMonth(i)) continue;
        var month = createElement("option", "flatpickr-monthDropdown-month");
        month.value = new Date(self.currentYear, i).getMonth().toString();
        month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
        month.tabIndex = -1;

        if (self.currentMonth === i) {
          month.selected = true;
        }

        self.monthsDropdownContainer.appendChild(month);
      }
    }

    function buildMonth() {
      var container = createElement("div", "flatpickr-month");
      var monthNavFragment = window.document.createDocumentFragment();
      var monthElement;

      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        monthElement = createElement("span", "cur-month");
      } else {
        self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
        self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
        bind(self.monthsDropdownContainer, "change", function (e) {
          var target = getEventTarget(e);
          var selectedMonth = parseInt(target.value, 10);
          self.changeMonth(selectedMonth - self.currentMonth);
          triggerEvent("onMonthChange");
        });
        buildMonthSwitch();
        monthElement = self.monthsDropdownContainer;
      }

      var yearInput = createNumberInput("cur-year", {
        tabindex: "-1"
      });
      var yearElement = yearInput.getElementsByTagName("input")[0];
      yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);

      if (self.config.minDate) {
        yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
      }

      if (self.config.maxDate) {
        yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
        yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
      }

      var currentMonth = createElement("div", "flatpickr-current-month");
      currentMonth.appendChild(monthElement);
      currentMonth.appendChild(yearInput);
      monthNavFragment.appendChild(currentMonth);
      container.appendChild(monthNavFragment);
      return {
        container: container,
        yearElement: yearElement,
        monthElement: monthElement
      };
    }

    function buildMonths() {
      clearNode(self.monthNav);
      self.monthNav.appendChild(self.prevMonthNav);

      if (self.config.showMonths) {
        self.yearElements = [];
        self.monthElements = [];
      }

      for (var m = self.config.showMonths; m--;) {
        var month = buildMonth();
        self.yearElements.push(month.yearElement);
        self.monthElements.push(month.monthElement);
        self.monthNav.appendChild(month.container);
      }

      self.monthNav.appendChild(self.nextMonthNav);
    }

    function buildMonthNav() {
      self.monthNav = createElement("div", "flatpickr-months");
      self.yearElements = [];
      self.monthElements = [];
      self.prevMonthNav = createElement("span", "flatpickr-prev-month");
      self.prevMonthNav.innerHTML = self.config.prevArrow;
      self.nextMonthNav = createElement("span", "flatpickr-next-month");
      self.nextMonthNav.innerHTML = self.config.nextArrow;
      buildMonths();
      Object.defineProperty(self, "_hidePrevMonthArrow", {
        get: function get() {
          return self.__hidePrevMonthArrow;
        },
        set: function set(bool) {
          if (self.__hidePrevMonthArrow !== bool) {
            toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
            self.__hidePrevMonthArrow = bool;
          }
        }
      });
      Object.defineProperty(self, "_hideNextMonthArrow", {
        get: function get() {
          return self.__hideNextMonthArrow;
        },
        set: function set(bool) {
          if (self.__hideNextMonthArrow !== bool) {
            toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
            self.__hideNextMonthArrow = bool;
          }
        }
      });
      self.currentYearElement = self.yearElements[0];
      updateNavigationCurrentMonth();
      return self.monthNav;
    }

    function buildTime() {
      self.calendarContainer.classList.add("hasTime");
      if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
      var defaults = getDefaultHours(self.config);
      self.timeContainer = createElement("div", "flatpickr-time");
      self.timeContainer.tabIndex = -1;
      var separator = createElement("span", "flatpickr-time-separator", ":");
      var hourInput = createNumberInput("flatpickr-hour", {
        "aria-label": self.l10n.hourAriaLabel
      });
      self.hourElement = hourInput.getElementsByTagName("input")[0];
      var minuteInput = createNumberInput("flatpickr-minute", {
        "aria-label": self.l10n.minuteAriaLabel
      });
      self.minuteElement = minuteInput.getElementsByTagName("input")[0];
      self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
      self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
      self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
      self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
      self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
      self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
      self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
      self.hourElement.setAttribute("maxlength", "2");
      self.minuteElement.setAttribute("min", "0");
      self.minuteElement.setAttribute("max", "59");
      self.minuteElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(hourInput);
      self.timeContainer.appendChild(separator);
      self.timeContainer.appendChild(minuteInput);
      if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

      if (self.config.enableSeconds) {
        self.timeContainer.classList.add("hasSeconds");
        var secondInput = createNumberInput("flatpickr-second");
        self.secondElement = secondInput.getElementsByTagName("input")[0];
        self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
        self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
        self.secondElement.setAttribute("min", "0");
        self.secondElement.setAttribute("max", "59");
        self.secondElement.setAttribute("maxlength", "2");
        self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
        self.timeContainer.appendChild(secondInput);
      }

      if (!self.config.time_24hr) {
        // add self.amPM if appropriate
        self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[_int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
        self.amPM.title = self.l10n.toggleTitle;
        self.amPM.tabIndex = -1;
        self.timeContainer.appendChild(self.amPM);
      }

      return self.timeContainer;
    }

    function buildWeekdays() {
      if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");else clearNode(self.weekdayContainer);

      for (var i = self.config.showMonths; i--;) {
        var container = createElement("div", "flatpickr-weekdaycontainer");
        self.weekdayContainer.appendChild(container);
      }

      updateWeekdays();
      return self.weekdayContainer;
    }

    function updateWeekdays() {
      if (!self.weekdayContainer) {
        return;
      }

      var firstDayOfWeek = self.l10n.firstDayOfWeek;

      var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);

      if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
        weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
      }

      for (var i = self.config.showMonths; i--;) {
        self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
      }
    }
    /* istanbul ignore next */


    function buildWeeks() {
      self.calendarContainer.classList.add("hasWeeks");
      var weekWrapper = createElement("div", "flatpickr-weekwrapper");
      weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
      var weekNumbers = createElement("div", "flatpickr-weeks");
      weekWrapper.appendChild(weekNumbers);
      return {
        weekWrapper: weekWrapper,
        weekNumbers: weekNumbers
      };
    }

    function changeMonth(value, isOffset) {
      if (isOffset === void 0) {
        isOffset = true;
      }

      var delta = isOffset ? value : value - self.currentMonth;
      if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
      self.currentMonth += delta;

      if (self.currentMonth < 0 || self.currentMonth > 11) {
        self.currentYear += self.currentMonth > 11 ? 1 : -1;
        self.currentMonth = (self.currentMonth + 12) % 12;
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }

      buildDays();
      triggerEvent("onMonthChange");
      updateNavigationCurrentMonth();
    }

    function clear(triggerChangeEvent, toInitial) {
      if (triggerChangeEvent === void 0) {
        triggerChangeEvent = true;
      }

      if (toInitial === void 0) {
        toInitial = true;
      }

      self.input.value = "";
      if (self.altInput !== undefined) self.altInput.value = "";
      if (self.mobileInput !== undefined) self.mobileInput.value = "";
      self.selectedDates = [];
      self.latestSelectedDateObj = undefined;

      if (toInitial === true) {
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
      }

      if (self.config.enableTime === true) {
        var _a = getDefaultHours(self.config),
            hours = _a.hours,
            minutes = _a.minutes,
            seconds = _a.seconds;

        setHours(hours, minutes, seconds);
      }

      self.redraw();
      if (triggerChangeEvent) // triggerChangeEvent is true (default) or an Event
        triggerEvent("onChange");
    }

    function close() {
      self.isOpen = false;

      if (!self.isMobile) {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.classList.remove("open");
        }

        if (self._input !== undefined) {
          self._input.classList.remove("active");
        }
      }

      triggerEvent("onClose");
    }

    function destroy() {
      if (self.config !== undefined) triggerEvent("onDestroy");

      for (var i = self._handlers.length; i--;) {
        self._handlers[i].remove();
      }

      self._handlers = [];

      if (self.mobileInput) {
        if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
        self.mobileInput = undefined;
      } else if (self.calendarContainer && self.calendarContainer.parentNode) {
        if (self.config["static"] && self.calendarContainer.parentNode) {
          var wrapper = self.calendarContainer.parentNode;
          wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

          if (wrapper.parentNode) {
            while (wrapper.firstChild) {
              wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
            }

            wrapper.parentNode.removeChild(wrapper);
          }
        } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
      }

      if (self.altInput) {
        self.input.type = "text";
        if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
        delete self.altInput;
      }

      if (self.input) {
        self.input.type = self.input._type;
        self.input.classList.remove("flatpickr-input");
        self.input.removeAttribute("readonly");
      }

      ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
        try {
          delete self[k];
        } catch (_) {}
      });
    }

    function isCalendarElem(elem) {
      if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
      return self.calendarContainer.contains(elem);
    }

    function documentClick(e) {
      if (self.isOpen && !self.config.inline) {
        var eventTarget_1 = getEventTarget(e);
        var isCalendarElement = isCalendarElem(eventTarget_1);
        var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || // web components
        // e.path is not present in all browsers. circumventing typechecks
        e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
        var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
        var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
          return elem.contains(eventTarget_1);
        });

        if (lostFocus && isIgnored) {
          if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) {
            updateTime();
          }

          self.close();

          if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) {
            self.clear(false);
            self.redraw();
          }
        }
      }
    }

    function changeYear(newYear) {
      if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
      var newYearNum = newYear,
          isNewYear = self.currentYear !== newYearNum;
      self.currentYear = newYearNum || self.currentYear;

      if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
        self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
      } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
        self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
      }

      if (isNewYear) {
        self.redraw();
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
    }

    function isEnabled(date, timeless) {
      var _a;

      if (timeless === void 0) {
        timeless = true;
      }

      var dateToCheck = self.parseDate(date, undefined, timeless); // timeless

      if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
      if (!self.config.enable && self.config.disable.length === 0) return true;
      if (dateToCheck === undefined) return false;
      var bool = !!self.config.enable,
          array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;

      for (var i = 0, d = void 0; i < array.length; i++) {
        d = array[i];
        if (typeof d === "function" && d(dateToCheck) // disabled by function
        ) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) // disabled by date
          return bool;else if (typeof d === "string") {
          // disabled by date string
          var parsed = self.parseDate(d, undefined, true);
          return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
        } else if ( // disabled by range
        _typeof(d) === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
      }

      return !bool;
    }

    function isInView(elem) {
      if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
      return false;
    }

    function onBlur(e) {
      var isInput = e.target === self._input;

      if (isInput && (self.selectedDates.length > 0 || self._input.value.length > 0) && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
        self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
      }
    }

    function onKeyDown(e) {
      // e.key                      e.keyCode
      // "Backspace"                        8
      // "Tab"                              9
      // "Enter"                           13
      // "Escape"     (IE "Esc")           27
      // "ArrowLeft"  (IE "Left")          37
      // "ArrowUp"    (IE "Up")            38
      // "ArrowRight" (IE "Right")         39
      // "ArrowDown"  (IE "Down")          40
      // "Delete"     (IE "Del")           46
      var eventTarget = getEventTarget(e);
      var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
      var allowInput = self.config.allowInput;
      var allowKeydown = self.isOpen && (!allowInput || !isInput);
      var allowInlineKeydown = self.config.inline && isInput && !allowInput;

      if (e.keyCode === 13 && isInput) {
        if (allowInput) {
          self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
          return eventTarget.blur();
        } else {
          self.open();
        }
      } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
        var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);

        switch (e.keyCode) {
          case 13:
            if (isTimeObj) {
              e.preventDefault();
              updateTime();
              focusAndClose();
            } else selectDate(e);

            break;

          case 27:
            // escape
            e.preventDefault();
            focusAndClose();
            break;

          case 8:
          case 46:
            if (isInput && !self.config.allowInput) {
              e.preventDefault();
              self.clear();
            }

            break;

          case 37:
          case 39:
            if (!isTimeObj && !isInput) {
              e.preventDefault();

              if (self.daysContainer !== undefined && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
                var delta_1 = e.keyCode === 39 ? 1 : -1;
                if (!e.ctrlKey) focusOnDay(undefined, delta_1);else {
                  e.stopPropagation();
                  changeMonth(delta_1);
                  focusOnDay(getFirstAvailableDay(1), 0);
                }
              }
            } else if (self.hourElement) self.hourElement.focus();

            break;

          case 38:
          case 40:
            e.preventDefault();
            var delta = e.keyCode === 40 ? 1 : -1;

            if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
              if (e.ctrlKey) {
                e.stopPropagation();
                changeYear(self.currentYear - delta);
                focusOnDay(getFirstAvailableDay(1), 0);
              } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
            } else if (eventTarget === self.currentYearElement) {
              changeYear(self.currentYear - delta);
            } else if (self.config.enableTime) {
              if (!isTimeObj && self.hourElement) self.hourElement.focus();
              updateTime(e);

              self._debouncedChange();
            }

            break;

          case 9:
            if (isTimeObj) {
              var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(function (x) {
                return x;
              });
              var i = elems.indexOf(eventTarget);

              if (i !== -1) {
                var target = elems[i + (e.shiftKey ? -1 : 1)];
                e.preventDefault();

                (target || self._input).focus();
              }
            } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
              e.preventDefault();

              self._input.focus();
            }

            break;
        }
      }

      if (self.amPM !== undefined && eventTarget === self.amPM) {
        switch (e.key) {
          case self.l10n.amPM[0].charAt(0):
          case self.l10n.amPM[0].charAt(0).toLowerCase():
            self.amPM.textContent = self.l10n.amPM[0];
            setHoursFromInputs();
            updateValue();
            break;

          case self.l10n.amPM[1].charAt(0):
          case self.l10n.amPM[1].charAt(0).toLowerCase():
            self.amPM.textContent = self.l10n.amPM[1];
            setHoursFromInputs();
            updateValue();
            break;
        }
      }

      if (isInput || isCalendarElem(eventTarget)) {
        triggerEvent("onKeyDown", e);
      }
    }

    function onMouseOver(elem) {
      if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled"))) return;
      var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
          initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
          rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
          rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
      var containsDisabled = false;
      var minRange = 0,
          maxRange = 0;

      for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
        if (!isEnabled(new Date(t), true)) {
          containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
          if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
        }
      }

      for (var m = 0; m < self.config.showMonths; m++) {
        var month = self.daysContainer.children[m];

        var _loop_1 = function _loop_1(i, l) {
          var dayElem = month.children[i],
              date = dayElem.dateObj;
          var timestamp = date.getTime();
          var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

          if (outOfRange) {
            dayElem.classList.add("notAllowed");
            ["inRange", "startRange", "endRange"].forEach(function (c) {
              dayElem.classList.remove(c);
            });
            return "continue";
          } else if (containsDisabled && !outOfRange) return "continue";

          ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
            dayElem.classList.remove(c);
          });

          if (elem !== undefined) {
            elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
            if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
            if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
          }
        };

        for (var i = 0, l = month.children.length; i < l; i++) {
          _loop_1(i, l);
        }
      }
    }

    function onResize() {
      if (self.isOpen && !self.config["static"] && !self.config.inline) positionCalendar();
    }

    function open(e, positionElement) {
      if (positionElement === void 0) {
        positionElement = self._positionElement;
      }

      if (self.isMobile === true) {
        if (e) {
          e.preventDefault();
          var eventTarget = getEventTarget(e);

          if (eventTarget) {
            eventTarget.blur();
          }
        }

        if (self.mobileInput !== undefined) {
          self.mobileInput.focus();
          self.mobileInput.click();
        }

        triggerEvent("onOpen");
        return;
      } else if (self._input.disabled || self.config.inline) {
        return;
      }

      var wasOpen = self.isOpen;
      self.isOpen = true;

      if (!wasOpen) {
        self.calendarContainer.classList.add("open");

        self._input.classList.add("active");

        triggerEvent("onOpen");
        positionCalendar(positionElement);
      }

      if (self.config.enableTime === true && self.config.noCalendar === true) {
        if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
          setTimeout(function () {
            return self.hourElement.select();
          }, 50);
        }
      }
    }

    function minMaxDateSetter(type) {
      return function (date) {
        var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
        var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

        if (dateObj !== undefined) {
          self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
        }

        if (self.selectedDates) {
          self.selectedDates = self.selectedDates.filter(function (d) {
            return isEnabled(d);
          });
          if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
          updateValue();
        }

        if (self.daysContainer) {
          redraw();
          if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
          self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
        }
      };
    }

    function parseConfig() {
      var boolOpts = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

      var userConfig = _assign(_assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);

      var formats = {};
      self.config.parseDate = userConfig.parseDate;
      self.config.formatDate = userConfig.formatDate;
      Object.defineProperty(self.config, "enable", {
        get: function get() {
          return self.config._enable;
        },
        set: function set(dates) {
          self.config._enable = parseDateRules(dates);
        }
      });
      Object.defineProperty(self.config, "disable", {
        get: function get() {
          return self.config._disable;
        },
        set: function set(dates) {
          self.config._disable = parseDateRules(dates);
        }
      });
      var timeMode = userConfig.mode === "time";

      if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
        var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
        formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
      }

      if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
        var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
        formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
      }

      Object.defineProperty(self.config, "minDate", {
        get: function get() {
          return self.config._minDate;
        },
        set: minMaxDateSetter("min")
      });
      Object.defineProperty(self.config, "maxDate", {
        get: function get() {
          return self.config._maxDate;
        },
        set: minMaxDateSetter("max")
      });

      var minMaxTimeSetter = function minMaxTimeSetter(type) {
        return function (val) {
          self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
        };
      };

      Object.defineProperty(self.config, "minTime", {
        get: function get() {
          return self.config._minTime;
        },
        set: minMaxTimeSetter("min")
      });
      Object.defineProperty(self.config, "maxTime", {
        get: function get() {
          return self.config._maxTime;
        },
        set: minMaxTimeSetter("max")
      });

      if (userConfig.mode === "time") {
        self.config.noCalendar = true;
        self.config.enableTime = true;
      }

      Object.assign(self.config, formats, userConfig);

      for (var i = 0; i < boolOpts.length; i++) {
        // https://github.com/microsoft/TypeScript/issues/31663
        self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
      }

      HOOKS.filter(function (hook) {
        return self.config[hook] !== undefined;
      }).forEach(function (hook) {
        self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
      });
      self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      for (var i = 0; i < self.config.plugins.length; i++) {
        var pluginConf = self.config.plugins[i](self) || {};

        for (var key in pluginConf) {
          if (HOOKS.indexOf(key) > -1) {
            self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
          } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
        }
      }

      if (!userConfig.altInputClass) {
        self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
      }

      triggerEvent("onParseConfig");
    }

    function getInputElem() {
      return self.config.wrap ? element.querySelector("[data-input]") : element;
    }

    function setupLocale() {
      if (_typeof(self.config.locale) !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
      self.l10n = _assign(_assign({}, flatpickr.l10ns["default"]), _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
      tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";

      var userConfig = _assign(_assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));

      if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
        self.config.time_24hr = self.l10n.time_24hr;
      }

      self.formatDate = createDateFormatter(self);
      self.parseDate = createDateParser({
        config: self.config,
        l10n: self.l10n
      });
    }

    function positionCalendar(customPositionElement) {
      if (typeof self.config.position === "function") {
        return void self.config.position(self, customPositionElement);
      }

      if (self.calendarContainer === undefined) return;
      triggerEvent("onPreCalendarPosition");
      var positionElement = customPositionElement || self._positionElement;
      var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
        return acc + child.offsetHeight;
      }, 0),
          calendarWidth = self.calendarContainer.offsetWidth,
          configPos = self.config.position.split(" "),
          configPosVertical = configPos[0],
          configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
          inputBounds = positionElement.getBoundingClientRect(),
          distanceFromBottom = window.innerHeight - inputBounds.bottom,
          showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
      var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
      toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
      toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
      if (self.config.inline) return;
      var left = window.pageXOffset + inputBounds.left;
      var isCenter = false;
      var isRight = false;

      if (configPosHorizontal === "center") {
        left -= (calendarWidth - inputBounds.width) / 2;
        isCenter = true;
      } else if (configPosHorizontal === "right") {
        left -= calendarWidth - inputBounds.width;
        isRight = true;
      }

      toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
      toggleClass(self.calendarContainer, "arrowCenter", isCenter);
      toggleClass(self.calendarContainer, "arrowRight", isRight);
      var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
      var rightMost = left + calendarWidth > window.document.body.offsetWidth;
      var centerMost = right + calendarWidth > window.document.body.offsetWidth;
      toggleClass(self.calendarContainer, "rightMost", rightMost);
      if (self.config["static"]) return;
      self.calendarContainer.style.top = top + "px";

      if (!rightMost) {
        self.calendarContainer.style.left = left + "px";
        self.calendarContainer.style.right = "auto";
      } else if (!centerMost) {
        self.calendarContainer.style.left = "auto";
        self.calendarContainer.style.right = right + "px";
      } else {
        var doc = getDocumentStyleSheet(); // some testing environments don't have css support

        if (doc === undefined) return;
        var bodyWidth = window.document.body.offsetWidth;
        var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
        var centerBefore = ".flatpickr-calendar.centerMost:before";
        var centerAfter = ".flatpickr-calendar.centerMost:after";
        var centerIndex = doc.cssRules.length;
        var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
        toggleClass(self.calendarContainer, "rightMost", false);
        toggleClass(self.calendarContainer, "centerMost", true);
        doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
        self.calendarContainer.style.left = centerLeft + "px";
        self.calendarContainer.style.right = "auto";
      }
    }

    function getDocumentStyleSheet() {
      var editableSheet = null;

      for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];

        try {
          sheet.cssRules;
        } catch (err) {
          continue;
        }

        editableSheet = sheet;
        break;
      }

      return editableSheet != null ? editableSheet : createStyleSheet();
    }

    function createStyleSheet() {
      var style = document.createElement("style");
      document.head.appendChild(style);
      return style.sheet;
    }

    function redraw() {
      if (self.config.noCalendar || self.isMobile) return;
      buildMonthSwitch();
      updateNavigationCurrentMonth();
      buildDays();
    }

    function focusAndClose() {
      self._input.focus();

      if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
        // hack - bugs in the way IE handles focus keeps the calendar open
        setTimeout(self.close, 0);
      } else {
        self.close();
      }
    }

    function selectDate(e) {
      e.preventDefault();
      e.stopPropagation();

      var isSelectable = function isSelectable(day) {
        return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
      };

      var t = findParent(getEventTarget(e), isSelectable);
      if (t === undefined) return;
      var target = t;
      var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
      var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
      self.selectedDateElem = target;
      if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
        var selectedIndex = isDateSelected(selectedDate);
        if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
      } else if (self.config.mode === "range") {
        if (self.selectedDates.length === 2) {
          self.clear(false, false);
        }

        self.latestSelectedDateObj = selectedDate;
        self.selectedDates.push(selectedDate); // unless selecting same date twice, sort ascendingly

        if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
          return a.getTime() - b.getTime();
        });
      }
      setHoursFromInputs();

      if (shouldChangeMonth) {
        var isNewYear = self.currentYear !== selectedDate.getFullYear();
        self.currentYear = selectedDate.getFullYear();
        self.currentMonth = selectedDate.getMonth();

        if (isNewYear) {
          triggerEvent("onYearChange");
          buildMonthSwitch();
        }

        triggerEvent("onMonthChange");
      }

      updateNavigationCurrentMonth();
      buildDays();
      updateValue(); // maintain focus

      if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
        self.selectedDateElem && self.selectedDateElem.focus();
      }
      if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();

      if (self.config.closeOnSelect) {
        var single = self.config.mode === "single" && !self.config.enableTime;
        var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

        if (single || range) {
          focusAndClose();
        }
      }

      triggerChange();
    }

    var CALLBACKS = {
      locale: [setupLocale, updateWeekdays],
      showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
      minDate: [jumpToDate],
      maxDate: [jumpToDate],
      clickOpens: [function () {
        if (self.config.clickOpens === true) {
          bind(self._input, "focus", self.open);
          bind(self._input, "click", self.open);
        } else {
          self._input.removeEventListener("focus", self.open);

          self._input.removeEventListener("click", self.open);
        }
      }]
    };

    function set(option, value) {
      if (option !== null && _typeof(option) === "object") {
        Object.assign(self.config, option);

        for (var key in option) {
          if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function (x) {
            return x();
          });
        }
      } else {
        self.config[option] = value;
        if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
          return x();
        });else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
      }

      self.redraw();
      updateValue(true);
    }

    function setSelectedDate(inputDate, format) {
      var dates = [];
      if (inputDate instanceof Array) dates = inputDate.map(function (d) {
        return self.parseDate(d, format);
      });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
        switch (self.config.mode) {
          case "single":
          case "time":
            dates = [self.parseDate(inputDate, format)];
            break;

          case "multiple":
            dates = inputDate.split(self.config.conjunction).map(function (date) {
              return self.parseDate(date, format);
            });
            break;

          case "range":
            dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
              return self.parseDate(date, format);
            });
            break;
        }
      } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
      self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function (d) {
        return d instanceof Date && isEnabled(d, false);
      });
      if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
        return a.getTime() - b.getTime();
      });
    }

    function setDate(date, triggerChange, format) {
      if (triggerChange === void 0) {
        triggerChange = false;
      }

      if (format === void 0) {
        format = self.config.dateFormat;
      }

      if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
      setSelectedDate(date, format);
      self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
      self.redraw();
      jumpToDate(undefined, triggerChange);
      setHoursFromDate();

      if (self.selectedDates.length === 0) {
        self.clear(false);
      }

      updateValue(triggerChange);
      if (triggerChange) triggerEvent("onChange");
    }

    function parseDateRules(arr) {
      return arr.slice().map(function (rule) {
        if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
          return self.parseDate(rule, undefined, true);
        } else if (rule && _typeof(rule) === "object" && rule.from && rule.to) return {
          from: self.parseDate(rule.from, undefined),
          to: self.parseDate(rule.to, undefined)
        };

        return rule;
      }).filter(function (x) {
        return x;
      }); // remove falsy values
    }

    function setupDates() {
      self.selectedDates = [];
      self.now = self.parseDate(self.config.now) || new Date(); // Workaround IE11 setting placeholder as the input's value

      var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
      if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
      self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
      if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
      if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
      if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
      self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
      self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
    }

    function setupInputs() {
      self.input = getInputElem();
      /* istanbul ignore next */

      if (!self.input) {
        self.config.errorHandler(new Error("Invalid input element specified"));
        return;
      } // hack: store previous type to restore it after destroy()


      self.input._type = self.input.type;
      self.input.type = "text";
      self.input.classList.add("flatpickr-input");
      self._input = self.input;

      if (self.config.altInput) {
        // replicate self.element
        self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
        self._input = self.altInput;
        self.altInput.placeholder = self.input.placeholder;
        self.altInput.disabled = self.input.disabled;
        self.altInput.required = self.input.required;
        self.altInput.tabIndex = self.input.tabIndex;
        self.altInput.type = "text";
        self.input.setAttribute("type", "hidden");
        if (!self.config["static"] && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
      }

      if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
      self._positionElement = self.config.positionElement || self._input;
    }

    function setupMobile() {
      var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
      self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
      self.mobileInput.tabIndex = 1;
      self.mobileInput.type = inputType;
      self.mobileInput.disabled = self.input.disabled;
      self.mobileInput.required = self.input.required;
      self.mobileInput.placeholder = self.input.placeholder;
      self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

      if (self.selectedDates.length > 0) {
        self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
      }

      if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
      if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
      if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
      self.input.type = "hidden";
      if (self.altInput !== undefined) self.altInput.type = "hidden";

      try {
        if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
      } catch (_a) {}

      bind(self.mobileInput, "change", function (e) {
        self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
        triggerEvent("onChange");
        triggerEvent("onClose");
      });
    }

    function toggle(e) {
      if (self.isOpen === true) return self.close();
      self.open(e);
    }

    function triggerEvent(event, data) {
      // If the instance has been destroyed already, all hooks have been removed
      if (self.config === undefined) return;
      var hooks = self.config[event];

      if (hooks !== undefined && hooks.length > 0) {
        for (var i = 0; hooks[i] && i < hooks.length; i++) {
          hooks[i](self.selectedDates, self.input.value, self, data);
        }
      }

      if (event === "onChange") {
        self.input.dispatchEvent(createEvent("change")); // many front-end frameworks bind to the input event

        self.input.dispatchEvent(createEvent("input"));
      }
    }

    function createEvent(name) {
      var e = document.createEvent("Event");
      e.initEvent(name, true, true);
      return e;
    }

    function isDateSelected(date) {
      for (var i = 0; i < self.selectedDates.length; i++) {
        if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
      }

      return false;
    }

    function isDateInRange(date) {
      if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
      return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
    }

    function updateNavigationCurrentMonth() {
      if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
      self.yearElements.forEach(function (yearElement, i) {
        var d = new Date(self.currentYear, self.currentMonth, 1);
        d.setMonth(self.currentMonth + i);

        if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
          self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
        } else {
          self.monthsDropdownContainer.value = d.getMonth().toString();
        }

        yearElement.value = d.getFullYear().toString();
      });
      self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
      self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
    }

    function getDateStr(format) {
      return self.selectedDates.map(function (dObj) {
        return self.formatDate(dObj, format);
      }).filter(function (d, i, arr) {
        return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
      }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
    }
    /**
     * Updates the values of inputs associated with the calendar
     */


    function updateValue(triggerChange) {
      if (triggerChange === void 0) {
        triggerChange = true;
      }

      if (self.mobileInput !== undefined && self.mobileFormatStr) {
        self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
      }

      self.input.value = getDateStr(self.config.dateFormat);

      if (self.altInput !== undefined) {
        self.altInput.value = getDateStr(self.config.altFormat);
      }

      if (triggerChange !== false) triggerEvent("onValueUpdate");
    }

    function onMonthNavClick(e) {
      var eventTarget = getEventTarget(e);
      var isPrevMonth = self.prevMonthNav.contains(eventTarget);
      var isNextMonth = self.nextMonthNav.contains(eventTarget);

      if (isPrevMonth || isNextMonth) {
        changeMonth(isPrevMonth ? -1 : 1);
      } else if (self.yearElements.indexOf(eventTarget) >= 0) {
        eventTarget.select();
      } else if (eventTarget.classList.contains("arrowUp")) {
        self.changeYear(self.currentYear + 1);
      } else if (eventTarget.classList.contains("arrowDown")) {
        self.changeYear(self.currentYear - 1);
      }
    }

    function timeWrapper(e) {
      e.preventDefault();
      var isKeyDown = e.type === "keydown",
          eventTarget = getEventTarget(e),
          input = eventTarget;

      if (self.amPM !== undefined && eventTarget === self.amPM) {
        self.amPM.textContent = self.l10n.amPM[_int(self.amPM.textContent === self.l10n.amPM[0])];
      }

      var min = parseFloat(input.getAttribute("min")),
          max = parseFloat(input.getAttribute("max")),
          step = parseFloat(input.getAttribute("step")),
          curValue = parseInt(input.value, 10),
          delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
      var newValue = curValue + step * delta;

      if (typeof input.value !== "undefined" && input.value.length === 2) {
        var isHourElem = input === self.hourElement,
            isMinuteElem = input === self.minuteElement;

        if (newValue < min) {
          newValue = max + newValue + _int(!isHourElem) + (_int(isHourElem) && _int(!self.amPM));
          if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
        } else if (newValue > max) {
          newValue = input === self.hourElement ? newValue - max - _int(!self.amPM) : min;
          if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
        }

        if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
          self.amPM.textContent = self.l10n.amPM[_int(self.amPM.textContent === self.l10n.amPM[0])];
        }

        input.value = pad(newValue);
      }
    }

    init();
    return self;
  }
  /* istanbul ignore next */


  function _flatpickr(nodeList, config) {
    // static list
    var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
      return x instanceof HTMLElement;
    });
    var instances = [];

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      try {
        if (node.getAttribute("data-fp-omit") !== null) continue;

        if (node._flatpickr !== undefined) {
          node._flatpickr.destroy();

          node._flatpickr = undefined;
        }

        node._flatpickr = FlatpickrInstance(node, config || {});
        instances.push(node._flatpickr);
      } catch (e) {
        console.error(e);
      }
    }

    return instances.length === 1 ? instances[0] : instances;
  }
  /* istanbul ignore next */


  if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
    // browser env
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
      return _flatpickr(this, config);
    };

    HTMLElement.prototype.flatpickr = function (config) {
      return _flatpickr([this], config);
    };
  }
  /* istanbul ignore next */


  var flatpickr = function flatpickr(selector, config) {
    if (typeof selector === "string") {
      return _flatpickr(window.document.querySelectorAll(selector), config);
    } else if (selector instanceof Node) {
      return _flatpickr([selector], config);
    } else {
      return _flatpickr(selector, config);
    }
  };
  /* istanbul ignore next */


  flatpickr.defaultConfig = {};
  flatpickr.l10ns = {
    en: _assign({}, english),
    "default": _assign({}, english)
  };

  flatpickr.localize = function (l10n) {
    flatpickr.l10ns["default"] = _assign(_assign({}, flatpickr.l10ns["default"]), l10n);
  };

  flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = _assign(_assign({}, flatpickr.defaultConfig), config);
  };

  flatpickr.parseDate = createDateParser({});
  flatpickr.formatDate = createDateFormatter({});
  flatpickr.compareDates = compareDates;
  /* istanbul ignore next */

  if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
      return _flatpickr(this, config);
    };
  }

  Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
  };

  if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
  }

  return flatpickr;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/jquery-ui/ui/data.js":
/*!*******************************************!*\
  !*** ./node_modules/jquery-ui/ui/data.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI :data 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: :data Selector
//>>group: Core
//>>description: Selects elements which have data stored under the specified key.
//>>docs: http://api.jqueryui.com/data-selector/
(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  return $.extend($.expr.pseudos, {
    data: $.expr.createPseudo ? $.expr.createPseudo(function (dataName) {
      return function (elem) {
        return !!$.data(elem, dataName);
      };
    }) : // Support: jQuery <1.8
    function (elem, i, match) {
      return !!$.data(elem, match[3]);
    }
  });
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/effect.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery-ui/ui/effect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery UI Effects 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Effects Core
//>>group: Effects

/* eslint-disable max-len */
//>>description: Extends the internal jQuery effects. Includes morphing and easing. Required by all other effects.

/* eslint-enable max-len */
//>>docs: http://api.jqueryui.com/category/effects-core/
//>>demos: http://jqueryui.com/effect/
(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./jquery-var-for-color */ "./node_modules/jquery-ui/ui/jquery-var-for-color.js"), __webpack_require__(/*! ./vendor/jquery-color/jquery.color */ "./node_modules/jquery-ui/ui/vendor/jquery-color/jquery.color.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  var dataSpace = "ui-effects-",
      dataSpaceStyle = "ui-effects-style",
      dataSpaceAnimated = "ui-effects-animated";
  $.effects = {
    effect: {}
  };
  /******************************************************************************/

  /****************************** CLASS ANIMATIONS ******************************/

  /******************************************************************************/

  (function () {
    var classAnimationActions = ["add", "remove", "toggle"],
        shorthandStyles = {
      border: 1,
      borderBottom: 1,
      borderColor: 1,
      borderLeft: 1,
      borderRight: 1,
      borderTop: 1,
      borderWidth: 1,
      margin: 1,
      padding: 1
    };
    $.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (_, prop) {
      $.fx.step[prop] = function (fx) {
        if (fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr) {
          jQuery.style(fx.elem, prop, fx.end);
          fx.setAttr = true;
        }
      };
    });

    function camelCase(string) {
      return string.replace(/-([\da-z])/gi, function (all, letter) {
        return letter.toUpperCase();
      });
    }

    function getElementStyles(elem) {
      var key,
          len,
          style = elem.ownerDocument.defaultView ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : elem.currentStyle,
          styles = {};

      if (style && style.length && style[0] && style[style[0]]) {
        len = style.length;

        while (len--) {
          key = style[len];

          if (typeof style[key] === "string") {
            styles[camelCase(key)] = style[key];
          }
        } // Support: Opera, IE <9

      } else {
        for (key in style) {
          if (typeof style[key] === "string") {
            styles[key] = style[key];
          }
        }
      }

      return styles;
    }

    function styleDifference(oldStyle, newStyle) {
      var diff = {},
          name,
          value;

      for (name in newStyle) {
        value = newStyle[name];

        if (oldStyle[name] !== value) {
          if (!shorthandStyles[name]) {
            if ($.fx.step[name] || !isNaN(parseFloat(value))) {
              diff[name] = value;
            }
          }
        }
      }

      return diff;
    } // Support: jQuery <1.8


    if (!$.fn.addBack) {
      $.fn.addBack = function (selector) {
        return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
      };
    }

    $.effects.animateClass = function (value, duration, easing, callback) {
      var o = $.speed(duration, easing, callback);
      return this.queue(function () {
        var animated = $(this),
            baseClass = animated.attr("class") || "",
            applyClassChange,
            allAnimations = o.children ? animated.find("*").addBack() : animated; // Map the animated objects to store the original styles.

        allAnimations = allAnimations.map(function () {
          var el = $(this);
          return {
            el: el,
            start: getElementStyles(this)
          };
        }); // Apply class change

        applyClassChange = function applyClassChange() {
          $.each(classAnimationActions, function (i, action) {
            if (value[action]) {
              animated[action + "Class"](value[action]);
            }
          });
        };

        applyClassChange(); // Map all animated objects again - calculate new styles and diff

        allAnimations = allAnimations.map(function () {
          this.end = getElementStyles(this.el[0]);
          this.diff = styleDifference(this.start, this.end);
          return this;
        }); // Apply original class

        animated.attr("class", baseClass); // Map all animated objects again - this time collecting a promise

        allAnimations = allAnimations.map(function () {
          var styleInfo = this,
              dfd = $.Deferred(),
              opts = $.extend({}, o, {
            queue: false,
            complete: function complete() {
              dfd.resolve(styleInfo);
            }
          });
          this.el.animate(this.diff, opts);
          return dfd.promise();
        }); // Once all animations have completed:

        $.when.apply($, allAnimations.get()).done(function () {
          // Set the final class
          applyClassChange(); // For each animated element,
          // clear all css properties that were animated

          $.each(arguments, function () {
            var el = this.el;
            $.each(this.diff, function (key) {
              el.css(key, "");
            });
          }); // This is guarnteed to be there if you use jQuery.speed()
          // it also handles dequeuing the next anim...

          o.complete.call(animated[0]);
        });
      });
    };

    $.fn.extend({
      addClass: function (orig) {
        return function (classNames, speed, easing, callback) {
          return speed ? $.effects.animateClass.call(this, {
            add: classNames
          }, speed, easing, callback) : orig.apply(this, arguments);
        };
      }($.fn.addClass),
      removeClass: function (orig) {
        return function (classNames, speed, easing, callback) {
          return arguments.length > 1 ? $.effects.animateClass.call(this, {
            remove: classNames
          }, speed, easing, callback) : orig.apply(this, arguments);
        };
      }($.fn.removeClass),
      toggleClass: function (orig) {
        return function (classNames, force, speed, easing, callback) {
          if (typeof force === "boolean" || force === undefined) {
            if (!speed) {
              // Without speed parameter
              return orig.apply(this, arguments);
            } else {
              return $.effects.animateClass.call(this, force ? {
                add: classNames
              } : {
                remove: classNames
              }, speed, easing, callback);
            }
          } else {
            // Without force parameter
            return $.effects.animateClass.call(this, {
              toggle: classNames
            }, force, speed, easing);
          }
        };
      }($.fn.toggleClass),
      switchClass: function switchClass(remove, add, speed, easing, callback) {
        return $.effects.animateClass.call(this, {
          add: add,
          remove: remove
        }, speed, easing, callback);
      }
    });
  })();
  /******************************************************************************/

  /*********************************** EFFECTS **********************************/

  /******************************************************************************/


  (function () {
    if ($.expr && $.expr.pseudos && $.expr.pseudos.animated) {
      $.expr.pseudos.animated = function (orig) {
        return function (elem) {
          return !!$(elem).data(dataSpaceAnimated) || orig(elem);
        };
      }($.expr.pseudos.animated);
    }

    if ($.uiBackCompat !== false) {
      $.extend($.effects, {
        // Saves a set of properties in a data storage
        save: function save(element, set) {
          var i = 0,
              length = set.length;

          for (; i < length; i++) {
            if (set[i] !== null) {
              element.data(dataSpace + set[i], element[0].style[set[i]]);
            }
          }
        },
        // Restores a set of previously saved properties from a data storage
        restore: function restore(element, set) {
          var val,
              i = 0,
              length = set.length;

          for (; i < length; i++) {
            if (set[i] !== null) {
              val = element.data(dataSpace + set[i]);
              element.css(set[i], val);
            }
          }
        },
        setMode: function setMode(el, mode) {
          if (mode === "toggle") {
            mode = el.is(":hidden") ? "show" : "hide";
          }

          return mode;
        },
        // Wraps the element around a wrapper that copies position properties
        createWrapper: function createWrapper(element) {
          // If the element is already wrapped, return it
          if (element.parent().is(".ui-effects-wrapper")) {
            return element.parent();
          } // Wrap the element


          var props = {
            width: element.outerWidth(true),
            height: element.outerHeight(true),
            "float": element.css("float")
          },
              wrapper = $("<div></div>").addClass("ui-effects-wrapper").css({
            fontSize: "100%",
            background: "transparent",
            border: "none",
            margin: 0,
            padding: 0
          }),
              // Store the size in case width/height are defined in % - Fixes #5245
          size = {
            width: element.width(),
            height: element.height()
          },
              active = document.activeElement; // Support: Firefox
          // Firefox incorrectly exposes anonymous content
          // https://bugzilla.mozilla.org/show_bug.cgi?id=561664

          try {
            // eslint-disable-next-line no-unused-expressions
            active.id;
          } catch (e) {
            active = document.body;
          }

          element.wrap(wrapper); // Fixes #7595 - Elements lose focus when wrapped.

          if (element[0] === active || $.contains(element[0], active)) {
            $(active).trigger("focus");
          } // Hotfix for jQuery 1.4 since some change in wrap() seems to actually
          // lose the reference to the wrapped element


          wrapper = element.parent(); // Transfer positioning properties to the wrapper

          if (element.css("position") === "static") {
            wrapper.css({
              position: "relative"
            });
            element.css({
              position: "relative"
            });
          } else {
            $.extend(props, {
              position: element.css("position"),
              zIndex: element.css("z-index")
            });
            $.each(["top", "left", "bottom", "right"], function (i, pos) {
              props[pos] = element.css(pos);

              if (isNaN(parseInt(props[pos], 10))) {
                props[pos] = "auto";
              }
            });
            element.css({
              position: "relative",
              top: 0,
              left: 0,
              right: "auto",
              bottom: "auto"
            });
          }

          element.css(size);
          return wrapper.css(props).show();
        },
        removeWrapper: function removeWrapper(element) {
          var active = document.activeElement;

          if (element.parent().is(".ui-effects-wrapper")) {
            element.parent().replaceWith(element); // Fixes #7595 - Elements lose focus when wrapped.

            if (element[0] === active || $.contains(element[0], active)) {
              $(active).trigger("focus");
            }
          }

          return element;
        }
      });
    }

    $.extend($.effects, {
      version: "1.13.1",
      define: function define(name, mode, effect) {
        if (!effect) {
          effect = mode;
          mode = "effect";
        }

        $.effects.effect[name] = effect;
        $.effects.effect[name].mode = mode;
        return effect;
      },
      scaledDimensions: function scaledDimensions(element, percent, direction) {
        if (percent === 0) {
          return {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
          };
        }

        var x = direction !== "horizontal" ? (percent || 100) / 100 : 1,
            y = direction !== "vertical" ? (percent || 100) / 100 : 1;
        return {
          height: element.height() * y,
          width: element.width() * x,
          outerHeight: element.outerHeight() * y,
          outerWidth: element.outerWidth() * x
        };
      },
      clipToBox: function clipToBox(animation) {
        return {
          width: animation.clip.right - animation.clip.left,
          height: animation.clip.bottom - animation.clip.top,
          left: animation.clip.left,
          top: animation.clip.top
        };
      },
      // Injects recently queued functions to be first in line (after "inprogress")
      unshift: function unshift(element, queueLength, count) {
        var queue = element.queue();

        if (queueLength > 1) {
          queue.splice.apply(queue, [1, 0].concat(queue.splice(queueLength, count)));
        }

        element.dequeue();
      },
      saveStyle: function saveStyle(element) {
        element.data(dataSpaceStyle, element[0].style.cssText);
      },
      restoreStyle: function restoreStyle(element) {
        element[0].style.cssText = element.data(dataSpaceStyle) || "";
        element.removeData(dataSpaceStyle);
      },
      mode: function mode(element, _mode) {
        var hidden = element.is(":hidden");

        if (_mode === "toggle") {
          _mode = hidden ? "show" : "hide";
        }

        if (hidden ? _mode === "hide" : _mode === "show") {
          _mode = "none";
        }

        return _mode;
      },
      // Translates a [top,left] array into a baseline value
      getBaseline: function getBaseline(origin, original) {
        var y, x;

        switch (origin[0]) {
          case "top":
            y = 0;
            break;

          case "middle":
            y = 0.5;
            break;

          case "bottom":
            y = 1;
            break;

          default:
            y = origin[0] / original.height;
        }

        switch (origin[1]) {
          case "left":
            x = 0;
            break;

          case "center":
            x = 0.5;
            break;

          case "right":
            x = 1;
            break;

          default:
            x = origin[1] / original.width;
        }

        return {
          x: x,
          y: y
        };
      },
      // Creates a placeholder element so that the original element can be made absolute
      createPlaceholder: function createPlaceholder(element) {
        var placeholder,
            cssPosition = element.css("position"),
            position = element.position(); // Lock in margins first to account for form elements, which
        // will change margin if you explicitly set height
        // see: http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380
        // Support: Safari

        element.css({
          marginTop: element.css("marginTop"),
          marginBottom: element.css("marginBottom"),
          marginLeft: element.css("marginLeft"),
          marginRight: element.css("marginRight")
        }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight());

        if (/^(static|relative)/.test(cssPosition)) {
          cssPosition = "absolute";
          placeholder = $("<" + element[0].nodeName + ">").insertAfter(element).css({
            // Convert inline to inline block to account for inline elements
            // that turn to inline block based on content (like img)
            display: /^(inline|ruby)/.test(element.css("display")) ? "inline-block" : "block",
            visibility: "hidden",
            // Margins need to be set to account for margin collapse
            marginTop: element.css("marginTop"),
            marginBottom: element.css("marginBottom"),
            marginLeft: element.css("marginLeft"),
            marginRight: element.css("marginRight"),
            "float": element.css("float")
          }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass("ui-effects-placeholder");
          element.data(dataSpace + "placeholder", placeholder);
        }

        element.css({
          position: cssPosition,
          left: position.left,
          top: position.top
        });
        return placeholder;
      },
      removePlaceholder: function removePlaceholder(element) {
        var dataKey = dataSpace + "placeholder",
            placeholder = element.data(dataKey);

        if (placeholder) {
          placeholder.remove();
          element.removeData(dataKey);
        }
      },
      // Removes a placeholder if it exists and restores
      // properties that were modified during placeholder creation
      cleanUp: function cleanUp(element) {
        $.effects.restoreStyle(element);
        $.effects.removePlaceholder(element);
      },
      setTransition: function setTransition(element, list, factor, value) {
        value = value || {};
        $.each(list, function (i, x) {
          var unit = element.cssUnit(x);

          if (unit[0] > 0) {
            value[x] = unit[0] * factor + unit[1];
          }
        });
        return value;
      }
    }); // Return an effect options object for the given parameters:

    function _normalizeArguments(effect, options, speed, callback) {
      // Allow passing all options as the first parameter
      if ($.isPlainObject(effect)) {
        options = effect;
        effect = effect.effect;
      } // Convert to an object


      effect = {
        effect: effect
      }; // Catch (effect, null, ...)

      if (options == null) {
        options = {};
      } // Catch (effect, callback)


      if (typeof options === "function") {
        callback = options;
        speed = null;
        options = {};
      } // Catch (effect, speed, ?)


      if (typeof options === "number" || $.fx.speeds[options]) {
        callback = speed;
        speed = options;
        options = {};
      } // Catch (effect, options, callback)


      if (typeof speed === "function") {
        callback = speed;
        speed = null;
      } // Add options to effect


      if (options) {
        $.extend(effect, options);
      }

      speed = speed || options.duration;
      effect.duration = $.fx.off ? 0 : typeof speed === "number" ? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;
      effect.complete = callback || options.complete;
      return effect;
    }

    function standardAnimationOption(option) {
      // Valid standard speeds (nothing, number, named speed)
      if (!option || typeof option === "number" || $.fx.speeds[option]) {
        return true;
      } // Invalid strings - treat as "normal" speed


      if (typeof option === "string" && !$.effects.effect[option]) {
        return true;
      } // Complete callback


      if (typeof option === "function") {
        return true;
      } // Options hash (but not naming an effect)


      if (_typeof(option) === "object" && !option.effect) {
        return true;
      } // Didn't match any standard API


      return false;
    }

    $.fn.extend({
      effect: function effect()
      /* effect, options, speed, callback */
      {
        var args = _normalizeArguments.apply(this, arguments),
            effectMethod = $.effects.effect[args.effect],
            defaultMode = effectMethod.mode,
            queue = args.queue,
            queueName = queue || "fx",
            complete = args.complete,
            mode = args.mode,
            modes = [],
            prefilter = function prefilter(next) {
          var el = $(this),
              normalizedMode = $.effects.mode(el, mode) || defaultMode; // Sentinel for duck-punching the :animated pseudo-selector

          el.data(dataSpaceAnimated, true); // Save effect mode for later use,
          // we can't just call $.effects.mode again later,
          // as the .show() below destroys the initial state

          modes.push(normalizedMode); // See $.uiBackCompat inside of run() for removal of defaultMode in 1.14

          if (defaultMode && (normalizedMode === "show" || normalizedMode === defaultMode && normalizedMode === "hide")) {
            el.show();
          }

          if (!defaultMode || normalizedMode !== "none") {
            $.effects.saveStyle(el);
          }

          if (typeof next === "function") {
            next();
          }
        };

        if ($.fx.off || !effectMethod) {
          // Delegate to the original method (e.g., .show()) if possible
          if (mode) {
            return this[mode](args.duration, complete);
          } else {
            return this.each(function () {
              if (complete) {
                complete.call(this);
              }
            });
          }
        }

        function run(next) {
          var elem = $(this);

          function cleanup() {
            elem.removeData(dataSpaceAnimated);
            $.effects.cleanUp(elem);

            if (args.mode === "hide") {
              elem.hide();
            }

            done();
          }

          function done() {
            if (typeof complete === "function") {
              complete.call(elem[0]);
            }

            if (typeof next === "function") {
              next();
            }
          } // Override mode option on a per element basis,
          // as toggle can be either show or hide depending on element state


          args.mode = modes.shift();

          if ($.uiBackCompat !== false && !defaultMode) {
            if (elem.is(":hidden") ? mode === "hide" : mode === "show") {
              // Call the core method to track "olddisplay" properly
              elem[mode]();
              done();
            } else {
              effectMethod.call(elem[0], args, done);
            }
          } else {
            if (args.mode === "none") {
              // Call the core method to track "olddisplay" properly
              elem[mode]();
              done();
            } else {
              effectMethod.call(elem[0], args, cleanup);
            }
          }
        } // Run prefilter on all elements first to ensure that
        // any showing or hiding happens before placeholder creation,
        // which ensures that any layout changes are correctly captured.


        return queue === false ? this.each(prefilter).each(run) : this.queue(queueName, prefilter).queue(queueName, run);
      },
      show: function (orig) {
        return function (option) {
          if (standardAnimationOption(option)) {
            return orig.apply(this, arguments);
          } else {
            var args = _normalizeArguments.apply(this, arguments);

            args.mode = "show";
            return this.effect.call(this, args);
          }
        };
      }($.fn.show),
      hide: function (orig) {
        return function (option) {
          if (standardAnimationOption(option)) {
            return orig.apply(this, arguments);
          } else {
            var args = _normalizeArguments.apply(this, arguments);

            args.mode = "hide";
            return this.effect.call(this, args);
          }
        };
      }($.fn.hide),
      toggle: function (orig) {
        return function (option) {
          if (standardAnimationOption(option) || typeof option === "boolean") {
            return orig.apply(this, arguments);
          } else {
            var args = _normalizeArguments.apply(this, arguments);

            args.mode = "toggle";
            return this.effect.call(this, args);
          }
        };
      }($.fn.toggle),
      cssUnit: function cssUnit(key) {
        var style = this.css(key),
            val = [];
        $.each(["em", "px", "%", "pt"], function (i, unit) {
          if (style.indexOf(unit) > 0) {
            val = [parseFloat(style), unit];
          }
        });
        return val;
      },
      cssClip: function cssClip(clipObj) {
        if (clipObj) {
          return this.css("clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " + clipObj.bottom + "px " + clipObj.left + "px)");
        }

        return parseClip(this.css("clip"), this);
      },
      transfer: function transfer(options, done) {
        var element = $(this),
            target = $(options.to),
            targetFixed = target.css("position") === "fixed",
            body = $("body"),
            fixTop = targetFixed ? body.scrollTop() : 0,
            fixLeft = targetFixed ? body.scrollLeft() : 0,
            endPosition = target.offset(),
            animation = {
          top: endPosition.top - fixTop,
          left: endPosition.left - fixLeft,
          height: target.innerHeight(),
          width: target.innerWidth()
        },
            startPosition = element.offset(),
            transfer = $("<div class='ui-effects-transfer'></div>");
        transfer.appendTo("body").addClass(options.className).css({
          top: startPosition.top - fixTop,
          left: startPosition.left - fixLeft,
          height: element.innerHeight(),
          width: element.innerWidth(),
          position: targetFixed ? "fixed" : "absolute"
        }).animate(animation, options.duration, options.easing, function () {
          transfer.remove();

          if (typeof done === "function") {
            done();
          }
        });
      }
    });

    function parseClip(str, element) {
      var outerWidth = element.outerWidth(),
          outerHeight = element.outerHeight(),
          clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
          values = clipRegex.exec(str) || ["", 0, outerWidth, outerHeight, 0];
      return {
        top: parseFloat(values[1]) || 0,
        right: values[2] === "auto" ? outerWidth : parseFloat(values[2]),
        bottom: values[3] === "auto" ? outerHeight : parseFloat(values[3]),
        left: parseFloat(values[4]) || 0
      };
    }

    $.fx.step.clip = function (fx) {
      if (!fx.clipInit) {
        fx.start = $(fx.elem).cssClip();

        if (typeof fx.end === "string") {
          fx.end = parseClip(fx.end, fx.elem);
        }

        fx.clipInit = true;
      }

      $(fx.elem).cssClip({
        top: fx.pos * (fx.end.top - fx.start.top) + fx.start.top,
        right: fx.pos * (fx.end.right - fx.start.right) + fx.start.right,
        bottom: fx.pos * (fx.end.bottom - fx.start.bottom) + fx.start.bottom,
        left: fx.pos * (fx.end.left - fx.start.left) + fx.start.left
      });
    };
  })();
  /******************************************************************************/

  /*********************************** EASING ***********************************/

  /******************************************************************************/


  (function () {
    // Based on easing equations from Robert Penner (http://www.robertpenner.com/easing)
    var baseEasings = {};
    $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (i, name) {
      baseEasings[name] = function (p) {
        return Math.pow(p, i + 2);
      };
    });
    $.extend(baseEasings, {
      Sine: function Sine(p) {
        return 1 - Math.cos(p * Math.PI / 2);
      },
      Circ: function Circ(p) {
        return 1 - Math.sqrt(1 - p * p);
      },
      Elastic: function Elastic(p) {
        return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15);
      },
      Back: function Back(p) {
        return p * p * (3 * p - 2);
      },
      Bounce: function Bounce(p) {
        var pow2,
            bounce = 4;

        while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}

        return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);
      }
    });
    $.each(baseEasings, function (name, easeIn) {
      $.easing["easeIn" + name] = easeIn;

      $.easing["easeOut" + name] = function (p) {
        return 1 - easeIn(1 - p);
      };

      $.easing["easeInOut" + name] = function (p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2;
      };
    });
  })();

  return $.effects;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/jquery-ui/ui/ie.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery-ui/ui/ie.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict"; // This file is deprecated

  return $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/jquery-var-for-color.js":
/*!***********************************************************!*\
  !*** ./node_modules/jquery-ui/ui/jquery-var-for-color.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict"; // Create a local jQuery because jQuery Color relies on it and the
  // global may not exist with AMD and a custom build (#10199).
  // This module is a noop if used as a regular AMD module.
  // eslint-disable-next-line no-unused-vars

  var jQuery = $;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/keycode.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery-ui/ui/keycode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Keycode 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/
(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  return $.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  };
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/position.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery-ui/ui/position.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Position 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/
(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  (function () {
    var cachedScrollbarWidth,
        max = Math.max,
        abs = Math.abs,
        rhorizontal = /left|center|right/,
        rvertical = /top|center|bottom/,
        roffset = /[\+\-]\d+(\.[\d]+)?%?/,
        rposition = /^\w+/,
        rpercent = /%$/,
        _position = $.fn.position;

    function getOffsets(offsets, width, height) {
      return [parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1)];
    }

    function parseCss(element, property) {
      return parseInt($.css(element, property), 10) || 0;
    }

    function isWindow(obj) {
      return obj != null && obj === obj.window;
    }

    function getDimensions(elem) {
      var raw = elem[0];

      if (raw.nodeType === 9) {
        return {
          width: elem.width(),
          height: elem.height(),
          offset: {
            top: 0,
            left: 0
          }
        };
      }

      if (isWindow(raw)) {
        return {
          width: elem.width(),
          height: elem.height(),
          offset: {
            top: elem.scrollTop(),
            left: elem.scrollLeft()
          }
        };
      }

      if (raw.preventDefault) {
        return {
          width: 0,
          height: 0,
          offset: {
            top: raw.pageY,
            left: raw.pageX
          }
        };
      }

      return {
        width: elem.outerWidth(),
        height: elem.outerHeight(),
        offset: elem.offset()
      };
    }

    $.position = {
      scrollbarWidth: function scrollbarWidth() {
        if (cachedScrollbarWidth !== undefined) {
          return cachedScrollbarWidth;
        }

        var w1,
            w2,
            div = $("<div style=" + "'display:block;position:absolute;width:200px;height:200px;overflow:hidden;'>" + "<div style='height:300px;width:auto;'></div></div>"),
            innerDiv = div.children()[0];
        $("body").append(div);
        w1 = innerDiv.offsetWidth;
        div.css("overflow", "scroll");
        w2 = innerDiv.offsetWidth;

        if (w1 === w2) {
          w2 = div[0].clientWidth;
        }

        div.remove();
        return cachedScrollbarWidth = w1 - w2;
      },
      getScrollInfo: function getScrollInfo(within) {
        var overflowX = within.isWindow || within.isDocument ? "" : within.element.css("overflow-x"),
            overflowY = within.isWindow || within.isDocument ? "" : within.element.css("overflow-y"),
            hasOverflowX = overflowX === "scroll" || overflowX === "auto" && within.width < within.element[0].scrollWidth,
            hasOverflowY = overflowY === "scroll" || overflowY === "auto" && within.height < within.element[0].scrollHeight;
        return {
          width: hasOverflowY ? $.position.scrollbarWidth() : 0,
          height: hasOverflowX ? $.position.scrollbarWidth() : 0
        };
      },
      getWithinInfo: function getWithinInfo(element) {
        var withinElement = $(element || window),
            isElemWindow = isWindow(withinElement[0]),
            isDocument = !!withinElement[0] && withinElement[0].nodeType === 9,
            hasOffset = !isElemWindow && !isDocument;
        return {
          element: withinElement,
          isWindow: isElemWindow,
          isDocument: isDocument,
          offset: hasOffset ? $(element).offset() : {
            left: 0,
            top: 0
          },
          scrollLeft: withinElement.scrollLeft(),
          scrollTop: withinElement.scrollTop(),
          width: withinElement.outerWidth(),
          height: withinElement.outerHeight()
        };
      }
    };

    $.fn.position = function (options) {
      if (!options || !options.of) {
        return _position.apply(this, arguments);
      } // Make a copy, we don't want to modify arguments


      options = $.extend({}, options);
      var atOffset,
          targetWidth,
          targetHeight,
          targetOffset,
          basePosition,
          dimensions,
          // Make sure string options are treated as CSS selectors
      target = typeof options.of === "string" ? $(document).find(options.of) : $(options.of),
          within = $.position.getWithinInfo(options.within),
          scrollInfo = $.position.getScrollInfo(within),
          collision = (options.collision || "flip").split(" "),
          offsets = {};
      dimensions = getDimensions(target);

      if (target[0].preventDefault) {
        // Force left top to allow flipping
        options.at = "left top";
      }

      targetWidth = dimensions.width;
      targetHeight = dimensions.height;
      targetOffset = dimensions.offset; // Clone to reuse original targetOffset later

      basePosition = $.extend({}, targetOffset); // Force my and at to have valid horizontal and vertical positions
      // if a value is missing or invalid, it will be converted to center

      $.each(["my", "at"], function () {
        var pos = (options[this] || "").split(" "),
            horizontalOffset,
            verticalOffset;

        if (pos.length === 1) {
          pos = rhorizontal.test(pos[0]) ? pos.concat(["center"]) : rvertical.test(pos[0]) ? ["center"].concat(pos) : ["center", "center"];
        }

        pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center";
        pos[1] = rvertical.test(pos[1]) ? pos[1] : "center"; // Calculate offsets

        horizontalOffset = roffset.exec(pos[0]);
        verticalOffset = roffset.exec(pos[1]);
        offsets[this] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0]; // Reduce to just the positions without the offsets

        options[this] = [rposition.exec(pos[0])[0], rposition.exec(pos[1])[0]];
      }); // Normalize collision option

      if (collision.length === 1) {
        collision[1] = collision[0];
      }

      if (options.at[0] === "right") {
        basePosition.left += targetWidth;
      } else if (options.at[0] === "center") {
        basePosition.left += targetWidth / 2;
      }

      if (options.at[1] === "bottom") {
        basePosition.top += targetHeight;
      } else if (options.at[1] === "center") {
        basePosition.top += targetHeight / 2;
      }

      atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
      basePosition.left += atOffset[0];
      basePosition.top += atOffset[1];
      return this.each(function () {
        var collisionPosition,
            using,
            elem = $(this),
            elemWidth = elem.outerWidth(),
            elemHeight = elem.outerHeight(),
            marginLeft = parseCss(this, "marginLeft"),
            marginTop = parseCss(this, "marginTop"),
            collisionWidth = elemWidth + marginLeft + parseCss(this, "marginRight") + scrollInfo.width,
            collisionHeight = elemHeight + marginTop + parseCss(this, "marginBottom") + scrollInfo.height,
            position = $.extend({}, basePosition),
            myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());

        if (options.my[0] === "right") {
          position.left -= elemWidth;
        } else if (options.my[0] === "center") {
          position.left -= elemWidth / 2;
        }

        if (options.my[1] === "bottom") {
          position.top -= elemHeight;
        } else if (options.my[1] === "center") {
          position.top -= elemHeight / 2;
        }

        position.left += myOffset[0];
        position.top += myOffset[1];
        collisionPosition = {
          marginLeft: marginLeft,
          marginTop: marginTop
        };
        $.each(["left", "top"], function (i, dir) {
          if ($.ui.position[collision[i]]) {
            $.ui.position[collision[i]][dir](position, {
              targetWidth: targetWidth,
              targetHeight: targetHeight,
              elemWidth: elemWidth,
              elemHeight: elemHeight,
              collisionPosition: collisionPosition,
              collisionWidth: collisionWidth,
              collisionHeight: collisionHeight,
              offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
              my: options.my,
              at: options.at,
              within: within,
              elem: elem
            });
          }
        });

        if (options.using) {
          // Adds feedback as second argument to using callback, if present
          using = function using(props) {
            var left = targetOffset.left - position.left,
                right = left + targetWidth - elemWidth,
                top = targetOffset.top - position.top,
                bottom = top + targetHeight - elemHeight,
                feedback = {
              target: {
                element: target,
                left: targetOffset.left,
                top: targetOffset.top,
                width: targetWidth,
                height: targetHeight
              },
              element: {
                element: elem,
                left: position.left,
                top: position.top,
                width: elemWidth,
                height: elemHeight
              },
              horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
              vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
            };

            if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
              feedback.horizontal = "center";
            }

            if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
              feedback.vertical = "middle";
            }

            if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
              feedback.important = "horizontal";
            } else {
              feedback.important = "vertical";
            }

            options.using.call(this, props, feedback);
          };
        }

        elem.offset($.extend(position, {
          using: using
        }));
      });
    };

    $.ui.position = {
      fit: {
        left: function left(position, data) {
          var within = data.within,
              withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
              outerWidth = within.width,
              collisionPosLeft = position.left - data.collisionPosition.marginLeft,
              overLeft = withinOffset - collisionPosLeft,
              overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
              newOverRight; // Element is wider than within

          if (data.collisionWidth > outerWidth) {
            // Element is initially over the left side of within
            if (overLeft > 0 && overRight <= 0) {
              newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
              position.left += overLeft - newOverRight; // Element is initially over right side of within
            } else if (overRight > 0 && overLeft <= 0) {
              position.left = withinOffset; // Element is initially over both left and right sides of within
            } else {
              if (overLeft > overRight) {
                position.left = withinOffset + outerWidth - data.collisionWidth;
              } else {
                position.left = withinOffset;
              }
            } // Too far left -> align with left edge

          } else if (overLeft > 0) {
            position.left += overLeft; // Too far right -> align with right edge
          } else if (overRight > 0) {
            position.left -= overRight; // Adjust based on position and margin
          } else {
            position.left = max(position.left - collisionPosLeft, position.left);
          }
        },
        top: function top(position, data) {
          var within = data.within,
              withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
              outerHeight = data.within.height,
              collisionPosTop = position.top - data.collisionPosition.marginTop,
              overTop = withinOffset - collisionPosTop,
              overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
              newOverBottom; // Element is taller than within

          if (data.collisionHeight > outerHeight) {
            // Element is initially over the top of within
            if (overTop > 0 && overBottom <= 0) {
              newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
              position.top += overTop - newOverBottom; // Element is initially over bottom of within
            } else if (overBottom > 0 && overTop <= 0) {
              position.top = withinOffset; // Element is initially over both top and bottom of within
            } else {
              if (overTop > overBottom) {
                position.top = withinOffset + outerHeight - data.collisionHeight;
              } else {
                position.top = withinOffset;
              }
            } // Too far up -> align with top

          } else if (overTop > 0) {
            position.top += overTop; // Too far down -> align with bottom edge
          } else if (overBottom > 0) {
            position.top -= overBottom; // Adjust based on position and margin
          } else {
            position.top = max(position.top - collisionPosTop, position.top);
          }
        }
      },
      flip: {
        left: function left(position, data) {
          var within = data.within,
              withinOffset = within.offset.left + within.scrollLeft,
              outerWidth = within.width,
              offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
              collisionPosLeft = position.left - data.collisionPosition.marginLeft,
              overLeft = collisionPosLeft - offsetLeft,
              overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
              myOffset = data.my[0] === "left" ? -data.elemWidth : data.my[0] === "right" ? data.elemWidth : 0,
              atOffset = data.at[0] === "left" ? data.targetWidth : data.at[0] === "right" ? -data.targetWidth : 0,
              offset = -2 * data.offset[0],
              newOverRight,
              newOverLeft;

          if (overLeft < 0) {
            newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;

            if (newOverRight < 0 || newOverRight < abs(overLeft)) {
              position.left += myOffset + atOffset + offset;
            }
          } else if (overRight > 0) {
            newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;

            if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
              position.left += myOffset + atOffset + offset;
            }
          }
        },
        top: function top(position, data) {
          var within = data.within,
              withinOffset = within.offset.top + within.scrollTop,
              outerHeight = within.height,
              offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
              collisionPosTop = position.top - data.collisionPosition.marginTop,
              overTop = collisionPosTop - offsetTop,
              overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
              top = data.my[1] === "top",
              myOffset = top ? -data.elemHeight : data.my[1] === "bottom" ? data.elemHeight : 0,
              atOffset = data.at[1] === "top" ? data.targetHeight : data.at[1] === "bottom" ? -data.targetHeight : 0,
              offset = -2 * data.offset[1],
              newOverTop,
              newOverBottom;

          if (overTop < 0) {
            newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;

            if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
              position.top += myOffset + atOffset + offset;
            }
          } else if (overBottom > 0) {
            newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;

            if (newOverTop > 0 || abs(newOverTop) < overBottom) {
              position.top += myOffset + atOffset + offset;
            }
          }
        }
      },
      flipfit: {
        left: function left() {
          $.ui.position.flip.left.apply(this, arguments);
          $.ui.position.fit.left.apply(this, arguments);
        },
        top: function top() {
          $.ui.position.flip.top.apply(this, arguments);
          $.ui.position.fit.top.apply(this, arguments);
        }
      }
    };
  })();

  return $.ui.position;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/safe-active-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery-ui/ui/safe-active-element.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  return $.ui.safeActiveElement = function (document) {
    var activeElement; // Support: IE 9 only
    // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>

    try {
      activeElement = document.activeElement;
    } catch (error) {
      activeElement = document.body;
    } // Support: IE 9 - 11 only
    // IE may return null instead of an element
    // Interestingly, this only seems to occur when NOT in an iframe


    if (!activeElement) {
      activeElement = document.body;
    } // Support: IE 11 only
    // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>


    if (!activeElement.nodeName) {
      activeElement = document.body;
    }

    return activeElement;
  };
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/scroll-parent.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery-ui/ui/scroll-parent.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Scroll Parent 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/
(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  return $.fn.scrollParent = function (includeHidden) {
    var position = this.css("position"),
        excludeStaticParent = position === "absolute",
        overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        scrollParent = this.parents().filter(function () {
      var parent = $(this);

      if (excludeStaticParent && parent.css("position") === "static") {
        return false;
      }

      return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
    }).eq(0);
    return position === "fixed" || !scrollParent.length ? $(this[0].ownerDocument || document) : scrollParent;
  };
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/unique-id.js":
/*!************************************************!*\
  !*** ./node_modules/jquery-ui/ui/unique-id.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Unique ID 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/
(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  return $.fn.extend({
    uniqueId: function () {
      var uuid = 0;
      return function () {
        return this.each(function () {
          if (!this.id) {
            this.id = "ui-id-" + ++uuid;
          }
        });
      };
    }(),
    removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        if (/^ui-id-\d+$/.test(this.id)) {
          $(this).removeAttr("id");
        }
      });
    }
  });
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/vendor/jquery-color/jquery.color.js":
/*!***********************************************************************!*\
  !*** ./node_modules/jquery-ui/ui/vendor/jquery-color/jquery.color.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery Color Animations v2.2.0
 * https://github.com/jquery/jquery-color
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Sun May 10 09:02:36 2020 +0200
 */
(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (jQuery, undefined) {
  var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor " + "borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
      class2type = {},
      toString = class2type.toString,
      // plusequals test for += 100 -= 100
  rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
      // a set of RE's that can match strings and generate color tuples.
  stringParsers = [{
    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    parse: function parse(execResult) {
      return [execResult[1], execResult[2], execResult[3], execResult[4]];
    }
  }, {
    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    parse: function parse(execResult) {
      return [execResult[1] * 2.55, execResult[2] * 2.55, execResult[3] * 2.55, execResult[4]];
    }
  }, {
    // this regex ignores A-F because it's compared against an already lowercased string
    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,
    parse: function parse(execResult) {
      return [parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16), execResult[4] ? (parseInt(execResult[4], 16) / 255).toFixed(2) : 1];
    }
  }, {
    // this regex ignores A-F because it's compared against an already lowercased string
    re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,
    parse: function parse(execResult) {
      return [parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16), execResult[4] ? (parseInt(execResult[4] + execResult[4], 16) / 255).toFixed(2) : 1];
    }
  }, {
    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    space: "hsla",
    parse: function parse(execResult) {
      return [execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4]];
    }
  }],
      // jQuery.Color( )
  color = jQuery.Color = function (color, green, blue, alpha) {
    return new jQuery.Color.fn.parse(color, green, blue, alpha);
  },
      spaces = {
    rgba: {
      props: {
        red: {
          idx: 0,
          type: "byte"
        },
        green: {
          idx: 1,
          type: "byte"
        },
        blue: {
          idx: 2,
          type: "byte"
        }
      }
    },
    hsla: {
      props: {
        hue: {
          idx: 0,
          type: "degrees"
        },
        saturation: {
          idx: 1,
          type: "percent"
        },
        lightness: {
          idx: 2,
          type: "percent"
        }
      }
    }
  },
      propTypes = {
    "byte": {
      floor: true,
      max: 255
    },
    "percent": {
      max: 1
    },
    "degrees": {
      mod: 360,
      floor: true
    }
  },
      support = color.support = {},
      // element for support tests
  supportElem = jQuery("<p>")[0],
      // colors = jQuery.Color.names
  colors,
      // local aliases of functions called often
  each = jQuery.each; // determine rgba support immediately


  supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
  support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1; // define cache name and alpha properties
  // for rgba and hsla spaces

  each(spaces, function (spaceName, space) {
    space.cache = "_" + spaceName;
    space.props.alpha = {
      idx: 3,
      type: "percent",
      def: 1
    };
  }); // Populate the class2type map

  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function getType(obj) {
    if (obj == null) {
      return obj + "";
    }

    return _typeof(obj) === "object" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }

  function clamp(value, prop, allowEmpty) {
    var type = propTypes[prop.type] || {};

    if (value == null) {
      return allowEmpty || !prop.def ? null : prop.def;
    } // ~~ is an short way of doing floor for positive numbers


    value = type.floor ? ~~value : parseFloat(value); // IE will pass in empty strings as value for alpha,
    // which will hit this case

    if (isNaN(value)) {
      return prop.def;
    }

    if (type.mod) {
      // we add mod before modding to make sure that negatives values
      // get converted properly: -10 -> 350
      return (value + type.mod) % type.mod;
    } // for now all property types without mod have min and max


    return Math.min(type.max, Math.max(0, value));
  }

  function stringParse(string) {
    var inst = color(),
        rgba = inst._rgba = [];
    string = string.toLowerCase();
    each(stringParsers, function (_i, parser) {
      var parsed,
          match = parser.re.exec(string),
          values = match && parser.parse(match),
          spaceName = parser.space || "rgba";

      if (values) {
        parsed = inst[spaceName](values); // if this was an rgba parse the assignment might happen twice
        // oh well....

        inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
        rgba = inst._rgba = parsed._rgba; // exit each( stringParsers ) here because we matched

        return false;
      }
    }); // Found a stringParser that handled it

    if (rgba.length) {
      // if this came from a parsed string, force "transparent" when alpha is 0
      // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
      if (rgba.join() === "0,0,0,0") {
        jQuery.extend(rgba, colors.transparent);
      }

      return inst;
    } // named colors


    return colors[string];
  }

  color.fn = jQuery.extend(color.prototype, {
    parse: function parse(red, green, blue, alpha) {
      if (red === undefined) {
        this._rgba = [null, null, null, null];
        return this;
      }

      if (red.jquery || red.nodeType) {
        red = jQuery(red).css(green);
        green = undefined;
      }

      var inst = this,
          type = getType(red),
          rgba = this._rgba = []; // more than 1 argument specified - assume ( red, green, blue, alpha )

      if (green !== undefined) {
        red = [red, green, blue, alpha];
        type = "array";
      }

      if (type === "string") {
        return this.parse(stringParse(red) || colors._default);
      }

      if (type === "array") {
        each(spaces.rgba.props, function (_key, prop) {
          rgba[prop.idx] = clamp(red[prop.idx], prop);
        });
        return this;
      }

      if (type === "object") {
        if (red instanceof color) {
          each(spaces, function (_spaceName, space) {
            if (red[space.cache]) {
              inst[space.cache] = red[space.cache].slice();
            }
          });
        } else {
          each(spaces, function (_spaceName, space) {
            var cache = space.cache;
            each(space.props, function (key, prop) {
              // if the cache doesn't exist, and we know how to convert
              if (!inst[cache] && space.to) {
                // if the value was null, we don't need to copy it
                // if the key was alpha, we don't need to copy it either
                if (key === "alpha" || red[key] == null) {
                  return;
                }

                inst[cache] = space.to(inst._rgba);
              } // this is the only case where we allow nulls for ALL properties.
              // call clamp with alwaysAllowEmpty


              inst[cache][prop.idx] = clamp(red[key], prop, true);
            }); // everything defined but alpha?

            if (inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0) {
              // use the default of 1
              if (inst[cache][3] == null) {
                inst[cache][3] = 1;
              }

              if (space.from) {
                inst._rgba = space.from(inst[cache]);
              }
            }
          });
        }

        return this;
      }
    },
    is: function is(compare) {
      var is = color(compare),
          same = true,
          inst = this;
      each(spaces, function (_, space) {
        var localCache,
            isCache = is[space.cache];

        if (isCache) {
          localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
          each(space.props, function (_, prop) {
            if (isCache[prop.idx] != null) {
              same = isCache[prop.idx] === localCache[prop.idx];
              return same;
            }
          });
        }

        return same;
      });
      return same;
    },
    _space: function _space() {
      var used = [],
          inst = this;
      each(spaces, function (spaceName, space) {
        if (inst[space.cache]) {
          used.push(spaceName);
        }
      });
      return used.pop();
    },
    transition: function transition(other, distance) {
      var end = color(other),
          spaceName = end._space(),
          space = spaces[spaceName],
          startColor = this.alpha() === 0 ? color("transparent") : this,
          start = startColor[space.cache] || space.to(startColor._rgba),
          result = start.slice();

      end = end[space.cache];
      each(space.props, function (_key, prop) {
        var index = prop.idx,
            startValue = start[index],
            endValue = end[index],
            type = propTypes[prop.type] || {}; // if null, don't override start value

        if (endValue === null) {
          return;
        } // if null - use end


        if (startValue === null) {
          result[index] = endValue;
        } else {
          if (type.mod) {
            if (endValue - startValue > type.mod / 2) {
              startValue += type.mod;
            } else if (startValue - endValue > type.mod / 2) {
              startValue -= type.mod;
            }
          }

          result[index] = clamp((endValue - startValue) * distance + startValue, prop);
        }
      });
      return this[spaceName](result);
    },
    blend: function blend(opaque) {
      // if we are already opaque - return ourself
      if (this._rgba[3] === 1) {
        return this;
      }

      var rgb = this._rgba.slice(),
          a = rgb.pop(),
          blend = color(opaque)._rgba;

      return color(jQuery.map(rgb, function (v, i) {
        return (1 - a) * blend[i] + a * v;
      }));
    },
    toRgbaString: function toRgbaString() {
      var prefix = "rgba(",
          rgba = jQuery.map(this._rgba, function (v, i) {
        if (v != null) {
          return v;
        }

        return i > 2 ? 1 : 0;
      });

      if (rgba[3] === 1) {
        rgba.pop();
        prefix = "rgb(";
      }

      return prefix + rgba.join() + ")";
    },
    toHslaString: function toHslaString() {
      var prefix = "hsla(",
          hsla = jQuery.map(this.hsla(), function (v, i) {
        if (v == null) {
          v = i > 2 ? 1 : 0;
        } // catch 1 and 2


        if (i && i < 3) {
          v = Math.round(v * 100) + "%";
        }

        return v;
      });

      if (hsla[3] === 1) {
        hsla.pop();
        prefix = "hsl(";
      }

      return prefix + hsla.join() + ")";
    },
    toHexString: function toHexString(includeAlpha) {
      var rgba = this._rgba.slice(),
          alpha = rgba.pop();

      if (includeAlpha) {
        rgba.push(~~(alpha * 255));
      }

      return "#" + jQuery.map(rgba, function (v) {
        // default to 0 when nulls exist
        v = (v || 0).toString(16);
        return v.length === 1 ? "0" + v : v;
      }).join("");
    },
    toString: function toString() {
      return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
    }
  });
  color.fn.parse.prototype = color.fn; // hsla conversions adapted from:
  // https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

  function hue2rgb(p, q, h) {
    h = (h + 1) % 1;

    if (h * 6 < 1) {
      return p + (q - p) * h * 6;
    }

    if (h * 2 < 1) {
      return q;
    }

    if (h * 3 < 2) {
      return p + (q - p) * (2 / 3 - h) * 6;
    }

    return p;
  }

  spaces.hsla.to = function (rgba) {
    if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
      return [null, null, null, rgba[3]];
    }

    var r = rgba[0] / 255,
        g = rgba[1] / 255,
        b = rgba[2] / 255,
        a = rgba[3],
        max = Math.max(r, g, b),
        min = Math.min(r, g, b),
        diff = max - min,
        add = max + min,
        l = add * 0.5,
        h,
        s;

    if (min === max) {
      h = 0;
    } else if (r === max) {
      h = 60 * (g - b) / diff + 360;
    } else if (g === max) {
      h = 60 * (b - r) / diff + 120;
    } else {
      h = 60 * (r - g) / diff + 240;
    } // chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
    // otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)


    if (diff === 0) {
      s = 0;
    } else if (l <= 0.5) {
      s = diff / add;
    } else {
      s = diff / (2 - add);
    }

    return [Math.round(h) % 360, s, l, a == null ? 1 : a];
  };

  spaces.hsla.from = function (hsla) {
    if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
      return [null, null, null, hsla[3]];
    }

    var h = hsla[0] / 360,
        s = hsla[1],
        l = hsla[2],
        a = hsla[3],
        q = l <= 0.5 ? l * (1 + s) : l + s - l * s,
        p = 2 * l - q;
    return [Math.round(hue2rgb(p, q, h + 1 / 3) * 255), Math.round(hue2rgb(p, q, h) * 255), Math.round(hue2rgb(p, q, h - 1 / 3) * 255), a];
  };

  each(spaces, function (spaceName, space) {
    var props = space.props,
        cache = space.cache,
        to = space.to,
        from = space.from; // makes rgba() and hsla()

    color.fn[spaceName] = function (value) {
      // generate a cache for this space if it doesn't exist
      if (to && !this[cache]) {
        this[cache] = to(this._rgba);
      }

      if (value === undefined) {
        return this[cache].slice();
      }

      var ret,
          type = getType(value),
          arr = type === "array" || type === "object" ? value : arguments,
          local = this[cache].slice();
      each(props, function (key, prop) {
        var val = arr[type === "object" ? key : prop.idx];

        if (val == null) {
          val = local[prop.idx];
        }

        local[prop.idx] = clamp(val, prop);
      });

      if (from) {
        ret = color(from(local));
        ret[cache] = local;
        return ret;
      } else {
        return color(local);
      }
    }; // makes red() green() blue() alpha() hue() saturation() lightness()


    each(props, function (key, prop) {
      // alpha is included in more than one space
      if (color.fn[key]) {
        return;
      }

      color.fn[key] = function (value) {
        var local,
            cur,
            match,
            fn,
            vtype = getType(value);

        if (key === "alpha") {
          fn = this._hsla ? "hsla" : "rgba";
        } else {
          fn = spaceName;
        }

        local = this[fn]();
        cur = local[prop.idx];

        if (vtype === "undefined") {
          return cur;
        }

        if (vtype === "function") {
          value = value.call(this, cur);
          vtype = getType(value);
        }

        if (value == null && prop.empty) {
          return this;
        }

        if (vtype === "string") {
          match = rplusequals.exec(value);

          if (match) {
            value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1);
          }
        }

        local[prop.idx] = value;
        return this[fn](local);
      };
    });
  }); // add cssHook and .fx.step function for each named hook.
  // accept a space separated string of properties

  color.hook = function (hook) {
    var hooks = hook.split(" ");
    each(hooks, function (_i, hook) {
      jQuery.cssHooks[hook] = {
        set: function set(elem, value) {
          var parsed,
              curElem,
              backgroundColor = "";

          if (value !== "transparent" && (getType(value) !== "string" || (parsed = stringParse(value)))) {
            value = color(parsed || value);

            if (!support.rgba && value._rgba[3] !== 1) {
              curElem = hook === "backgroundColor" ? elem.parentNode : elem;

              while ((backgroundColor === "" || backgroundColor === "transparent") && curElem && curElem.style) {
                try {
                  backgroundColor = jQuery.css(curElem, "backgroundColor");
                  curElem = curElem.parentNode;
                } catch (e) {}
              }

              value = value.blend(backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default");
            }

            value = value.toRgbaString();
          }

          try {
            elem.style[hook] = value;
          } catch (e) {// wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
          }
        }
      };

      jQuery.fx.step[hook] = function (fx) {
        if (!fx.colorInit) {
          fx.start = color(fx.elem, hook);
          fx.end = color(fx.end);
          fx.colorInit = true;
        }

        jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos));
      };
    });
  };

  color.hook(stepHooks);
  jQuery.cssHooks.borderColor = {
    expand: function expand(value) {
      var expanded = {};
      each(["Top", "Right", "Bottom", "Left"], function (_i, part) {
        expanded["border" + part + "Color"] = value;
      });
      return expanded;
    }
  }; // Basic color names only.
  // Usage of any of the other color names requires adding yourself or including
  // jquery.color.svg-names.js.

  colors = jQuery.Color.names = {
    // 4.1. Basic color keywords
    aqua: "#00ffff",
    black: "#000000",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    lime: "#00ff00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#ffffff",
    yellow: "#ffff00",
    // 4.2.3. "transparent" color keyword
    transparent: [null, null, null, 0],
    _default: "#ffffff"
  };
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/version.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery-ui/ui/version.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  $.ui = $.ui || {};
  return $.ui.version = "1.13.1";
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widget.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery-ui/ui/widget.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Widget 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/
(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./version */ "./node_modules/jquery-ui/ui/version.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  var widgetUuid = 0;
  var widgetHasOwnProperty = Array.prototype.hasOwnProperty;
  var widgetSlice = Array.prototype.slice;

  $.cleanData = function (orig) {
    return function (elems) {
      var events, elem, i;

      for (i = 0; (elem = elems[i]) != null; i++) {
        // Only trigger remove when necessary to save time
        events = $._data(elem, "events");

        if (events && events.remove) {
          $(elem).triggerHandler("remove");
        }
      }

      orig(elems);
    };
  }($.cleanData);

  $.widget = function (name, base, prototype) {
    var existingConstructor, constructor, basePrototype; // ProxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)

    var proxiedPrototype = {};
    var namespace = name.split(".")[0];
    name = name.split(".")[1];
    var fullName = namespace + "-" + name;

    if (!prototype) {
      prototype = base;
      base = $.Widget;
    }

    if (Array.isArray(prototype)) {
      prototype = $.extend.apply(null, [{}].concat(prototype));
    } // Create selector for plugin


    $.expr.pseudos[fullName.toLowerCase()] = function (elem) {
      return !!$.data(elem, fullName);
    };

    $[namespace] = $[namespace] || {};
    existingConstructor = $[namespace][name];

    constructor = $[namespace][name] = function (options, element) {
      // Allow instantiation without "new" keyword
      if (!this || !this._createWidget) {
        return new constructor(options, element);
      } // Allow instantiation without initializing for simple inheritance
      // must use "new" keyword (the code above always passes args)


      if (arguments.length) {
        this._createWidget(options, element);
      }
    }; // Extend with the existing constructor to carry over any static properties


    $.extend(constructor, existingConstructor, {
      version: prototype.version,
      // Copy the object used to create the prototype in case we need to
      // redefine the widget later
      _proto: $.extend({}, prototype),
      // Track widgets that inherit from this widget in case this widget is
      // redefined after a widget inherits from it
      _childConstructors: []
    });
    basePrototype = new base(); // We need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from

    basePrototype.options = $.widget.extend({}, basePrototype.options);
    $.each(prototype, function (prop, value) {
      if (typeof value !== "function") {
        proxiedPrototype[prop] = value;
        return;
      }

      proxiedPrototype[prop] = function () {
        function _super() {
          return base.prototype[prop].apply(this, arguments);
        }

        function _superApply(args) {
          return base.prototype[prop].apply(this, args);
        }

        return function () {
          var __super = this._super;
          var __superApply = this._superApply;
          var returnValue;
          this._super = _super;
          this._superApply = _superApply;
          returnValue = value.apply(this, arguments);
          this._super = __super;
          this._superApply = __superApply;
          return returnValue;
        };
      }();
    });
    constructor.prototype = $.widget.extend(basePrototype, {
      // TODO: remove support for widgetEventPrefix
      // always use the name + a colon as the prefix, e.g., draggable:start
      // don't prefix for widgets that aren't DOM-based
      widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
    }, proxiedPrototype, {
      constructor: constructor,
      namespace: namespace,
      widgetName: name,
      widgetFullName: fullName
    }); // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.

    if (existingConstructor) {
      $.each(existingConstructor._childConstructors, function (i, child) {
        var childPrototype = child.prototype; // Redefine the child widget using the same prototype that was
        // originally used, but inherit from the new version of the base

        $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
      }); // Remove the list of existing child constructors from the old constructor
      // so the old child constructors can be garbage collected

      delete existingConstructor._childConstructors;
    } else {
      base._childConstructors.push(constructor);
    }

    $.widget.bridge(name, constructor);
    return constructor;
  };

  $.widget.extend = function (target) {
    var input = widgetSlice.call(arguments, 1);
    var inputIndex = 0;
    var inputLength = input.length;
    var key;
    var value;

    for (; inputIndex < inputLength; inputIndex++) {
      for (key in input[inputIndex]) {
        value = input[inputIndex][key];

        if (widgetHasOwnProperty.call(input[inputIndex], key) && value !== undefined) {
          // Clone objects
          if ($.isPlainObject(value)) {
            target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : // Don't extend strings, arrays, etc. with objects
            $.widget.extend({}, value); // Copy everything else by reference
          } else {
            target[key] = value;
          }
        }
      }
    }

    return target;
  };

  $.widget.bridge = function (name, object) {
    var fullName = object.prototype.widgetFullName || name;

    $.fn[name] = function (options) {
      var isMethodCall = typeof options === "string";
      var args = widgetSlice.call(arguments, 1);
      var returnValue = this;

      if (isMethodCall) {
        // If this is an empty collection, we need to have the instance method
        // return undefined instead of the jQuery instance
        if (!this.length && options === "instance") {
          returnValue = undefined;
        } else {
          this.each(function () {
            var methodValue;
            var instance = $.data(this, fullName);

            if (options === "instance") {
              returnValue = instance;
              return false;
            }

            if (!instance) {
              return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'");
            }

            if (typeof instance[options] !== "function" || options.charAt(0) === "_") {
              return $.error("no such method '" + options + "' for " + name + " widget instance");
            }

            methodValue = instance[options].apply(instance, args);

            if (methodValue !== instance && methodValue !== undefined) {
              returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
              return false;
            }
          });
        }
      } else {
        // Allow multiple hashes to be passed on init
        if (args.length) {
          options = $.widget.extend.apply(null, [options].concat(args));
        }

        this.each(function () {
          var instance = $.data(this, fullName);

          if (instance) {
            instance.option(options || {});

            if (instance._init) {
              instance._init();
            }
          } else {
            $.data(this, fullName, new object(options, this));
          }
        });
      }

      return returnValue;
    };
  };

  $.Widget = function ()
  /* options, element */
  {};

  $.Widget._childConstructors = [];
  $.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: false,
      // Callbacks
      create: null
    },
    _createWidget: function _createWidget(options, element) {
      element = $(element || this.defaultElement || this)[0];
      this.element = $(element);
      this.uuid = widgetUuid++;
      this.eventNamespace = "." + this.widgetName + this.uuid;
      this.bindings = $();
      this.hoverable = $();
      this.focusable = $();
      this.classesElementLookup = {};

      if (element !== this) {
        $.data(element, this.widgetFullName, this);

        this._on(true, this.element, {
          remove: function remove(event) {
            if (event.target === element) {
              this.destroy();
            }
          }
        });

        this.document = $(element.style ? // Element within the document
        element.ownerDocument : // Element is window or document
        element.document || element);
        this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
      }

      this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);

      this._create();

      if (this.options.disabled) {
        this._setOptionDisabled(this.options.disabled);
      }

      this._trigger("create", null, this._getCreateEventData());

      this._init();
    },
    _getCreateOptions: function _getCreateOptions() {
      return {};
    },
    _getCreateEventData: $.noop,
    _create: $.noop,
    _init: $.noop,
    destroy: function destroy() {
      var that = this;

      this._destroy();

      $.each(this.classesElementLookup, function (key, value) {
        that._removeClass(value, key);
      }); // We can probably remove the unbind calls in 2.0
      // all event bindings should go through this._on()

      this.element.off(this.eventNamespace).removeData(this.widgetFullName);
      this.widget().off(this.eventNamespace).removeAttr("aria-disabled"); // Clean up events and states

      this.bindings.off(this.eventNamespace);
    },
    _destroy: $.noop,
    widget: function widget() {
      return this.element;
    },
    option: function option(key, value) {
      var options = key;
      var parts;
      var curOption;
      var i;

      if (arguments.length === 0) {
        // Don't return a reference to the internal hash
        return $.widget.extend({}, this.options);
      }

      if (typeof key === "string") {
        // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
        options = {};
        parts = key.split(".");
        key = parts.shift();

        if (parts.length) {
          curOption = options[key] = $.widget.extend({}, this.options[key]);

          for (i = 0; i < parts.length - 1; i++) {
            curOption[parts[i]] = curOption[parts[i]] || {};
            curOption = curOption[parts[i]];
          }

          key = parts.pop();

          if (arguments.length === 1) {
            return curOption[key] === undefined ? null : curOption[key];
          }

          curOption[key] = value;
        } else {
          if (arguments.length === 1) {
            return this.options[key] === undefined ? null : this.options[key];
          }

          options[key] = value;
        }
      }

      this._setOptions(options);

      return this;
    },
    _setOptions: function _setOptions(options) {
      var key;

      for (key in options) {
        this._setOption(key, options[key]);
      }

      return this;
    },
    _setOption: function _setOption(key, value) {
      if (key === "classes") {
        this._setOptionClasses(value);
      }

      this.options[key] = value;

      if (key === "disabled") {
        this._setOptionDisabled(value);
      }

      return this;
    },
    _setOptionClasses: function _setOptionClasses(value) {
      var classKey, elements, currentElements;

      for (classKey in value) {
        currentElements = this.classesElementLookup[classKey];

        if (value[classKey] === this.options.classes[classKey] || !currentElements || !currentElements.length) {
          continue;
        } // We are doing this to create a new jQuery object because the _removeClass() call
        // on the next line is going to destroy the reference to the current elements being
        // tracked. We need to save a copy of this collection so that we can add the new classes
        // below.


        elements = $(currentElements.get());

        this._removeClass(currentElements, classKey); // We don't use _addClass() here, because that uses this.options.classes
        // for generating the string of classes. We want to use the value passed in from
        // _setOption(), this is the new value of the classes option which was passed to
        // _setOption(). We pass this value directly to _classes().


        elements.addClass(this._classes({
          element: elements,
          keys: classKey,
          classes: value,
          add: true
        }));
      }
    },
    _setOptionDisabled: function _setOptionDisabled(value) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value); // If the widget is becoming disabled, then nothing is interactive


      if (value) {
        this._removeClass(this.hoverable, null, "ui-state-hover");

        this._removeClass(this.focusable, null, "ui-state-focus");
      }
    },
    enable: function enable() {
      return this._setOptions({
        disabled: false
      });
    },
    disable: function disable() {
      return this._setOptions({
        disabled: true
      });
    },
    _classes: function _classes(options) {
      var full = [];
      var that = this;
      options = $.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, options);

      function bindRemoveEvent() {
        var nodesToBind = [];
        options.element.each(function (_, element) {
          var isTracked = $.map(that.classesElementLookup, function (elements) {
            return elements;
          }).some(function (elements) {
            return elements.is(element);
          });

          if (!isTracked) {
            nodesToBind.push(element);
          }
        });

        that._on($(nodesToBind), {
          remove: "_untrackClassesElement"
        });
      }

      function processClassString(classes, checkOption) {
        var current, i;

        for (i = 0; i < classes.length; i++) {
          current = that.classesElementLookup[classes[i]] || $();

          if (options.add) {
            bindRemoveEvent();
            current = $($.uniqueSort(current.get().concat(options.element.get())));
          } else {
            current = $(current.not(options.element).get());
          }

          that.classesElementLookup[classes[i]] = current;
          full.push(classes[i]);

          if (checkOption && options.classes[classes[i]]) {
            full.push(options.classes[classes[i]]);
          }
        }
      }

      if (options.keys) {
        processClassString(options.keys.match(/\S+/g) || [], true);
      }

      if (options.extra) {
        processClassString(options.extra.match(/\S+/g) || []);
      }

      return full.join(" ");
    },
    _untrackClassesElement: function _untrackClassesElement(event) {
      var that = this;
      $.each(that.classesElementLookup, function (key, value) {
        if ($.inArray(event.target, value) !== -1) {
          that.classesElementLookup[key] = $(value.not(event.target).get());
        }
      });

      this._off($(event.target));
    },
    _removeClass: function _removeClass(element, keys, extra) {
      return this._toggleClass(element, keys, extra, false);
    },
    _addClass: function _addClass(element, keys, extra) {
      return this._toggleClass(element, keys, extra, true);
    },
    _toggleClass: function _toggleClass(element, keys, extra, add) {
      add = typeof add === "boolean" ? add : extra;
      var shift = typeof element === "string" || element === null,
          options = {
        extra: shift ? keys : extra,
        keys: shift ? element : keys,
        element: shift ? this.element : element,
        add: add
      };
      options.element.toggleClass(this._classes(options), add);
      return this;
    },
    _on: function _on(suppressDisabledCheck, element, handlers) {
      var delegateElement;
      var instance = this; // No suppressDisabledCheck flag, shuffle arguments

      if (typeof suppressDisabledCheck !== "boolean") {
        handlers = element;
        element = suppressDisabledCheck;
        suppressDisabledCheck = false;
      } // No element argument, shuffle and use this.element


      if (!handlers) {
        handlers = element;
        element = this.element;
        delegateElement = this.widget();
      } else {
        element = delegateElement = $(element);
        this.bindings = this.bindings.add(element);
      }

      $.each(handlers, function (event, handler) {
        function handlerProxy() {
          // Allow widgets to customize the disabled handling
          // - disabled as an array instead of boolean
          // - disabled class as method for disabling individual parts
          if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
            return;
          }

          return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
        } // Copy the guid so direct unbinding works


        if (typeof handler !== "string") {
          handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
        }

        var match = event.match(/^([\w:-]*)\s*(.*)$/);
        var eventName = match[1] + instance.eventNamespace;
        var selector = match[2];

        if (selector) {
          delegateElement.on(eventName, selector, handlerProxy);
        } else {
          element.on(eventName, handlerProxy);
        }
      });
    },
    _off: function _off(element, eventName) {
      eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
      element.off(eventName); // Clear the stack to avoid memory leaks (#10056)

      this.bindings = $(this.bindings.not(element).get());
      this.focusable = $(this.focusable.not(element).get());
      this.hoverable = $(this.hoverable.not(element).get());
    },
    _delay: function _delay(handler, delay) {
      function handlerProxy() {
        return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
      }

      var instance = this;
      return setTimeout(handlerProxy, delay || 0);
    },
    _hoverable: function _hoverable(element) {
      this.hoverable = this.hoverable.add(element);

      this._on(element, {
        mouseenter: function mouseenter(event) {
          this._addClass($(event.currentTarget), null, "ui-state-hover");
        },
        mouseleave: function mouseleave(event) {
          this._removeClass($(event.currentTarget), null, "ui-state-hover");
        }
      });
    },
    _focusable: function _focusable(element) {
      this.focusable = this.focusable.add(element);

      this._on(element, {
        focusin: function focusin(event) {
          this._addClass($(event.currentTarget), null, "ui-state-focus");
        },
        focusout: function focusout(event) {
          this._removeClass($(event.currentTarget), null, "ui-state-focus");
        }
      });
    },
    _trigger: function _trigger(type, event, data) {
      var prop, orig;
      var callback = this.options[type];
      data = data || {};
      event = $.Event(event);
      event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase(); // The original event may come from any element
      // so we need to reset the target on the new event

      event.target = this.element[0]; // Copy original event properties over to the new event

      orig = event.originalEvent;

      if (orig) {
        for (prop in orig) {
          if (!(prop in event)) {
            event[prop] = orig[prop];
          }
        }
      }

      this.element.trigger(event, data);
      return !(typeof callback === "function" && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
    }
  };
  $.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (method, defaultEffect) {
    $.Widget.prototype["_" + method] = function (element, options, callback) {
      if (typeof options === "string") {
        options = {
          effect: options
        };
      }

      var hasOptions;
      var effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
      options = options || {};

      if (typeof options === "number") {
        options = {
          duration: options
        };
      } else if (options === true) {
        options = {};
      }

      hasOptions = !$.isEmptyObject(options);
      options.complete = callback;

      if (options.delay) {
        element.delay(options.delay);
      }

      if (hasOptions && $.effects && $.effects.effect[effectName]) {
        element[method](options);
      } else if (effectName !== method && element[effectName]) {
        element[effectName](options.duration, options.easing, callback);
      } else {
        element.queue(function (next) {
          $(this)[method]();

          if (callback) {
            callback.call(element[0]);
          }

          next();
        });
      }
    };
  });
  return $.widget;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/autocomplete.js":
/*!***********************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/autocomplete.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Autocomplete 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Autocomplete
//>>group: Widgets
//>>description: Lists suggested words as the user is typing.
//>>docs: http://api.jqueryui.com/autocomplete/
//>>demos: http://jqueryui.com/autocomplete/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/autocomplete.css
//>>css.theme: ../../themes/base/theme.css
(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./menu */ "./node_modules/jquery-ui/ui/widgets/menu.js"), __webpack_require__(/*! ../keycode */ "./node_modules/jquery-ui/ui/keycode.js"), __webpack_require__(/*! ../position */ "./node_modules/jquery-ui/ui/position.js"), __webpack_require__(/*! ../safe-active-element */ "./node_modules/jquery-ui/ui/safe-active-element.js"), __webpack_require__(/*! ../version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  $.widget("ui.autocomplete", {
    version: "1.13.1",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: false,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      // Callbacks
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    liveRegionTimer: null,
    _create: function _create() {
      // Some browsers only repeat keydown events, not keypress events,
      // so we use the suppressKeyPress flag to determine if we've already
      // handled the keydown event. #7269
      // Unfortunately the code for & in keypress is the same as the up arrow,
      // so we use the suppressKeyPressRepeat flag to avoid handling keypress
      // events when we know the keydown event was used to modify the
      // search term. #7799
      var suppressKeyPress,
          suppressKeyPressRepeat,
          suppressInput,
          nodeName = this.element[0].nodeName.toLowerCase(),
          isTextarea = nodeName === "textarea",
          isInput = nodeName === "input"; // Textareas are always multi-line
      // Inputs are always single-line, even if inside a contentEditable element
      // IE also treats inputs as contentEditable
      // All other element types are determined by whether or not they're contentEditable

      this.isMultiLine = isTextarea || !isInput && this._isContentEditable(this.element);
      this.valueMethod = this.element[isTextarea || isInput ? "val" : "text"];
      this.isNewMenu = true;

      this._addClass("ui-autocomplete-input");

      this.element.attr("autocomplete", "off");

      this._on(this.element, {
        keydown: function keydown(event) {
          if (this.element.prop("readOnly")) {
            suppressKeyPress = true;
            suppressInput = true;
            suppressKeyPressRepeat = true;
            return;
          }

          suppressKeyPress = false;
          suppressInput = false;
          suppressKeyPressRepeat = false;
          var keyCode = $.ui.keyCode;

          switch (event.keyCode) {
            case keyCode.PAGE_UP:
              suppressKeyPress = true;

              this._move("previousPage", event);

              break;

            case keyCode.PAGE_DOWN:
              suppressKeyPress = true;

              this._move("nextPage", event);

              break;

            case keyCode.UP:
              suppressKeyPress = true;

              this._keyEvent("previous", event);

              break;

            case keyCode.DOWN:
              suppressKeyPress = true;

              this._keyEvent("next", event);

              break;

            case keyCode.ENTER:
              // when menu is open and has focus
              if (this.menu.active) {
                // #6055 - Opera still allows the keypress to occur
                // which causes forms to submit
                suppressKeyPress = true;
                event.preventDefault();
                this.menu.select(event);
              }

              break;

            case keyCode.TAB:
              if (this.menu.active) {
                this.menu.select(event);
              }

              break;

            case keyCode.ESCAPE:
              if (this.menu.element.is(":visible")) {
                if (!this.isMultiLine) {
                  this._value(this.term);
                }

                this.close(event); // Different browsers have different default behavior for escape
                // Single press can mean undo or clear
                // Double press in IE means clear the whole form

                event.preventDefault();
              }

              break;

            default:
              suppressKeyPressRepeat = true; // search timeout should be triggered before the input value is changed

              this._searchTimeout(event);

              break;
          }
        },
        keypress: function keypress(event) {
          if (suppressKeyPress) {
            suppressKeyPress = false;

            if (!this.isMultiLine || this.menu.element.is(":visible")) {
              event.preventDefault();
            }

            return;
          }

          if (suppressKeyPressRepeat) {
            return;
          } // Replicate some key handlers to allow them to repeat in Firefox and Opera


          var keyCode = $.ui.keyCode;

          switch (event.keyCode) {
            case keyCode.PAGE_UP:
              this._move("previousPage", event);

              break;

            case keyCode.PAGE_DOWN:
              this._move("nextPage", event);

              break;

            case keyCode.UP:
              this._keyEvent("previous", event);

              break;

            case keyCode.DOWN:
              this._keyEvent("next", event);

              break;
          }
        },
        input: function input(event) {
          if (suppressInput) {
            suppressInput = false;
            event.preventDefault();
            return;
          }

          this._searchTimeout(event);
        },
        focus: function focus() {
          this.selectedItem = null;
          this.previous = this._value();
        },
        blur: function blur(event) {
          clearTimeout(this.searching);
          this.close(event);

          this._change(event);
        }
      });

      this._initSource();

      this.menu = $("<ul>").appendTo(this._appendTo()).menu({
        // disable ARIA support, the live region takes care of that
        role: null
      }).hide() // Support: IE 11 only, Edge <= 14
      // For other browsers, we preventDefault() on the mousedown event
      // to keep the dropdown from taking focus from the input. This doesn't
      // work for IE/Edge, causing problems with selection and scrolling (#9638)
      // Happily, IE and Edge support an "unselectable" attribute that
      // prevents an element from receiving focus, exactly what we want here.
      .attr({
        "unselectable": "on"
      }).menu("instance");

      this._addClass(this.menu.element, "ui-autocomplete", "ui-front");

      this._on(this.menu.element, {
        mousedown: function mousedown(event) {
          // Prevent moving focus out of the text field
          event.preventDefault();
        },
        menufocus: function menufocus(event, ui) {
          var label, item; // support: Firefox
          // Prevent accidental activation of menu items in Firefox (#7024 #9118)

          if (this.isNewMenu) {
            this.isNewMenu = false;

            if (event.originalEvent && /^mouse/.test(event.originalEvent.type)) {
              this.menu.blur();
              this.document.one("mousemove", function () {
                $(event.target).trigger(event.originalEvent);
              });
              return;
            }
          }

          item = ui.item.data("ui-autocomplete-item");

          if (false !== this._trigger("focus", event, {
            item: item
          })) {
            // use value to match what will end up in the input, if it was a key event
            if (event.originalEvent && /^key/.test(event.originalEvent.type)) {
              this._value(item.value);
            }
          } // Announce the value in the liveRegion


          label = ui.item.attr("aria-label") || item.value;

          if (label && String.prototype.trim.call(label).length) {
            clearTimeout(this.liveRegionTimer);
            this.liveRegionTimer = this._delay(function () {
              this.liveRegion.html($("<div>").text(label));
            }, 100);
          }
        },
        menuselect: function menuselect(event, ui) {
          var item = ui.item.data("ui-autocomplete-item"),
              previous = this.previous; // Only trigger when focus was lost (click on menu)

          if (this.element[0] !== $.ui.safeActiveElement(this.document[0])) {
            this.element.trigger("focus");
            this.previous = previous; // #6109 - IE triggers two focus events and the second
            // is asynchronous, so we need to reset the previous
            // term synchronously and asynchronously :-(

            this._delay(function () {
              this.previous = previous;
              this.selectedItem = item;
            });
          }

          if (false !== this._trigger("select", event, {
            item: item
          })) {
            this._value(item.value);
          } // reset the term after the select event
          // this allows custom select handling to work properly


          this.term = this._value();
          this.close(event);
          this.selectedItem = item;
        }
      });

      this.liveRegion = $("<div>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body);

      this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"); // Turning off autocomplete prevents the browser from remembering the
      // value when navigating through history, so we re-enable autocomplete
      // if the page is unloaded before the widget is destroyed. #7790


      this._on(this.window, {
        beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _destroy: function _destroy() {
      clearTimeout(this.searching);
      this.element.removeAttr("autocomplete");
      this.menu.element.remove();
      this.liveRegion.remove();
    },
    _setOption: function _setOption(key, value) {
      this._super(key, value);

      if (key === "source") {
        this._initSource();
      }

      if (key === "appendTo") {
        this.menu.element.appendTo(this._appendTo());
      }

      if (key === "disabled" && value && this.xhr) {
        this.xhr.abort();
      }
    },
    _isEventTargetInWidget: function _isEventTargetInWidget(event) {
      var menuElement = this.menu.element[0];
      return event.target === this.element[0] || event.target === menuElement || $.contains(menuElement, event.target);
    },
    _closeOnClickOutside: function _closeOnClickOutside(event) {
      if (!this._isEventTargetInWidget(event)) {
        this.close();
      }
    },
    _appendTo: function _appendTo() {
      var element = this.options.appendTo;

      if (element) {
        element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0);
      }

      if (!element || !element[0]) {
        element = this.element.closest(".ui-front, dialog");
      }

      if (!element.length) {
        element = this.document[0].body;
      }

      return element;
    },
    _initSource: function _initSource() {
      var array,
          url,
          that = this;

      if (Array.isArray(this.options.source)) {
        array = this.options.source;

        this.source = function (request, response) {
          response($.ui.autocomplete.filter(array, request.term));
        };
      } else if (typeof this.options.source === "string") {
        url = this.options.source;

        this.source = function (request, response) {
          if (that.xhr) {
            that.xhr.abort();
          }

          that.xhr = $.ajax({
            url: url,
            data: request,
            dataType: "json",
            success: function success(data) {
              response(data);
            },
            error: function error() {
              response([]);
            }
          });
        };
      } else {
        this.source = this.options.source;
      }
    },
    _searchTimeout: function _searchTimeout(event) {
      clearTimeout(this.searching);
      this.searching = this._delay(function () {
        // Search if the value has changed, or if the user retypes the same value (see #7434)
        var equalValues = this.term === this._value(),
            menuVisible = this.menu.element.is(":visible"),
            modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

        if (!equalValues || equalValues && !menuVisible && !modifierKey) {
          this.selectedItem = null;
          this.search(null, event);
        }
      }, this.options.delay);
    },
    search: function search(value, event) {
      value = value != null ? value : this._value(); // Always save the actual value, not the one passed as an argument

      this.term = this._value();

      if (value.length < this.options.minLength) {
        return this.close(event);
      }

      if (this._trigger("search", event) === false) {
        return;
      }

      return this._search(value);
    },
    _search: function _search(value) {
      this.pending++;

      this._addClass("ui-autocomplete-loading");

      this.cancelSearch = false;
      this.source({
        term: value
      }, this._response());
    },
    _response: function _response() {
      var index = ++this.requestIndex;
      return function (content) {
        if (index === this.requestIndex) {
          this.__response(content);
        }

        this.pending--;

        if (!this.pending) {
          this._removeClass("ui-autocomplete-loading");
        }
      }.bind(this);
    },
    __response: function __response(content) {
      if (content) {
        content = this._normalize(content);
      }

      this._trigger("response", null, {
        content: content
      });

      if (!this.options.disabled && content && content.length && !this.cancelSearch) {
        this._suggest(content);

        this._trigger("open");
      } else {
        // use ._close() instead of .close() so we don't cancel future searches
        this._close();
      }
    },
    close: function close(event) {
      this.cancelSearch = true;

      this._close(event);
    },
    _close: function _close(event) {
      // Remove the handler that closes the menu on outside clicks
      this._off(this.document, "mousedown");

      if (this.menu.element.is(":visible")) {
        this.menu.element.hide();
        this.menu.blur();
        this.isNewMenu = true;

        this._trigger("close", event);
      }
    },
    _change: function _change(event) {
      if (this.previous !== this._value()) {
        this._trigger("change", event, {
          item: this.selectedItem
        });
      }
    },
    _normalize: function _normalize(items) {
      // assume all items have the right format when the first item is complete
      if (items.length && items[0].label && items[0].value) {
        return items;
      }

      return $.map(items, function (item) {
        if (typeof item === "string") {
          return {
            label: item,
            value: item
          };
        }

        return $.extend({}, item, {
          label: item.label || item.value,
          value: item.value || item.label
        });
      });
    },
    _suggest: function _suggest(items) {
      var ul = this.menu.element.empty();

      this._renderMenu(ul, items);

      this.isNewMenu = true;
      this.menu.refresh(); // Size and position menu

      ul.show();

      this._resizeMenu();

      ul.position($.extend({
        of: this.element
      }, this.options.position));

      if (this.options.autoFocus) {
        this.menu.next();
      } // Listen for interactions outside of the widget (#6642)


      this._on(this.document, {
        mousedown: "_closeOnClickOutside"
      });
    },
    _resizeMenu: function _resizeMenu() {
      var ul = this.menu.element;
      ul.outerWidth(Math.max( // Firefox wraps long text (possibly a rounding bug)
      // so we add 1px to avoid the wrapping (#7513)
      ul.width("").outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function _renderMenu(ul, items) {
      var that = this;
      $.each(items, function (index, item) {
        that._renderItemData(ul, item);
      });
    },
    _renderItemData: function _renderItemData(ul, item) {
      return this._renderItem(ul, item).data("ui-autocomplete-item", item);
    },
    _renderItem: function _renderItem(ul, item) {
      return $("<li>").append($("<div>").text(item.label)).appendTo(ul);
    },
    _move: function _move(direction, event) {
      if (!this.menu.element.is(":visible")) {
        this.search(null, event);
        return;
      }

      if (this.menu.isFirstItem() && /^previous/.test(direction) || this.menu.isLastItem() && /^next/.test(direction)) {
        if (!this.isMultiLine) {
          this._value(this.term);
        }

        this.menu.blur();
        return;
      }

      this.menu[direction](event);
    },
    widget: function widget() {
      return this.menu.element;
    },
    _value: function _value() {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function _keyEvent(keyEvent, event) {
      if (!this.isMultiLine || this.menu.element.is(":visible")) {
        this._move(keyEvent, event); // Prevents moving cursor to beginning/end of the text field in some browsers


        event.preventDefault();
      }
    },
    // Support: Chrome <=50
    // We should be able to just use this.element.prop( "isContentEditable" )
    // but hidden elements always report false in Chrome.
    // https://code.google.com/p/chromium/issues/detail?id=313082
    _isContentEditable: function _isContentEditable(element) {
      if (!element.length) {
        return false;
      }

      var editable = element.prop("contentEditable");

      if (editable === "inherit") {
        return this._isContentEditable(element.parent());
      }

      return editable === "true";
    }
  });
  $.extend($.ui.autocomplete, {
    escapeRegex: function escapeRegex(value) {
      return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    },
    filter: function filter(array, term) {
      var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i");
      return $.grep(array, function (value) {
        return matcher.test(value.label || value.value || value);
      });
    }
  }); // Live region extension, adding a `messages` option
  // NOTE: This is an experimental API. We are still investigating
  // a full solution for string manipulation and internationalization.

  $.widget("ui.autocomplete", $.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function results(amount) {
          return amount + (amount > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
        }
      }
    },
    __response: function __response(content) {
      var message;

      this._superApply(arguments);

      if (this.options.disabled || this.cancelSearch) {
        return;
      }

      if (content && content.length) {
        message = this.options.messages.results(content.length);
      } else {
        message = this.options.messages.noResults;
      }

      clearTimeout(this.liveRegionTimer);
      this.liveRegionTimer = this._delay(function () {
        this.liveRegion.html($("<div>").text(message));
      }, 100);
    }
  });
  return $.ui.autocomplete;
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/menu.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/menu.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Menu 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Menu
//>>group: Widgets
//>>description: Creates nestable menus.
//>>docs: http://api.jqueryui.com/menu/
//>>demos: http://jqueryui.com/menu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/menu.css
//>>css.theme: ../../themes/base/theme.css
(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ../keycode */ "./node_modules/jquery-ui/ui/keycode.js"), __webpack_require__(/*! ../position */ "./node_modules/jquery-ui/ui/position.js"), __webpack_require__(/*! ../safe-active-element */ "./node_modules/jquery-ui/ui/safe-active-element.js"), __webpack_require__(/*! ../unique-id */ "./node_modules/jquery-ui/ui/unique-id.js"), __webpack_require__(/*! ../version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  return $.widget("ui.menu", {
    version: "1.13.1",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {
        submenu: "ui-icon-caret-1-e"
      },
      items: "> *",
      menus: "ul",
      position: {
        my: "left top",
        at: "right top"
      },
      role: "menu",
      // Callbacks
      blur: null,
      focus: null,
      select: null
    },
    _create: function _create() {
      this.activeMenu = this.element; // Flag used to prevent firing of the click handler
      // as the event bubbles up through nested menus

      this.mouseHandled = false;
      this.lastMousePosition = {
        x: null,
        y: null
      };
      this.element.uniqueId().attr({
        role: this.options.role,
        tabIndex: 0
      });

      this._addClass("ui-menu", "ui-widget ui-widget-content");

      this._on({
        // Prevent focus from sticking to links inside menu after clicking
        // them (focus should always stay on UL during navigation).
        "mousedown .ui-menu-item": function mousedownUiMenuItem(event) {
          event.preventDefault();

          this._activateItem(event);
        },
        "click .ui-menu-item": function clickUiMenuItem(event) {
          var target = $(event.target);
          var active = $($.ui.safeActiveElement(this.document[0]));

          if (!this.mouseHandled && target.not(".ui-state-disabled").length) {
            this.select(event); // Only set the mouseHandled flag if the event will bubble, see #9469.

            if (!event.isPropagationStopped()) {
              this.mouseHandled = true;
            } // Open submenu on click


            if (target.has(".ui-menu").length) {
              this.expand(event);
            } else if (!this.element.is(":focus") && active.closest(".ui-menu").length) {
              // Redirect focus to the menu
              this.element.trigger("focus", [true]); // If the active item is on the top level, let it stay active.
              // Otherwise, blur the active item since it is no longer visible.

              if (this.active && this.active.parents(".ui-menu").length === 1) {
                clearTimeout(this.timer);
              }
            }
          }
        },
        "mouseenter .ui-menu-item": "_activateItem",
        "mousemove .ui-menu-item": "_activateItem",
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function focus(event, keepActiveItem) {
          // If there's already an active item, keep it active
          // If not, activate the first item
          var item = this.active || this._menuItems().first();

          if (!keepActiveItem) {
            this.focus(event, item);
          }
        },
        blur: function blur(event) {
          this._delay(function () {
            var notContained = !$.contains(this.element[0], $.ui.safeActiveElement(this.document[0]));

            if (notContained) {
              this.collapseAll(event);
            }
          });
        },
        keydown: "_keydown"
      });

      this.refresh(); // Clicks outside of a menu collapse any open menus

      this._on(this.document, {
        click: function click(event) {
          if (this._closeOnDocumentClick(event)) {
            this.collapseAll(event, true);
          } // Reset the mouseHandled flag


          this.mouseHandled = false;
        }
      });
    },
    _activateItem: function _activateItem(event) {
      // Ignore mouse events while typeahead is active, see #10458.
      // Prevents focusing the wrong item when typeahead causes a scroll while the mouse
      // is over an item in the menu
      if (this.previousFilter) {
        return;
      } // If the mouse didn't actually move, but the page was scrolled, ignore the event (#9356)


      if (event.clientX === this.lastMousePosition.x && event.clientY === this.lastMousePosition.y) {
        return;
      }

      this.lastMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      var actualTarget = $(event.target).closest(".ui-menu-item"),
          target = $(event.currentTarget); // Ignore bubbled events on parent items, see #11641

      if (actualTarget[0] !== target[0]) {
        return;
      } // If the item is already active, there's nothing to do


      if (target.is(".ui-state-active")) {
        return;
      } // Remove ui-state-active class from siblings of the newly focused menu item
      // to avoid a jump caused by adjacent elements both having a class with a border


      this._removeClass(target.siblings().children(".ui-state-active"), null, "ui-state-active");

      this.focus(event, target);
    },
    _destroy: function _destroy() {
      var items = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
          submenus = items.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup"); // Destroy (sub)menus

      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled " + "tabIndex").removeUniqueId().show();
      submenus.children().each(function () {
        var elem = $(this);

        if (elem.data("ui-menu-submenu-caret")) {
          elem.remove();
        }
      });
    },
    _keydown: function _keydown(event) {
      var match,
          prev,
          character,
          skip,
          preventDefault = true;

      switch (event.keyCode) {
        case $.ui.keyCode.PAGE_UP:
          this.previousPage(event);
          break;

        case $.ui.keyCode.PAGE_DOWN:
          this.nextPage(event);
          break;

        case $.ui.keyCode.HOME:
          this._move("first", "first", event);

          break;

        case $.ui.keyCode.END:
          this._move("last", "last", event);

          break;

        case $.ui.keyCode.UP:
          this.previous(event);
          break;

        case $.ui.keyCode.DOWN:
          this.next(event);
          break;

        case $.ui.keyCode.LEFT:
          this.collapse(event);
          break;

        case $.ui.keyCode.RIGHT:
          if (this.active && !this.active.is(".ui-state-disabled")) {
            this.expand(event);
          }

          break;

        case $.ui.keyCode.ENTER:
        case $.ui.keyCode.SPACE:
          this._activate(event);

          break;

        case $.ui.keyCode.ESCAPE:
          this.collapse(event);
          break;

        default:
          preventDefault = false;
          prev = this.previousFilter || "";
          skip = false; // Support number pad values

          character = event.keyCode >= 96 && event.keyCode <= 105 ? (event.keyCode - 96).toString() : String.fromCharCode(event.keyCode);
          clearTimeout(this.filterTimer);

          if (character === prev) {
            skip = true;
          } else {
            character = prev + character;
          }

          match = this._filterMenuItems(character);
          match = skip && match.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : match; // If no matches on the current filter, reset to the last character pressed
          // to move down the menu to the first item that starts with that character

          if (!match.length) {
            character = String.fromCharCode(event.keyCode);
            match = this._filterMenuItems(character);
          }

          if (match.length) {
            this.focus(event, match);
            this.previousFilter = character;
            this.filterTimer = this._delay(function () {
              delete this.previousFilter;
            }, 1000);
          } else {
            delete this.previousFilter;
          }

      }

      if (preventDefault) {
        event.preventDefault();
      }
    },
    _activate: function _activate(event) {
      if (this.active && !this.active.is(".ui-state-disabled")) {
        if (this.active.children("[aria-haspopup='true']").length) {
          this.expand(event);
        } else {
          this.select(event);
        }
      }
    },
    refresh: function refresh() {
      var menus,
          items,
          newSubmenus,
          newItems,
          newWrappers,
          that = this,
          icon = this.options.icons.submenu,
          submenus = this.element.find(this.options.menus);

      this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length); // Initialize nested menus


      newSubmenus = submenus.filter(":not(.ui-menu)").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function () {
        var menu = $(this),
            item = menu.prev(),
            submenuCaret = $("<span>").data("ui-menu-submenu-caret", true);

        that._addClass(submenuCaret, "ui-menu-icon", "ui-icon " + icon);

        item.attr("aria-haspopup", "true").prepend(submenuCaret);
        menu.attr("aria-labelledby", item.attr("id"));
      });

      this._addClass(newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front");

      menus = submenus.add(this.element);
      items = menus.find(this.options.items); // Initialize menu-items containing spaces and/or dashes only as dividers

      items.not(".ui-menu-item").each(function () {
        var item = $(this);

        if (that._isDivider(item)) {
          that._addClass(item, "ui-menu-divider", "ui-widget-content");
        }
      }); // Don't refresh list items that are already adapted

      newItems = items.not(".ui-menu-item, .ui-menu-divider");
      newWrappers = newItems.children().not(".ui-menu").uniqueId().attr({
        tabIndex: -1,
        role: this._itemRole()
      });

      this._addClass(newItems, "ui-menu-item")._addClass(newWrappers, "ui-menu-item-wrapper"); // Add aria-disabled attribute to any disabled menu item


      items.filter(".ui-state-disabled").attr("aria-disabled", "true"); // If the active item has been removed, blur the menu

      if (this.active && !$.contains(this.element[0], this.active[0])) {
        this.blur();
      }
    },
    _itemRole: function _itemRole() {
      return {
        menu: "menuitem",
        listbox: "option"
      }[this.options.role];
    },
    _setOption: function _setOption(key, value) {
      if (key === "icons") {
        var icons = this.element.find(".ui-menu-icon");

        this._removeClass(icons, null, this.options.icons.submenu)._addClass(icons, null, value.submenu);
      }

      this._super(key, value);
    },
    _setOptionDisabled: function _setOptionDisabled(value) {
      this._super(value);

      this.element.attr("aria-disabled", String(value));

      this._toggleClass(null, "ui-state-disabled", !!value);
    },
    focus: function focus(event, item) {
      var nested, focused, activeParent;
      this.blur(event, event && event.type === "focus");

      this._scrollIntoView(item);

      this.active = item.first();
      focused = this.active.children(".ui-menu-item-wrapper");

      this._addClass(focused, null, "ui-state-active"); // Only update aria-activedescendant if there's a role
      // otherwise we assume focus is managed elsewhere


      if (this.options.role) {
        this.element.attr("aria-activedescendant", focused.attr("id"));
      } // Highlight active parent menu item, if any


      activeParent = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");

      this._addClass(activeParent, null, "ui-state-active");

      if (event && event.type === "keydown") {
        this._close();
      } else {
        this.timer = this._delay(function () {
          this._close();
        }, this.delay);
      }

      nested = item.children(".ui-menu");

      if (nested.length && event && /^mouse/.test(event.type)) {
        this._startOpening(nested);
      }

      this.activeMenu = item.parent();

      this._trigger("focus", event, {
        item: item
      });
    },
    _scrollIntoView: function _scrollIntoView(item) {
      var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;

      if (this._hasScroll()) {
        borderTop = parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0;
        paddingTop = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0;
        offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
        scroll = this.activeMenu.scrollTop();
        elementHeight = this.activeMenu.height();
        itemHeight = item.outerHeight();

        if (offset < 0) {
          this.activeMenu.scrollTop(scroll + offset);
        } else if (offset + itemHeight > elementHeight) {
          this.activeMenu.scrollTop(scroll + offset - elementHeight + itemHeight);
        }
      }
    },
    blur: function blur(event, fromFocus) {
      if (!fromFocus) {
        clearTimeout(this.timer);
      }

      if (!this.active) {
        return;
      }

      this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active");

      this._trigger("blur", event, {
        item: this.active
      });

      this.active = null;
    },
    _startOpening: function _startOpening(submenu) {
      clearTimeout(this.timer); // Don't open if already open fixes a Firefox bug that caused a .5 pixel
      // shift in the submenu position when mousing over the caret icon

      if (submenu.attr("aria-hidden") !== "true") {
        return;
      }

      this.timer = this._delay(function () {
        this._close();

        this._open(submenu);
      }, this.delay);
    },
    _open: function _open(submenu) {
      var position = $.extend({
        of: this.active
      }, this.options.position);
      clearTimeout(this.timer);
      this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden", "true");
      submenu.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(position);
    },
    collapseAll: function collapseAll(event, all) {
      clearTimeout(this.timer);
      this.timer = this._delay(function () {
        // If we were passed an event, look for the submenu that contains the event
        var currentMenu = all ? this.element : $(event && event.target).closest(this.element.find(".ui-menu")); // If we found no valid submenu ancestor, use the main menu to close all
        // sub menus anyway

        if (!currentMenu.length) {
          currentMenu = this.element;
        }

        this._close(currentMenu);

        this.blur(event); // Work around active item staying active after menu is blurred

        this._removeClass(currentMenu.find(".ui-state-active"), null, "ui-state-active");

        this.activeMenu = currentMenu;
      }, all ? 0 : this.delay);
    },
    // With no arguments, closes the currently active menu - if nothing is active
    // it closes all menus.  If passed an argument, it will search for menus BELOW
    _close: function _close(startMenu) {
      if (!startMenu) {
        startMenu = this.active ? this.active.parent() : this.element;
      }

      startMenu.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
    },
    _closeOnDocumentClick: function _closeOnDocumentClick(event) {
      return !$(event.target).closest(".ui-menu").length;
    },
    _isDivider: function _isDivider(item) {
      // Match hyphen, em dash, en dash
      return !/[^\-\u2014\u2013\s]/.test(item.text());
    },
    collapse: function collapse(event) {
      var newItem = this.active && this.active.parent().closest(".ui-menu-item", this.element);

      if (newItem && newItem.length) {
        this._close();

        this.focus(event, newItem);
      }
    },
    expand: function expand(event) {
      var newItem = this.active && this._menuItems(this.active.children(".ui-menu")).first();

      if (newItem && newItem.length) {
        this._open(newItem.parent()); // Delay so Firefox will not hide activedescendant change in expanding submenu from AT


        this._delay(function () {
          this.focus(event, newItem);
        });
      }
    },
    next: function next(event) {
      this._move("next", "first", event);
    },
    previous: function previous(event) {
      this._move("prev", "last", event);
    },
    isFirstItem: function isFirstItem() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function isLastItem() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _menuItems: function _menuItems(menu) {
      return (menu || this.element).find(this.options.items).filter(".ui-menu-item");
    },
    _move: function _move(direction, filter, event) {
      var next;

      if (this.active) {
        if (direction === "first" || direction === "last") {
          next = this.active[direction === "first" ? "prevAll" : "nextAll"](".ui-menu-item").last();
        } else {
          next = this.active[direction + "All"](".ui-menu-item").first();
        }
      }

      if (!next || !next.length || !this.active) {
        next = this._menuItems(this.activeMenu)[filter]();
      }

      this.focus(event, next);
    },
    nextPage: function nextPage(event) {
      var item, base, height;

      if (!this.active) {
        this.next(event);
        return;
      }

      if (this.isLastItem()) {
        return;
      }

      if (this._hasScroll()) {
        base = this.active.offset().top;
        height = this.element.innerHeight(); // jQuery 3.2 doesn't include scrollbars in innerHeight, add it back.

        if ($.fn.jquery.indexOf("3.2.") === 0) {
          height += this.element[0].offsetHeight - this.element.outerHeight();
        }

        this.active.nextAll(".ui-menu-item").each(function () {
          item = $(this);
          return item.offset().top - base - height < 0;
        });
        this.focus(event, item);
      } else {
        this.focus(event, this._menuItems(this.activeMenu)[!this.active ? "first" : "last"]());
      }
    },
    previousPage: function previousPage(event) {
      var item, base, height;

      if (!this.active) {
        this.next(event);
        return;
      }

      if (this.isFirstItem()) {
        return;
      }

      if (this._hasScroll()) {
        base = this.active.offset().top;
        height = this.element.innerHeight(); // jQuery 3.2 doesn't include scrollbars in innerHeight, add it back.

        if ($.fn.jquery.indexOf("3.2.") === 0) {
          height += this.element[0].offsetHeight - this.element.outerHeight();
        }

        this.active.prevAll(".ui-menu-item").each(function () {
          item = $(this);
          return item.offset().top - base + height > 0;
        });
        this.focus(event, item);
      } else {
        this.focus(event, this._menuItems(this.activeMenu).first());
      }
    },
    _hasScroll: function _hasScroll() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function select(event) {
      // TODO: It should never be possible to not have an active item at this
      // point, but the tests don't trigger mouseenter before click.
      this.active = this.active || $(event.target).closest(".ui-menu-item");
      var ui = {
        item: this.active
      };

      if (!this.active.has(".ui-menu").length) {
        this.collapseAll(event, true);
      }

      this._trigger("select", event, ui);
    },
    _filterMenuItems: function _filterMenuItems(character) {
      var escapedCharacter = character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          regex = new RegExp("^" + escapedCharacter, "i");
      return this.activeMenu.find(this.options.items) // Only match on items, not dividers or other content (#10571)
      .filter(".ui-menu-item").filter(function () {
        return regex.test(String.prototype.trim.call($(this).children(".ui-menu-item-wrapper").text()));
      });
    }
  });
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/mouse.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/mouse.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Mouse 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/
(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ../ie */ "./node_modules/jquery-ui/ui/ie.js"), __webpack_require__(/*! ../version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  var mouseHandled = false;
  $(document).on("mouseup", function () {
    mouseHandled = false;
  });
  return $.widget("ui.mouse", {
    version: "1.13.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function _mouseInit() {
      var that = this;
      this.element.on("mousedown." + this.widgetName, function (event) {
        return that._mouseDown(event);
      }).on("click." + this.widgetName, function (event) {
        if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
          $.removeData(event.target, that.widgetName + ".preventClickEvent");
          event.stopImmediatePropagation();
          return false;
        }
      });
      this.started = false;
    },
    // TODO: make sure destroying one instance of mouse doesn't mess with
    // other instances of mouse
    _mouseDestroy: function _mouseDestroy() {
      this.element.off("." + this.widgetName);

      if (this._mouseMoveDelegate) {
        this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
      }
    },
    _mouseDown: function _mouseDown(event) {
      // don't let more than one widget handle mouseStart
      if (mouseHandled) {
        return;
      }

      this._mouseMoved = false; // We may have missed mouseup (out of window)

      if (this._mouseStarted) {
        this._mouseUp(event);
      }

      this._mouseDownEvent = event;
      var that = this,
          btnIsLeft = event.which === 1,
          // event.target.nodeName works around a bug in IE 8 with
      // disabled inputs (#7620)
      elIsCancel = typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false;

      if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
        return true;
      }

      this.mouseDelayMet = !this.options.delay;

      if (!this.mouseDelayMet) {
        this._mouseDelayTimer = setTimeout(function () {
          that.mouseDelayMet = true;
        }, this.options.delay);
      }

      if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
        this._mouseStarted = this._mouseStart(event) !== false;

        if (!this._mouseStarted) {
          event.preventDefault();
          return true;
        }
      } // Click event may never have fired (Gecko & Opera)


      if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
        $.removeData(event.target, this.widgetName + ".preventClickEvent");
      } // These delegates are required to keep context


      this._mouseMoveDelegate = function (event) {
        return that._mouseMove(event);
      };

      this._mouseUpDelegate = function (event) {
        return that._mouseUp(event);
      };

      this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);
      event.preventDefault();
      mouseHandled = true;
      return true;
    },
    _mouseMove: function _mouseMove(event) {
      // Only check for mouseups outside the document if you've moved inside the document
      // at least once. This prevents the firing of mouseup in the case of IE<9, which will
      // fire a mousemove event if content is placed under the cursor. See #7778
      // Support: IE <9
      if (this._mouseMoved) {
        // IE mouseup check - mouseup happened when mouse was out of window
        if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !event.button) {
          return this._mouseUp(event); // Iframe mouseup check - mouseup occurred in another document
        } else if (!event.which) {
          // Support: Safari <=8 - 9
          // Safari sets which to 0 if you press any of the following keys
          // during a drag (#14461)
          if (event.originalEvent.altKey || event.originalEvent.ctrlKey || event.originalEvent.metaKey || event.originalEvent.shiftKey) {
            this.ignoreMissingWhich = true;
          } else if (!this.ignoreMissingWhich) {
            return this._mouseUp(event);
          }
        }
      }

      if (event.which || event.button) {
        this._mouseMoved = true;
      }

      if (this._mouseStarted) {
        this._mouseDrag(event);

        return event.preventDefault();
      }

      if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
        this._mouseStarted = this._mouseStart(this._mouseDownEvent, event) !== false;

        if (this._mouseStarted) {
          this._mouseDrag(event);
        } else {
          this._mouseUp(event);
        }
      }

      return !this._mouseStarted;
    },
    _mouseUp: function _mouseUp(event) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);

      if (this._mouseStarted) {
        this._mouseStarted = false;

        if (event.target === this._mouseDownEvent.target) {
          $.data(event.target, this.widgetName + ".preventClickEvent", true);
        }

        this._mouseStop(event);
      }

      if (this._mouseDelayTimer) {
        clearTimeout(this._mouseDelayTimer);
        delete this._mouseDelayTimer;
      }

      this.ignoreMissingWhich = false;
      mouseHandled = false;
      event.preventDefault();
    },
    _mouseDistanceMet: function _mouseDistanceMet(event) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function _mouseDelayMet()
    /* event */
    {
      return this.mouseDelayMet;
    },
    // These are placeholder methods, to be overriden by extending plugin
    _mouseStart: function _mouseStart()
    /* event */
    {},
    _mouseDrag: function _mouseDrag()
    /* event */
    {},
    _mouseStop: function _mouseStop()
    /* event */
    {},
    _mouseCapture: function _mouseCapture()
    /* event */
    {
      return true;
    }
  });
});

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widgets/sortable.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/sortable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Sortable 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Sortable
//>>group: Interactions
//>>description: Enables items in a list to be sorted using the mouse.
//>>docs: http://api.jqueryui.com/sortable/
//>>demos: http://jqueryui.com/sortable/
//>>css.structure: ../../themes/base/sortable.css
(function (factory) {
  "use strict";

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./mouse */ "./node_modules/jquery-ui/ui/widgets/mouse.js"), __webpack_require__(/*! ../data */ "./node_modules/jquery-ui/ui/data.js"), __webpack_require__(/*! ../ie */ "./node_modules/jquery-ui/ui/ie.js"), __webpack_require__(/*! ../scroll-parent */ "./node_modules/jquery-ui/ui/scroll-parent.js"), __webpack_require__(/*! ../version */ "./node_modules/jquery-ui/ui/version.js"), __webpack_require__(/*! ../widget */ "./node_modules/jquery-ui/ui/widget.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  return $.widget("ui.sortable", $.ui.mouse, {
    version: "1.13.1",
    widgetEventPrefix: "sort",
    ready: false,
    options: {
      appendTo: "parent",
      axis: false,
      connectWith: false,
      containment: false,
      cursor: "auto",
      cursorAt: false,
      dropOnEmpty: true,
      forcePlaceholderSize: false,
      forceHelperSize: false,
      grid: false,
      handle: false,
      helper: "original",
      items: "> *",
      opacity: false,
      placeholder: false,
      revert: false,
      scroll: true,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1000,
      // Callbacks
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _isOverAxis: function _isOverAxis(x, reference, size) {
      return x >= reference && x < reference + size;
    },
    _isFloating: function _isFloating(item) {
      return /left|right/.test(item.css("float")) || /inline|table-cell/.test(item.css("display"));
    },
    _create: function _create() {
      this.containerCache = {};

      this._addClass("ui-sortable"); //Get the items


      this.refresh(); //Let's determine the parent's offset

      this.offset = this.element.offset(); //Initialize mouse events for interaction

      this._mouseInit();

      this._setHandleClassName(); //We're ready to go


      this.ready = true;
    },
    _setOption: function _setOption(key, value) {
      this._super(key, value);

      if (key === "handle") {
        this._setHandleClassName();
      }
    },
    _setHandleClassName: function _setHandleClassName() {
      var that = this;

      this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");

      $.each(this.items, function () {
        that._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
      });
    },
    _destroy: function _destroy() {
      this._mouseDestroy();

      for (var i = this.items.length - 1; i >= 0; i--) {
        this.items[i].item.removeData(this.widgetName + "-item");
      }

      return this;
    },
    _mouseCapture: function _mouseCapture(event, overrideHandle) {
      var currentItem = null,
          validHandle = false,
          that = this;

      if (this.reverting) {
        return false;
      }

      if (this.options.disabled || this.options.type === "static") {
        return false;
      } //We have to refresh the items data once first


      this._refreshItems(event); //Find out if the clicked node (or one of its parents) is a actual item in this.items


      $(event.target).parents().each(function () {
        if ($.data(this, that.widgetName + "-item") === that) {
          currentItem = $(this);
          return false;
        }
      });

      if ($.data(event.target, that.widgetName + "-item") === that) {
        currentItem = $(event.target);
      }

      if (!currentItem) {
        return false;
      }

      if (this.options.handle && !overrideHandle) {
        $(this.options.handle, currentItem).find("*").addBack().each(function () {
          if (this === event.target) {
            validHandle = true;
          }
        });

        if (!validHandle) {
          return false;
        }
      }

      this.currentItem = currentItem;

      this._removeCurrentsFromItems();

      return true;
    },
    _mouseStart: function _mouseStart(event, overrideHandle, noActivation) {
      var i,
          body,
          o = this.options;
      this.currentContainer = this; //We only need to call refreshPositions, because the refreshItems call has been moved to
      // mouseCapture

      this.refreshPositions(); //Prepare the dragged items parent

      this.appendTo = $(o.appendTo !== "parent" ? o.appendTo : this.currentItem.parent()); //Create and append the visible helper

      this.helper = this._createHelper(event); //Cache the helper size

      this._cacheHelperProportions();
      /*
       * - Position generation -
       * This block generates everything position related - it's the core of draggables.
       */
      //Cache the margins of the original element


      this._cacheMargins(); //The element's absolute position on the page minus margins


      this.offset = this.currentItem.offset();
      this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      };
      $.extend(this.offset, {
        click: {
          //Where the click happened, relative to the element
          left: event.pageX - this.offset.left,
          top: event.pageY - this.offset.top
        },
        // This is a relative to absolute position minus the actual position calculation -
        // only used for relative positioned helper
        relative: this._getRelativeOffset()
      }); // After we get the helper offset, but before we get the parent offset we can
      // change the helper's position to absolute
      // TODO: Still need to figure out a way to make relative sorting possible

      this.helper.css("position", "absolute");
      this.cssPosition = this.helper.css("position"); //Adjust the mouse offset relative to the helper if "cursorAt" is supplied

      if (o.cursorAt) {
        this._adjustOffsetFromHelper(o.cursorAt);
      } //Cache the former DOM position


      this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }; // If the helper is not the original, hide the original so it's not playing any role during
      // the drag, won't cause anything bad this way

      if (this.helper[0] !== this.currentItem[0]) {
        this.currentItem.hide();
      } //Create the placeholder


      this._createPlaceholder(); //Get the next scrolling parent


      this.scrollParent = this.placeholder.scrollParent();
      $.extend(this.offset, {
        parent: this._getParentOffset()
      }); //Set a containment if given in the options

      if (o.containment) {
        this._setContainment();
      }

      if (o.cursor && o.cursor !== "auto") {
        // cursor option
        body = this.document.find("body"); // Support: IE

        this.storedCursor = body.css("cursor");
        body.css("cursor", o.cursor);
        this.storedStylesheet = $("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(body);
      } // We need to make sure to grab the zIndex before setting the
      // opacity, because setting the opacity to anything lower than 1
      // causes the zIndex to change from "auto" to 0.


      if (o.zIndex) {
        // zIndex option
        if (this.helper.css("zIndex")) {
          this._storedZIndex = this.helper.css("zIndex");
        }

        this.helper.css("zIndex", o.zIndex);
      }

      if (o.opacity) {
        // opacity option
        if (this.helper.css("opacity")) {
          this._storedOpacity = this.helper.css("opacity");
        }

        this.helper.css("opacity", o.opacity);
      } //Prepare scrolling


      if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
        this.overflowOffset = this.scrollParent.offset();
      } //Call callbacks


      this._trigger("start", event, this._uiHash()); //Recache the helper size


      if (!this._preserveHelperProportions) {
        this._cacheHelperProportions();
      } //Post "activate" events to possible containers


      if (!noActivation) {
        for (i = this.containers.length - 1; i >= 0; i--) {
          this.containers[i]._trigger("activate", event, this._uiHash(this));
        }
      } //Prepare possible droppables


      if ($.ui.ddmanager) {
        $.ui.ddmanager.current = this;
      }

      if ($.ui.ddmanager && !o.dropBehaviour) {
        $.ui.ddmanager.prepareOffsets(this, event);
      }

      this.dragging = true;

      this._addClass(this.helper, "ui-sortable-helper"); //Move the helper, if needed


      if (!this.helper.parent().is(this.appendTo)) {
        this.helper.detach().appendTo(this.appendTo); //Update position

        this.offset.parent = this._getParentOffset();
      } //Generate the original position


      this.position = this.originalPosition = this._generatePosition(event);
      this.originalPageX = event.pageX;
      this.originalPageY = event.pageY;
      this.lastPositionAbs = this.positionAbs = this._convertPositionTo("absolute");

      this._mouseDrag(event);

      return true;
    },
    _scroll: function _scroll(event) {
      var o = this.options,
          scrolled = false;

      if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
        if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - event.pageY < o.scrollSensitivity) {
          this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
        } else if (event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
          this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
        }

        if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - event.pageX < o.scrollSensitivity) {
          this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
        } else if (event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
          this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
        }
      } else {
        if (event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
          scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
        } else if (this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) {
          scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
        }

        if (event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
          scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed);
        } else if (this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) {
          scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed);
        }
      }

      return scrolled;
    },
    _mouseDrag: function _mouseDrag(event) {
      var i,
          item,
          itemElement,
          intersection,
          o = this.options; //Compute the helpers position

      this.position = this._generatePosition(event);
      this.positionAbs = this._convertPositionTo("absolute"); //Set the helper position

      if (!this.options.axis || this.options.axis !== "y") {
        this.helper[0].style.left = this.position.left + "px";
      }

      if (!this.options.axis || this.options.axis !== "x") {
        this.helper[0].style.top = this.position.top + "px";
      } //Do scrolling


      if (o.scroll) {
        if (this._scroll(event) !== false) {
          //Update item positions used in position checks
          this._refreshItemPositions(true);

          if ($.ui.ddmanager && !o.dropBehaviour) {
            $.ui.ddmanager.prepareOffsets(this, event);
          }
        }
      }

      this.dragDirection = {
        vertical: this._getDragVerticalDirection(),
        horizontal: this._getDragHorizontalDirection()
      }; //Rearrange

      for (i = this.items.length - 1; i >= 0; i--) {
        //Cache variables and intersection, continue if no intersection
        item = this.items[i];
        itemElement = item.item[0];
        intersection = this._intersectsWithPointer(item);

        if (!intersection) {
          continue;
        } // Only put the placeholder inside the current Container, skip all
        // items from other containers. This works because when moving
        // an item from one container to another the
        // currentContainer is switched before the placeholder is moved.
        //
        // Without this, moving items in "sub-sortables" can cause
        // the placeholder to jitter between the outer and inner container.


        if (item.instance !== this.currentContainer) {
          continue;
        } // Cannot intersect with itself
        // no useless actions that have been done before
        // no action if the item moved is the parent of the item checked


        if (itemElement !== this.currentItem[0] && this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement && !$.contains(this.placeholder[0], itemElement) && (this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)) {
          this.direction = intersection === 1 ? "down" : "up";

          if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
            this._rearrange(event, item);
          } else {
            break;
          }

          this._trigger("change", event, this._uiHash());

          break;
        }
      } //Post events to containers


      this._contactContainers(event); //Interconnect with droppables


      if ($.ui.ddmanager) {
        $.ui.ddmanager.drag(this, event);
      } //Call callbacks


      this._trigger("sort", event, this._uiHash());

      this.lastPositionAbs = this.positionAbs;
      return false;
    },
    _mouseStop: function _mouseStop(event, noPropagation) {
      if (!event) {
        return;
      } //If we are using droppables, inform the manager about the drop


      if ($.ui.ddmanager && !this.options.dropBehaviour) {
        $.ui.ddmanager.drop(this, event);
      }

      if (this.options.revert) {
        var that = this,
            cur = this.placeholder.offset(),
            axis = this.options.axis,
            animation = {};

        if (!axis || axis === "x") {
          animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
        }

        if (!axis || axis === "y") {
          animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
        }

        this.reverting = true;
        $(this.helper).animate(animation, parseInt(this.options.revert, 10) || 500, function () {
          that._clear(event);
        });
      } else {
        this._clear(event, noPropagation);
      }

      return false;
    },
    cancel: function cancel() {
      if (this.dragging) {
        this._mouseUp(new $.Event("mouseup", {
          target: null
        }));

        if (this.options.helper === "original") {
          this.currentItem.css(this._storedCSS);

          this._removeClass(this.currentItem, "ui-sortable-helper");
        } else {
          this.currentItem.show();
        } //Post deactivating events to containers


        for (var i = this.containers.length - 1; i >= 0; i--) {
          this.containers[i]._trigger("deactivate", null, this._uiHash(this));

          if (this.containers[i].containerCache.over) {
            this.containers[i]._trigger("out", null, this._uiHash(this));

            this.containers[i].containerCache.over = 0;
          }
        }
      }

      if (this.placeholder) {
        //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
        // it unbinds ALL events from the original node!
        if (this.placeholder[0].parentNode) {
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
        }

        if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
          this.helper.remove();
        }

        $.extend(this, {
          helper: null,
          dragging: false,
          reverting: false,
          _noFinalSort: null
        });

        if (this.domPosition.prev) {
          $(this.domPosition.prev).after(this.currentItem);
        } else {
          $(this.domPosition.parent).prepend(this.currentItem);
        }
      }

      return this;
    },
    serialize: function serialize(o) {
      var items = this._getItemsAsjQuery(o && o.connected),
          str = [];

      o = o || {};
      $(items).each(function () {
        var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || /(.+)[\-=_](.+)/);

        if (res) {
          str.push((o.key || res[1] + "[]") + "=" + (o.key && o.expression ? res[1] : res[2]));
        }
      });

      if (!str.length && o.key) {
        str.push(o.key + "=");
      }

      return str.join("&");
    },
    toArray: function toArray(o) {
      var items = this._getItemsAsjQuery(o && o.connected),
          ret = [];

      o = o || {};
      items.each(function () {
        ret.push($(o.item || this).attr(o.attribute || "id") || "");
      });
      return ret;
    },

    /* Be careful with the following core functions */
    _intersectsWith: function _intersectsWith(item) {
      var x1 = this.positionAbs.left,
          x2 = x1 + this.helperProportions.width,
          y1 = this.positionAbs.top,
          y2 = y1 + this.helperProportions.height,
          l = item.left,
          r = l + item.width,
          t = item.top,
          b = t + item.height,
          dyClick = this.offset.click.top,
          dxClick = this.offset.click.left,
          isOverElementHeight = this.options.axis === "x" || y1 + dyClick > t && y1 + dyClick < b,
          isOverElementWidth = this.options.axis === "y" || x1 + dxClick > l && x1 + dxClick < r,
          isOverElement = isOverElementHeight && isOverElementWidth;

      if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"]) {
        return isOverElement;
      } else {
        return l < x1 + this.helperProportions.width / 2 && // Right Half
        x2 - this.helperProportions.width / 2 < r && // Left Half
        t < y1 + this.helperProportions.height / 2 && // Bottom Half
        y2 - this.helperProportions.height / 2 < b; // Top Half
      }
    },
    _intersectsWithPointer: function _intersectsWithPointer(item) {
      var verticalDirection,
          horizontalDirection,
          isOverElementHeight = this.options.axis === "x" || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
          isOverElementWidth = this.options.axis === "y" || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
          isOverElement = isOverElementHeight && isOverElementWidth;

      if (!isOverElement) {
        return false;
      }

      verticalDirection = this.dragDirection.vertical;
      horizontalDirection = this.dragDirection.horizontal;
      return this.floating ? horizontalDirection === "right" || verticalDirection === "down" ? 2 : 1 : verticalDirection && (verticalDirection === "down" ? 2 : 1);
    },
    _intersectsWithSides: function _intersectsWithSides(item) {
      var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + item.height / 2, item.height),
          isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + item.width / 2, item.width),
          verticalDirection = this.dragDirection.vertical,
          horizontalDirection = this.dragDirection.horizontal;

      if (this.floating && horizontalDirection) {
        return horizontalDirection === "right" && isOverRightHalf || horizontalDirection === "left" && !isOverRightHalf;
      } else {
        return verticalDirection && (verticalDirection === "down" && isOverBottomHalf || verticalDirection === "up" && !isOverBottomHalf);
      }
    },
    _getDragVerticalDirection: function _getDragVerticalDirection() {
      var delta = this.positionAbs.top - this.lastPositionAbs.top;
      return delta !== 0 && (delta > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function _getDragHorizontalDirection() {
      var delta = this.positionAbs.left - this.lastPositionAbs.left;
      return delta !== 0 && (delta > 0 ? "right" : "left");
    },
    refresh: function refresh(event) {
      this._refreshItems(event);

      this._setHandleClassName();

      this.refreshPositions();
      return this;
    },
    _connectWith: function _connectWith() {
      var options = this.options;
      return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
    },
    _getItemsAsjQuery: function _getItemsAsjQuery(connected) {
      var i,
          j,
          cur,
          inst,
          items = [],
          queries = [],
          connectWith = this._connectWith();

      if (connectWith && connected) {
        for (i = connectWith.length - 1; i >= 0; i--) {
          cur = $(connectWith[i], this.document[0]);

          for (j = cur.length - 1; j >= 0; j--) {
            inst = $.data(cur[j], this.widgetFullName);

            if (inst && inst !== this && !inst.options.disabled) {
              queries.push([typeof inst.options.items === "function" ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
            }
          }
        }
      }

      queries.push([typeof this.options.items === "function" ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

      function addItems() {
        items.push(this);
      }

      for (i = queries.length - 1; i >= 0; i--) {
        queries[i][0].each(addItems);
      }

      return $(items);
    },
    _removeCurrentsFromItems: function _removeCurrentsFromItems() {
      var list = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = $.grep(this.items, function (item) {
        for (var j = 0; j < list.length; j++) {
          if (list[j] === item.item[0]) {
            return false;
          }
        }

        return true;
      });
    },
    _refreshItems: function _refreshItems(event) {
      this.items = [];
      this.containers = [this];

      var i,
          j,
          cur,
          inst,
          targetData,
          _queries,
          item,
          queriesLength,
          items = this.items,
          queries = [[typeof this.options.items === "function" ? this.options.items.call(this.element[0], event, {
        item: this.currentItem
      }) : $(this.options.items, this.element), this]],
          connectWith = this._connectWith(); //Shouldn't be run the first time through due to massive slow-down


      if (connectWith && this.ready) {
        for (i = connectWith.length - 1; i >= 0; i--) {
          cur = $(connectWith[i], this.document[0]);

          for (j = cur.length - 1; j >= 0; j--) {
            inst = $.data(cur[j], this.widgetFullName);

            if (inst && inst !== this && !inst.options.disabled) {
              queries.push([typeof inst.options.items === "function" ? inst.options.items.call(inst.element[0], event, {
                item: this.currentItem
              }) : $(inst.options.items, inst.element), inst]);
              this.containers.push(inst);
            }
          }
        }
      }

      for (i = queries.length - 1; i >= 0; i--) {
        targetData = queries[i][1];
        _queries = queries[i][0];

        for (j = 0, queriesLength = _queries.length; j < queriesLength; j++) {
          item = $(_queries[j]); // Data for target checking (mouse manager)

          item.data(this.widgetName + "-item", targetData);
          items.push({
            item: item,
            instance: targetData,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          });
        }
      }
    },
    _refreshItemPositions: function _refreshItemPositions(fast) {
      var i, item, t, p;

      for (i = this.items.length - 1; i >= 0; i--) {
        item = this.items[i]; //We ignore calculating positions of all connected containers when we're not over them

        if (this.currentContainer && item.instance !== this.currentContainer && item.item[0] !== this.currentItem[0]) {
          continue;
        }

        t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

        if (!fast) {
          item.width = t.outerWidth();
          item.height = t.outerHeight();
        }

        p = t.offset();
        item.left = p.left;
        item.top = p.top;
      }
    },
    refreshPositions: function refreshPositions(fast) {
      // Determine whether items are being displayed horizontally
      this.floating = this.items.length ? this.options.axis === "x" || this._isFloating(this.items[0].item) : false; // This has to be redone because due to the item being moved out/into the offsetParent,
      // the offsetParent's position will change

      if (this.offsetParent && this.helper) {
        this.offset.parent = this._getParentOffset();
      }

      this._refreshItemPositions(fast);

      var i, p;

      if (this.options.custom && this.options.custom.refreshContainers) {
        this.options.custom.refreshContainers.call(this);
      } else {
        for (i = this.containers.length - 1; i >= 0; i--) {
          p = this.containers[i].element.offset();
          this.containers[i].containerCache.left = p.left;
          this.containers[i].containerCache.top = p.top;
          this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
          this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
        }
      }

      return this;
    },
    _createPlaceholder: function _createPlaceholder(that) {
      that = that || this;
      var className,
          nodeName,
          o = that.options;

      if (!o.placeholder || o.placeholder.constructor === String) {
        className = o.placeholder;
        nodeName = that.currentItem[0].nodeName.toLowerCase();
        o.placeholder = {
          element: function element() {
            var element = $("<" + nodeName + ">", that.document[0]);

            that._addClass(element, "ui-sortable-placeholder", className || that.currentItem[0].className)._removeClass(element, "ui-sortable-helper");

            if (nodeName === "tbody") {
              that._createTrPlaceholder(that.currentItem.find("tr").eq(0), $("<tr>", that.document[0]).appendTo(element));
            } else if (nodeName === "tr") {
              that._createTrPlaceholder(that.currentItem, element);
            } else if (nodeName === "img") {
              element.attr("src", that.currentItem.attr("src"));
            }

            if (!className) {
              element.css("visibility", "hidden");
            }

            return element;
          },
          update: function update(container, p) {
            // 1. If a className is set as 'placeholder option, we don't force sizes -
            // the class is responsible for that
            // 2. The option 'forcePlaceholderSize can be enabled to force it even if a
            // class name is specified
            if (className && !o.forcePlaceholderSize) {
              return;
            } // If the element doesn't have a actual height or width by itself (without
            // styles coming from a stylesheet), it receives the inline height and width
            // from the dragged item. Or, if it's a tbody or tr, it's going to have a height
            // anyway since we're populating them with <td>s above, but they're unlikely to
            // be the correct height on their own if the row heights are dynamic, so we'll
            // always assign the height of the dragged item given forcePlaceholderSize
            // is true.


            if (!p.height() || o.forcePlaceholderSize && (nodeName === "tbody" || nodeName === "tr")) {
              p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop") || 0, 10) - parseInt(that.currentItem.css("paddingBottom") || 0, 10));
            }

            if (!p.width()) {
              p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft") || 0, 10) - parseInt(that.currentItem.css("paddingRight") || 0, 10));
            }
          }
        };
      } //Create the placeholder


      that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem)); //Append it after the actual current item

      that.currentItem.after(that.placeholder); //Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)

      o.placeholder.update(that, that.placeholder);
    },
    _createTrPlaceholder: function _createTrPlaceholder(sourceTr, targetTr) {
      var that = this;
      sourceTr.children().each(function () {
        $("<td>&#160;</td>", that.document[0]).attr("colspan", $(this).attr("colspan") || 1).appendTo(targetTr);
      });
    },
    _contactContainers: function _contactContainers(event) {
      var i,
          j,
          dist,
          itemWithLeastDistance,
          posProperty,
          sizeProperty,
          cur,
          nearBottom,
          floating,
          axis,
          innermostContainer = null,
          innermostIndex = null; // Get innermost container that intersects with item

      for (i = this.containers.length - 1; i >= 0; i--) {
        // Never consider a container that's located within the item itself
        if ($.contains(this.currentItem[0], this.containers[i].element[0])) {
          continue;
        }

        if (this._intersectsWith(this.containers[i].containerCache)) {
          // If we've already found a container and it's more "inner" than this, then continue
          if (innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
            continue;
          }

          innermostContainer = this.containers[i];
          innermostIndex = i;
        } else {
          // container doesn't intersect. trigger "out" event if necessary
          if (this.containers[i].containerCache.over) {
            this.containers[i]._trigger("out", event, this._uiHash(this));

            this.containers[i].containerCache.over = 0;
          }
        }
      } // If no intersecting containers found, return


      if (!innermostContainer) {
        return;
      } // Move the item into the container if it's not there already


      if (this.containers.length === 1) {
        if (!this.containers[innermostIndex].containerCache.over) {
          this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));

          this.containers[innermostIndex].containerCache.over = 1;
        }
      } else {
        // When entering a new container, we will find the item with the least distance and
        // append our item near it
        dist = 10000;
        itemWithLeastDistance = null;
        floating = innermostContainer.floating || this._isFloating(this.currentItem);
        posProperty = floating ? "left" : "top";
        sizeProperty = floating ? "width" : "height";
        axis = floating ? "pageX" : "pageY";

        for (j = this.items.length - 1; j >= 0; j--) {
          if (!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
            continue;
          }

          if (this.items[j].item[0] === this.currentItem[0]) {
            continue;
          }

          cur = this.items[j].item.offset()[posProperty];
          nearBottom = false;

          if (event[axis] - cur > this.items[j][sizeProperty] / 2) {
            nearBottom = true;
          }

          if (Math.abs(event[axis] - cur) < dist) {
            dist = Math.abs(event[axis] - cur);
            itemWithLeastDistance = this.items[j];
            this.direction = nearBottom ? "up" : "down";
          }
        } //Check if dropOnEmpty is enabled


        if (!itemWithLeastDistance && !this.options.dropOnEmpty) {
          return;
        }

        if (this.currentContainer === this.containers[innermostIndex]) {
          if (!this.currentContainer.containerCache.over) {
            this.containers[innermostIndex]._trigger("over", event, this._uiHash());

            this.currentContainer.containerCache.over = 1;
          }

          return;
        }

        if (itemWithLeastDistance) {
          this._rearrange(event, itemWithLeastDistance, null, true);
        } else {
          this._rearrange(event, null, this.containers[innermostIndex].element, true);
        }

        this._trigger("change", event, this._uiHash());

        this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));

        this.currentContainer = this.containers[innermostIndex]; //Update the placeholder

        this.options.placeholder.update(this.currentContainer, this.placeholder); //Update scrollParent

        this.scrollParent = this.placeholder.scrollParent(); //Update overflowOffset

        if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
          this.overflowOffset = this.scrollParent.offset();
        }

        this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));

        this.containers[innermostIndex].containerCache.over = 1;
      }
    },
    _createHelper: function _createHelper(event) {
      var o = this.options,
          helper = typeof o.helper === "function" ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : o.helper === "clone" ? this.currentItem.clone() : this.currentItem; //Add the helper to the DOM if that didn't happen already

      if (!helper.parents("body").length) {
        this.appendTo[0].appendChild(helper[0]);
      }

      if (helper[0] === this.currentItem[0]) {
        this._storedCSS = {
          width: this.currentItem[0].style.width,
          height: this.currentItem[0].style.height,
          position: this.currentItem.css("position"),
          top: this.currentItem.css("top"),
          left: this.currentItem.css("left")
        };
      }

      if (!helper[0].style.width || o.forceHelperSize) {
        helper.width(this.currentItem.width());
      }

      if (!helper[0].style.height || o.forceHelperSize) {
        helper.height(this.currentItem.height());
      }

      return helper;
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(obj) {
      if (typeof obj === "string") {
        obj = obj.split(" ");
      }

      if (Array.isArray(obj)) {
        obj = {
          left: +obj[0],
          top: +obj[1] || 0
        };
      }

      if ("left" in obj) {
        this.offset.click.left = obj.left + this.margins.left;
      }

      if ("right" in obj) {
        this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
      }

      if ("top" in obj) {
        this.offset.click.top = obj.top + this.margins.top;
      }

      if ("bottom" in obj) {
        this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
      }
    },
    _getParentOffset: function _getParentOffset() {
      //Get the offsetParent and cache its position
      this.offsetParent = this.helper.offsetParent();
      var po = this.offsetParent.offset(); // This is a special case where we need to modify a offset calculated on start, since the
      // following happened:
      // 1. The position of the helper is absolute, so it's position is calculated based on the
      // next positioned parent
      // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
      // the document, which means that the scroll is included in the initial calculation of the
      // offset of the parent, and never recalculated upon drag

      if (this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) {
        po.left += this.scrollParent.scrollLeft();
        po.top += this.scrollParent.scrollTop();
      } // This needs to be actually done for all browsers, since pageX/pageY includes this
      // information with an ugly IE fix


      if (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie) {
        po = {
          top: 0,
          left: 0
        };
      }

      return {
        top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if (this.cssPosition === "relative") {
        var p = this.currentItem.position();
        return {
          top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      } else {
        return {
          top: 0,
          left: 0
        };
      }
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var ce,
          co,
          over,
          o = this.options;

      if (o.containment === "parent") {
        o.containment = this.helper[0].parentNode;
      }

      if (o.containment === "document" || o.containment === "window") {
        this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, o.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, (o.containment === "document" ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
      }

      if (!/^(document|window|parent)$/.test(o.containment)) {
        ce = $(o.containment)[0];
        co = $(o.containment).offset();
        over = $(ce).css("overflow") !== "hidden";
        this.containment = [co.left + (parseInt($(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($(ce).css("paddingLeft"), 10) || 0) - this.margins.left, co.top + (parseInt($(ce).css("borderTopWidth"), 10) || 0) + (parseInt($(ce).css("paddingTop"), 10) || 0) - this.margins.top, co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"), 10) || 0) - (parseInt($(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top];
      }
    },
    _convertPositionTo: function _convertPositionTo(d, pos) {
      if (!pos) {
        pos = this.position;
      }

      var mod = d === "absolute" ? 1 : -1,
          scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
          scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
      return {
        top: // The absolute mouse position
        pos.top + // Only for relative positioned nodes: Relative offset from element to offset parent
        this.offset.relative.top * mod + // The offsetParent's offset without borders (offset + border)
        this.offset.parent.top * mod - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()) * mod,
        left: // The absolute mouse position
        pos.left + // Only for relative positioned nodes: Relative offset from element to offset parent
        this.offset.relative.left * mod + // The offsetParent's offset without borders (offset + border)
        this.offset.parent.left * mod - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()) * mod
      };
    },
    _generatePosition: function _generatePosition(event) {
      var top,
          left,
          o = this.options,
          pageX = event.pageX,
          pageY = event.pageY,
          scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
          scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName); // This is another very weird special case that only happens for relative elements:
      // 1. If the css position is relative
      // 2. and the scroll parent is the document or similar to the offset parent
      // we have to refresh the relative offset during the scroll so there are no jumps

      if (this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
        this.offset.relative = this._getRelativeOffset();
      }
      /*
       * - Position constraining -
       * Constrain the position to a mix of grid, containment.
       */


      if (this.originalPosition) {
        //If we are not dragging yet, we won't check for options
        if (this.containment) {
          if (event.pageX - this.offset.click.left < this.containment[0]) {
            pageX = this.containment[0] + this.offset.click.left;
          }

          if (event.pageY - this.offset.click.top < this.containment[1]) {
            pageY = this.containment[1] + this.offset.click.top;
          }

          if (event.pageX - this.offset.click.left > this.containment[2]) {
            pageX = this.containment[2] + this.offset.click.left;
          }

          if (event.pageY - this.offset.click.top > this.containment[3]) {
            pageY = this.containment[3] + this.offset.click.top;
          }
        }

        if (o.grid) {
          top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
          pageY = this.containment ? top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3] ? top : top - this.offset.click.top >= this.containment[1] ? top - o.grid[1] : top + o.grid[1] : top;
          left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
          pageX = this.containment ? left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2] ? left : left - this.offset.click.left >= this.containment[0] ? left - o.grid[0] : left + o.grid[0] : left;
        }
      }

      return {
        top: // The absolute mouse position
        pageY - // Click offset (relative to the element)
        this.offset.click.top - // Only for relative positioned nodes: Relative offset from element to offset parent
        this.offset.relative.top - // The offsetParent's offset without borders (offset + border)
        this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()),
        left: // The absolute mouse position
        pageX - // Click offset (relative to the element)
        this.offset.click.left - // Only for relative positioned nodes: Relative offset from element to offset parent
        this.offset.relative.left - // The offsetParent's offset without borders (offset + border)
        this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft())
      };
    },
    _rearrange: function _rearrange(event, i, a, hardRefresh) {
      if (a) {
        a[0].appendChild(this.placeholder[0]);
      } else {
        i.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? i.item[0] : i.item[0].nextSibling);
      } //Various things done here to improve the performance:
      // 1. we create a setTimeout, that calls refreshPositions
      // 2. on the instance, we have a counter variable, that get's higher after every append
      // 3. on the local scope, we copy the counter variable, and check in the timeout,
      // if it's still the same
      // 4. this lets only the last addition to the timeout stack through


      this.counter = this.counter ? ++this.counter : 1;
      var counter = this.counter;

      this._delay(function () {
        if (counter === this.counter) {
          //Precompute after each DOM insertion, NOT on mousemove
          this.refreshPositions(!hardRefresh);
        }
      });
    },
    _clear: function _clear(event, noPropagation) {
      this.reverting = false; // We delay all events that have to be triggered to after the point where the placeholder
      // has been removed and everything else normalized again

      var i,
          delayedTriggers = []; // We first have to update the dom position of the actual currentItem
      // Note: don't do it if the current item is already removed (by a user), or it gets
      // reappended (see #4088)

      if (!this._noFinalSort && this.currentItem.parent().length) {
        this.placeholder.before(this.currentItem);
      }

      this._noFinalSort = null;

      if (this.helper[0] === this.currentItem[0]) {
        for (i in this._storedCSS) {
          if (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
            this._storedCSS[i] = "";
          }
        }

        this.currentItem.css(this._storedCSS);

        this._removeClass(this.currentItem, "ui-sortable-helper");
      } else {
        this.currentItem.show();
      }

      if (this.fromOutside && !noPropagation) {
        delayedTriggers.push(function (event) {
          this._trigger("receive", event, this._uiHash(this.fromOutside));
        });
      }

      if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
        // Trigger update callback if the DOM position has changed
        delayedTriggers.push(function (event) {
          this._trigger("update", event, this._uiHash());
        });
      } // Check if the items Container has Changed and trigger appropriate
      // events.


      if (this !== this.currentContainer) {
        if (!noPropagation) {
          delayedTriggers.push(function (event) {
            this._trigger("remove", event, this._uiHash());
          });
          delayedTriggers.push(function (c) {
            return function (event) {
              c._trigger("receive", event, this._uiHash(this));
            };
          }.call(this, this.currentContainer));
          delayedTriggers.push(function (c) {
            return function (event) {
              c._trigger("update", event, this._uiHash(this));
            };
          }.call(this, this.currentContainer));
        }
      } //Post events to containers


      function delayEvent(type, instance, container) {
        return function (event) {
          container._trigger(type, event, instance._uiHash(instance));
        };
      }

      for (i = this.containers.length - 1; i >= 0; i--) {
        if (!noPropagation) {
          delayedTriggers.push(delayEvent("deactivate", this, this.containers[i]));
        }

        if (this.containers[i].containerCache.over) {
          delayedTriggers.push(delayEvent("out", this, this.containers[i]));
          this.containers[i].containerCache.over = 0;
        }
      } //Do what was originally in plugins


      if (this.storedCursor) {
        this.document.find("body").css("cursor", this.storedCursor);
        this.storedStylesheet.remove();
      }

      if (this._storedOpacity) {
        this.helper.css("opacity", this._storedOpacity);
      }

      if (this._storedZIndex) {
        this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
      }

      this.dragging = false;

      if (!noPropagation) {
        this._trigger("beforeStop", event, this._uiHash());
      } //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
      // it unbinds ALL events from the original node!


      this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

      if (!this.cancelHelperRemoval) {
        if (this.helper[0] !== this.currentItem[0]) {
          this.helper.remove();
        }

        this.helper = null;
      }

      if (!noPropagation) {
        for (i = 0; i < delayedTriggers.length; i++) {
          // Trigger all delayed events
          delayedTriggers[i].call(this, event);
        }

        this._trigger("stop", event, this._uiHash());
      }

      this.fromOutside = false;
      return !this.cancelHelperRemoval;
    },
    _trigger: function _trigger() {
      if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
        this.cancel();
      }
    },
    _uiHash: function _uiHash(_inst) {
      var inst = _inst || this;
      return {
        helper: inst.helper,
        placeholder: inst.placeholder || $([]),
        position: inst.position,
        originalPosition: inst.originalPosition,
        offset: inst.positionAbs,
        item: inst.currentItem,
        sender: _inst ? _inst.element : null
      };
    }
  });
});

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
(function (global, factory) {
  "use strict";

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var flat = arr.flat ? function (array) {
    return arr.flat.call(array);
  } : function (array) {
    return arr.concat.apply([], array);
  };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
    // Plus for old WebKit, typeof returns "function" for HTML collections
    // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
    return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var document = window.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.6.0",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return (i + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return i % 2;
      }));
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function globalEval(code, options, doc) {
      DOMEval(code, {
        nonce: options && options.nonce
      }, doc);
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return flat(ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.6
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2021-02-16
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        pushNative = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
    // or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
        funescape = function funescape(escape, nonHex) {
      var high = "0x" + escape.slice(1) - 0x10000;
      return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
      nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
      // Support: IE <=11+
      // For values outside the Basic Multilingual Plane (BMP), manually construct a
      // surrogate pair
      high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply
      // eslint-disable-next-line no-unused-expressions

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          pushNative.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        setDocument(context);
        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // The technique has to be used as well when a leading combinator is used
            // as such selectors are not recognized by querySelectorAll.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
              // Expand context for sibling selectors
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context; // We can use :scope instead of the ID hack if the browser
              // supports it & if we're not changing the context.

              if (newContext !== context || !support.scope) {
                // Capture the context ID, setting it first if necessary
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rcssescape, fcssescape);
                } else {
                  context.setAttribute("id", nid = expando);
                }
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(",");
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem && elem.namespaceURI,
          docElem = elem && (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9 - 11+, Edge 12 - 18+
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      } // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
      // Safari 4 - 5 only, Opera <=11.6 - 12.x only
      // IE/Edge & older browsers don't support the :scope pseudo-class.
      // Support: Safari 6.0 only
      // Safari 6.0 supports :scope but it's an alias of :root there.


      support.scope = assert(function (el) {
        docElem.appendChild(el).appendChild(document.createElement("div"));
        return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
      });
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)

      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          var input; // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359

          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Support: IE 11+, Edge 15 - 18+
          // IE 11/Edge don't find elements on a `[name='']` query in some cases.
          // Adding a temporary attribute to the document before the selection works
          // around the issue.
          // Interestingly, IE 10 & older don't seem to have the issue.


          input = document.createElement("input");
          input.setAttribute("name", "");
          el.appendChild(input);

          if (!el.querySelectorAll("[name='']").length) {
            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          } // Support: Firefox <=3.6 - 5 only
          // Old Firefox doesn't throw on a badly-escaped identifier.


          el.querySelectorAll("\\\f");
          rbuggyQSA.push("[\\r\\n\\f]");
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: Opera 10 - 11 only
          // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq


        compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
            return -1;
          } // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq


          if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.

          /* eslint-disable eqeqeq */
          return a == document ? -1 : b == document ? 1 :
          /* eslint-enable eqeqeq */
          aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.

        /* eslint-disable eqeqeq */
        ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 :
        /* eslint-enable eqeqeq */
        0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      setDocument(elem);

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((context.ownerDocument || context) != document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((elem.ownerDocument || elem) != document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            /* eslint-disable max-len */

            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
            /* eslint-enable max-len */
          };
        },
        "CHILD": function CHILD(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, _context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, _context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            // eslint-disable-next-line no-unused-expressions
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (_matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          outermostContext = context == document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0; // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq

            if (!context && elem.ownerDocument != document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, _name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (elem.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem.contentDocument)) {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (_i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the primary Deferred
      primary = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            primary.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return primary.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), primary.reject);
      }

      return primary.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    ["catch"](function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, _key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.

    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  })(); // We have to close these tags to support XHTML (#13200)


  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td; // Support: IE <=9 only

  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  }

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Only attach events to objects that accept data

      if (!acceptData(elem)) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(nativeEvent),
          handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = _slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault(); // Support: Chrome 86+
              // In Chrome, if an element having a focusout handler is blurred by
              // clicking outside of it, it invokes the handler synchronously. If
              // that handler calls `.remove()` on the element, the data is cleared,
              // leaving `result` undefined. We need to guard against this.

              return result && result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: true
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      // Suppress native focus or blur as it's already being fired
      // in leverageNative.
      _default: function _default() {
        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;

      if (events) {
        dataPriv.remove(dest, "handle events");

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  }, doc);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html;
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var swap = function swap(elem, options, callback) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.call(elem); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableTrDimensionsVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      },
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      //
      // Support: Firefox 70+
      // Only Firefox includes border widths
      // in computed dimensions. (gh-4529)
      reliableTrDimensions: function reliableTrDimensions() {
        var table, tr, trChild, trStyle;

        if (reliableTrDimensionsVal == null) {
          table = document.createElement("table");
          tr = document.createElement("tr");
          trChild = document.createElement("div");
          table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
          tr.style.cssText = "border:1px solid"; // Support: Chrome 86+
          // Height set through cssText does not get applied.
          // Computed height then comes back as 0.

          tr.style.height = "1px";
          trChild.style.height = "9px"; // Support: Android 8 Chrome 86+
          // In our bodyBackground.html iframe,
          // display for all div elements is set to "inline",
          // which causes a problem only in Android 8 Chrome 86.
          // Ensuring the div is display: block
          // gets around this issue.

          trChild.style.display = "block";
          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
          trStyle = window.getComputedStyle(tr);
          reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
          documentElement.removeChild(table);
        }

        return reliableTrDimensionsVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var _final = jQuery.cssProps[name] || vendorProps[name];

    if (_final) {
      return _final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.


    if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    val === "auto" || // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
    elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),




