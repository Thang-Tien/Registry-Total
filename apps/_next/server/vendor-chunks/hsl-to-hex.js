/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hsl-to-hex";
exports.ids = ["vendor-chunks/hsl-to-hex"];
exports.modules = {

/***/ "(ssr)/./node_modules/hsl-to-hex/index.js":
/*!******************************************!*\
  !*** ./node_modules/hsl-to-hex/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// In our case, there's only one dependency\nvar toRgb = __webpack_require__(/*! hsl-to-rgb-for-reals */ \"(ssr)/./node_modules/hsl-to-rgb-for-reals/converter.js\");\n// Typically all dependencies should be declared at the top of the file.\n// Now let's define an API for our module, we're taking hue, saturation and luminosity values and outputting a CSS compatible hex string.\n// Hue is in degrees, between 0 and 359. Since degrees a cyclical in nature, we'll support numbers greater than 359 or less than 0 by \"spinning\" them around until they fall within the 0 to 359 range.\n// Saturation and luminosity are both percentages, we'll represent these percentages with whole numbers between 0 and 100. For these numbers we'll need to enforce a maximum and a minimum, anything below 0 will become 0, anything above 100 will become 100.\n// Let's write some utility functions to handle this logic:\nfunction max(val, n) {\n    return val > n ? n : val;\n}\nfunction min(val, n) {\n    return val < n ? n : val;\n}\nfunction cycle(val) {\n    // for safety:\n    val = max(val, 1e7);\n    val = min(val, -1e7);\n    // cycle value:\n    while(val < 0){\n        val += 360;\n    }\n    while(val > 359){\n        val -= 360;\n    }\n    return val;\n}\n// Now for the main piece, the `hsl` function:\nfunction hsl(hue, saturation, luminosity) {\n    // resolve degrees to 0 - 359 range\n    hue = cycle(hue);\n    // enforce constraints\n    saturation = min(max(saturation, 100), 0);\n    luminosity = min(max(luminosity, 100), 0);\n    // convert to 0 to 1 range used by hsl-to-rgb-for-reals\n    saturation /= 100;\n    luminosity /= 100;\n    // let hsl-to-rgb-for-reals do the hard work\n    var rgb = toRgb(hue, saturation, luminosity);\n    // convert each value in the returned RGB array\n    // to a 2 character hex value, join the array into\n    // a string, prefixed with a hash\n    return \"#\" + rgb.map(function(n) {\n        return (256 + n).toString(16).substr(-2);\n    }).join(\"\");\n}\n// In order to make our code into a bona fide module we have to export it:\nmodule.exports = hsl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHNsLXRvLWhleC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFFM0MsSUFBSUEsUUFBUUMsbUJBQU9BLENBQUM7QUFFcEIsd0VBQXdFO0FBRXhFLHlJQUF5STtBQUN6SSx1TUFBdU07QUFDdk0sK1BBQStQO0FBQy9QLDJEQUEyRDtBQUUzRCxTQUFTQyxJQUFLQyxHQUFHLEVBQUVDLENBQUM7SUFDbEIsT0FBTyxNQUFPQSxJQUFLQSxJQUFJRDtBQUN6QjtBQUVBLFNBQVNFLElBQUtGLEdBQUcsRUFBRUMsQ0FBQztJQUNsQixPQUFPLE1BQU9BLElBQUtBLElBQUlEO0FBQ3pCO0FBRUEsU0FBU0csTUFBT0gsR0FBRztJQUNqQixjQUFjO0lBQ2RBLE1BQU1ELElBQUlDLEtBQUs7SUFDZkEsTUFBTUUsSUFBSUYsS0FBSyxDQUFDO0lBQ2hCLGVBQWU7SUFDZixNQUFPQSxNQUFNLEVBQUc7UUFBRUEsT0FBTztJQUFJO0lBQzdCLE1BQU9BLE1BQU0sSUFBSztRQUFFQSxPQUFPO0lBQUk7SUFDL0IsT0FBT0E7QUFDVDtBQUVBLDhDQUE4QztBQUU5QyxTQUFTSSxJQUFLQyxHQUFHLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtJQUN2QyxtQ0FBbUM7SUFDbkNGLE1BQU1GLE1BQU1FO0lBRVosc0JBQXNCO0lBQ3RCQyxhQUFhSixJQUFJSCxJQUFJTyxZQUFZLE1BQU07SUFDdkNDLGFBQWFMLElBQUlILElBQUlRLFlBQVksTUFBTTtJQUV2Qyx1REFBdUQ7SUFDdkRELGNBQWM7SUFDZEMsY0FBYztJQUVkLDRDQUE0QztJQUM1QyxJQUFJQyxNQUFNWCxNQUFNUSxLQUFLQyxZQUFZQztJQUVqQywrQ0FBK0M7SUFDL0Msa0RBQWtEO0lBQ2xELGlDQUFpQztJQUNqQyxPQUFPLE1BQU1DLElBQ1ZDLEdBQUcsQ0FBQyxTQUFVUixDQUFDO1FBQ2QsT0FBTyxDQUFDLE1BQU1BLENBQUFBLEVBQUdTLFFBQVEsQ0FBQyxJQUFJQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxHQUNDQyxJQUFJLENBQUM7QUFDVjtBQUVBLDBFQUEwRTtBQUUxRUMsT0FBT0MsT0FBTyxHQUFHViIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oc2wtdG8taGV4L2luZGV4LmpzPzcxYzEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW4gb3VyIGNhc2UsIHRoZXJlJ3Mgb25seSBvbmUgZGVwZW5kZW5jeVxuXG52YXIgdG9SZ2IgPSByZXF1aXJlKCdoc2wtdG8tcmdiLWZvci1yZWFscycpXG5cbi8vIFR5cGljYWxseSBhbGwgZGVwZW5kZW5jaWVzIHNob3VsZCBiZSBkZWNsYXJlZCBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlLlxuXG4vLyBOb3cgbGV0J3MgZGVmaW5lIGFuIEFQSSBmb3Igb3VyIG1vZHVsZSwgd2UncmUgdGFraW5nIGh1ZSwgc2F0dXJhdGlvbiBhbmQgbHVtaW5vc2l0eSB2YWx1ZXMgYW5kIG91dHB1dHRpbmcgYSBDU1MgY29tcGF0aWJsZSBoZXggc3RyaW5nLlxuLy8gSHVlIGlzIGluIGRlZ3JlZXMsIGJldHdlZW4gMCBhbmQgMzU5LiBTaW5jZSBkZWdyZWVzIGEgY3ljbGljYWwgaW4gbmF0dXJlLCB3ZSdsbCBzdXBwb3J0IG51bWJlcnMgZ3JlYXRlciB0aGFuIDM1OSBvciBsZXNzIHRoYW4gMCBieSBcInNwaW5uaW5nXCIgdGhlbSBhcm91bmQgdW50aWwgdGhleSBmYWxsIHdpdGhpbiB0aGUgMCB0byAzNTkgcmFuZ2UuXG4vLyBTYXR1cmF0aW9uIGFuZCBsdW1pbm9zaXR5IGFyZSBib3RoIHBlcmNlbnRhZ2VzLCB3ZSdsbCByZXByZXNlbnQgdGhlc2UgcGVyY2VudGFnZXMgd2l0aCB3aG9sZSBudW1iZXJzIGJldHdlZW4gMCBhbmQgMTAwLiBGb3IgdGhlc2UgbnVtYmVycyB3ZSdsbCBuZWVkIHRvIGVuZm9yY2UgYSBtYXhpbXVtIGFuZCBhIG1pbmltdW0sIGFueXRoaW5nIGJlbG93IDAgd2lsbCBiZWNvbWUgMCwgYW55dGhpbmcgYWJvdmUgMTAwIHdpbGwgYmVjb21lIDEwMC5cbi8vIExldCdzIHdyaXRlIHNvbWUgdXRpbGl0eSBmdW5jdGlvbnMgdG8gaGFuZGxlIHRoaXMgbG9naWM6XG5cbmZ1bmN0aW9uIG1heCAodmFsLCBuKSB7XG4gIHJldHVybiAodmFsID4gbikgPyBuIDogdmFsXG59XG5cbmZ1bmN0aW9uIG1pbiAodmFsLCBuKSB7XG4gIHJldHVybiAodmFsIDwgbikgPyBuIDogdmFsXG59XG5cbmZ1bmN0aW9uIGN5Y2xlICh2YWwpIHtcbiAgLy8gZm9yIHNhZmV0eTpcbiAgdmFsID0gbWF4KHZhbCwgMWU3KVxuICB2YWwgPSBtaW4odmFsLCAtMWU3KVxuICAvLyBjeWNsZSB2YWx1ZTpcbiAgd2hpbGUgKHZhbCA8IDApIHsgdmFsICs9IDM2MCB9XG4gIHdoaWxlICh2YWwgPiAzNTkpIHsgdmFsIC09IDM2MCB9XG4gIHJldHVybiB2YWxcbn1cblxuLy8gTm93IGZvciB0aGUgbWFpbiBwaWVjZSwgdGhlIGBoc2xgIGZ1bmN0aW9uOlxuXG5mdW5jdGlvbiBoc2wgKGh1ZSwgc2F0dXJhdGlvbiwgbHVtaW5vc2l0eSkge1xuICAvLyByZXNvbHZlIGRlZ3JlZXMgdG8gMCAtIDM1OSByYW5nZVxuICBodWUgPSBjeWNsZShodWUpXG5cbiAgLy8gZW5mb3JjZSBjb25zdHJhaW50c1xuICBzYXR1cmF0aW9uID0gbWluKG1heChzYXR1cmF0aW9uLCAxMDApLCAwKVxuICBsdW1pbm9zaXR5ID0gbWluKG1heChsdW1pbm9zaXR5LCAxMDApLCAwKVxuXG4gIC8vIGNvbnZlcnQgdG8gMCB0byAxIHJhbmdlIHVzZWQgYnkgaHNsLXRvLXJnYi1mb3ItcmVhbHNcbiAgc2F0dXJhdGlvbiAvPSAxMDBcbiAgbHVtaW5vc2l0eSAvPSAxMDBcblxuICAvLyBsZXQgaHNsLXRvLXJnYi1mb3ItcmVhbHMgZG8gdGhlIGhhcmQgd29ya1xuICB2YXIgcmdiID0gdG9SZ2IoaHVlLCBzYXR1cmF0aW9uLCBsdW1pbm9zaXR5KVxuXG4gIC8vIGNvbnZlcnQgZWFjaCB2YWx1ZSBpbiB0aGUgcmV0dXJuZWQgUkdCIGFycmF5XG4gIC8vIHRvIGEgMiBjaGFyYWN0ZXIgaGV4IHZhbHVlLCBqb2luIHRoZSBhcnJheSBpbnRvXG4gIC8vIGEgc3RyaW5nLCBwcmVmaXhlZCB3aXRoIGEgaGFzaFxuICByZXR1cm4gJyMnICsgcmdiXG4gICAgLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuICgyNTYgKyBuKS50b1N0cmluZygxNikuc3Vic3RyKC0yKVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG59XG5cbi8vIEluIG9yZGVyIHRvIG1ha2Ugb3VyIGNvZGUgaW50byBhIGJvbmEgZmlkZSBtb2R1bGUgd2UgaGF2ZSB0byBleHBvcnQgaXQ6XG5cbm1vZHVsZS5leHBvcnRzID0gaHNsXG4iXSwibmFtZXMiOlsidG9SZ2IiLCJyZXF1aXJlIiwibWF4IiwidmFsIiwibiIsIm1pbiIsImN5Y2xlIiwiaHNsIiwiaHVlIiwic2F0dXJhdGlvbiIsImx1bWlub3NpdHkiLCJyZ2IiLCJtYXAiLCJ0b1N0cmluZyIsInN1YnN0ciIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hsl-to-hex/index.js\n");

/***/ })

};
;