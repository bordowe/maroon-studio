import React from "react"

import styled from "styled-components"

import { breakpoint } from "../../styles/theme"
import { theme } from "../../styles/theme"

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: ${breakpoint.largeDesktop}px;
    height: fit-content;
    padding: 32px 32px 0 32px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid aqua;

    @media ${theme.media.largeMobile} {
        align-items: center;
        padding: 15px 32px 5px 32px;
    }
`

export const LogoNavbar = styled.div`
    width: fit-content;
    height: fit-content;
    background-repeat: no-repeat;
    background-size: contain;
`

export const LinksBar = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    gap: 25px;
    border: 2px solid purple;
    @media (width < 769px) {
        display: none;
    }
`

export const LinksWrapper = styled.div`
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    font-size: 20px;
    font-weight: 400;
    text-transform: capitalize;
    a {
        color: #73013c;
        text-decoration: none;
    }
`

export const NavbarRigthSection = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid blue;
`
