// Write your code here
import './index.css'

const Logout = props => {
  const {btnout} = props
  return (
    <button onClick={btnout} className="bb">
      Logout
    </button>
  )
}
export default Logout
