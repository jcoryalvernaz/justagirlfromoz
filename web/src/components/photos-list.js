import React from "react"
import styled from "styled-components"

import Photo from "./photo"

const PhotosListStyles = styled.div`
  padding: 10vmin 10vmin 20vmin;
  overflow: hidden;
  display: grid;
  justify-self: center;
  width: 100%;
  grid-template-columns: 1fr;
`

const PhotosList = ({ photos }) => {
  return (
    <PhotosListStyles>
      {photos.map((photo, i) => (
        <Photo key={photo.asset._id} photo={photo} index={i} />
      ))}
    </PhotosListStyles>
  )
}

export default PhotosList
