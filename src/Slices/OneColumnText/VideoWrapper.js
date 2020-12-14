import React from 'react'

const HasVideo = props => {
	return(
		<video 
			autoPlay
			loop
			muted
			preload="auto"
		>
			<source src={props.srcMp4} type="video/mp4" />
			<source src={props.srcOgv} type="video/ogv" />
		</video>
	)
}

const VideoWrapper = props => {
	if (props.srcMp4 && props.srcOgv) {
		return <HasVideo srcMp4={props.srcMp4} srcOgv={props.srcOgv} />
	} else {
		return false
	}
}

export default VideoWrapper