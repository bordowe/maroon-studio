import React from "react"
import { Link } from "gatsby"
import {
    PageNotFoundButton,
    PageNotFoundInfoText,
    PageNotFoundSubtitle,
    PageNotFoundTitle,
    PageNotFoundWrapper,
} from "./index.style"

const PageNotFoundTemplate = () => {
    return (
        <PageNotFoundWrapper>
            <PageNotFoundTitle>404</PageNotFoundTitle>
            <PageNotFoundSubtitle>Page not found</PageNotFoundSubtitle>
            <PageNotFoundInfoText>
                Sorry! We couldn’t find the page you were looking for. But you
                can always check out what we have to offer 😉.
            </PageNotFoundInfoText>
            <Link to="/" style={{ textDecoration: "none" }}>
                <PageNotFoundButton>Back to home</PageNotFoundButton>
            </Link>
        </PageNotFoundWrapper>
    )
}

export default PageNotFoundTemplate
