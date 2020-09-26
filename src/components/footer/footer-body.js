import React from 'react'
import { Link } from 'gatsby'

import LinkedInSvg from '../../svg/linkedin.svg'
import TwitterSvg from '../../svg/twitter.svg'

import "./footer.scss"

const FooterBody = props => {
	return(
	<div className="footer-body">
        <div className="contact">
        	<div className="columns container">
				<div className="column">
					<ul className="emails">
					{
					props.contactData.map((contact, index) => (
						<li key={index}><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
					))
					}
					</ul>
					<ul className="social">
						<li>
							<a href="http://linkedin.com" target="_blank" rel="noreferrer">
								<LinkedInSvg />
								<span className="screen-reader-text">Follow safercontact on LinkedIn</span>
							</a>
						</li>
						<li>
							<a href="http://twitter.com" target="_blank" rel="noreferrer">
								<TwitterSvg />
								<span className="screen-reader-text">Follow safercontact on Twitter</span>
							</a>
						</li>
					</ul>
			  	</div>
				<div className="column">
					<div className="menu">
						<h2>Menu</h2>
						<ul>
						{
							props.navData.map((navItem, index) => (
							<li 
								className={navItem.class}
								key={index}
							>
								<Link to={navItem.link}>
									{navItem.name}
								</Link>
							</li>
							))
						}
						</ul>
					</div>
					<div className="address">
						<h2>Connect</h2>
						<p>
							{props.addressData.address1}<br />
							{props.addressData.address2}<br />
							{props.addressData.city} {props.addressData.state}, {props.addressData.zip}<br />
							{props.addressData.phone}
						</p>
					</div>
				</div>
          	</div>
        </div>
    </div>
	)
}

export default FooterBody