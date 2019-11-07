import React from 'react'
import styled from 'styled-components'

import '../styles/custom-properties.css'

const ContainerStyles = styled.div`
  max-width: 1400px;
  padding: 1.5em;
  margin: 0 auto;
`

const Container = ({children}) => {
  return <ContainerStyles>{children}</ContainerStyles>
}

export default Container
