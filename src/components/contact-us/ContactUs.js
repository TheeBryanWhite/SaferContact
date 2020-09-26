import React from 'react'
import ContactForm from './contact-form/ContactForm'

import './ContactUs.scss'
import MailSvg from '../../svg/mail.svg'
import ScheduleSvg from '../../svg/schedule.svg'
import CirclesSvg from '../../svg/circles.svg'

const ContactUs = () => {
	return(
		<section className="contact-us pad-this gradient-bg" id="contact-us">
			<CirclesSvg className="top-right" />
			<div className="container columns">
				<div className="column contact-body">
					<div className="connect">
						<h2><MailSvg />Connect with Us</h2>
						<p>Safercontact™ Protects The Health and Well-Being of Your Employees</p>
					</div>
					<div className="demo">
						<h2><ScheduleSvg />Schedule a Demo</h2>
						<p>Book a Demo today to see how Safercontact™ can provide a secure, accurate, scalable, and anomyous contact tracing  solution for your company.</p>
						<p className="cta"><a href="/">Book a Demo Today</a></p>
					</div>
				</div>
				<div className="column contact-form">
					<ContactForm />
				</div>
			</div>
		</section>
	)
}

export default ContactUs