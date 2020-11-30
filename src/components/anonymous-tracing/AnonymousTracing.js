import React from 'react'
import Image from 'gatsby-image'

import './AnonymousTracing.scss'
import CirclesSvg from '../../svg/circles.svg'

const AnonymousTracing = props => {
	return(
		<section className="anonymous-tracing gradient-bg pad-this"  id="anonymous-tracing">
			<CirclesSvg className="top-left" />
			<div className="container columns">
				<div className="column">
					<Image fluid={props.atData.group[0].nodes[0].primary.two_col_image.fluid} />
				</div>
				<div className="column">
					<div className="hero-title" dangerouslySetInnerHTML={{ __html: props.atData.group[0].nodes[0].primary.two_col_body.html }} />
				</div>
			</div>
			<CirclesSvg className="bottom-right" />
		</section>
	)
}

export default AnonymousTracing