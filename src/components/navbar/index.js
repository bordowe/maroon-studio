import React from "react"
import {
    NavbarWrapper,
    LinksBar,
    LinksWrapper,
    NavbarRigthSection,
} from "./index.style"
import { NavbarButton } from "../navbarButton/index.style"

import Logo from "../logo"

import HamburgerMenu from "../hamburgerMenu/index"

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

const Navbar = ({ onToggleSection }) => {
    return (
        <NavbarWrapper>
            <Logo />
            <LinksBar>
                {navbarServicesLinks.map(({ id, name, link }) => (
                    <LinksWrapper key={id}>
                        <a href={link}>{name}</a>
                    </LinksWrapper>
                ))}
            </LinksBar>
            <NavbarRigthSection>
                <NavbarButton>contact</NavbarButton>
                <HamburgerMenu onToggleSection={onToggleSection} />
            </NavbarRigthSection>
        </NavbarWrapper>
    )
}

export default Navbar
