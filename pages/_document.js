import Document, {Html, Head, Main, NextScript} from "next/document";
import {Container} from "../components/atoms";

export default class MyDocument extends Document {
  static async getInitalProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return(
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css?v=1234"
                integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
                crossOrigin="anonymous" />
        </Head>
        <body className={`p-0 m-0 font-mono`} >
          <Container>
            <Main />
            <NextScript />
          </Container>
        </body>
      </Html>
    );
  }
}
