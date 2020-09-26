import React from 'react'

import './ElevatorPitch.scss'
import CirclesSvg from '../../svg/circles.svg'

const ElevatorPitch = () => {
	return(
		<section className="elevator-pitch pad-this">
			<button id="about" className="shift-this">The About Section</button>
			<div className="container">
				<p>The health and well-being of your business and those who work there is paramount. Safercontact™ offers a dynamic contact tracing solution that is secure, accurate, scalable, and most of all anonymous.</p>
				<p><em>Workplace Contact Tracing, Not Personal Tracking</em></p>
			</div>
			<CirclesSvg className="bottom-left" />
		</section>
	)
}

export default ElevatorPitch