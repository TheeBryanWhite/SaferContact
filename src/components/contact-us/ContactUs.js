import React from 'react'
import ContactForm from './contact-form/ContactForm'

import './ContactUs.scss'
import MailSvg from '../../svg/mail.svg'
import ScheduleSvg from '../../svg/schedule.svg'
import CirclesSvg from '../../svg/circles.svg'

const ContactUs = props => {
	return(
		<section className="contact-us pad-this gradient-bg" id="contact-us">
			<CirclesSvg className="top-right" />
			<div className="container columns">
				<div className="column contact-body">
					<div className="connect">
						<h2><MailSvg /><span dangerouslySetInnerHTML={{ __html: props.cuData.group[0].nodes[0].primary.mail_title.text }} /></h2>
						<div dangerouslySetInnerHTML={{ __html: props.cuData.group[0].nodes[0].primary.mail_body.html }} />
					</div>
					<div className="demo">
						<h2><ScheduleSvg /><span dangerouslySetInnerHTML={{ __html: props.cuData.group[0].nodes[0].primary.demo_title.text }} /></h2>
						<div dangerouslySetInnerHTML={{ __html: props.cuData.group[0].nodes[0].primary.demo_body.html }} />
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