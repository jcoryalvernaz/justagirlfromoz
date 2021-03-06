import styled from "styled-components"

const OverlayStyles = styled.div`
  z-index: 20;
  display: grid;
  grid-template-columns: 1fr;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-content: center;
  text-align: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  color: var(--color-white);
  background-color: ${props => props.overlay};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  h2 {
    margin: 0;
    padding: 1rem;
  }
`

export default OverlayStyles
