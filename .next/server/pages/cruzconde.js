"use strict";
(() => {
var exports = {};
exports.id = 9712;
exports.ids = [9712];
exports.modules = {

/***/ 1000:
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
/* harmony import */ var _componentes_SeccionUnoTienda_SeccionUnoTienda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1069);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _componentes_SeccionTres_SeccionTres__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3696);
/* harmony import */ var _componentes_SeccionCuatroTexto_SeccionCuatroTexto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2013);








const index = ({ ciudad , tiendaGoogle , general , landing  })=>{
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
                strategy: "lazyOnload",
                id: "livechat",
                children: ciudad?.acf?.script_chat
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ciudad: ciudad,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_SeccionUnoTienda_SeccionUnoTienda__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        nombreCiudad: ciudad?.acf?.ciudad_landing,
                        ciudad: ciudad,
                        tiendaGoogle: tiendaGoogle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_SeccionTres_SeccionTres__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        ciudad: ciudad,
                        tiendaGoogle: tiendaGoogle,
                        comprar: ciudad?.acf?.vende_divisa,
                        telefono: ciudad?.acf?.telefono
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_SeccionCuatroTexto_SeccionCuatroTexto__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        landing: landing
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
const idPaginaWp = "13765";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress
async function getStaticProps() {
    //datos de los campos personalizados de la ciudad
    const ciudad1 = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`);
    const ciudad = await ciudad1.json();
    const landing1 = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/17546`);
    const landing = await landing1.json();
    //fin datos de los campos personalizados de la ciudad
    const res = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`);
    const general = await res.json();
    //datos de google para tiendas
    const tienda = ciudad?.acf?.tienda;
    const google = await fetch(`https://panel.quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda}.txt`);
    const tiendaGoogle = await google.json();
    return {
        props: {
            ciudad,
            tiendaGoogle,
            general,
            landing
        },
        revalidate: 1
    };
}


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

/***/ 8377:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PhoneInTalk");

/***/ }),

/***/ 5631:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Twitter");

/***/ }),

/***/ 2232:
/***/ ((module) => {

module.exports = require("@mui/icons-material/WhatsApp");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [9210,2636,172,5675,4298,1489,9499], () => (__webpack_exec__(1000)));
module.exports = __webpack_exports__;

})();