import React from 'react'
import PropTypes from 'prop-types'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from "./svg/logo.svg"

import Nav from '../nav/nav'

import './header.scss'

const Header = ({menuData}) => (
  <header>
      <div className="nav-container">
      <div className="container">
          <Nav menu={menuData} />
        </div>
      </div>
      <div className="logo">
        <div className="container">
          <h1>
            <AniLink 
              cover
              direction="left"
              bg="#767676"
              to="/"
            >
              <span className="screen-reader-text">SaferContact<span>TM</span></span>
              <Logo />
            </AniLink>
          </h1>
        </div>
      </div>
  </header>
)

Header.propTypes = {
	menuData: PropTypes.array,
}
  
Header.defaultProps = {
	menuData: ``,
}

export default Header