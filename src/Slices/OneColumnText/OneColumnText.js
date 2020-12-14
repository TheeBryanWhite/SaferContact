import React from 'react'
import SectionWrapper from './SectionWrapper'
import VideoWrapper from './VideoWrapper'
import OverlayWrapper from './OverlayWrapper'
import './OneColumnText.scss'

const OneColumnText = props => {
	return(
		<SectionWrapper 
			blockType={props.input.primary.onecol_block_type}
			backgroundColor={props.input.primary.one_col_textbackground_color} 
			backgroundImage={props.input.primary.one_col_text_background_image.fluid}
			backgroundVideo={props.input.primary.one_col_text_video_mp4.url}
			sectionId={props.input.primary.oncol_section_id}
			place={props.place}
		>
			<VideoWrapper 
				srcMp4={props.input.primary.one_col_text_video_mp4.url} 
				srcOgv={props.input.primary.one_col_text_video_ogv.url} 
			/>
			<OverlayWrapper 
				backgroundVideo={props.input.primary.one_col_text_video_mp4.url}
				backgroundImage={props.input.primary.one_col_text_background_image.fluid}
			>
				<div className="container">
					<div dangerouslySetInnerHTML={{ __html: props.input.primary.onecol_text_body.html }} />
				</div>
			</OverlayWrapper>
		</SectionWrapper>
	)
}

export default OneColumnText