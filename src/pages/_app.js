{
  /*import "@/styles/globals.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function App({ Component, pageProps }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM || "";
  const tagManagerArgs = {
    gtmId,
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return <Component {...pageProps} />;
}*/
}
import Script from "next/script";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
    (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', });
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'&gtm_auth=&gtm_preview=&gtm_cookies_win=x';
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MBQXFCS');
    `}
      </Script>
      ;
      <Component {...pageProps} />
    </>
  );
}
