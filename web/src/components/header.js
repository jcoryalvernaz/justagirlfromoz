import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"

import SocialMediaList from "./social-media-list"
import LeftArrow from "../assets/left-arrow"
import camera from "../images/pattern.svg"
import logo from "../images/logo.svg"

const HeaderStyles = styled.header`
  background: url(${camera});
  position: relative;
  display: grid;
  .gradient {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 34.99%,
      rgba(0, 0, 0, 0) 35%,
      rgba(0, 0, 0, 0.35) 100%
    );
  }
  .wrapper {
    position: relative;
    margin: 0 auto;
    max-width: 960px;
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (min-width: 450px) {
      padding: 1.5em 1.5em;
    }
  }
  .branding {
    grid-column: 2 / span 1;
    padding-bottom: 2rem;
  }
  .logo {
    height: 60vmin;
    min-height: 200px;
  }
  .arrow {
    transition: transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    &:hover,
    &:focus {
      transform: translateX(-6px);
    }
  }
`

const Header = ({ isHomePage }) => {
  const fadeUpProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  const fadeProps = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const backButtonProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(-30px, 0, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  return (
    <HeaderStyles>
      <div className="gradient">
        <div className="wrapper">
          {isHomePage === false && (
            <animated.div style={backButtonProps}>
              <Link to="/">
                <LeftArrow />
              </Link>
            </animated.div>
          )}
          <div className="branding">
            <animated.img style={fadeProps} className="logo" src={logo} alt="Just a Girl From Oz" />
          </div>
          <SocialMediaList />
        </div>
      </div>
    </HeaderStyles>
  )
}

export default Header
