import styled from "styled-components"

import { breakpoint, colors } from "../../styles/theme"
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
    gap: 15px;

    @media (max-width: 768px) {
        display: none;
    }

    & > div:nth-child(2) div,
    & > div:nth-child(3) div {
        position: relative;

        &::after {
            margin-top: -35px;
            right: -5px;
            position: absolute;
            content: "Soon";
            width: fit-content;
            height: fit-content;
            background-color: ${colors.tagBackgroundColor};
            color: ${colors.primaryTextColor};
            padding: 3px;
            border-radius: 10px;
            font-size: 10px;
            font-style: italic;
            font-weight: 500;
            line-height: 10px;
            text-align: center;
        }
    }
`

export const NavbarLinkButton = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: #73013c;
    text-decoration: none;
    cursor: pointer;
    color: #73013c;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    position: relative;
    overflow: visible;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${colors.navbarHoverLinkColor};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-in-out;
        z-index: -1;
        border-radius: 5px;
    }

    &:hover::before {
        transform: scaleX(1);
    }

    &:nth-child(1) {
        gap: 5px;
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
