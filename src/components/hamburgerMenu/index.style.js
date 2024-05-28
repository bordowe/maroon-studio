import styled from "styled-components"

export const HamburgerMenuWrapper = styled.div`
    display: block;
    margin-top: auto;
    margin-bottom: auto;

    @media (min-width: 768px) {
        display: none;
    }
`

export const HamburgerMenuButton = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
`
export const HamburgerMenuBarsWrapper = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
`
