import { createGlobalStyle } from "styled-components"

import "@fontsource/dm-sans/100.css"
import "@fontsource/dm-sans/100-italic.css"
import "@fontsource/dm-sans/200.css"
import "@fontsource/dm-sans/200-italic.css"
import "@fontsource/dm-sans/300.css"
import "@fontsource/dm-sans/300-italic.css"
import "@fontsource/dm-sans/400.css"
import "@fontsource/dm-sans/400-italic.css"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/500-italic.css"
import "@fontsource/dm-sans/600.css"

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
