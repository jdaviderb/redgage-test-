const initialState = {
	post: {
		title: 'title',
		content: 'content'
	},
	loading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_FORM_BLOG_POST': 
			state.post[action.payload.key] = action.payload.data
			return {...state}
		case 'TOGGLE_LOADING_BLOG':
			state.loading = !state.loading
			return {...state}
		case 'CLEAR_FORM_BLOG':
			state.post.title = ''
			state.post.content = ''
			return {...state}
		default:
			return state
	}
}