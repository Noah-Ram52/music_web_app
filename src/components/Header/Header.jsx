// #CSS
import "./Header.css";

// #React-Router
import { Link } from "react-router-dom";

function Header({ onMusicToggle, isLoggedIn, user, onLogout }) {

  return (
    <header>
      <div className="header">
        <nav className="header__inner">
          <div className="header__main_displays">
            <button className="header__buttons">
              <Link to="/" className="header__buttons_home">Home</Link>
            </button>
            <button
              className="header__buttons"
              onClick={() => onMusicToggle && onMusicToggle("Music Songs")}
            >
              Music
            </button>
            <button
              className="header__buttons"
              onClick={() => onMusicToggle && onMusicToggle("Music Artist")}
            >
              Artist
            </button>
            <button className="header__buttons">About</button>
          </div>
          <div className="header__login-bar">
             {isLoggedIn ? (
              <>
              <Link to="/profile" className="header__user">
              <button className="header__login">            
                  {user?.name || user?.email}
                </button>
                </Link>
              </>
            ) : (
              <button
                className="header__login"
                onClick={() => onMusicToggle && onMusicToggle("Login or Sign Up")}
              >
                Login or Sign Up
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
