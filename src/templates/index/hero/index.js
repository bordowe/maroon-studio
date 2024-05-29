import React from "react"
import { useState } from "react"
import Navbar from "../../../components/navbar"
import HeroBody from "../../../components/heroBody"
import NavbarDropdown from "../../../components/navbarDropdown"

const Hero = () => {
    const [currentSection, setCurrentSection] = useState("heroBody")

    const handleSwitchSection = () => {
        setCurrentSection((prevSection) =>
            prevSection === "heroBody" ? "navbarDropdown" : "heroBody"
        )
    }
    return (
        <>
            <Navbar onToggleSection={handleSwitchSection} />
            {currentSection === "heroBody" && <HeroBody />}
            {currentSection === "navbarDropdown" && <NavbarDropdown />}
        </>
    )
}

export default Hero
