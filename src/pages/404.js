import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout/layout'
import SEO from "../components/seo"

const NotFoundPage = () => {

  const data = useStaticQuery(graphql`
    query notFoundImgQuery {
      desktop: file(relativePath: { eq: "components/layout/img/404.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.desktop.childImageSharp.fluid

  return (
  <Layout>
    <SEO title="SkyLytics - 404: Not found" />
    <BackgroundImage
        Tag="main"
        className="home"
        fluid={imageData}
        backgroundColor={`#000`}
      >
        <div className="home-content">
        <p>Quoth the raven...</p>
        <h2>404</h2>
        </div>
      </BackgroundImage>
  </Layout>
  )
}

export default NotFoundPage
