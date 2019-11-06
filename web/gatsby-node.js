const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({graphql, actions, reporter}) => {
  const {createPage} = actions
  return graphql(`
    {
      allSanityProject(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
            categories {
              id
              title
              slug {
                current
              }
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    const projects = (res.data.allSanityProject || {}).edges || []

    createProjectPages({projects, createPage, reporter})
    createCategoryPages({projects, createPage, reporter})
  })
}

const createProjectPages = ({projects, createPage, reporter}) => {
  projects
    .filter(project => !isFuture(project.node.publishedAt))
    .forEach(project => {
      const id = project.node.id
      const slug = project.node.slug.current
      const path = `/project/${slug}/`

      reporter.info(`Creating project page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/project.js'),
        context: {id}
      })
    })
}

const createCategoryPages = ({projects, createPage, reporter}) => {
  const allCategories = new Set()

  projects.forEach(({node: {categories}}) => {
    if (!Array.isArray(categories)) return
    categories.forEach(category => allCategories.add(category))
  })

  allCategories.forEach(category => {
    const id = category.id
    const slug = category.slug.current
    const path = `/category/${slug}`

    reporter.info(`Creating category page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/category.js'),
      context: {category, id}
    })
  })
}
