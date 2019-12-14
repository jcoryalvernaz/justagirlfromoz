import React from "react"
import Img from "gatsby-image"
import hexToRgba from "hex-to-rgba"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const PhotoStyles = styled.div`
  display: grid;
  grid-column: 1 / -1;
  margin-top: ${props => props.margin};
  max-width: 500px;
  background-color: var(--color-white);
  padding: 1vmin 1vmin 4vmin 1vmin;
  transform: rotate(${props => props.offset * 3}deg)
    translate3d(${props => props.offset * -100}%, 300px, 0) scale(1.6);
  transition: all 1.2s cubic-bezier(0.33, 0, 0.66, 0.33);
  justify-self: center;
  width: 100%;
  box-shadow: ${props => props.offset * 30}vmin -10vmin 5px rgba(0, 0, 0, 0.7);
  .handwriting {
    font-family: 'La Belle Aurore', cursive;
    font-size: 3rem;
    color: var(--color-black);
    justify-self: end;
    margin-right: 1rem;
    padding-top: 2vmin;
  }
`

const Photo = ({ photo, index, selectImage }) => {
  if (!photo.asset) {
    return null
  }
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  })
  const offset = index % 2 === 0 ? 1 : -1
  const color =
    !photo.asset.metadata.palette.vibrant === null
      ? photo.asset.metadata.palette.vibrant.background
      : photo.asset.metadata.palette.dominant.background
  const overlay = hexToRgba(color, 0.9)
  return (
    <PhotoStyles
      ref={ref}
      offset={offset}
      style={
        inView
          ? { transform: `rotate(${offset * 3}deg)`, boxShadow: `0 0 5px rgba(0, 0, 0, 0.7)` }
          : {}
      }
    >
        <Img fluid={photo.asset.fluid} alt={photo.alt} />
      <span className="handwriting">{photo.caption}</span>
    </PhotoStyles>
  )
}

export default Photo
