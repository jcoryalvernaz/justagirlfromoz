import React from "react";
import Img from "gatsby-image";
import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";

const PhotoStyles = styled(animated.div)`
  display: grid;
  grid-column: 1 / -1;
  margin-top: ${props => props.margin};
  max-width: 500px;
  background-color: var(--color-white);
  padding: 1vmin 1vmin 14vmin 1vmin;
  transform: rotate(${props => props.offset * 3}deg)
    translate3d(${props => props.offset * -100}%, 300px, 0px) scale(1.5);
  border: 1px solid var(--color-gray);
  transition: all 1s ease-in-out;
  justify-self: center;
  width: 100%;
  box-shadow: ${props => props.offset * 30}vmin -10vmin 5px rgba(0, 0, 0, 0.7);
`;

const Photo = ({ photo, index }) => {
  if (!photo.asset) {
    return null;
  }
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0
  });
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const offset = index % 2 === 0 ? 1 : -1;
  const color =
    !photo.asset.metadata.palette.vibrant === null
      ? photo.asset.metadata.palette.vibrant.background
      : photo.asset.metadata.palette.dominant.background;
  const shadow = hexToRgba(color, 0.15);
  const px = [`64px`, `32px`, `16px`, `8px`, `4px`];
  const shadowArray = px.map(val => `${shadow} 0px ${val} ${val} 0px`);
  return (
    <PhotoStyles
      ref={ref}
      offset={offset}
      style={inView ? { transform: `rotate(${offset * 3}deg)`, boxShadow: "none" } : {}}
    >
      <Img style={props} fluid={photo.asset.fluid} alt={photo.alt} />
    </PhotoStyles>
  );
};

export default Photo;
