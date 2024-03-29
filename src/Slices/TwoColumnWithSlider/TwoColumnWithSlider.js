import React from 'react'
import { connect } from 'react-redux'
import Images from './images'
import SlideNav from './SlideNav'
import CirclesSvg from '../../svg/circles.svg'
import './TwoColumnWithSlider.scss'

const PlatformSolution = props => {
	return(
		<section className="two-col-slider gradient-bg pad-this" id="solution">
			<CirclesSvg className={`${props.place}-before`} />
			<div className="container columns">
				<div className="column body">
					<div className="hero-title" dangerouslySetInnerHTML={{ __html: props.input.primary.two_col_slider_body.html }} />
				</div>
				
				<div className="column slider">
					<Images
						contentData={props.input.items}
						activeSlide={props.activeSlide} 
						inactiveSlide={props.inactiveSlide} 
					/>
					<SlideNav slideData={props.input.items} />
				</div>
			</div>
			<CirclesSvg className={`${props.place}-after`} />
		</section>
	)
}

const mapStateToProps = state => ({
	activeSlide: state.app.activeSlide,
	inactiveSlide: state.app.inactiveSlide
})

export default connect(mapStateToProps, null)(PlatformSolution)