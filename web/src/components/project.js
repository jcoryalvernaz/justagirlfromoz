import { format, distanceInWords, differenceInDays } from "date-fns"
import React, { useState } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import BlockContent from "./block-content"
import Container from "./container"
import PhotosContainer from "./photos-container"
import RoleList from "./role-list"
import Photo from "./photo"

const ProjectStyles = styled.article`
  overflow: hidden;
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
    background-color: var(--color-white);
    width: 100%;
    max-width: 800px;
    padding: 1vmin;
  }
  .close {
    cursor: pointer;
    background: none;
    color: var(--color-black);
    border: 0;
  }
  .title {
    font-weight: 900;
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
    margin: 1rem 0 2rem;
    @media (min-width: 450px) {
      font-size: var(--font-title2-size);
      line-height: var(--font-title2-line-height);
    }
    @media (min-width: 675px) {
      font-size: var(--font-title1-size);
      line-height: var(--font-title1-line-height);
    }
  }
  .mainImage {
    position: relative;
    background: #eee;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2em;
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
  .publishedAt {
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
    margin: 1.5rem 0 3rem;
    color: var(--color-gray);
  }
  .categories {
    border-top: 1px solid var(--color-very-light-gray);
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
  .relatedProjects {
    border-top: 1px solid var(--color-very-light-gray);
    margin: 2rem 0 3rem;
    ul {
      list-style: none;
      margin: 0.75rem 0;
      padding: 0;
    }
    a {
      display: inline-block;
      color: inherit;
      text-decoration: none;
      padding: 0.25rem 0;
    }
  }
  .relatedProjectsHeadline {
    font-size: inherit;
    line-height: inherit;
    margin: 0.5rem 0 0;
  }
`

const Project = props => {
  const [state, setState] = useState({
    overlayImageFluid: {},
    overlayImageAlt: "",
    isVisible: false,
  })

  const selectImage = (fluid, alt) => {
    setState({ overlayImageFluid: fluid, overlayImageAlt: alt, isVisible: true })
  }

  const {
    _rawBody,
    title,
    categories,
    mainImage,
    members,
    photos,
    publishedAt,
    relatedProjects,
  } = props
  return (
    <ProjectStyles isVisible={state.isVisible}>
      {state.isVisible && (
        <div className="overlay">
          <div className="overlay-inner">
            <button className="close" onClick={() => setState({ isVisible: false })}>
              x Close
            </button>
            <Img fluid={state.overlayImageFluid} alt={state.overlayImageAlt} />
          </div>
        </div>
      )}
      {props.mainImage && mainImage.asset && (
        <div className="mainImage">
          <Img fluid={mainImage.asset.fluid} alt={mainImage.alt} />
        </div>
      )}
      <Container>
        <div className="grid">
          <div className="mainContent">
            <h1 className="title">{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className="metaContent">
            {publishedAt && (
              <div className="publishedAt">
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Do YYYY")}
              </div>
            )}
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
            {relatedProjects && relatedProjects.length > 0 && (
              <div className="relatedProjects">
                <h3 className="relatedProjectsHeadline">Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
      <PhotosContainer>
        {photos &&
          photos.length > 0 &&
          photos.map((photo, i) => (
            <Photo key={photo.asset._id} photo={photo} index={i} selectImage={selectImage} />
          ))}
      </PhotosContainer>
    </ProjectStyles>
  )
}

export default Project
