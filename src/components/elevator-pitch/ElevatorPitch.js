import React from 'react'

import './ElevatorPitch.scss'
import CirclesSvg from '../../svg/circles.svg'

const ElevatorPitch = () => {
	return(
		<section className="elevator-pitch pad-this" id="about">
			<div className="container">
				<h2><i>During uncertain times, how do you ensure employee safety while effectively conducting business?</i></h2>
				<p>The health and well-being of your business and those who work there is paramount. Safercontact offers a dynamic contact tracing solution that is secure, accurate, scalable, and anonymous.</p>
			</div>
			<CirclesSvg className="bottom-left" />
		</section>
	)
}

export default ElevatorPitch