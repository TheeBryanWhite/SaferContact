import React from 'react'
import { connect } from 'react-redux'
import { 
  setActiveSection,
  setFixNav,
  setMenu } from '../../redux/actions/actions'
import { Link } from 'gatsby'
import window from 'global/window'

import Hamburger from './hamburger'
import MobileClose from './mobile-close'
import './nav.scss'

const Nav = props => {
  const clickHandler = () => {
		props.setMenu(props.menuState)
  }

  const getHeader = () => {
    const header = document.getElementsByTagName('header')
    return [].slice.call(header)
  }

  const sectionObj = scrollDir => {
    const sections = document.getElementsByTagName('section')
    const sectionsArr = [].slice.call(sections)

    let sectionsFinal = null

    if (scrollDir === 'down') {
      sectionsFinal = sectionsArr
    } else {
      sectionsFinal = sectionsArr.reverse()
    }

    return sectionsFinal
  }

  const isInViewport= element => {
    const rect = element.getBoundingClientRect();
    const bottomThreshold = (window.innerHeight - window.innerHeight * .85)
    const topThreshold = (window.innerHeight - window.innerHeight * .75)
    const inView = (
      rect.top  + topThreshold >= 0 &&
      rect.bottom - bottomThreshold <= (window.innerHeight || document.documentElement.clientHeight)
    )
    if (inView) {
      return {"id": element.id, "inView": inView}
    }
  }

  const theActiveSection = sections => {
    let theSections = null

    sections.forEach(section => {
      if (
        typeof section !== 'undefined' && 
        section.id.length !== null &&
        section.id.length > 0
      ) {
        theSections = section.id
      } 
    })

    return theSections
  }

  let lastScrollTop = 0
  let scrollDirections = null

  const scrollDirection = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        scrollDirections = 'down'
    } else {
      scrollDirections = 'up'
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    return scrollDirections
  }

  window.onscroll = () => {
    if (!props.fixNav && window.pageYOffset > getHeader()[0].getBoundingClientRect().bottom) {
      props.setFixNav(props.fixNav)
    }
    
    if (props.fixNav && window.pageYOffset < getHeader()[0].getBoundingClientRect().bottom) {
      props.setFixNav(props.fixNav)
    }
    
    let activeSections = []
    sectionObj(scrollDirection()).forEach(section => {
      activeSections.push(isInViewport(section))
    })

    let activeSection = theActiveSection(activeSections)

    if (activeSection === 'hero') {
      activeSection = 'home'
    }
    
    if (
      activeSection !== null &&
      activeSection.length > 0 && 
      activeSection !== props.activeSection
    ) {
      props.setActiveSection(theActiveSection(activeSections))
    }

    if (window.scrollY <= 300) {
      props.setActiveSection('home')
    }
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
                  className={(props.activeSection === navItem.class ? 'active' : '')}
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
  activeSection: state.app.activeSection,
  fixNav: state.app.fixNav,
	menuState: state.app.menuState
})
  
export default connect(mapStateToProps, {setActiveSection, setFixNav, setMenu})(Nav)