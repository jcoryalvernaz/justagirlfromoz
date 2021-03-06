import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import GraphQLErrorList from "../components/graphql-error-list"
import ProjectPreviewGrid from "../components/project-preview-grid"
import SEO from "../components/seo"
import Layout from "../containers/layout"
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers"

export const query = graphql`
  query ArchivePageQuery {
    projects: allSanityProject(
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

const ArchivePage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projects =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout headerTitle="Archive" projectsCount={projects.length}>
      <SEO title="Archive" />
      <Container>
        {projects && projects.length > 0 && <ProjectPreviewGrid projects={projects} />}
      </Container>
    </Layout>
  )
}

export default ArchivePage
