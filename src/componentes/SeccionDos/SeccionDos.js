import React from "react";
import Conversor from "@/componentes/ConversorDivisa/Conversor";
import ListadoTiendas from "../ListadoTiendas/ListadoTiendas";
import styles from "./seccionDos.module.css";

const SeccionDos = ({ ciudad, comprar, markers, telefono }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Conversor comprar={comprar} ciudad={ciudad} telefono={telefono} />
      <ListadoTiendas ciudad={ciudad} markers={markers} telefono={telefono} />
    </div>
  );
};

export default SeccionDos;
