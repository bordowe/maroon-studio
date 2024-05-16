import * as React from "react"

import { Layout } from "../components/layout/index.style"
import { GlobalStyles } from "../styles/globalStyles"
import Hero from "../templates/index/hero"

const IndexPage = () => {
    return (
        <Layout>
            <GlobalStyles />
            <Hero />
            <h1>ww</h1>
        </Layout>
    )
}
export default IndexPage
