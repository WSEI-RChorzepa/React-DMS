import { createGlobalStyle } from "styled-components";
import { Variables } from "styledHelpers";
import { Font, Global, Color } from "./variables";

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
        background-color: ${Global.backgroundColor};

        &::-webkit-scrollbar-track
        {
            box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
            border-radius: 2px;
            background-color: #FFF;
        }

        &::-webkit-scrollbar
        {
            width: 12px;
            background-color: #F5F5F5;
        }

        &::-webkit-scrollbar-thumb
        {
            border-radius: 2px;
            box-shadow: inset 0 0 10px rgba(0,0,0,.3);
            background-color: ${Variables.Color.silver};
        }
    }

    p, 
    span {
        color: ${Color.secondary};
        font-weight: 200;
        font-size: ${Font.size[12]}
    }

    strong {
        color: ${Color.secondary};
        font-weight: 500;
    }

    h5 {
        font-size: ${Variables.Font.size[14]};
        color: ${Variables.Color.defaultFontColor};
        font-weight: 500;
        text-shadow: 1px 1px 2px rgba(0,0,0, .1);
        margin-bottom: 1rem;
    }

    a {
        color: ${Color.primary};

        strong {
            color: ${Color.defaultFontColor}
        }
    }

    table {
    

        thead {
            tr {
                padding: 1rem 0;
                th {
                    padding: .5rem 0 1rem;
                    text-align: left;
                    font-weight: 500;
                    padding-right: 2.5rem;
                }
            }
        }
        tbody {
            tr {
                td {
                    padding-right: 2.5rem;
                    padding-bottom: .5rem;
                }
            }
        }
    }

`;

export default GlobalStyle;
