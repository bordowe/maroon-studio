import * as React from "react"
import Layout from "../components/layout/index"
import Hero from "../templates/index/hero"
import RealValuesSection from "../templates/index/realValuesSection"
import OurServicesListSection from "../templates/index/ourServicesListSection"
import OurCaseStudiesSection from "../templates/index/ourCaseStudiesSection"
const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <RealValuesSection />
            <OurServicesListSection />
            <OurCaseStudiesSection />
        </Layout>
    )
}
export default IndexPage
