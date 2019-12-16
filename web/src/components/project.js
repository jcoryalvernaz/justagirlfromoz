import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { animated, config, useSpring } from "react-spring"
import hexToRgba from "hex-to-rgba"

import Container from "./container"
import PhotosContainer from "./photos-container"
import BlockContent from "./block-content"
import RoleList from "./role-list"
import Photo from "./photo"
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
  .categories {
    border-top: 1px solid var(--color-gray);
    margin: 2rem 0 3rem;
    ul {
      list-style: none;
      margin: 0.75rem 0;
      padding: 0;
    }
    ul li {
      font-size: var(--font-small-size);
      line-height: var(--font-small-line-height);
      padding: 0.25rem 0;
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

  const color =
    mainImage.asset.metadata.palette.vibrant !== null
      ? mainImage.asset.metadata.palette.vibrant.background
      : mainImage.asset.metadata.palette.dominant.background
  const shadow = hexToRgba(color, 0.15)
  const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
  const shadowArray = px.map(val => `${shadow} 0px ${val} ${val} 0px`)
  return (
    <ProjectStyles style={fadeUpProps}>
      <Container>
        {mainImage && mainImage.asset && (
          <div className="mainImage">
            <Img
              style={{
                boxShadow: shadowArray.join(`, `),
              }}
              fluid={mainImage.asset.fluid}
              alt={mainImage.alt}
            />
          </div>
        )}
        <div className="grid">
          <div className="mainContent">{_rawBody && <BlockContent blocks={_rawBody || []} />}</div>
          <aside className="metaContent">
            {members && members.length > 0 && <RoleList items={members} title="Project members" />}
            {categories && categories.length > 0 && (
              <div className="categories">
                <h2>Categories</h2>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>
                      {category.slug ? (
                        <Link to={`/category/${category.slug.current}`}>{category.title}</Link>
                      ) : (
                        <span>{category.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
      {photos && photos.length > 0 && (
        <PhotosContainer>
          {photos.map((photo, i) => (
            <Photo key={photo.asset._id} photo={photo} index={i} />
          ))}
        </PhotosContainer>
      )}
      <ProjectPagination prev={prev} next={next} />
    </ProjectStyles>
  )
}

export default Project
