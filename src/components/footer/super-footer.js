import React from 'react'
import { Link } from 'gatsby'
import LogoSvg from '../../svg/logo.svg'

const SuperFooter = () => {
	return(
		<div className="super-footer">
			<div className="container">
				<h1 className="logo"><Link to="/#home"><LogoSvg /><span className="screen-reader-text">safercontact</span></Link></h1>
				<p>Dynamic Contact Tracing Solutions</p>
			</div>
		</div>
	)
}

export default SuperFooter