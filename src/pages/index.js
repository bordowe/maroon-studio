import * as React from "react"
import Layout from "../components/layout/index"
import Hero from "../templates/index/hero"
import RealValuesSection from "../templates/index/realValuesSection"
const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <RealValuesSection />
        </Layout>
    )
}
export default IndexPage
