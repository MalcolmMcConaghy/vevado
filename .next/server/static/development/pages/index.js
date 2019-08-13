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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/card/card.js":
/*!*********************************!*\
  !*** ./components/card/card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.scss */ "./components/card/card.scss");
/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_scss__WEBPACK_IMPORTED_MODULE_2__);




function Card({
  title,
  image
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    style: {
      backgroundImage: `linear-gradient(to top, #000 1%, transparent), url(${image})`
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__title"
  }, title));
}

Card.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/card/card.scss":
/*!***********************************!*\
  !*** ./components/card/card.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/destination_list/destination_list.js":
/*!*********************************************************!*\
  !*** ./components/destination_list/destination_list.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card */ "./components/card/card.js");
/* harmony import */ var _destination_list_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destination_list.scss */ "./components/destination_list/destination_list.scss");
/* harmony import */ var _destination_list_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_destination_list_scss__WEBPACK_IMPORTED_MODULE_2__);




function DestinationList({
  header
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "destination-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, header), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "destination-list__destinations"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "COLOSSEUM",
    image: "../../static/colosseum.jpg"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (DestinationList);

/***/ }),

/***/ "./components/destination_list/destination_list.scss":
/*!***********************************************************!*\
  !*** ./components/destination_list/destination_list.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./components/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);



function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "148",
    height: "34",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    fill: "#FE4A49",
    fillRule: "evenodd",
    fontFamily: "Soopafresh",
    fontSize: "40"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
    x: "-2.52",
    y: "32"
  }, "Vevado")))));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/header/header.scss":
/*!***************************************!*\
  !*** ./components/header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/hero/hero.js":
/*!*********************************!*\
  !*** ./components/hero/hero.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/search */ "./components/search/search.js");
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero.scss */ "./components/hero/hero.scss");
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hero_scss__WEBPACK_IMPORTED_MODULE_2__);




function Hero() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search_search__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/hero/hero.scss":
/*!***********************************!*\
  !*** ./components/hero/hero.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/search/search.js":
/*!*************************************!*\
  !*** ./components/search/search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.scss */ "./components/search/search.scss");
/* harmony import */ var _search_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_scss__WEBPACK_IMPORTED_MODULE_1__);



function Search() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "search"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search__input-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "search__input",
    type: "text",
    placeholder: "Search by attraction or destination"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "search__button"
  }, "Search")));
}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/search/search.scss":
/*!***************************************!*\
  !*** ./components/search/search.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/application.scss":
/*!********************************!*\
  !*** ./pages/application.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header */ "./components/header/header.js");
/* harmony import */ var _components_hero_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero/hero */ "./components/hero/hero.js");
/* harmony import */ var _components_destination_list_destination_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/destination_list/destination_list */ "./components/destination_list/destination_list.js");





class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_hero_hero__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_destination_list_destination_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
      header: "Popular Attractions"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_destination_list_destination_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
      header: "Popular Destinations"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./pages/home.js");
/* harmony import */ var _application_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application.scss */ "./pages/application.scss");
/* harmony import */ var _application_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_application_scss__WEBPACK_IMPORTED_MODULE_2__);




const Index = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home__WEBPACK_IMPORTED_MODULE_1__["default"], null));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Projects/vevado/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map