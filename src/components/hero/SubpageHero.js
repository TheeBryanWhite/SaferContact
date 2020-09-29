import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import './Hero.scss'

const Hero = props => {

	return (
		<BackgroundImage
			className="subpage-hero"
			fluid={props.heroData.childImageSharp.fluid}
			id="hero"
			Tag="section"
		>
			<div className="overlay">
				<div className="body container">
					<h2>Legal, Privacy Policy, &amp; Terms &amp; Conditions</h2>
				</div>
			</div>
		</BackgroundImage>
	)
}

export default Hero