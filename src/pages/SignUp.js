import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { signUpReq } from '../modules/actions/sign'
import './SignUp.css'
import {
  ValidationEmail,
  ValidationMobile,
  ValidationPassword,
} from '../util/ValidationCheck'

function SignUp() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCk, setPasswordCk] = useState('')
  const [mobile, setMobile] = useState('')
  const [emailValid, setEmailValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [passwordCkValid, setPasswordCKValid] = useState(true)
  const [mobileValid, setMobileValid] = useState(true)

  const emailInput = useRef()
  const passwordInput = useRef()
  const passwordCkInput = useRef()
  const mobileInput = useRef()

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
    } else if (type === 'Password') {
      setPassword(event.target.value)
      if (event.target.value.length === 0) {
        setPasswordValid(true)
      } else if (ValidationPassword(event.target.value)) {
        setPasswordValid(true)
      } else {
        setPasswordValid(false)
      }
      if (passwordCk === event.target.value) {
        setPasswordCKValid(true)
      }
    } else if (type === 'PasswordCk') {
      setPasswordCk(event.target.value)
      if (event.target.value.length === 0) {
        setPasswordCKValid(true)
      } else if (password === event.target.value) {
        setPasswordCKValid(true)
      } else {
        setPasswordCKValid(false)
      }
    }
    if (type === 'Mobile') {
      setMobile(event.target.value)
      if (event.target.value.length === 0) {
        setMobileValid(true)
      } else if (ValidationMobile(event.target.value)) {
        setMobileValid(true)
      } else {
        setMobileValid(false)
      }
    }
  }

  const handleSignUp = () => {
    if (!emailValid || email.length === 0) {
      setEmailValid(false)
      alert('이메일을 확인해 주세요.')
      emailInput.current.focus()
      return
    }
    if (!passwordValid || password.length === 0) {
      setPasswordValid(false)
      alert('비밀번호는 8~15자 입니다.')
      passwordInput.current.focus()
      return
    }
    if (!passwordCkValid || passwordCk.length === 0) {
      setPasswordCKValid(false)
      alert('비밀번호가 일치하지 않습니다.')
      passwordCkInput.current.focus()
      return
    }
    if (password !== passwordCk) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }
    if (!mobileValid || mobile.length === 0) {
      setMobileValid(false)
      alert('핸드폰번호를 확인해 주세요.')
      mobileInput.current.focus()
      return
    }
    dispatch(signUpReq(email, password, mobile, history))
  }

  return (
    <div className="signUp">
      <div className="signUp__contents">
        <input
          className={
            emailValid ? 'signUp__inputEmail' : 'signUp__inputEmail__inValid'
          }
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            onChangeHandler(e, 'Email')
          }}
          ref={emailInput}
        />

        <input
          className={
            passwordValid
              ? 'signUp__inputPassword'
              : 'signUp__inputPassword__inValid'
          }
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            onChangeHandler(e, 'Password')
          }}
          ref={passwordInput}
        />

        <input
          className={
            passwordCkValid
              ? 'signUp__inputPasswordCheck'
              : 'signUp__inputPasswordCheck__inValid'
          }
          name="passwordCheck"
          type="password"
          placeholder="Password Check"
          onChange={(e) => {
            onChangeHandler(e, 'PasswordCk')
          }}
          ref={passwordCkInput}
        />

        <input
          className={
            mobileValid ? 'signUp__inputMobile' : 'signUp__inputMobile__inValid'
          }
          name="mobile"
          type="mobile"
          placeholder="Mobile"
          onChange={(e) => {
            onChangeHandler(e, 'Mobile')
          }}
          ref={mobileInput}
        />

        <button className="signUp__SignUpBtn" onClick={handleSignUp}>
          가입하기
        </button>
      </div>
    </div>
  )
}

export default SignUp
