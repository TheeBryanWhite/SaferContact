import React from 'react'
import ContactForm from './contact-form/ContactForm'

import './FormBody.scss'
import MailSvg from '../../svg/mail.svg'
import ScheduleSvg from '../../svg/schedule.svg'
import CirclesSvg from '../../svg/circles.svg'

const ContactUs = props => {
	return(
		<section className="contact-us pad-this gradient-bg" id="contact-us">
			<CirclesSvg className={`${props.place}-before`} />
			<div className="container columns">
				<div className="column contact-body">
					<div className="connect">
						<h2><MailSvg /><span dangerouslySetInnerHTML={{ __html: props.input.primary.mail_title.text }} /></h2>
						<div dangerouslySetInnerHTML={{ __html: props.input.primary.mail_body.html }} />
					</div>
					<div className="demo">
						<h2><ScheduleSvg /><span dangerouslySetInnerHTML={{ __html: props.input.primary.demo_title.text }} /></h2>
						<div dangerouslySetInnerHTML={{ __html: props.input.primary.demo_body.html }} />
					</div>
				</div>
				<div className="column contact-form">
					<ContactForm />
				</div>
			</div>
			<CirclesSvg className={`${props.place}-after`} />
		</section>
	)
}

export default ContactUs