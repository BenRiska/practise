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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar CampaignsList = function(param) {\n    var campaigns = param.campaigns, filter = param.filter;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"mx-auto\",\n        __source: {\n            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n            lineNumber: 4,\n            columnNumber: 8\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                    lineNumber: 5,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                    lineNumber: 6,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    __source: {\n                        fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                        lineNumber: 7,\n                        columnNumber: 15\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                style: {\n                    borderBottom: \"2px solid rgba(243, 244, 246, 1)\"\n                },\n                className: \"flex p-4 items-center\",\n                __source: {\n                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: 0.3\n                        },\n                        className: \"font-semibold\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 10,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Name\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: 0.3\n                        },\n                        className: \"font-semibold\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Type\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: 0.3\n                        },\n                        className: \"font-semibold\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Leads\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: 0.3\n                        },\n                        className: \"font-semibold\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Cost\"\n                    })\n                ]\n            }),\n            campaigns.filter(function(campaign) {\n                return filter.length > 0 ? campaign.name.toLowerCase().includes(filter.toLowerCase()) : true;\n            }).map(function(campaign) {\n                var ref;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/campaigns/\".concat(campaign.name),\n                    __source: {\n                        fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 160\n                    },\n                    __self: _this1,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex flex-1 p-4 items-center relative text-sm lead-item\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 15\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    flex: 0.3\n                                },\n                                className: \"font-lighter\",\n                                __source: {\n                                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: campaign.name\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    flex: 0.3\n                                },\n                                className: \"font-lighter\",\n                                __source: {\n                                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: campaign.type\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    flex: 0.3\n                                },\n                                className: \"font-lighter\",\n                                __source: {\n                                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: (ref = campaign.companyCampaigns) === null || ref === void 0 ? void 0 : ref.length\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    flex: 0.3\n                                },\n                                className: \"font-lighter\",\n                                __source: {\n                                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: campaign.campaignCost ? \"\\xa3\".concat((campaign.campaignCost * campaign.companyCampaigns.length).toFixed(2)) : \"N/A\"\n                            })\n                        ]\n                    })\n                }));\n            })\n        ]\n    }));\n};\n_c = CampaignsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignsList);\nvar _c;\n$RefreshReg$(_c, \"CampaignsList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNPLGdCQUFnQixDQUFDTixNQUFNLEVBQUVRLE9BQU8sQ0FBQyxDQUFDLEtBQ3hFLENBQUs7Ozs7Ozs7O0FBS3pCLENBQUM7S0F4QktuQixhQUFhO0FBMEJuQiwrREFBZUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhbXBhaWduc0xpc3QudHN4PzViMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBDYW1wYWlnbnNMaXN0ID0gKHtjYW1wYWlnbnMsIGZpbHRlcn06IGFueSkgPT4ge1xucmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JvcmRlckJvdHRvbTogXCIycHggc29saWQgcmdiYSgyNDMsIDI0NCwgMjQ2LCAxKVwifX0gY2xhc3NOYW1lPVwiZmxleCBwLTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDAuM319IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5OYW1lPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDAuM319IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5UeXBlPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDAuM319IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5MZWFkczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwLjN9fSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Q29zdDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Y2FtcGFpZ25zLmZpbHRlcigoY2FtcGFpZ246IGFueSkgPT4gZmlsdGVyLmxlbmd0aCA+IDAgPyBjYW1wYWlnbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpIDogdHJ1ZSkubWFwKChjYW1wYWlnbjogYW55KSA9PiA8TGluayBocmVmPXtgL2NhbXBhaWducy8ke2NhbXBhaWduLm5hbWV9YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgcC00IGl0ZW1zLWNlbnRlciByZWxhdGl2ZSB0ZXh0LXNtIGxlYWQtaXRlbVwiPiBcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMC4zfX0gY2xhc3NOYW1lPVwiZm9udC1saWdodGVyXCI+e2NhbXBhaWduLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDAuM319IGNsYXNzTmFtZT1cImZvbnQtbGlnaHRlclwiPntjYW1wYWlnbi50eXBlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwLjN9fSBjbGFzc05hbWU9XCJmb250LWxpZ2h0ZXJcIj57Y2FtcGFpZ24uY29tcGFueUNhbXBhaWducz8ubGVuZ3RofTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwLjN9fSBjbGFzc05hbWU9XCJmb250LWxpZ2h0ZXJcIj57Y2FtcGFpZ24uY2FtcGFpZ25Db3N0XG4gICAgICAgICAgICAgICAgICA/IGDCoyR7KGNhbXBhaWduLmNhbXBhaWduQ29zdCAqIGNhbXBhaWduLmNvbXBhbnlDYW1wYWlnbnMubGVuZ3RoKS50b0ZpeGVkKDIpfWBcbiAgICAgICAgICAgICAgICAgIDogXCJOL0FcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+KX1cbiAgICAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25zTGlzdCJdLCJuYW1lcyI6WyJMaW5rIiwiQ2FtcGFpZ25zTGlzdCIsImNhbXBhaWducyIsImZpbHRlciIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInN0eWxlIiwiYm9yZGVyQm90dG9tIiwiZmxleCIsImNhbXBhaWduIiwibGVuZ3RoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXAiLCJocmVmIiwiY29tcGFueUNhbXBhaWducyIsImNhbXBhaWduQ29zdCIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CampaignsList.tsx\n");

/***/ })

});