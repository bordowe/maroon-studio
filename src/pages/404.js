import * as React from "react"
import Layout from "../components/layout"
import PageNotFoundTemplate from "../templates/index/pageNotFound"

const NotFoundPage = () => {
    return (
        <>
            <Layout>
                <PageNotFoundTemplate />
            </Layout>
        </>
    )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
