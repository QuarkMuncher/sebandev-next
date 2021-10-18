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
          <script src="https://kit.fontawesome.com/68f14829f8.js" crossOrigin="anonymous" />
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
