import axios from 'axios';
import {BASE_API_URL} from '../global/util';
import {AsyncStorage} from 'react-native';





export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = () => {
	return {
		type: FETCH_DATA
	}
}





export const REGISTER_USER = 'REGISTER_USER'
export const registerUser = (dataUser) => {
console.log(dataUser)
	return {
		type: REGISTER_USER,
		payload: registerHandler(dataUser)
	}
}

	const registerHandler = (dataUser) => {
		const {email,password} = dataUser
		console.log(email,password)

		if (
			//dataUser.
			email !=='' && 
			//dataUser.
			password !=='') {
			const dataPayloads = { "email":email , "password":password }

			const url = `${BASE_API_URL}/Users`
			//console.log(url)
			return axios.post(url,dataPayloads)
				.then(res => {
				console.log(res)
					return res
				})
				.catch(err => {
					console.log(err)
				})
		}
	}





export const LOGIN_USER = 'LOGIN_USER'
export const loginUser = (dataUser) => {
console.log(dataUser)
	return {
		type: LOGIN_USER,
		payload: loginHandler(dataUser)
	}
}

	const loginHandler = (dataUser) => {
		const {email,password} = dataUser
		console.log(email,password)

		if (email !=='' && password !=='') {
			const dataPayloads = {"email":email, "password":password}

			const url = `${BASE_API_URL}/Users/login`
			return axios.post(url,dataPayloads)
				.then(response=>{
					if(response.status === 200) {
					_saveToken(response.data.id)
					return response
					}
				})
				.catch(err=>{
				console.log(err)
				})
		}

	}

	const _saveToken = async (ini_token_saya) => {
		await AsyncStorage.setItem('token',ini_token_saya)
		return
	}





export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const fetchProducts = () => {
	return {
		type: FETCH_PRODUCTS,
		payload: getProducts()
	}
}

	const getProducts = () => {
		const url = `${BASE_API_URL}/shoppinglists`
		return axios.get(url)
			.then(res => {
				return res
			})
			.catch(err => {
				console.log(err)
			})
	}





export const FETCH_DATA_DETAILS = 'FETCH_DATA_DETAILS'
export const fetchDataDetails = (id) => {
	return {
		type: FETCH_DATA_DETAILS,
		payload: getDataDetails(id)
	}
}

const getDataDetails = async (id) => {
	const url_api = `${BASE_API_URL}/shoppinglists/${id}`
	return axios.get(url_api)
		.then(res => {
		  console.log(res)
			return res
		})
		.catch(err => {
		  console.log(err)
		})
}



