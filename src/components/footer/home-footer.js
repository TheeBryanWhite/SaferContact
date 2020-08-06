import PropTypes from "prop-types"
import React from "react"
import Logo from "./svg/skylytics-logo.svg"

import "./footer.scss"

const theDate = new Date()
const theYear = theDate.getFullYear();

const HomeFooter = ({ siteTitle, footerClass }) => {

  return (
    <footer className={footerClass}>
      <div className="container">
        <div className="copyright">
          <p>&copy; {theYear} Copyright - All rights reserved - {siteTitle}</p>
        </div>
        <div className="footer-logo">
        <Logo />
        </div>
      </div>
    </footer>
  )
}
  
HomeFooter.propTypes = {
  footerClass: PropTypes.string,
  siteTitle: PropTypes.string
}

HomeFooter.defaultProps = {
  footerClass: ``,
  siteTitle: ``
}

export default HomeFooter;