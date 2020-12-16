import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { navigate, useStaticQuery } from 'gatsby'
import { usePrismicPreview } from 'gatsby-source-prismic'

const PreviewPage = ({ location }) => {
  const { allSitePage } = useStaticQuery(graphql`
    {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `)
  const allPaths = allSitePage.nodes.map((node) => node.path)

  const { isPreview, previewData, path } = usePrismicPreview({
    repositoryName: 'safer-contact',
  })

  useEffect(() => {
    if (isPreview === false || !previewData) return

    window.__PRISMIC_PREVIEW_DATA__ = previewData

    if (allPaths.includes(path)) {
      navigate(path)
    } else {
      navigate('/UnpublishedPreview')
    }
  }, [isPreview, previewData, path, allPaths])

  if (isPreview === false) return <div>Not a preview!</div>

  return <div>Loading preview...</div>
}

export default PreviewPage