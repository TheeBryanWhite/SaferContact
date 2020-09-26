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
					<Image fluid={props.atData.childImageSharp.fluid} />
				</div>
				<div className="column">
					<h2>Anonymous Contact Tracing In The Workplace</h2>
					<p>Safercontact uses proximity-sensing technology that monitors social distance without identity or location information. This way, personal privacy is protected, so employees feel safe, not tracked.</p>
					<p className="cta"><a href="/#platform-solution" target="_blank" rel="noreferrer">Get Product Info</a></p>
				</div>
			</div>
			<CirclesSvg className="bottom-right" />
		</section>
	)
}

export default AnonymousTracing