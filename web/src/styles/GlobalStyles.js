import { createGlobalStyle } from "styled-components"

import "./custom-properties.css"

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise&display=swap");
html {
  box-sizing: border-box;
  font-family: var(--font-family-sans);
  font-size: var(--font-base-size);
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
  text-decoration: underline;
}

/* Responisively sized elements */
p {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  margin: 0.5rem 0 1rem 0;
  @media(min-width: 450px) {
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
  }
  @media(min-width: 675px) {
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  }
}
h1 {
  font-weight: 900;
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
  margin: 1rem 0 2rem;
  @media(min-width: 450px) {
    font-size: var(--font-title2-size);
    line-height: var(--font-title2-line-height);
  }
  @media(min-width: 675px) {
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }
}
h2 {
  font-weight: 900;
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
  margin: 1.5rem 0 0.5rem;
  @media(min-width: 450px) {
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  }
  @media(min-width: 675px) {
    font-size: var(--font-title2-size);
    line-height: var(--font-title2-line-height);
  }
}
h3 {
  font-weight: 900;
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  margin: 1rem 0 0.5rem;
  @media(min-width: 450px) {
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  }
  @media(min-width: 675px) {
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  }
}
h4 {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  margin: 1rem 0 0.5rem;
  @media(min-width: 450px) {
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
  }
  @media(min-width: 675px) {
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  }
}
`

export default GlobalStyles
