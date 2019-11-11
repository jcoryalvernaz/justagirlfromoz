import React from 'react'
import Img from 'gatsby-image'
import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'
import {useInView} from 'react-intersection-observer'

const PhotoStyles = styled.div`
  display: grid;
  grid-column: 1 / -1;
  margin-top: ${props => props.margin};
  max-width: 500px;
  background-color: var(--color-white);
  padding: 1vmin 1vmin 14vmin 1vmin;
  transform: rotate(${props => props.degrees}) translate3d(${props => props.percent}, 200px, 0px);
  border: 1px solid var(--color-gray);
  transition: all 1s ease-in-out;
`

const Photo = ({photo, index}) => {
  if (!photo.asset) {
    return null
  }
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0
  })
  const rotateDegrees = index % 2 === 0 ? '3deg' : '-3deg'
  const translatePercent = index % 2 === 0 ? '-100%' : '100%'
  const margin = index === 0 ? '0' : '-60vmin'
  const color = !photo.asset.metadata.palette.vibrant === null
    ? photo.asset.metadata.palette.vibrant.background
    : photo.asset.metadata.palette.dominant.background
  const shadow = hexToRgba(color, 0.15)
  const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
  const shadowArray = px.map(val => `${shadow} 0px ${val} ${val} 0px`)
  return (
    <PhotoStyles ref={ref} percent={translatePercent} degrees={rotateDegrees} margin={margin} style={inView ? {transform: `rotate(${rotateDegrees})`} : {}}>
      <Img style={{boxShadow: shadowArray.join(`, `)}} fluid={photo.asset.fluid} alt={photo.alt} />
    </PhotoStyles>
  )
}

export default Photo
