import Head from "next/head";
import GlobalStyle from "../src/theme/GlobalStyle"

export default function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=`${ID DO GOOGLE ANALYTICS}`"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'ID DO GOOGLE ANALYTICS');
          `,
        }}
      />

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
  )
}