import Logo from "../img/Logo.png"
import PropTypes from "prop-types"

const LogoComponent = (props) => {
  return (
    <div className="logo-wrapper">
      <img src={Logo} alt="Logo" />
      <p className="logo-text">{props.text}</p>
    </div>
  )
}
LogoComponent.propTypes = {
  text: PropTypes.string.isRequired
}
export default LogoComponent
