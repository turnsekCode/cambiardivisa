(() => {
var exports = {};
exports.id = 1379;
exports.ids = [1379];
exports.modules = {

/***/ 4672:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorTexto": "seccionCUatroTexto_contenedorTexto__K82rs"
};


/***/ }),

/***/ 7434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ alamos),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/componentes/Layout/Layout.js + 5 modules
var Layout = __webpack_require__(3867);
// EXTERNAL MODULE: ./src/componentes/SeccionUnoTienda/SeccionUnoTienda.js
var SeccionUnoTienda = __webpack_require__(1069);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./src/componentes/SeccionTres/SeccionTres.js + 2 modules
var SeccionTres = __webpack_require__(3696);
// EXTERNAL MODULE: ./src/componentes/SeccionCuatroTexto/seccionCUatroTexto.module.css
var seccionCUatroTexto_module = __webpack_require__(4672);
var seccionCUatroTexto_module_default = /*#__PURE__*/__webpack_require__.n(seccionCUatroTexto_module);
;// CONCATENATED MODULE: ./src/componentes/SeccionCuatroTexto/SeccionCuatroTexto.js



const SeccionCuatroTexto = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: (seccionCUatroTexto_module_default()).contenedorTexto,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Precio del d\xf3lar siempre actualizado"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "En nuestra casa de cambio, ofrecemos el mejor servicio de cambio de d\xf3lar a euro. Garantizamos transparencia y competitividad al proporcionar informaci\xf3n actualizada sobre el precio del d\xf3lar y el cambio euro d\xf3lar. Nuestro equipo experto se esfuerza por brindar la mejor tasa de cambio de la ciudad, asegurando que cada transacci\xf3n sea beneficiosa para nuestros clientes. Conf\xeda en nosotros para realizar tus operaciones de camb"
            })
        ]
    });
};
/* harmony default export */ const SeccionCuatroTexto_SeccionCuatroTexto = (SeccionCuatroTexto);

;// CONCATENATED MODULE: ./src/pages/alamos/index.js








const index = ({ ciudad , tiendaGoogle , general  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            "El mejor cambio de divisas de ",
                            ciudad?.acf?.ciudad_landing,
                            " | Quickgold"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: `La mejor tasa de cambio por tu divisa en ${ciudad?.acf?.ciudad_landing} Tenemos más de 30 monedas diferentes al momento y sin comisiones`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/assets/icon.png"
                    }),
                    ciudad?.acf?.nonscript_chat
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "livechat",
                children: ciudad?.acf?.script_chat
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
                ciudad: ciudad,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SeccionUnoTienda/* default */.Z, {
                        ciudad: ciudad,
                        tiendaGoogle: tiendaGoogle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SeccionTres/* default */.Z, {
                        ciudad: ciudad,
                        tiendaGoogle: tiendaGoogle,
                        comprar: ciudad?.acf?.vende_divisa,
                        telefono: ciudad?.acf?.telefono
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SeccionCuatroTexto_SeccionCuatroTexto, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const alamos = (index);
const idPaginaWp = "5510";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress
async function getStaticProps() {
    //datos de los campos personalizados de la ciudad
    const ciudad1 = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`);
    const ciudad = await ciudad1.json();
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
            general
        },
        revalidate: 1
    };
}


/***/ }),

/***/ 6741:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/CheckCircle");

/***/ }),

/***/ 7666:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Facebook");

/***/ }),

/***/ 3281:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Instagram");

/***/ }),

/***/ 4845:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/KeyboardArrowDown");

/***/ }),

/***/ 5939:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/LinkedIn");

/***/ }),

/***/ 2906:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Lock");

/***/ }),

/***/ 8377:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/PhoneInTalk");

/***/ }),

/***/ 5631:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Twitter");

/***/ }),

/***/ 2232:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/WhatsApp");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,2636,172,5675,4298,287,9499], () => (__webpack_exec__(7434)));
module.exports = __webpack_exports__;

})();