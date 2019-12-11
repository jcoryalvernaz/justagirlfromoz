import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

function SEO({ description, lang, meta, keywords, title, image: metaImage, imageAlt, isProject }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
          title
          description
          keywords
          author {
            name
          }
          siteUrl
        }
      }
    `
  )
  const metaDescription = description || (site && site.description) || ""
  const siteTitle = (site && site.title) || ""
  const image = metaImage && metaImage.src ? metaImage.src : null
  const siteAuthor = (site && site.author && site.author.name) || ""

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title === siteTitle ? "%s" : `%s | ${siteTitle}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: isProject ? "article" : "website",
        },
        {
          name: "twitter:creator",
          content: siteAuthor,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                { property: "og:image", content: image },
                {
                  property: "og:image:alt",
                  content: imageAlt,
                },
                {
                  name: "twitter:image",
                  content: image,
                },
                {
                  name: "twitter:image:alt",
                  content: imageAlt,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(
          keywords && keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
  image: {},
  imageAlt: "",
  isProject: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  imageAlt: PropTypes.string,
  isProject: PropTypes.bool,
}

export default SEO
