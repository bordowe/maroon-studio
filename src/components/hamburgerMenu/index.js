import React, { useState } from "react"
import { motion } from "framer-motion"
import {
    HamburgerMenuWrapper,
    HamburgerMenuButton,
    HamburgerMenuBarsWrapper,
} from "./index.style"

const HamburgerMenu = ({ onToggleSection }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleHamburgerMenu = () => {
        setIsOpen(!isOpen)
        onToggleSection(isOpen ? "heroBody" : "mobileNavbarDropdown")
    }

    return (
        <HamburgerMenuWrapper>
            <HamburgerMenuButton onClick={toggleHamburgerMenu}>
                <HamburgerMenuBarsWrapper
                    style={{
                        cursor: "pointer",
                        width: "25px",
                        height: "20px",
                        position: "relative",
                    }}
                >
                    <motion.div
                        animate={
                            isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }
                        }
                        style={{
                            width: "100%",
                            height: "2px",
                            background: "#73013C",
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                    />
                    <motion.div
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        style={{
                            width: "100%",
                            height: "2px",
                            background: "#73013C",
                            position: "absolute",
                            top: "10px",
                            left: 0,
                        }}
                    />
                    <motion.div
                        animate={
                            isOpen
                                ? { rotate: -45, y: -10 }
                                : { rotate: 0, y: 0 }
                        }
                        style={{
                            width: "100%",
                            height: "2px",
                            background: "#73013C",
                            position: "absolute",
                            top: "20px",
                            left: 0,
                        }}
                    />
                </HamburgerMenuBarsWrapper>
            </HamburgerMenuButton>
        </HamburgerMenuWrapper>
    )
}

export default HamburgerMenu
