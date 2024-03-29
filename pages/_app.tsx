import React from 'react';
import { AppProps } from 'next/app';

import '../styles/index.css'
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
   
    return <>
        <Head>
            <title>Plml</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </>
}
export default App