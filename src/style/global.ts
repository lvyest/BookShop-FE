import {createGlobalStyle} from 'styled-components';
import 'sanitize.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
  }
`;

export default GlobalStyle;
