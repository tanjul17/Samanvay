"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"d38f111790b7\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9pbmRleC5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9pbmRleC5jc3M/ZDFkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImQzOGYxMTE3OTBiN1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/index.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Header/menuData.tsx":
/*!****************************************!*\
  !*** ./components/Header/menuData.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst menuData = [\n    {\n        id: 1,\n        title: \"Home\",\n        path: \"/\",\n        newTab: false\n    },\n    {\n        id: 2,\n        title: \"About\",\n        path: \"/about\",\n        newTab: false\n    },\n    {\n        id: 33,\n        title: \"News\",\n        path: \"/blog\",\n        newTab: false\n    },\n    {\n        id: 3,\n        title: \"Contact Us\",\n        path: \"/contact\",\n        newTab: false\n    },\n    {\n        id: 4,\n        title: \"More\",\n        newTab: false,\n        submenu: [\n            {\n                id: 41,\n                title: \"About\",\n                path: \"/about\",\n                newTab: false\n            },\n            {\n                id: 42,\n                title: \"Contact \",\n                path: \"/contact\",\n                newTab: false\n            },\n            // {\n            //   id: 43,\n            //   title: \"Blog Grid Page\",\n            //   path: \"/blog\",\n            //   newTab: false,\n            // },\n            // {\n            //   id: 44,\n            //   title: \"Blog Sidebar Page\",\n            //   path: \"/blog-sidebar\",\n            //   newTab: false,\n            // },\n            // {\n            //   id: 45,\n            //   title: \"Blog Details Page\",\n            //   path: \"/blog-details\",\n            //   newTab: false,\n            // },\n            {\n                id: 46,\n                title: \"\",\n                path: \"/sign-in\",\n                newTab: false\n            },\n            {\n                id: 47,\n                title: \"Sign Up\",\n                path: \"/sign-up\",\n                newTab: false\n            }\n        ]\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVhZGVyL21lbnVEYXRhLnRzeCIsIm1hcHBpbmdzIjoiO0FBRUEsTUFBTUEsV0FBbUI7SUFDdkI7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BFLFFBQVE7UUFDUkMsU0FBUztZQUNQO2dCQUNFSixJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxRQUFRO1lBQ1Y7WUFDQTtnQkFDRUgsSUFBSTtnQkFDSkMsT0FBTztnQkFDUEMsTUFBTTtnQkFDTkMsUUFBUTtZQUNWO1lBQ0EsSUFBSTtZQUNKLFlBQVk7WUFDWiw2QkFBNkI7WUFDN0IsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixLQUFLO1lBQ0wsSUFBSTtZQUNKLFlBQVk7WUFDWixnQ0FBZ0M7WUFDaEMsMkJBQTJCO1lBQzNCLG1CQUFtQjtZQUNuQixLQUFLO1lBQ0wsSUFBSTtZQUNKLFlBQVk7WUFDWixnQ0FBZ0M7WUFDaEMsMkJBQTJCO1lBQzNCLG1CQUFtQjtZQUNuQixLQUFLO1lBQ0w7Z0JBQ0VILElBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLE1BQU07Z0JBQ05DLFFBQVE7WUFDVjtZQUNBO2dCQUNFSCxJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxRQUFRO1lBQ1Y7U0FDRDtJQUNIO0NBQ0Q7QUFDRCwrREFBZUosUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9tZW51RGF0YS50c3g/MjI5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51IH0gZnJvbSBcIkAvdHlwZXMvbWVudVwiO1xyXG5cclxuY29uc3QgbWVudURhdGE6IE1lbnVbXSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiBcIkhvbWVcIixcclxuICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgbmV3VGFiOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiQWJvdXRcIixcclxuICAgIHBhdGg6IFwiL2Fib3V0XCIsXHJcbiAgICBuZXdUYWI6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMzLFxyXG4gICAgdGl0bGU6IFwiTmV3c1wiLFxyXG4gICAgcGF0aDogXCIvYmxvZ1wiLFxyXG4gICAgbmV3VGFiOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6IFwiQ29udGFjdCBVc1wiLFxyXG4gICAgcGF0aDogXCIvY29udGFjdFwiLFxyXG4gICAgbmV3VGFiOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6IFwiTW9yZVwiLFxyXG4gICAgbmV3VGFiOiBmYWxzZSxcclxuICAgIHN1Ym1lbnU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0MSxcclxuICAgICAgICB0aXRsZTogXCJBYm91dFwiLFxyXG4gICAgICAgIHBhdGg6IFwiL2Fib3V0XCIsXHJcbiAgICAgICAgbmV3VGFiOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0MixcclxuICAgICAgICB0aXRsZTogXCJDb250YWN0IFwiLFxyXG4gICAgICAgIHBhdGg6IFwiL2NvbnRhY3RcIixcclxuICAgICAgICBuZXdUYWI6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgaWQ6IDQzLFxyXG4gICAgICAvLyAgIHRpdGxlOiBcIkJsb2cgR3JpZCBQYWdlXCIsXHJcbiAgICAgIC8vICAgcGF0aDogXCIvYmxvZ1wiLFxyXG4gICAgICAvLyAgIG5ld1RhYjogZmFsc2UsXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICBpZDogNDQsXHJcbiAgICAgIC8vICAgdGl0bGU6IFwiQmxvZyBTaWRlYmFyIFBhZ2VcIixcclxuICAgICAgLy8gICBwYXRoOiBcIi9ibG9nLXNpZGViYXJcIixcclxuICAgICAgLy8gICBuZXdUYWI6IGZhbHNlLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgaWQ6IDQ1LFxyXG4gICAgICAvLyAgIHRpdGxlOiBcIkJsb2cgRGV0YWlscyBQYWdlXCIsXHJcbiAgICAgIC8vICAgcGF0aDogXCIvYmxvZy1kZXRhaWxzXCIsXHJcbiAgICAgIC8vICAgbmV3VGFiOiBmYWxzZSxcclxuICAgICAgLy8gfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0NixcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBwYXRoOiBcIi9zaWduLWluXCIsXHJcbiAgICAgICAgbmV3VGFiOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0NyxcclxuICAgICAgICB0aXRsZTogXCJTaWduIFVwXCIsXHJcbiAgICAgICAgcGF0aDogXCIvc2lnbi11cFwiLFxyXG4gICAgICAgIG5ld1RhYjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IG1lbnVEYXRhO1xyXG4iXSwibmFtZXMiOlsibWVudURhdGEiLCJpZCIsInRpdGxlIiwicGF0aCIsIm5ld1RhYiIsInN1Ym1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Header/menuData.tsx\n"));

/***/ })

});