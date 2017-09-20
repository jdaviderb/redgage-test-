import React, {Component} from 'react'
import Layout from '../components/layout'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import FontIcon from 'material-ui/FontIcon'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import { currentPost, addComment } from '../actions/blog'
import { backRoute } from '../actions/router'
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back'
import IconButton from 'material-ui/IconButton'
const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
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

	state = {
		comment: {
			username: '',
			content: ''
		},
		loading: false
	}

	componentDidMount () {
		const params = this.props.match.params
		this.props.currentPost(params.id)
	}

	changeComment(key, value) {
		const {comment} = this.state
		comment[key] = value
		this.setState({comment})
	}

	addComment () {
		const {  addComment, posts } = this.props
		addComment(posts.currentPost.id, this.state.comment)
		this.setState({comment: {username: '', content: ''}})
	}



	render () {
		const {posts, backRoute} = this.props
		const makeComments = ({username, content}, index) => (
			<Paper style={styles.comments} key={index}>
				<h3>{content}</h3>
				<small style={{float: 'right'}}> By {username} </small>
			</Paper>
		)
		return (
			<Layout 
				title="simple redgage blog"
				leftElement={<IconButton onClick={backRoute}> <NavigationClose /> </IconButton>}
			>
				<div style={styles.container}> 

				
				<Paper style={styles.content}>
					<h1> {posts.currentPost.title} </h1>
					<p> 
						{posts.currentPost.content}
					</p>
					<small style={{float: 'right'}}>{posts.currentPost.date} </small>
				</Paper>
				{(posts.currentPost.comments || []).map(makeComments) }
				
				<Paper style={styles.comments}>
					<div style={styles.fields}>

					<TextField
					 	hintText="username"
					 	fullWidth={true}
					 	value={this.state.comment.username}
					 	onChange={( (e) => this.changeComment('username', e.target.value)  )}
					 />

					 <TextField
					 	hintText="comment"
					 	multiLine={true}
					 	fullWidth={true}
					 	value={this.state.comment.content}
					 	onChange={( (e) => this.changeComment('content', e.target.value)  )}
					 />
					 <RaisedButton onClick={this.addComment.bind(this)} label="Ok" primary={true} />
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

const mapActionsToProps = (dispatch) => ({
	addComment: (postId, data) => dispatch(addComment(postId, data)),
	currentPost: (id) => dispatch(currentPost(id)),
	backRoute: () => dispatch(backRoute())
})

export default connect(mapStateToProps, mapActionsToProps)(ShowBlog)