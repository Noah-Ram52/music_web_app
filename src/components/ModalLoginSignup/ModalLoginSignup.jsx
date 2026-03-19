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
  userLoginSwitchSignup
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
            <div className="modal-login-signup__title">{userLoginHeader}</div>
            <img className="modal-login-signup__close" 
            src={CloseModal} 
            alt="close modal" 
            onClick={handleClose}
            />
            </div>
              <div className="modal-login-signup__email_password">
                <div className="modal-login-signup__email_box">
                  <div className="modal-login-signup__email_password_text">{userLoginEmail}</div>
                  <div>
                    {"\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F"}
                  </div>
               </div>
               <div className="modal-login-signup__email_password_text">{userLoginPassword}</div>
               <div> 
                {"\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F\u005F"}
               </div>

            </div>
            <div className="modal-login-signup__footer">
              <button className="modal-login-signup__login_password_button">{userLoginButton}</button>
              <button className="modal-login-signup__login_password_button">{userLoginSwitchSignup}</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ModalLoginSignup