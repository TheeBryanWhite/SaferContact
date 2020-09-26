import React from 'react'
import { connect } from 'react-redux'
import { 
	setAutoSlide,
	setInactiveSlide,
	setSlide
} from '../../redux/actions/actions'

import intervalHandler from '../../utils/intervalHandler'

const SlideNav = props => {
	let index = 0

	const autoSlide = () => {
		if (props.autoSlide) {
			props.setSlide(index)
			
			if (index < 2) {
				index += 1
				props.setInactiveSlide(index - 1)
				props.setSlide(index)
			} else {
				index = 0
				props.setInactiveSlide(2)
				props.setSlide(index)
			}
		}
	}

	// On clicking a nav pip...
	const clickHandler = slide => {

		// Disable the autoslide animation...
		props.setAutoSlide(props.autoSlide)

		// If the slider JUST loaded and hasn't updated state for the second slide...
		if (typeof props.activeSlide !== 'undefined') {
			// If we click on the first element...
			if (slide === 0 && props.activeSlide === 0 ) {
				// Disable to slider animation
				// Leave the default activeSlide prop
				// Update the inactiveSlide prop to the last item in the list
				stopAutoSlide()
				props.setInactiveSlide(3)
			} else {
				// Disable the slider animation
				// Set the prop for inactive slide to be the last one clicked on
				// Set the prop for the new active slide
				stopAutoSlide()
				props.setInactiveSlide(props.activeSlide)
				props.setSlide(slide)
			}
		}
	}

	const stopAutoSlide = intervalHandler(autoSlide, 5000)

	return(
		<div className="slide-nav">
			<ul>
			{
			props.slideData.edges.map((figure, index) => (
				<li
					className={(props.activeSlide === index ? 'nav-pip active' : 'nav-pip')}
					id={`nav-pip-${index}`} 
					key={figure.node.id}
				>
					<button disabled={(props.activeSlide === index ? true : false)} onClick={() => {clickHandler(index)}}>
						<span className="screen-reader-text">{`Nav pip ${index}`}</span>
					</button>
				</li>
				))
			}
			</ul>
		</div>
	)
}

const mapStateToProps = state => ({
	activeSlide: state.app.activeSlide,
	autoSlide: state.app.autoSlide,
	inactiveSlide: state.app.inactiveSlide
})

export default connect(
					mapStateToProps, 
					{ 
						setAutoSlide, 
						setInactiveSlide, 
						setSlide 
				})(SlideNav)