import React from 'react'
import { connect } from 'react-redux'
import { setMenu } from '../../redux/actions/actions'
import { Link } from 'gatsby'

import Hamburger from './hamburger'
import MobileClose from './mobile-close'
import './nav.scss'

const Nav = props => {
  const clickHandler = () => {
		props.setMenu(props.menuState)
  }
  
  return (
    <nav className={(props.fixNav ? 'fixed' : '')}>
      <div className="container">
        <div className={`${props.menuState ? 'active-menu nav-closure' : 'nav-closure'}`}>
          <ul>{
            props.navData.map((navItem, index) => (
            <li 
              className={navItem.class}
              key={index}
              >
                <Link
                onClick={() => { clickHandler() }}
                  to={navItem.link}
                >
                  {navItem.name}
                </Link>
              </li>
            ))
          }
          <li className="sign-in"><a href="http://app.safercontact.com/" target="_blank" rel="noreferrer">Sign In</a></li>
          </ul>
          <MobileClose />
        </div>
        <Hamburger />
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  fixNav: state.app.fixNav,
	menuState: state.app.menuState
})
  
export default connect(mapStateToProps, {setMenu})(Nav)