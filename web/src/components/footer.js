import React from "react"

import Heart from "../assets/heart"
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
            Made with<Heart />in Reno
          </div>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer
