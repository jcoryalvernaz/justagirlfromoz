import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import hexToRgba from "hex-to-rgba"

import ProjectImage from "./project-image"
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
  const overlay = hexToRgba(color, 0.9)

  const h = project.mainImage.asset.metadata.dimensions.height
  const count = Math.floor(h / 1000)
  const paddingBottom = 100 / project.mainImage.asset.fluid.aspectRatio

  return (
    <PreviewStyles
      height={inGrid ? 0 : "auto"}
      rowEnd={inGrid ? `span ${count}` : ""}
      paddingBottom={inGrid ? `${paddingBottom}%` : ""}
    >
      <Link to={`/project/${project.slug.current}`}>
        {project.mainImage && project.mainImage.asset && (
          <>
            <OverlayStyles overlay={overlay} data-name="image-overlay">
              <h2>{project.title}</h2>
            </OverlayStyles>
            <ProjectImage image={project.mainImage} />
          </>
        )}
      </Link>
    </PreviewStyles>
  )
}

export default ProjectPreview
