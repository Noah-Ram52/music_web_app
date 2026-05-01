import "./Header.css";
import { Link } from "react-router-dom";

function Header({ onMusicToggle, isLoggedIn, user }) {
  return (
    <header className="header">
      <nav className="header__inner">
        <div className="header__main-displays">
          <Link to="/" className="header__buttons header__buttons_home">
            Home
          </Link>
          <button
            className="header__buttons"
            onClick={() => onMusicToggle && onMusicToggle("Music Songs")}
            type="button"
          >
            Music
          </button>
          <button
            className="header__buttons"
            onClick={() => onMusicToggle && onMusicToggle("Music Artist")}
            type="button"
          >
            About Artist Info
          </button>
        </div>
        <div className="header__login-bar">
          {isLoggedIn ? (
            <Link to="/profile" className="header__login header__user">
              {user?.name || user?.email}
            </Link>
          ) : (
            <button
              className="header__login"
              onClick={() => onMusicToggle && onMusicToggle("Login or Sign Up")}
              type="button"
            >
              Login or Sign Up
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;