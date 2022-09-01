import * as React from "react";
import Head from "next/head";
import { Navbar } from "../components/navbar";
import { Provider } from "../context/state";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}
