"use strict";
(() => {
var exports = {};
exports.id = 8356;
exports.ids = [8356];
exports.modules = {

/***/ 9876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3867);
/* harmony import */ var _componentes_SeccionDos_SeccionDos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _componentes_SeccionCuatroTexto_SeccionCuatroTexto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2013);
/* harmony import */ var _componentes_SeccionUno_SeccionUno__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3381);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_6__);







const index = ({ ciudad , general , markers , landing  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "El mejor cambio de divisas de ",
                            ciudad?.acf?.ciudad_landing,
                            " | Quickgold"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: `La mejor tasa de cambio por tu divisa en ${ciudad?.acf?.ciudad_landing} Tenemos más de 30 monedas diferentes al momento y sin comisiones`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/assets/icon.png"
                    }),
                    ciudad?.acf?.nonscript_chat
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_6___default()), {
                strategy: "lazyOnload",
                id: "livechat",
                children: ciudad?.acf?.script_chat
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ciudad: ciudad,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_SeccionUno_SeccionUno__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        nombreCiudad: ciudad?.acf?.ciudad_landing
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_SeccionDos_SeccionDos__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        ciudad: ciudad,
                        comprar: ciudad?.acf?.vende_divisa,
                        markers: markers,
                        telefono: ciudad?.acf?.telefono
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_SeccionCuatroTexto_SeccionCuatroTexto__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        landing: landing
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
const idPaginaWp = "9381";
const apiGeneral = "13848";
async function getStaticProps() {
    //datos de los campos personalizados de la ciudad
    const madrid = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`);
    const ciudad = await madrid.json();
    //fin datos de los campos personalizados de la ciudad
    const res = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`);
    const general = await res.json();
    const tienda = ciudad?.acf?.ciudad_oro;
    const marker = await fetch(`https://panel.quickgold.es/markersMapa/markers${tienda}.json`);
    const markers = await marker.json();
    const landing1 = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/17546`);
    const landing = await landing1.json();
    return {
        props: {
            ciudad,
            general,
            markers,
            landing
        },
        revalidate: 1
    };
}


/***/ }),

/***/ 2081:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Call");

/***/ }),

/***/ 6741:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CheckCircle");

/***/ }),

/***/ 7666:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Facebook");

/***/ }),

/***/ 3281:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Instagram");

/***/ }),

/***/ 4845:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowDown");

/***/ }),

/***/ 5939:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LinkedIn");

/***/ }),

/***/ 2906:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Lock");

/***/ }),

/***/ 5631:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Twitter");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 5372:
/***/ ((module) => {

module.exports = require("react-map-gl");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,2636,172,5675,4298,1664,1489,7751], () => (__webpack_exec__(9876)));
module.exports = __webpack_exports__;

})();