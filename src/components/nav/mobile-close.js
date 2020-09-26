import React from 'react'
import { connect } from 'react-redux'
import { setMenu } from '../../redux/actions/actions'

import './mobile-close.scss'

const MobileClose = props => {

	const clickHandler = () => {
		props.setMenu(props.menuState)
		return false
	}

	return (
		<div className="mobile-close">
			<button onClick={() => {clickHandler()}}><span className="screen-reader-text">Close Menu</span></button>
		</div>
	)
}

const mapStateToProps = state => ({
    menuState: state.app.menuState
})

export default connect(mapStateToProps, { setMenu })(MobileClose)