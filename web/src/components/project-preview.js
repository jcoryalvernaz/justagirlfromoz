import {Link} from 'gatsby'
import React from 'react'
import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'

import styles from './project-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

const MainImage = styled.img`
  box-shadow: ${props => props.shadowArray.join(`, `)};
  position: relative;
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
    <Link className={styles.root} to={`/project/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <MainImage
            shadowArray={shadowArray}
            overlay={overlay}
            src={imageUrlFor(buildImageObj(props.mainImage)).url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      {/* //TODO use rawExcerpt in SEO component for social
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )} */}
    </Link>
  )
}

export default ProjectPreview
