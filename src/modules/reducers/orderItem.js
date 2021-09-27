import { ORDER_LOADING, ORDER_SUCCESS, ORDER_ERROR } from '../actions/actions'
import { initialState } from './initialState'

const orderItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_LOADING:
      return {
        ...state,
        orderItem: {
          loading: true,
          data: null,
          err: null,
        },
      }
    case ORDER_SUCCESS:
      return {
        ...state,
        orderItem: {
          loading: false,
          data: action.orderItem,
          err: null,
        },
      }
    case ORDER_ERROR:
      return {
        ...state,
        orderItem: {
          loading: true,
          data: null,
          err: action.err,
        },
      }
    default:
      return state
  }
}

export default orderItemReducer
