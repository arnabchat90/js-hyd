import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { Provider } from "react-redux";
// import "whatwg-fetch";
import { configureStore } from "../src/store";
import { doLogin, loginSuccess } from "../src/actions/authentication";
import withRedux from "next-redux-wrapper";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // we can dispatch from here too
    console.log("_app initial prop");
    ctx.store.dispatch(doLogin());
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    console.log("_app render", store.getState());
    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default withRedux(configureStore, { debug: true })(MyApp);
