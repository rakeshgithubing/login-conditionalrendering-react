import './index.css'

const Logout = props => {
  const {buttonText, click} = props
  return (
    <button className="button" type="button" onClick={click}>
      {buttonText}
    </button>
  )
}

export default Logout
