import Head from 'next/head';
import type { AppProps } from 'next/app';
import { my } from '@/data';
import { site } from '@/config';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name="title" content={site.title} />
        <meta name="description" content={my.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={site.url} />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={my.description} />
        <meta property="og:image" content={site.thumbnail} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={site.url} />
        <meta property="twitter:title" content={site.title} />
        <meta property="twitter:description" content={my.description} />
        <meta property="twitter:image" content={site.thumbnail} />

        <link rel="icon" href={site.favicon} />
      </Head>
      <Component {...pageProps} />
      <Toaster position="bottom-right" />
    </>
  );
}

export default MyApp;
