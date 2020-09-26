import React from "react"

import SuperFooter from './super-footer'
import FooterBody from './footer-body'
import SubFooter from './sub-footer'

import "./footer.scss"

const Footer = props => {
  return (  
    <footer>
      <SuperFooter
        subtitle={props.subtitle}
        title={props.title}
      />
      <FooterBody 
        addressData={props.addressData}
        contactData={props.contactData}
        navData={props.navData}
      />
      <SubFooter />
    </footer>
  )
}
  
  export default Footer