// #CSS
import "./MusicGenreSongsList.css";

// #Components
import ModalMenuMusic from "../ModalMenuMusic/ModalMenuMusic";

function MusicGenreSongsList({ isMenuOpen, onClose, title }) {
  return (
    <div className="music-genre-songs-list">
    <ModalMenuMusic isMenuOpen={isMenuOpen} onClose={onClose} title={title}>
    </ModalMenuMusic>
    </div>
  );
}

export default MusicGenreSongsList;
