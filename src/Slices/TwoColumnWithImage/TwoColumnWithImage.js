import React from 'react'
import Image from 'gatsby-image'
import CirclesSvg from '../../svg/circles.svg'
import './TwoColumnWithImage.scss'

const AnonymousTracing = props => {
	return(
		<section className="two-col-image gradient-bg pad-this"  id="anonymous-tracing">
			<CirclesSvg className={`${props.place}-before`} />
			<div className="container columns">
				<div className="column">
					<Image fluid={props.input.primary.two_col_image.fluid} />
				</div>
				<div className="column">
					<div className="hero-title" dangerouslySetInnerHTML={{ __html: props.input.primary.two_col_body.html }} />
				</div>
			</div>
			<CirclesSvg className={`${props.place}-after`} />
		</section>
	)
}

export default AnonymousTracing