import React from 'react'
import { graphql } from "gatsby";

import HomeLayout from '../components/layout/home-layout'
import SEO from '../components/seo'
import Nav from '../components/nav/nav'

import "./home.scss";

const IndexPage = ({data}) => {

  return (
    <HomeLayout>
      <SEO title="Home" description="Helping businesses provide safer working environments" />
      <div className="page-content">
        <h2>Where data connects the dots</h2>
        <p>Helping businesses provide safer working environments</p>
        <Nav menu={data.site.siteMetadata.menuLinks} />
      </div>
    </HomeLayout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        menuLinks {
          class
          name
          link
        }
      }
    }
  }
`

export default IndexPage
