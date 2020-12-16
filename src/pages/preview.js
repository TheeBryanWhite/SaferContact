import * as React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'

import linkResolver from '../utils/linkResolver'

import Layout from '../components/Layout/Layout'

const PreviewPage = ({ isPreview, isLoading, previewData }) => {
  console.log(previewData)
  if (isPreview === false) return 'Not a preview!'

  return (
    <Layout>
      <div className="container previews">
        <h1>Loading preview data</h1>
      </div>
    </Layout>
  )
}

export default withPreviewResolver(PreviewPage, {
  repositoryName: 'safer-contact',
  linkResolver,
})

// import React, { useEffect } from 'react'
// import { graphql } from 'gatsby'
// import { navigate, useStaticQuery } from 'gatsby'
// import { usePrismicPreview } from 'gatsby-source-prismic'

// const PreviewPage = ({ location }) => {
//   const { allSitePage } = useStaticQuery(graphql`
//     {
//       allSitePage {
//         nodes {
//           path
//         }
//       }
//     }
//   `)
//   const allPaths = allSitePage.nodes.map((node) => node.path)

//   const { isPreview, previewData, path } = usePrismicPreview({
//     repositoryName: 'safer-contact',
//   })

//   useEffect(() => {
//     if (isPreview === false || !previewData) return

//     window.__PRISMIC_PREVIEW_DATA__ = previewData

//     if (allPaths.includes(path)) {
//       navigate(path)
//     } else {
//       navigate('/UnpublishedPreview')
//     }
//   }, [isPreview, previewData, path, allPaths])

//   if (isPreview === false) return <div>Not a preview!</div>

//   return <div>Loading preview...</div>
// }

// export default PreviewPage