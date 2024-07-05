import styled from "styled-components"
import { colors } from "../../styles/theme"

export const InterestSectionLeftColumnWhatsappButton = styled.button`
    display: flex;
    width: fit-content;
    height: fit-content;
    text-align: center;
    justify-content: center;
    padding: 10px 15px;
    border-radius: 10px;
    gap: 5px;
    background-color: ${colors.secondarySectionBackgroundColor};
    color: ${colors.secondaryTextColor};
    text-decoration: none;
    border: none;
`
export const InterestSectionLeftColumnWhatsappButtonTextArea = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    text-align: center;
`
export const InterestSectionLeftColumnWhatsappButtonTitle = styled.h3`
    display: flex;
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
`
export const InterestSectionLeftColumnWhatsappButtonSubtitle = styled.p`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
    font-size: 10px;
    font-weight: 400;
    line-height: 10px;
`
