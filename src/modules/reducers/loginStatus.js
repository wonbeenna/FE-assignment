import { LOGIN_STATUS, LOGOUT_STATUS } from '../actions/actions'
import { initialState } from './initialState'

const loginStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STATUS:
      return {
        ...state,
        status: {
          token: action.token,
          loginStatus: true,
        },
      }
    case LOGOUT_STATUS:
      return {
        ...state,
        status: {
          token: '',
          loginStatus: false,
        },
      }
    default:
      return state
  }
}

export default loginStatusReducer
