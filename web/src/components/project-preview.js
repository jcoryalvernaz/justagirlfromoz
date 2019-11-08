import {Link} from 'gatsby'
import React from 'react'
import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

const PreviewStyles = styled.div`
  display: grid;
  text-decoration: none;
  height: 100%;
  width: 100%;
  position: relative;
`

const MainImage = styled.img`
  box-shadow: ${props => props.shadowArray.join(`, `)};
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  :focus {
    outline: none;
    box-shadow: ${props => props.shadowArray.join(`, `)}, ${props => props.overlay} 0px 0px 0px 10px;
  }
`

function ProjectPreview (props) {
  const shadow = hexToRgba(props.mainImage.asset.metadata.palette.vibrant.background, 0.15)
  const overlay = hexToRgba(props.mainImage.asset.metadata.palette.vibrant.background, 0.5)
  const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
  const shadowArray = px.map(val => `${shadow} 0px ${val} ${val} 0px`)
  return (
    <PreviewStyles>
      <Link to={`/project/${props.slug.current}`}>
        {props.mainImage && props.mainImage.asset && (
          <MainImage
            shadowArray={shadowArray}
            overlay={overlay}
            src={imageUrlFor(buildImageObj(props.mainImage)).url()}
            alt={props.mainImage.alt}
          />
        )}

        {/* //TODO use rawExcerpt in SEO component for social
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )} */}
      </Link>
    </PreviewStyles>
  )
}

export default ProjectPreview
