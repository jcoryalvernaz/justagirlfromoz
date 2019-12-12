import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { config, animated, useSpring } from "react-spring"

const SocialMediaStyles = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, 3rem);
  grid-auto-flow: column;
  justify-self: center;
  justify-items: center;
  margin-bottom: 4rem;
  .icon {
    width: 3rem;
  }
`

const SocialMediaList = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          socialMedia {
            platform
            url
            image {
              asset {
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    `
  )

  const socialMedia = [...data.sanitySiteSettings.socialMedia]

  const fadeUpProps = useSpring({
    config: config.slow,
    delay: 250,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  return (
    <SocialMediaStyles style={fadeUpProps}>
      {socialMedia.map((social, i) => (
        <a href={social.url} key={i}>
          <img className="icon" src={social.image.asset.fixed.src} alt={social.platform} />
        </a>
      ))}
    </SocialMediaStyles>
  )
}

export default SocialMediaList
