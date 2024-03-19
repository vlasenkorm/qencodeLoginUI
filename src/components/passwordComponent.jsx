import background from "../img/Union.png"
import PropTypes from "prop-types"

const PasswordComponent = (props) => {
  return (
      <>
        <input className="grey-border input-button password-button"
          style={{ backgroundImage: `url(${background})` }}
          placeholder={"Password"}
          value={props.value}
          onChange={props.setPassword}
        />
        {props.value && props.error}
        </>
  )
}

PasswordComponent.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired
}
export default PasswordComponent
