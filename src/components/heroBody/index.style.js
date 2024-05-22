import styled from "styled-components"

import { breakpoint } from "../../styles/theme"
import { theme } from "../../styles/theme"
import { colors } from "../../styles/theme"

export const HeroBodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: ${breakpoint.largeDesktop}px;
    height: fit-content;
    margin: 0 auto;
    padding: 64px 32px 64px 32px;
    border: 2px solid purple;

    @media ${theme.media.largeMobile} {
        flex-direction: column;
        padding: 0;
        gap: 10px;
    }
    @media ${theme.media.mobile} {
        width: 100vw;
    }
`

export const HeroBodyImage = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    margin-right: 20px;

    @media ${theme.media.tablet} {
        width: 280px;
        aspect-ratio: 1;
    }
    @media ${theme.media.largeMobile} {
        margin: 0;
    }
`

export const HeroContentWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media ${theme.media.mobile} {
        width: 100%;
    }
`
export const HeroBodyTextArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 530px;
    height: 100%;

    @media ${theme.media.tablet} {
        width: 430px;
        gap: 12px;
    }
    @media ${theme.media.largeMobile} {
        width: 480px;
        gap: 4px;
        padding: 0 32px;
    }
    @media ${theme.media.mobile} {
        width: 100%;
    }
`
export const HeroBodyTextTopDescription = styled.h6`
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    text-align: left;
    text-transform: uppercase;
    color: ${colors.primaryTextColor};
`
export const HeroBodyTextTitle = styled.h1`
    font-size: 48px;
    line-height: 48px;
    font-weight: 700;
    text-align: left;
    text-transform: capitalize;
    color: ${colors.primaryTextColor};

    @media ${theme.media.tablet} {
        font-size: 32px;
        line-height: 32px;
    }
`
export const HeroBodyTextSubtitle = styled.h2`
    font-size: 32px;
    line-height: 32px;
    font-weight: 700;
    text-align: left;
    color: ${colors.primaryTextColor};
`

export const HeroBodyTextBottomDescription = styled.h2`
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    text-align: left;
    color: ${colors.primaryTextColor};
`
export const HeroButtonWrapper = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 10px 0 0 0;
    gap: 10px;

    @media ${theme.media.largeMobile} {
        justify-content: center;
        width: 480px;
        gap: 8px;
        padding: 10px 32px 10px 32px;
    }
    @media ${theme.media.mobile} {
        justify-content: center;
        width: 100%;
        gap: 8px;
        padding: 10px 32px 10px 32px;
    }
`
