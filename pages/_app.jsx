import React from 'react';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '../redux/store';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../lib/theme';
import createEmotionCache from '../lib/createEmotionCache';

// import { store, persistor } from '../redux/store';
import NProgress from 'nprogress';
import Router from 'next/router';
import "nprogress/nprogress.css";
import '../styles/globals.css'


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// loading progress
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const store = useStore();
  const getLayout = Component.getLayout || ((page) => page);


  return (
    <Provider store={store}>
      <PersistGate persistor={store.__persistor} loading={<div>loading...</div>}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />, pageProps)}
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  )
}

// export default MyApp
export default wrapper.withRedux(MyApp)