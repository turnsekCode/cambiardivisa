import styles from "./layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FooterMobil from "../FooterMovil/FooterMobil";
import BotonLamarFijo from "../BotonLlamarFijo/BotonLlamarFijo";
import BotonesLlamar from "../BotonesLlamarWT/BotonesLlamar";
//import useSticky from "../../utilities/useSticky";
//import ScrollToTop from "react-scroll-to-top";

export default function Layout({ children, menu_list, ciudad }) {
  //const { sticky, stickyRef } = useSticky();
  return (
    <>
      <main className={styles.contenedor}>
        <Header menu_list={menu_list} />
        {children}
        <FooterMobil /> <Footer />
        {/*<ScrollToTop smooth />*/}
        {ciudad?.acf?.tienda === "" ? (
          <BotonLamarFijo ciudad={ciudad} />
        ) : (
          <BotonesLlamar ciudad={ciudad} />
        )}
      </main>
    </>
  );
}
