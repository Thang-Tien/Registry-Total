"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/simple-swizzle";
exports.ids = ["vendor-chunks/simple-swizzle"];
exports.modules = {

/***/ "(ssr)/./node_modules/simple-swizzle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isArrayish = __webpack_require__(/*! is-arrayish */ \"(ssr)/./node_modules/is-arrayish/index.js\");\nvar concat = Array.prototype.concat;\nvar slice = Array.prototype.slice;\nvar swizzle = module.exports = function swizzle(args) {\n    var results = [];\n    for(var i = 0, len = args.length; i < len; i++){\n        var arg = args[i];\n        if (isArrayish(arg)) {\n            // http://jsperf.com/javascript-array-concat-vs-push/98\n            results = concat.call(results, slice.call(arg));\n        } else {\n            results.push(arg);\n        }\n    }\n    return results;\n};\nswizzle.wrap = function(fn) {\n    return function() {\n        return fn(swizzle(arguments));\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxhQUFhQyxtQkFBT0EsQ0FBQztBQUV6QixJQUFJQyxTQUFTQyxNQUFNQyxTQUFTLENBQUNGLE1BQU07QUFDbkMsSUFBSUcsUUFBUUYsTUFBTUMsU0FBUyxDQUFDQyxLQUFLO0FBRWpDLElBQUlDLFVBQVVDLE9BQU9DLE9BQU8sR0FBRyxTQUFTRixRQUFRRyxJQUFJO0lBQ25ELElBQUlDLFVBQVUsRUFBRTtJQUVoQixJQUFLLElBQUlDLElBQUksR0FBR0MsTUFBTUgsS0FBS0ksTUFBTSxFQUFFRixJQUFJQyxLQUFLRCxJQUFLO1FBQ2hELElBQUlHLE1BQU1MLElBQUksQ0FBQ0UsRUFBRTtRQUVqQixJQUFJWCxXQUFXYyxNQUFNO1lBQ3BCLHVEQUF1RDtZQUN2REosVUFBVVIsT0FBT2EsSUFBSSxDQUFDTCxTQUFTTCxNQUFNVSxJQUFJLENBQUNEO1FBQzNDLE9BQU87WUFDTkosUUFBUU0sSUFBSSxDQUFDRjtRQUNkO0lBQ0Q7SUFFQSxPQUFPSjtBQUNSO0FBRUFKLFFBQVFXLElBQUksR0FBRyxTQUFVQyxFQUFFO0lBQzFCLE9BQU87UUFDTixPQUFPQSxHQUFHWixRQUFRYTtJQUNuQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zd2l6emxlL2luZGV4LmpzP2M5OTgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheWlzaCA9IHJlcXVpcmUoJ2lzLWFycmF5aXNoJyk7XG5cbnZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgc3dpenpsZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3dpenpsZShhcmdzKSB7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgYXJnID0gYXJnc1tpXTtcblxuXHRcdGlmIChpc0FycmF5aXNoKGFyZykpIHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tL2phdmFzY3JpcHQtYXJyYXktY29uY2F0LXZzLXB1c2gvOThcblx0XHRcdHJlc3VsdHMgPSBjb25jYXQuY2FsbChyZXN1bHRzLCBzbGljZS5jYWxsKGFyZykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goYXJnKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbnN3aXp6bGUud3JhcCA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmbihzd2l6emxlKGFyZ3VtZW50cykpO1xuXHR9O1xufTtcbiJdLCJuYW1lcyI6WyJpc0FycmF5aXNoIiwicmVxdWlyZSIsImNvbmNhdCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJzd2l6emxlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFyZ3MiLCJyZXN1bHRzIiwiaSIsImxlbiIsImxlbmd0aCIsImFyZyIsImNhbGwiLCJwdXNoIiwid3JhcCIsImZuIiwiYXJndW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/simple-swizzle/index.js\n");

/***/ })

};
;