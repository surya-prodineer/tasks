(function() {
var exports = {};
exports.id = 405;
exports.ids = [405,491];
exports.modules = {

/***/ 743:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(409);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);


//Component for Task 1 (Count the no. Objects with Push and Editor as source)



const Task1 = ({
  dataWithPush,
  dataWithEditor
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
      children: "Task 1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: ["No of Records with value \u2013 \u201CPush\u201D:", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().numStyle),
        children: dataWithPush ? dataWithPush.length : "NA"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: ["No of Records with value \u2013 \u201CEditor\u201D:", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().numStyle),
        children: dataWithEditor ? dataWithEditor.length : "NA"
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Task1);

/***/ }),

/***/ 124:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(409);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Task1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(743);
/* harmony import */ var _Task2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(561);




 // Get static data from the server

const getStaticProps = async () => {
  const res = await fetch("http://18.136.165.153:9000/search");
  const data = await res.json();
  return {
    //return the data as apiData
    props: {
      apiData: data.listItem
    }
  };
};
function Home({
  apiData
}) {
  //Filter and Store the objects which has 'source' value as 'Push'
  const dataWithPush = apiData.filter(item => item.source === "Push"); //Filter and Store the objects which has 'source' value as 'Editor'

  const dataWithEditor = apiData.filter(item => item.source === "Editor");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainDiv),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Task1__WEBPACK_IMPORTED_MODULE_1__.default, {
      dataWithPush: dataWithPush,
      dataWithEditor: dataWithEditor
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Task2__WEBPACK_IMPORTED_MODULE_2__.default, {
      dataWithPush: dataWithPush,
      dataWithEditor: dataWithEditor
    })]
  });
}

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [561], function() { return __webpack_exec__(124); });
module.exports = __webpack_exports__;

})();