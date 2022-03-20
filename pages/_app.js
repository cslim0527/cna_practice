import "semantic-ui-css/semantic.min.css";
import "../styles/custom.scss";

import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
