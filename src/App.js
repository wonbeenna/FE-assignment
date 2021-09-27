import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Logout from './pages/Logout'
import MyPage from './pages/MyPage'
import Service from './pages/Service'
import SignUp from './pages/SignUp'
import Order from './pages/Order'
import Header from './components/Header/Header'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Service} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/mypage/order/:id/" component={Order} />
        <Route path="/mypage/order" component={MyPage} />
      </Switch>
    </Router>
  )
}

export default App
