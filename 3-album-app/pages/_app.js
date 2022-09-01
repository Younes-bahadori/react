import * as React from "react";
import Head from "next/head";
import { Navbar } from "../components/navbar";

export default function App({Component, pageProps}) {
  return( 
<>
<Navbar />
      <Component {...pageProps} /></>

  )
};
