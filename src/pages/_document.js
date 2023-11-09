import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="es">
      <meta name="robots" content="noindex"></meta>
      <link
        rel="stylesheet preload prefetch"
        href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
        as="style"
      ></link>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="66a968ad-70de-4703-81be-84844ed28395"
        data-blockingmode="auto"
        type="text/javascript"
        property="lazyOnload"
      ></Script>
      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/66a968ad-70de-4703-81be-84844ed28395/cd.js"
        type="text/javascript"
        property="lazyOnload"
      ></Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MBQXFCS&gtm_auth=&gtm_preview=&gtm_cookies_win=x"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          id="tag-manager"
        ></iframe>
      </noscript>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
