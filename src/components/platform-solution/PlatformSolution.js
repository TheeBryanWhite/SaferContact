import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import Images from './images'
import SlideNav from './SlideNav'

import './PlatformSolution.scss'
import CirclesSvg from '../../svg/circles.svg'

const PlatformSolution = props => {
	return(
		<section className="platform-solution gradient-bg pad-this" id="platform-solution">
			<CirclesSvg className="top-left" />
			<div className="container columns">
				<div className="column body">
					<h2>How it Works</h2>
					<p>Safercontact™ utilizes ultra-wideband (UWB) devices and gateways to monitor proximity and duration of closeness. Each device captures real-time proximity data and maintains a contact list of interactions with other devices. When the device comes within range of a gateway, the contact list syncs with the safercontact application. The Safercontact platform allows authorized users to quickly and effectively identify potential exposure and risk. Dedicated Azure environments store the Safercontact™ data. Wether you have 5 employees or 5,000, Safercontact™ will be able to provide a solution.</p>
					<p><small>Get in touch with the safercontact™ team to see how they can help your business get back safely.</small></p>
					<p className="cta"><Link to="/#contact">Contact Sales Team</Link></p>
				</div>
				
				<div className="column slider">
					<Images
						imageData={props.psData}
						activeSlide={props.activeSlide} 
						inactiveSlide={props.inactiveSlide} 
					/>
					<SlideNav slideData={props.psData} />
				</div>
			</div>
			<CirclesSvg className="bottom-right" />
		</section>
	)
}

const mapStateToProps = state => ({
	activeSlide: state.app.activeSlide,
	inactiveSlide: state.app.inactiveSlide
})

export default connect(mapStateToProps, null)(PlatformSolution)