import React, {Component} from 'react'
import Layout from '../components/layout'
import {connect} from 'react-redux'
import { changeTitleAppBar } from '../actions/appBar'
import FlatButton from 'material-ui/FlatButton'
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back'
import IconButton from 'material-ui/IconButton'
import {backRoute} from '../actions/router'
import TextField from 'material-ui/TextField'

const style = {
	fields: {
		display: 'flex',
		minHeight: '100%',
		maxWidth: '80%',
		margin: '0 auto',
		flexDirection: 'column'
	}
}
class NewBlog extends Component { 


	componentDidMount () {
		this.props.changeTitleAppBar()
	}

	render () {
		const {appBar, backRoute} = this.props
		return (

			<Layout
				title={appBar.title}
				leftElement={<IconButton onClick={backRoute}> <NavigationClose /> </IconButton>}
				rightElement={<FlatButton o label="Save" />}
			>
			

			<div style={style.fields}>
				<TextField
			 		hintText="write title of the post"
			 		floatingLabelText="Title"
			 		fullWidth={true}
			 	/>

			 		<TextField
			 	 		floatingLabelText="Content"
			 	 		fullWidth={true}
			 	 		multiLine={true}
			 	 		rows={5}
			 	 	/>

			</div>

			</Layout>
		)
	}
}

const mapStateToProps = ({appBar}) => ({
	appBar
})

const mapDispatchToProps = (dispatch) => ({
	backRoute: () => dispatch(backRoute()),
	changeTitleAppBar: () => dispatch(changeTitleAppBar('new post'))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewBlog)