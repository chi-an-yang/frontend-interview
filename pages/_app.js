import '../styles/globals.css';
import 'antd/dist/antd.css';
import Head from 'next/head';
import Script from 'next/script';
import { Provider } from 'react-redux';
import { wrapper } from '../store';

// fortawesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
