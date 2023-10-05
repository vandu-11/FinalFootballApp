// pages/_app.js

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Add the Razorpay SDK script */}
        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
