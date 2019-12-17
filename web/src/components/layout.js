import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"

import GlobalStyles from "../styles/GlobalStyles"

const MainStyles = styled.main`
  display: grid;
  min-height: calc(100% - 73px - 120px);
  @media (min-width: 450px) {
    min-height: calc(100% - 88px - 150px);
  }
`

const Layout = ({ children, siteTitle, headerTitle, headerDate, projectsCount }) => {
  const isHomePage = typeof window !== "undefined" ? window.location.pathname === "/" : null
  return (
    <>
      <GlobalStyles />
      <Header
        isHomePage={isHomePage}
        siteTitle={siteTitle}
        title={headerTitle}
        publishedAt={headerDate}
        count={projectsCount}
      />
      <MainStyles>{children}</MainStyles>
      <Footer siteTitle={siteTitle} />
    </>
  )
}

export default Layout
