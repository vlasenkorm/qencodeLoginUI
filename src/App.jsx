import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createContext } from "react"
import "./index.css"
import "./fonts/BasisGrotesquePro-Regular.ttf"
import Login from "./pages/loginPage"
import ForgotPassword from "./pages/forgotPasswordPage"
import ResetPassword from "./pages/resetPasswordPage"

export const ThemeContext = createContext(null)

const App = () => {
  return (<BrowserRouter>
    <div className="menu flex-center-center">
      <div className="wrapper">
        <ThemeContext.Provider value={{ name: "user" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route path="resetPassword" element={<ResetPassword />} />
          </Routes>
        </ThemeContext.Provider>
      </div>
    </div>
  </BrowserRouter>
  )
}
export default App
