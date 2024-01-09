import React from "react";
import styles from "./botonLlamarFijo.module.css";

const BotonLlamarFijo = ({ ciudad }) => {
  return (
    <div className={styles.contenedorBotonFijo}>
      <a href={`tel:${ciudad?.acf?.telefono}`}>
        LLAMA AL {ciudad?.acf?.telefono}
      </a>
    </div>
  );
};

export default BotonLlamarFijo;
