import React from "react";
import styles from "./header.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header} id="to_top">
      <nav className={styles.contenedorLogo}>
        <figure>
          <a
            href="https://quickgold.es/"
            title="Logo Quickgold"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/logo.png"
              alt="Quickgold Logo"
              className={styles.logo}
              width={163}
              height={30}
            />
          </a>
        </figure>
        <div className={styles.contenedorRedes}>
          <div className={styles.contenedorIconos}>
            <a
              target="_blank"
              className={styles.linkedin}
              href="https://www.linkedin.com/company/quickgold"
              title="Linkedin"
            >
              <Image
                src="/assets/Vector12.png"
                alt="Quickgold Logo"
                className={styles.vector}
                width={12}
                height={12}
              />
              <LinkedInIcon />
            </a>
            <a
              href="https://www.facebook.com/quickgold.es/"
              title="Facebook"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/quickgold.es/"
              title="Instagram"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </div>
          <div className={styles.botonLlamar}>
            <a href="tel:900373629" title="Teléfono">
              LLAMA GRATIS
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
