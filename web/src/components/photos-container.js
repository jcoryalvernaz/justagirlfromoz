import React from "react"
import styled from "styled-components"

import "../styles/custom-properties.css"

const PhotosContainerStyles = styled.div`
  padding: 10vmin 10vmin 20vmin;
  overflow: hidden;
  display: grid;
  justify-self: center;
  width: 100%;
  grid-template-columns: 1fr;
`

const PhotosContainer = ({ children }) => {
  return <PhotosContainerStyles>{children}</PhotosContainerStyles>
}

export default PhotosContainer
