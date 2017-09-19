import React from 'react'
import {connect} from 'react-redux'
import Snackbar from 'material-ui/Snackbar';

const Toast = ({toast}) => (
	<Snackbar
	  open={toast.show}
	  message={toast.message}
	  action={toast.action}
	 />
)

const mapStateToProps = ({toast}) => ({
	toast
})

export default connect(mapStateToProps)(Toast)