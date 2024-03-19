import Google from "../img/google.png"
import Github from "../img/gitHub.png"

const SSOComponent = () => {
  return (
    <>
      <div className="button-wrapper">
        <div className="styled-button grey-border flex-center-center">
          <img className="ssoLogo" src={Google} alt="Google" />Google
        </div>
        <div className="styled-button grey-border flex-center-center">
          <img className="ssoLogo" src={Github} alt="Github" />Github
        </div>
      </div>
      <div className="divider-wrapper">
        <p className="divider">OR</p>
      </div>
    </>
  )
}

export default SSOComponent
