exports.id = 561;
exports.ids = [561];
exports.modules = {

/***/ 561:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_Task2; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(409);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./public/Content.js


//Component to display data as table



const Content = ({
  type,
  headline
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Home_module_default()).tableRow,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (Home_module_default()).typeColumn,
      children: type
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (Home_module_default()).headlineColumn,
      children: headline
    })]
  });
};

/* harmony default export */ var public_Content = (Content);
;// CONCATENATED MODULE: ./pages/Task2.js


//Component for Task 2 ( Display 5 items from each group)




const Task2 = ({
  dataWithPush,
  dataWithEditor
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: (Home_module_default()).title,
      children: "Task 2"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["No of Records with value \u2013 \u201CPush\u201D:", /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (Home_module_default()).numStyle,
        children: dataWithPush ? dataWithPush.length : "NA"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Home_module_default()).table,
      children: dataWithPush ? dataWithPush.slice(0, 5).map(item => {
        return /*#__PURE__*/jsx_runtime_.jsx(public_Content, {
          type: item.type,
          headline: item.headline
        }, item._id);
      }) : "Nothing To show...."
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["No of Records with value \u2013 \u201CEditor\u201D:", /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (Home_module_default()).numStyle,
        children: dataWithEditor ? dataWithEditor.length : "NA"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Home_module_default()).table,
      children: dataWithEditor ? dataWithEditor.slice(0, 5).map(item => {
        return /*#__PURE__*/jsx_runtime_.jsx(public_Content, {
          type: item.type,
          headline: item.headline
        }, item._id);
      }) : "Nothing To show...."
    })]
  });
};

/* harmony default export */ var pages_Task2 = (Task2);

/***/ }),

/***/ 409:
/***/ (function(module) {

// Exports
module.exports = {
	"mainDiv": "Home_mainDiv__5n5lh",
	"title": "Home_title__3DjR7",
	"numStyle": "Home_numStyle__2PDr6",
	"table": "Home_table__1bzfV",
	"tableRow": "Home_tableRow__25xQR",
	"typeColumn": "Home_typeColumn__2Iy6N",
	"headlineColumn": "Home_headlineColumn__1NykY"
};


/***/ })

};
;