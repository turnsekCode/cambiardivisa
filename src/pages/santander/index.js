import Head from "next/head";
import Layout from "@/componentes/Layout/Layout";
import SeccionUno from "@/componentes/SeccionUnoTienda/SeccionUnoTienda";

import React from "react";
import Script from "next/script";
import SeccionTres from "@/componentes/SeccionTres/SeccionTres";
const index = ({ ciudad, tiendaGoogle, general }) => {
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

      <Layout ciudad={ciudad}>
        <SeccionUno
          nombreCiudad={ciudad?.acf?.ciudad_landing}
          ciudad={ciudad}
          tiendaGoogle={tiendaGoogle}
        />

        <SeccionTres
          ciudad={ciudad}
          tiendaGoogle={tiendaGoogle}
          comprar={ciudad?.acf?.vende_divisa}
          telefono={ciudad?.acf?.telefono}
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "10551";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress

export async function getStaticProps() {
  //datos de los campos personalizados de la ciudad
  const ciudad1 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await ciudad1.json();
  //fin datos de los campos personalizados de la ciudad
  const res = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await res.json();
  //datos de google para tiendas
  const tienda = ciudad?.acf?.tienda;
  const google = await fetch(
    `https://panel.quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda}.txt`
  );
  const tiendaGoogle = await google.json();

  return {
    props: {
      ciudad,
      tiendaGoogle,
      general,
    },
    revalidate: 1,
  };
}
