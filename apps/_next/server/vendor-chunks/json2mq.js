/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/json2mq";
exports.ids = ["vendor-chunks/json2mq"];
exports.modules = {

/***/ "(ssr)/./node_modules/json2mq/index.js":
/*!***************************************!*\
  !*** ./node_modules/json2mq/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var camel2hyphen = __webpack_require__(/*! string-convert/camel2hyphen */ \"(ssr)/./node_modules/string-convert/camel2hyphen.js\");\nvar isDimension = function(feature) {\n    var re = /[height|width]$/;\n    return re.test(feature);\n};\nvar obj2mq = function(obj) {\n    var mq = \"\";\n    var features = Object.keys(obj);\n    features.forEach(function(feature, index) {\n        var value = obj[feature];\n        feature = camel2hyphen(feature);\n        // Add px to dimension features\n        if (isDimension(feature) && typeof value === \"number\") {\n            value = value + \"px\";\n        }\n        if (value === true) {\n            mq += feature;\n        } else if (value === false) {\n            mq += \"not \" + feature;\n        } else {\n            mq += \"(\" + feature + \": \" + value + \")\";\n        }\n        if (index < features.length - 1) {\n            mq += \" and \";\n        }\n    });\n    return mq;\n};\nvar json2mq = function(query) {\n    var mq = \"\";\n    if (typeof query === \"string\") {\n        return query;\n    }\n    // Handling array of media queries\n    if (query instanceof Array) {\n        query.forEach(function(q, index) {\n            mq += obj2mq(q);\n            if (index < query.length - 1) {\n                mq += \", \";\n            }\n        });\n        return mq;\n    }\n    // Handling single media query\n    return obj2mq(query);\n};\nmodule.exports = json2mq;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanNvbjJtcS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxlQUFlQyxtQkFBT0EsQ0FBQztBQUUzQixJQUFJQyxjQUFjLFNBQVVDLE9BQU87SUFDakMsSUFBSUMsS0FBSztJQUNULE9BQU9BLEdBQUdDLElBQUksQ0FBQ0Y7QUFDakI7QUFFQSxJQUFJRyxTQUFTLFNBQVVDLEdBQUc7SUFDeEIsSUFBSUMsS0FBSztJQUNULElBQUlDLFdBQVdDLE9BQU9DLElBQUksQ0FBQ0o7SUFDM0JFLFNBQVNHLE9BQU8sQ0FBQyxTQUFVVCxPQUFPLEVBQUVVLEtBQUs7UUFDdkMsSUFBSUMsUUFBUVAsR0FBRyxDQUFDSixRQUFRO1FBQ3hCQSxVQUFVSCxhQUFhRztRQUN2QiwrQkFBK0I7UUFDL0IsSUFBSUQsWUFBWUMsWUFBWSxPQUFPVyxVQUFVLFVBQVU7WUFDckRBLFFBQVFBLFFBQVE7UUFDbEI7UUFDQSxJQUFJQSxVQUFVLE1BQU07WUFDbEJOLE1BQU1MO1FBQ1IsT0FBTyxJQUFJVyxVQUFVLE9BQU87WUFDMUJOLE1BQU0sU0FBU0w7UUFDakIsT0FBTztZQUNMSyxNQUFNLE1BQU1MLFVBQVUsT0FBT1csUUFBUTtRQUN2QztRQUNBLElBQUlELFFBQVFKLFNBQVNNLE1BQU0sR0FBQyxHQUFHO1lBQzdCUCxNQUFNO1FBQ1I7SUFDRjtJQUNBLE9BQU9BO0FBQ1Q7QUFFQSxJQUFJUSxVQUFVLFNBQVVDLEtBQUs7SUFDM0IsSUFBSVQsS0FBSztJQUNULElBQUksT0FBT1MsVUFBVSxVQUFVO1FBQzdCLE9BQU9BO0lBQ1Q7SUFDQSxrQ0FBa0M7SUFDbEMsSUFBSUEsaUJBQWlCQyxPQUFPO1FBQzFCRCxNQUFNTCxPQUFPLENBQUMsU0FBVU8sQ0FBQyxFQUFFTixLQUFLO1lBQzlCTCxNQUFNRixPQUFPYTtZQUNiLElBQUlOLFFBQVFJLE1BQU1GLE1BQU0sR0FBQyxHQUFHO2dCQUMxQlAsTUFBTTtZQUNSO1FBQ0Y7UUFDQSxPQUFPQTtJQUNUO0lBQ0EsOEJBQThCO0lBQzlCLE9BQU9GLE9BQU9XO0FBQ2hCO0FBRUFHLE9BQU9DLE9BQU8sR0FBR0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNvbjJtcS9pbmRleC5qcz9hNGRlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjYW1lbDJoeXBoZW4gPSByZXF1aXJlKCdzdHJpbmctY29udmVydC9jYW1lbDJoeXBoZW4nKTtcblxudmFyIGlzRGltZW5zaW9uID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgdmFyIHJlID0gL1toZWlnaHR8d2lkdGhdJC87XG4gIHJldHVybiByZS50ZXN0KGZlYXR1cmUpO1xufTtcblxudmFyIG9iajJtcSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIG1xID0gJyc7XG4gIHZhciBmZWF0dXJlcyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgdmFyIHZhbHVlID0gb2JqW2ZlYXR1cmVdO1xuICAgIGZlYXR1cmUgPSBjYW1lbDJoeXBoZW4oZmVhdHVyZSk7XG4gICAgLy8gQWRkIHB4IHRvIGRpbWVuc2lvbiBmZWF0dXJlc1xuICAgIGlmIChpc0RpbWVuc2lvbihmZWF0dXJlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlICsgJ3B4JztcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICBtcSArPSBmZWF0dXJlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICBtcSArPSAnbm90ICcgKyBmZWF0dXJlO1xuICAgIH0gZWxzZSB7XG4gICAgICBtcSArPSAnKCcgKyBmZWF0dXJlICsgJzogJyArIHZhbHVlICsgJyknO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCBmZWF0dXJlcy5sZW5ndGgtMSkge1xuICAgICAgbXEgKz0gJyBhbmQgJ1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBtcTtcbn07XG5cbnZhciBqc29uMm1xID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gIHZhciBtcSA9ICcnO1xuICBpZiAodHlwZW9mIHF1ZXJ5ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuICAvLyBIYW5kbGluZyBhcnJheSBvZiBtZWRpYSBxdWVyaWVzXG4gIGlmIChxdWVyeSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcXVlcnkuZm9yRWFjaChmdW5jdGlvbiAocSwgaW5kZXgpIHtcbiAgICAgIG1xICs9IG9iajJtcShxKTtcbiAgICAgIGlmIChpbmRleCA8IHF1ZXJ5Lmxlbmd0aC0xKSB7XG4gICAgICAgIG1xICs9ICcsICdcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbXE7XG4gIH1cbiAgLy8gSGFuZGxpbmcgc2luZ2xlIG1lZGlhIHF1ZXJ5XG4gIHJldHVybiBvYmoybXEocXVlcnkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBqc29uMm1xOyJdLCJuYW1lcyI6WyJjYW1lbDJoeXBoZW4iLCJyZXF1aXJlIiwiaXNEaW1lbnNpb24iLCJmZWF0dXJlIiwicmUiLCJ0ZXN0Iiwib2JqMm1xIiwib2JqIiwibXEiLCJmZWF0dXJlcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJ2YWx1ZSIsImxlbmd0aCIsImpzb24ybXEiLCJxdWVyeSIsIkFycmF5IiwicSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/json2mq/index.js\n");

/***/ })

};
;