import styled from "styled-components"
import { colors } from "../../styles/theme"
import { theme } from "../../styles/theme"

export const OurCaseStudiesSampelWrapper = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    gap: 15px;

    @media ${theme.media.largeMobile} {
        flex-wrap: wrap;
        justify-content: center;
    }
`
export const OurCaseStudiesSampelDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 297px;
    height: 190px;
    padding: 15px;
    border-radius: 5px;
    gap: 5px;
    color: ${colors.secondaryTextColor};
    background-repeat: no-repeat;
    background-size: contain;
    mix-blend-mode: luminosity;
`
export const OurCaseStudiesSampelTitle = styled.h1`
    display: flex;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
`
export const OurCaseStudiesSampelTextsArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    margin: 0;
`
export const OurCaseStudiesSampelDateCategoryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
`
export const OurCaseStudiesSampelCategoryText = styled.h3`
    display: flex;
    font-size: 10px;
    font-weight: 700;
    line-height: 10px;
    text-align: left;
    text-transform: capitalize;
`
export const OurCaseStudiesSampelDateText = styled.h3`
    display: flex;
    font-size: 10px;
    font-weight: 700;
    line-height: 10px;
    text-align: left;
    text-transform: capitalize;
`
