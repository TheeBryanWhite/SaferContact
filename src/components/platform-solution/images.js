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
			props.imageData.edges.map((figure, index) => (
				<div 
					className={classBuilder(index)}
					id={`slide-${index}`}
					key={figure.node.id}>
					<h3>{props.contentData[index].node.title}</h3>
					<Image fluid={figure.node.childImageSharp.fluid} alt="Alt text for the image" />
					<div className="slide-body">
						<p>{props.contentData[index].node.body}</p>
					</div>
				</div>
			))
		}
		</div>
	)
}

export default Images