import { createGlobalStyle } from 'styled-components';
import { Font, Global, Color } from './variables';

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
        color: ${Color.defaultFontColor};
        background-color: ${Global.backgroundColor}
    }
    p, 
    span {
        color: ${Color.secondary};
        font-family: 'Montserrat';
        font-weight: 200;
        font-size: ${Font.size[12]}
    }
`;

export default GlobalStyle;
