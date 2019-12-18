import { createGlobalStyle } from "styled-components"

import "./custom-properties.css"

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise|Dancing+Script:600|Open+Sans|Source+Sans+Pro&display=swap");
html {
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
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
h1,
h2,
h4 {
  text-shadow: rgba(0, 0, 0, 0.4) 0px 2px 12px;
}

/* Responisively sized elements */
p {
  font-size: var(--font-micro-size);
  line-height: var(--font-micro-line-height);
  margin: 0.5rem 0 1rem 0;
  @media(min-width: 450px) {
    font-size: var(--font-micro-size);
    line-height: var(--font-micro-line-height);
  }
  @media(min-width: 675px) {
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
  }
}
h1 {
  font-weight: 600;
  font-family: "Dancing Script", cursive;
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
  font-family: "Dancing Script", cursive;
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
  margin: 1.5rem 0 2rem;
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
  font-family: "Waiting for the Sunrise", cursive;
  margin: 1rem 0 0.5rem;
  font-size: var(--font-micro-size);
    line-height: var(--font-micro-line-height);
  @media(min-width: 350px) {
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
  }
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
  font-family: "Dancing Script", cursive;
  font-weight: 400;
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
