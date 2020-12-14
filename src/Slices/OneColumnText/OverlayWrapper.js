import React from 'react'

const HasOverlay = props => {
	return(
		<div className="overlay">
			{props.children}
		</div>
	)
}

const SectionWrapper = props => {
	if (props.backgroundVideo || props.backgroundImage) {
		return <HasOverlay children={props.children} />
	} else {
		return props.children
	}
}

export default SectionWrapper