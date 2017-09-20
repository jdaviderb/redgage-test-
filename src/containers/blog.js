import React, {Component} from 'react'
import Layout from '../components/layout'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import Toast from './toast'
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux'
import { goToNewBlog, goToBlogPost } from '../actions/router'
import { changeTitleAppBar } from '../actions/appBar'
import RaisedButton from 'material-ui/RaisedButton';

class Blog extends Component {

	render () {
		const { appBar, posts, goToNewBlog, goToPost } = this.props
		const makePost = (post, index) => (
			<ListItem
				key={index}
				onClick={() => goToPost(post.id)}
			  primaryText={post.title}
			  secondaryText={'666-66-66'}
			  rightIcon={(<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
			  	<FontIcon style={{color: 'rgba(0,0,0,.7)'}} className="material-icons">chat</FontIcon>
			  	{post.comments.length}
			  </div>)}
			/>
		)
		return (
			<Layout title="simple redgage blog" rightElement={<FlatButton onClick={goToNewBlog} label="New post" />}>
				<List>
					<Subheader>Posts</Subheader>
					{posts.posts.map(makePost)}
				</List>
				<Toast />
			</Layout>
			)
	}
}

const mapStateToProps = ({appBar, posts}) => ({
	appBar,
	posts
})

const mapDispatchToProps = (dispatch) => ({
	goToNewBlog: () => dispatch(goToNewBlog()),
	goToPost: (id) => dispatch(goToBlogPost(id))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Blog)