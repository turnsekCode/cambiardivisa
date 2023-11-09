import React, { useState, useRef } from "react";
import styles from "./mapaCiudades.module.css";
import { Link as Link2 } from "react-scroll";
import CallIcon from "@mui/icons-material/Call";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import Link from "next/link";

const MapaCiudades = ({ markers, ciudad }) => {
  const marcador = markers.arrayMarker;
  const [viewState, setViewState] = useState({
    longitude: markers.markerInicial[0].longitude,
    latitude: markers.markerInicial[0].latitude,
    zoom: markers.markerInicial[0].zoom,
    cooperativeGestures: true,
  });
  const mapRef = useRef();
  const resetMap = () => {
    setShowPopup(false);
    mapRef.current?.flyTo({
      center: [
        markers.markerInicial[0].longitude,
        markers.markerInicial[0].latitude,
      ],
      duration: 2000,
      zoom: markers.markerInicial[0].zoom,
    });
  };
  const [showPopup, setShowPopup] = useState(null);
  const toggleTab = () => {
    setShowPopup(true);
  };

  const [showInfo, setShowInfo] = useState({
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
    url: "",
  });
  const [activeId, setActiveId] = useState("");
  const onSelectMarker = (marker) => {
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
      url: marker.url,
    });
    mapRef.current?.flyTo({
      center: { lng: marker.longitude, lat: marker.latitude },
      duration: 1500,
      zoom: marker.zoom,
    });
    setActiveId(marker.id);
  };
  const numeroDeTiendas = markers.arrayMarker[markers.arrayMarker.length - 1];
  return (
    <section className={styles.contenedorMapa}>
      <div className={styles.contenedorbloqueIzq}>
        <div className={styles.bloqueIzq}>
          <p>
            Tiendas: <span>{numeroDeTiendas?.id}</span>
          </p>
        </div>
        <div className={styles.contenedorTiendas}>
          {marcador.map((marker) => (
            <Link2
              onClick={() => {
                toggleTab();
                onSelectMarker(marker);
              }}
              to="contenedorMapa2"
              smooth={true}
              offset={-110}
              spy={true}
              duration={500}
              key={marker.id}
            >
              <div
                onClick={() => {
                  toggleTab();
                  onSelectMarker(marker);
                }}
                className={
                  activeId === marker.id && showPopup
                    ? `${styles.contenedorInfoTiendaMapa} ${styles.contenedorInfoTiendaMapaActivo}`
                    : ` ${styles.contenedorInfoTiendaMapa}`
                }
              >
                <h3>{marker?.nombreTienda}</h3>
                <div className={styles.tienda}>
                  <p>{marker?.direccion}</p>
                  <p>{marker?.telefono}</p>
                  {/* <Link2
                    onClick={() => {
                      toggleTab();
                      onSelectMarker(marker);
                    }}
                    to="contenedorMapa2"
                    smooth={true}
                    offset={-110}
                    spy={true}
                    duration={500}
                    className={styles.boton_como_llegar}
                  >
                    Ver Más
                  </Link2>*/}
                </div>
              </div>
            </Link2>
          ))}
        </div>
        {/*<BloqueTiendas />*/}
      </div>
      <div className={styles.bloqueDer} id="contenedorMapa2">
        <Map
          onStyleLoad
          ref={mapRef}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          className={styles.mapa}
          mapStyle="mapbox://styles/mapbox/streets-v9?optimize=true"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPA}
        >
          <FullscreenControl /> <GeolocateControl /> <NavigationControl />
          <button
            className={styles.reset_map}
            onClick={() => {
              resetMap();
            }}
          >
            Reset Map
          </button>
          {marcador.map((marker) => (
            <Marker
              key={marker.id}
              longitude={marker.longitude}
              latitude={marker.latitude}
              onClick={() => {
                onSelectMarker(marker);
                toggleTab();
              }}
            >
              {showPopup ? (
                <Popup
                  style={{ top: -25, maxWidth: 255 }}
                  longitude={showInfo?.longitude}
                  className="popup"
                  latitude={showInfo?.latitude}
                  closeOnClick={false}
                  anchor={null}
                  onClose={() => setShowPopup(false)}
                >
                  <div className={styles.contenedor_popuop}>
                    <p className={styles.nombre_ciudad_popup}>
                      {showInfo?.nombreTienda}
                    </p>
                    <a
                      title="Dirección"
                      href={showInfo?.comoLlegar}
                      rel="noreferrer"
                      target="_blank"
                      className={styles.direccion_popup}
                    >
                      {showInfo?.direccion}
                    </a>
                    <br></br>
                    <a
                      href={`tel:${showInfo?.telefono}`}
                      className={styles.telefono_popup}
                      title="Teléfono"
                    >
                      <span>
                        <CallIcon></CallIcon>{" "}
                      </span>
                      {showInfo?.telefono}
                    </a>
                    <a
                      title="Cómo llegar"
                      href={showInfo?.comoLlegar}
                      rel="noreferrer"
                      className={styles.boton_popUp}
                    >
                      Cómo llegar
                    </a>
                    <a
                      title="Llamar"
                      href={`tel:${showInfo?.telefono}`}
                      rel="noreferrer"
                      className={styles.boton_popUp}
                    >
                      Llamar
                    </a>
                    <a
                      title="Cómo llegar"
                      href={`${showInfo?.url}`}
                      rel="noreferrer"
                      className={styles.boton_popUp}
                    >
                      Web
                    </a>
                  </div>
                </Popup>
              ) : null}
            </Marker>
          ))}
        </Map>
      </div>
    </section>
  );
};

export default MapaCiudades;
