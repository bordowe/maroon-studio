import * as React from "react"
import Layout from "../components/layout/index"
import Hero from "../templates/index/hero"
import RealValuesSection from "../templates/index/realValuesSection"
import OurServicesListSection from "../templates/index/ourServicesListSection"
import OurCaseStudiesSection from "../templates/index/ourCaseStudiesSection"
import OurBlogSection from "../templates/index/ourBlogSection"
const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <RealValuesSection />
            <OurServicesListSection />
            <OurCaseStudiesSection />
            <OurBlogSection />
        </Layout>
    )
}
export default IndexPage
