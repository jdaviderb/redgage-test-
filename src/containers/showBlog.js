import React, {Component} from 'react'
import Layout from '../components/layout'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import FontIcon from 'material-ui/FontIcon'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import { currentPost } from '../actions/blog'
const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	content: {
		width: '80%',
		padding: 20,
		marginTop: 10
	},
	comments: {
		width: '40%',
		marginTop: 10,
		padding: 3
	},
	fields: {
		display: 'flex',
		flexDirection: 'column',
	}

}
class ShowBlog extends Component {

	componentDidMount () {
		const params = this.props.match.params
		this.props.dispatch(currentPost(params.id))
	}


	render () {
		const {posts} = this.props
		return (
			<Layout title="simple redgage blog">
				<div style={styles.container}> 

				
				<Paper style={styles.content}>
					<h1> {posts.currentPost.title} </h1>
					<p> 
						{posts.currentPost.content}
					</p>		
				</Paper>
				<Paper style={styles.comments}>
					<h3>hello world</h3>
					<small style={{float: 'right'}}> By jdaviderb</small>
				</Paper>
				
				<Paper style={styles.comments}>
					<div style={styles.fields}>

					<TextField
					 	hintText="username"
					 	fullWidth={true}
					 />

					 <TextField
					 	hintText="comment"
					 	multiLine={true}
					 	fullWidth={true}
					 />
					 <RaisedButton label="Ok" primary={true} />
					</div>
				</Paper>
			 </div>
			</Layout>
		)
	}
}

const mapStateToProps = ({posts}) => ({
	posts
})

export default connect(mapStateToProps)(ShowBlog)