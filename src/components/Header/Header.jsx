// #CSS
import "./Header.css";

// #React-Router
import { Link } from "react-router-dom";

function Header({ onMusicToggle, isLoggedIn, user}) {

  return (
    <header className="header">
        <nav className="header__inner">
          <div className="header__main_displays">
            <button className="header__buttons" type="button">
              <Link to="/" className="header__buttons_home">Home</Link>
            </button>
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
              <>
              <Link to="/profile" className="header__user">
              <button className="header__login" type="button">            
                  {user?.name || user?.email}
                </button>
                </Link>
              </>
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
