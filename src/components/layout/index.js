import React, { useState } from "react"
import { LayoutWrapper } from "./index.style"
import { GlobalStyles } from "../../styles/globalStyles"
import Navbar from "../navbar/index"
import Footer from "../../templates/index/footer/index"
import MobileNavbarDropdown from "../../components/mobileNavbarDropdown"

const Layout = (props) => {
    const [currentSection, setCurrentSection] = useState("heroBody")

    const handleSwitchSection = (section) => {
        setCurrentSection(section)
    }

    return (
        <LayoutWrapper>
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
