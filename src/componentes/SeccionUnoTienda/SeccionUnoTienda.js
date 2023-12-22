import React from "react";
import styles from "./seccionUnoTienda.module.css";
//import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
//import Image from "next/image";
//import FsLightbox from "fslightbox-react";

const SeccionUno = ({ ciudad, tiendaGoogle }) => {
  //const [toggler, setToggler] = useState(false);
  const tienda = tiendaGoogle?.result?.rating;
  if (tienda?.estrellas > 4.7) {
    var img_valoracion = 69;
  } else if (tienda?.estrellas < 4.8 && tienda?.estrellas < 4.3) {
    var img_valoracion = 62;
  } else if (tienda?.estrellas < 4.4 && tienda?.estrellas < 3.7) {
    var img_valoracion = 55;
  } else if (tienda?.estrellas < 3.8 && tienda?.estrellas < 3.3) {
    var img_valoracion = 48;
  } else if (tienda?.estrellas < 3.4 && tienda?.estrellas < 2.7) {
    var img_valoracion = 41;
  } else if (tienda?.estrellas < 2.8 && tienda?.estrellas < 2.3) {
    var img_valoracion = 34;
  } else if (tienda?.estrellas < 2.4 && tienda?.estrellas < 1.7) {
    var img_valoracion = 27;
  } else if (tienda?.estrellas < 1.8 && tienda?.estrellas < 1.3) {
    var img_valoracion = 20;
  } else if (tienda?.estrellas < 1.4 && tienda?.estrellas < 0.7) {
    var img_valoracion = 13;
  }
  return (
    <article className={styles.contenedorSeccionUno}>
      <section className={styles.bloqueDer}>
        <h1>{ciudad?.acf?.titulo_del_h1}</h1>
      </section>
      {/* <FsLightbox
        toggler={toggler}
        sources={[
          ciudad?.acf?.foto_1,
          ciudad?.acf?.foto_2,
          ciudad?.acf?.foto_3,
        ]}
      />*/}
      <section className={styles.bloqueIzq}>
        <div className={styles.bloqueResenas}>
          <div className={styles.contenedorLogoGoogle}>
            <img
              src="/assets/GOOGLE.png"
              width={29}
              height={30}
              alt="Logo google"
            />
            <div className={styles.contenedorValoraciones}>
              <div className={styles.contenedorResenas}>
                <span className={styles.img_stars}>
                  <span
                    style={{ width: img_valoracion }}
                    className={styles.imgValoracion}
                  ></span>
                </span>
                <span className={styles.valoracionResenas}>
                  {tiendaGoogle?.result?.rating}
                </span>
                <div className={styles.numero_reviews}>
                  <span>
                    <a href={ciudad?.acf?.enlace_resenas} target="_blank">
                      Ver reseñas
                    </a>
                  </span>
                </div>
              </div>
              <div className={styles.resenasGoogle}>
                {tiendaGoogle?.result?.user_ratings_total}{" "}
                <span>opiniones en Google</span>
              </div>
            </div>
          </div>
          <div className={styles.verResenas}>
            <a href={ciudad?.acf?.escribir_resenas_landings} target="_blank">
              Déjanos tu opinion
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default SeccionUno;
