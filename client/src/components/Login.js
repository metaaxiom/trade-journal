import React from "react";
import axios from "axios";
import "../styles/login.scss";

export default function Login(props) {
  const { saveLoginToken } = props;

  const [passwordInput, setPasswordInput] = React.useState("");
  const [loginSubmitMsg, setLoginSubmitMsg] = React.useState("");
  const [loginSubmitMsgColor, setLoginSubmitMsgColor] = React.useState("green");

  const handlePasswordInputChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();

    try {
      let response = await axios.post("/login", { passwordInput });

      setLoginSubmitMsg(response.data.resultMsg);

      if (response.status === 200 && response.data.loginSuccess) {
        setLoginSubmitMsgColor("green");
        saveLoginToken(response.data.account);
        return;
      }
      setLoginSubmitMsgColor("red");
    } catch (error) {
      let { response } = error;
      setLoginSubmitMsg(response.data.resultMsg);
      setLoginSubmitMsgColor("red");
    }
  };

  return (
    <main id="login-container">
      <div id="login-logo">trade_journal</div>
      <div id="login">
        <h1 id="login__heading">
          <i className="fa-solid fa-lock"></i>
          <span>Login</span>
        </h1>

        <p>Please enter the password that was provided to you.</p>

        <form onSubmit={handleLoginFormSubmit}>
          <label htmlFor="login__password" id="login__password-label">
            Password
          </label>
          <input
            type="password"
            id="login__password"
            className="textbox"
            value={passwordInput}
            onChange={handlePasswordInputChange}
          />
          <button id="login__submit-btn" className="btn btn--blue">
            Login
          </button>
          <div
            id="login__submit-msg"
            className={`text--accent-${loginSubmitMsgColor}`}
          >
            {loginSubmitMsg}
          </div>
        </form>
      </div>
    </main>
  );
}
