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
query MyQuery($uid: String!) {
  prismicPage(uid: { eq: $uid }) {
        uid
        type
        id
        data {
          body {
            ... on PrismicPageBodyHero {
              id
              slice_type
              primary {
                hero_background_image {
                  fluid {
                    src
                  }
                }
                hero_subtitle {
                  html
                  raw
                  text
                }
                hero_video_mp4 {
                  url
                }
                hero_title {
                  html
                  raw
                  text
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
                oncol_section_id
                one_col_text_background_image {
                  fluid(maxWidth: 1920) {
                    src
                  }
                }
                one_col_text_video_ogv {
                  url
                }
                one_col_text_video_mp4 {
                  url
                }
                one_col_textbackground_color
                onecol_block_type
                onecol_text_body {
                  html
                  raw
                  text
                }
              }
            }
            ... on PrismicPageBodyTwoColumnWithImage {
              id
              slice_type
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
            }
            ... on PrismicPageBodyTwoColumnWithSlider {
              id
              slice_type
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
              primary {
                two_col_slider_body {
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
            ... on PrismicPageBodySubpageHero {
              id
              slice_type
              primary {
                subhero_bg_image {
                  fluid {
                    src
                  }
                }
                subhero_page_title {
                  html
                  raw
                  text
                }
              }
            }
          }
        }
      }
    }
`