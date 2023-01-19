import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { createGlobalStyle } from "styled-components";
import { isLogged, noticeMsgAtom } from "./atom";
import Header from "./components/common/Header";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLogged);
  const params = useParams();
  const setNoticeMsg = useSetRecoilState(noticeMsgAtom);
  const navigator = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      return setIsLoggedIn(true);
    } else {
      return setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (params.id && !localStorage.getItem("token")) {
      setNoticeMsg("로그인을 해주세요.");
      return navigator("auth");
    }
  }, [params.id]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
