import React from "react";
import styles from "./seccionCUatroTexto.module.css";

const SeccionCuatroTexto = ({ landing }) => {
  return (
    <article className={styles.contenedorTexto}>
      <h3>{landing.acf.cambiar_divisa.titulo}</h3>
      <p>{landing.acf.cambiar_divisa.texto}</p>
    </article>
  );
};

export default SeccionCuatroTexto;
