import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import './Header.css'
import { signOutReq } from '../../modules/actions/sign'

function Header() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { loginStatus } = useSelector(
    (state) => state.loginStatusReducer.status,
  )

  const logOutHandler = () => {
    dispatch(signOutReq(history))
  }

  return (
    <div className="header">
      <div className="headerLogo">
        <a className="headerLogo__img" href="/"></a>
      </div>
      {loginStatus ? (
        <div className="headerNav">
          <NavLink exact to="/">
            서비스
          </NavLink>
          <NavLink to="/mypage/order">마이페이지</NavLink>
          <NavLink to="/logout" onClick={logOutHandler}>
            로그아웃
          </NavLink>
        </div>
      ) : (
        <div className="headerNav">
          <NavLink exact to="/">
            서비스
          </NavLink>
          <NavLink to="/sign-up">회원가입</NavLink>
          <NavLink to="/login">로그인</NavLink>
        </div>
      )}
    </div>
  )
}

export default Header
