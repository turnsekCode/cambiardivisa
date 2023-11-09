import React from "react";
import styles from "./resenasGoogle.module.css";
import Image from "next/image";

const ResenasGoogle = ({ tiendaGoogle, ciudad }) => {
  return (
    <>
      {tiendaGoogle?.result?.reviews.map((resena, index) => {
        if (resena.rating > 4.7) {
          var img_valoracion = 69;
        } else if (resena.rating < 4.8 && resena.rating < 4.3) {
          var img_valoracion = 62;
        } else if (resena.rating < 4.4 && resena.rating < 3.7) {
          var img_valoracion = 55;
        } else if (resena.rating < 3.8 && resena.rating < 3.3) {
          var img_valoracion = 48;
        } else if (resena.rating < 3.4 && resena.rating < 2.7) {
          var img_valoracion = 41;
        } else if (resena.rating < 2.8 && resena.rating < 2.3) {
          var img_valoracion = 34;
        } else if (resena.rating < 2.4 && resena.rating < 1.7) {
          var img_valoracion = 27;
        } else if (resena.rating < 1.8 && resena.rating < 1.3) {
          var img_valoracion = 20;
        } else if (resena.rating < 1.4 && resena.rating < 0.7) {
          var img_valoracion = 13;
        }
        return resena.rating >= 4 ? (
          <div key={index} className={styles.contenedorResenasGoogle}>
            <div className={styles.contenedorSuperior}>
              {" "}
              <img
                src={resena.profile_photo_url}
                alt="Imagen reseña google"
                className={styles.imagenResena}
                width={70}
                height={70}
                loading="lazy"
              />
              <Image
                src="/assets/GOOGLE.png"
                alt="Imagen reseña google"
                className={styles.imagenGoogle}
                width={30}
                height={30}
              />
              <div className={styles.imagenResena}>
                <p className={styles.nombreUsuario}>{resena.author_name}</p>
                <p className={styles.textoInferior}>
                  {resena.relative_time_description}
                </p>
              </div>
            </div>
            <div className={styles.contenedorEstrellas}>
              {" "}
              <span className={styles.img_stars}>
                <span
                  style={{ width: img_valoracion }}
                  className={styles.imgValoracion}
                ></span>
              </span>
              <span className={styles.valoracionResenas}>{resena.rating}</span>{" "}
            </div>
            <div className={styles.textoContenido}>{resena.text}</div>
          </div>
        ) : null;
      })}
      <div className={styles.botonVerMas}>
        <a target="_blank" href={ciudad?.acf?.enlace_resenas}>
          VER MÁS
        </a>
      </div>
    </>
  );
};

export default ResenasGoogle;
