import React from 'react'
import CirclesSvg from '../../svg/circles.svg'
import './BoxGrid.scss'

const ProductFeatures = props => {
	return (
		<section className="box-grid blue-bg pad-this" id={props.input.primary.box_grid_section_id}>
			<CirclesSvg className={`${props.place}-before`} />
			<div className="container">
				<div className="hero-title" dangerouslySetInnerHTML={{ __html: props.input.primary.grid_title.html }} />
			
				<div className="features">
					{
					props.input.items.map((figure, index) => (
						<div className="feature" key={index}>
							<div className="wrapper">
							<div className="hero-title" dangerouslySetInnerHTML={{ __html: figure.box_body.html }} />
							</div>
						</div>
					))
					}
					<div className="grid-cta" dangerouslySetInnerHTML={{ __html: props.input.primary.grid_cta.html }} />
				</div>
			</div>
			<CirclesSvg className={`${props.place}-after`} />
		</section>
	)
}

export default ProductFeatures