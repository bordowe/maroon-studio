import styled from "styled-components"

import { colors } from "../../../styles/theme"
import { theme } from "../../../styles/theme"
import { breakpoint } from "../../../styles/theme"

export const OurBlogSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    max-width: ${breakpoint.desktop}px;
    height: fit-content;
    padding: 15px 32px;
    gap: 15px;
    color: ${colors.primaryTextColor};

    @media ${theme.media.largeMobile} {
        padding: 15px 0;
    }
`
export const OurBlogSectionTextsAreaWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 0 32px 0 32px;
    gap: 8px;
`
export const OurBlogSectionName = styled.h2`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-transform: uppercase;
`
export const OurBlogSectionTitle = styled.h1`
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
export const OurBlogSectionSubtitle = styled.h3`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
`
export const OurCaseStudiesSectionLastArticlesWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: fit-content;
    padding: 32px;
    border-radius: 24px;
    gap: 10px;
    background-color: ${colors.sectionBackgroundColor};

    @media ${theme.media.largeMobile} {
        flex-wrap: wrap;
        justify-content: center;
    }
`
