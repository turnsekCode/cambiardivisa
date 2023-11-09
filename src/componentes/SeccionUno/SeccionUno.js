import React from "react";
import styles from "./seccionUno.module.css";

const SeccionUno = ({ nombreCiudad, telefono }) => {
  return (
    <seccion className={styles.contenedor}>
      <h1 className={styles.titulo}>Tiendas quickgold en {nombreCiudad}</h1>
      {/*<p>El mejor cambio de divisas en {nombreCiudad}</p>*/}
      {/*<p>Hacemos mejoras por cantidad ¿quieres saber tu precio?</p>
      <a className={styles.botonLamar} href={`tel:${telefono}`}>
        LLAMA GRATIS AL {telefono}
  </a>*/}
    </seccion>
  );
};

export default SeccionUno;
