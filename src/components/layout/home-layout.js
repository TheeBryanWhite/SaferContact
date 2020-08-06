import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image'

import Header from "../header/header";
import HomeFooter from "../footer/home-footer";
import "./layout.scss";
import "../../utils/normalize.css";

const HomeLayout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query HomeTitleQuery {
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
    <Header menuData={data.site.siteMetadata.menuLinks} headerClass="home" />
      <BackgroundImage
        Tag="main"
        className="home"
        fluid={imageData}
        backgroundColor={`#000`}
      >
        {children}
      </BackgroundImage>
    <HomeFooter siteTitle="Skylytics Data LLC" footerClass="home" />
    </>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string
}

HomeLayout.defaultProps = {
  siteTitle: ``
}

export default HomeLayout;