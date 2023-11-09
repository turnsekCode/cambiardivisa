import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./menuOrdenador.module.css";

const MenuOrdenador = ({ menu_list, sticky, stickyRef }) => {
  const datos = menu_list?.items;
  return (
    <nav
      ref={stickyRef}
      className={
        sticky
          ? `${styles.contenedorMenuSticky} ${styles.headersticky}`
          : `${styles.contenedorMenu}`
      }
    >
      <ul className={styles.contenedorMenu}>
        <li>
          <a href="/" title="Ir a quickgold">
            INICIO
          </a>
        </li>

        <li className={styles.contenedorSubMenuServicios}>
          <div className={styles.servicios}>
            servicios <KeyboardArrowDownIcon />
          </div>
          <div className={styles.subMenuServicios}>
            <a href="/compro-oro" title="Ir a compro oro">
              COMPRO ORO
            </a>
            <a href="/cambio-divisas" title="Ir a cambio divisas">
              CAMBIO DE DIVISAS
            </a>
            <a href="/empeno-de-joyas" title="Ir a empeño de joyas">
              EMPEÑO DE JOYAS
            </a>
            <a title="Ir a compra de plata" href="/compro-plata">
              COMPRA DE PLATA
            </a>
            <a title="Ir a joyería de ocasión" href="/joyeria-de-ocasion">
              JOYERÍA OCASIÓN
            </a>
            <a title="Ir a invertir en oro" href="/invertir-en-oro">
              ORO DE INVERSIÓN
            </a>

            <a title="Ir a compra de diamantes" href="/vender-diamantes">
              COMPRA DE DIAMANTES
            </a>
          </div>
        </li>

        <li className={styles.contenedorSubMenuTiendas}>
          <a href="/tiendas" title="Tiendas Quickgold">
            Tiendas <KeyboardArrowDownIcon />
          </a>
          <div className={styles.subMenuTiendas}>
            {datos?.map((tienda, index) => (
              <a key={index} href={`${tienda.url}`} title={tienda.title}>
                {tienda.title}
              </a>
            ))}
          </div>
        </li>
        <li>
          <a href="/expansion" title="Ir a expansion">
            SOBRE QUICKGOLD
          </a>
        </li>
        {/* <li>
          <a href="https://quickgold.es/contacto" title="Ir a contacto">
            CONTACTO
          </a>
            </li>*/}
      </ul>
    </nav>
  );
};

export default MenuOrdenador;
