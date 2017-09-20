const initialState = {
	posts: [],
	currentPost: {}
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SAVE_POST_BLOG':
			const post = {
				...action.payload,
				id: Date.now(),
				date: new Date().toString(),
				comments: [],
			}
			state.posts.push(post)
			return {...state}
		case 'CURRENT_POST':
			const currentPost = state.posts.filter((post) => post.id == action.payload )
			if (currentPost.length > 0) {
				state.currentPost = currentPost[0]
			}
			return {...state}
		case 'ADD_COMMENT':
			let searchPost = state.posts.filter((post) => post.id == action.payload.postId )[0]
			searchPost.comments.push(action.payload.data)
			return {...state}
		default:
			return state
	}
}