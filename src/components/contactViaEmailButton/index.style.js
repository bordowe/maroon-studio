import styled from "styled-components"
import { colors } from "../../styles/theme"

export const InterestSectionLeftColumnEmailButton = styled.button`
    display: flex;
    width: fit-content;
    height: fit-content;
    flex-direction: column;
    text-align: center;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #ffeff5;
    color: ${colors.primaryTextColor};
    text-decoration: none;
    border: none;
`
export const InterestSectionLeftColumnEmailButtonTitle = styled.h3`
    display: flex;
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
`
export const InterestSectionLeftColumnEmailButtonSubtitle = styled.p`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
    font-size: 10px;
    font-weight: 400;
    line-height: 10px;
`
