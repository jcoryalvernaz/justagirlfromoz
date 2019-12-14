import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import hexToRgba from "hex-to-rgba"
import styled from "styled-components"

import OverlayStyles from "../styles/OverlayStyles"

const PreviewStyles = styled.div`
  display: grid;
  position: relative;
  height: ${props => props.height};
  grid-row-end: ${props => props.rowEnd};
  padding-bottom: ${props => props.paddingBottom};
  box-shadow: ${props => props.boxShadow};
  :focus,
  :hover {
    [data-name="image-overlay"] {
      opacity: 1;
    }
  }
`

function ProjectPreview({ project, inGrid = false }) {
  const color =
    project.mainImage.asset.metadata.palette.vibrant !== null
      ? project.mainImage.asset.metadata.palette.vibrant.background
      : project.mainImage.asset.metadata.palette.dominant.background
  const shadow = hexToRgba(color, 0.15)
  const overlay = hexToRgba(color, 0.9)
  const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
  const shadowArray = px.map(val => `${shadow} 0px ${val} ${val} 0px`)

  const h = project.mainImage.asset.metadata.dimensions.height
  const count = Math.floor(h / 1000)
  const paddingBottom = 100 / project.mainImage.asset.fluid.aspectRatio

  return (
    <PreviewStyles
      height={inGrid ? 0 : "auto"}
      rowEnd={inGrid ? `span ${count}` : ""}
      paddingBottom={inGrid ? `${paddingBottom}%` : ""}
      boxShadow={shadowArray.join(`, `)}
    >
      <Link to={`/project/${project.slug.current}`}>
        {project.mainImage && project.mainImage.asset && (
          <>
            <OverlayStyles overlay={overlay} data-name="image-overlay">
              <h2>{project.title}</h2>
            </OverlayStyles>
            <Img style={{}} fluid={project.mainImage.asset.fluid} alt={project.mainImage.alt} />
          </>
        )}
      </Link>
    </PreviewStyles>
  )
}

export default ProjectPreview
