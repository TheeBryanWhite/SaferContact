import React from 'react'
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import usePreviewData from '../utils/UsePreviewData'
import Layout from '../components/layout/layout'
import SliceZone from '../components/SliceZone/SliceZone'

const Page = ({ data: { prismicPage, pages }}) => {
  const { data } = prismicPage
  const liveData = usePreviewData(data)

  return (
    <Layout>
      <Helmet>
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=safer-contact"></script>
      </Helmet>
      <SliceZone allSlices={liveData.body} />
    </Layout>
  )
}

export default withPreview(Page)

export const pageQuery = graphql`
query MyQuery {
  prismicPage {
    data {
      page_title {
        html
        raw
        text
      }
      body {
        ... on PrismicPageBodyHero {
          id
          slice_type
          primary {
            hero_subtitle {
              html
              raw
              text
            }
            hero_title {
              raw
              html
              text
            }
            hero_background_image {
              fluid(maxWidth: 1920) {
                src
              }
            }
            hero_video_mp4 {
              url
            }
            hero_video_ogv {
              url
            }
          }
        }
        ... on PrismicPageBodyOneColumnText {
          id
          slice_type
          primary {
            onecol_text_body {
              html
              raw
              text
            }
            oncol_section_id
            onecol_block_type
            one_col_textbackground_color
            one_col_text_video_mp4 {
              url
            }
            one_col_text_video_ogv {
              url
            }
            one_col_text_background_image {
              fluid(maxWidth: 1000, maxHeight: 800) {
                src
              }
            }
          }
        }
        ... on PrismicPageBodyTwoColumnWithImage {
          id
          primary {
            two_col_body {
              html
              raw
              text
            }
            two_col_image {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid
              }
            }
          }
          slice_type
        }
        ... on PrismicPageBodyTwoColumnWithSlider {
          id
          slice_type
          primary {
            two_col_slider_body {
              html
              raw
              text
            }
          }
          items {
            slide_body {
              html
              raw
              text
            }
            slide_image {
              fluid(maxWidth: 800) {
                ...GatsbyPrismicImageFluid
              }
            }
            slide_title {
              html
              raw
              text
            }
          }
        }
        ... on PrismicPageBodyBoxGrid {
          id
          slice_type
          items {
            box_body {
              html
              raw
              text
            }
          }
          primary {
            grid_cta {
              html
              raw
              text
            }
            grid_title {
              html
              raw
              text
            }
          }
        }
        ... on PrismicPageBodyFormBody {
          id
          slice_type
          primary {
            demo_body {
              html
              raw
              text
            }
            demo_title {
              html
              raw
              text
            }
            mail_body {
              html
              raw
              text
            }
            mail_title {
              html
              raw
              text
            }
          }
        }
      }
    }
    uid
    id
  }
}

`