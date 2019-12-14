import { createGlobalStyle } from "styled-components"

import "./custom-properties.css"

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=La+Belle+Aurore&display=swap");
html {
  box-sizing: border-box;
  font-family: var(--font-family-sans);
  font-size: 10px;
  line-height: var(--font-base-line-height);
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: var(--color-black);
  color: var(--color-white);
  margin: 0;
  font-size: 1.5rem;
}

html,
body,
body > div,
body > div > div {
  height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: var(--color-accent);
}
`

export default GlobalStyles