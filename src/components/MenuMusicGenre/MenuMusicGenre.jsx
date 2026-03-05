import "./MenuMusicGenre.css";

function MenuMusicGenre({ isMenuOpen }) {
  return (
    <div
      className={`menu-music-genre ${isMenuOpen ? "menu-music-genre--open" : ""}`}
    >
      <div className="menu-music-genre__panel">
        <h2 className="menu-music-genre__title">Music Genres</h2>
        <ul className="menu-music-genre__list">
          <button>
            <li className="menu-music-genre__item">Classical</li>
          </button>
          <button>
            <li className="menu-music-genre__item">Jazz</li>
          </button>
          <button>
            <li className="menu-music-genre__item">Alternative Rock</li>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default MenuMusicGenre;
