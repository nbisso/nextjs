import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import firebase from "firebase"
import CleanLayout from "../components/layouts/CleanLayout";
import SiteLayout from "../components/layouts/SiteLayout";

import theme from "../src/theme";
import enviroment from "../util/enviroment";

var firebaseConfig = enviroment.FIREBASE_FRONT_CONFIG;

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
