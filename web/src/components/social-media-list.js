import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { config, animated, useSpring } from "react-spring"

const SocialMediaStyles = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, 5rem);
  grid-auto-flow: column;
  justify-self: center;
  justify-items: center;
  margin: 3rem 0 ${props => props.marginBottom};
  .icon {
    width: 6rem;
    &:hover, &:focus {
      filter: brightness(75%);
    }
  }
`

const SocialMediaList = ({inHeader}) => {
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
    delay: 300,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  return (
    <SocialMediaStyles style={fadeUpProps} marginBottom={inHeader ? `8rem` : `4rem`}>
      {socialMedia.map((social, i) => (
        <a href={social.url} key={i}>
          <img className="icon" src={social.image.asset.fixed.src} alt={social.platform} />
        </a>
      ))}
    </SocialMediaStyles>
  )
}

export default SocialMediaList
