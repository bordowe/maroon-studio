import React from "react"
import {
    NavbarWrapper,
    LinksBar,
    LinksWrapper,
    NavbarRigthSection,
} from "./index.style"
import { NavbarButton } from "../navbarButton/index.style"
import Logo from "../logo"
import HamburgerMenu from "../hamburgerMenu"

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
                <HamburgerMenu />
            </NavbarRigthSection>
        </NavbarWrapper>
    )
}

export default Navbar
