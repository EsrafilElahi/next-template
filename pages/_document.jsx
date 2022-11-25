import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class LocalizedDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // locale is in ctx.locale

    return initialProps
  }

  render = () => (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default LocalizedDocument;
