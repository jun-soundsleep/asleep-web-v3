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
