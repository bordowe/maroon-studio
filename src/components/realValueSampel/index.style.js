import styled from "styled-components"

import { theme } from "../../styles/theme"

export const RealValueSampelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: fit-content;
    gap: 50px;
    color: #73013c;

    @media ${theme.media.largeMobile} {
        gap: 50px;
    }
    @media ${theme.media.mobile} {
        gap: 25px;
    }
`
export const RealValueSampelDataWrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${theme.media.tablet} {
        width: 250px;
    }

    @media ${theme.media.mobile} {
        gap: 5px;
    }
`
export const RealValueSampelDataFirstLine = styled.div`
    display: flex;
    width: fit-content;
    gap: 50px;
    height: fit-content;

    @media ${theme.media.largeMobile} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
    }
    @media ${theme.media.mobile} {
        gap: 25px;
    }
`
export const RealValueSampelDataSecondLine = styled.div`
    display: flex;
    width: fit-content;
    gap: 50px;
    height: fit-content;

    @media ${theme.media.largeMobile} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
    }
    @media ${theme.media.mobile} {
        gap: 25px;
    }
`
export const RealValueSampelImageWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 45px;
    aspect-ratio: 1;

    @media ${theme.media.mobile} {
        width: 100%;
        height: fit-content;
        aspect-ratio: unset;
    }
`
export const RealValueSampelTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;
    height: fit-content;

    @media ${theme.media.mobile} {
        justify-content: flex-start;
        width: 100%;
    }
`
export const RealValueSampelTitle = styled.h3`
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;

    @media ${theme.media.tablet} {
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
    }
    @media ${theme.media.mobile} {
        text-align: left;
    }
`
export const RealValueSampelLoreWrapper = styled.h3`
    display: flex;
    justify-content: center;
    width: 100%;
    height: fit-content;
`
export const RealValueSampelLore = styled.h3`
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;

    @media ${theme.media.tablet} {
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
    }

    @media ${theme.media.mobile} {
        text-align: left;
    }
`
