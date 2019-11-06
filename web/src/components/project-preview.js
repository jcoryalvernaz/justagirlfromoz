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
  grid-row-end: ${`span ${props => props.count}`};
  box-shadow: ${props => props.shadowArray.join(`, `)};
  position: relative;
  :focus {
    box-shadow: ${`${props => props.shadowArray.join(`, `)}, rgba(${props =>
    props.overlay}) 0px 0px 0px 10px`};
  }
`

function ProjectPreview (props) {
  const shadow = hexToRgba(props.mainImage.asset.metadata.palette.dominant.background, 0.15)
  const overlay = hexToRgba(props.mainImage.asset.metadata.palette.dominant.background, 0.5)
  const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
  const shadowArray = px.map(val => `${shadow} 0px ${val} ${val} 0px`)

  const h = props.mainImage.asset.metadata.dimensions.height
  const count = Math.floor(h / 50)
  return (
    <Link className={styles.root} to={`/project/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <MainImage
            count={count}
            shadowArray={shadowArray}
            overlay={overlay}
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      {/* <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )} */}
    </Link>
  )
}

export default ProjectPreview
