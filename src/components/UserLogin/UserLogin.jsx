import { useState } from "react";
import ModalLoginSignup from "../ModalLoginSignup/ModalLoginSignup";

function UserLogin({ onClose, isMenuOpen, onSwitchToSignup, onLogin, loginError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email, password);
    }
  };

  if (onLogin) {
    const userLoginHeader = "Enter Log in";
    const userLoginName = "Username"
    const userLoginEmail = "Email";
    const userLoginPassword = "Password";
    const userLoginButton = "Log in";
    const userLoginSwitchSignup = "Sign Up Here";

    return (
        <ModalLoginSignup
          userLoginHeader={userLoginHeader}
          userLoginName={userLoginName}
          userLoginEmail={userLoginEmail}
          userLoginPassword={userLoginPassword}
          userLoginButton={userLoginButton}
          userLoginSwitchSignup={userLoginSwitchSignup}
          isMenuOpen={isMenuOpen}
          onClose={onClose}
          onSwitch={onSwitchToSignup}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          loginError={loginError}
          onSubmit={handleSubmit}
        />
    );
  }

  return null;
}

export default UserLogin;
