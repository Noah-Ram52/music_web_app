// #React
import { useRef, useEffect } from "react";

// #Images
import CloseModal from "../../assets/images/close.png";

function ModalWithForm({
  isOpen,
  onClose,
  title,
  submitText,
  switchText,
  onSwitch,
  isLoading = false,
  children,
  error,
  onSubmit,
}) {
  const modalRef = useRef(null);

  // Close on click outside or Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEvent = (e) => {
      if (e.type === "mousedown" && modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
      if (e.type === "keydown" && e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("keydown", handleEvent);
    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("keydown", handleEvent);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-login-signup">
      <div className="modal-login-signup__modal" ref={modalRef}>
        <div className="modal-login-signup__modal-inner">
          <form onSubmit={onSubmit}>
          <div className="modal-login-signup__header">
            <div className="modal-login-signup__title">{title}</div>
            <img
              className="modal-login-signup__close"
              src={CloseModal}
              alt="close modal"
              onClick={onClose}
            />
          </div>

          <div className="modal-login-signup__email_password">{children}</div>

          {error && <div className="modal-login-signup__error">{error}</div>}

          <div className="modal-login-signup__footer">
            <button
              className="modal-login-signup__login_password_button"
              type="submit"
              disabled={isLoading}
            >
              {submitText}
            </button>
            {onSwitch && (
              <button className="modal-login-signup__login_password_button" onClick={onSwitch}>
                {switchText}
              </button>
            )}
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;