// Write your code here
import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class LoginApp extends Component {
  state = {check: false}

  log = () => {
    this.setState(prevState => ({check: !prevState.check}))
  }

  render() {
    const {check} = this.state
    return (
      <div className="main">
        <Message login={check} />
        {!check ? <Login btnin={this.log} /> : <Logout btnout={this.log} />}
      </div>
    )
  }
}
export default LoginApp
