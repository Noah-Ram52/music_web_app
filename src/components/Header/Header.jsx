// #CSS
import "./Header.css";

function Header({ onMusicToggle }) {
  return (
    <header>
      <div className="header">
        <nav className="header__inner">
          <div className="header__main_displays">
            <button className="header__buttons">Home</button>
            <button className="header__buttons" onClick={() => onMusicToggle()}>
              Music
            </button>
            <button className="header__buttons">Artist</button>
            <button className="header__buttons">About</button>
          </div>

          <div className="header__login-bar">
            <button className="header__login">Login or Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
