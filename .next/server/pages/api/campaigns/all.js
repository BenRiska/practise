"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/campaigns/all";
exports.ids = ["pages/api/campaigns/all"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./pages/api/campaigns/all.ts":
/*!************************************!*\
  !*** ./pages/api/campaigns/all.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/prisma */ \"./services/prisma.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const campaigns = await _services_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].campaign.findMany({\n        include: {\n            companyCampaigns: true\n        },\n        orderBy: {\n            createdAt: \"desc\"\n        }\n    });\n    res.json(campaigns);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2FtcGFpZ25zL2FsbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUU2QztBQUU3QyxpRUFBTSxPQUFnQkMsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSyxDQUFDO0lBRW5FLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLEtBQUssQ0FBQ0gsMEVBQXdCLENBQUMsQ0FBQ007UUFBQUEsT0FBTyxFQUFFLENBQUNDO1lBQUFBLGdCQUFnQixFQUFFLElBQUk7UUFBQSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxDQUFDQztZQUFBQSxTQUFTLEVBQUUsQ0FBTTtRQUFBLENBQUM7SUFBQSxDQUFDO0lBRWxIUCxHQUFHLENBQUNRLElBQUksQ0FBQ1AsU0FBUztBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3NnbS8uL3BhZ2VzL2FwaS9jYW1wYWlnbnMvYWxsLnRzP2YxNjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGdldHMgZXZlcnkgY2FtcGFpZ25cbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvcHJpc21hXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuXG4gIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IHByaXNtYS5jYW1wYWlnbi5maW5kTWFueSh7aW5jbHVkZToge2NvbXBhbnlDYW1wYWlnbnM6IHRydWV9LCBvcmRlckJ5OiB7Y3JlYXRlZEF0OiBcImRlc2NcIn19KVxuIFxuICByZXMuanNvbihjYW1wYWlnbnMpO1xufTsiXSwibmFtZXMiOlsicHJpc21hIiwicmVxIiwicmVzIiwiY2FtcGFpZ25zIiwiY2FtcGFpZ24iLCJmaW5kTWFueSIsImluY2x1ZGUiLCJjb21wYW55Q2FtcGFpZ25zIiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/campaigns/all.ts\n");

/***/ }),

/***/ "./services/prisma.ts":
/*!****************************!*\
  !*** ./services/prisma.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9wcmlzbWEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBVTdDLEdBQUcsQ0FBQ0MsTUFBTTtBQUVWLEVBQUUsRUFaRixLQVl5QyxFQUFFLEVBRTFDLE1BQU0sQ0FBQztJQUNOLEVBQUUsR0FBR0MsTUFBTSxDQUFDRCxNQUFNLEVBQUUsQ0FBQztRQUNuQkMsTUFBTSxDQUFDRCxNQUFNLEdBQUcsR0FBRyxDQUFDRCx3REFBWTtJQUNsQyxDQUFDO0lBQ0RDLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFNO0FBQ3hCLENBQUM7QUFDRCxpRUFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3NnbS8uL3NlcnZpY2VzL3ByaXNtYS50cz8xMGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIG5hbWVzcGFjZSBOb2RlSlMge1xuICAgIGludGVyZmFjZSBHbG9iYWwge1xuICAgICAgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG4gICAgfVxuICB9XG59XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XG59XG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/campaigns/all.ts"));
module.exports = __webpack_exports__;

})();