module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\joemu\\Desktop\\Coding\\Astrology_Website\\Version_1_NextJS\\Astrology_Main\\astro_v1\\components\\Footer.js";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Footer Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Footer About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\joemu\\Desktop\\Coding\\Astrology_Website\\Version_1_NextJS\\Astrology_Main\\astro_v1\\components\\Header.js";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Header Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Header About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./layouts/main.js":
/*!*************************!*\
  !*** ./layouts/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\joemu\\Desktop\\Coding\\Astrology_Website\\Version_1_NextJS\\Astrology_Main\\astro_v1\\layouts\\main.js";





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2452986209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-2452986209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-2452986209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
    integrity: "sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS",
    crossorigin: "anonymous",
    className: "jsx-2452986209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",
    integrity: "sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k",
    crossorigin: "anonymous",
    className: "jsx-2452986209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2452986209",
    css: "{/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9lbXVcXERlc2t0b3BcXENvZGluZ1xcQXN0cm9sb2d5X1dlYnNpdGVcXFZlcnNpb25fMV9OZXh0SlNcXEFzdHJvbG9neV9NYWluXFxhc3Ryb192MVxcbGF5b3V0c1xcbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjdUIsQUFhMEIsQUFZUixBQVFLLEFBU0EsQUFhUyxBQVdVLEFBWUosQUFTVixBQVdBLEFBV2MsQUFTbkIsQUFVQSxBQU9DLEFBSUosQUFXTyxBQWdCRSxBQWFILEFBVUcsQUFXTSxBQVdSLEFBWVksQUFRQSxBQVdSLEFBYUUsQUFRVixBQVVRLEFBVVYsQUFTaUIsQUFTTCxBQVNFLEFBWVosQUFRSSxBQVdMLEFBUUEsU0FuVWYsRUFrSEEsQ0FnSkEsQ0EwREEsQUFRQSxDQTVUQSxBQVNrQixBQTRFbEIsQUFVZ0IsQUF1SWhCLEFBMkRBLENBM0xBLEVBMUhnQyxBQXNLaEMsQ0E3QkEsQUE2RFksQUF1SFosQ0FuUDRCLEFBVzVCLENBb0VpQixBQXVCakIsRUFxRGdCLEFBK0JKLENBMU5ELENBd01YLEFBOENBLEVBckdBLEFBOEdlLEVBckxLLEFBbUZwQixDQXRJQSxBQXNOc0IsQ0F6UHRCLEFBb0xBLEFBUUEsRUEvS21CLEFBVUgsQUEyQ0EsQUFxS2hCLEdBM0dtQixDQTRFSCxHQW9FaEIsT0FwUEEsQUEyQ0EsQUFvQjBCLENBcEgxQixFQTJDQSxBQTRPQSxDQWpEaUIsRUE1RU4sU0FDWCxJQTRFWSxLQWxIWixLQW1IcUIsQ0F3R3ZCLEdBdFFxQyxlQStKbkMsMkRBOUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcam9lbXVcXERlc2t0b3BcXENvZGluZ1xcQXN0cm9sb2d5X1dlYnNpdGVcXFZlcnNpb25fMV9OZXh0SlNcXEFzdHJvbG9neV9NYWluXFxhc3Ryb192MVxcbGF5b3V0c1xcbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoe2NoaWxkcmVufSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjIuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtR0p6WnFGR3diMVFUVE42d3k1OWZmRjFCdUdKcExTYTlEa0tNcDBEZ2lNRG00aVlNajcwZ1pXS1liSTcwNnRXU1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjIuMS9qcy9ib290c3RyYXAubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUIwVWdseVIrak42Q2t2dklDT0Iyam9hZjVJNGwzZ205R1U2SGMxb2c2THM3aTZVL21ra2FkdUthQmhsQVh2OWtcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIC8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cclxuXHJcbiAgICAgIC8qIERvY3VtZW50XHJcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gICAgICAgKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBodG1sIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKiBTZWN0aW9uc1xyXG4gICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBSZW5kZXIgdGhlIG1haW4gZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBoMSBlbGVtZW50cyB3aXRoaW4gc2VjdGlvbiBhbmRcclxuICAgICAgICogYXJ0aWNsZSBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIG1hcmdpbjogMC42N2VtIDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIEdyb3VwaW5nIGNvbnRlbnRcclxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxyXG4gICAgICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBociB7XHJcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cclxuICAgICAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICAgICAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGVtIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBwcmUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXHJcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cclxuICAgICAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBhYmJyW3RpdGxlXSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIGIsXHJcbiAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICAgICAqIDIuIENvcnJlY3QgdGhlIG9kZCBlbSBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgY29kZSxcclxuICAgICAga2JkLFxyXG4gICAgICBzYW1wIHtcclxuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cclxuICAgICAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgc21hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogUHJldmVudCBzdWIgYW5kIHN1cCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cclxuICAgICAgICogYWxsIGJyb3dzZXJzLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIHN1YixcclxuICAgICAgc3VwIHtcclxuICAgICAgICBmb250LXNpemU6IDc1JTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzdWIge1xyXG4gICAgICAgIGJvdHRvbTogLTAuMjVlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgc3VwIHtcclxuICAgICAgICB0b3A6IC0wLjVlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogRW1iZWRkZWQgY29udGVudFxyXG4gICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgaW1nIHtcclxuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIEZvcm1zXHJcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICAgICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBidXR0b24sXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICBvcHRncm91cCxcclxuICAgICAgc2VsZWN0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cclxuICAgICAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xyXG4gICAgICAgIG1hcmdpbjogMDsgLyogMiAqL1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXHJcbiAgICAgICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uLFxyXG4gICAgICBpbnB1dCB7IC8qIDEgKi9cclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxyXG4gICAgICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uLFxyXG4gICAgICBzZWxlY3QgeyAvKiAxICovXHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbixcclxuICAgICAgW3R5cGU9XCJidXR0b25cIl0sXHJcbiAgICAgIFt0eXBlPVwicmVzZXRcIl0sXHJcbiAgICAgIFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG4gICAgICBbdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcclxuICAgICAgW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcclxuICAgICAgW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcclxuICAgICAgW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXHJcbiAgICAgIFt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXHJcbiAgICAgIFt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcclxuICAgICAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgZmllbGRzZXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXHJcbiAgICAgICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gZmllbGRzZXQgZWxlbWVudHMgaW4gSUUuXHJcbiAgICAgICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcclxuICAgICAgICogICAgZmllbGRzZXQgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIGxlZ2VuZCB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cclxuICAgICAgICBwYWRkaW5nOiAwOyAvKiAzICovXHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBwcm9ncmVzcyB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXHJcbiAgICAgICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4gICAgICBbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXHJcbiAgICAgICAgcGFkZGluZzogMDsgLyogMiAqL1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gICAgICBbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXHJcbiAgICAgICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xyXG4gICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAgICAgICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gaW5oZXJpdCBpbiBTYWZhcmkuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cclxuICAgICAgICBmb250OiBpbmhlcml0OyAvKiAyICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIEludGVyYWN0aXZlXHJcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgIFxyXG4gICAgICAvKlxyXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIGRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKlxyXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgc3VtbWFyeSB7XHJcbiAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKiBNaXNjXHJcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIHRlbXBsYXRlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgW2hpZGRlbl0ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPEZvb3RlciAvPlxyXG5cclxuICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjMuMS5zbGltLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1xOGkvWCs5NjVEek8wclQ3YWJLNDFKU3RRSUFxVmdSVnpwYnpvNXNtWEtwNFlmUnZIKzhhYnRURTFQaTZqaXpvXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE0LjYvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtd0hBaUZmUmxNRnk2aTVTUmF4dmZPQ2lmQlVReTF4SGRKL3lvaTdGUk5YTVJCdTVXSGRaWXUxaEE2Wk9ibGd1dFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+ICAgIFxyXG4gICAgXHJcbiAgPC9kaXY+XHJcbikiXX0= */\n/*@ sourceURL=C:\\Users\\joemu\\Desktop\\Coding\\Astrology_Website\\Version_1_NextJS\\Astrology_Main\\astro_v1\\layouts\\main.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
    crossorigin: "anonymous",
    className: "jsx-2452986209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js",
    integrity: "sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut",
    crossorigin: "anonymous",
    className: "jsx-2452986209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }));
});

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
var _jsxFileName = "C:\\Users\\joemu\\Desktop\\Coding\\Astrology_Website\\Version_1_NextJS\\Astrology_Main\\astro_v1\\pages\\about.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "About page with global sytle!"));
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map