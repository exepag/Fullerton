import {combineReducers} from 'redux';
import {PENDING,FULFILLED,REJECTED} from 'redux-promise-middleware';
import {
	FETCH_DATA,
	REGISTER_USER,
	LOGIN_USER,
	LOGOUT_USER,
	FETCH_PRODUCTS,
	FETCH_DATA_DETAILS
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
		  //console.log(action.payload)
			return {
				...state,
				isFetching: false,
				status: action.payload.status === 200 ? ('Success Register') : ('Failed Registration')
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
		  //console.log(action.payload)
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





		case `${LOGOUT_USER}_PENDING`:
			return {
				...state,
				isFetching:true
			}

		case `${LOGOUT_USER}_REJECTED`:
			return {
				...state,
			}

		case `${LOGOUT_USER}_FULFILLED`:
			return {
				...state,
				status: 'Success Log Out!'
			}




	default: return state

	}

}





export const products = (state = {
	items:[],
	isFetching:false
} , action) => {
	switch (action.type) {

	case `${FETCH_PRODUCTS}_PENDING`:
		return {
			...state,
			isFetching:true
		}

	case `${FETCH_PRODUCTS}_FULFILLED`:
	  console.log(action.payload)
		return {
			...state,
			isFetching:false,
			items:action.payload.data
		}

	case `${FETCH_PRODUCTS}_REJECTED`:
		return {
			...state,
			isFetching:false
		}

	default: 
		return state

	}
}





export const products_detail = (state = {
isFetching:false,
id:'',
image:'0',
price:0,
product_id:0,
product_name:''
} , action) => {
	switch (action.type) {

		case `${FETCH_DATA_DETAILS}_PENDING`:
			return {
				...state,
				isFetching:true
			}

		case `${FETCH_DATA_DETAILS}_FULFILLED`:
			return {
				...state,
				isFetching:false,
				id:action.payload.data.id,
				image:action.payload.data.image,
				price:action.payload.data.price,
				product_id:action.payload.data.product_id,
				product_name:action.payload.data.product_name
			}

		case `${FETCH_DATA_DETAILS}_REJECTED`:
			return {
				...state,
				isFetching:false
			}

		default:
			return state

	}
}





const rootReducer = combineReducers ({
	data,
	user,
	products,
	products_detail
})

export default rootReducer





