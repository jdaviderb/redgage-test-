import React, {Component} from 'react'
import Layout from '../components/layout'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import Toast from './toast'
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux'
import { goToNewBlog } from '../actions/router'
import { changeTitleAppBar } from '../actions/appBar'

class Blog extends Component {

	componentDidMount () {
		this.props.changeTitleAppBar()
	}


	render () {
		const { appBar, posts, goToNewBlog } = this.props
		const makePost = (post, index) => (
			<ListItem
				key={index}
			  primaryText={post.title}
			  secondaryText={'666-66-66'}
			  rightIcon={(<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
			  	<FontIcon style={{color: 'rgba(0,0,0,.7)'}} className="material-icons">chat</FontIcon>
			  	{post.comments.length}
			  </div>)}
			/>
		)
		return (
			<Layout title={appBar.title} rightElement={<FlatButton onClick={goToNewBlog} label="New post" />}>
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
	changeTitleAppBar: () => dispatch(changeTitleAppBar('simple redgage blog'))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Blog)