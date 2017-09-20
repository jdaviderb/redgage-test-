export const currentPost = (payload) => ({
	type: 'CURRENT_POST',
	payload
})

export const addComment = (postId, data) => ({
	type: 'ADD_COMMENT',
	payload: {
		postId,
		data
	}
})