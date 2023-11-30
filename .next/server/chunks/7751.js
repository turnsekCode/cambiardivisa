exports.id = 7751;
exports.ids = [7751];
exports.modules = {

/***/ 7331:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorListadoTiendas": "listadoTienda_contenedorListadoTiendas__FmudN",
	"img_stars": "listadoTienda_img_stars__Xf4gd",
	"imgValoracion": "listadoTienda_imgValoracion__9pkop",
	"bloqueResenas": "listadoTienda_bloqueResenas__Fx7ea",
	"contenedorValoraciones": "listadoTienda_contenedorValoraciones__gcW1M",
	"valoracionResenas": "listadoTienda_valoracionResenas__m05eL",
	"contenedorResenas": "listadoTienda_contenedorResenas__aVkZe",
	"contenedorLogoGoogle": "listadoTienda_contenedorLogoGoogle__oACQW",
	"numero_reviews": "listadoTienda_numero_reviews__exWNo",
	"resenasGoogle": "listadoTienda_resenasGoogle__e_2MU",
	"verResenas": "listadoTienda_verResenas__TJ0Aa",
	"direccion": "listadoTienda_direccion__1axn0",
	"telefono": "listadoTienda_telefono__HK_ak",
	"mapa": "listadoTienda_mapa__z4xSE",
	"nombreTienda": "listadoTienda_nombreTienda__dH7_T"
};


/***/ }),

/***/ 4111:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorMapa": "mapaCiudades_contenedorMapa__DHLB8",
	"contenedorbloqueIzq": "mapaCiudades_contenedorbloqueIzq__Rp7gq",
	"bloqueDer": "mapaCiudades_bloqueDer__mH701",
	"bloqueIzq": "mapaCiudades_bloqueIzq__DKR5L",
	"linea": "mapaCiudades_linea__O4vPS",
	"reset_map": "mapaCiudades_reset_map__lr2TZ",
	"contenedorTiendas": "mapaCiudades_contenedorTiendas__hZuvd",
	"tienda": "mapaCiudades_tienda__fBGAS",
	"mapboxgl-popup-close-button": "mapaCiudades_mapboxgl-popup-close-button___PgA_",
	"nombre_ciudad_popup": "mapaCiudades_nombre_ciudad_popup__YLhzk",
	"direccion_popup": "mapaCiudades_direccion_popup__IS9wP",
	"telefono_popup": "mapaCiudades_telefono_popup__eqt8Z",
	"boton_como_llegar": "mapaCiudades_boton_como_llegar__8it0V",
	"boton_popUp": "mapaCiudades_boton_popUp__yw3fW",
	"contenedorInfoTiendaMapa": "mapaCiudades_contenedorInfoTiendaMapa__ibqhv",
	"contenedorInfoTiendaMapaActivo": "mapaCiudades_contenedorInfoTiendaMapaActivo__RvQHD"
};


/***/ }),

/***/ 1599:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSeccionDos": "seccionDos_contenedorSeccionDos__hOLQ4"
};


/***/ }),

/***/ 6287:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedor": "seccionUno_contenedor__frWSH",
	"titulo": "seccionUno_titulo__U9UoA",
	"botonLamar": "seccionUno_botonLamar__48xxc"
};


/***/ }),

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SeccionDos_SeccionDos)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/componentes/ConversorDivisa/Conversor.js + 2 modules
var Conversor = __webpack_require__(5702);
// EXTERNAL MODULE: ./src/componentes/ListadoTiendas/listadoTienda.module.css
var listadoTienda_module = __webpack_require__(7331);
var listadoTienda_module_default = /*#__PURE__*/__webpack_require__.n(listadoTienda_module);
// EXTERNAL MODULE: ./src/componentes/MapaCiudades/mapaCiudades.module.css
var mapaCiudades_module = __webpack_require__(4111);
var mapaCiudades_module_default = /*#__PURE__*/__webpack_require__.n(mapaCiudades_module);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
// EXTERNAL MODULE: external "@mui/icons-material/Call"
var Call_ = __webpack_require__(2081);
var Call_default = /*#__PURE__*/__webpack_require__.n(Call_);
// EXTERNAL MODULE: external "react-map-gl"
var external_react_map_gl_ = __webpack_require__(5372);
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/componentes/MapaCiudades/MapaCiudades.js







const MapaCiudades = ({ markers , ciudad  })=>{
    const marcador = markers.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: markers.markerInicial[0].longitude,
        latitude: markers.markerInicial[0].latitude,
        zoom: markers.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                markers.markerInicial[0].longitude,
                markers.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: markers.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker.id,
            longitude: marker.longitude,
            latitude: marker.latitude,
            tienda: marker.tienda,
            telefono: marker.telefono,
            direccion: marker.direccion,
            comoLlegar: marker.comoLlegar,
            nombreTienda: marker.nombreTienda,
            duration: marker.duration,
            zoom: marker.zoom,
            url: marker.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker.longitude,
                lat: marker.latitude
            },
            duration: 1500,
            zoom: marker.zoom
        });
        setActiveId(marker.id);
    };
    const numeroDeTiendas = markers.arrayMarker[markers.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapaCiudades_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (mapaCiudades_module_default()).contenedorbloqueIzq,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (mapaCiudades_module_default()).bloqueIzq,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "Tiendas: ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: numeroDeTiendas?.id
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (mapaCiudades_module_default()).contenedorTiendas,
                        children: marcador.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                onClick: ()=>{
                                    toggleTab();
                                    onSelectMarker(marker);
                                },
                                to: "contenedorMapa2",
                                smooth: true,
                                offset: -110,
                                spy: true,
                                duration: 500,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    className: activeId === marker.id && showPopup ? `${(mapaCiudades_module_default()).contenedorInfoTiendaMapa} ${(mapaCiudades_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapaCiudades_module_default()).contenedorInfoTiendaMapa}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker?.nombreTienda
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (mapaCiudades_module_default()).tienda,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: marker?.direccion
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: marker?.telefono
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, marker.id))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapaCiudades_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapaCiudades_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapaCiudades_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo?.longitude,
                                    className: "popup",
                                    latitude: showInfo?.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapaCiudades_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapaCiudades_module_default()).nombre_ciudad_popup,
                                                children: showInfo?.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo?.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapaCiudades_module_default()).direccion_popup,
                                                children: showInfo?.direccion
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo?.telefono}`,
                                                className: (mapaCiudades_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {}),
                                                            " "
                                                        ]
                                                    }),
                                                    showInfo?.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo?.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapaCiudades_module_default()).boton_popUp,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapaCiudades_module_default()).boton_popUp,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: `${showInfo?.url}`,
                                                rel: "noreferrer",
                                                className: (mapaCiudades_module_default()).boton_popUp,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const MapaCiudades_MapaCiudades = (MapaCiudades);

;// CONCATENATED MODULE: ./src/componentes/ListadoTiendas/ListadoTiendas.js




const ListadoTiendas = ({ markers  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (listadoTienda_module_default()).contenedorListadoTiendas,
        children: /*#__PURE__*/ jsx_runtime_.jsx(MapaCiudades_MapaCiudades, {
            markers: markers
        })
    });
};
/* harmony default export */ const ListadoTiendas_ListadoTiendas = (ListadoTiendas);

// EXTERNAL MODULE: ./src/componentes/SeccionDos/seccionDos.module.css
var seccionDos_module = __webpack_require__(1599);
var seccionDos_module_default = /*#__PURE__*/__webpack_require__.n(seccionDos_module);
;// CONCATENATED MODULE: ./src/componentes/SeccionDos/SeccionDos.js





const SeccionDos = ({ ciudad , comprar , markers , telefono  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: (seccionDos_module_default()).contenedorSeccionDos,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Conversor/* default */.Z, {
                comprar: comprar,
                ciudad: ciudad,
                telefono: telefono
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ListadoTiendas_ListadoTiendas, {
                ciudad: ciudad,
                markers: markers,
                telefono: telefono
            })
        ]
    });
};
/* harmony default export */ const SeccionDos_SeccionDos = (SeccionDos);


/***/ }),

/***/ 3381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _seccionUno_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6287);
/* harmony import */ var _seccionUno_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_2__);



const SeccionUno = ({ nombreCiudad , telefono  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("seccion", {
        className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedor),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
            className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_2___default().titulo),
            children: [
                "Tiendas quickgold en ",
                nombreCiudad
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeccionUno);


/***/ })

};
;