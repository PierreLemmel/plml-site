import React, { useEffect, useRef, useState } from 'react';
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
        <div className="m-0 w-screen h-screen bg-slate-900 text-gray-300 overflow-x-hidden">
            <Component {...pageProps} />
        </div>
    </>
}
export default App