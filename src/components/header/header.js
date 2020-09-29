import React from 'react'
import Nav from '../nav/nav'

import './header.scss'

const Header = props => {

  return (
    <header id="home" >
      <Nav 
        navData={props.navData}
        sectionData={props.sectionData}
      />
    </header>
  )
}

export default Header