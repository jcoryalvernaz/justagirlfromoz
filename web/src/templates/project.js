import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

import GraphQLErrorList from "../components/graphql-error-list"
import Project from "../components/project"
import SEO from "../components/seo"
import Layout from "../containers/layout"

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
        slug {
          current
        }
      }
      mainImage {
        asset {
          _id
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
          metadata {
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
      photos {
        asset {
          _id
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
          metadata {
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
        caption
      }
      title
      description
      slug {
        current
      }
      _rawBody
      members {
        _key
        person {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
        roles
      }
    }
  }
`

const ProjectTemplate = props => {
  const { data, errors, pageContext } = props
  const project = data && data.project
  const { prev, next } = pageContext
  return (
    <Layout headerTitle={project.title} headerDate={project.publishedAt}>
      {errors && <SEO title="GraphQL Error" />}
      {project && (
        <SEO
          title={project.title || "Untitled"}
          description={project.description}
          image={project.mainImage.asset.fluid}
          imageAlt={project.mainImage.alt}
          isProject={true}
        />
      )}
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <Project {...project} prev={prev} next={next} />}
    </Layout>
  )
}

export default ProjectTemplate
