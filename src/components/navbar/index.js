import React, { useState } from "react"
import {
    NavbarWrapper,
    LinksBar,
    LinksWrapper,
    NavbarRightSection,
    DropdownMenu,
    DropdownItem,
} from "./index.style"
import { NavbarButton } from "../navbarButton/index.style"
import Logo from "../logo"
import HamburgerMenu from "../hamburgerMenu/index"

const navbarLinks = [
    {
        id: 1,
        name: "services",
        link: "#",
        submenu: [
            { id: 1, name: "Websites", link: "services/websites" },
            { id: 2, name: "SEO", link: "services/seo" },
            {
                id: 3,
                name: "Online marketing",
                link: "services/online-marketing",
            },
            {
                id: 4,
                name: "Social media management",
                link: "services/social-media-management",
            },
        ],
    },
    {
        id: 2,
        name: "blog",
        link: "/blog",
    },
    {
        id: 3,
        name: "case studies",
        link: "/case-studies",
    },
    {
        id: 4,
        name: "about us",
        link: "/about-us",
    },
]

const Navbar = ({ onToggleSection }) => {
    const [showServicesMenu, setShowServicesMenu] = useState(false)

    const handleServiceClick = () => {
        setShowServicesMenu(!showServicesMenu)
    }

    return (
        <NavbarWrapper>
            <Logo />
            <LinksBar>
                {navbarLinks.map(({ id, name, link, submenu }) => (
                    <LinksWrapper key={id}>
                        <a
                            href={link}
                            onClick={(event) => {
                                if (name === "services") {
                                    event.preventDefault()
                                    handleServiceClick()
                                }
                            }}
                        >
                            {name}
                        </a>
                        {submenu && name === "services" && showServicesMenu && (
                            <DropdownMenu>
                                {submenu.map(({ id, name, link }) => (
                                    <DropdownItem key={id}>
                                        <a href={link}>{name}</a>
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        )}
                    </LinksWrapper>
                ))}
            </LinksBar>
            <NavbarRightSection>
                <NavbarButton>contact</NavbarButton>
                <HamburgerMenu onToggleSection={onToggleSection} />
            </NavbarRightSection>
        </NavbarWrapper>
    )
}

export default Navbar
