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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar CampaignsList = function(param) {\n    var campaigns = param.campaigns, filter = param.filter;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"mx-auto\",\n        __source: {\n            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n            lineNumber: 4,\n            columnNumber: 8\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"flex py-2 space-x-8\",\n                style: {\n                    borderBottom: \"2px solid rgba(243, 244, 246, 1)\"\n                },\n                __source: {\n                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                    lineNumber: 5,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"text-red-400 cursor-pointer\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 6,\n                            columnNumber: 15\n                        },\n                        __self: _this,\n                        children: \"All\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"text-gray-200 cursor-pointer\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 7,\n                            columnNumber: 15\n                        },\n                        __self: _this,\n                        children: \"Mail\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"text-gray-400 cursor-pointer\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 8,\n                            columnNumber: 15\n                        },\n                        __self: _this,\n                        children: \"Lemlist\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"mb-2 mt-6\",\n                __source: {\n                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    value: filter,\n                    placeholder: \"Filter by name..\",\n                    className: \"w-full p-2\",\n                    style: {\n                        border: \"2px solid rgba(243, 244, 246, 1)\"\n                    },\n                    type: \"text\",\n                    __source: {\n                        fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 15\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                style: {\n                    borderBottom: \"2px solid rgba(243, 244, 246, 1)\"\n                },\n                className: \"flex py-4 items-center\",\n                __source: {\n                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: 0.3\n                        },\n                        className: \"font-semibold\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Name\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: 0.3\n                        },\n                        className: \"font-semibold\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Type\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: 0.3\n                        },\n                        className: \"font-semibold\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Leads\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        style: {\n                            flex: 0.3\n                        },\n                        className: \"font-semibold\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Cost\"\n                    })\n                ]\n            }),\n            campaigns.filter(function(campaign) {\n                return filter.length > 0 ? campaign.name.toLowerCase().includes(filter.toLowerCase()) : true;\n            }).map(function(campaign) {\n                var ref;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/campaigns/\".concat(campaign.name),\n                    __source: {\n                        fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 160\n                    },\n                    __self: _this1,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex flex-1 py-4 items-center relative text-sm lead-item\",\n                        __source: {\n                            fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 15\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    flex: 0.3\n                                },\n                                className: \"font-lighter\",\n                                __source: {\n                                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: campaign.name\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    flex: 0.3\n                                },\n                                className: \"font-lighter\",\n                                __source: {\n                                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: campaign.type\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    flex: 0.3\n                                },\n                                className: \"font-lighter\",\n                                __source: {\n                                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: (ref = campaign.companyCampaigns) === null || ref === void 0 ? void 0 : ref.length\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    flex: 0.3\n                                },\n                                className: \"font-lighter\",\n                                __source: {\n                                    fileName: \"/Users/ben/Desktop/ssgm/components/CampaignsList.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: campaign.campaignCost ? \"\\xa3\".concat((campaign.campaignCost * campaign.companyCampaigns.length).toFixed(2)) : \"N/A\"\n                            })\n                        ]\n                    })\n                }));\n            })\n        ]\n    }));\n};\n_c = CampaignsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignsList);\nvar _c;\n$RefreshReg$(_c, \"CampaignsList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbXBhaWduc0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEI7O0FBRTVCLEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQVEsUUFBc0IsQ0FBQztRQUE3QkMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTs7SUFDekMsTUFBTSx1RUFBRUMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7a0ZBQ2xCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBcUI7Z0JBQUNDLEtBQUssRUFBRSxDQUFDQztvQkFBQUEsWUFBWSxFQUFFLENBQWtDO2dCQUFBLENBQUM7Ozs7Ozs7O3lGQUMzRkMsQ0FBQzt3QkFBQ0gsU0FBUyxFQUFDLENBQTZCOzs7Ozs7O2tDQUFDLENBQUc7O3lGQUM3Q0csQ0FBQzt3QkFBQ0gsU0FBUyxFQUFDLENBQThCOzs7Ozs7O2tDQUFDLENBQUk7O3lGQUMvQ0csQ0FBQzt3QkFBQ0gsU0FBUyxFQUFDLENBQThCOzs7Ozs7O2tDQUFDLENBQU87Ozs7aUZBRXBERCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7OzsrRkFDdkJJLENBQUs7b0JBQUNDLEtBQUssRUFBRVAsTUFBTTtvQkFBRVEsV0FBVyxFQUFDLENBQWtCO29CQUFDTixTQUFTLEVBQUMsQ0FBWTtvQkFBQ0MsS0FBSyxFQUFFLENBQUNNO3dCQUFBQSxNQUFNLEVBQUUsQ0FBa0M7b0JBQUEsQ0FBQztvQkFBRUMsSUFBSSxFQUFDLENBQU07Ozs7Ozs7OztrRkFFN0lULENBQUc7Z0JBQUNFLEtBQUssRUFBRSxDQUFDQztvQkFBQUEsWUFBWSxFQUFFLENBQWtDO2dCQUFBLENBQUM7Z0JBQUVGLFNBQVMsRUFBQyxDQUF3Qjs7Ozs7Ozs7eUZBQzdGRCxDQUFHO3dCQUFDRSxLQUFLLEVBQUUsQ0FBQ1E7NEJBQUFBLElBQUksRUFBRSxHQUFHO3dCQUFBLENBQUM7d0JBQUVULFNBQVMsRUFBQyxDQUFlOzs7Ozs7O2tDQUFDLENBQUk7O3lGQUN0REQsQ0FBRzt3QkFBQ0UsS0FBSyxFQUFFLENBQUNROzRCQUFBQSxJQUFJLEVBQUUsR0FBRzt3QkFBQSxDQUFDO3dCQUFFVCxTQUFTLEVBQUMsQ0FBZTs7Ozs7OztrQ0FBQyxDQUFJOzt5RkFDdERELENBQUc7d0JBQUNFLEtBQUssRUFBRSxDQUFDUTs0QkFBQUEsSUFBSSxFQUFFLEdBQUc7d0JBQUEsQ0FBQzt3QkFBRVQsU0FBUyxFQUFDLENBQWU7Ozs7Ozs7a0NBQUMsQ0FBSzs7eUZBQ3ZERCxDQUFHO3dCQUFDRSxLQUFLLEVBQUUsQ0FBQ1E7NEJBQUFBLElBQUksRUFBRSxHQUFHO3dCQUFBLENBQUM7d0JBQUVULFNBQVMsRUFBQyxDQUFlOzs7Ozs7O2tDQUFDLENBQUk7Ozs7WUFFMURILFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBUFksUUFBYTtnQkFBS1osTUFBTSxDQUFOQSxNQUFNLENBQUNhLE1BQU0sR0FBRyxDQUFDLEdBQUdELFFBQVEsQ0FBQ0UsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2hCLE1BQU0sQ0FBQ2UsV0FBVyxNQUFNLElBQUk7ZUFBRUUsR0FBRyxDQUFDLFFBQVEsQ0FBUEwsUUFBYTtvQkFJdkZBLEdBQXlCOzRGQUpvRWYsa0RBQUk7b0JBQUNxQixJQUFJLEVBQUcsQ0FBVyxhQUFnQixPQUFkTixRQUFRLENBQUNFLElBQUk7Ozs7Ozs7b0dBQ3ZMYixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBMEQ7Ozs7Ozs7O2lHQUN0RUQsQ0FBRztnQ0FBQ0UsS0FBSyxFQUFFLENBQUNRO29DQUFBQSxJQUFJLEVBQUUsR0FBRztnQ0FBQSxDQUFDO2dDQUFFVCxTQUFTLEVBQUMsQ0FBYzs7Ozs7OzswQ0FBRVUsUUFBUSxDQUFDRSxJQUFJOztpR0FDL0RiLENBQUc7Z0NBQUNFLEtBQUssRUFBRSxDQUFDUTtvQ0FBQUEsSUFBSSxFQUFFLEdBQUc7Z0NBQUEsQ0FBQztnQ0FBRVQsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7MENBQUVVLFFBQVEsQ0FBQ0YsSUFBSTs7aUdBQy9EVCxDQUFHO2dDQUFDRSxLQUFLLEVBQUUsQ0FBQ1E7b0NBQUFBLElBQUksRUFBRSxHQUFHO2dDQUFBLENBQUM7Z0NBQUVULFNBQVMsRUFBQyxDQUFjOzs7Ozs7OzJDQUFFVSxHQUF5QixHQUF6QkEsUUFBUSxDQUFDTyxnQkFBZ0IsY0FBekJQLEdBQXlCLEtBQXpCQSxJQUFJLENBQUpBLENBQWlDLEdBQWpDQSxJQUFJLENBQUpBLENBQWlDLEdBQWpDQSxHQUF5QixDQUFFQyxNQUFNOztpR0FDbkZaLENBQUc7Z0NBQUNFLEtBQUssRUFBRSxDQUFDUTtvQ0FBQUEsSUFBSSxFQUFFLEdBQUc7Z0NBQUEsQ0FBQztnQ0FBRVQsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7MENBQUVVLFFBQVEsQ0FBQ1EsWUFBWSxHQUNuRSxDQUFDLE1BQXdFLFFBQXJFUixRQUFRLENBQUNRLFlBQVksR0FBR1IsUUFBUSxDQUFDTyxnQkFBZ0IsQ0FBQ04sTUFBTSxFQUFFUSxPQUFPLENBQUMsQ0FBQyxLQUN4RSxDQUFLOzs7Ozs7OztBQUt6QixDQUFDO0tBNUJLdkIsYUFBYTtBQThCbkIsK0RBQWVBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1wYWlnbnNMaXN0LnRzeD81YjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgQ2FtcGFpZ25zTGlzdCA9ICh7Y2FtcGFpZ25zLCBmaWx0ZXJ9OiBhbnkpID0+IHtcbnJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweS0yIHNwYWNlLXgtOFwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCByZ2JhKDI0MywgMjQ0LCAyNDYsIDEpXCJ9fT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwIGN1cnNvci1wb2ludGVyXCI+QWxsPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwIGN1cnNvci1wb2ludGVyXCI+TWFpbDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBjdXJzb3ItcG9pbnRlclwiPkxlbWxpc3Q8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBtdC02XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17ZmlsdGVyfSBwbGFjZWhvbGRlcj1cIkZpbHRlciBieSBuYW1lLi5cIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yXCIgc3R5bGU9e3tib3JkZXI6IFwiMnB4IHNvbGlkIHJnYmEoMjQzLCAyNDQsIDI0NiwgMSlcIn19IHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCByZ2JhKDI0MywgMjQ0LCAyNDYsIDEpXCJ9fSBjbGFzc05hbWU9XCJmbGV4IHB5LTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDAuM319IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5OYW1lPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDAuM319IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5UeXBlPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDAuM319IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5MZWFkczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwLjN9fSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Q29zdDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Y2FtcGFpZ25zLmZpbHRlcigoY2FtcGFpZ246IGFueSkgPT4gZmlsdGVyLmxlbmd0aCA+IDAgPyBjYW1wYWlnbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpIDogdHJ1ZSkubWFwKChjYW1wYWlnbjogYW55KSA9PiA8TGluayBocmVmPXtgL2NhbXBhaWducy8ke2NhbXBhaWduLm5hbWV9YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgcHktNCBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgdGV4dC1zbSBsZWFkLWl0ZW1cIj4gXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDAuM319IGNsYXNzTmFtZT1cImZvbnQtbGlnaHRlclwiPntjYW1wYWlnbi5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwLjN9fSBjbGFzc05hbWU9XCJmb250LWxpZ2h0ZXJcIj57Y2FtcGFpZ24udHlwZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMC4zfX0gY2xhc3NOYW1lPVwiZm9udC1saWdodGVyXCI+e2NhbXBhaWduLmNvbXBhbnlDYW1wYWlnbnM/Lmxlbmd0aH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMC4zfX0gY2xhc3NOYW1lPVwiZm9udC1saWdodGVyXCI+e2NhbXBhaWduLmNhbXBhaWduQ29zdFxuICAgICAgICAgICAgICAgICAgPyBgwqMkeyhjYW1wYWlnbi5jYW1wYWlnbkNvc3QgKiBjYW1wYWlnbi5jb21wYW55Q2FtcGFpZ25zLmxlbmd0aCkudG9GaXhlZCgyKX1gXG4gICAgICAgICAgICAgICAgICA6IFwiTi9BXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPil9XG4gICAgICAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduc0xpc3QiXSwibmFtZXMiOlsiTGluayIsIkNhbXBhaWduc0xpc3QiLCJjYW1wYWlnbnMiLCJmaWx0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlckJvdHRvbSIsInAiLCJpbnB1dCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJib3JkZXIiLCJ0eXBlIiwiZmxleCIsImNhbXBhaWduIiwibGVuZ3RoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXAiLCJocmVmIiwiY29tcGFueUNhbXBhaWducyIsImNhbXBhaWduQ29zdCIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CampaignsList.tsx\n");

/***/ })

});