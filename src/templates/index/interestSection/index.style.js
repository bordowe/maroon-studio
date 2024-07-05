import styled from "styled-components"

import { breakpoint } from "../../../styles/theme"
import { colors } from "../../../styles/theme"
import { theme } from "../../../styles/theme"

import InterestSectionBackground from "../../../images/maroonStudio-interestSectionImage.png"

export const InterestSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    max-width: ${breakpoint.desktop}px;
    height: fit-content;
    padding: 15px 32px;
    gap: 15px;
    color: ${colors.secondaryTextColor};

    @media ${theme.media.largeMobile} {
        padding: 15px 0;
    }
`
export const InterestSectionData = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    padding: 32px;
    border-radius: 24px;
    gap: 20px;
    background-color: ${colors.secondarySectionBackgroundColor};
    background-image: url(${InterestSectionBackground});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media ${theme.media.largeMobile} {
        flex-direction: column;
    }
`
export const InterestSectionLeftColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 390px;
    height: fit-content;
`

export const InterestSectionLeftColumnTitleSubtitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    gap: 5px;
`
export const InterestSectionLeftColumnTitle = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    text-align: center;
`
export const InterestSectionLeftColumnSubtitle = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
`
export const InterestSectionLeftColumnLore = styled.p`
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.5px;
    text-align: center;
`
export const InterestSectionLeftColumnButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    gap: 10px;
`
export const InterestSectionRightColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 390px;
    height: fit-content;
    gap: 15px;

    @media ${theme.media.largeMobile} {
        width: 100%;
        max-width: 390px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const InterestSectionRightColumnNameInput = styled.input`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: fit-content;
    padding: 15px;
    border: none;
    border-radius: 10px;
    box-shadow: 4px 4px 25px 0px #ffeff540;
    background-color: ${colors.secondaryTextColor};
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: ${colors.primaryTextColor};

    &::placeholder {
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        color: ${colors.primaryTextColor};
    }
`
export const InterestSectionRightColumnEmailInput = styled.input`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: fit-content;
    padding: 15px;
    border: none;
    border-radius: 10px;
    box-shadow: 4px 4px 25px 0px #ffeff540;
    background-color: ${colors.secondaryTextColor};
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: ${colors.primaryTextColor};

    &::placeholder {
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        color: ${colors.primaryTextColor};
    }
`
export const InterestSectionRightColumnMessageInput = styled.textarea`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 170px;
    padding: 15px;
    border: none;
    border-radius: 10px;
    box-shadow: 4px 4px 25px 0px #ffeff540;
    background-color: ${colors.secondaryTextColor};
    resize: none;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: ${colors.primaryTextColor};

    &::placeholder {
        display: flex;
        flex-wrap: wrap;
        width: 170px;
        height: fit-content;
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        color: ${colors.primaryTextColor};
    }
`
export const InterestSectionRightColumnFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: fit-content;
    gap: 15px;
`
export const InterestSectionPrivacyPolicy = styled.p`
    display: flex;
    margin: 0;
    max-width: 270px;
    height: fit-content;
    font-size: 10px;
    font-weight: 400;
    line-height: 12.5px;
    text-align: left;
    color: ${colors.secondaryTextColor};
    opacity: 0.8;
`
export const InterestSectionSendFormButton = styled.button`
    display: flex;
    width: fit-content;
    height: fit-content;
    flex-direction: column;
    text-align: center;
    padding: 15px 25px;
    border-radius: 10px;
    background-color: #ffeff5;
    color: ${colors.primaryTextColor};
    text-decoration: none;
    border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
`
