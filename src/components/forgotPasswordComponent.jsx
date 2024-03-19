import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

const ForgotPasswordComponent = () => {
  const [values, setValues] = useState({ email: "" })
  const [errors, setErrors] = useState({ email: "" })
  const navigate = useNavigate()

  const setEmail = (e) => {
    setValues((values) => ({ ...values, email: e.target.value }))
    if (!isEmail(e.target.value)) {
      setErrors((values) => ({ ...values, email: "You have entered invalid email." }))
    } else {
      setErrors((values) => ({ ...values, email: "" }))
    }
  }

  const confirmHandler = () => {
    if (errors.email) return
    axios.post("https://auth-qa.qencode.com/v1/auth/password-reset", {
      email: values.email
    })
      .then(res => {
        const response = res.data
        // ToDo: (response.detail:"Please check your email to complete the password reset)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
        navigate("/resetPassword")
        // ToDo: move to response
        alert("Please check your email to complete the password reset")
      })
  }

  return (
    <div>
      <input className="grey-border input-button"
        placeholder={"Enter your email"}
        value={values.email}
        onChange={setEmail}
      />
      {values.email && errors.email}
      <div className="login-button send-betton" onClick={confirmHandler}>
        Send
      </div>
      <div className="grey-border cancel-button" onClick={() => navigate("/")}>
        Cancel
      </div>
    </div>
  )
}

export default ForgotPasswordComponent
