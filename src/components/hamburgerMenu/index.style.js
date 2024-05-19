import styled from "styled-components"

export const HamburgerMenuWrapper = styled.div`
    width: 100;
    height: 100%;
    border: 2px solid green;
    @media (width > 768px) {
        display: none;
    }
`
export const HamburgerMenuButton = styled.button`
    width: 50px;
    height: 50px;
    border: 2px solid yellow;
`
