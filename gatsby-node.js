const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all Pages with their IDs and template data.
  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          id
		      uid
		      type
        }
      }
    }
  `)

  const pageTemplates = {
    page: path.resolve(__dirname, 'src/templates/Page.js'),
  }

  // Create pages for each Page in Prismic using the selected template.
  pages.data.allPrismicPage.nodes.forEach((node) => {
    createPage({
      path: `/${node.uid}`,
      component: pageTemplates[node.type],
      context: {
        id: node.id,
        uid: node.uid
      },
    })
  })
}