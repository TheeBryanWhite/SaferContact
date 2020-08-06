import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image'

import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.scss";
import "../../utils/normalize.css";

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          menuLinks {
            class
            name
            link
          }
        }
      },
      desktop: file(relativePath: { eq: "components/layout/img/sc-background.png" }) {
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
    <>
    <Header menuData={data.site.siteMetadata.menuLinks} />
      <BackgroundImage
        Tag="main"
        fluid={imageData}
        backgroundColor={`#000`}
      >
        {children}
      </BackgroundImage>
    <Footer siteTitle="Skylytics Data LLC" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string
}

Layout.defaultProps = {
  siteTitle: ``
}

export default Layout;