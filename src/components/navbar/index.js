import React from "react"
import {
    NavbarWrapper,
    LogoNavbar,
    LinksBar,
    LinksWrapper,
    NavbarRigthSection,
} from "./index.style"
import { NavbarButton } from "../navbarButton/index.style"
import HamburgerMenu from "../hamburgerMenu"

import LogoImg from "../../images/maroonStudio-logo.png"

const navbarServicesLinks = [
    {
        id: 1,
        name: "services",
        link: "#",
    },
    {
        id: 2,
        name: "blog",
        link: "#",
    },
    {
        id: 3,
        name: "case studies",
        link: "#",
    },
    {
        id: 4,
        name: "about us",
        link: "#",
    },
]

const Navbar = () => {
    return (
        <NavbarWrapper>
            <LogoNavbar>
                <img src={LogoImg} alt="Maroon Studio Logo" />
            </LogoNavbar>
            <LinksBar>
                {navbarServicesLinks.map(({ id, name, link }) => (
                    <LinksWrapper key={id}>
                        <a href={link}>{name}</a>
                    </LinksWrapper>
                ))}
            </LinksBar>
            <NavbarRigthSection>
                <NavbarButton>contact</NavbarButton>
                <HamburgerMenu />
            </NavbarRigthSection>
        </NavbarWrapper>
    )
}

export default Navbar
