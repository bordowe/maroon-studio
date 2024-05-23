import styled from "styled-components"
import { theme } from "../../styles/theme"

export const NavbarDropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #ffeff5;
    padding: 64px 32px 64px 32px;
    gap: 30px;
    border: 2px solid red;
`
export const NavbarDropdownLink = styled.h1`
    display: flex;
    flex-direction: column;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
    color: #73013c;
    text-transform: capitalize;
`
