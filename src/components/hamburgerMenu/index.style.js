import styled from "styled-components"

export const HamburgerMenuWrapper = styled.div`
    display: inline-block;
    @media (min-width: 768px) {
        display: none;
    }
`

export const HamburgerMenuButton = styled.div`
    width: 30px;
    height: 24px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px;
    box-sizing: border-box;
    gap: 6px; /* odstęp między belkami */
`
