import React from 'react'
import {connect} from 'react-redux'
import Snackbar from 'material-ui/Snackbar';
import { sendToast } from '../actions/toast'
const Toast = ({toast, dispatch}) => (
	<Snackbar
	  open={toast.show}
	  message={toast.message}
	  action={toast.action}
	  onRequestClose={(() => dispatch(sendToast({show: false, message: ''})))}
	 />
)

const mapStateToProps = ({toast}) => ({
	toast
})


export default connect(mapStateToProps)(Toast)