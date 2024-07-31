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
            <PageNotFoundSubtitle>Strona nie znaleziona</PageNotFoundSubtitle>
            <PageNotFoundInfoText>
                Przepraszamy! Nie znaleźliśmy strony, której szukałeś. Ale
                zawsze możesz sprawdzić, co mamy do zaoferowania 😉.
            </PageNotFoundInfoText>
            <Link to="/" style={{ textDecoration: "none" }}>
                <PageNotFoundButton>Wróć na stronę główną</PageNotFoundButton>
            </Link>
        </PageNotFoundWrapper>
    )
}

export default PageNotFoundTemplate
