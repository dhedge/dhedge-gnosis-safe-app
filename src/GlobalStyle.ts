import { createGlobalStyle } from "styled-components";
import avertaFont from "@gnosis.pm/safe-react-components/dist/fonts/averta-normal.woff2";
import avertaBoldFont from "@gnosis.pm/safe-react-components/dist/fonts/averta-bold.woff2";

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }

    body {
       height: 100%;
       margin: 0px;
       padding: 0px;
    }

    #root {
        height: 100%;
        padding-right: 0.5rem;
    }

    .MuiFormControl-root,
    .MuiInputBase-root {
        width: 100% !important;
    }

    .row-title {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .mg-r-small {
        margin-right: 8px;
    }

    .mg-b-small {
        margin-bottom: 16px;
    }

    .mg-b-smaller {
        margin-bottom: 4px;
    }

    .flex-row {
        display: flex;
        flex direction: row;
    }

    .flex-end {
        justify-content: flex-end;
    }

    .select-width {
        width: 80px;
    }

    .confirm-button-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 16px;
    }

    .padding-16 {
        padding: 16px
    }

    .button-link {
        background: none!important;
        border: none;
        padding: 0!important;
        text-decoration: underline;
        cursor: pointer;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
    }

    .space-between {
        justify-content: space-between;
    }

    @font-face {
        font-family: 'Averta';
        src: local('Averta'), local('Averta Bold'),
        url(${avertaFont}) format('woff2'),
        url(${avertaBoldFont}) format('woff');
    }
`;

export default GlobalStyle;
