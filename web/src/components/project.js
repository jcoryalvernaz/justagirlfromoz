import React from "react"
import styled from "styled-components"
import { animated, config, useSpring } from "react-spring"

import Container from "./container"
import ProjectImage from "./project-image"
import PhotosList from "./photos-list"
import BlockContent from "./block-content"
import RoleList from "./role-list"
import CategoryList from "./category-list"
import ProjectPagination from "./project-pagination"

const ProjectStyles = styled(animated.article)`
  margin: -8rem 0 4rem;
  display: grid;
  .mainImage {
    position: relative;
    display: grid;
    width: 100%;
    max-width: 960px;
    justify-self: center;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2rem;
    margin-top: 4rem;
    @media (min-width: 675px) {
      grid-template-columns: 3fr 1fr;
    }
  }
`

const Project = ({ _rawBody, categories, mainImage, members, photos, prev, next }) => {
  const fadeUpProps = useSpring({
    config: config.slow,
    delay: 500,
    from: { opacity: 0, transform: `translate3d(0, 50px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  return (
    <ProjectStyles style={fadeUpProps}>
      <Container>
        {mainImage && mainImage.asset && (
          <div className="mainImage">
            <ProjectImage image={mainImage} />
          </div>
        )}
        <div className="grid">
          <div className="mainContent">{_rawBody && <BlockContent blocks={_rawBody || []} />}</div>
          <aside className="metaContent">
            {members && members.length > 0 && <RoleList items={members} title="Project members" />}
            {categories && categories.length > 0 && <CategoryList categories={categories} />}
          </aside>
        </div>
      </Container>
      {photos && photos.length > 0 && <PhotosList photos={photos} />}
      <ProjectPagination prev={prev} next={next} />
    </ProjectStyles>
  )
}

export default Project
