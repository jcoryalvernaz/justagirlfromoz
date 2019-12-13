import React from "react"
import styled from "styled-components"

import Container from "./container"
import ProjectPreview from "./project-preview"

const PaginationStyles = styled.div`
  border-top: 1px solid var(--color-gray);
  margin: 2rem 0 3rem;
  .paginationGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 300px;
    grid-gap: 2rem;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }
`

const ProjectPagination = ({ prev, next }) => (
  <Container>
    <PaginationStyles>
      <h3>More Projects</h3>
      <div className="paginationGrid">
        {prev && <ProjectPreview project={prev} />}
        {next && <ProjectPreview project={next} />}
      </div>
    </PaginationStyles>
  </Container>
)

export default ProjectPagination
