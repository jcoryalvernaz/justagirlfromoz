import React from 'react'
import Img from 'gatsby-image'
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

  return (
    <PhotoContainer>
      <Img fluid={photo.asset.fluid} alt={photo.alt} />
    </PhotoContainer>
  )
}

export default Photo
