import { Link } from "gatsby"
import React from "react"
import Icon from "./icon"
import { cn } from "../lib/helpers"
import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"

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
    font-weight: 600;
    a {
      display: inline-block;
      padding: 0.5em;
      color: inherit;
      text-decoration: none;
      @media (hover: hover) {
        &:hover {
          color: var(--color-accent);
        }
      }
    }
  }
  .toggleNavButton {
    appearance: none;
    font-size: 25px;
    border: none;
    background: none;
    margin: 0;
    padding: calc(14 / 17 / 2 * 1rem);
    outline: none;
    color: inherit;
    svg {
      display: block;
      fill: inherit;
    }
    @media (min-width: 450px) {
      display: none;
    }
  }
  .nav {
    grid-column: span 1 / -1;
    display: none;
    ul {
      margin: 0;
      padding: 0;
    }
    ul li a {
      display: block;
      color: inherit;
      text-decoration: none;
    }
    @media (hover: hover) {
      ul li a:hover {
        color: var(--color-accent);
      }
    }
    @media (max-width: 449px) {
      position: absolute;
      background: var(--color-dark-gray);
      color: var(--color-white);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      left: 0;
      right: 0;
      top: 4.3rem;
      ul {
        padding: 1rem 0;
      }
      ul li a {
        padding: 0.5rem 1.5rem;
      }
    }
    @media (min-width: 450px) {
      display: block;
      ul {
        list-style: none;
        display: flex;
        justify-content: flex-end;
      }
      ul li a {
        padding: 0.5rem;
      }
    }
  }
  .showNav {
    display: block;
  }
  .logo {
    height: 60vmin;
    min-height: 200px;
  }
`

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => {
  const fadeUpProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  return (
    <HeaderStyles>
      <div className="gradient">
        <div className="wrapper">
          <div className="branding">
            <animated.img
              style={fadeUpProps}
              className="logo"
              src={logo}
              alt="Just a Girl From Oz"
            />
          </div>
          <button className="toggleNavButton" onClick={showNav ? onHideNav : onShowNav}>
            <Icon symbol="hamburger" />
          </button>
          <nav className={cn("nav", showNav && "showNav")}>
            <ul>
              <li>
                <Link to="/archive/">Archive</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </HeaderStyles>
  )
}

export default Header
