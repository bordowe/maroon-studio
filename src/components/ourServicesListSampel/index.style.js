import styled from "styled-components"

import { theme } from "../../styles/theme"
import { colors } from "../../styles/theme"

export const OurServicesListSectionSampelWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: fit-content;
    padding: 0;
    gap: 25px;
    @media ${theme.media.largeMobile} {
        flex-direction: column;
        gap: 10px;
    }

    &:hover button {
        background-color: ${colors.primaryButtonHoverColor};
        transition: 0.3s;
    }
`

export const OurServicesListSectionSampelImageWrapper = styled.div`
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    width: 350px;
    height: 350px;

    @media ${theme.media.tablet} {
        width: 300px;
        height: 300px;
    }
    @media ${theme.media.mobile} {
        width: 165px;
        height: 165px;
    }
`
export const OurServicesListSectionSampelHeadersTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding: 32px 0 32px 0;
    gap: 8px;

    @media ${theme.media.mobile} {
        padding: 0;
    }
`
export const OurServicesListSectionSampelTypeTitle = styled.h2`
    display: flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
`
export const OurServicesListSectionSampelTitle = styled.h1`
    display: flex;
    justify-content: left;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
`
export const OurServicesListSectionSampelLore = styled.p`
    display: flex;
    justify-content: left;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
`
export const OurServicesListSectionSampelButton = styled.button`
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
`
export const OurServicesListSectionSampelWholeItems = styled.div`
    display: flex;
    width: 350px;
    flex-direction: column;
    justify-content: space-between;

    @media ${theme.media.mobile} {
        width: 100%;
    }
`
