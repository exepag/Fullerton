import axios from 'axios';
import {BASE_API_URL} from '../global/util';
import {AsyncStorage} from 'react-native';


//DATA
export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = () => {
	return {
		type: FETCH_DATA
	}
}





//REGISTER
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
		  //console.log(email,password)

		if (email !=='' && password !=='') {
			const dataPayloads = {
				"email":email,
				"password":password
			}
			  //console.log(dataPayloads)

			const url = `${BASE_API_URL}/Users`
			  //console.log(url)
			return axios.post(url,dataPayloads)
				.then(res => {
				  //console.log(res)
					return res
				})
				.catch(err => {
					console.log(err)
				})
		}
	}





//LOGIN
export const LOGIN_USER = 'LOGIN_USER'
export const loginUser = (dataUser) => {
  //console.log(dataUser)
	return {
		type: LOGIN_USER,
		payload: loginHandler(dataUser)
	}
}

	const loginHandler = (dataUser) => {
		const {email,password} = dataUser
		  //console.log(email,password)

		if (email !=='' && password !=='') {
			const dataPayloads = {
				"email":email,
				"password":password
			}

			const url = `${BASE_API_URL}/Users/login`
			return axios.post(url,dataPayloads)
				.then((response)=>{
					if(response.status === 200) {
					_saveToken(response.data.id)
					return response
					}
				})
				.catch((err)=>{
				console.log(err)
				})
		}

	}

	const _saveToken = async (ini_token_saya) => {
		await AsyncStorage.setItem('token',ini_token_saya)
		return
	}





//LOGOUT
const _getToken = async () => {
	const token_saya = await AsyncStorage.getItem('token')
	return token_saya
}


export const LOGOUT_USER = 'LOGOUT_USER'
export const LogoutHandler = () => {
	return {
		type: LOGOUT_USER,
		payload: logoutUserFromApps()
	}
}


const logoutUserFromApps = async () => {
  //console.log('logout di klik')
const dataToken = await _getToken()
const logout_api = `${BASE_API_URL}/Users/logout?access_token=${dataToken}`
  console.log(logout_api)
	return axios.post(logout_api,{})
		.then(response=>{
			if (response.status == 204) {
				AsyncStorage.removeItem('token')
				//this.props.navigation.navigate('Main')
				return
			}
		})
		.catch(err=>{
			console.log(err)
		})
}





//PRODUCTS
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





//DATA_DETAILS
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





