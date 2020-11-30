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
      <SEO title="safercontact - Home" description="An anonynous contact tracing appliance to keep your employees safe and helthy from COVID-19" />
      <Hero heroData={data.allPrismicPageBodyHero} heroImg={data.poster} />
      <ElevatorPitch aboutData={data.allPrismicPageBodyOneColumnText} />
      <AnonymousTracing atData={data.allPrismicPageBodyTwoColumnWithImage} />
      <VideoBlock vbData={data.allPrismicPageBodyOneColumnText} vbImg={data.vbPoster} />
      <PlatformSolution psData={data.allPrismicPageBodyTwoColumnWithSlider} />
      <ProductFeatures pfData={data.allPrismicPageBodyBoxGrid} />
      <ImageBlock ibData={data.allPrismicPageBodyOneColumnText} ibImg={data.ibImage} />
      <ContactUs cuData={data.allPrismicPageBodyFormBody} />
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
  allPrismicPageBodyHero {
    group(field: slice_type) {
      nodes {
        primary {
          hero_title {
            html
          }
          hero_subtitle {
            html
          }
        }
      }
    }
  }
  allPrismicPageBodyTwoColumnWithImage {
    group(field: slice_type) {
      nodes {
        primary {
          two_col_body {
            html
          }
          two_col_image {
            fluid(maxWidth: 600) {
              ...GatsbyPrismicImageFluid
            }
          }
        }
      }
    }
  }
  anonymousTracing: file(relativePath: {eq: "images/safercontact_anamyous_screen.png"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  allPrismicPageBodyOneColumnText {
    group(field: slice_type) {
      nodes {
        primary {
          onecol_text_body {
            html
          }
        }
      }
    }
  }
  allPrismicPageBodyTwoColumnWithSlider {
    group(field: slice_type) {
      nodes {
        primary {
          two_col_slider_body {
            html
          }
        }
        items {
          slide_body {
            html
            raw
            text
          }
          slide_title {
            html
          }
          slide_image {
            fluid(maxWidth: 800) {
              ...GatsbyPrismicImageFluid
            }
          }
        }
      }
    }
  }
  allPrismicPageBodyBoxGrid {
    group(field: slice_type) {
      nodes {
        primary {
          grid_cta {
            html
          }
          grid_title {
            html
          }
        }
        items {
          box_body {
            html
          }
        }
      }
    }
  }
  allPrismicPageBodyFormBody {
    group(field: slice_type) {
      nodes {
        primary {
          demo_body {
            html
          }
          demo_title {
            text
          }
          mail_body {
            html
          }
          mail_title {
            text
          }
        }
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
