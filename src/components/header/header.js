import React from 'react'
import {connect} from 'react-redux'
import {setFixNav} from '../../redux/actions/actions'
import SuperHeader from './super-header'
import Nav from '../nav/nav'

import './header.scss'

const Header = props => {
  const header = React.createRef()

	// Fix the nav position if the header scrolls OFF the page
	window.onscroll = () => {
		if (!props.fixNav && window.pageYOffset > header.current.getBoundingClientRect().bottom) {
      props.setFixNav(props.fixNav)
    }
    
    // Unfix the nav position if the header scrolls ON the page
    if (props.fixNav && window.pageYOffset < header.current.getBoundingClientRect().bottom) {
      props.setFixNav(props.fixNav)
		}
  }

  return (
    <header 
      id="home"
      ref={header}
    >
      <SuperHeader
        subtitle={props.subtitle}
        title={props.title}
      />
      <Nav navData={props.navData} />
    </header>
  )
}

const mapStateToProps = state => ({
  fixNav: state.app.fixNav
})

export default connect(mapStateToProps, { setFixNav })(Header)