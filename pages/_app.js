import "semantic-ui-css/semantic.min.css";
import "../styles/custom.scss";

import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

/*
 *  _app.js의 역할
 *  1. 페이지 전환 시 레이아웃을 유지 할 수 있다.
 *  2. 페이지 전환 시 상태값을 유지 할 수 있다.
 *  3. componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
 *  4. 추가적인 데이터를 페이지로 주입 시켜주는게 가능하다.
 *  5. 글로벌 리소스를 이곳에 선언한다.
 * */

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
