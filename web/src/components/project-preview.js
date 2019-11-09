import {Link} from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'

const PreviewStyles = styled.div`
  display: grid;
  text-decoration: none;
  height: 100%;
  width: 100%;
  position: relative;
  :focus,
  :hover {
    [data-name='image-overlay'] {
      opacity: 1;
    }
  }
`

const OverlayStyles = styled.div`
  z-index: 20;
  display: grid;
  justify-content: center;
  text-align: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  color: var(--color-white);
  background-color: ${props => props.overlay};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 1rem;
  h2 {
    text-shadow: rgba(0, 0, 0, 0.4) 0px 2px 12px;
  }
`

function ProjectPreview (props) {
  const color = props.mainImage.asset.metadata.palette.vibrant !== null
    ? props.mainImage.asset.metadata.palette.vibrant.background
    : props.mainImage.asset.metadata.palette.dominant.background
  console.log(color)
  const shadow = hexToRgba(color, 0.15)
  const overlay = hexToRgba(color, 0.9)
  const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
  const shadowArray = px.map(val => `${shadow} 0px ${val} ${val} 0px`)
  return (
    <PreviewStyles>
      <Link to={`/project/${props.slug.current}`}>
        {props.mainImage && props.mainImage.asset && (
          <>
            <OverlayStyles overlay={overlay} data-name='image-overlay'>
              <h2>{props.title}</h2>
            </OverlayStyles>
            {/* <MainImage
              shadowArray={shadowArray}
              overlay={overlay}
              src={imageUrlFor(buildImageObj(props.mainImage)).url()}
              alt={props.mainImage.alt}
            /> */}
            <Img
              style={{
                boxShadow: shadowArray.join(`, `),
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              fluid={props.mainImage.asset.fluid}
            />
          </>
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
