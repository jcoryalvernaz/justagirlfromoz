import React from "react"
import styled from "styled-components"

import Category from "./category"

const CategoryListStyles = styled.div`
  border-top: 1px solid var(--color-gray);
  margin: 2rem 0 3rem;
  ul {
    list-style: none;
    margin: 0.75rem 0;
    padding: 0;
  }
`

const CategoryList = ({ categories }) => (
  <CategoryListStyles>
    <h2>Categories</h2>
    <ul>
      {categories.map(category => (
        <Category key={category._id} category={category} />
      ))}
    </ul>
  </CategoryListStyles>
)

export default CategoryList
