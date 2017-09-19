import history from '../router/history'
const initialState = {
	current: '/'
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'REDIRECT_TO':
			state.current = action.payload.redirect
			history.push(state.current)
			return {...state}
		case 'BACK_ROUTE':
			history.goBack()

		default:
			return state

	}
}