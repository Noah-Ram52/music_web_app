// #CSS
import "./ModalMenuMusic.css";

// #React
import { useEffect, useRef, useCallback } from "react";

// #React Router
import { Link } from "react-router-dom";

function ModalMenuMusic({ 
  isMenuOpen, 
  onClose, 
  title, 
  className, 
  songsClassicalGenre, 
  songsJazzGenre, 
  songsNerdcoreGenre, 
  songsClassicalArtist, 
  songsJazzArtist, 
  songsNerdcoreArtist 
}) {
  
  const menuMusicRef = useRef(null);

  // useCallback to memoize the handleClose function, preventing unnecessary re-renders
  const handleClose = useCallback(() => {
    console.log("Music Genre Menu Closes");
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

    console.log("Music Genre Menu Opens");
    document.addEventListener("mousedown", handleMenuMusicClickOutside);
    document.addEventListener("keydown", handleMenuMusicClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleMenuMusicClickOutside);
      document.removeEventListener("keydown", handleMenuMusicClickOutside);
    };
  }, [handleClose]);

  // Show SONGS only when title === "Music Songs"
  const showSongs = title === "Music Songs";
  // Show ARTISTS only when title === "Music Artist"  
  const showArtists = title === "Music Artist";

  return (
    <div
      className={`menu-music-genre ${isMenuOpen ? "menu-music-genre--open" : ""} ${className || ""}`}
    >
      <div className="menu-music-genre__panel" ref={menuMusicRef}>
        <h2 className="menu-music-genre__title">{title}</h2>
        <ul className="menu-music-genre__list">
          {/* Classical */}
          <li className="menu-music-genre__item">
            {showSongs && (
              <Link 
                to="/classical-music-songs"
                className="menu-music-genre__button_items"
                onClick={handleClose}
              >
                {songsClassicalGenre || "Classical"}
              </Link>
            )}
            {showArtists && (
              <Link 
                to="/classical-music-artist"
                className="menu-music-genre__button_items"
                onClick={handleClose}
              >
                {songsClassicalArtist || "Classical Artist"}
              </Link>
            )}
          </li>

          {/* Jazz */}
          <li className="menu-music-genre__item">
            {showSongs && (
              <Link 
                to="/jazz-music-songs"
                className="menu-music-genre__button_items"
                onClick={handleClose}
              >
                {songsJazzGenre || "Jazz"}
              </Link>
            )}
            {showArtists && (
              <Link 
                to="/jazz-music-artist"
                className="menu-music-genre__button_items"
                onClick={handleClose}
              >
                {songsJazzArtist || "Jazz Artist"}
              </Link>
            )}
          </li>

          {/* Nerdcore */}
          <li className="menu-music-genre__item">
            {showSongs && (
              <Link 
                to="/nerdcore-music-songs"
                className="menu-music-genre__button_items"
                onClick={handleClose}
              >
                {songsNerdcoreGenre || "Nerdcore"}
              </Link>
            )}
            {showArtists && (
              <Link 
                to="/nerdcore-music-artist"
                className="menu-music-genre__button_items"
                onClick={handleClose}
              >
                {songsNerdcoreArtist || "Nerdcore Artist"}
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModalMenuMusic;
