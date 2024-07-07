import styled from "styled-components"
import { breakpoint, colors, theme } from "../../../styles/theme"

export const PageNotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: ${breakpoint.largeDesktop}px;
    height: fit-content;
    margin: 0 auto;
    padding: 32px 0px 32px 0px;
    gap: 25px;
    color: ${colors.primaryTextColor};
`
export const PageNotFoundTitle = styled.h1`
    display: flex;
    font-size: 125px;
    font-weight: 700;
    line-height: 125px;
    text-align: center;
`
export const PageNotFoundSubtitle = styled.h2`
    display: flex;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    text-align: center;
`
export const PageNotFoundInfoText = styled.p`
    display: flex;
    max-width: 620px;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;

    @media (${theme.media.largeMobile}) {
        padding: 0 32px;
    }
`
export const PageNotFoundButton = styled.button`
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 16px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    border: none;
    background-color: ${colors.primaryButtonColor};
    color: ${colors.primaryButtonTextColor};
    transition: 0.3s;

    &&:hover {
        background-color: ${colors.primaryButtonHoverColor};
        transition: 0.3s;
    }
`
