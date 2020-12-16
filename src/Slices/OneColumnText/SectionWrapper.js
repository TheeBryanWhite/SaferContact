import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import CirclesSvg from '../../svg/circles.svg'

const HasBackgroundImage = props => {
	return(
		<BackgroundImage
			backgroundColor={props.backgroundColor}
			className="one-column-text image-block"
			fluid={props.backgroundImage}
			Tag="section"
		>
			<CirclesSvg className={`${props.place}-before`} />
			{props.children}
			<CirclesSvg className={`${props.place}-after`} />
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
			<CirclesSvg className={`${props.place}-before`} />
			{props.children}
			<CirclesSvg className={`${props.place}-after`} />
		</section>
	)
}

const HasBackgroundVideo = props => {
	return(
		<BackgroundImage 
			backgroundColor={props.backgroundColor}
			className="one-column-text video-block"
			fluid={props.backgroundImage}
			Tag="section"
		>
			<CirclesSvg className={`${props.place}-before`} />
			{props.children}
			<CirclesSvg className={`${props.place}-after`} />
		</BackgroundImage>
	)
}

const DefaultWrapper = props => {
	return(
		<section 
			className="one-column-text" 
			id={props.sectionId}
		>
			<CirclesSvg className={`${props.place}-before`} />
			{props.children}
			<CirclesSvg className={`${props.place}-after`} />
		</section>
	)
}

const SectionWrapper = props => {
		switch(props.blockType) {
			case 'Color':
				return <HasBackgroundColor backgroundColor={props.backgroundColor} children={props.children} place={props.place} sectionId={props.sectionId} />

			case 'Image':
				return <HasBackgroundImage backgroundColor={props.backgroundColor} backgroundImage={props.backgroundImage} children={props.children} place={props.place} sectionId={props.sectionId} />

			case 'Video':
				return <HasBackgroundVideo backgroundColor={props.backgroundColor} backgroundImage={props.backgroundImage} backgroundVideo={props.backgroundVIdeo} children={props.children} place={props.place} sectionId={props.sectionId} />
		
			default:
				return <DefaultWrapper children={props.children} place={props.place} sectionId={props.sectionId} />
		}
}

export default SectionWrapper