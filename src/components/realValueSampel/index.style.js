import styled from "styled-components"

import { theme } from "../../styles/theme"

export const RealValueSampelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    gap: 10px;
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
        width: 200px;
    }
`
export const RealValueSampelDataFirstLine = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;

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
    width: 100%;
    height: fit-content;
    justify-content: space-around;

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
    width: 45px;
    aspect-ratio: 1;
`
export const RealValueSampelTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;
    height: fit-content;
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
`
