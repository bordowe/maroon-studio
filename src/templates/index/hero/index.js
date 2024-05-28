import React from "react"
import { useState } from "react"
import Navbar from "../../../components/navbar"
import HeroBody from "../../../components/heroBody"
import MobileNavbarDropdown from "../../../components/mobileNavbarDropdown"

const Hero = () => {
    const [currentSection, setCurrentSection] = useState("heroBody")

    const handleSwitchSection = () => {
        setCurrentSection((prevSection) =>
            prevSection === "heroBody" ? "mobileNavbarDropdown" : "heroBody"
        )
    }
    return (
        <>
            <Navbar onToggleSection={handleSwitchSection} />
            {currentSection === "heroBody" && <HeroBody />}
            {currentSection === "mobileNavbarDropdown" && (
                <MobileNavbarDropdown />
            )}
        </>
    )
}

export default Hero
