import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

.notosanskr * { 
 font-family: 'Noto Sans KR', sans-serif;
}
  *, *::before, *::after {
    font-family: 'ImcreSoojin';
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
