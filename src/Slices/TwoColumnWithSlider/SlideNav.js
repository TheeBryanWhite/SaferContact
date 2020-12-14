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

	const clickHandler = slide => {
		props.setAutoSlide(props.autoSlide)
		if (typeof props.activeSlide !== 'undefined') {
			if (slide === 0 && props.activeSlide === 0 ) {
				stopAutoSlide()
				props.setInactiveSlide(3)
			} else {
				stopAutoSlide()
				props.setInactiveSlide(props.activeSlide)
				props.setSlide(slide)
			}
		}
	}

	const stopAutoSlide = intervalHandler(autoSlide, 8000)

	return(
		<div className="slide-nav">
			<ul>
			{
			props.slideData.map((figure, index) => (
				<li
					className={(props.activeSlide === index ? 'nav-pip active' : 'nav-pip')}
					id={`nav-pip-${index}`} 
					key={index}
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