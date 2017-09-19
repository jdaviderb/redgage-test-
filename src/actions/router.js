export const redirectTo = (redirect) => ({
	type: 'REDIRECT_TO',
	payload: {redirect}
})

export const backRoute = () => ({
	type: 'BACK_ROUTE'
})


export const goToBlog = () => dispatch => dispatch(redirectTo('/blog'))

export const goToNewBlog = () => (dispatch) => dispatch(redirectTo('/blog/new'))