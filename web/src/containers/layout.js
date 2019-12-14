import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"

function LayoutContainer(props) {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
          title
        }
      }
    `
  )
  return <Layout {...props} siteTitle={data.site.title} />
}

export default LayoutContainer
