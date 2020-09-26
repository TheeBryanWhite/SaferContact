import React from 'react'
import { Link } from 'gatsby'

import './ProductFeatures.scss'
import CirclesSvg from '../../svg/circles.svg'

const ProductFeatures = () => {
	return (
		<section className="product-features blue-bg pad-this">
			<button id="product-features" className="shift-this">The Product Features Section</button>
			<CirclesSvg className="top-right" />
			<div className="container">
				<h2>Platform Features</h2>
			
				<div className="features">
					<div className="feature">
						<div className="wrapper">
							<h3>Anonymous Tracing</h3>
							<p>Safercontact™ uses anonymous tag-to-tag communication which preserves employees’ privacy and protects their personal security needs.</p>
						</div>
					</div>
					<div className="feature">
						<div className="wrapper">
							<h3>Secure Identity Protection</h3>
							<p>Each employees’ tag contains an anonymized I.D. that records social distance and duration of encounter to other tags. Location of tag is traced not tracked.</p>
						</div>
					</div>
					<div className="feature">
						<div className="wrapper">
							<h3>Dedicated Devices</h3>
							<p>Personal security and privacy is of the utmost importance. The use of dedicated UWB tags and devices offer a more secure and accurate solution over smartphone applications.</p>
						</div>
					</div>
					<div className="feature">
						<div className="wrapper">
							<h3>Visual Dashboard</h3>
							<p>Safercontact™ utilizes a visual network effect graphically maping all tag to tag contact tracing events.  This allows for quick and accurate risk analysis by aurthorized personel.</p>
						</div>
					</div>
					<div className="feature">
						<div className="wrapper">
							<h3>Platform Solution</h3>
							<p>Safercontact™ is a platform solution, not a point solution.  While protecting your work force today, Safercontact can be used beyond COVID-19 adding value and protection to your business.</p>
						</div>
					</div>
					<div className="feature">
						<div className="wrapper">
							<h3>Hosted or Dedicated</h3>
							<p>Safercontact™ can be deployed either as a Cloud solution fully managed by Skylytics, or if needed deployed by an organization in their own cloud environment or on-premises, offering full flexibility and choice.</p>
						</div>
					</div>
					<div className="feature">
						<div className="wrapper">
							<h3>Subscription Based</h3>
							<p>With Safercontact™ you only pay for the number of employees or devices that you need on an annual or monthly subscription basis.</p>
						</div>
					</div>
					<p className="cta"><Link to="/">Learn More</Link></p>
				</div>
			</div>
			<CirclesSvg className="bottom-left" />
		</section>
	)
}

export default ProductFeatures