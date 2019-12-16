import { Link } from "gatsby"
import React from "react"
import ProjectPreview from "./project-preview"
import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"

const GridStyles = styled(animated.div)`
  margin: -8rem 0 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;
  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
  .browseMoreNav {
    grid-column: 1 / -1;
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
    margin-top: 1rem;
    text-align: right;
  }
`

function ProjectPreviewGrid({ projects, browseMoreHref }) {
  const fadeUpProps = useSpring({
    config: config.slow,
    delay: 500,
    from: { opacity: 0, transform: `translate3d(0, 50px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  return (
    <GridStyles style={fadeUpProps}>
      {projects &&
        projects.map(project => (
          <ProjectPreview key={project.id} project={project} inGrid={true} />
        ))}
      {browseMoreHref && (
        <div className="browseMoreNav">
          <Link to={browseMoreHref}>Browse more</Link>
        </div>
      )}
    </GridStyles>
  )
}

ProjectPreviewGrid.defaultProps = {
  nodes: [],
  browseMoreHref: "",
}

export default ProjectPreviewGrid
