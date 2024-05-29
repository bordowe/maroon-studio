import styled from "styled-components"

import { colors } from "../../styles/theme"

export const FreeQuoteButton = styled.button`
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
    color: ${colors.primaryButtonTextColor};
    transition: 0.3s;

    &:hover {
        background-color: ${colors.primaryButtonHoverColor};
        transition: 0.3s;
    }
`
export const OurServicesButton = styled.button`
    display: flex;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    padding: 16px;
    border-radius: 10px;
    border: none;
    background-color: ${colors.secondaryButtonColor};
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
    color: ${colors.secondaryButtonTextColor};
    transition: 0.3s;

    &:hover {
        background-color: ${colors.secondaryButtonHoverColor};
        transition: 0.3s;
    }
`
