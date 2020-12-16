import React from 'react'
import SectionWrapper from './SectionWrapper'
import VideoWrapper from './VideoWrapper'
import OverlayWrapper from './OverlayWrapper'
import './OneColumnText.scss'

const OneColumnText = props => {

	const bgColor = () => {
		if (props.input.primary.one_col_textbackground_color !== null && typeof props.input.primary.one_col_textbackground_color !== "undefined") {
			return props.input.primary.one_col_textbackground_color
		} else {
			return ''
		}
	}

	const bgImage = () => {
		if (props.input.primary.one_col_text_background_image !== null && typeof props.input.primary.one_col_text_background_image !== "undefined") {
			return props.input.primary.one_col_text_background_image.fluid
		} else {
			return ''
		}
	}

	const bgVideoMp4 = () => {
		if (props.input.primary.one_col_text_video_mp4.url !== null && typeof props.input.primary.one_col_text_video_mp4.url !== "undefined") {
			return props.input.primary.one_col_text_video_mp4.url
		} else {
			return ''
		}
	}

	const bgVideoOgv = () => {
		if (props.input.primary.one_col_text_video_ogv.url !== null && typeof props.input.primary.one_col_text_video_ogv.url !== "undefined") {
			return props.input.primary.one_col_text_video_ogv.url
		} else {
			return ''
		}
	}

	return(
		<SectionWrapper 
			blockType={props.input.primary.onecol_block_type}
			backgroundColor={bgColor()} 
			backgroundImage={bgImage()}
			backgroundVideo={bgVideoMp4()}
			sectionId={props.input.primary.oncol_section_id}
			place={props.place}
		>
			<VideoWrapper 
				srcMp4={bgVideoMp4()} 
				srcOgv={bgVideoOgv()} 
			/>
			<OverlayWrapper 
				backgroundVideo={bgVideoMp4()}
				backgroundImage={bgImage()}
			>
				<div className="container">
					<div dangerouslySetInnerHTML={{ __html: props.input.primary.onecol_text_body.html }} />
				</div>
			</OverlayWrapper>
		</SectionWrapper>
	)
}

export default OneColumnText