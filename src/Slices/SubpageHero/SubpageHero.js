import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import './SubpageHero.scss'

const SubpageHero = props => {
	return (
		<BackgroundImage
			className="subpage-hero"
			fluid={props.input.primary.subhero_bg_image.fluid}
			id="hero"
			Tag="section"
		>
			<div className="overlay">
				<div className="body container">
					<div className="SUBhero-title" dangerouslySetInnerHTML={{ __html: props.input.primary.subhero_page_title.html }} />
				</div>
			</div>
		</BackgroundImage>
	)
}

export default SubpageHero