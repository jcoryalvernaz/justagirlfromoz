import React from "react"

import heart from "../images/heart.svg"
import SocialMediaList from "./social-media-list"
import FooterStyles from "../styles/FooterStyles"

const Footer = ({ siteTitle }) => {
  return (
    <FooterStyles>
      <div className="gradient">
        <div className="footerWrapper">
          <SocialMediaList />
          <div className="siteInfo">
            © {new Date().getFullYear()}, {siteTitle}
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
