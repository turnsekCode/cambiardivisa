import React from "react";
import styles from "./botonesLlamar.module.css";

const BotonesLlamar = ({ ciudad }) => {
  return (
    <div className={styles.contenedorBotones}>
      <a className={styles.botonLlamar} href={`tel:${ciudad?.acf?.telefono}`}>
        LLAMAR
      </a>

      <a
        className={styles.botonWhatsapp}
        target="_blank"
        href={`https://wa.me/+34${(ciudad?.acf?.mobile).replace(/\s+/g, "")}`}
      >
        WHATSAPP
      </a>
    </div>
  );
};

export default BotonesLlamar;
