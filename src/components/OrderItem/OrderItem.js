import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import './OrderItem.css'

function OrderItem({ posts, loading }) {
  return (
    <div className="orderItem">
      {loading ? (
        <Loading />
      ) : (
        <ul className="orderItem__container">
          {posts &&
            posts.map((el) => {
              return (
                <li className="orderItem__items" key={el.id}>
                  <Link
                    to={{
                      pathname: `/mypage/order/${el.id}`,
                    }}
                    style={{ textDecoration: 'none' }}>
                    <span className="orderItem__id">{el.id}</span>
                    <span className="orderItem__name">{el.itemName}</span>
                  </Link>
                </li>
              )
            })}
        </ul>
      )}
    </div>
  )
}

export default OrderItem
