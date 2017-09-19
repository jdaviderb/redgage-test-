import React, {component} from 'react'
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'
import {redirectTo} from '../actions/router'
const styles = {
	container: {
		display: 'flex',
		height: '100vh',
		width: '100vw',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#00BCD4'
	},

	start: {
		width: '40vw',
		
	}
}
const welcome = ({goToBlog}) => (
	<div style={styles.container}>

		 <RaisedButton
		       label="start redgage test :)"
		       primary={true}
		       style={styles.start}
		       onClick={goToBlog}
		     />
	</div>
)

const mapDispatchToProps = (dispatch) => ({
	goToBlog: () => dispatch(redirectTo('/blog'))
})
export default connect(null, mapDispatchToProps)(welcome)