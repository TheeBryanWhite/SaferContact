import React from 'react'
import Nav from '../nav/nav'
import LinkBar from './link-bar'

import './header.scss'

const Header = props => {

  return (
    <header id="home" >
      <LinkBar />
      <Nav 
        navData={props.navData}
        sectionData={props.sectionData}
      />
    </header>
  )
}

export default Header