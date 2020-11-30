import React from 'react'
import { connect } from 'react-redux'

import Images from './images'
import SlideNav from './SlideNav'

import './PlatformSolution.scss'
import CirclesSvg from '../../svg/circles.svg'

const PlatformSolution = props => {
	return(
		<section className="solution gradient-bg pad-this" id="solution">
			<CirclesSvg className="top-left" />
			<div className="container columns">
				<div className="column body">
					<div className="hero-title" dangerouslySetInnerHTML={{ __html: props.psData.group[0].nodes[0].primary.two_col_slider_body.html }} />
				</div>
				
				<div className="column slider">
					<Images
						contentData={props.psData}
						activeSlide={props.activeSlide} 
						inactiveSlide={props.inactiveSlide} 
					/>
					<SlideNav slideData={props.psData} />
				</div>
			</div>
			<CirclesSvg className="bottom-right" />
		</section>
	)
}

const mapStateToProps = state => ({
	activeSlide: state.app.activeSlide,
	inactiveSlide: state.app.inactiveSlide
})

export default connect(mapStateToProps, null)(PlatformSolution)