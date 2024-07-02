import styled from "styled-components"
import { breakpoint, theme, colors } from "../../../styles/theme"

export const OurCaseStudiesSectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: ${breakpoint.desktop}px;
    height: fit-content;
    padding: 32px, 0, 16px, 0;
    color: ${colors.primaryTextColor};
`
export const OurCaseStudiesSectionDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 32px;
    gap: 15px;

    @media ${theme.media.largeMobile} {
        padding: 32px 0;
    }
`
export const OurCaseStudiesSectionTextsAreaWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 0 32px 0 32px;
    gap: 8px;
`
export const OurCaseStudiesSectionName = styled.h2`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-transform: uppercase;
`
export const OurCaseStudiesSectionTitle = styled.h1`
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
export const OurCaseStudiesSectionSubtitle = styled.h3`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
`
export const OurCaseStudiesSectionArticlesWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: fit-content;
    padding: 32px;
    border-radius: 24px;
    gap: 10px;
    background-color: ${colors.sectionBackgroundColor};
`
export const OurServicesListSectionSampelsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    justify-content: center;
    gap: 25px;
`
