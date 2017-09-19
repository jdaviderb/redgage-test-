const initialState = {
	title: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_TITLE_APP_BAR':
			state.title = action.payload.title
			return {...state}
		default:
			return state
	}
}