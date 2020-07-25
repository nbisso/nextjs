// import React from 'react';
// import PropTypes from 'prop-types';
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

// export default function MyApp(props) {
//     const { Component, pageProps } = props;

//     React.useEffect(() => {
//         // Remove the server-side injected CSS.
//         const jssStyles = document.querySelector('#jss-server-side');
//         if (jssStyles) {
//             jssStyles.parentElement.removeChild(jssStyles);
//         }
//     }, []);

//     return (

//     );
// }

// MyApp.propTypes = {
//     Component: PropTypes.elementType.isRequired,
//     pageProps: PropTypes.object.isRequired,
// };

import React from "react";
import App from "next/app";
//import SiteLayout from "../components/SiteLayout";
//import "../css/tailwind.css";
const CleanLayout = ({ children }) => (
  <div className="bg-white antialiased">
    <div className="mt-6 sm:mt-0 sm:py-12">{children}</div>
  </div>
);

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    const getLayout =
      Component.getLayout || ((page) => <CleanLayout children={page} />);

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
}

export default MyApp;
