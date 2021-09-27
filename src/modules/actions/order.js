import instance from '../../api'
import {
  ORDER_SUCCESS,
  ORDER_LOADING,
  ORDER_ERROR,
  ORDER_ID_LOADING,
  ORDER_ID_SUCCESS,
  ORDER_ID_ERROR,
} from './actions'

export const orderReq = (id) => async (dispatch) => {
  dispatch({ type: ORDER_LOADING })
  await instance
    .get('/order', {
      params: {
        page: id,
      },
    })
    .then((res) => {
      const { data } = res
      dispatch({ type: ORDER_SUCCESS, orderItem: data })
    })
    .catch((err) => {
      dispatch({ type: ORDER_ERROR, err })
    })
}

export const orderIdReq = (id) => async (dispatch) => {
  dispatch({ type: ORDER_ID_LOADING })
  await instance
    .get(`/order/${id}`)
    .then((res) => {
      const { data } = res
      dispatch({ type: ORDER_ID_SUCCESS, orderIdItem: data })
    })
    .catch((err) => {
      dispatch({ type: ORDER_ID_ERROR, err })
    })
}
