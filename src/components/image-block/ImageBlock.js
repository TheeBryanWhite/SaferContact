import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import './ImageBlock.scss'
import CirclesSvg from '../../svg/circles.svg'

const ImageBlock = props => {
	return(
		<BackgroundImage
			className="image-block"
			fluid={props.ibData.childImageSharp.fluid}
			tag="section"
		>
			<CirclesSvg className="top-left" />
			<div className="overlay">
				<div className="container body">
					<h2>Safercontact Offers A Dynamic Solution That Is Secure, Accurate, Scalable, and Anonymous</h2>
				</div>
			</div>
			<CirclesSvg className="bottom-right" />
		</BackgroundImage>
	)
}

export default ImageBlock