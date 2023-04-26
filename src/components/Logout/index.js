// Write your code here
import './index.css'

const Logout = props => {
  const {buttonTexting, click} = props
  return (
    <button className="button" type="button" onClick={click}>
      {buttonTexting}
    </button>
  )
}

export default Logout
