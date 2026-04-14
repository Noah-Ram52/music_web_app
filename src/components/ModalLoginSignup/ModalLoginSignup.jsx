// #CSS 
import "./ModalLoginSignup.css"

// #React
import { useEffect, useRef, useCallback } from "react";

// #Images
import CloseModal from "../../assets/images/close.png"

function ModalLoginSignup ({
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
}) {

    const menuMusicRef = useRef(null);

    const handleClose = useCallback(() => {
        console.log("Login/Sign up Modal Closes");
        if (!isMenuOpen) return;
        onClose && onClose();
      }, [isMenuOpen, onClose]);

       // Close the menu when clicking outside of it
       useEffect(() => {
         function handleMenuMusicClickOutside(e) {
           if (
             e.type === "mousedown" &&
             menuMusicRef.current &&
             !menuMusicRef.current.contains(e.target)
            ) {
              handleClose();
            }
    
           if (e.type === "keydown" && e.key === "Escape") {

             handleClose();
           }
         }
         console.log("Login/Sign up Modal Opens");
         document.addEventListener("mousedown", handleMenuMusicClickOutside);
         document.addEventListener("keydown", handleMenuMusicClickOutside);
     
         return () => {
          document.removeEventListener("mousedown", handleMenuMusicClickOutside);
           document.removeEventListener("keydown", handleMenuMusicClickOutside);
         };
       }, [handleClose]);

    return (
      <div className="modal-login-signup">
        {/* your login/signup content here */}
        <div className="modal-login-signup__modal" ref={menuMusicRef}>
          <div className="modal-login-signup__modal_size">
            <div className="modal-login-signup__header">
             <div className="modal-login-signup__title">{userLoginHeader || userSignupHeader}</div>
               <img className="modal-login-signup__close" 
                 src={CloseModal} 
                 alt="close modal" 
                 onClick={handleClose}
               />
            </div>
              <div className="modal-login-signup__email_password">
                 {/* Signup only: name field */}
                {name !== undefined && (
                  <div className="modal-login-signup__email_passsword_box">
                    <div className="modal-login-signup__email_password_text">
                   {userSignupName}
                  </div>
                  <input
                    type="text"
                    className="modal-login-signup__input"
                    value={name || ""}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your Username"
                  />
                </div>
              )}
                <div className="modal-login-signup__email_passsword_box">
                
                  <div className="modal-login-signup__email_password_text">{userLoginEmail || userSignupEmail}</div>
                   <input
                   type="email"
                   className="modal-login-signup__input"
                   placeholder="Enter your email"
                   value={email || ""}           // 🟢 CONTROLLED
                  onChange={(e) => setEmail(e.target.value)}  // 🟢 CONTROLLED
                  />
               </div>
               <div className="modal-login-signup__email_passsword_box">
                 <div className="modal-login-signup__email_password_text">{userLoginPassword || userSignupPassword}</div>
                     <input
                       type="password"
                       className="modal-login-signup__input"
                       placeholder="Enter your password"
                        value={password || ""}           // 🟢 ADD THIS
                            onChange={(e) => setPassword(e.target.value)}  // 🟢 ADD THIS
                      />
                </div>
                
                  {userSignupConfirmPassword && (
                    <div className="modal-login-signup__email_password_box">
                        <div className="modal-login-signup__email_password_text">
                          {userSignupConfirmPassword}
                        </div>
                          <input
                            type="password"
                            className="modal-login-signup__input"
                            placeholder="Confirm your password"
                            value={confirmPassword || ""}                    // ✅ add this
                            onChange={(e) => 
                              setConfirmPassword(e.target.value)} // ✅ add this
                          />
                    </div>
                  )}
             </div>
                {(loginError || signupError) && (
                  <div className="modal-login-signup__error">
                    {loginError || signupError}
                     </div>
              )}
           <div className={`modal-login-signup__footer 
            ${userLoginButton ? 'modal-login-signup__footer--login' : 'modal-login-signup__footer--signup'}`}>
              <button 
                className="modal-login-signup__login_password_button" 
                type="submit"
                >
                {userLoginButton || userSignupButton}
              </button>
              <button className="modal-login-signup__login_password_button" onClick={onSwitch}>
                {userLoginSwitchSignup || userSignupSwitchLogin}
                </button>
            </div>
          </div>
        </div>
      </div>
    );
}


export default ModalLoginSignup