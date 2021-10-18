import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
  static async getInitalProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return(
      <Html>
        <Head />
        <body className={`p-0 m-0 font-mono`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
