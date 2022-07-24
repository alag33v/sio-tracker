import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    color: #000;
    background-color: #fff;
    padding: 0 10px;
    margin: 0 auto;
    min-height: 100vh;
  }
`;
