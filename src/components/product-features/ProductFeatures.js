import React from 'react'

import './ProductFeatures.scss'
import CirclesSvg from '../../svg/circles.svg'

const ProductFeatures = props => {
	return (
		<section className="product-features blue-bg pad-this" id="features">
			<CirclesSvg className="top-right" />
			<div className="container">
				<div className="hero-title" dangerouslySetInnerHTML={{ __html: props.pfData.group[0].nodes[0].primary.grid_title.html }} />
			
				<div className="features">
					{
					props.pfData.group[0].nodes[0].items.map((figure, index) => (
						<div className="feature" key={index}>
							<div className="wrapper">
							<div className="hero-title" dangerouslySetInnerHTML={{ __html: figure.box_body.html }} />
							</div>
						</div>
					))
					}
					<div className="grid-cta" dangerouslySetInnerHTML={{ __html: props.pfData.group[0].nodes[0].primary.grid_cta.html }} />
				</div>
			</div>
			<CirclesSvg className="bottom-left" />
		</section>
	)
}

export default ProductFeatures