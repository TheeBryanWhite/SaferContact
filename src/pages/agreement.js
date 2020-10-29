import React from 'react'
import {graphql} from 'gatsby'

import SubpageHero from '../components/hero/SubpageHero'
import MaBody from '../components/default-body/MaBody'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const MaPage = ({data}) => {
  
  return (
    <Layout>
      <SEO title="Home" description="Site description" />
      <SubpageHero heroData={data.poster} pageTitle="Master Agreement" />
      <MaBody />
    </Layout>
  )
}

export const maQuery = graphql`
query maQuery {
  poster: file(relativePath: {eq: "images/hero.png"}) {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default MaPage
