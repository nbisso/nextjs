import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import firebase from "firebase"
import CleanLayout from "../components/layouts/CleanLayout";
import SiteLayout from "../components/layouts/SiteLayout";

import theme from "../src/theme";

var firebaseConfig = {
  apiKey: "AIzaSyCwk-9Lo6_9k2LZGk6FrH-n4rWXv3xWvrQ",
  authDomain: "cocinando-766f0.firebaseapp.com",
  databaseURL: "https://cocinando-766f0.firebaseio.com",
  projectId: "cocinando-766f0",
  storageBucket: "cocinando-766f0.appspot.com",
  messagingSenderId: "311671787189",
  appId: "1:311671787189:web:1bb431b96c47d3c69af8fc",
  measurementId: "G-TM68NRZNL0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


function MyApp(props) {

  const { Component, pageProps, router } = props;

  const getLayout =
    Component.getLayout || ((page) => <SiteLayout children={page} />);

  

  return getLayout(
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
