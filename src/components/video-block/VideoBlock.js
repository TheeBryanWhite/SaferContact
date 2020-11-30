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
			fluid={props.vbImg.childImageSharp.fluid}
			Tag="section"
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
					<div dangerouslySetInnerHTML={{ __html: props.vbData.group[0].nodes[1].primary.onecol_text_body.html }} />
				</div>
			</div>
			<CirclesSvg className="bottom-left" />
		</BackgroundImage>
	)
}

export default VideoBlock