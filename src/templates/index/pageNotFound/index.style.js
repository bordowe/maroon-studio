import styled from "styled-components"
import { breakpoint } from "../../../styles/theme"

export const PageNotFoundWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: ${breakpoint.largeDesktop}px;
    height: fit-content;
    margin: 0 auto;
    padding: 64px 32px 64px 32px;
    border: 2px solid purple;
`
