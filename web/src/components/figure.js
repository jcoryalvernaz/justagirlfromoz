import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'
import styled from 'styled-components'

const FigureStyles = styled.figure`
  margin: 2rem 0;
  figcaption {
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
    margin: 0.5rem 0 0;
  }
`

export default ({node}) => {
  if (!node.asset) {
    return null
  }

  const fluidProps = getFluidGatsbyImage(node.asset._ref, {maxWidth: 675}, clientConfig.sanity)

  return (
    <FigureStyles>
      <Img fluid={fluidProps} alt={node.alt} />
      {node.caption && <figcaption>{node.caption}</figcaption>}
    </FigureStyles>
  )
}
