import React from "react";
import BloqueInfoTienda from "../BloqueInfoTienda/BloqueInfoTienda";
import Conversor from "../ConversorDivisa/Conversor";
import styles from "./seccionDos.module.css";

const SeccionTres = ({ ciudad, telefono, tiendaGoogle, comprar }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Conversor comprar={comprar} ciudad={ciudad} telefono={telefono} />
      <BloqueInfoTienda ciudad={ciudad} tiendaGoogle={tiendaGoogle} />
    </div>
  );
};

export default SeccionTres;
