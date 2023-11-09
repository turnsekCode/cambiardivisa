import React from "react";
import styles from "./listadoTienda.module.css";
import MapaCiudades from "../MapaCiudades/MapaCiudades";

const ListadoTiendas = ({ markers }) => {
  return (
    <div className={styles.contenedorListadoTiendas}>
      <MapaCiudades markers={markers} />
    </div>
  );
};

export default ListadoTiendas;
