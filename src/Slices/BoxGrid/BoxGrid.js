import React from 'react'

import './BoxGrid.scss'

const ProductFeatures = props => {
	return (
		<section className="box-grid blue-bg pad-this" id="features">
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
		</section>
	)
}

export default ProductFeatures