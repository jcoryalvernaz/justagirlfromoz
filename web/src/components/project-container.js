import React from 'react'
import styled from 'styled-components'

import '../styles/custom-properties.css'

const ProjectContainerStyles = styled.div`
  max-width: 960px;
  padding: 1.5em;
  margin: 0 auto;
`

const ProjectContainer = ({children}) => {
  return <ProjectContainerStyles>{children}</ProjectContainerStyles>
}

export default ProjectContainer
