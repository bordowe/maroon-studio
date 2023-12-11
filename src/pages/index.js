import React from "react"
import { Helmet } from "react-helmet"
import styled, { createGlobalStyle } from "styled-components"
import "@fontsource/lemon/400.css"
import logo from "../images/logo.png"
import favicon from "../images/icon.png"

const Main = styled.main`
    background-color: #ff7bc0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    gap: 10px;
`
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lemon', sans-serif;
    }
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lemon', sans-serif;
    }
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lemon', sans-serif;
    }
    body {
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
    }
`
const H1 = styled.h1`
    color: #73013c;
    font-size: 5vw;

    @media (max-width: 900px) {
        font-size: 7vw;
    }
`
const Logo = styled.div`
    background: no-repeat center/100% url(${logo});
    height: 200px;
    aspect-ratio: 1/1;
`

const IndexPage = () => {
    return (
        <Main>
            <GlobalStyles />
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Maroon Studio - coming soon!"
                />
                <title>Maroon Studio - coming soon!</title>
                <link rel="canonical" href="https://maroon-studio.com/" />
                <link rel="icon" type="image/x-icon" href={favicon} />
            </Helmet>

            <H1>coming soon!</H1>
            <Logo />
        </Main>
    )
}

export default IndexPage

export const Head = () => <title></title>
