import React from "react"
import styled from "styled-components"

import heart from "../images/heart.svg"

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
  .siteInfo {
    text-align: center;
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
  }
  .createdInfo {
    text-align: center;
    margin: 1rem;
  }
  .heart {
    margin-bottom: -0.2rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    height: 1rem;
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footerWrapper">
        <div className="siteInfo">© {new Date().getFullYear()}, Just a Girl from Oz</div>
        <div className="createdInfo">
          Made with <img className="heart" src={heart} alt="love" /> in Reno
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer
