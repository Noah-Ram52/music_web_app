import { useState } from "react";
import ModalLoginSignup from "../ModalLoginSignup/ModalLoginSignup";

function UserSignup({ onClose, isMenuOpen, onSwitchToLogin, onSignup}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    onSignup(name, email, password);  // Call the passed-in signup function
    // Simulate signup (or call a real API later)
    console.log("Signup submitted:", { name, email, password });

    // For now, you can close or redirect like:
    onClose && onClose();
  };

  const userSignupHeader = "Sign up Here";
  const userSignupName = "Create Username";
  const userSignupEmail = "Create Email";
  const userSignupPassword = "Create Password";
  const userSignupConfirmPassword = "Confirm Password";
  const userSignupButton = "Sign Up";
  const userSignupSwitchLogin = "Log In Here";

  return (
      <ModalLoginSignup
        userSignupHeader={userSignupHeader}
        userSignupName={userSignupName}
        userSignupEmail={userSignupEmail}
        userSignupPassword={userSignupPassword}
        userSignupConfirmPassword={userSignupConfirmPassword}
        userSignupButton={userSignupButton}
        userSignupSwitchLogin={userSignupSwitchLogin}
        isMenuOpen={isMenuOpen}
        onClose={onClose}
        onSwitch={onSwitchToLogin}
        // Pass signup fields too
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        signupError={error}
        onSubmit={handleSubmit}
      />
  );
}

export default UserSignup;
