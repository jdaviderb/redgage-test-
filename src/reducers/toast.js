const initialState = {
	show: false,
	message: '',
	action: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SEND_TOAST':
			return {...action.payload}
		default:
			return state
	}
}