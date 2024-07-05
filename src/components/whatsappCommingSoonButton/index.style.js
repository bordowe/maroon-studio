import styled from "styled-components"
import { colors } from "../../styles/theme"

export const WhatsappCommingSoonButtonWrapper = styled.button`
    display: flex;
    width: 160px;
    height: 46px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: linear-gradient(
        90deg,
        rgba(115, 1, 60, 0.5) 0%,
        rgba(115, 1, 60, 0.5) 100%
    );

    color: ${colors.secondaryTextColor};
    text-decoration: none;
    border: none;
`
export const WhatsappCommingSoonButtonTextArea = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
`
export const WhatsappCommingSoonButtonTitle = styled.h3`
    display: flex;
    margin: 0;
    font-size: 12px;
    font-style: italic;
    font-weight: 700;
    line-height: 12px;
`
