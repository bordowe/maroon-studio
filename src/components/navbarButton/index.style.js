import styled from "styled-components"

import { colors } from "../../styles/theme"

export const NavbarButton = styled.button`
    display: flex;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    padding: 16px;
    border-radius: 10px;
    border: none;
    background-color: ${colors.primaryButtonColor};
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
    color: #ffeff5;
    transition: 0.3s;

    &:hover {
        background-color: ${colors.primaryButtonHoverColor};
        transition: 0.3s;
    }

    /* @media (width < 769px) {
        margin-right: 20px;
    } */
`
