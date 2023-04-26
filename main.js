/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *:before, *:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    /* Dark on any other color */\n    --high: #f4718f;\n    --medium: #ffb60a;\n    --low: #38fac6;\n    --accent: #1fb7ea;\n    --dark: #020f13;\n    --light: #ffffff;\n    --accent-light: #c8eff9;\n    box-sizing: border-box;\n}\n\nbody, html {\n    color: var(--dark);\n    background-color: var(--light);\n}\n\nul {\n    appearance: none;\n    list-style-type: circle;\n    font-size: 1.2rem;\n}\n\nli {\n    line-height: 1.5em;\n}\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid: 100px 1fr / 250px 1fr;\n    grid-template-areas: \n        \"header header\"\n        \"sidebar tasks\";\n}\n\n.header {\n    grid-area: header;\n    background-color: var(--accent);\n    box-shadow: 0 5px 5px var(--dark);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sidebar {\n    grid-area: sidebar;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    gap: 80px;\n    background-color: var(--accent-light);\n}\n\n.sidebar-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n}\n\n.sidebar-section > ul {\n    align-self: baseline;\n}\n\n.tasks {\n    grid-area: tasks;\n    padding: 20px;\n    background-color: var(--light);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) repeat(4, 100px);\n    grid-template-areas: \n        \"title project priority date details\";\n    gap: 5px;\n    padding: 10px 20px;\n    border: 2px solid var(--accent);\n    border-radius: 30px;\n}\n\n.task-heading {\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) repeat(4, 100px);\n    grid-template-areas: \n        \"title project priority date details\";\n    gap: 5px;\n    padding: 10px 20px;\n    font-size: 1.1rem;\n    font-weight: 700;\n}\n\n.task > *,\n.task-heading > * {\n    text-align: center;\n}\n\n.tasks > div > .title {\n    grid-area: title;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.tasks > div > .project {\n    grid-area: project;\n}\n\n.tasks > div > .priority {\n    grid-area: priority;\n}\n\n.tasks > div > .dueDate {\n    grid-area: date;\n}\n\n.tasks > div > button {\n    grid-area: details;\n}\n\n.priority-high {\n    background: linear-gradient(.45turn, var(--high), var(--light) 30%);\n}\n\n.priority-medium {\n    background: linear-gradient(.45turn, var(--medium), var(--light) 30%);\n}\n\n.priority-low {\n    background: linear-gradient(.45turn, var(--low), var(--light) 30%);\n}\n\n.form-container {\n    /* Visibility toggles on button */\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    background-color: rgba(0,0,0,.5);\n}\n\nform, \n#task-details {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    /* Position absolutely in the center of the page */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: min-content;\n    width: 350px;\n    border: 5px solid var(--accent);\n    border-radius: 10px;\n    padding: 30px;\n    gap: 10px;\n    background-color: var(--light);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,4BAA4B;IAC5B,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B;;uBAEmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,+BAA+B;IAC/B,iCAAiC;IACjC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,0DAA0D;IAC1D;6CACyC;IACzC,QAAQ;IACR,kBAAkB;IAClB,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,0DAA0D;IAC1D;6CACyC;IACzC,QAAQ;IACR,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mEAAmE;AACvE;;AAEA;IACI,qEAAqE;AACzE;;AAEA;IACI,kEAAkE;AACtE;;AAEA;IACI,iCAAiC;IACjC,aAAa;IACb,eAAe;IACf,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,aAAa;IACb,gCAAgC;AACpC;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,kDAAkD;IAClD,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,mBAAmB;IACnB,YAAY;IACZ,+BAA+B;IAC/B,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,8BAA8B;AAClC","sourcesContent":["*, *:before, *:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    /* Dark on any other color */\n    --high: #f4718f;\n    --medium: #ffb60a;\n    --low: #38fac6;\n    --accent: #1fb7ea;\n    --dark: #020f13;\n    --light: #ffffff;\n    --accent-light: #c8eff9;\n    box-sizing: border-box;\n}\n\nbody, html {\n    color: var(--dark);\n    background-color: var(--light);\n}\n\nul {\n    appearance: none;\n    list-style-type: circle;\n    font-size: 1.2rem;\n}\n\nli {\n    line-height: 1.5em;\n}\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid: 100px 1fr / 250px 1fr;\n    grid-template-areas: \n        \"header header\"\n        \"sidebar tasks\";\n}\n\n.header {\n    grid-area: header;\n    background-color: var(--accent);\n    box-shadow: 0 5px 5px var(--dark);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sidebar {\n    grid-area: sidebar;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    gap: 80px;\n    background-color: var(--accent-light);\n}\n\n.sidebar-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n}\n\n.sidebar-section > ul {\n    align-self: baseline;\n}\n\n.tasks {\n    grid-area: tasks;\n    padding: 20px;\n    background-color: var(--light);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) repeat(4, 100px);\n    grid-template-areas: \n        \"title project priority date details\";\n    gap: 5px;\n    padding: 10px 20px;\n    border: 2px solid var(--accent);\n    border-radius: 30px;\n}\n\n.task-heading {\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) repeat(4, 100px);\n    grid-template-areas: \n        \"title project priority date details\";\n    gap: 5px;\n    padding: 10px 20px;\n    font-size: 1.1rem;\n    font-weight: 700;\n}\n\n.task > *,\n.task-heading > * {\n    text-align: center;\n}\n\n.tasks > div > .title {\n    grid-area: title;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.tasks > div > .project {\n    grid-area: project;\n}\n\n.tasks > div > .priority {\n    grid-area: priority;\n}\n\n.tasks > div > .dueDate {\n    grid-area: date;\n}\n\n.tasks > div > button {\n    grid-area: details;\n}\n\n.priority-high {\n    background: linear-gradient(.45turn, var(--high), var(--light) 30%);\n}\n\n.priority-medium {\n    background: linear-gradient(.45turn, var(--medium), var(--light) 30%);\n}\n\n.priority-low {\n    background: linear-gradient(.45turn, var(--low), var(--light) 30%);\n}\n\n.form-container {\n    /* Visibility toggles on button */\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    background-color: rgba(0,0,0,.5);\n}\n\nform, \n#task-details {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    /* Position absolutely in the center of the page */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: min-content;\n    width: 350px;\n    border: 5px solid var(--accent);\n    border-radius: 10px;\n    padding: 30px;\n    gap: 10px;\n    background-color: var(--light);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showDetails": () => (/* binding */ showDetails),
/* harmony export */   "showProjects": () => (/* binding */ showProjects),
/* harmony export */   "showTasks": () => (/* binding */ showTasks)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");


const formDisplay = (formId) => {
    const formContainer = document.getElementById(formId).parentElement;
    
    const showForm = (e) => {
        let btnId = e.target.id.toString();
        if (btnId == undefined) {

        } else if (btnId.slice(0,4) == 'task') {
            (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.detailsFactory)(btnId);
        }
        formContainer.style.display = 'block';
        formContainer.addEventListener('click', hideForm);
    }

    function hideForm(e) {
        if (e.target === formContainer) {
            formContainer.style.display = 'none'; 
        }
    }

    return { showForm };
}

const showTasks = formDisplay('task-form');
const showProjects = formDisplay('project-form');
const showDetails = formDisplay('task-details');



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsBuilder": () => (/* binding */ projectsBuilder),
/* harmony export */   "projectsView": () => (/* binding */ projectsView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _pencil_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pencil.svg */ "./src/pencil.svg");
/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.svg */ "./src/delete.svg");




const projects = [{name: 'General', description: 'Default project'}]

const projectFactory = () => {
    const projectForm = document.getElementById('project-form');
    const newProject = {
        name: projectForm.name.value,
        description: projectForm.description.value
    };
    projectForm.reset();
    return newProject;
}

const projectsDisplay = (listName, type) => {
    const projectList = document.querySelector(listName);
    while (projectList.firstChild) {
        projectList.removeChild(projectList.lastChild);
    }
    for (const project of projects) {
        const projectItem = document.createElement(type);
        if (type === 'option') {
            projectItem.value = project.name;
            projectItem.textContent = project.name;
        }
        if (type === 'li') {
            const projectDiv = document.createElement('div');
            const projectLink = document.createElement('a');
            projectLink.setAttribute('href', '');
            projectLink.id = project.name;
            projectLink.textContent = project.name;
            projectDiv.appendChild(projectLink);
            projectLink.addEventListener('click', (0,_view__WEBPACK_IMPORTED_MODULE_0__.filterFactory)('project', project.name).filterTasks);
            projectLink.appendChild(iconFactory('delete', _delete_svg__WEBPACK_IMPORTED_MODULE_2__));
            //deleteBtn.addEventListener('click', deleteProject);

            projectItem.appendChild(projectDiv);
        }
        projectList.appendChild(projectItem);
    }
}

const iconFactory = (type, reference) => {
    const btn = document.createElement('button');
    btn.classList.add(type + '-btn');
    btn.setAttribute('aria-label', type);
    const img = document.createElement('img');
    img.src = reference;
    btn.appendChild(img);
    return btn;
}

const projectsView = () => {
    projectsDisplay('.project-list', 'li');
    projectsDisplay('#project', 'option');
}

const projectsBuilder = (e) => {
    e.preventDefault();
    projects.push(projectFactory());
    projectsView();
}



/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detailsFactory": () => (/* binding */ detailsFactory),
/* harmony export */   "tasks": () => (/* binding */ tasks),
/* harmony export */   "tasksBuilder": () => (/* binding */ tasksBuilder),
/* harmony export */   "tasksDisplay": () => (/* binding */ tasksDisplay)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/forms.js");


const tasks = [];

const taskFactory = () => {
    const taskForm = document.getElementById('task-form');
    const newTask = {
        title: taskForm.title.value,
        description: taskForm.description.value,
        project: taskForm.project.value,
        priority: taskForm.priority.value,
        dueDate: taskForm.dueDate.value,
    };
    taskForm.reset();
    return newTask;
}

const tasksDisplay = (tasksView) => {
    const taskList = document.querySelector('.tasks');
    while (taskList.firstChild) {
        taskList.removeChild(taskList.lastChild);
    }
    taskList.appendChild(createTaskHeading());
    for (const task of tasksView) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskList.appendChild(taskDiv);
        for (const property in task) {
            const propertyDiv = document.createElement('div');
            propertyDiv.classList.add(`${property}`);
            if (`${property}` === 'priority') {
                if (`${task[property]}` === '3') {
                    propertyDiv.textContent = 'High';
                    taskDiv.classList.add('priority-high');
                } else if (`${task[property]}` === '2') {
                    propertyDiv.textContent = 'Medium';
                    taskDiv.classList.add('priority-medium');
                } else if (`${task[property]}` === '1') {
                    propertyDiv.textContent = 'Low';
                    taskDiv.classList.add('priority-low');
                }
            } else if (`${property}` === 'description') {
                continue;
            } else {
                propertyDiv.textContent = `${task[property]}`; 
            }
            taskDiv.appendChild(propertyDiv);
        }
        const detailsBtn = document.createElement('button');
        detailsBtn.id = 'task-' + tasks.indexOf(task);
        detailsBtn.addEventListener('click', _forms__WEBPACK_IMPORTED_MODULE_0__.showDetails.showForm);
        detailsBtn.textContent = 'Details';
        taskDiv.appendChild(detailsBtn);
    }
}

const createTaskHeading = () => {
    const taskHeading = document.createElement('div');
    taskHeading.classList.add('task-heading');
    for (const property in tasks.at(0)) {
        if (`${property}` === 'description') {
            continue;
        }
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add(`${property}`);
        generateTitles(property, propertyDiv);
        taskHeading.appendChild(propertyDiv);
    }
    return taskHeading;
}

const generateTitles = (property, propertyDiv) => {
    if (`${property}` === 'dueDate') {
        propertyDiv.textContent = 'Due Date';
    } else {
        propertyDiv.textContent = capitalizeProperty(property);
    }
}

const capitalizeProperty = (property) => {
    const propertyVar = `${property}`;
    const propertyName = propertyVar.charAt(0).toUpperCase() + propertyVar.slice(1);
    return propertyName;
}

const tasksBuilder = (e) => {
    e.preventDefault();
    tasks.push(taskFactory());
    tasksDisplay(tasks);
}

const detailsFactory = (btnId) => {
    const taskId = btnId.slice(5);
    const task = tasks.at(taskId);
    const detailsDiv = document.getElementById('task-details');
        while (detailsDiv.firstChild) {
            detailsDiv.removeChild(detailsDiv.lastChild);
        }
        for (const property in task) {
            const propertyDiv = document.createElement('div');
            const propertyName = document.createElement('div');
            generateTitles(property, propertyDiv);
            const propertyValue = document.createElement('div');
            propertyValue.textContent = `${task[property]}`;
            detailsDiv.appendChild(propertyDiv);
            propertyDiv.appendChild(propertyName);
            propertyDiv.appendChild(propertyValue);
        }
}




/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateView": () => (/* binding */ dateView),
/* harmony export */   "filterFactory": () => (/* binding */ filterFactory),
/* harmony export */   "priorityView": () => (/* binding */ priorityView)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");


//need to figure out how to get the array sorter to read the primary and secondary values passed to it as a factory element
const sortFactory = (primary, secondary) => {
    const sortAscending = (e) => {
        e.preventDefault();
        const tasksSorted = [..._tasks__WEBPACK_IMPORTED_MODULE_0__.tasks];
        tasksSorted.sort((a, b) => (a[primary] > b[primary]) ? 1 : (a[primary] === b[primary]) ? ((a[secondary] > b[secondary]) ? 1 : -1) : -1);
        (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.tasksDisplay)(tasksSorted);
    };

    const sortDescending = (e) => {
        e.preventDefault();
        const tasksSorted = [..._tasks__WEBPACK_IMPORTED_MODULE_0__.tasks];
        tasksSorted.sort((a, b) => (a[primary] < b[primary]) ? 1 : (a[primary] === b[primary]) ? ((a[secondary] > b[secondary]) ? 1 : -1) : -1);
        (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.tasksDisplay)(tasksSorted);
    };

    return { sortAscending, sortDescending };
};

const filterFactory = (property, value) => {
    const isValue = (task) => {
            if (`${task[property]}` === `${value}`) {
                return true;
            }
            return false;
    }
    
    const filterTasks = (e) => {
        e.preventDefault();
        let tasksFiltered = [..._tasks__WEBPACK_IMPORTED_MODULE_0__.tasks];
        tasksFiltered = tasksFiltered.filter(isValue);
        console.log(tasksFiltered);
        (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.tasksDisplay)(tasksFiltered);
    }

    return { filterTasks };
}

const dateView = sortFactory('dueDate', 'title');
const priorityView = sortFactory('priority', 'dueDate');



/***/ }),

/***/ "./src/delete.svg":
/*!************************!*\
  !*** ./src/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de0bb67a90c508546224.svg";

/***/ }),

/***/ "./src/pencil.svg":
/*!************************!*\
  !*** ./src/pencil.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c11ca64583db9195885d.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view */ "./src/view.js");






const projectForm = document.getElementById('project-form');
projectForm.addEventListener('submit', _projects__WEBPACK_IMPORTED_MODULE_1__.projectsBuilder);

const projectBtn = document.getElementById('project-btn');
projectBtn.addEventListener('click', _forms__WEBPACK_IMPORTED_MODULE_3__.showProjects.showForm);

const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', _tasks__WEBPACK_IMPORTED_MODULE_2__.tasksBuilder);

const taskBtn = document.getElementById('task-btn');
taskBtn.addEventListener('click', _forms__WEBPACK_IMPORTED_MODULE_3__.showTasks.showForm);

const dateSorter = document.getElementById('date-sort');
dateSorter.addEventListener('click', _view__WEBPACK_IMPORTED_MODULE_4__.dateView.sortAscending);

const prioritySorter = document.getElementById('priority-sort');
prioritySorter.addEventListener('click', _view__WEBPACK_IMPORTED_MODULE_4__.priorityView.sortDescending);

(0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectsView)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EseUNBQXlDLDhEQUEyQjs7QUFFcEUsdURBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC8qIERhcmsgb24gYW55IG90aGVyIGNvbG9yICovXFxuICAgIC0taGlnaDogI2Y0NzE4ZjtcXG4gICAgLS1tZWRpdW06ICNmZmI2MGE7XFxuICAgIC0tbG93OiAjMzhmYWM2O1xcbiAgICAtLWFjY2VudDogIzFmYjdlYTtcXG4gICAgLS1kYXJrOiAjMDIwZjEzO1xcbiAgICAtLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudC1saWdodDogI2M4ZWZmOTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG51bCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxubGkge1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDEwMHB4IDFmciAvIDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJzaWRlYmFyIHRhc2tzXFxcIjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggdmFyKC0tZGFyayk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLXNlY3Rpb24gPiB1bCB7XFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBncmlkLWFyZWE6IHRhc2tzO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSByZXBlYXQoNCwgMTAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJ0aXRsZSBwcm9qZWN0IHByaW9yaXR5IGRhdGUgZGV0YWlsc1xcXCI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbi50YXNrLWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSByZXBlYXQoNCwgMTAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJ0aXRsZSBwcm9qZWN0IHByaW9yaXR5IGRhdGUgZGV0YWlsc1xcXCI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGFzayA+ICosXFxuLnRhc2staGVhZGluZyA+ICoge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcyA+IGRpdiA+IC50aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udGFza3MgPiBkaXYgPiAucHJvamVjdCB7XFxuICAgIGdyaWQtYXJlYTogcHJvamVjdDtcXG59XFxuXFxuLnRhc2tzID4gZGl2ID4gLnByaW9yaXR5IHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG59XFxuXFxuLnRhc2tzID4gZGl2ID4gLmR1ZURhdGUge1xcbiAgICBncmlkLWFyZWE6IGRhdGU7XFxufVxcblxcbi50YXNrcyA+IGRpdiA+IGJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogZGV0YWlscztcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLjQ1dHVybiwgdmFyKC0taGlnaCksIHZhcigtLWxpZ2h0KSAzMCUpO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC40NXR1cm4sIHZhcigtLW1lZGl1bSksIHZhcigtLWxpZ2h0KSAzMCUpO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC40NXR1cm4sIHZhcigtLWxvdyksIHZhcigtLWxpZ2h0KSAzMCUpO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICAvKiBWaXNpYmlsaXR5IHRvZ2dsZXMgb24gYnV0dG9uICovXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcXG59XFxuXFxuZm9ybSwgXFxuI3Rhc2stZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAvKiBQb3NpdGlvbiBhYnNvbHV0ZWx5IGluIHRoZSBjZW50ZXIgb2YgdGhlIHBhZ2UgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0I7O3VCQUVtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwREFBMEQ7SUFDMUQ7NkNBQ3lDO0lBQ3pDLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwREFBMEQ7SUFDMUQ7NkNBQ3lDO0lBQ3pDLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLHFFQUFxRTtBQUN6RTs7QUFFQTtJQUNJLGtFQUFrRTtBQUN0RTs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGtEQUFrRDtJQUNsRCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC8qIERhcmsgb24gYW55IG90aGVyIGNvbG9yICovXFxuICAgIC0taGlnaDogI2Y0NzE4ZjtcXG4gICAgLS1tZWRpdW06ICNmZmI2MGE7XFxuICAgIC0tbG93OiAjMzhmYWM2O1xcbiAgICAtLWFjY2VudDogIzFmYjdlYTtcXG4gICAgLS1kYXJrOiAjMDIwZjEzO1xcbiAgICAtLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLWFjY2VudC1saWdodDogI2M4ZWZmOTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG51bCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxubGkge1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDEwMHB4IDFmciAvIDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJzaWRlYmFyIHRhc2tzXFxcIjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggdmFyKC0tZGFyayk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLXNlY3Rpb24gPiB1bCB7XFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBncmlkLWFyZWE6IHRhc2tzO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSByZXBlYXQoNCwgMTAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJ0aXRsZSBwcm9qZWN0IHByaW9yaXR5IGRhdGUgZGV0YWlsc1xcXCI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbi50YXNrLWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSByZXBlYXQoNCwgMTAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJ0aXRsZSBwcm9qZWN0IHByaW9yaXR5IGRhdGUgZGV0YWlsc1xcXCI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGFzayA+ICosXFxuLnRhc2staGVhZGluZyA+ICoge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcyA+IGRpdiA+IC50aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udGFza3MgPiBkaXYgPiAucHJvamVjdCB7XFxuICAgIGdyaWQtYXJlYTogcHJvamVjdDtcXG59XFxuXFxuLnRhc2tzID4gZGl2ID4gLnByaW9yaXR5IHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG59XFxuXFxuLnRhc2tzID4gZGl2ID4gLmR1ZURhdGUge1xcbiAgICBncmlkLWFyZWE6IGRhdGU7XFxufVxcblxcbi50YXNrcyA+IGRpdiA+IGJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogZGV0YWlscztcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLjQ1dHVybiwgdmFyKC0taGlnaCksIHZhcigtLWxpZ2h0KSAzMCUpO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC40NXR1cm4sIHZhcigtLW1lZGl1bSksIHZhcigtLWxpZ2h0KSAzMCUpO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC40NXR1cm4sIHZhcigtLWxvdyksIHZhcigtLWxpZ2h0KSAzMCUpO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICAvKiBWaXNpYmlsaXR5IHRvZ2dsZXMgb24gYnV0dG9uICovXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcXG59XFxuXFxuZm9ybSwgXFxuI3Rhc2stZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAvKiBQb3NpdGlvbiBhYnNvbHV0ZWx5IGluIHRoZSBjZW50ZXIgb2YgdGhlIHBhZ2UgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRldGFpbHNGYWN0b3J5IH0gZnJvbSBcIi4vdGFza3NcIjtcblxuY29uc3QgZm9ybURpc3BsYXkgPSAoZm9ybUlkKSA9PiB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCkucGFyZW50RWxlbWVudDtcbiAgICBcbiAgICBjb25zdCBzaG93Rm9ybSA9IChlKSA9PiB7XG4gICAgICAgIGxldCBidG5JZCA9IGUudGFyZ2V0LmlkLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChidG5JZCA9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICB9IGVsc2UgaWYgKGJ0bklkLnNsaWNlKDAsNCkgPT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICBkZXRhaWxzRmFjdG9yeShidG5JZCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVGb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlRm9ybShlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZm9ybUNvbnRhaW5lcikge1xuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHNob3dGb3JtIH07XG59XG5cbmNvbnN0IHNob3dUYXNrcyA9IGZvcm1EaXNwbGF5KCd0YXNrLWZvcm0nKTtcbmNvbnN0IHNob3dQcm9qZWN0cyA9IGZvcm1EaXNwbGF5KCdwcm9qZWN0LWZvcm0nKTtcbmNvbnN0IHNob3dEZXRhaWxzID0gZm9ybURpc3BsYXkoJ3Rhc2stZGV0YWlscycpO1xuXG5leHBvcnQgeyBzaG93VGFza3MsIHNob3dQcm9qZWN0cywgc2hvd0RldGFpbHMgfTsiLCJpbXBvcnQgeyBmaWx0ZXJGYWN0b3J5IH0gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHBlbmNpbEljb24gZnJvbSAnLi9wZW5jaWwuc3ZnJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vZGVsZXRlLnN2Zyc7XG5cbmNvbnN0IHByb2plY3RzID0gW3tuYW1lOiAnR2VuZXJhbCcsIGRlc2NyaXB0aW9uOiAnRGVmYXVsdCBwcm9qZWN0J31dXG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSB7XG4gICAgICAgIG5hbWU6IHByb2plY3RGb3JtLm5hbWUudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBwcm9qZWN0Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZVxuICAgIH07XG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuY29uc3QgcHJvamVjdHNEaXNwbGF5ID0gKGxpc3ROYW1lLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpc3ROYW1lKTtcbiAgICB3aGlsZSAocHJvamVjdExpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0TGlzdC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ29wdGlvbicpIHtcbiAgICAgICAgICAgIHByb2plY3RJdGVtLnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaScpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgcHJvamVjdExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJycpO1xuICAgICAgICAgICAgcHJvamVjdExpbmsuaWQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0TGluay50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xuICAgICAgICAgICAgcHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaWx0ZXJGYWN0b3J5KCdwcm9qZWN0JywgcHJvamVjdC5uYW1lKS5maWx0ZXJUYXNrcyk7XG4gICAgICAgICAgICBwcm9qZWN0TGluay5hcHBlbmRDaGlsZChpY29uRmFjdG9yeSgnZGVsZXRlJywgZGVsZXRlSWNvbikpO1xuICAgICAgICAgICAgLy9kZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0KTtcblxuICAgICAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgIH1cbn1cblxuY29uc3QgaWNvbkZhY3RvcnkgPSAodHlwZSwgcmVmZXJlbmNlKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQodHlwZSArICctYnRuJyk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHR5cGUpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSByZWZlcmVuY2U7XG4gICAgYnRuLmFwcGVuZENoaWxkKGltZyk7XG4gICAgcmV0dXJuIGJ0bjtcbn1cblxuY29uc3QgcHJvamVjdHNWaWV3ID0gKCkgPT4ge1xuICAgIHByb2plY3RzRGlzcGxheSgnLnByb2plY3QtbGlzdCcsICdsaScpO1xuICAgIHByb2plY3RzRGlzcGxheSgnI3Byb2plY3QnLCAnb3B0aW9uJyk7XG59XG5cbmNvbnN0IHByb2plY3RzQnVpbGRlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkoKSk7XG4gICAgcHJvamVjdHNWaWV3KCk7XG59XG5cbmV4cG9ydCB7IHByb2plY3RzQnVpbGRlciwgcHJvamVjdHNWaWV3IH07IiwiaW1wb3J0IHsgc2hvd0RldGFpbHMgfSBmcm9tIFwiLi9mb3Jtc1wiO1xuXG5jb25zdCB0YXNrcyA9IFtdO1xuXG5jb25zdCB0YXNrRmFjdG9yeSA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTtcbiAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICB0aXRsZTogdGFza0Zvcm0udGl0bGUudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0YXNrRm9ybS5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgcHJvamVjdDogdGFza0Zvcm0ucHJvamVjdC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IHRhc2tGb3JtLnByaW9yaXR5LnZhbHVlLFxuICAgICAgICBkdWVEYXRlOiB0YXNrRm9ybS5kdWVEYXRlLnZhbHVlLFxuICAgIH07XG4gICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICByZXR1cm4gbmV3VGFzaztcbn1cblxuY29uc3QgdGFza3NEaXNwbGF5ID0gKHRhc2tzVmlldykgPT4ge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgd2hpbGUgKHRhc2tMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza0xpc3QucmVtb3ZlQ2hpbGQodGFza0xpc3QubGFzdENoaWxkKTtcbiAgICB9XG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0hlYWRpbmcoKSk7XG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzVmlldykge1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0YXNrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvcGVydHlEaXYuY2xhc3NMaXN0LmFkZChgJHtwcm9wZXJ0eX1gKTtcbiAgICAgICAgICAgIGlmIChgJHtwcm9wZXJ0eX1gID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgICAgICAgaWYgKGAke3Rhc2tbcHJvcGVydHldfWAgPT09ICczJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eURpdi50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChgJHt0YXNrW3Byb3BlcnR5XX1gID09PSAnMicpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlEaXYudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1tZWRpdW0nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGAke3Rhc2tbcHJvcGVydHldfWAgPT09ICcxJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eURpdi50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYCR7cHJvcGVydHl9YCA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eURpdi50ZXh0Q29udGVudCA9IGAke3Rhc2tbcHJvcGVydHldfWA7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChwcm9wZXJ0eURpdik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZXRhaWxzQnRuLmlkID0gJ3Rhc2stJyArIHRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgIGRldGFpbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RGV0YWlscy5zaG93Rm9ybSk7XG4gICAgICAgIGRldGFpbHNCdG4udGV4dENvbnRlbnQgPSAnRGV0YWlscyc7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0J0bik7XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVUYXNrSGVhZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGluZycpO1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGFza3MuYXQoMCkpIHtcbiAgICAgICAgaWYgKGAke3Byb3BlcnR5fWAgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb3BlcnR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb3BlcnR5RGl2LmNsYXNzTGlzdC5hZGQoYCR7cHJvcGVydHl9YCk7XG4gICAgICAgIGdlbmVyYXRlVGl0bGVzKHByb3BlcnR5LCBwcm9wZXJ0eURpdik7XG4gICAgICAgIHRhc2tIZWFkaW5nLmFwcGVuZENoaWxkKHByb3BlcnR5RGl2KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tIZWFkaW5nO1xufVxuXG5jb25zdCBnZW5lcmF0ZVRpdGxlcyA9IChwcm9wZXJ0eSwgcHJvcGVydHlEaXYpID0+IHtcbiAgICBpZiAoYCR7cHJvcGVydHl9YCA9PT0gJ2R1ZURhdGUnKSB7XG4gICAgICAgIHByb3BlcnR5RGl2LnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wZXJ0eURpdi50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgfVxufVxuXG5jb25zdCBjYXBpdGFsaXplUHJvcGVydHkgPSAocHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eVZhciA9IGAke3Byb3BlcnR5fWA7XG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHlWYXIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eVZhci5zbGljZSgxKTtcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuXG5jb25zdCB0YXNrc0J1aWxkZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXNrcy5wdXNoKHRhc2tGYWN0b3J5KCkpO1xuICAgIHRhc2tzRGlzcGxheSh0YXNrcyk7XG59XG5cbmNvbnN0IGRldGFpbHNGYWN0b3J5ID0gKGJ0bklkKSA9PiB7XG4gICAgY29uc3QgdGFza0lkID0gYnRuSWQuc2xpY2UoNSk7XG4gICAgY29uc3QgdGFzayA9IHRhc2tzLmF0KHRhc2tJZCk7XG4gICAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRldGFpbHMnKTtcbiAgICAgICAgd2hpbGUgKGRldGFpbHNEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZGV0YWlsc0Rpdi5yZW1vdmVDaGlsZChkZXRhaWxzRGl2Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0YXNrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBnZW5lcmF0ZVRpdGxlcyhwcm9wZXJ0eSwgcHJvcGVydHlEaXYpO1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvcGVydHlWYWx1ZS50ZXh0Q29udGVudCA9IGAke3Rhc2tbcHJvcGVydHldfWA7XG4gICAgICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKHByb3BlcnR5RGl2KTtcbiAgICAgICAgICAgIHByb3BlcnR5RGl2LmFwcGVuZENoaWxkKHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICBwcm9wZXJ0eURpdi5hcHBlbmRDaGlsZChwcm9wZXJ0eVZhbHVlKTtcbiAgICAgICAgfVxufVxuXG5leHBvcnQgeyB0YXNrc0J1aWxkZXIsIHRhc2tzLCB0YXNrc0Rpc3BsYXksIGRldGFpbHNGYWN0b3J5IH07XG4iLCJpbXBvcnQgeyB0YXNrcywgdGFza3NEaXNwbGF5IH0gZnJvbSAnLi90YXNrcyc7XG5cbi8vbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byBnZXQgdGhlIGFycmF5IHNvcnRlciB0byByZWFkIHRoZSBwcmltYXJ5IGFuZCBzZWNvbmRhcnkgdmFsdWVzIHBhc3NlZCB0byBpdCBhcyBhIGZhY3RvcnkgZWxlbWVudFxuY29uc3Qgc29ydEZhY3RvcnkgPSAocHJpbWFyeSwgc2Vjb25kYXJ5KSA9PiB7XG4gICAgY29uc3Qgc29ydEFzY2VuZGluZyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGFza3NTb3J0ZWQgPSBbLi4udGFza3NdO1xuICAgICAgICB0YXNrc1NvcnRlZC5zb3J0KChhLCBiKSA9PiAoYVtwcmltYXJ5XSA+IGJbcHJpbWFyeV0pID8gMSA6IChhW3ByaW1hcnldID09PSBiW3ByaW1hcnldKSA/ICgoYVtzZWNvbmRhcnldID4gYltzZWNvbmRhcnldKSA/IDEgOiAtMSkgOiAtMSk7XG4gICAgICAgIHRhc2tzRGlzcGxheSh0YXNrc1NvcnRlZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNvcnREZXNjZW5kaW5nID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0YXNrc1NvcnRlZCA9IFsuLi50YXNrc107XG4gICAgICAgIHRhc2tzU29ydGVkLnNvcnQoKGEsIGIpID0+IChhW3ByaW1hcnldIDwgYltwcmltYXJ5XSkgPyAxIDogKGFbcHJpbWFyeV0gPT09IGJbcHJpbWFyeV0pID8gKChhW3NlY29uZGFyeV0gPiBiW3NlY29uZGFyeV0pID8gMSA6IC0xKSA6IC0xKTtcbiAgICAgICAgdGFza3NEaXNwbGF5KHRhc2tzU29ydGVkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgc29ydEFzY2VuZGluZywgc29ydERlc2NlbmRpbmcgfTtcbn07XG5cbmNvbnN0IGZpbHRlckZhY3RvcnkgPSAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgaXNWYWx1ZSA9ICh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZiAoYCR7dGFza1twcm9wZXJ0eV19YCA9PT0gYCR7dmFsdWV9YCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBmaWx0ZXJUYXNrcyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHRhc2tzRmlsdGVyZWQgPSBbLi4udGFza3NdO1xuICAgICAgICB0YXNrc0ZpbHRlcmVkID0gdGFza3NGaWx0ZXJlZC5maWx0ZXIoaXNWYWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzRmlsdGVyZWQpO1xuICAgICAgICB0YXNrc0Rpc3BsYXkodGFza3NGaWx0ZXJlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZmlsdGVyVGFza3MgfTtcbn1cblxuY29uc3QgZGF0ZVZpZXcgPSBzb3J0RmFjdG9yeSgnZHVlRGF0ZScsICd0aXRsZScpO1xuY29uc3QgcHJpb3JpdHlWaWV3ID0gc29ydEZhY3RvcnkoJ3ByaW9yaXR5JywgJ2R1ZURhdGUnKTtcblxuZXhwb3J0IHsgZGF0ZVZpZXcsIHByaW9yaXR5VmlldywgZmlsdGVyRmFjdG9yeSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwcm9qZWN0c0J1aWxkZXIsIHByb2plY3RzVmlldyB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgdGFza3NCdWlsZGVyIH0gZnJvbSAnLi90YXNrcyc7XG5pbXBvcnQgeyBzaG93VGFza3MsIHNob3dQcm9qZWN0cyB9IGZyb20gJy4vZm9ybXMnO1xuaW1wb3J0IHsgZGF0ZVZpZXcsIHByaW9yaXR5VmlldyB9IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpO1xucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgcHJvamVjdHNCdWlsZGVyKTtcblxuY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWJ0bicpO1xucHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dQcm9qZWN0cy5zaG93Rm9ybSk7XG5cbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpO1xudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGFza3NCdWlsZGVyKTtcblxuY29uc3QgdGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ0bicpO1xudGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUYXNrcy5zaG93Rm9ybSk7XG5cbmNvbnN0IGRhdGVTb3J0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1zb3J0Jyk7XG5kYXRlU29ydGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGF0ZVZpZXcuc29ydEFzY2VuZGluZyk7XG5cbmNvbnN0IHByaW9yaXR5U29ydGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LXNvcnQnKTtcbnByaW9yaXR5U29ydGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJpb3JpdHlWaWV3LnNvcnREZXNjZW5kaW5nKTtcblxucHJvamVjdHNWaWV3KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9