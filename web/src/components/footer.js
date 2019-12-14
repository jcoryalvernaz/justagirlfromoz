import React from "react"
import styled from "styled-components"

import heart from "../images/heart.svg"
import camera from "../images/pattern.svg"

const FooterStyles = styled.footer`
  border-top: 1px solid var(--color-gray);
  background: url(${camera});
  position: relative;
  display: grid;
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
  .gradient {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0) 34.99%,
      rgba(0, 0, 0, 0) 35%,
      rgba(0, 0, 0, 0.35) 100%
    );
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <div className="gradient">
        <div className="footerWrapper">
          <div className="siteInfo">
            © {new Date().getFullYear()}, Just a Girl from Oz Photography
          </div>
          <div className="createdInfo">
            Made with <img className="heart" src={heart} alt="love" /> in Reno
          </div>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer
