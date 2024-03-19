import LogoComponent from "../components/logoComponent"
import SSOComponent from "../components/ssoComponent"
import LoginComponent from "../components/loginComponent"

const LoginPage = () => {
  return (<>
    <LogoComponent text={"Log in to your account"} />
    <SSOComponent />
    <LoginComponent />
  </>
  )
}

export default LoginPage
