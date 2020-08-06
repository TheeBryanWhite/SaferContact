import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image'

import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.scss";
import "../../utils/normalize.css";

const NFLayout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query NFQuery {
      site {
        siteMetadata {
          menuLinks {
            class
            name
            link
          }
        }
      },
      desktop: file(relativePath: { eq: "components/layout/img/404.jpg" }) {
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
    <Header menuData={data.site.siteMetadata.menuLinks} headerClass="home" />
		<BackgroundImage
        Tag="main"
        className="home"
        fluid={imageData}
        backgroundColor={`#000`}
      >
        {children}
      </BackgroundImage>
    <Footer footerClass="home" />
    </>
  )
}

NFLayout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string
}

NFLayout.defaultProps = {
  siteTitle: ``
}

export default NFLayout;