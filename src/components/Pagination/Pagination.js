import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { orderReq } from '../../modules/actions/order'
import './Pagination.css'

function Pagination({ totalPosts }) {
  const dispatch = useDispatch()
  const pageNumber = []
  for (let i = 1; i <= totalPosts; i++) {
    pageNumber.push(i)
  }

  const numRef = useRef()

  const changePage = (id) => {
    dispatch(orderReq(id - 1))

    for (let i = 0; i < numRef.current.childNodes.length; i++) {
      numRef.current.children[i].classList.remove('show')
    }
    switch (id - 1) {
      case id - 1:
        numRef.current.children[id - 1].classList.add('show')
        break
      default:
        return
    }
  }

  return (
    <ul className="pagination" ref={numRef}>
      {pageNumber.map((num) => {
        return (
          <li className="page__item" key={num} onClick={() => changePage(num)}>
            <span className="page__num">{num}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagination
