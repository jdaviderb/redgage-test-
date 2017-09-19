const initialState = {
	posts: []
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
		default:
			return state
	}
}