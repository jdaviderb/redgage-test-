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
				date: '6666-66-66',
				comments: [],
			}
			state.posts.push(post)
			return {...state}
		case 'CURRENT_POST':
			const currentPost = state.posts.filter((post) => post.id == action.payload )
			state.currentPost = currentPost[0]
			return {...state}
		default:
			return state
	}
}