import React from 'react'
import Image from 'gatsby-image'

const Images = props => {
	const classBuilder = index => {
		let classArr = ['slide']

		if (props.activeSlide === index) {
			classArr.push('active')
		}

		if (typeof props.inactiveSlide !== 'undefined' && props.inactiveSlide === index) {
			classArr.push('inactive')
		}

		const classes = classArr.join(' ')

		return classes
	}

	return(
		<div className="slides">
		{
			props.contentData.group[0].nodes[0].items.map((figure, index) => (
				<div 
					className={classBuilder(index)}
					id={`slide-${index}`}
					key={index}>
					<div dangerouslySetInnerHTML={{ __html: figure.slide_title.html }} />
					<Image fluid={figure.slide_image.fluid} alt="Alt text for the image" />
					<div className="slide-body">
						<div dangerouslySetInnerHTML={{ __html: figure.slide_body.html }} />
					</div>
				</div>
			))
		}
		</div>
	)
}

export default Images