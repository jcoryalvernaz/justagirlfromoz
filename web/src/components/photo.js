import React from 'react'
import Img from 'gatsby-image'
import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'

const PhotoStyles = styled.div`
  display: grid;
  grid-column: 1 / -1;
  margin-bottom: 2rem;
  background-color: var(--color-white);
  padding: 2vmin 2vmin 20vmin 2vmin;
  transform: rotate(1deg);
  border: 1px solid var(--color-gray);
  box-shadow: ${props => props.shadowArray.join(`, `)};
`

const Photo = ({photo}) => {
  if (!photo.asset) {
    return null
  }

  const color = !photo.asset.metadata.palette.vibrant === null
    ? photo.asset.metadata.palette.vibrant.background
    : photo.asset.metadata.palette.dominant.background
  const shadow = hexToRgba(color, 0.15)
  const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
  const shadowArray = px.map(val => `${shadow} 0px ${val} ${val} 0px`)
  return (
    <PhotoStyles shadowArray={shadowArray}>
      <Img fluid={photo.asset.fluid} alt={photo.alt} />
    </PhotoStyles>
  )
}

export default Photo
