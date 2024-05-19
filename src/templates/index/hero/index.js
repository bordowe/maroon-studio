import React from "react"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Navbar from "../../../components/navbar"
import HeroBody from "../../../components/heroBody"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
    },
    {
        path: "/",
        element: <HeroBody />,
    },
])

const Hero = () => {
    return (
        <>
            <Navbar />
            <HeroBody />
        </>
    )
}

export default Hero
