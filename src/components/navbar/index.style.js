import styled from "styled-components"

import { breakpoint } from "../../styles/theme"
import { theme } from "../../styles/theme"

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: ${breakpoint.largeDesktop}px;
    height: fit-content;
    padding: 32px 32px 0 32px;
    margin-left: auto;
    margin-right: auto;

    @media ${theme.media.largeMobile} {
        align-items: center;
        padding: 15px 32px 5px 32px;
    }
`

export const LinksBar = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    gap: 25px;
    @media (width < 769px) {
        display: none;
    }
`

export const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    text-transform: capitalize;
    position: relative; /* Add relative positioning to parent */
    a {
        color: #73013c;
        text-decoration: none;
    }
`

export const NavbarRightSection = styled.div`
    display: flex;
    justify-content: space-between;
`
export const DropdownMenu = styled.div`
    flex-direction: column;
    display: flex;
    position: absolute;
    top: 25px;
    left: 0;
    z-index: 2;
    background-color: #ffeff5;
`

export const DropdownItem = styled.div`
    display: flex;
    padding: 5px 0;
    width: 200px;
    border-bottom: 1px solid #73013c;
    &:hover {
        background-color: #73013c;
        a {
            color: #ffeff5;
        }
    }
`
