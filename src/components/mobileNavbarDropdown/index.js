import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
    NavbarDropdownWrapper,
    NavbarDropdownLink,
    ServicesOpenMenu,
    ServicesOpenMenuEachServicesLinkWrapper,
    ServicesOpenMenuEachServicesWrapper,
    ServicesOpenMenuEachLink,
    ServicesOpenMenuEachLinkIcon,
} from "./index.style"

import NavbarExpandIcon from "../expandIcon"

import WebsitesServiceIcon from "../../images/maroonStudio-websitesServiceIcon.png"
import SeoServiceIcon from "../../images/maroonStudio-seoServiceIcon.png"
import OnlineMarketingServiceIcon from "../../images/maroonStudio-onlineMarketingServiceIcon.png"
import SocialMediaManagementServiceIcon from "../../images/maroonStudio-socialMediaManagementServiceIcon.png"

const NavbarDropdownData = [
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

const ServicesSubMenu = [
    {
        id: 1,
        name: "Websites",
        link: "#",
    },
    {
        id: 2,
        name: "SEO",
        link: "#",
    },
    {
        id: 3,
        name: "Online marketing",
        link: "#",
    },
    {
        id: 4,
        name: "Social media management",
        link: "#",
    },
]

export const NavbarDropdownServicesImageData = [
    {
        id: 1,
        name: "websites",
        link: "#",
        icon: WebsitesServiceIcon,
    },
    {
        id: 2,
        name: "seo",
        link: "#",
        icon: SeoServiceIcon,
    },
    {
        id: 3,
        name: "online-marketing",
        link: "#",
        icon: OnlineMarketingServiceIcon,
    },
    {
        id: 4,
        name: "social-media-management",
        link: "#",
        icon: SocialMediaManagementServiceIcon,
    },
]

const MobileNavbarDropdown = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false)

    const handleServicesClick = (click) => {
        click.preventDefault()
        setIsServicesOpen(!isServicesOpen)
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

    const arrowVariants = {
        open: { rotate: 180 },
        closed: { rotate: 0 },
    }

    return (
        <NavbarDropdownWrapper>
            {NavbarDropdownData.map((item) => (
                <div key={item.id}>
                    {item.name === "services" ? (
                        <NavbarDropdownLink
                            href={item.link}
                            onClick={handleServicesClick}
                        >
                            {item.name}
                            <motion.div
                                animate={isServicesOpen ? "open" : "closed"}
                                variants={arrowVariants}
                            >
                                <NavbarExpandIcon />
                            </motion.div>
                        </NavbarDropdownLink>
                    ) : (
                        <NavbarDropdownLink href={item.link}>
                            {item.name}
                        </NavbarDropdownLink>
                    )}
                    <AnimatePresence>
                        {item.name === "services" && isServicesOpen && (
                            <ServicesOpenMenu
                                as={motion.div}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0, height: 0 },
                                    visible: { opacity: 1, height: "auto" },
                                }}
                            >
                                {ServicesSubMenu.map((subItem, i) => {
                                    const iconData =
                                        NavbarDropdownServicesImageData.find(
                                            (iconItem) =>
                                                iconItem.name
                                                    .replace(/ /g, "-")
                                                    .toLowerCase() ===
                                                subItem.name
                                                    .replace(/ /g, "-")
                                                    .toLowerCase()
                                        )
                                    return (
                                        <NavbarDropdownLink
                                            key={subItem.id}
                                            href={subItem.link}
                                        >
                                            <ServicesOpenMenuEachServicesWrapper
                                                as={motion.div}
                                                custom={i}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={dropdownVariants}
                                            >
                                                <ServicesOpenMenuEachServicesLinkWrapper>
                                                    <ServicesOpenMenuEachLinkIcon>
                                                        <img
                                                            src={iconData?.icon}
                                                            alt={`${subItem.name} icon`}
                                                        />
                                                    </ServicesOpenMenuEachLinkIcon>
                                                    <ServicesOpenMenuEachLink>
                                                        <a href={subItem.link}>
                                                            {subItem.name}
                                                        </a>
                                                    </ServicesOpenMenuEachLink>
                                                </ServicesOpenMenuEachServicesLinkWrapper>
                                            </ServicesOpenMenuEachServicesWrapper>
                                        </NavbarDropdownLink>
                                    )
                                })}
                            </ServicesOpenMenu>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </NavbarDropdownWrapper>
    )
}

export default MobileNavbarDropdown
