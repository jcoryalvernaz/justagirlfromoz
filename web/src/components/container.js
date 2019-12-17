import React from "react"
import styled from "styled-components"

import "../styles/custom-properties.css"

const ContainerStyles = styled.div`
  max-width: 1400px;
  padding: 1.5rem;
  justify-self: center;
  width: 100%;
  display: grid;
`

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>
}

export default Container
