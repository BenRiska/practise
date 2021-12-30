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
exports.id = "pages/api/util/localities";
exports.ids = ["pages/api/util/localities"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./pages/api/util/localities.ts":
/*!**************************************!*\
  !*** ./pages/api/util/localities.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/prisma */ \"./services/prisma.ts\");\n\nasync function handler(req, res) {\n    let addresses = await _services_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].address.findMany({\n        select: {\n            locality: true\n        }\n    });\n    addresses = addresses.map(({ locality  })=>locality\n    );\n    // @ts-ignore\n    res.json([\n        ...new Set(addresses)\n    ]);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXRpbC9sb2NhbGl0aWVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRTZDO0FBRTlCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQixDQUFDO0lBQ0QsR0FBRyxDQUFDQyxTQUFTLEdBQVEsS0FBSyxDQUFDSix5RUFBdUIsQ0FBQyxDQUFDO1FBQ2xETyxNQUFNLEVBQUUsQ0FBQztZQUNQQyxRQUFRLEVBQUUsSUFBSTtRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUNESixTQUFTLEdBQUdBLFNBQVMsQ0FBQ0ssR0FBRyxFQUFFLENBQUNELENBQUFBLFFBQVEsRUFBSyxDQUFDLEdBQUtBLFFBQVE7O0lBQ3ZELEVBQWE7SUFDYkwsR0FBRyxDQUFDTyxJQUFJLENBQUMsQ0FBQztXQUFHLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDUCxTQUFTO0lBQUMsQ0FBQztBQUNsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3NnbS8uL3BhZ2VzL2FwaS91dGlsL2xvY2FsaXRpZXMudHM/NWVkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3ByaXNtYVwiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgbGV0IGFkZHJlc3NlczogYW55ID0gYXdhaXQgcHJpc21hLmFkZHJlc3MuZmluZE1hbnkoe1xuICAgIHNlbGVjdDoge1xuICAgICAgbG9jYWxpdHk6IHRydWVcbiAgICB9XG4gIH0pXG4gIGFkZHJlc3NlcyA9IGFkZHJlc3Nlcy5tYXAoKHtsb2NhbGl0eX06IGFueSkgPT4gbG9jYWxpdHkpXG4gIC8vIEB0cy1pZ25vcmVcbiAgcmVzLmpzb24oWy4uLm5ldyBTZXQoYWRkcmVzc2VzKV0pO1xufSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYWRkcmVzc2VzIiwiYWRkcmVzcyIsImZpbmRNYW55Iiwic2VsZWN0IiwibG9jYWxpdHkiLCJtYXAiLCJqc29uIiwiU2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/util/localities.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/util/localities.ts"));
module.exports = __webpack_exports__;

})();