import styled from "styled-components"

import { breakpoint } from "../../../styles/theme"
import { theme } from "../../../styles/theme"

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${breakpoint.largeDesktop}px;
    height: fit-content;
    margin: 0 auto;
    padding: 64px 32px 64px 32px;
    gap: 65px;

    @media ${theme.media.tablet} {
        gap: 25px;
    }
    @media ${theme.media.largeMobile} {
        padding: 32px;
    }
`

export const FooterFirstLine = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;

    @media ${theme.media.largeMobile} {
        flex-direction: column;
        gap: 20px;
    }
`

export const SocialIconsWrapper = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    gap: 35px;
    padding: 5px 0;

    @media ${theme.media.largeMobile} {
        width: fit-content;
        gap: 35px;
        justify-content: space-between;
    }
    @media ${theme.media.mobile} {
        width: 100%;
        justify-content: space-between;
        gap: 0;
    }
`
export const FooterIconsWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    background-repeat: no-repeat;
    background-size: contain;
`
export const FooterSecondLine = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;

    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 25px;
    }
    @media ${theme.media.largeMobile} {
        justify-content: flex-start;
        gap: 25px;
    }
`
export const FooterLinksWrapper = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    gap: 15px;

    @media ${theme.media.tablet} {
        margin-left: auto;
        margin-right: auto;
    }
    @media ${theme.media.largeMobile} {
        flex-direction: column;
        margin-left: 0;
        gap: 15px;
    }
`
export const FooterIcon = styled.div`
    display: flex;
    width: 25px;
    aspect-ratio: 1;
`
export const FooterLink = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    a {
        color: #73013c;
        text-decoration: none;
    }
`
export const FooterRightsReservedWrapper = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    gap: 25px;
    color: #73013c;

    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 25px;
        margin-left: auto;
        margin-right: auto;
    }
    @media ${theme.media.largeMobile} {
        margin-left: 0;
        align-items: start;
        gap: 15px;
    }
`
export const FooterThermsPrivacyPolicyWrapper = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    gap: 10px;
`
export const FooterTherms = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-transform: capitalize;
`
export const FooterPrivacyPolicy = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-transform: capitalize;
`
export const FooterRightsReserved = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
`
