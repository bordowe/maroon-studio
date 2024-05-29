import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
    }
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
    }
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
    }
    body {
        margin-left: auto;
        margin-right: auto;
        background-color: #FFEFF5;
    }
`
