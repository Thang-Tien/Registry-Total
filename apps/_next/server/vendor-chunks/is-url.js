"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-url";
exports.ids = ["vendor-chunks/is-url"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-url/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-url/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/**\n * Expose `isUrl`.\n */ \nmodule.exports = isUrl;\n/**\n * RegExps.\n * A URL must match #1 and then at least one of #2/#3.\n * Use two levels of REs to avoid REDOS.\n */ var protocolAndDomainRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;\nvar localhostDomainRE = /^localhost[\\:?\\d]*(?:[^\\:?\\d]\\S*)?$/;\nvar nonLocalhostDomainRE = /^[^\\s\\.]+\\.\\S{2,}$/;\n/**\n * Loosely validate a URL `string`.\n *\n * @param {String} string\n * @return {Boolean}\n */ function isUrl(string) {\n    if (typeof string !== \"string\") {\n        return false;\n    }\n    var match = string.match(protocolAndDomainRE);\n    if (!match) {\n        return false;\n    }\n    var everythingAfterProtocol = match[1];\n    if (!everythingAfterProtocol) {\n        return false;\n    }\n    if (localhostDomainRE.test(everythingAfterProtocol) || nonLocalhostDomainRE.test(everythingAfterProtocol)) {\n        return true;\n    }\n    return false;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtdXJsL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUNBOztDQUVDO0FBRURBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakI7Ozs7Q0FJQyxHQUVELElBQUlDLHNCQUFzQjtBQUUxQixJQUFJQyxvQkFBb0I7QUFDeEIsSUFBSUMsdUJBQXVCO0FBRTNCOzs7OztDQUtDLEdBRUQsU0FBU0gsTUFBTUksTUFBTTtJQUNuQixJQUFJLE9BQU9BLFdBQVcsVUFBVTtRQUM5QixPQUFPO0lBQ1Q7SUFFQSxJQUFJQyxRQUFRRCxPQUFPQyxLQUFLLENBQUNKO0lBQ3pCLElBQUksQ0FBQ0ksT0FBTztRQUNWLE9BQU87SUFDVDtJQUVBLElBQUlDLDBCQUEwQkQsS0FBSyxDQUFDLEVBQUU7SUFDdEMsSUFBSSxDQUFDQyx5QkFBeUI7UUFDNUIsT0FBTztJQUNUO0lBRUEsSUFBSUosa0JBQWtCSyxJQUFJLENBQUNELDRCQUN2QkgscUJBQXFCSSxJQUFJLENBQUNELDBCQUEwQjtRQUN0RCxPQUFPO0lBQ1Q7SUFFQSxPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtdXJsL2luZGV4LmpzPzVjZGQiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4cG9zZSBgaXNVcmxgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gaXNVcmw7XG5cbi8qKlxuICogUmVnRXhwcy5cbiAqIEEgVVJMIG11c3QgbWF0Y2ggIzEgYW5kIHRoZW4gYXQgbGVhc3Qgb25lIG9mICMyLyMzLlxuICogVXNlIHR3byBsZXZlbHMgb2YgUkVzIHRvIGF2b2lkIFJFRE9TLlxuICovXG5cbnZhciBwcm90b2NvbEFuZERvbWFpblJFID0gL14oPzpcXHcrOik/XFwvXFwvKFxcUyspJC87XG5cbnZhciBsb2NhbGhvc3REb21haW5SRSA9IC9ebG9jYWxob3N0W1xcOj9cXGRdKig/OlteXFw6P1xcZF1cXFMqKT8kL1xudmFyIG5vbkxvY2FsaG9zdERvbWFpblJFID0gL15bXlxcc1xcLl0rXFwuXFxTezIsfSQvO1xuXG4vKipcbiAqIExvb3NlbHkgdmFsaWRhdGUgYSBVUkwgYHN0cmluZ2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc1VybChzdHJpbmcpe1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2gocHJvdG9jb2xBbmREb21haW5SRSk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZXZlcnl0aGluZ0FmdGVyUHJvdG9jb2wgPSBtYXRjaFsxXTtcbiAgaWYgKCFldmVyeXRoaW5nQWZ0ZXJQcm90b2NvbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChsb2NhbGhvc3REb21haW5SRS50ZXN0KGV2ZXJ5dGhpbmdBZnRlclByb3RvY29sKSB8fFxuICAgICAgbm9uTG9jYWxob3N0RG9tYWluUkUudGVzdChldmVyeXRoaW5nQWZ0ZXJQcm90b2NvbCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaXNVcmwiLCJwcm90b2NvbEFuZERvbWFpblJFIiwibG9jYWxob3N0RG9tYWluUkUiLCJub25Mb2NhbGhvc3REb21haW5SRSIsInN0cmluZyIsIm1hdGNoIiwiZXZlcnl0aGluZ0FmdGVyUHJvdG9jb2wiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-url/index.js\n");

/***/ })

};
;