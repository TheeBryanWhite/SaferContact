import React from 'react'
import {graphql} from 'gatsby'

import SubpageHero from '../components/hero/SubpageHero'
import DefaultBody from '../components/default-body/DefaultBody'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const LegalPage = ({data}) => {
  
  return (
    <Layout>
      <SEO title="Home" description="Site description" />
      <SubpageHero heroData={data.poster} />
      <DefaultBody />
    </Layout>
  )
}

export const legalQuery = graphql`
query legalQuery {
  poster: file(relativePath: {eq: "images/hero.png"}) {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default LegalPage
