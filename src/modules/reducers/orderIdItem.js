import {
  ORDER_ID_LOADING,
  ORDER_ID_SUCCESS,
  ORDER_ID_ERROR,
} from '../actions/actions'
import { initialState } from './initialState'

const orderIdItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_ID_LOADING:
      return {
        ...state,
        orderIdItem: {
          loading: true,
          data: null,
          err: null,
        },
      }
    case ORDER_ID_SUCCESS:
      return {
        ...state,
        orderIdItem: {
          loading: false,
          data: action.orderIdItem,
          err: null,
        },
      }
    case ORDER_ID_ERROR:
      return {
        ...state,
        orderIdItem: {
          loading: true,
          data: null,
          err: action.err,
        },
      }
    default:
      return state
  }
}

export default orderIdItemReducer
