// #CSS
import "./MenuMusicArtist.css";

// #Components
import ModalMenuMusic from "../ModalMenuMusic/ModalMenuMusic";

function MenuMusicArtist({ isMenuOpen, onClose, title }) {
  return (
    <div className="menu-music-artist">
      <ModalMenuMusic isMenuOpen={isMenuOpen} onClose={onClose} title={title} />
    </div>
  );
}

export default MenuMusicArtist;
