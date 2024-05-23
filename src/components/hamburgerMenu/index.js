import React from "react"
import { useState } from "react"

import { HamburgerMenuWrapper, HamburgerMenuButton } from "./index.style"

const HamburgerMenu = ({ onToggleSection }) => {
    return (
        <HamburgerMenuWrapper>
            <HamburgerMenuButton onClick={onToggleSection} />
        </HamburgerMenuWrapper>
    )
}
export default HamburgerMenu
