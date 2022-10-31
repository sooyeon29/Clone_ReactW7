import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Noto Sans KR', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&display=swap')
    format("woff");
  font-weight: normal;
  font-style: normal;
  unicode-range: U+AC00-U+D7A3;
}

@font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');

}
  *, *::before, *::after {
  font-family: 'SpoqaHanSansNeo-Regular', sans-serif;
    box-sizing: border-box;
  }

  body {
  font-family: 'SpoqaHanSansNeo-Regular', sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: var(--gray-900);
        display: block;

  }
  :root {
    --primary-050: #F4FFFC;
    --primary-100: #EAFFF7;
    --primary-200: #D0FFED;
    --primary-300: #A2F5D5;
    --primary-400: #84EAC3;
    --primary-500: #53E3AC;
    --primary-600: #4DCA9A;
    --primary-700: #32B986;
    --primary-800: #24966B;
    --primary-900: #136B4A;
    --yellow-050: #FFF7DC;
    --yellow-100: #FEEDB4;
    --yellow-200: #FEE283;
    --yellow-300: #FED850;
    --yellow-400: #FFD324;
    --yellow-500: #FFB700;
    --yellow-600: #FFA400;
    --yellow-700: #FF7300;
    --red-050: #FFECEE;
    --red-100: #FFC8D1;
    --red-200: #F89096;
    --red-300: #F1626D;
    --red-400: #FD3049;
    --red-500: #FF002A;
    --red-600: #F4002A;
    --red-700: #D6001C;
    --blue-050: #E6F2FF;
    --blue-100: #BBDCFF;
    --blue-200: #8FC7FF;
    --blue-300: #60B0FF;
    --blue-400: #3E9FFF;
    --blue-500: #1290FE;
    --blue-600: #1B6FDB;
    --blue-700: #1B5EC9;
    --gray-050: #F8F9FD;
    --gray-100: #F1F3F7;
    --gray-200: #E9EBEC;
    --gray-300: #C5C8CE;
    --gray-400: #AEB4BF;
    --gray-500: #89939F;
    --gray-600: #646F7C;
    --gray-700: #454B53;
    --gray-800: #282B30;
    --gray-900: #1B1C1F;
    --white: #FFFFFF;
    --black: #121212;
    --shadow-low: 0 2px 8px 0 rgba(0,0,0,0.1);
    --shadow-medium: 0 4px 16px 0 rgba(0,0,0,0.12);
    --shadow-high: 0 8px 36px 0 rgba(0,0,0,0.15);
    -webkit-tap-highlight-color: transparent;
}
`;

export default GlobalStyle;
