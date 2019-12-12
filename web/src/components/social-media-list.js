import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const SocialMediaList = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings(_id: { eq: "siteSettings" }) {
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
  const socialMedia = [data.socialMedia]
  console.log(socialMedia)

  return <p>Social</p>
}

export default SocialMediaList
