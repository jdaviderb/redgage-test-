import { goToBlog } from './router'
import { sendToast } from './toast'


export const updateFormBlog = (key, data) => (dispatch) => (dispatch({
	type: 'UPDATE_FORM_BLOG_POST',
	payload: {key, data}
}))

export const clearFormBlog = () => ({
	type: 'CLEAR_FORM_BLOG'
})

export const toggleLoadingBlog = () => ({
	type: 'TOGGLE_LOADING_BLOG'
})

export const savePost = (data) => ({
	type: 'SAVE_POST_BLOG',
	payload: data
})

export const publishPost = (data) => (dispatch) => {
	dispatch(toggleLoadingBlog())
	setTimeout(() => {
		dispatch(toggleLoadingBlog())
		dispatch(savePost(data))
		dispatch(goToBlog())
		dispatch(clearFormBlog())
		dispatch(sendToast({
			show:true,
			message: 'Successful publication',
		}))
	}, 1000)
}

