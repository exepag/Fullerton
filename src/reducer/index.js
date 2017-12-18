import {combineReducers} from 'redux';
import {PENDING,FULFILLED,REJECTED} from 'redux-promise-middleware';
import {
	FETCH_DATA,
	REGISTER_USER,
	LOGIN_USER,

} from '../action/index';



export const data = (state={items:'',} , action) => {
	switch(action.type) {
		case `${FETCH_DATA}`:
			return {
				...state,
				items:'This is UI using REDUX'
			}

		default:
			return state
	}
}



export const user = (state={
isFetching: false,
status:'',
token:''
} , action) => {

	switch(action.type) {

		case `${REGISTER_USER}_PENDING`:
			return {
				...state,
				isFetching: true,
			}

		case`${REGISTER_USER}_FULFILLED`:
		console.log(action.payload)
			return {
				...state,
				isFetching: false,
				status: action.payloads.status == 200 ? ('Success Register') : ('Failed Registration')
			}

		case `${REGISTER_USER}_REJECTED`:
			return {
				...state,
				isFetching: false,
			}



		case `${LOGIN_USER}_PENDING`:
			return {
				...state,
				isFetching:true,
			}

		case `${LOGIN_USER}_FULFILLED`:
		console.log(action.payload)
			return {
				...state,
				isFetching:false,
				status: 'Login success!',
				token: action.payload.data.id
			}

		case `${LOGIN_USER}_REJECTED`:
			return {
				...state,
				isFetching:false,
			}


	default: return state

	}

}



const rootReducer = combineReducers ({
	data,
	user,

})

export default rootReducer


 
