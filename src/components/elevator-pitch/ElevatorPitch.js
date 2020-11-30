import React from 'react'

import './ElevatorPitch.scss'
import CirclesSvg from '../../svg/circles.svg'

const ElevatorPitch = props => {

	return(
		<section className="elevator-pitch pad-this" id="about">
			<div className="container">
				<div dangerouslySetInnerHTML={{ __html: props.aboutData.group[0].nodes[0].primary.onecol_text_body.html }} />
			</div>
			<CirclesSvg className="bottom-left" />
		</section>
	)
}

export default ElevatorPitch