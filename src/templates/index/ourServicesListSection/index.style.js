import styled from "styled-components"

import { theme } from "../../../styles/theme"
import { breakpoint } from "../../../styles/theme"

export const OurServicesListSectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: ${breakpoint.desktop}px;
    height: fit-content;
    padding: 32px;
    gap: 10px;
    opacity: 0px;
    color: #73013c;

    @media ${theme.media.largeMobile} {
        padding: 0px;
    }
`
export const OurServicesListSectionDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding: 32px;
    gap: 25px;
    border-radius: 24px;
    background-color: #ffe0eb;
`
export const OurServicesListSectionTextsAreaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    gap: 8px;
`
export const OurServicesListSectionName = styled.h2`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-transform: uppercase;
`
export const OurServicesListSectionTitle = styled.h1`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;

    @media ${theme.media.largeMobile} {
        font-size: 32px;
        line-height: 32px;
    }
`
export const OurServicesListSectionSubtitle = styled.h1`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
`
export const OurServicesListSectionSampelsWrapper = styled.h1`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    justify-content: center;
    gap: 25px;

    && > :nth-child(even) {
        flex-direction: row-reverse;
    }

    @media ${theme.media.largeMobile} {
        && > :nth-child(even) {
            flex-direction: column;
        }
    }
`
