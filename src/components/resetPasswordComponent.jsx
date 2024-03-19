import { useState, useContext } from "react"
import axios from "axios"
import { ThemeContext } from "../App"
import PasswordComponent from "./passwordComponent"

const ResetPasswordComponent = () => {
  const [values, setValues] = useState({ password: "", confirmPassword: "" })
  const [errors, setErrors] = useState({ password: "", confirmPassword: "" })
  const store = useContext(ThemeContext)

  const setPassword = (e) => {
    setValues((values) => ({ ...values, password: e.target.value }))
    if (e.target.value.length < 8) {
      setErrors((values) => ({ ...values, password: "Password should be at least 8 characters long." }))
    } else {
      setErrors((values) => ({ ...values, password: "" }))
    }
  }

  const setConfirmPassword = (e) => {
    setValues((values) => ({ ...values, confirmPassword: e.target.value }))
    if (e.target.value !== values.password) {
      setErrors((values) => ({ ...values, confirmPassword: "Password should be same." }))
    } else {
      setErrors((values) => ({ ...values, confirmPassword: "" }))
    }
  }

  const loginHandler = () => {
    if (errors.email || errors.password) return
    axios.post("https://auth-qa.qencode.com/v1/auth/password-set", {
      token: store.access_token,
      secret: store.refresh_token,
      password: values.password
    })
      .then(res => {
        const response = res.data
        // ToDo: response.detail
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
        // ToDo: move to response
        alert("Password reset successfully")
      })
  }

  return (
    <div>
      <div className="reset-lable">Password</div>
      <PasswordComponent
          value={values.password}
          error={errors.password}
          setPassword={setPassword}
        />
      <div className="reset-lable">Confirm Password</div>
      <PasswordComponent
          value={values.confirmPassword}
          error={errors.confirmPassword}
          setPassword={setConfirmPassword}
        />
      <div className="login-button" onClick={loginHandler}>
        Reset Password
      </div>
    </div>
  )
}

export default ResetPasswordComponent
