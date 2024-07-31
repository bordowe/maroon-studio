import React, { useEffect, useState } from "react"
import { LayoutWrapper } from "./index.style"
import { GlobalStyles } from "../../styles/globalStyles"
import Navbar from "../navbar/index"
import Footer from "../../templates/index/footer/index"
import MobileNavbarDropdown from "../../components/mobileNavbarDropdown"
import { Helmet } from "react-helmet"
import ReactGA from "react-ga4"

const Layout = (props) => {
    const [currentSection, setCurrentSection] = useState("heroBody")
    const [locationGet, setLocationGet] = useState("")
    const [originlocationGet, setOriginLocationGet] = useState("")

    const handleSwitchSection = (section) => {
        setCurrentSection(section)
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const currentPathname = window.location.pathname
            const replaceCurrentPathname = currentPathname.replace(/^\//, "")
            const spacedCapitalizationReplaceCurrentPathname =
                replaceCurrentPathname
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
            setLocationGet(spacedCapitalizationReplaceCurrentPathname)

            setOriginLocationGet(window.location.href)
        }
    }, [])

    useEffect(() => {
        ReactGA.initialize("G-2D0S9C6TVL")
    }, [])

    return (
        <LayoutWrapper>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Studio Bordowe{" "}
                    {locationGet === "" ? "" : `- ${locationGet}`}
                </title>
                <link rel="cannonical" href={originlocationGet} />
            </Helmet>
            <GlobalStyles />
            <Navbar onToggleSection={handleSwitchSection} />
            {currentSection === "heroBody" && props.children}
            {currentSection === "mobileNavbarDropdown" && (
                <MobileNavbarDropdown />
            )}
            <Footer />
        </LayoutWrapper>
    )
}

export default Layout
