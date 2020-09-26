import React from 'react'
import SuperHeader from './super-header'
import Nav from '../nav/nav'

import './header.scss'

const Header = props => {

  return (
    <header id="home" >
      <SuperHeader
        subtitle={props.subtitle}
        title={props.title}
      />
      <Nav 
        navData={props.navData}
        sectionData={props.sectionData}
      />
    </header>
  )
}

export default Header