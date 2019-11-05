import React from 'react'
import Img from 'gatsby-image'

const Photo = ({photo}) => {
  if (!photo.asset) {
    return null
  }

  return (
    <div>
      <Img fluid={photo.asset.fluid} alt={photo.alt} />
    </div>
  )
}

export default Photo
