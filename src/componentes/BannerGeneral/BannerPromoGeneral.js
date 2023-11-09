import React from "react";
import styles from "./bannerPromoDos.module.css";

const BannerPromoGeneral = ({ general }) => {
  return (
    <div className={styles.contenedorBannerUno}>
      <img
        className={styles.bannerDesktop}
        src={general?.acf?.imagen_general_desktop}
        alt="Banner general"
      />
      <img
        className={styles.bannerMobil}
        src={general?.acf?.imagen_general_mobil}
        alt="Banner general mobil"
      />
    </div>
  );
};

export default BannerPromoGeneral;
