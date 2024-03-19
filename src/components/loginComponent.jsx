import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { ThemeContext } from "../App"
import PasswordComponent from "./passwordComponent"

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

const LoginComponent = () => {
  const [values, setValues] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({ email: "", password: "" })
  const store = useContext(ThemeContext)

  const setEmail = (e) => {
    setValues((values) => ({ ...values, email: e.target.value }))
    if (!isEmail(e.target.value)) {
      setErrors((values) => ({ ...values, email: "You have entered invalid email." }))
    } else {
      setErrors((values) => ({ ...values, email: "" }))
    }
  }

  const setPassword = (e) => {
    setValues((values) => ({ ...values, password: e.target.value }))
    if (e.target.value.length < 8) {
      setErrors((values) => ({ ...values, password: "Password should be at least 8 characters long." }))
    } else {
      setErrors((values) => ({ ...values, password: "" }))
    }
  }

  const loginHandler = () => {
    if (errors.email || errors.password) return
    axios.post("https://auth-qa.qencode.com/v1/auth/login", {
      email: values.email,
      password: values.password
    })
      .then(res => {
        const response = res.data
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
        // ToDo: move to response
        store.access_token = "string"
        store.refresh_token = "string"
      })
  }

  const isInsertEmail = !errors.email && values.email

  return (
    <div className="login-wrapper">
      <input className="grey-border input-button"
        placeholder={"Work email"}
        value={values.email}
        onChange={setEmail}
      />
      {values.email && errors.email}
      {isInsertEmail && <>
        <PasswordComponent
          value={values.password}
          error={errors.password}
          setPassword={setPassword}
        />
        <Link className="forgotPassword" to="forgotPassword">Forgot your password?</Link>
      </>}
      <div className="login-button" onClick={loginHandler}>
        Log in to your account
      </div>
      <p className="sign-up-text">Is your company new to Qencode? <a href="">Sign up</a></p>
    </div>
  )
}

export default LoginComponent
