import React from "react"

import { NavbarDropdownWrapper, NavbarDropdownLink } from "./index.style"

const NavbarDropdownData = [
    {
        id: 1,
        name: "blog",
        link: "#",
    },
    {
        id: 2,
        name: "case studies",
        link: "#",
    },
    {
        id: 3,
        name: "about us",
        link: "#",
    },
]
const NavbarDropdown = () => {
    return (
        <NavbarDropdownWrapper>
            <NavbarDropdownLink>Services</NavbarDropdownLink>
            {NavbarDropdownData.map((item) => (
                <NavbarDropdownLink key={item.id} href={item.link}>
                    {item.name}
                </NavbarDropdownLink>
            ))}
        </NavbarDropdownWrapper>
    )
}
export default NavbarDropdown
