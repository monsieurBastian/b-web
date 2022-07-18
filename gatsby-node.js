const path = require("path")
const data = require("./src/data/pageData")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  data.forEach(( page ) => {
    createPage({
      path: page.slug,
      component: path.resolve('./src/templates/generic.js'),
      context: {
        title: page.title,
        description: page.description,
      },
    })
  })

/*   const mdxPages = await graphql(`
    query {
      allMdx (
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  
  mdxPages.data.allMdx.edges.map(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve('./src/templates/markdown.js'),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  }) */
}