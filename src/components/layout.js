import React from 'react'
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import IconButton from 'material-ui/IconButton'
const styles = {
	container: {
		minHeight: '100vh',
		width: '100vw',
		display: 'flex',
		flexDirection: 'column'
	},
	content: {
		flex: 1,
		flexDirection: 'column',
	}
}
export default ({title, children, rightElement, leftElement}) => (
	<div style={styles.container}>
		<AppBar
		    title={title}
		    showMenuIconButton={leftElement != undefined}
		    iconElementLeft={leftElement}
		    iconElementRight={rightElement}
		  />

		  <div style={styles.content}>
		  	{children}
		  </div>
	</div>
)
