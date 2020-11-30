import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import './ImageBlock.scss'
import CirclesSvg from '../../svg/circles.svg'

const ImageBlock = props => {
	return(
		<BackgroundImage
			className="image-block"
			fluid={props.ibImg.childImageSharp.fluid}
			Tag="section"
		>
			<CirclesSvg className="top-left" />
			<div className="overlay">
				<div className="container body">
					<div dangerouslySetInnerHTML={{ __html: props.ibData.group[0].nodes[2].primary.onecol_text_body.html }} />
				</div>
			</div>
			<CirclesSvg className="bottom-right" />
		</BackgroundImage>
	)
}

export default ImageBlock