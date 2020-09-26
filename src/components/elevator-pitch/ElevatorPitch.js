import React from 'react'

import './ElevatorPitch.scss'
import CirclesSvg from '../../svg/circles.svg'

const ElevatorPitch = () => {
	return(
		<section className="elevator-pitch pad-this" id="about">
			<div className="container">
				<p><i>The health and well-being of your business and those who work there is paramount. Safercontact offers a dynamic contact tracing solution that is secure, accurate, scalable, and anonymous.</i></p>
			</div>
			<CirclesSvg className="bottom-left" />
		</section>
	)
}

export default ElevatorPitch