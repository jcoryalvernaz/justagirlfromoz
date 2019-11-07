import React from 'react'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

import '../styles/layout.css'

const MainStyles = styled.main`
  background: var(--color-dark-gray);
  min-height: calc(100% - 73px - 120px);
  @media (min-width: 450px) {
    min-height: calc(100% - 88px - 150px);
  }
`

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <MainStyles>{children}</MainStyles>
    <Footer />
  </>
)

export default Layout
