// Write your code here
import './index.css'

const Message = props => {
  const {login} = props
  const msg = login ? 'Welcome User' : 'Please Login'

  return <h1 className="hh">{msg}</h1>
}

export default Message
