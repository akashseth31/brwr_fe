import '../styles/globals.css';
import React from 'react';
import store from '../store';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />)
}

export default store.withRedux(MyApp);
