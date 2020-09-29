import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { 
  setActiveSection,
  setFixNav,
  setMenu } from '../../redux/actions/actions'
import { Link } from 'gatsby'
import window from 'global/window'

import Hamburger from './hamburger'
import LogoSvg from '../../svg/logo.svg'
import MobileClose from './mobile-close'
import './nav.scss'

const Nav = props => {
  const clickHandler = () => {
		props.setMenu(props.menuState)
  }

  const sectionObj = () => {
    const sections = document.getElementsByTagName('section')
    const sectionsArr = [].slice.call(sections)

    return sectionsArr
  }

  const isInViewport= (element, upDown) => {
    const rect = element.getBoundingClientRect();
    let inView = null

    if (upDown) {
      inView = (
        rect.top <= window.innerHeight * .33
      )
    } else {
      inView = (
        rect.bottom <= window.innerHeight * .33
      )
    }
    
    if (inView) {
      return {"id": element.id, "inView": inView}
    }
  }

  const theActiveSection = sections => {
    let theSections = null

    sections.forEach(section => {
      if (typeof section === 'undefined' || section.id.length === 0) {
        return false
      }

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
        scrollDirections = false // scroll down
    } else {
      scrollDirections = true // scroll up
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    return scrollDirections
  }

  const setNavItemWidth = navItem => {
    const links = document.getElementsByClassName('link-container')
    const linksArr = [].slice.call(links)
    const bpLarge = 1024
    const bpXlarge = 1280

    let widthOffset = null

    if (window.innerWidth >= bpLarge) {
      widthOffset = 30

      if (window.innerWidth >= bpXlarge) {
        widthOffset = 35
      }

      linksArr.forEach(link => {
        link.style.width = (link.offsetWidth + widthOffset) + 'px'
      })
    }
  }
  useEffect(() => {
    setNavItemWidth()
  }, [])

  window.onscroll = () => {    
    let activeSections = []
    sectionObj().forEach(section => {
      activeSections.push(isInViewport(section, scrollDirection()))
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
    <nav className="fixed">
      <div className="container">
        <div className="logo">
          <h1><Link to="/"><LogoSvg /><span className="screen-reader-text">safercontact</span></Link></h1>
        </div>
        <div className={`${props.menuState ? 'active-menu nav-closure' : 'nav-closure'}`}>
          <ul>{
            props.navData.map((navItem, index) => (
            <li 
              className={`link-container ${navItem.class}`}
              key={index}
              >
                <Link
                  className={(props.activeSection === navItem.class ? 'active' : '')}
                  onClick={() => { clickHandler() }}
                  to={navItem.link}
                >
                  <span>{navItem.name}</span>
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