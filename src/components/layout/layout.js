import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.scss";
import "../../utils/normalize.css";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    offset: (anchor) => {
      switch(anchor.getAttribute('id')) {
        case 'about':
          return 100;

        case 'anonymous-tracing':
          return 150;

        case 'platform-solution':
          return 75;

        case 'product-features':
          return 50;

        case 'contact-us':
          return 50;

        default:
          return 0;
      }
    }
  })
}

const Layout = (props) => {
  const layoutQuery = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          address {
            address1
            address2
            city
            state
            zip
            phone
          }
          contact {
						email
					}
          menuLinks {
            class
            link
            name
          }
          subtitle
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <html className={(props.menuState ? 'locked' : '')} lang="en" />
      </Helmet>
      <Header 
        navData={layoutQuery.site.siteMetadata.menuLinks}
        subtitle={layoutQuery.site.siteMetadata.subtitle}
        title={layoutQuery.site.siteMetadata.title}
      />
      <main>
        {props.children}
      </main>
      <Footer
        addressData={layoutQuery.site.siteMetadata.address}
        contactData={layoutQuery.site.siteMetadata.contact}
        navData={layoutQuery.site.siteMetadata.menuLinks}
        subtitle={layoutQuery.site.siteMetadata.subtitle}
        title={layoutQuery.site.siteMetadata.title}
      />
    </>
  )
}

const mapStateToProps = state => ({
  menuState: state.app.menuState
})

export default connect(mapStateToProps, null)(Layout)
