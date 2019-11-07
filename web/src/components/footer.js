import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  border-top: 1px solid var(--color-gray);
  .footerWrapper {
    max-width: 960px;
    padding: 4.5em 1.5em 1.5em;
    margin: 0 auto;
    @media (min-width: 450px) {
      padding: 6em 2em 2em;
    }
  }
  .companyAddress {
    text-align: center;
    margin: 0 0 1rem;
  }
  .siteInfo {
    text-align: center;
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <div className='footerWrapper'>
        <div className='siteInfo'>
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer
