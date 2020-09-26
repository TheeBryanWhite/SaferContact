import React from 'react'
import {graphql} from 'gatsby'

import Hero from '../components/hero/Hero'
import ElevatorPitch from '../components/elevator-pitch/ElevatorPitch'
import AnonymousTracing from '../components/anonymous-tracing/AnonymousTracing'
import VideoBlock from '../components/video-block/VideoBlock'
import PlatformSolution from '../components/platform-solution/PlatformSolution'
import ProductFeatures from '../components/product-features/ProductFeatures'
import ImageBlock from '../components/image-block/ImageBlock'
import ContactUs from '../components/contact-us/ContactUs'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" description="Site description" />
      <Hero heroData={data.poster} />
      <ElevatorPitch />
      <AnonymousTracing atData={data.anonymousTracing} />
      <VideoBlock vbData={data.vbPoster} />
      <PlatformSolution psData={data.psImages} />
      <ProductFeatures />
      <ImageBlock ibData={data.ibImage} />
      <ContactUs />
    </Layout>
  )
}

export const hpQuery = graphql`
query hpQuery {
  poster: file(relativePath: {eq: "images/hero.png"}) {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  anonymousTracing: file(relativePath: {eq: "images/safercontact_anamyous_screen.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  vbPoster: file(relativePath: {eq: "images/vbPoster.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  psImages: allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "images/product-features"}}, sort: {order: ASC, fields: childImageSharp___fluid___originalName}) {
    edges {
      node {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
  ibImage: file(relativePath: {eq: "images/img-block-bg.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage
