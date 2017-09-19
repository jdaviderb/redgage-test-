export const redirectTo = (redirect) => ({
	type: 'REDIRECT_TO',
	payload: {redirect}
})

export const backRoute = () => ({
	type: 'BACK_ROUTE'
})


export const goToNewBlog = () => (dispatch) => {
	dispatch(redirectTo('/blog/new'))
}