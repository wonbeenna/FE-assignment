import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderIdReq } from '../modules/actions/order'
import './Order.css'
import { useParams } from 'react-router-dom'

function Order() {
  const dispatch = useDispatch()
  const params = useParams()
  const orderIdItem = useSelector(
    (state) => state.orderIdItemReducer.orderIdItem.data,
  )
  useEffect(() => {
    dispatch(orderIdReq(params.id))
  }, [dispatch])

  return (
    <div className="order">
      <div className="order__contents">
        <span>{orderIdItem && orderIdItem.id}</span>
        <span>{orderIdItem && orderIdItem.itemName}</span>
      </div>
    </div>
  )
}

export default Order
