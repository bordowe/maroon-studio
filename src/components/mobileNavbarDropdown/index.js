import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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

const MobileNavbarDropdown = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false)

    const handleServicesClick = (click) => {
        click.preventDefault()
        setIsServicesOpen(!isServicesOpen)
    }

    const imagesData = useStaticQuery(graphql`
        query {
            WebsitesServiceIcon: file(
                relativePath: { eq: "maroonStudio-websitesServiceIcon.png" }
            ) {
                childImageSharp {
                    fluid(maxHeight: 30, maxWidth: 30) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            SeoServiceIcon: file(
                relativePath: { eq: "maroonStudio-seoServiceIcon.png" }
            ) {
                childImageSharp {
                    fluid(maxHeight: 30, maxWidth: 30) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            OnlineMarketingServiceIcon: file(
                relativePath: {
                    eq: "maroonStudio-onlineMarketingServiceIcon.png"
                }
            ) {
                childImageSharp {
                    fluid(maxHeight: 30, maxWidth: 30) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            SocialMediaManagementServiceIcon: file(
                relativePath: {
                    eq: "maroonStudio-socialMediaManagementServiceIcon.png"
                }
            ) {
                childImageSharp {
                    fluid(maxHeight: 30, maxWidth: 30) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const getImageData = (serviceName) => {
        const iconNameMap = {
            Websites: "WebsitesServiceIcon",
            SEO: "SeoServiceIcon",
            "Online marketing": "OnlineMarketingServiceIcon",
            "Social media management": "SocialMediaManagementServiceIcon",
        }
        return imagesData[iconNameMap[serviceName]]?.childImageSharp?.fluid
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
                                    const iconData = getImageData(subItem.name)
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
                                                        <Img
                                                            fluid={iconData}
                                                            alt={`${subItem.name} icon`}
                                                            style={{
                                                                width: "30px",
                                                                height: "30px",
                                                            }}
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
