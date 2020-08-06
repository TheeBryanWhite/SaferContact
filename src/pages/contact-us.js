import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contact-form/ContactForm'

import './contact.scss'

const ContactPage = () => {

  return (
    <Layout>
      <SEO title="SaferContact - Contact Us" />
        <div className="contact-form">
            <h2>Contact us</h2>
            <h3>Safer Contact</h3>
            <p>
              402 Amhert St.<br />
              Suite 303<br />
              Nashua, NH 03063<br />
              <a href="tel:16034604496">(603) 460-4496</a><br />
              <a href="mailto:info@safercontact.com">info@safercontact.com</a>
            </p>
            <ContactForm />
        </div>
    </Layout>
  )
}

export default ContactPage 
