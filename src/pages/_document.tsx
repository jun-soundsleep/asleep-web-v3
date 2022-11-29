import Document, { Html, Head, Main, NextScript } from 'next/document';

class AsleepDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="/images/favicon/favicon4.ico"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="/images/favicon/favicon4.png"
            type="image/x-icon"
          />
          {/* favicon end */}
          {/*
          for pwa
          */}
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/pwa-favicon/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/pwa-favicon/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/pwa/icon-192x192.png" />
          <meta name="theme-color" content="#fff" />
          <meta name="msapplication-TileColor" content="#FF98BA"></meta>
          {/*
          for pwa end
          */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AsleepDocument;
