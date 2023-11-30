import React from "react";
import BloqueInfoTienda from "../BloqueInfoTienda/BloqueInfoTienda";
import Conversor from "../ConversorDivisa/Conversor";
import styles from "./seccionDos.module.css";

const SeccionTres = ({ ciudad, telefono, tiendaGoogle, comprar }) => {
  return (
    <article className={styles.contenedorSeccionDos}>
      <Conversor comprar={comprar} ciudad={ciudad} telefono={telefono} />
      <BloqueInfoTienda ciudad={ciudad} tiendaGoogle={tiendaGoogle} />
    </article>
  );
};

export default SeccionTres;
