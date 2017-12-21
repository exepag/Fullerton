import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import {
  REGISTER_USER,
  LOGIN_USER
} from '../action/index'


export const User = (state = {
  isFetching: false,
  status: '',
  token: ''
}, action) => {
  switch (action.type){
    case `${REGISTER_USER}_PENDING`:
      return {
        ...state,
        isFetching: true,
      }

    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        status: action.payload.status === 200 ? ('Success Register') : ('Register Failed')
      }

    case `${REGISTER_USER}_REJECTED`:
      return {
        ...state,
        isFetching: false
      }

    case `${LOGIN_USER}_PENDING`:
      return {
        ...state,
        isFetching: true
      }

    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        status: 'Login Success',
        token: action.payload.data.id
      }

    case `${LOGIN_USER}_REJECTED`:
      return {
        ...state,
        isFetching
      }


    default:
      return state
  }
}

