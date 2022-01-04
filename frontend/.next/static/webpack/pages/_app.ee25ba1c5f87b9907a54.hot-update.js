self["webpackHotUpdate_N_E"]("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2Nzcy9mb290ZXIuY3NzP2ZlMTIiLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9jc3MvZm9vdGVyLmNzcyJdLCJuYW1lcyI6WyJHbG9iYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2xvYmFsIiwiZ2V0U3RyYXBpTWVkaWEiLCJhdHRyaWJ1dGVzIiwiZmF2aWNvbiIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIkFwcCIsImFwcFByb3BzIiwiZmV0Y2hBUEkiLCJwb3B1bGF0ZSIsImRlZmF1bHRTZW8iLCJnbG9iYWxSZXMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDTyxJQUFNQSxhQUFhLGdCQUFHQyxvREFBYSxDQUFDLEVBQUQsQ0FBbkM7O0FBRVAsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBOEI7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUFBLE1BQ2xDQyxNQURrQyxHQUN2QkQsU0FEdUIsQ0FDbENDLE1BRGtDO0FBRzFDLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUNFLFdBQUcsRUFBQyxlQUROO0FBRUUsWUFBSSxFQUFFQywyREFBYyxDQUFDRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0JDLE9BQW5CO0FBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSw4REFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixXQUFLLEVBQUVILE1BQU0sQ0FBQ0UsVUFBdEM7QUFBQSw2QkFDRSw4REFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQSxrQkFERjtBQWFELENBaEJELEMsQ0FrQkE7QUFDQTtBQUNBO0FBQ0E7OztLQXJCTUYsSzs7QUFzQk5BLEtBQUssQ0FBQ08sZUFBTjtBQUFBLHNUQUF3QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVDQywrREFBQSxDQUFvQkQsR0FBcEIsQ0FGRDs7QUFBQTtBQUVoQkUsb0JBRmdCO0FBQUE7QUFBQSxtQkFJRUMsa0RBQVEsQ0FBQyxTQUFELEVBQVk7QUFDMUNDLHNCQUFRLEVBQUU7QUFDUk4sdUJBQU8sRUFBRSxHQUREO0FBRVJPLDBCQUFVLEVBQUU7QUFDVkQsMEJBQVEsRUFBRTtBQURBO0FBRko7QUFEZ0MsYUFBWixDQUpWOztBQUFBO0FBSWhCRSxxQkFKZ0I7QUFBQSw2RUFhVkosUUFiVTtBQWFBUix1QkFBUyxFQUFFO0FBQUVDLHNCQUFNLEVBQUVXLFNBQVMsQ0FBQ0M7QUFBcEI7QUFiWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQkEsK0RBQWVmLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREEsVUFBVSxtQkFBTyxDQUFDLHVOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQyxtYUFBOE07O0FBRWhQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSxtYUFBOE07QUFDcE47QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxtYUFBOE07O0FBRXhPOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNrRztBQUNsRyw4QkFBOEIseUZBQTJCO0FBQ3pEO0FBQ0EsNkNBQTZDLHVDQUF1Qyx1Q0FBdUMsMENBQTBDLGtCQUFrQixtQkFBbUIsT0FBTyxVQUFVLHlCQUF5Qix3QkFBd0IsT0FBTyxjQUFjLCtCQUErQixvQkFBb0IseUJBQXlCLHdCQUF3QixrQkFBa0Isb0JBQW9CLE9BQU8sZ0JBQWdCLDhCQUE4QixvQkFBb0IsT0FBTyxlQUFlLGdDQUFnQyxPQUFPLGlCQUFpQixvQkFBb0IsNkNBQTZDLDRCQUE0QixpQ0FBaUMsT0FBTywrQ0FBK0Msc0JBQXNCLDBCQUEwQiwrQkFBK0IsT0FBTyxrQkFBa0Isa0JBQWtCLE9BQU8sdUNBQXVDLGtDQUFrQyxzQkFBc0Isd0JBQXdCLGtCQUFrQiwyQkFBMkIsT0FBTyxrRUFBa0Usa0JBQWtCLHdDQUF3QyxTQUFTLE9BQU8sZ0VBQWdFLGtCQUFrQix3Q0FBd0MsU0FBUyxPQUFPLHFCQUFxQix5QkFBeUIsMkJBQTJCLE9BQU8sMkRBQTJELHNCQUFzQix3QkFBd0IsT0FBTyw2QkFBNkIsa0JBQWtCLDBCQUEwQiw4QkFBOEIsT0FBTyw4QkFBOEIsa0NBQWtDLG9CQUFvQix3QkFBd0Isa0JBQWtCLG9DQUFvQyw4QkFBOEIsT0FBTywyQ0FBMkMsb0NBQW9DLDJCQUEyQixrQkFBa0IsT0FBTyx1QkFBdUIsc0JBQXNCLGdDQUFnQyxtQ0FBbUMsNkJBQTZCLE9BQU8sMEJBQTBCLHVCQUF1QiwyQkFBMkIsT0FBTyx5Q0FBeUMsb0NBQW9DLGlDQUFpQywwQkFBMEIsa0JBQWtCLE9BQU8sc0JBQXNCLG9CQUFvQixzQkFBc0Isd0JBQXdCLE9BQU8seUJBQXlCLGtDQUFrQyw0QkFBNEIsT0FBTyxnRkFBZ0Ysb0JBQW9CLE9BQU8sT0FBTyxzRkFBc0YsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSw0QkFBNEIsK0JBQStCLDBDQUEwQyxrQkFBa0IsbUJBQW1CLE9BQU8sVUFBVSx5QkFBeUIsd0JBQXdCLE9BQU8sY0FBYywrQkFBK0Isb0JBQW9CLHlCQUF5Qix3QkFBd0Isa0JBQWtCLG9CQUFvQixPQUFPLGdCQUFnQiw4QkFBOEIsb0JBQW9CLE9BQU8sZUFBZSxnQ0FBZ0MsT0FBTyxpQkFBaUIsb0JBQW9CLDZDQUE2Qyw0QkFBNEIsaUNBQWlDLE9BQU8sK0NBQStDLHNCQUFzQiwwQkFBMEIsK0JBQStCLE9BQU8sa0JBQWtCLGdCQUFnQixPQUFPLHVDQUF1QyxrQ0FBa0Msc0JBQXNCLHdCQUF3QixrQkFBa0IsMkJBQTJCLE9BQU8sa0VBQWtFLGtCQUFrQix3Q0FBd0MsU0FBUyxPQUFPLGdFQUFnRSxrQkFBa0Isd0NBQXdDLFNBQVMsT0FBTyxxQkFBcUIseUJBQXlCLDJCQUEyQixPQUFPLDJEQUEyRCxzQkFBc0Isd0JBQXdCLE9BQU8sNkJBQTZCLGtCQUFrQiwwQkFBMEIsOEJBQThCLE9BQU8sOEJBQThCLGtDQUFrQyxvQkFBb0Isd0JBQXdCLGtCQUFrQixvQ0FBb0MsOEJBQThCLE9BQU8sMkNBQTJDLG9DQUFvQywyQkFBMkIsa0JBQWtCLE9BQU8sdUJBQXVCLHNCQUFzQixnQ0FBZ0MsbUNBQW1DLDZCQUE2QixPQUFPLDBCQUEwQix1QkFBdUIsMkJBQTJCLE9BQU8seUNBQXlDLG9DQUFvQyxpQ0FBaUMsMEJBQTBCLGtCQUFrQixPQUFPLHNCQUFzQixvQkFBb0Isc0JBQXNCLHdCQUF3QixPQUFPLHlCQUF5QixrQ0FBa0MsNEJBQTRCLE9BQU8sZ0ZBQWdGLGtCQUFrQixPQUFPLG1CQUFtQjtBQUNud007QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVlMjViYTFjNWY4N2I5OTA3YTU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvZm9vdGVyLmNzc1wiXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcblxuLy8gU3RvcmUgU3RyYXBpIEdsb2JhbCBvYmplY3QgaW4gY29udGV4dFxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBnbG9iYWwgfSA9IHBhZ2VQcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIGhyZWY9e2dldFN0cmFwaU1lZGlhKGdsb2JhbC5hdHRyaWJ1dGVzLmZhdmljb24pfVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2dsb2JhbC5hdHRyaWJ1dGVzfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gYXJ0aWNsZSwgY2F0ZWdvcnkgYW5kIGhvbWUgcGFnZXMgc3RpbGwgZ2V0IFNTRy5cbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIC8vIENhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgLy8gRmV0Y2ggZ2xvYmFsIHNpdGUgc2V0dGluZ3MgZnJvbSBTdHJhcGlcbiAgY29uc3QgZ2xvYmFsUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIsIHtcbiAgICBwb3B1bGF0ZToge1xuICAgICAgZmF2aWNvbjogXCIqXCIsXG4gICAgICBkZWZhdWx0U2VvOiB7XG4gICAgICAgIHBvcHVsYXRlOiBcIipcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbiAgLy8gUGFzcyB0aGUgZGF0YSB0byBvdXIgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWw6IGdsb2JhbFJlcy5kYXRhIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2Zvb3Rlci5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZm9vdGVyLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZm9vdGVyLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG4gIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgfVxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXHJcXG4gICAgY29sb3I6ICNiYmI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIGZvb3RlciBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogI2VlZTtcXHJcXG4gIH1cXHJcXG4gIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjp5ZWxsb3cgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG4gIC5mdC10aXRsZSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1lcnJpd2VhdGhlclxcXCIsIHNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEuMzc1cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42MjVyZW07XFxyXFxuICB9XFxyXFxuICAvKiBTdGlja3MgZm9vdGVyIHRvIGJvdHRvbSAqL1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDEgMTtcXHJcXG4gIH1cXHJcXG4gIC8qIEZvb3RlciBtYWluICovXFxyXFxuICAuZnQtbWFpbiB7XFxyXFxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMS44NzVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI5LjgxMjVyZW0gLyogNDc3cHggKi8pIHtcXHJcXG4gICAgLmZ0LW1haW4ge1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc3LjVyZW0gLyogMTI0MHB4ICovKSB7XFxyXFxuICAgIC5mdC1tYWluIHtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLmZ0LW1haW4taXRlbSB7XFxyXFxuICAgIHBhZGRpbmc6IDEuMjVyZW07XFxyXFxuICAgIG1pbi13aWR0aDogMTIuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogRm9vdGVyIG1haW4gfCBOZXdzbGV0dGVyIGZvcm0gKi9cXHJcXG4gIGZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuICBpbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdIHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjYyNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcclxcbiAgfVxcclxcbiAgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkMTg4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNjI1cmVtIDAuOTM3NXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcclxcbiAgfVxcclxcbiAgLyogRm9vdGVyIHNvY2lhbCAqL1xcclxcbiAgLmZ0LXNvY2lhbCB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMS44NzVyZW0gMS4yNXJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICB9XFxyXFxuICAuZnQtc29jaWFsLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4ICM3Nzcgc29saWQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xcclxcbiAgfVxcclxcbiAgLmZ0LXNvY2lhbC1saXN0IGxpIHtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC8qIEZvb3RlciBsZWdhbCAqL1xcclxcbiAgLmZ0LWxlZ2FsIHtcXHJcXG4gICAgcGFkZGluZzogMC45Mzc1cmVtIDEuODc1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICB9XFxyXFxuICAuZnQtbGVnYWwtbGlzdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuICAuZnQtbGVnYWwtbGlzdCBsaSB7XFxyXFxuICAgIG1hcmdpbjogMC4xMjVyZW0gMC42MjVyZW07XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB9XFxyXFxuICAvKiBvbmUgYmVmb3JlIHRoZSBsYXN0IGNoaWxkICovXFxyXFxuICAuZnQtbGVnYWwtbGlzdCBsaTpudGgtbGFzdC1jaGlsZCgyKSB7XFxyXFxuICAgICAgZmxleDogMSAxO1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hc3NldHMvY3NzL2Zvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0VBQ2I7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsd0JBQXdCO0VBQzFCO0VBQ0EsNEJBQTRCO0VBQzVCO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFNBQU87RUFDVDtFQUNBLGdCQUFnQjtFQUNoQjtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFO01BQ0UsNkJBQTZCO0lBQy9CO0VBQ0Y7RUFDQTtJQUNFO01BQ0UsNkJBQTZCO0lBQy9CO0VBQ0Y7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUEsa0NBQWtDO0VBQ2xDO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7RUFDQTtJQUNFLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLHFCQUFxQjtFQUN2QjtFQUNBLGtCQUFrQjtFQUNsQjtJQUNFLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsU0FBUztFQUNYO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7RUFDQSxpQkFBaUI7RUFDakI7SUFDRSwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixTQUFTO0VBQ1g7RUFDQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtFQUNqQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjtFQUNBLDhCQUE4QjtFQUM5QjtNQUNJLFNBQU87RUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbiAgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuICBmb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcclxcbiAgICBjb2xvcjogI2JiYjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgZm9vdGVyIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZWVlO1xcclxcbiAgfVxcclxcbiAgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOnllbGxvdyAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgLmZ0LXRpdGxlIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWVycml3ZWF0aGVyXFxcIiwgc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC8qIFN0aWNrcyBmb290ZXIgdG8gYm90dG9tICovXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gIH1cXHJcXG4gIC8qIEZvb3RlciBtYWluICovXFxyXFxuICAuZnQtbWFpbiB7XFxyXFxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMS44NzVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI5LjgxMjVyZW0gLyogNDc3cHggKi8pIHtcXHJcXG4gICAgLmZ0LW1haW4ge1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc3LjVyZW0gLyogMTI0MHB4ICovKSB7XFxyXFxuICAgIC5mdC1tYWluIHtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLmZ0LW1haW4taXRlbSB7XFxyXFxuICAgIHBhZGRpbmc6IDEuMjVyZW07XFxyXFxuICAgIG1pbi13aWR0aDogMTIuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogRm9vdGVyIG1haW4gfCBOZXdzbGV0dGVyIGZvcm0gKi9cXHJcXG4gIGZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuICBpbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdIHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjYyNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcclxcbiAgfVxcclxcbiAgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkMTg4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNjI1cmVtIDAuOTM3NXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC4zMTI1cmVtO1xcclxcbiAgfVxcclxcbiAgLyogRm9vdGVyIHNvY2lhbCAqL1xcclxcbiAgLmZ0LXNvY2lhbCB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMS44NzVyZW0gMS4yNXJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICB9XFxyXFxuICAuZnQtc29jaWFsLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4ICM3Nzcgc29saWQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xcclxcbiAgfVxcclxcbiAgLmZ0LXNvY2lhbC1saXN0IGxpIHtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIH1cXHJcXG4gIC8qIEZvb3RlciBsZWdhbCAqL1xcclxcbiAgLmZ0LWxlZ2FsIHtcXHJcXG4gICAgcGFkZGluZzogMC45Mzc1cmVtIDEuODc1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICB9XFxyXFxuICAuZnQtbGVnYWwtbGlzdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuICAuZnQtbGVnYWwtbGlzdCBsaSB7XFxyXFxuICAgIG1hcmdpbjogMC4xMjVyZW0gMC42MjVyZW07XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB9XFxyXFxuICAvKiBvbmUgYmVmb3JlIHRoZSBsYXN0IGNoaWxkICovXFxyXFxuICAuZnQtbGVnYWwtbGlzdCBsaTpudGgtbGFzdC1jaGlsZCgyKSB7XFxyXFxuICAgICAgZmxleDogMTtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==