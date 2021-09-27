import instance from '../../api'
import { LOGIN_STATUS, LOGOUT_STATUS } from './actions'

export const goToHome = (history) => () => {
  history.push('/')
}

export const signUpReq =
  (email, password, mobile, history) => async (dispatch) => {
    await instance
      .post('/sign-up', {
        email: email,
        password: password,
        mobile: mobile,
      })
      .then((res) => {
        const { data } = res
        dispatch({ type: LOGIN_STATUS, token: data.token, loginStatus: true })
        dispatch(goToHome(history))
      })
      .catch((err) => {
        throw err
      })
  }

export const signInReq = (email, password, history) => async (dispatch) => {
  await instance
    .post('/login', {
      email: email,
      password: password,
    })
    .then((res) => {
      const { data } = res
      dispatch({ type: LOGIN_STATUS, token: data.token, loginStatus: true })
      dispatch(goToHome(history))
    })
    .catch((err) => {
      const status = err.response.status
      if (status && status === 401) {
        alert('비밀번호를 확인해 주세요.')
      } else {
        throw err
      }
    })
}

export const signOutReq = (history) => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: LOGOUT_STATUS, token: '', loginStatus: false })
    dispatch(goToHome(history))
  }, 2000)
}
