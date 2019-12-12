import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"

import "../styles/layout.css"

const MainStyles = styled.main`
  background: var(--color-dark-gray);
  min-height: calc(100% - 73px - 120px);
  @media (min-width: 450px) {
    min-height: calc(100% - 88px - 150px);
  }
`

const Layout = ({ children }) => {
  const isHomePage = typeof window !== "undefined" ? window.location.pathname === "/" : null

  return (
    <>
      <Header isHomePage={isHomePage} />
      <MainStyles>{children}</MainStyles>
      <Footer />
    </>
  )
}

export default Layout
