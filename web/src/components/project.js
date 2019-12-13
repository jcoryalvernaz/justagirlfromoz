import React, { useState } from "react"
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
  margin: -4rem 0 4rem;
  display: grid;
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: ${props => (props.isVisible ? "grid" : "none")};
    align-items: center;
    justify-items: center;
    padding: 1.5rem;
  }
  .overlay-inner {
    background-color: var(--color-black);
    width: 100%;
    max-width: 960px;
    padding: 1vmin;
  }
  .close {
    cursor: pointer;
    background: none;
    color: var(--color-white);
    border: 0;
  }
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
  .mainContent {
    a {
      color: var(--color-accent);
      @media (hover: hover) {
        :hover {
          color: inherit;
        }
      }
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
      padding: 0.25rem 0;
    }
  }
  .categoriesHeadline {
    font-size: inherit;
    line-height: inherit;
    margin: 0.5rem 0 0;
  }
`

const Project = ({ _rawBody, categories, mainImage, members, photos, prev, next }) => {
  const [state, setState] = useState({
    overlayImageFluid: {},
    overlayImageAlt: "",
    isVisible: false,
  })

  const selectImage = (fluid, alt) => {
    setState({ overlayImageFluid: fluid, overlayImageAlt: alt, isVisible: true })
  }

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
    <ProjectStyles isVisible={state.isVisible} style={fadeUpProps}>
      {state.isVisible && (
        <div className="overlay">
          <div className="overlay-inner">
            <button className="close" onClick={() => setState({ isVisible: false })}>
              X Close
            </button>
            <Img fluid={state.overlayImageFluid} alt={state.overlayImageAlt} />
          </div>
        </div>
      )}
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
                <h3 className="categoriesHeadline">Categories</h3>
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
            <Photo key={photo.asset._id} photo={photo} index={i} selectImage={selectImage} />
          ))}
        </PhotosContainer>
      )}
      <ProjectPagination prev={prev} next={next} />
    </ProjectStyles>
  )
}

export default Project
