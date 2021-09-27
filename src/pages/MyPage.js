import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderItem from '../components/OrderItem/OrderItem'
import Pagination from '../components/Pagination/Pagination'
import { orderReq } from '../modules/actions/order'
import './MyPage.css'

function MyPage() {
  const dispatch = useDispatch()
  const orderItem = useSelector(
    (state) => state.orderItemReducer.orderItem.data,
  )
  const loading = useSelector(
    (state) => state.orderItemReducer.orderItem.loading,
  )
  const [posts, setPosts] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    dispatch(orderReq())
  }, [dispatch])

  useEffect(() => {
    setPosts(orderItem && orderItem.content)
  }, [orderItem])

  useEffect(() => {
    setTotalPages(orderItem && orderItem.totalPages)
  }, [])

  return (
    <div className="myPage">
      <OrderItem posts={posts} loading={loading} />
      <Pagination totalPosts={totalPages} />
    </div>
  )
}

export default MyPage
