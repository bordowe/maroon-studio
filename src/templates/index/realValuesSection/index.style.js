import styled from "styled-components"

import { breakpoint } from "../../../styles/theme"
import { theme } from "../../../styles/theme"

export const RealValuesSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${breakpoint.desktop}px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    height: fit-content;
    padding: 15px 32px 32px 32px;
    gap: 15px;

    @media ${theme.media.largeMobile} {
        align-items: center;
        padding-top: 40px;
    }
`

export const RealValuesSectionTitleTexts = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0px 150px 0px 150px;
    gap: 8px;

    @media ${theme.media.largeMobile} {
        padding: 0;
        max-width: 480px;
    }
`

export const RealValuesSectionTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
    color: #73013c;

    @media ${theme.media.tablet} {
        font-size: 32px;
        font-weight: 700;
        line-height: 32px;
    }
`

export const RealValuesSectionSubtitle = styled.h2`
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color: #73013c;
`
export const ValuesWrapper = styled.div`
    display: flex;
    padding: 10px 0px 10px 0px;
    gap: 20px;

    @media ${theme.media.largeMobile} {
        gap: 20px;
        justify-content: space-between;
        width: 100%;
    }
`
