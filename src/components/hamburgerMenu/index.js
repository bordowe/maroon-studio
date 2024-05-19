import React from "react"
import { useState } from "react"

import { HamburgerMenuWrapper, HamburgerMenuButton } from "./index.style"

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HamburgerMenuWrapper>
            <HamburgerMenuButton onClick={toggleMenu}>s</HamburgerMenuButton>
            {isOpen && (
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            )}
        </HamburgerMenuWrapper>
    )
}
export default HamburgerMenu
