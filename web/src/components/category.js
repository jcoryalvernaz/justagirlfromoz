import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const CategoryStyles = styled.li`
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  padding: 0.25rem 0;
`

const Category = ({ category }) => (
  <CategoryStyles>
    {category.slug ? (
      <Link to={`/category/${category.slug.current}`}>{category.title}</Link>
    ) : (
      <span>{category.title}</span>
    )}
  </CategoryStyles>
)

export default Category
