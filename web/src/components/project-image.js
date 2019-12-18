import React from "react"
import Img from "gatsby-image"
import hexToRgba from "hex-to-rgba"

const ProjectImage = ({ image }) => {
  const color =
    image.asset.metadata.palette.vibrant !== null
      ? image.asset.metadata.palette.vibrant.background
      : image.asset.metadata.palette.dominant.background
  const shadow = hexToRgba(color, 0.15)
  const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
  const shadowArray = px.map(val => `${shadow} 0px ${val} ${val} 0px`)
  return (
    <Img
      style={{
        boxShadow: shadowArray.join(`, `),
      }}
      fluid={image.asset.fluid}
      alt={image.alt}
    />
  )
}

export default ProjectImage
