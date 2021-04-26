import { createGlobalStyle } from 'styled-components';
import { Font, Global } from './variables';

const GlobalStyle = createGlobalStyle`
        * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        font-family: ${Global.fontFamily};
        font-size: ${Global.fontSize};
        font-weight: ${Global.fontWeight};
        color: ${Font.color.default};
        background-color: ${Global.backgroundColor}
    }
    p, 
    span {
        color: ${Font.color.paragraphs};
        font-weight: 200;
    }
`;

export default GlobalStyle;
