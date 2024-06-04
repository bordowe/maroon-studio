import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
    NavbarWrapper,
    LinksBar,
    LinksWrapper,
    NavbarRightSection,
    DropdownMenu,
    DropdownItem,
    DropdownItemIcon,
    ServicesTextWrapepr,
} from "./index.style"

import NavbarExpandIcon from "../expandIcon"
import { NavbarButton } from "../navbarButton/index.style"
import Logo from "../logo"
import HamburgerMenu from "../hamburgerMenu/index"

import WebsitesServiceIcon from "../../images/maroonStudio-websitesServiceIcon.png"
import SeoServiceIcon from "../../images/maroonStudio-seoServiceIcon.png"
import OnlineMarketingServiceIcon from "../../images/maroonStudio-onlineMarketingServiceIcon.png"
import SocialMediaManagementServiceIcon from "../../images/maroonStudio-socialMediaManagementServiceIcon.png"

const navbarLinks = [
    {
        id: 1,
        name: "services",
        link: "#",
        submenu: [
            {
                id: 1,
                name: "Websites",
                link: "services/websites",
                icon: WebsitesServiceIcon,
            },
            {
                id: 2,
                name: "SEO",
                link: "services/seo",
                icon: SeoServiceIcon,
            },
            {
                id: 3,
                name: "Online marketing",
                link: "services/online-marketing",
                icon: OnlineMarketingServiceIcon,
            },
            {
                id: 4,
                name: "Social media management",
                link: "services/social-media-management",
                icon: SocialMediaManagementServiceIcon,
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

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
            },
        }),
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
                            {name}{" "}
                            {name === "services" && (
                                <NavbarExpandIcon isOpen={showServicesMenu} />
                            )}
                        </a>
                        <AnimatePresence>
                            {submenu &&
                                name === "services" &&
                                showServicesMenu && (
                                    <DropdownMenu
                                        as={motion.div}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={{
                                            hidden: { opacity: 0, height: 0 },
                                            visible: {
                                                opacity: 1,
                                                height: "auto",
                                            },
                                        }}
                                    >
                                        {submenu.map(
                                            ({ id, name, link, icon }, i) => (
                                                <DropdownItem
                                                    key={id}
                                                    as={motion.div}
                                                    custom={i}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="hidden"
                                                    variants={dropdownVariants}
                                                >
                                                    <DropdownItemIcon>
                                                        <img
                                                            src={icon}
                                                            alt={name}
                                                        />
                                                    </DropdownItemIcon>
                                                    <ServicesTextWrapepr>
                                                        <a href={link}>
                                                            {name}
                                                        </a>
                                                    </ServicesTextWrapepr>
                                                </DropdownItem>
                                            )
                                        )}
                                    </DropdownMenu>
                                )}
                        </AnimatePresence>
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
