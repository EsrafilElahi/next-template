import React from 'react';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '../redux/store';
import { Provider } from 'react-redux';
// import { store, persistor } from '../redux/store';
import NProgress from 'nprogress';
import Router from 'next/router';
import "nprogress/nprogress.css";
import '../styles/globals.css'


// loading progress
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  const store = useStore();
  const getLayout = Component.getLayout || ((page) => page);


  return (
    <Provider store={store}>
      <PersistGate persistor={store.__persistor} loading={<div>loading...</div>}>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </PersistGate>
    </Provider>
  )
}

// export default MyApp
export default wrapper.withRedux(MyApp)