import React from "react";
import styles from "./bloqueInfoTienda.module.css";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ResenasGoogle from "@/componentes/ResenasGoogle/ResenasGoogle";

const SeccionTres = ({ tiendaGoogle, ciudad }) => {
  const diaSemana = tiendaGoogle?.result.opening_hours?.weekday_text[0];
  const diaSabado = tiendaGoogle?.result.opening_hours?.weekday_text[5];
  const diaDomingo = tiendaGoogle?.result.opening_hours?.weekday_text[6];
  const diaSemanaReemplazo = diaSemana?.replace("lunes:", "");
  const diaSabadoReemplazo = diaSabado?.replace("sábado:", "");
  const diaDomingoReemplazo = diaDomingo?.replace("domingo:", "");
  return (
    <aside className={styles.contenedorSeccionTres}>
      <section className={styles.contenedorInfoTienda}>
        <div className={styles.bloqueIzqInfoTienda}>
          <p className={styles.bloqueIzqTitulo}>Contacto</p>
          <p className={styles.bloqueIzqDireccion}>
            {tiendaGoogle?.result?.formatted_address}
          </p>

          <div className={styles.iconosTelefono}>
            <a
              title={`Llamar a Quickgold ${ciudad?.acf?.ciudad_landing}`}
              href={`tel:${ciudad?.acf?.telefono}`}
            >
              <span className={styles.bloqueIzqTel}>
                {ciudad?.acf?.telefono}
              </span>
            </a>
            <div className={styles.contenedorIconos}>
              <a
                title={`Llamar a Quickgold ${ciudad?.acf?.ciudad_landing}`}
                className={styles.telefonoIcon}
                href={`tel:${ciudad?.acf?.telefono}`}
              >
                <PhoneInTalkIcon />
                <span className={styles.bloqueIzqTel}></span>
              </a>
              <a
                title="Escribir WhatsApp"
                className={styles.WhatsAppIcon}
                target="_blank"
                href={`https://wa.me/${(ciudad?.acf?.mobile).replace(
                  /\s+/g,
                  ""
                )}`}
              >
                <WhatsAppIcon />
                {/*<span className={styles.bloqueIzqTel}>{ciudad?.acf?.mobile}</span>*/}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bloqueDerInfoTienda}>
          <p className={styles.bloqueDerTitulo}>Horario</p>
          <p className={styles.bloqueDerHorarioHabitual}>Horario Habitual</p>
          <p className={styles.bloqueDerdias}>Lunes a Viernes:</p>
          <p className={styles.bloqueDerHorario}>{diaSemanaReemplazo}</p>
          <p className={styles.bloqueDerSabado}>Sábado:</p>
          <p className={styles.bloqueDerSabadoHorario}>{diaSabadoReemplazo}</p>
          <p className={styles.bloqueDerDomingo}>Domingo:</p>
          <p className={styles.bloqueDerDomingoCerrado}>
            {diaDomingoReemplazo}
          </p>
        </div>
      </section>
      <section className={styles.contenedorMapa}>
        <iframe
          title="Mapa Tienda"
          src={ciudad?.acf?.mapa_landing}
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </section>
      <section className={styles.contenedorResenasGoogle}>
        <ResenasGoogle tiendaGoogle={tiendaGoogle} ciudad={ciudad} />
      </section>
    </aside>
  );
};

export default SeccionTres;
