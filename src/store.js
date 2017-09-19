import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import router from './reducers/router'
import appBar from './reducers/appBar'
import posts from './reducers/posts'
import toast from './reducers/toast'
import formBlog from './reducers/formBlog'
export default createStore(combineReducers({
	router,
	appBar,
	posts,
	toast,
	formBlog
}), applyMiddleware(thunk))