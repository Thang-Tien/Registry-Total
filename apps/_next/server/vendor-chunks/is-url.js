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

eval("/**\n * Expose `isUrl`.\n */ module.exports = isUrl;\n/**\n * RegExps.\n * A URL must match #1 and then at least one of #2/#3.\n * Use two levels of REs to avoid REDOS.\n */ var protocolAndDomainRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;\nvar localhostDomainRE = /^localhost[\\:?\\d]*(?:[^\\:?\\d]\\S*)?$/;\nvar nonLocalhostDomainRE = /^[^\\s\\.]+\\.\\S{2,}$/;\n/**\n * Loosely validate a URL `string`.\n *\n * @param {String} string\n * @return {Boolean}\n */ function isUrl(string) {\n    if (typeof string !== \"string\") {\n        return false;\n    }\n    var match = string.match(protocolAndDomainRE);\n    if (!match) {\n        return false;\n    }\n    var everythingAfterProtocol = match[1];\n    if (!everythingAfterProtocol) {\n        return false;\n    }\n    if (localhostDomainRE.test(everythingAfterProtocol) || nonLocalhostDomainRE.test(everythingAfterProtocol)) {\n        return true;\n    }\n    return false;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtdXJsL2luZGV4LmpzPzVjZGQiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4cG9zZSBgaXNVcmxgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gaXNVcmw7XG5cbi8qKlxuICogUmVnRXhwcy5cbiAqIEEgVVJMIG11c3QgbWF0Y2ggIzEgYW5kIHRoZW4gYXQgbGVhc3Qgb25lIG9mICMyLyMzLlxuICogVXNlIHR3byBsZXZlbHMgb2YgUkVzIHRvIGF2b2lkIFJFRE9TLlxuICovXG5cbnZhciBwcm90b2NvbEFuZERvbWFpblJFID0gL14oPzpcXHcrOik/XFwvXFwvKFxcUyspJC87XG5cbnZhciBsb2NhbGhvc3REb21haW5SRSA9IC9ebG9jYWxob3N0W1xcOj9cXGRdKig/OlteXFw6P1xcZF1cXFMqKT8kL1xudmFyIG5vbkxvY2FsaG9zdERvbWFpblJFID0gL15bXlxcc1xcLl0rXFwuXFxTezIsfSQvO1xuXG4vKipcbiAqIExvb3NlbHkgdmFsaWRhdGUgYSBVUkwgYHN0cmluZ2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc1VybChzdHJpbmcpe1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2gocHJvdG9jb2xBbmREb21haW5SRSk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZXZlcnl0aGluZ0FmdGVyUHJvdG9jb2wgPSBtYXRjaFsxXTtcbiAgaWYgKCFldmVyeXRoaW5nQWZ0ZXJQcm90b2NvbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChsb2NhbGhvc3REb21haW5SRS50ZXN0KGV2ZXJ5dGhpbmdBZnRlclByb3RvY29sKSB8fFxuICAgICAgbm9uTG9jYWxob3N0RG9tYWluUkUudGVzdChldmVyeXRoaW5nQWZ0ZXJQcm90b2NvbCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaXNVcmwiLCJwcm90b2NvbEFuZERvbWFpblJFIiwibG9jYWxob3N0RG9tYWluUkUiLCJub25Mb2NhbGhvc3REb21haW5SRSIsInN0cmluZyIsIm1hdGNoIiwiZXZlcnl0aGluZ0FmdGVyUHJvdG9jb2wiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiQUFDQTs7Q0FFQyxHQUVEQSxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCOzs7O0NBSUMsR0FFRCxJQUFJQyxzQkFBc0I7QUFFMUIsSUFBSUMsb0JBQW9CO0FBQ3hCLElBQUlDLHVCQUF1QjtBQUUzQjs7Ozs7Q0FLQyxHQUVELFNBQVNILE1BQU1JLE1BQU07SUFDbkIsSUFBSSxPQUFPQSxXQUFXLFVBQVU7UUFDOUIsT0FBTztJQUNUO0lBRUEsSUFBSUMsUUFBUUQsT0FBT0MsS0FBSyxDQUFDSjtJQUN6QixJQUFJLENBQUNJLE9BQU87UUFDVixPQUFPO0lBQ1Q7SUFFQSxJQUFJQywwQkFBMEJELEtBQUssQ0FBQyxFQUFFO0lBQ3RDLElBQUksQ0FBQ0MseUJBQXlCO1FBQzVCLE9BQU87SUFDVDtJQUVBLElBQUlKLGtCQUFrQkssSUFBSSxDQUFDRCw0QkFDdkJILHFCQUFxQkksSUFBSSxDQUFDRCwwQkFBMEI7UUFDdEQsT0FBTztJQUNUO0lBRUEsT0FBTztBQUNUIiwiZmlsZSI6Iihzc3IpLy4vbm9kZV9tb2R1bGVzL2lzLXVybC9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-url/index.js\n");

/***/ })

};
;