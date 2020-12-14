import React from 'react'
import BackgroundImage from 'gatsby-background-image'

const HasBackgroundImage = props => {
	return(
		<BackgroundImage
			backgroundColor={props.backgroundColor}
			className="one-column-text image-block"
			fluid={props.backgroundImage}
			Tag="section"
		>
			{props.children}
		</BackgroundImage>
	)
}

const HasBackgroundColor = props => {
	return(
		<section 
			className="one-column-text color-block" 
			id={props.sectionId} 
			style={`background-color: ${props.backgroundColor}`}
		>
			{props.children}
		</section>
	)
}

const HasBackgroundVideo = props => {
	return(
		<section 
			className="one-column-text video-block" 
			id={props.sectionId} 
			style={`background-color: ${props.backgroundColor}`}
		>
			{props.children}
		</section>
	)
}

const DefaultWrapper = props => {
	return(
		<section 
			className="one-column-text" 
			id={props.sectionId}
		>
			{props.children}
		</section>
	)
}

const SectionWrapper = props => {
		switch(props.blockType) {
			case 'Color':
				return <HasBackgroundColor backgroundColor={props.backgroundColor} children={props.children} sectionId={props.sectionId} />

			case 'Image':
				return <HasBackgroundImage backgroundColor={props.backgroundColor} backgroundImage={props.backgroundImage} children={props.children} sectionId={props.sectionId} />

			case 'Video':
				return <HasBackgroundVideo backgroundColor={props.backgroundColor} backgroundVideo={props.backgroundVIdeo} children={props.children} sectionId={props.sectionId} />
		
			default:
				return <DefaultWrapper children={props.children} sectionId={props.sectionId} />
		}
}

export default SectionWrapper