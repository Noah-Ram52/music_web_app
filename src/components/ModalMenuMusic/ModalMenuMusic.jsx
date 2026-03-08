// #CSS
import "./ModalMenuMusic.css";

// #React
import { useEffect, useRef, useCallback } from "react";
function ModalMenuMusic({ isMenuOpen, onClose, title, className }) {
  const menuMusicRef = useRef(null);

  const handleClose = useCallback(() => {
    console.log("Music Genre Menu Closes:", handleClose);
    if (!isMenuOpen) return; // Bail early if already closed
    onClose && onClose(); // Single place to control closing
  }, [isMenuOpen, onClose]);

  // Close the menu when clicking outside of it
  useEffect(() => {
    function handleMenuMusicClickOutside(e) {
      // Close on click outside the menu
      if (
        e.type === "mousedown" &&
        menuMusicRef.current &&
        !menuMusicRef.current.contains(e.target)
      ) {
        handleClose();
      }

      // Close only on Escape key
      if (e.type === "keydown" && e.key === "Escape") {
        handleClose();
      }
    }

    // Add event listener to opens the menu
    console.log("Music Genre Menu Opens:", handleMenuMusicClickOutside);
    document.addEventListener("mousedown", handleMenuMusicClickOutside);
    document.addEventListener("keydown", handleMenuMusicClickOutside);

    return () => {
      // # Event listeners closing the menu
      // ## Mousedown = click off closes menu
      // ### Keydown = Hitting escape close menu
      document.removeEventListener("mousedown", handleMenuMusicClickOutside);
      document.removeEventListener("keydown", handleMenuMusicClickOutside);
    };
  }, [handleClose]); // Depends on handleClose, not onClose directly

  // Event listener closes on Escape

  return (
    <div
      className={`menu-music-genre ${isMenuOpen ? "menu-music-genre--open" : ""} ${className || ""}`}
    >
      <div className="menu-music-genre__panel" ref={menuMusicRef}>
        <h2 className="menu-music-genre__title">{title}</h2>
        <ul className="menu-music-genre__list">
          <button className="menu-music-genre__button_items">
            <li className="menu-music-genre__item">Classical</li>
          </button>
          <button className="menu-music-genre__button_items">
            <li className="menu-music-genre__item">Jazz</li>
          </button>
          <button className="menu-music-genre__button_items">
            <li className="menu-music-genre__item">Alternative Rock</li>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default ModalMenuMusic;
