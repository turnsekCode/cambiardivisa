import React from "react";
import styles from "./bannerPromoUno.module.css";

const BannerPromoUno = ({ ciudad }) => {
  return (
    <div className={styles.contenedorBannerUno}>
      <img
        className={styles.bannerDesktop}
        src={ciudad?.acf?.foto_1}
        alt="Banner uno"
      />
      <img
        className={styles.bannerMobil}
        src={ciudad?.acf?.foto_1}
        alt="Banner uno mobil"
      />
    </div>
  );
};

export default BannerPromoUno;
