import React from 'react';
import SEO from '../components/seo'
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout/layout'

const Success = () => {

    const data = useStaticQuery(graphql`
    query ContactSuccessQuery {
      desktop: file(relativePath: { eq: "components/layout/img/background-data.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.desktop.childImageSharp.fluid

    return (
        <Layout>
            <SEO title="SkyLytics - Message received" />

            <BackgroundImage
                Tag="main"
                className="home"
                fluid={imageData}
                backgroundColor={`#000`}
            >
            <div className="home-content">
                <h2>Message received!</h2>
                <p>We'll be in touch with you ASAP.</p>
            </div>
            </BackgroundImage>
        </Layout>
    )
}

export default Success 
