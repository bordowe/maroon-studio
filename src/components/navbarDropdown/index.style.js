import styled from "styled-components"

export const NavbarDropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background-color: #ffeff5;
    padding: 64px 32px 64px 32px;
    gap: 25px;
`
export const NavbarDropdownLink = styled.h1`
    display: flex;
    gap: 5px;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
    color: #73013c;
    cursor: pointer;
    text-transform: capitalize;
`
export const ServicesOpenMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    width: fit-content;
    height: fit-content;
`
export const ServicesOpenMenuEachServicesWrapper = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    gap: 5px;
`
export const ServicesOpenMenuEachServicesLinkWrapper = styled.p`
    display: flex;

    a {
        text-decoration: none;
        color: #73013c;
    }
`

export const ServicesOpenMenuEachLink = styled.p`
    width: fit-content;
    height: fit-content;
    padding: 0px 0px 0px 10px;
    gap: 10px;
    font-size: 24px;
    font-weight: 550;
    line-height: 24px;
    text-align: left;
`
export const ServicesOpenMenuEachLinkIcon = styled.div`
    display: flex;
    flex-direction: column;
    width: 25px;
    aspect-ratio: 1;

    &:after {
        display: block;
        position: relative;
        content: "";
        margin-top: 25px;
        width: 10px;
        height: 1px;
        background-color: #73013c;
    }
`
