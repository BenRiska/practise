"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns",{

/***/ "./components/CampaignsList.tsx":
/*!**************************************!*\
  !*** ./components/CampaignsList.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar CampaignsList = function(param) {\n    var campaigns = param.campaigns, filter = param.filter;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"mx-auto mt-28 shadow\",\n        __source: {\n            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n            lineNumber: 4,\n            columnNumber: 8\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                style: {\n                    borderBottom: \"1px solid rgba(243, 244, 246, 1)\"\n                },\n                className: \"flex px-4 pb-6 pt-8 items-center\",\n                __source: {\n                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                    lineNumber: 5,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: 0.3\n                        },\n                        className: \"font-semibold\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 6,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Name\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: 0.3\n                        },\n                        className: \"font-semibold\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 7,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Type\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: 0.3\n                        },\n                        className: \"font-semibold\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 8,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Leads\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: 0.3\n                        },\n                        className: \"font-semibold\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 9,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Cost\"\n                    })\n                ]\n            }),\n            campaigns.filter(function(campaign) {\n                return filter.length > 0 ? campaign.name.toLowerCase().includes(filter.toLowerCase()) : true;\n            }).map(function(campaign) {\n                var ref;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/campaigns/\".concat(campaign.name),\n                    __source: {\n                        fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 160\n                    },\n                    __self: _this1,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex flex-1 p-4 items-center relative text-sm lead-item\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 15\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    flex: 0.3\n                                },\n                                className: \"font-lighter\",\n                                __source: {\n                                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                                    lineNumber: 13,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: campaign.name\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    flex: 0.3\n                                },\n                                className: \"font-lighter\",\n                                __source: {\n                                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: campaign.type\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    flex: 0.3\n                                },\n                                className: \"font-lighter\",\n                                __source: {\n                                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                                    lineNumber: 15,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: (ref = campaign.companyCampaigns) === null || ref === void 0 ? void 0 : ref.length\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    flex: 0.3\n                                },\n                                className: \"font-lighter\",\n                                __source: {\n                                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                                    lineNumber: 16,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: campaign.campaignCost ? \"\\xa3\".concat((campaign.campaignCost * campaign.companyCampaigns.length).toFixed(2)) : \"N/A\"\n                            })\n                        ]\n                    })\n                }));\n            })\n        ]\n    }));\n};\n_c = CampaignsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignsList);\nvar _c;\n$RefreshReg$(_c, \"CampaignsList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtBQXNCbkIsK0RBQWVBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1wYWlnbnNMaXN0LnRzeD81YjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgQ2FtcGFpZ25zTGlzdCA9ICh7Y2FtcGFpZ25zLCBmaWx0ZXJ9OiBhbnkpID0+IHtcbnJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbXQtMjggc2hhZG93XCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDI0MywgMjQ0LCAyNDYsIDEpXCJ9fSBjbGFzc05hbWU9XCJmbGV4IHB4LTQgcGItNiBwdC04IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwLjN9fSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+TmFtZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwLjN9fSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+VHlwZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwLjN9fSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+TGVhZHM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMC4zfX0gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkNvc3Q8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2NhbXBhaWducy5maWx0ZXIoKGNhbXBhaWduOiBhbnkpID0+IGZpbHRlci5sZW5ndGggPiAwID8gY2FtcGFpZ24ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci50b0xvd2VyQ2FzZSgpKSA6IHRydWUpLm1hcCgoY2FtcGFpZ246IGFueSkgPT4gPExpbmsgaHJlZj17YC9jYW1wYWlnbnMvJHtjYW1wYWlnbi5uYW1lfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIHAtNCBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgdGV4dC1zbSBsZWFkLWl0ZW1cIj4gXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDAuM319IGNsYXNzTmFtZT1cImZvbnQtbGlnaHRlclwiPntjYW1wYWlnbi5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwLjN9fSBjbGFzc05hbWU9XCJmb250LWxpZ2h0ZXJcIj57Y2FtcGFpZ24udHlwZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMC4zfX0gY2xhc3NOYW1lPVwiZm9udC1saWdodGVyXCI+e2NhbXBhaWduLmNvbXBhbnlDYW1wYWlnbnM/Lmxlbmd0aH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMC4zfX0gY2xhc3NOYW1lPVwiZm9udC1saWdodGVyXCI+e2NhbXBhaWduLmNhbXBhaWduQ29zdFxuICAgICAgICAgICAgICAgICAgPyBgwqMkeyhjYW1wYWlnbi5jYW1wYWlnbkNvc3QgKiBjYW1wYWlnbi5jb21wYW55Q2FtcGFpZ25zLmxlbmd0aCkudG9GaXhlZCgyKX1gXG4gICAgICAgICAgICAgICAgICA6IFwiTi9BXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPil9XG4gICAgICAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduc0xpc3QiXSwibmFtZXMiOlsiTGluayIsIkNhbXBhaWduc0xpc3QiLCJjYW1wYWlnbnMiLCJmaWx0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlckJvdHRvbSIsImZsZXgiLCJjYW1wYWlnbiIsImxlbmd0aCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWFwIiwiaHJlZiIsInR5cGUiLCJjb21wYW55Q2FtcGFpZ25zIiwiY2FtcGFpZ25Db3N0IiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CampaignsList.tsx\n");

/***/ })

});