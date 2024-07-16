import React, { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

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
    DropdownItemTitle,
    DropdownItemSubtitle,
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
                subtitle:
                    "Custom, responsive websites that are visually appealing, highly functional, and optimized for performance.",
            },
            {
                id: 2,
                name: "SEO",
                link: "services/seo",
                iconName: "SeoServiceIcon",
                subtitle:
                    "Boost search engine rankings with keyword research, on-page optimization, and high-quality backlinks.",
            },
            {
                id: 3,
                name: "Online marketing",
                link: "services/online-marketing",
                iconName: "OnlineMarketingServiceIcon",
                subtitle:
                    "Targeted advertising campaigns across platforms, optimized for maximum ROI with advanced analytics.",
            },
            {
                id: 4,
                name: "Social media management",
                link: "services/social-media-management",
                iconName: "SocialMediaManagementServiceIcon",
                subtitle:
                    "Engage your audience with compelling posts, community management, and effective social media strategies.",
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

    const scrollToSection = (divId) => {
        const id = document.getElementById(divId)
        if (id) {
            id.scrollIntoView({ behavior: "smooth" })
        }
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

    const animQueueOptions = {
        triggerOnce: true,
    }
    const [ref1, inView1] = useInView(animQueueOptions)

    return (
        <NavbarWrapper
            as={motion.div}
            ref={ref1}
            initial={{
                y: -100,
                opacity: 0,
            }}
            animate={{
                y: inView1 ? 0 : 100,
                opacity: inView1 ? 1 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
            }}
        >
            <Link to="/">
                <Logo />
            </Link>
            <LinksBar>
                {navbarLinks.map(({ id, name, link, submenu }, index) => (
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
                                    scrollToSection("services-section")
                                }
                            }}
                            id={`${name}`}
                            style={{
                                textDecoration:
                                    index === 1 || index === 2 || index === 3
                                        ? "line-through"
                                        : "none",
                            }}
                        >
                            {name}{" "}
                            {/* {name === "services" && (
                                <NavbarExpandIcon isOpen={showServicesMenu} />
                            )} */}
                        </a>
                        {/* <AnimatePresence>
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
                                                {
                                                    id,
                                                    name,
                                                    link,
                                                    iconName,
                                                    subtitle,
                                                },
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
                                                    <DropdownItemTitle>
                                                        <DropdownItemIcon>
                                                            <Img
                                                                fluid={getImageData(
                                                                    iconName
                                                                )}
                                                                alt={name}
                                                                style={{
                                                                    width: "30px",
                                                                    height: "30px",
                                                                }}
                                                            />
                                                        </DropdownItemIcon>
                                                        <a href={link}>
                                                            {name}
                                                        </a>
                                                    </DropdownItemTitle>
                                                    <DropdownItemSubtitle>
                                                        {subtitle}
                                                    </DropdownItemSubtitle>
                                                </DropdownItem>
                                            )
                                        )}
                                    </DropdownMenu>
                                )}
                        </AnimatePresence> */}
                    </LinksWrapper>
                ))}
            </LinksBar>
            <NavbarRightSection>
                <NavbarButton
                    onClick={() => scrollToSection("contact-section")}
                >
                    contact
                </NavbarButton>
                <HamburgerMenu onToggleSection={onToggleSection} />
            </NavbarRightSection>
        </NavbarWrapper>
    )
}

export default Navbar
