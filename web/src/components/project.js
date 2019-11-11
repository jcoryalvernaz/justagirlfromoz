import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockContent from './block-content'
import ProjectContainer from './project-container'
import RoleList from './role-list'
import Photo from './photo'

const ProjectStyles = styled.article`
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
    padding-bottom: calc(9 / 16 * 100%);
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      vertical-align: top;
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

function Project (props) {
  const {
    _rawBody,
    title,
    categories,
    mainImage,
    members,
    photos,
    publishedAt,
    relatedProjects
  } = props
  return (
    <ProjectStyles>
      {props.mainImage && mainImage.asset && (
        <div className='mainImage'>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <ProjectContainer>
        <div className='grid'>
          <div className='mainContent'>
            <h1 className='title'>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className='metaContent'>
            {publishedAt && (
              <div className='publishedAt'>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {members && members.length > 0 && <RoleList items={members} title='Project members' />}
            {categories && categories.length > 0 && (
              <div className='categories'>
                <h3 className='categoriesHeadline'>Categories</h3>
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
              <div className='relatedProjects'>
                <h3 className='relatedProjectsHeadline'>Related projects</h3>
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
          {photos &&
            photos.length > 0 &&
            photos.map((photo, i) => <Photo key={photo.asset._id} photo={photo} index={i} />)}
        </div>
      </ProjectContainer>
    </ProjectStyles>
  )
}

export default Project
