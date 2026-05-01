// ModalLoginSignup.jsx

import React, { useCallback } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

// #CSS
import "./ModalLoginSignup.css";

function ModalLoginSignup({
  onClose,
  isMenuOpen,
  userLoginHeader,
  userLoginEmail,
  userLoginPassword,
  userLoginButton,
  userLoginSwitchSignup,
  userSignupHeader,
  userSignupName,
  userSignupEmail,
  userSignupPassword,
  userSignupConfirmPassword,
  userSignupButton,
  userSignupSwitchLogin,
  onSwitch,
  email,
  setEmail,
  password,
  setPassword,
  loginError,
  name,
  setName,
  confirmPassword,
  setConfirmPassword,
  signupError,
  onSubmit,
}) {
  const handleClose = useCallback(() => {
    console.log("Login/Sign up Modal Closes");
    if (!isMenuOpen) return;
    onClose && onClose();
  }, [isMenuOpen, onClose]);

  const isSignup = name !== undefined;

  const title = isSignup ? userSignupHeader : userLoginHeader;
  const submitText = isSignup ? userSignupButton : userLoginButton;
  const switchText = isSignup ? userSignupSwitchLogin : userLoginSwitchSignup;
  const error = isSignup ? signupError : loginError;

  return (
    <ModalWithForm
      isOpen={isMenuOpen}
      onClose={handleClose}
      title={title}
      submitText={submitText}
      switchText={switchText}
      onSwitch={onSwitch}
      error={error}
      onSubmit={onSubmit}
    >
      {/* Signup only: name field */}
      {isSignup && (
        <div className="modal-login-signup__email_passsword_box">
          <div className="modal-login-signup__email_password_text">{userSignupName}</div>
          <input
            type="text"
            className="modal-login-signup__input"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Username"
          />
        </div>
      )}

      {/* Email */}
      <div className="modal-login-signup__email_passsword_box">
        <div className="modal-login-signup__email_password_text">
          {isSignup ? userSignupEmail : userLoginEmail}
        </div>
        <input
          type="email"
          className="modal-login-signup__input"
          placeholder="Enter your email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password */}
      <div className="modal-login-signup__email_passsword_box">
        <div className="modal-login-signup__email_password_text">
          {isSignup ? userSignupPassword : userLoginPassword}
        </div>
        <input
          type="password"
          className="modal-login-signup__input"
          placeholder="Enter your password"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Confirm password (signup only) */}
      {isSignup && (
        <div className="modal-login-signup__email_password_box">
          <div className="modal-login-signup__email_password_text">{userSignupConfirmPassword}</div>
          <input
            type="password"
            className="modal-login-signup__input"
            placeholder="Confirm your password"
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      )}
    </ModalWithForm>
  );
}

export default ModalLoginSignup;