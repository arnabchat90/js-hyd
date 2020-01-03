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
    if (ctx.req && ctx.req.user) {
      console.log(ctx.req.user);
      ctx.store.dispatch(
        loginSuccess({
          isLoggedIn: true,
          user: ctx.req.user,
          authToken: ctx.req.user.accessToken
        })
      );
    }
    if (process.browser && !ctx.store.getState().authenitcation) {
      await ctx.store.dispatch(doLogin());
    }
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : { ...ctx.store.getState() };
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

export default withRedux(configureStore)(MyApp);
