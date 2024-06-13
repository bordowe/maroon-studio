import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import {
    NavbarWrapper,
    LinksBar,
    LinksWrapper,
    NavbarRightSection,
    DropdownMenu,
    DropdownItem,
    DropdownItemIcon,
} from "./index.style"

import NavbarExpandIcon from "../expandIcon"
import { NavbarButton } from "../navbarButton/index.style"
import Logo from "../logo"
import HamburgerMenu from "../hamburgerMenu/index"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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
                iconName: "WebsitesServiceIcon",
            },
            {
                id: 2,
                name: "SEO",
                link: "services/seo",
                iconName: "SeoServiceIcon",
            },
            {
                id: 3,
                name: "Online marketing",
                link: "services/online-marketing",
                iconName: "OnlineMarketingServiceIcon",
            },
            {
                id: 4,
                name: "Social media management",
                link: "services/social-media-management",
                iconName: "SocialMediaManagementServiceIcon",
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
    const menuRef = useRef(null)

    const handleServiceClick = () => {
        setShowServicesMenu(!showServicesMenu)
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowServicesMenu(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

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

    const getImageData = (iconName) => {
        return imagesData[iconName]?.childImageSharp?.fluid
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
            <Link to="/">
                <Logo />
            </Link>
            <LinksBar>
                {navbarLinks.map(({ id, name, link, submenu }) => (
                    <LinksWrapper
                        key={id}
                        ref={submenu && name === "services" ? menuRef : null}
                    >
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
                                            (
                                                { id, name, link, iconName },
                                                i
                                            ) => (
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
                                                        <Img
                                                            fluid={getImageData(
                                                                iconName
                                                            )}
                                                            alt={name}
                                                            style={{
                                                                width: "40px",
                                                                height: "30px",
                                                            }}
                                                        />
                                                    </DropdownItemIcon>
                                                    <a href={link}>{name}</a>
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
