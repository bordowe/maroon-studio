import React from "react"

import LogoImg from "../../images/maroonStudio-logo.png"
import { LogoNavbar } from "./index.style"

const Logo = () => {
    return (
        <LogoNavbar>
            <img src={LogoImg} alt="Maroon Studio Logo" />
        </LogoNavbar>
    )
}
export default Logo
