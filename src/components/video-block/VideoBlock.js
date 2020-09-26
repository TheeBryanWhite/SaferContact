import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import './VideoBlock.scss'
import CirclesSvg from '../../svg/circles.svg'
import VideoBlockMp4 from './video/video-block.mp4'
import VideoBlockOgv from './video/video-block.ogv'

const VideoBlock = props => {
	return(
		<BackgroundImage
			className="video-block"
			fluid={props.vbData.childImageSharp.fluid}
			id="video-block"
			tag="section"
		>
			<CirclesSvg className="top-right" />
			<video 
				autoPlay
				loop
				muted
				preload="auto"
			>
				<source src={VideoBlockMp4} type="video/mp4" />
				<source src={VideoBlockOgv} type="video/ogv" />
			</video>
			<div className="overlay">
				<div className="body container">
					<h2>Safercontact™ Protects The Health And Well-Being of Your Employees</h2>
				</div>
			</div>
			<CirclesSvg className="bottom-left" />
		</BackgroundImage>
	)
}

export default VideoBlock