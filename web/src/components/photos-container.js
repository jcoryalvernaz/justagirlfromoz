import React from "react";
import styled from "styled-components";

import "../styles/custom-properties.css";

const PhotosContainerStyles = styled.div`
  max-width: 960px;
  padding: 1.5em;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  @media (max-width: 960px) {
    overflow: hidden;
  }
`;

const PhotosContainer = ({ children }) => {
  return <PhotosContainerStyles>{children}</PhotosContainerStyles>;
};

export default PhotosContainer;
