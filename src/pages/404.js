import * as React from 'react'
import { withUnpublishedPreview } from 'gatsby-source-prismic'

import Page from '../templates/Page'

import Layout from '../components/Layout/Layout.js'

const NotFoundPage = () => (
  <Layout>
    <h1>Page not found!</h1>
  </Layout>
)

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    page: Page,
  },
})