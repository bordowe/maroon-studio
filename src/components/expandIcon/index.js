import React from "react"

import ExpandIcon from "../../images/maroonStudio-expandPolygon.png"
import { ExpandIconNavbar } from "./index.style"

const NavbarExpandIcon = ({ isOpen }) => {
    return (
        <ExpandIconNavbar isOpen={isOpen}>
            <img
                src={ExpandIcon}
                style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                }}
                alt=""
            />
        </ExpandIconNavbar>
    )
}
export default NavbarExpandIcon
