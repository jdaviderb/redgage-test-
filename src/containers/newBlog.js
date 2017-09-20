import React, {Component} from 'react'
import Layout from '../components/layout'
import {connect} from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back'
import IconButton from 'material-ui/IconButton'
import {backRoute} from '../actions/router'
import TextField from 'material-ui/TextField'
import CircularProgress from 'material-ui/CircularProgress';
import { changeTitleAppBar } from '../actions/appBar'
import { updateFormBlog, publishPost, clearFormBlog} from '../actions/formBLog'
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
		this.props.clearForm()

	}

	render () {
		const {appBar, backRoute, formBlog, updateForm, publish} = this.props
		const save = <FlatButton onClick={ () => publish(formBlog.post)} label="Save" />
		const loadingSave = (
			<div style={{height: '100%', display: 'flex', alignItems: 'center'}}>
				<CircularProgress  color="white" size={20}/>
			</div>
		)
		return (

			<Layout
				title={appBar.title}
				leftElement={<IconButton onClick={backRoute}> <NavigationClose /> </IconButton>}
				rightElement={formBlog.loading ? loadingSave : save}
			>
			

			<div style={style.fields}>
				<TextField
			 		hintText="write title of the post"
			 		floatingLabelText="Title"
			 		fullWidth={true}
			 		value={formBlog.post.title}
			 		errorText={formBlog.errors.title}
			 		onChange={(e) => updateForm('title', e.target.value) }
			 	/>

		 		<TextField
		 	 		floatingLabelText="Content"
		 	 		fullWidth={true}
		 	 		multiLine={true}
		 	 		rows={5}
		 	 		value={formBlog.post.content}
		 	 		errorText={formBlog.errors.content}
		 	 		onChange={(e) => updateForm('content', e.target.value) }
		 	 	/>

			</div>

			</Layout>
		)
	}
}

const mapStateToProps = ({appBar, formBlog}) => ({
	appBar,
	formBlog
})

const mapDispatchToProps = (dispatch) => ({
	backRoute: () => dispatch(backRoute()),
	changeTitleAppBar: () => dispatch(changeTitleAppBar('new post')),
	updateForm: (key, data) => dispatch(updateFormBlog(key, data)),
	publish: (data) => dispatch(publishPost(data)),
	clearForm: () => dispatch(clearFormBlog())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewBlog)