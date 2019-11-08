import React from 'react'
import Img from 'gatsby-image'
import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'

const PhotoContainer = styled.div`
  display: grid;
  grid-column: 1 / -1;
  padding-bottom: 2rem;
`

const Photo = ({photo}) => {
  if (!photo.asset) {
    return null
  }

  const color = !photo.asset.metadata.palette.vibrant === null ? photo.asset.metadata.palette.vibrant.background : photo.asset.metadata.palette.dominant.background
  const shadow = hexToRgba(color, 0.15)
  const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
  const shadowArray = px.map(val => `${shadow} 0px ${val} ${val} 0px`)
  return (
    <PhotoContainer>
      <Img style={{boxShadow: shadowArray}} fluid={photo.asset.fluid} alt={photo.alt} />
    </PhotoContainer>
  )
}

export default Photo
