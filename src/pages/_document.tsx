import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="http://fonts.googleapis.com" />
          <link rel="preconnect" href="http://fonts.gstatic.com" />
          <link
            href="http://fonts.googleapis.com/css2?family=Anton&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
