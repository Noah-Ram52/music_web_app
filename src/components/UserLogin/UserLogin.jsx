import ModalLoginSignup from "../ModalLoginSignup/ModalLoginSignup";

function UserLogin ({onClose, isMenuOpen}) {

    const userLoginHeader = "Enter Login";
    const userLoginEmail = "Email";
    const userLoginPassword = "Password";
    const userLoginButton = "Login";
    const userLoginSwitchSignup = "Sign Up Here";

return (
    <ModalLoginSignup 
    userLoginHeader={userLoginHeader}
    userLoginEmail={userLoginEmail}
    userLoginPassword={userLoginPassword}
    userLoginButton={userLoginButton}
    userLoginSwitchSignup={userLoginSwitchSignup}
    isMenuOpen={isMenuOpen}
    onClose={onClose}
    />
)
}

export default UserLogin;