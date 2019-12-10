import { Link } from "gatsby"
import React from "react"
import ProjectPreview from "./project-preview"
import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"

const GridStyles = styled(animated.div)`
  z-index: 20;
  margin: -4rem 0 4em;
  .headline {
    font-size: var(--font-micro-size);
    line-height: var(--font-micro-line-height);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 2rem 0;
  }
  .grid {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 100px;
    grid-gap: 2em;
  }
  .browseMoreNav {
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
    margin-top: 1rem;
    text-align: right;
    a {
      display: inline-block;
      padding: 0.5rem 0;
      color: inherit;
      text-decoration: none;
      @media (hover: hover) {
        &:hover {
          color: var(--color-accent);
        }
      }
    }
  }
`

function ProjectPreviewGrid(props) {
  const fadeUpProps = useSpring({
    config: config.slow,
    delay: 600,
    from: { opacity: 0, transform: `translate3d(0, 50px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  return (
    <GridStyles style={fadeUpProps}>
      <ul className="grid">
        {props.nodes &&
          props.nodes.map(node => (
            <li
              style={{
                gridRowEnd: `span ${Math.floor(
                  node.mainImage.asset.metadata.dimensions.height / 1000
                )}`,
              }}
              key={node.id}
            >
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className="browseMoreNav">
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </GridStyles>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
}

export default ProjectPreviewGrid
