// Write your code here

import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {loggedIn: true}

  functionLogin = () => {
    this.setState({loggedIn: false})
  }

  functionLogout = () => {
    this.setState({loggedIn: true})
  }

  render() {
    const {loggedIn} = this.state
    let userIn

    if (loggedIn === true) {
      userIn = (
        <div className="button-styling">
          <Message text="Please Login" />
          <Login buttonText="Login" click={this.functionLogin} />
        </div>
      )
    } else {
      userIn = (
        <div className="button-styling">
          <Message text="Welcome User" />
          <Logout buttonTexting="Logout" click={this.functionLogout} />
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="container">{userIn}</div>
      </div>
    )
  }
}

export default Home
