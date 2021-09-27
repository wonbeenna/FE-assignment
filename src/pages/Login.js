import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { signInReq } from '../modules/actions/sign'
import './Login.css'
import { ValidationEmail } from '../util/ValidationCheck'

function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailValid, setEmailValid] = useState(true)

  const onChangeHandler = (event, type) => {
    if (type === 'Email') {
      setEmail(event.target.value)
      if (event.target.value.length === 0) {
        setEmailValid(true)
      } else if (ValidationEmail(event.target.value)) {
        setEmailValid(true)
      } else {
        setEmailValid(false)
      }
    }
    if (type === 'Password') {
      setPassword(event.target.value)
    }
  }

  const handleSignIn = () => {
    dispatch(signInReq(email, password, history))
  }

  return (
    <div className="signIn">
      <div className="signIn__contents">
        <input
          className={
            emailValid ? 'signIn__inputEmail' : 'signIn__inputEmail__inValid'
          }
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            onChangeHandler(e, 'Email')
          }}
        />

        <input
          className="signIn__inputPassword"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            onChangeHandler(e, 'Password')
          }}
        />

        <button className="signIn__loginBtn" onClick={handleSignIn}>
          로그인
        </button>
      </div>
    </div>
  )
}

export default Login
