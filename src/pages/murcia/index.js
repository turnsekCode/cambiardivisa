import Head from "next/head";
import Layout from "@/componentes/Layout/Layout";
import SeccionDos from "@/componentes/SeccionDos/SeccionDos";
import SeccionUno from "@/componentes/SeccionUno/SeccionUno";

import Script from "next/script";

const index = ({ ciudad, general, markers }) => {
  return (
    <>
      <Head>
        <title>
          El mejor cambio de divisas de {ciudad?.acf?.ciudad_landing} |
          Quickgold
        </title>
        <meta
          name="description"
          content={`La mejor tasa de cambio por tu divisa en ${ciudad?.acf?.ciudad_landing} Tenemos más de 30 monedas diferentes al momento y sin comisiones`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icon.png" />
        {ciudad?.acf?.nonscript_chat}
      </Head>
      <Script strategy="lazyOnload" id="livechat">
        {ciudad?.acf?.script_chat}
      </Script>
      <Layout ciudad={ciudad} telefono="968 416 924">
        <SeccionUno
          nombreCiudad={ciudad?.acf?.ciudad_landing}
          //telefono={ciudad?.acf?.telefono}
          telefono="968 416 924"
        />

        <SeccionDos
          ciudad={ciudad}
          comprar={ciudad?.acf?.vende_divisa}
          markers={markers}
          telefono="968 416 924"
          //telefono={ciudad?.acf?.telefono}
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "8960";
const apiGeneral = "13848";
export async function getStaticProps() {
  //datos de los campos personalizados de la ciudad
  const madrid = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await madrid.json();

  //fin datos de los campos personalizados de la ciudad
  const res = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await res.json();
  const tienda = ciudad?.acf?.ciudad_oro;
  const marker = await fetch(
    `https://panel.quickgold.es/markers${tienda}.json`
  );
  const markers = await marker.json();

  return {
    props: {
      ciudad,
      general,
      markers,
    },
    revalidate: 1,
  };
}
