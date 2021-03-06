import React from "react"
import { graphql } from "gatsby"
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers"
import Container from "../components/container"
import GraphQLErrorList from "../components/graphql-error-list"
import ProjectPreviewGrid from "../components/project-preview-grid"
import SEO from "../components/seo"
import Layout from "../containers/layout"

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      about
    }
    projects: allSanityProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
              metadata {
                dimensions {
                  height
                }
                palette {
                  dominant {
                    background
                  }
                  vibrant {
                    background
                  }
                }
              }
            }
            alt
          }
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const projects = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        {projects && <ProjectPreviewGrid projects={projects} browseMoreHref="/archive/" />}
        <h2>About Me</h2>
        <p>{site.about}</p>
      </Container>
    </Layout>
  )
}

export default IndexPage
