import React from 'react'

const theDate = new Date()
const theYear = theDate.getFullYear();

const SubFooter = () => {
	return(
		<div className="sub-footer">
			<div className="container columns">
			<div className="copyright column">
				<p>&copy; {theYear} Skylytics Data, LLC | All rights reserved</p>
			</div>
			<div className="legal column">
				<p>Legal aspects | Privacy Policy | Terms &amp; Conditions</p>
			</div>
			</div>
		</div>
	)
}

export default SubFooter