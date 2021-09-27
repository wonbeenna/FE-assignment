import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './Service.css'
import serviceImg from '../images/serviceImg.png'

function Service() {
  const history = useHistory()
  const { loginStatus } = useSelector(
    (state) => state.loginStatusReducer.status,
  )

  const orderHandler = () => {
    if (loginStatus) {
      alert('주문성공')
    } else {
      alert('로그인을 해주세요.')
      history.push('/sign-up')
    }
  }

  return (
    <div className="service">
      <div className="service__container">
        <div className="service__contents">
          <img src={serviceImg} alt="서비스이미지" />
        </div>
        <div className="service__btn">
          <button onClick={orderHandler}>주문 하기</button>
        </div>
      </div>
    </div>
  )
}

export default Service
