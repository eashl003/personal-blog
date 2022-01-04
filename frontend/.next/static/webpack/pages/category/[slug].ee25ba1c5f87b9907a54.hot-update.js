self["webpackHotUpdate_N_E"]("pages/category/[slug]",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": function() { return /* binding */ GlobalContext; }
/* harmony export */ });
/* harmony import */ var C_Users_elisa_personal_project_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_elisa_personal_project_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_elisa_personal_project_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_elisa_personal_project_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_elisa_personal_project_my_project_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_css_footer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/css/footer.css */ "./assets/css/footer.css");
/* harmony import */ var _assets_css_footer_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_css_footer_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\elisa\\personal-project\\my-project\\frontend\\pages\\_app.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_elisa_personal_project_my_project_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // Store Strapi Global object in context

var GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_8__.createContext)({});

var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var global = pageProps.global;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,_lib_media__WEBPACK_IMPORTED_MODULE_10__.getStrapiMedia)(global.attributes.favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(GlobalContext.Provider, {
      value: global.attributes,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_elisa_personal_project_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_elisa_personal_project_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {
    var appProps, globalRes;
    return C_Users_elisa_personal_project_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next_app__WEBPACK_IMPORTED_MODULE_4___default().getInitialProps(ctx);

          case 2:
            appProps = _context.sent;
            _context.next = 5;
            return (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__.fetchAPI)("/global", {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*"
                }
              }
            });

          case 5:
            globalRes = _context.sent;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
              pageProps: {
                global: globalRes.data
              }
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./assets/css/footer.css":
/*!*******************************!*\
  !*** ./assets/css/footer.css ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./footer.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/footer.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./footer.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/footer.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./footer.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/footer.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/footer.css":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/footer.css ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    font-family: \"Lato\", sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  ul {\r\n    list-style: none;\r\n    padding-left: 0;\r\n  }\r\n  footer {\r\n    background-color: #555;\r\n    color: #bbb;\r\n    line-height: 1.5;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n  }\r\n  footer a {\r\n    text-decoration: none;\r\n    color: #eee;\r\n  }\r\n  a:hover {\r\n    color:yellow !important;\r\n  }\r\n  .ft-title {\r\n    color: #fff;\r\n    font-family: \"Merriweather\", serif;\r\n    font-size: 1.375rem;\r\n    padding-bottom: 0.625rem;\r\n  }\r\n  /* Sticks footer to bottom */\r\n  body {\r\n    display: flex;\r\n    min-height: 100vh;\r\n    flex-direction: column;\r\n  }\r\n  .container {\r\n    flex: 1 1;\r\n  }\r\n  /* Footer main */\r\n  .ft-main {\r\n    padding: 1.25rem 1.875rem;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    bottom: 0;\r\n    position: absolute;\r\n  }\r\n  @media only screen and (min-width: 29.8125rem /* 477px */) {\r\n    .ft-main {\r\n      justify-content: space-evenly;\r\n    }\r\n  }\r\n  @media only screen and (min-width: 77.5rem /* 1240px */) {\r\n    .ft-main {\r\n      justify-content: space-evenly;\r\n    }\r\n  }\r\n  .ft-main-item {\r\n    padding: 1.25rem;\r\n    min-width: 12.5rem;\r\n  }\r\n  \r\n  /* Footer main | Newsletter form */\r\n  form {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n  input[type=\"email\"] {\r\n    border: 0;\r\n    padding: 0.625rem;\r\n    margin-top: 0.3125rem;\r\n  }\r\n  input[type=\"submit\"] {\r\n    background-color: #00d188;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    border: 0;\r\n    padding: 0.625rem 0.9375rem;\r\n    margin-top: 0.3125rem;\r\n  }\r\n  /* Footer social */\r\n  .ft-social {\r\n    padding: 0 1.875rem 1.25rem;\r\n    position: absolute;\r\n    bottom: 0;\r\n  }\r\n  .ft-social-list {\r\n    display: flex;\r\n    justify-content: center;\r\n    border-top: 1px #777 solid;\r\n    padding-top: 1.25rem;\r\n  }\r\n  .ft-social-list li {\r\n    margin: 0.5rem;\r\n    font-size: 1.25rem;\r\n  }\r\n  /* Footer legal */\r\n  .ft-legal {\r\n    padding: 0.9375rem 1.875rem;\r\n    background-color: yellow;\r\n    position:absolute;\r\n    bottom: 0;\r\n  }\r\n  .ft-legal-list {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n  .ft-legal-list li {\r\n    margin: 0.125rem 0.625rem;\r\n    white-space: nowrap;\r\n  }\r\n  /* one before the last child */\r\n  .ft-legal-list li:nth-last-child(2) {\r\n      flex: 1 1;\r\n  }", "",{"version":3,"sources":["webpack://assets/css/footer.css"],"names":[],"mappings":"AAAA;IACI,8BAAsB;YAAtB,sBAAsB;IACtB,+BAA+B;IAC/B,SAAS;IACT,UAAU;EACZ;EACA;IACE,gBAAgB;IAChB,eAAe;EACjB;EACA;IACE,sBAAsB;IACtB,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,SAAS;IACT,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,WAAW;EACb;EACA;IACE,uBAAuB;EACzB;EACA;IACE,WAAW;IACX,kCAAkC;IAClC,mBAAmB;IACnB,wBAAwB;EAC1B;EACA,4BAA4B;EAC5B;IACE,aAAa;IACb,iBAAiB;IACjB,sBAAsB;EACxB;EACA;IACE,SAAO;EACT;EACA,gBAAgB;EAChB;IACE,yBAAyB;IACzB,aAAa;IACb,eAAe;IACf,SAAS;IACT,kBAAkB;EACpB;EACA;IACE;MACE,6BAA6B;IAC/B;EACF;EACA;IACE;MACE,6BAA6B;IAC/B;EACF;EACA;IACE,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA,kCAAkC;EAClC;IACE,aAAa;IACb,eAAe;EACjB;EACA;IACE,SAAS;IACT,iBAAiB;IACjB,qBAAqB;EACvB;EACA;IACE,yBAAyB;IACzB,WAAW;IACX,eAAe;IACf,SAAS;IACT,2BAA2B;IAC3B,qBAAqB;EACvB;EACA,kBAAkB;EAClB;IACE,2BAA2B;IAC3B,kBAAkB;IAClB,SAAS;EACX;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,0BAA0B;IAC1B,oBAAoB;EACtB;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA,iBAAiB;EACjB;IACE,2BAA2B;IAC3B,wBAAwB;IACxB,iBAAiB;IACjB,SAAS;EACX;EACA;IACE,WAAW;IACX,aAAa;IACb,eAAe;EACjB;EACA;IACE,yBAAyB;IACzB,mBAAmB;EACrB;EACA,8BAA8B;EAC9B;MACI,SAAO;EACX","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    font-family: \"Lato\", sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  ul {\r\n    list-style: none;\r\n    padding-left: 0;\r\n  }\r\n  footer {\r\n    background-color: #555;\r\n    color: #bbb;\r\n    line-height: 1.5;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n  }\r\n  footer a {\r\n    text-decoration: none;\r\n    color: #eee;\r\n  }\r\n  a:hover {\r\n    color:yellow !important;\r\n  }\r\n  .ft-title {\r\n    color: #fff;\r\n    font-family: \"Merriweather\", serif;\r\n    font-size: 1.375rem;\r\n    padding-bottom: 0.625rem;\r\n  }\r\n  /* Sticks footer to bottom */\r\n  body {\r\n    display: flex;\r\n    min-height: 100vh;\r\n    flex-direction: column;\r\n  }\r\n  .container {\r\n    flex: 1;\r\n  }\r\n  /* Footer main */\r\n  .ft-main {\r\n    padding: 1.25rem 1.875rem;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    bottom: 0;\r\n    position: absolute;\r\n  }\r\n  @media only screen and (min-width: 29.8125rem /* 477px */) {\r\n    .ft-main {\r\n      justify-content: space-evenly;\r\n    }\r\n  }\r\n  @media only screen and (min-width: 77.5rem /* 1240px */) {\r\n    .ft-main {\r\n      justify-content: space-evenly;\r\n    }\r\n  }\r\n  .ft-main-item {\r\n    padding: 1.25rem;\r\n    min-width: 12.5rem;\r\n  }\r\n  \r\n  /* Footer main | Newsletter form */\r\n  form {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n  input[type=\"email\"] {\r\n    border: 0;\r\n    padding: 0.625rem;\r\n    margin-top: 0.3125rem;\r\n  }\r\n  input[type=\"submit\"] {\r\n    background-color: #00d188;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    border: 0;\r\n    padding: 0.625rem 0.9375rem;\r\n    margin-top: 0.3125rem;\r\n  }\r\n  /* Footer social */\r\n  .ft-social {\r\n    padding: 0 1.875rem 1.25rem;\r\n    position: absolute;\r\n    bottom: 0;\r\n  }\r\n  .ft-social-list {\r\n    display: flex;\r\n    justify-content: center;\r\n    border-top: 1px #777 solid;\r\n    padding-top: 1.25rem;\r\n  }\r\n  .ft-social-list li {\r\n    margin: 0.5rem;\r\n    font-size: 1.25rem;\r\n  }\r\n  /* Footer legal */\r\n  .ft-legal {\r\n    padding: 0.9375rem 1.875rem;\r\n    background-color: yellow;\r\n    position:absolute;\r\n    bottom: 0;\r\n  }\r\n  .ft-legal-list {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n  .ft-legal-list li {\r\n    margin: 0.125rem 0.625rem;\r\n    white-space: nowrap;\r\n  }\r\n  /* one before the last child */\r\n  .ft-legal-list li:nth-last-child(2) {\r\n      flex: 1;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2Nzcy9mb290ZXIuY3NzP2ZlMTIiLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9jc3MvZm9vdGVyLmNzcyJdLCJuYW1lcyI6WyJHbG9iYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2xvYmFsIiwiZ2V0U3RyYXBpTWVkaWEiLCJhdHRyaWJ1dGVzIiwiZmF2aWNvbiIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIkFwcCIsImFwcFByb3BzIiwiZmV0Y2hBUEkiLCJwb3B1bGF0ZSIsImRlZmF1bHRTZW8iLCJnbG9iYWxSZXMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDTyxJQUFNQSxhQUFhLGdCQUFHQyxvREFBYSxDQUFDLEVBQUQsQ0FBbkM7O0FBRVAsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBOEI7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUFBLE1BQ2xDQyxNQURrQyxHQUN2QkQsU0FEdUIsQ0FDbENDLE1BRGtDO0FBRzFDLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUNFLFdBQUcsRUFBQyxlQUROO0FBRUUsWUFBSSxFQUFFQywyREFBYyxDQUFDRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0JDLE9BQW5CO0FBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSw4REFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixXQUFLLEVBQUVILE1BQU0sQ0FBQ0UsVUFBdEM7QUFBQSw2QkFDRSw4REFB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LE9BQU8sK0NBQStDLHNCQUFzQiwwQkFBMEIsK0JBQStCLE9BQU8sa0JBQWtCLGdCQUFnQixPQUFPLHVDQUF1QyxrQ0FBa0Msc0JBQXNCLHdCQUF3QixrQkFBa0IsMkJBQTJCLE9BQU8sa0VBQWtFLGtCQUFrQix3Q0FBd0MsU0FBUyxPQUFPLGdFQUFnRSxrQkFBa0Isd0NBQXdDLFNBQVMsT0FBTyxxQkFBcUIseUJBQXlCLDJCQUEyQixPQUFPLDJEQUEyRCxzQkFBc0Isd0JBQXdCLE9BQU8sNkJBQTZCLGtCQUFrQiwwQkFBMEIsOEJBQThCLE9BQU8sOEJBQThCLGtDQUFrQyxvQkFBb0Isd0JBQXdCLGtCQUFrQixvQ0FBb0MsOEJBQThCLE9BQU8sMkNBQTJDLG9DQUFvQywyQkFBMkIsa0JBQWtCLE9BQU8sdUJBQXVCLHNCQUFzQixnQ0FBZ0MsbUNBQW1DLDZCQUE2QixPQUFPLDBCQUEwQix1QkFBdUIsMkJBQTJCLE9BQU8seUNBQXlDLG9DQUFvQyxpQ0FBaUMsMEJBQTBCLGtCQUFrQixPQUFPLHNCQUFzQixvQkFBb0Isc0JBQXNCLHdCQUF3QixPQUFPLHlCQUF5QixrQ0FBa0MsNEJBQTRCLE9BQU8sZ0ZBQWdGLGtCQUFrQixPQUFPLG1CQUFtQjtBQUNud007QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS9bc2x1Z10uZWUyNWJhMWM1Zjg3Yjk5MDdhNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIlxuaW1wb3J0IFwiLi4vYXNzZXRzL2Nzcy9mb290ZXIuY3NzXCJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuXG4vLyBTdG9yZSBTdHJhcGkgR2xvYmFsIG9iamVjdCBpbiBjb250ZXh0XG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXG4gICAgICAgICAgaHJlZj17Z2V0U3RyYXBpTWVkaWEoZ2xvYmFsLmF0dHJpYnV0ZXMuZmF2aWNvbil9XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Z2xvYmFsLmF0dHJpYnV0ZXN9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuLy8gZ2V0SW5pdGlhbFByb3BzIGRpc2FibGVzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uIGZvciBwYWdlcyB0aGF0IGRvbid0XG4vLyBoYXZlIGdldFN0YXRpY1Byb3BzLiBTbyBhcnRpY2xlLCBjYXRlZ29yeSBhbmQgaG9tZSBwYWdlcyBzdGlsbCBnZXQgU1NHLlxuLy8gSG9wZWZ1bGx5IHdlIGNhbiByZXBsYWNlIHRoaXMgd2l0aCBnZXRTdGF0aWNQcm9wcyBvbmNlIHRoaXMgaXNzdWUgaXMgZml4ZWQ6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvZGlzY3Vzc2lvbnMvMTA5NDlcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgLy8gQ2FsbHMgcGFnZSdzIGBnZXRJbml0aWFsUHJvcHNgIGFuZCBmaWxscyBgYXBwUHJvcHMucGFnZVByb3BzYFxuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAvLyBGZXRjaCBnbG9iYWwgc2l0ZSBzZXR0aW5ncyBmcm9tIFN0cmFwaVxuICBjb25zdCBnbG9iYWxSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9nbG9iYWxcIiwge1xuICAgIHBvcHVsYXRlOiB7XG4gICAgICBmYXZpY29uOiBcIipcIixcbiAgICAgIGRlZmF1bHRTZW86IHtcbiAgICAgICAgcG9wdWxhdGU6IFwiKlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuICAvLyBQYXNzIHRoZSBkYXRhIHRvIG91ciBwYWdlIHZpYSBwcm9wc1xuICByZXR1cm4geyAuLi5hcHBQcm9wcywgcGFnZVByb3BzOiB7IGdsb2JhbDogZ2xvYmFsUmVzLmRhdGEgfSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZm9vdGVyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9mb290ZXIuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9mb290ZXIuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuICBmb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcclxcbiAgICBjb2xvcjogI2JiYjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgZm9vdGVyIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZWVlO1xcclxcbiAgfVxcclxcbiAgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOnllbGxvdyAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgLmZ0LXRpdGxlIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWVycml3ZWF0aGVyXFxcIiwgc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC8qIFN0aWNrcyBmb290ZXIgdG8gYm90dG9tICovXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZmxleDogMSAxO1xcclxcbiAgfVxcclxcbiAgLyogRm9vdGVyIG1haW4gKi9cXHJcXG4gIC5mdC1tYWluIHtcXHJcXG4gICAgcGFkZGluZzogMS4yNXJlbSAxLjg3NXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjkuODEyNXJlbSAvKiA0NzdweCAqLykge1xcclxcbiAgICAuZnQtbWFpbiB7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzcuNXJlbSAvKiAxMjQwcHggKi8pIHtcXHJcXG4gICAgLmZ0LW1haW4ge1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuZnQtbWFpbi1pdGVtIHtcXHJcXG4gICAgcGFkZGluZzogMS4yNXJlbTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMi41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBGb290ZXIgbWFpbiB8IE5ld3NsZXR0ZXIgZm9ybSAqL1xcclxcbiAgZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG4gIGlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0ge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxyXFxuICB9XFxyXFxuICBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGQxODg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMC42MjVyZW0gMC45Mzc1cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxyXFxuICB9XFxyXFxuICAvKiBGb290ZXIgc29jaWFsICovXFxyXFxuICAuZnQtc29jaWFsIHtcXHJcXG4gICAgcGFkZGluZzogMCAxLjg3NXJlbSAxLjI1cmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gIH1cXHJcXG4gIC5mdC1zb2NpYWwtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggIzc3NyBzb2xpZDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XFxyXFxuICB9XFxyXFxuICAuZnQtc29jaWFsLWxpc3QgbGkge1xcclxcbiAgICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgfVxcclxcbiAgLyogRm9vdGVyIGxlZ2FsICovXFxyXFxuICAuZnQtbGVnYWwge1xcclxcbiAgICBwYWRkaW5nOiAwLjkzNzVyZW0gMS44NzVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gIH1cXHJcXG4gIC5mdC1sZWdhbC1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG4gIC5mdC1sZWdhbC1saXN0IGxpIHtcXHJcXG4gICAgbWFyZ2luOiAwLjEyNXJlbSAwLjYyNXJlbTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIH1cXHJcXG4gIC8qIG9uZSBiZWZvcmUgdGhlIGxhc3QgY2hpbGQgKi9cXHJcXG4gIC5mdC1sZWdhbC1saXN0IGxpOm50aC1sYXN0LWNoaWxkKDIpIHtcXHJcXG4gICAgICBmbGV4OiAxIDE7XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2Fzc2V0cy9jc3MvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7RUFDYjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQix3QkFBd0I7RUFDMUI7RUFDQSw0QkFBNEI7RUFDNUI7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsU0FBTztFQUNUO0VBQ0EsZ0JBQWdCO0VBQ2hCO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0U7TUFDRSw2QkFBNkI7SUFDL0I7RUFDRjtFQUNBO0lBQ0U7TUFDRSw2QkFBNkI7SUFDL0I7RUFDRjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQSxrQ0FBa0M7RUFDbEM7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsU0FBUztJQUNULGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IscUJBQXFCO0VBQ3ZCO0VBQ0Esa0JBQWtCO0VBQ2xCO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtFQUNBLGlCQUFpQjtFQUNqQjtJQUNFLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLFNBQVM7RUFDWDtFQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCO0VBQ0EsOEJBQThCO0VBQzlCO01BQ0ksU0FBTztFQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuICB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIH1cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxyXFxuICAgIGNvbG9yOiAjYmJiO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICBmb290ZXIgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNlZWU7XFxyXFxuICB9XFxyXFxuICBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6eWVsbG93ICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuICAuZnQtdGl0bGUge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNZXJyaXdlYXRoZXJcXFwiLCBzZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjM3NXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgfVxcclxcbiAgLyogU3RpY2tzIGZvb3RlciB0byBib3R0b20gKi9cXHJcXG4gIGJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbiAgLyogRm9vdGVyIG1haW4gKi9cXHJcXG4gIC5mdC1tYWluIHtcXHJcXG4gICAgcGFkZGluZzogMS4yNXJlbSAxLjg3NXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjkuODEyNXJlbSAvKiA0NzdweCAqLykge1xcclxcbiAgICAuZnQtbWFpbiB7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzcuNXJlbSAvKiAxMjQwcHggKi8pIHtcXHJcXG4gICAgLmZ0LW1haW4ge1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuZnQtbWFpbi1pdGVtIHtcXHJcXG4gICAgcGFkZGluZzogMS4yNXJlbTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMi41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBGb290ZXIgbWFpbiB8IE5ld3NsZXR0ZXIgZm9ybSAqL1xcclxcbiAgZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG4gIGlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0ge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxyXFxuICB9XFxyXFxuICBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGQxODg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMC42MjVyZW0gMC45Mzc1cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjMxMjVyZW07XFxyXFxuICB9XFxyXFxuICAvKiBGb290ZXIgc29jaWFsICovXFxyXFxuICAuZnQtc29jaWFsIHtcXHJcXG4gICAgcGFkZGluZzogMCAxLjg3NXJlbSAxLjI1cmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gIH1cXHJcXG4gIC5mdC1zb2NpYWwtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggIzc3NyBzb2xpZDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XFxyXFxuICB9XFxyXFxuICAuZnQtc29jaWFsLWxpc3QgbGkge1xcclxcbiAgICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgfVxcclxcbiAgLyogRm9vdGVyIGxlZ2FsICovXFxyXFxuICAuZnQtbGVnYWwge1xcclxcbiAgICBwYWRkaW5nOiAwLjkzNzVyZW0gMS44NzVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gIH1cXHJcXG4gIC5mdC1sZWdhbC1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG4gIC5mdC1sZWdhbC1saXN0IGxpIHtcXHJcXG4gICAgbWFyZ2luOiAwLjEyNXJlbSAwLjYyNXJlbTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIH1cXHJcXG4gIC8qIG9uZSBiZWZvcmUgdGhlIGxhc3QgY2hpbGQgKi9cXHJcXG4gIC5mdC1sZWdhbC1saXN0IGxpOm50aC1sYXN0LWNoaWxkKDIpIHtcXHJcXG4gICAgICBmbGV4OiAxO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9