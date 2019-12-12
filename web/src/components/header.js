import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"
import { format, distanceInWords, differenceInDays } from "date-fns"
import PropTypes from "prop-types"

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
    display: grid;
    grid-template-columns: 1fr;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 34.99%,
      rgba(0, 0, 0, 0) 35%,
      rgba(0, 0, 0, 0.35) 100%
    );
  }
  .wrapper {
    position: relative;
    justify-self: center;
    width: 100%;
    max-width: 960px;
    display: grid;
    grid-template-columns: 1fr;
  }
  .logo {
    margin: 1rem 0;
    width: 200px;
  }
`

const BackButtonStyles = styled(animated.div)`
  justify-self: start;
  padding-left: 1rem;
  &:hover,
  &:focus {
    .arrow {
      transform: translateX(-6px);
    }
  }
  .arrow {
    align-self: center;
    transition: transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .logo {
    width: 100px;
  }
  a {
    display: grid;
    grid-template-columns: auto auto;
  }
`

const BrandingStyles = styled(animated.img)`
  justify-self: center;
`

const TitleStyles = styled(animated.h1)`
  text-align: center;
  margin: 1rem 0;
`
const InfoStyles = styled(animated.div)`
  text-align: center;
  margin-bottom: 4rem;
`

const Header = ({ isHomePage, siteTitle, title, publishedAt, count }) => {
  const fadeUpProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  const fadeUpPropsDelay = useSpring({
    config: config.slow,
    delay: 250,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
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
            <>
              <BackButtonStyles style={backButtonProps}>
                <Link to="/">
                  <LeftArrow />
                  <img className="logo" src={logo} alt={siteTitle} />
                </Link>
              </BackButtonStyles>
              <TitleStyles style={fadeUpProps}>{title}</TitleStyles>
              {publishedAt && (
                <InfoStyles style={fadeUpPropsDelay}>
                  {differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? distanceInWords(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), "MMMM Do YYYY")}
                </InfoStyles>
              )}
              {count && (
                <InfoStyles style={fadeUpPropsDelay}>
                  {count} Projects in {title}
                </InfoStyles>
              )}
            </>
          )}
          {isHomePage && (
            <>
              <BrandingStyles style={fadeUpProps} className="logo" src={logo} alt={siteTitle} />
              <SocialMediaList />
            </>
          )}
        </div>
      </div>
    </HeaderStyles>
  )
}

Header.defaultProps = {
  isHomePage: true,
  siteTitle: "",
  title: "",
  publishedAt: "",
  count: 0,
}

Header.propTypes = {
  isHomePage: PropTypes.bool,
  siteTitle: PropTypes.string,
  title: PropTypes.string,
  publishedAt: PropTypes.string,
  count: PropTypes.number,
}

export default Header
