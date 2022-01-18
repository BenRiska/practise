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
exports.id = "pages/api/campaigns/get";
exports.ids = ["pages/api/campaigns/get"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./pages/api/campaigns/get.ts":
/*!************************************!*\
  !*** ./pages/api/campaigns/get.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/prisma */ \"./services/prisma.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { campaign_name  } = req.body;\n    const campaign = await _services_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].campaign.findFirst({\n        where: {\n            name: campaign_name\n        },\n        include: {\n            _count: {\n                select: {\n                    companyCampaigns: true\n                }\n            }\n        }\n    });\n    if (!campaign) return;\n    res.json(campaign);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2FtcGFpZ25zL2dldC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUU2QztBQUU3QyxpRUFBTSxPQUFnQkMsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSyxDQUFDO0lBQ25FLEtBQUssQ0FBQyxDQUFDLENBQUNDLGFBQWEsRUFBQyxDQUFDLEdBQVFGLEdBQUcsQ0FBQ0csSUFBSTtJQUl2QyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNMLDJFQUF5QixDQUFDLENBQUM7UUFDaERPLEtBQUssRUFBRSxDQUFDO1lBQ05DLElBQUksRUFBRUwsYUFBYTtRQUNyQixDQUFDO1FBQ0RNLE9BQU8sRUFBRSxDQUFDO1lBQ1JDLE1BQU0sRUFBRSxDQUFDO2dCQUNQQyxNQUFNLEVBQUUsQ0FBQztvQkFDUEMsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDeEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELEVBQUUsR0FBR1AsUUFBUSxFQUFFLE1BQU07SUFFckJILEdBQUcsQ0FBQ1csSUFBSSxDQUFDUixRQUFRO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zc2dtLy4vcGFnZXMvYXBpL2NhbXBhaWducy9nZXQudHM/NzMxYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgZ2V0cyBhIHNwZWNpZmljIGNhbXBhaWduXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3ByaXNtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBjYW1wYWlnbl9uYW1lIH06IGFueSA9IHJlcS5ib2R5O1xuXG4gXG5cbiAgY29uc3QgY2FtcGFpZ24gPSBhd2FpdCBwcmlzbWEuY2FtcGFpZ24uZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgbmFtZTogY2FtcGFpZ25fbmFtZVxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgX2NvdW50OiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGNvbXBhbnlDYW1wYWlnbnM6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFjYW1wYWlnbikgcmV0dXJuO1xuXG4gIHJlcy5qc29uKGNhbXBhaWduKTtcbn07Il0sIm5hbWVzIjpbInByaXNtYSIsInJlcSIsInJlcyIsImNhbXBhaWduX25hbWUiLCJib2R5IiwiY2FtcGFpZ24iLCJmaW5kRmlyc3QiLCJ3aGVyZSIsIm5hbWUiLCJpbmNsdWRlIiwiX2NvdW50Iiwic2VsZWN0IiwiY29tcGFueUNhbXBhaWducyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/campaigns/get.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/campaigns/get.ts"));
module.exports = __webpack_exports__;

})();