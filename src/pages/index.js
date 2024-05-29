import * as React from "react"

import { Layout } from "../components/layout/index.style"
import { GlobalStyles } from "../styles/globalStyles"
import Hero from "../templates/index/hero"
import Footer from "../templates/index/footer"

const IndexPage = () => {
    return (
        <Layout>
            <GlobalStyles />
            <Hero />
            <Footer />
        </Layout>
    )
}
export default IndexPage
