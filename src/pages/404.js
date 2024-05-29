import * as React from "react"
import { GlobalStyles } from "../styles/globalStyles"
import { Layout } from "../components/layout/index.style"
import Navbar from "../components/navbar"
import PageNotFoundTemplate from "../templates/index/pageNotFound"

const NotFoundPage = () => {
    return (
        <>
            <Layout>
                <GlobalStyles />
                <Navbar />
                <PageNotFoundTemplate />
            </Layout>
        </>
    )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
