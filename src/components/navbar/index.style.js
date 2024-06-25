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
    position: relative;

    a {
        color: #73013c;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 5px;
    }
`

export const NavbarRightSection = styled.div`
    display: flex;
    justify-content: space-between;
`
export const DropdownMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 400px;
    height: fit-content;
    padding: 15px;
    gap: 10px;
    top: 25px;
    left: 200;
    z-index: 2;
    background-color: #ffeff5;
    border-radius: 24px;
    box-shadow: 0px 4px 35px 0px #00000040;
`

export const DropdownItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    width: 100%;
    height: fit-content;
    font-weight: 600;
    border-radius: 5px;
    gap: 10px;

    &:hover {
        background-color: #f7c3d9;
    }
`
export const DropdownItemTitle = styled.div`
    display: flex;
    gap: 5px;
`
export const DropdownItemSubtitle = styled.div`
    display: flex;
    max-width: ${breakpoint.mobile}px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    color: #73013c;
`

export const DropdownItemIcon = styled.div`
    display: flex;
`
