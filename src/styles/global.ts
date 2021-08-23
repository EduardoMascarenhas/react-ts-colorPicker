import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
  }

  .color-switcher-icon{
    color: #fff;
    width: 20px;
    height: 20px;
  }

  .text-center {
    text-align: center;
  }
  .col-12 {
    width: 100%
  }

`;
