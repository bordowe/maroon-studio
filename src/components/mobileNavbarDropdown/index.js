import React, { useState } from "react"

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

const NavbarDropdownServicesImageData = [
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
                            <NavbarExpandIcon />
                        </NavbarDropdownLink>
                    ) : (
                        <NavbarDropdownLink href={item.link}>
                            {item.name}
                        </NavbarDropdownLink>
                    )}
                    {item.name === "services" && isServicesOpen && (
                        <ServicesOpenMenu>
                            {ServicesSubMenu.map((subItem) => {
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
                                        <ServicesOpenMenuEachServicesWrapper>
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
                </div>
            ))}
        </NavbarDropdownWrapper>
    )
}

export default MobileNavbarDropdown
